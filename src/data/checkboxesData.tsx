import "../pages/All.css";

export const checkboxes = [
  {
    id: 5,
    name: "Checkbox",
    preview: (
      <div className="prev-checkbox-group">
        <label className="prev-checkbox">
          <input type="checkbox" defaultChecked />
          <span>Option 1</span>
        </label>
        <label className="prev-checkbox">
          <input type="checkbox" />
          <span>Option 2</span>
        </label>
        <label className="prev-checkbox">
          <input type="checkbox" />
          <span>Option 3</span>
        </label>
      </div>
    ),
    html: `<div class="Checkbox-group">
    <label class="Checkbox"><input type="checkbox" checked /><span>Option 1</span></label>
    <label class="Checkbox"><input type="checkbox" /><span>Option 2</span></label>
    <label class="Checkbox"><input type="checkbox" /><span>Option 3</span></label>
</div>`,
    css: `.Checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.Checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #a1a1aa;
    cursor: pointer;
}
.Checkbox input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: #7c3aed;
    cursor: pointer;
}`,
  },
  {
    id: 15,
    name: "Checkbox",
    preview: (
      <label className="cb-15">
        <input defaultChecked type="checkbox" />
        <div className="cb-15__mark"></div>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked />
    <div class="Checkbox__mark"></div>
</label>`,
    css: `.Checkbox input {
    display: none;
}
.Checkbox {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 20px;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}
.Checkbox__mark {
    position: relative;
    top: 0;
    left: 0;
    height: 1.3em;
    width: 1.3em;
    background-color: #2196F300;
    border-radius: 0.25em;
    transition: all 0.25s;
}
.Checkbox input:checked~.Checkbox__mark {
    background-color: #2196F3;
}
.Checkbox__mark::after {
    content: "";
    position: absolute;
    transform: rotate(0deg);
    border: 0.1em solid black;
    left: 0;
    top: 0;
    width: 1.05em;
    height: 1.05em;
    border-radius: 0.25em;
    transition: all 0.25s, border-width 0.1s;
}
.Checkbox input:checked~.Checkbox__mark::after {
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border-color: #fff0 white white #fff0;
    border-width: 0 0.15em 0.15em 0;
    border-radius: 0em;
    transform: rotate(45deg);
}`,
  },
  {
    id: 16,
    name: "Checkbox",
    preview: (
      <label className="cb-16">
        <input defaultChecked type="checkbox" />
        <span className="cb-16__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked />
    <span class="Checkbox__box"></span>
</label>`,
    css: `.Checkbox input[type="checkbox"] {
    display: none;
}
.Checkbox__box {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #7c3aed;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
}
.Checkbox__box::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #7c3aed;
    border-radius: 2px;
    opacity: 0;
}
.Checkbox input[type="checkbox"]:checked+.Checkbox__box::after {
    opacity: 1;
}`,
  },
  {
    id: 17,
    name: "Checkbox",
    preview: (
      <label className="cb-17 burger">
        <input defaultChecked type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </label>
    ),
    html: `<label class="Checkbox burger">
    <input type="checkbox" checked />
    <span></span>
    <span></span>
    <span></span>
</label>`,
    css: `.Checkbox.burger {
    position: relative;
    width: 40px;
    height: 30px;
    background: transparent;
    cursor: pointer;
    display: block;
}
.Checkbox.burger input {
    display: none;
}
.Checkbox.burger span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: white;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
}
.Checkbox.burger span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
}
.Checkbox.burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
}
.Checkbox.burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
}
.Checkbox.burger input:checked~span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 5px;
}
.Checkbox.burger input:checked~span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
}
.Checkbox.burger input:checked~span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 28px;
    left: 5px;
}`,
  },
  {
    id: 18,
    name: "Checkbox",
    preview: (
      <div className="cb18-cntr">
        <input
          defaultChecked
          type="checkbox"
          id="cb18-cbx"
          className="cb18-hidden"
        />
        <label htmlFor="cb18-cbx" className="cb18-cbx"></label>
      </div>
    ),
    html: `<div class="Checkbox-cntr">
    <input type="checkbox" id="checkbox-18" class="Checkbox-hidden" checked />
    <label for="checkbox-18" class="Checkbox-box"></label>
</div>`,
    css: `.Checkbox-box {
    position: relative;
    top: 1px;
    width: 27px;
    height: 27px;
    border: 1px solid #c8ccd4;
    border-radius: 3px;
    cursor: pointer;
    display: block;
}
.Checkbox-box:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 8px;
    width: 7px;
    height: 14px;
    opacity: 0;
    transform: rotate(45deg) scale(0);
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transition: all 0.3s ease;
    transition-delay: 0.15s;
}
#checkbox-18:checked~.Checkbox-box {
    border-color: transparent;
    background: #6871f1;
    animation: Checkbox-jelly 0.6s ease;
}
#checkbox-18:checked~.Checkbox-box:after {
    opacity: 1;
    transform: rotate(45deg) scale(1);
}
.Checkbox-cntr {
    position: relative;
}
.Checkbox-hidden {
    display: none !important;
}
@keyframes Checkbox-jelly {
    from {
        transform: scale(1, 1);
    }
    30% {
        transform: scale(1.25, 0.75);
    }
    40% {
        transform: scale(0.75, 1.25);
    }
    50% {
        transform: scale(1.15, 0.85);
    }
    65% {
        transform: scale(0.95, 1.05);
    }
    75% {
        transform: scale(1.05, 0.95);
    }
    to {
        transform: scale(1, 1);
    }
}`,
  },
  {
    id: 19,
    name: "Checkbox",
    preview: (
      <label className="cb19">
        <label htmlFor="cb19-input"></label>
        <input id="cb19-input" type="checkbox" />
        <span className="cb19-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <label for="checkbox-19"></label>
    <input id="checkbox-19" type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.Checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}
.Checkbox label {
    cursor: pointer;
    font-size: 14px;
}
.Checkbox-checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: 2.5px solid #ffffff;
    transition: .2s linear;
    transform: rotate(0deg);
}
.Checkbox input:checked~.Checkbox-checkmark {
    transform: rotate(45deg);
    border: none;
    background-color: transparent;
}
.Checkbox-checkmark:after {
    content: "";
    position: absolute;
    visibility: hidden;
    opacity: 0;
    left: 50%;
    top: 40%;
    width: 10px;
    height: 14px;
    border: 2px solid #0ea021;
    filter: drop-shadow(0px 0px 10px #0ea021);
    border-width: 0 2.5px 2.5px 0;
    transition: .2s linear;
    transform: translate(-50%, -50%) rotate(-90deg) scale(0.2);
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
    animation: Checkbox-pulse 1s ease-in;
}
@keyframes Checkbox-pulse {
    0%, 100% {
        transform: translate(-50%, -50%) rotate(0deg) scale(1);
    }
    50% {
        transform: translate(-50%, -50%) rotate(0deg) scale(1.6);
    }
}`,
  },
  {
    id: 20,
    name: "Checkbox",
    preview: (
      <label className="cb20">
        <input type="checkbox" />
        <div className="cb20-checkmark"></div>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <div class="Checkbox-checkmark"></div>
</label>`,
    css: `.Checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    border-radius: 5px;
}
.Checkbox {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 20px;
    user-select: none;
    border-radius: 5px;
    box-shadow: 2px 2px 0px rgb(183, 183, 183);
}
.Checkbox-checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 1.3em;
    width: 1.3em;
    background-color: #ccc;
    border-radius: 5px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    box-shadow: 3px 3px 0px rgb(183, 183, 183);
    transition: all 0.2s;
    opacity: 1;
    background-image: linear-gradient(45deg, rgb(100, 61, 219) 0%, rgb(217, 21, 239) 100%);
}
.Checkbox input~.Checkbox-checkmark {
    transition: all 0.2s;
    opacity: 1;
    box-shadow: 1px 1px 0px rgb(183, 183, 183);
}
.Checkbox-checkmark:after {
    content: "";
    position: absolute;
    opacity: 0;
    transition: all 0.2s;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    opacity: 1;
    transition: all 0.2s;
}
.Checkbox .Checkbox-checkmark:after {
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
}`,
  },
  {
    id: 21,
    name: "Checkbox",
    preview: (
      <label className="cb21">
        <input type="checkbox" />
        <span className="cb21-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    position: relative;
    display: inline-block;
    width: 46px;
    height: 26px;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Checkbox-checkmark {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #ccc;
    border-radius: 26px;
    transition: .3s;
}
.Checkbox-checkmark:before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: .3s;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background-color: #4CAF50;
}
.Checkbox input:checked~.Checkbox-checkmark:before {
    transform: translateX(20px);
}`,
  },
  {
    id: 22,
    name: "Checkbox",
    preview: (
      <label className="cb22">
        <input type="checkbox" />
        <span className="cb22-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 2.5px solid #aaa;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s;
}
.Checkbox-checkmark:after {
    content: "";
    width: 7px;
    height: 12px;
    border: 2.5px solid white;
    border-width: 0 2.5px 2.5px 0;
    transform: rotate(45deg) scale(0);
    transition: .2s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background-color: #6871f1;
    border-color: #6871f1;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`,
  },
  {
    id: 23,
    name: "Checkbox",
    preview: (
      <label className="cb23">
        <input type="checkbox" />
        <span className="cb23-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 24px;
    height: 24px;
    border: 2px solid #ff6b6b;
    border-radius: 4px;
    background-color: transparent;
    transition: .2s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .2s;
    margin-bottom: 2px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background-color: #ff6b6b;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`,
  },
  {
    id: 24,
    name: "Checkbox",
    preview: (
      <label className="cb24">
        <input type="checkbox" />
        <span className="cb24-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 24px;
    height: 24px;
    border: 2px solid #333;
    border-radius: 3px;
    background-color: transparent;
    transition: .2s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 12px;
    height: 2px;
    background-color: white;
    transform: scale(0);
    transition: .2s;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background-color: #333;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: scale(1);
}`,
  },
  {
    id: 25,
    name: "Checkbox",
    preview: (
      <label className="cb25">
        <input type="checkbox" />
        <span className="cb25-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 24px;
    height: 24px;
    border: 2px solid #00e5ff;
    border-radius: 4px;
    background-color: transparent;
    transition: .2s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid #00e5ff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .2s;
    margin-bottom: 2px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background-color: transparent;
    box-shadow: 0 0 8px #00e5ff, inset 0 0 8px rgba(0, 229, 255, 0.1);
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
    filter: drop-shadow(0 0 4px #00e5ff);
}`,
  },
  {
    id: 26,
    name: "Checkbox",
    preview: (
      <label className="cb26">
        <input type="checkbox" />
        <span className="cb26-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    border: 1.5px solid rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .3s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`,
  },
  {
    id: 27,
    name: "Checkbox",
    preview: (
      <label className="cb27">
        <input type="checkbox" />
        <span className="cb27-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    background: #e0e5ec;
    box-shadow: 4px 4px 8px #b8bec7, -4px -4px 8px #ffffff;
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid #6c63ff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .3s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    box-shadow: inset 3px 3px 6px #b8bec7, inset -3px -3px 6px #ffffff;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`,
  },
  {
    id: 28,
    name: "Checkbox",
    preview: (
      <label className="cb28">
        <input type="checkbox" />
        <span className="cb28-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    background: linear-gradient(white, white) padding-box,
        linear-gradient(135deg, #f093fb, #f5576c) border-box;
    border: 2px solid transparent;
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid #f5576c;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .3s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background: linear-gradient(135deg, #f093fb, #f5576c) border-box;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    border-color: white;
    transform: rotate(45deg) scale(1);
}`,
  },
  {
    id: 29,
    name: "Checkbox",
    preview: (
      <label className="cb29">
        <input type="checkbox" />
        <span className="cb29-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 28px;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Checkbox-checkmark {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #e5e5ea;
    border-radius: 28px;
    transition: .3s;
}
.Checkbox-checkmark:before {
    content: "";
    position: absolute;
    height: 22px;
    width: 22px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: .3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.Checkbox input:checked~.Checkbox-checkmark {
    background-color: #34c759;
}
.Checkbox input:checked~.Checkbox-checkmark:before {
    transform: translateX(22px);
}`,
  },
  {
    id: 30,
    name: "Checkbox",
    preview: (
      <label className="cb30">
        <input type="checkbox" />
        <span className="cb30-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border: 2px solid #9e9e9e;
    background-color: transparent;
    transition: .2s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 5px;
    height: 10px;
    border: 2px solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .2s cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 2px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background-color: #6200ea;
    border-color: #6200ea;
    box-shadow: 0 0 0 8px rgba(98, 0, 234, 0.1);
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`,
  },
  {
    id: 31,
    name: "Checkbox",
    preview: (
      <label className="cb31">
        <input type="checkbox" />
        <span className="cb31-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border: 2px solid #f0e614;
    background: transparent;
    clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px));
    transition: .2s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid #f0e614;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .2s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background: rgba(240, 230, 20, 0.15);
    box-shadow: 0 0 10px #f0e614, inset 0 0 10px rgba(240, 230, 20, 0.1);
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
    filter: drop-shadow(0 0 3px #f0e614);
}`,
  },
  {
    id: 32,
    name: "Checkbox",
    preview: (
      <label className="cb32">
        <input type="checkbox" />
        <span className="cb32-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 24px;
    height: 24px;
    background: #c0c0c0;
    border-top: 3px solid #ffffff;
    border-left: 3px solid #ffffff;
    border-bottom: 3px solid #808080;
    border-right: 3px solid #808080;
    transition: .1s;
    display: flex;
    align-items: center;
    justify-content: center;
    image-rendering: pixelated;
}
.Checkbox-checkmark:after {
    content: "✓";
    color: black;
    font-size: 14px;
    font-weight: bold;
    opacity: 0;
    transition: .1s;
    font-family: monospace;
}
.Checkbox input:checked~.Checkbox-checkmark {
    border-top: 3px solid #808080;
    border-left: 3px solid #808080;
    border-bottom: 3px solid #ffffff;
    border-right: 3px solid #ffffff;
    background: #c0c0c0;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    opacity: 1;
}`,
  },
  {
    id: 33,
    name: "Checkbox",
    preview: (
      <label className="cb33">
        <input type="checkbox" />
        <span className="cb33-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 2px solid #ffb3c6;
    background: white;
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "♡";
    color: #ff85a1;
    font-size: 14px;
    opacity: 0;
    transform: scale(0);
    transition: .3s;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background: #fff0f3;
    border-color: #ff85a1;
    box-shadow: 0 0 0 3px rgba(255, 133, 161, 0.2);
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    opacity: 1;
    transform: scale(1);
}`,
  },
  {
    id: 34,
    name: "Checkbox",
    preview: (
      <label className="cb34">
        <input type="checkbox" />
        <span className="cb34-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    border: 1.5px solid #444;
    background: #1a1a1a;
    transition: .2s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 5px;
    height: 10px;
    border: 2px solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .2s;
    margin-bottom: 2px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background: #2d2d2d;
    border-color: #ffffff;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`,
  },
  {
    id: 35,
    name: "Checkbox",
    preview: (
      <label className="cb35">
        <input type="checkbox" />
        <span className="cb35-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    border: 2px solid #a8edea;
    background: transparent;
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .3s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background: linear-gradient(135deg, #a8edea, #fed6e3);
    border-color: transparent;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`,
  },
  {
    id: 36,
    name: "Checkbox",
    preview: (
      <label className="cb36">
        <input type="checkbox" />
        <span className="cb36-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    border: 2px solid #667eea;
    background: transparent;
    transition: .2s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .2s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-color: transparent;
    animation: Checkbox-bounce 0.4s ease;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}
@keyframes Checkbox-bounce {
    0% {
        transform: scale(1);
    }
    40% {
        transform: scale(1.3);
    }
    70% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
    }
}`,
  },
  {
    id: 37,
    name: "Checkbox",
    preview: (
      <label className="cb37">
        <input type="checkbox" />
        <span className="cb37-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 4px;
    border: 2px solid #00b4d8;
    background: transparent;
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2.5px solid #00b4d8;
    border-width: 0 2.5px 2.5px 0;
    transform: rotate(45deg) scale(0);
    transition: .3s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`,
  },
  {
    id: 38,
    name: "Checkbox",
    preview: (
      <label className="cb38">
        <input type="checkbox" />
        <span className="cb38-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    border: 2px solid #f97316;
    background: transparent;
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .3s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background: linear-gradient(135deg, #f97316, #ef4444);
    border-color: transparent;
    box-shadow: 0 4px 15px rgba(249, 115, 22, 0.4);
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`,
  },
  {
    id: 39,
    name: "Checkbox",
    preview: (
      <label className="cb39">
        <input type="checkbox" />
        <span className="cb39-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 2px solid #ccc;
    background: transparent;
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #10b981;
    transform: scale(0);
    transition: .3s;
}
.Checkbox input:checked~.Checkbox-checkmark {
    border-color: #10b981;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: scale(1);
}`,
  },
  {
    id: 61,
    name: "Checkbox",
    preview: (
      <label className="cb61">
        <input type="checkbox" />
        <span className="cb61-checkmark"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 2px solid #fb7185;
    background: transparent;
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .3s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    border-radius: 6px;
    background: #fb7185;
    border-color: #fb7185;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`,
  },

  {
    id: 1001,
    name: "Basic Checkbox",
    preview: (
      <label className="checkbox-1001">
        <input type="checkbox" defaultChecked />
        <span>Accept terms and conditions</span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span>Accept terms and conditions</span>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #3f3f46;
    font-size: 12px;
    cursor: pointer;
}
.Checkbox input {
    width: 16px;
    height: 16px;
    accent-color: #D97757;
}`,
  },
  {
    id: 1002,
    name: "Custom Check",
    preview: (
      <label className="checkbox-1002">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1002__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <span>Remember me</span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
    <span>Remember me</span>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #3f3f46;
    font-size: 12px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 18px;
    height: 18px;
    display: grid;
    place-items: center;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-box {
    border-color: #D97757;
    background: #D97757;
    color: #fff;
}
.Checkbox i {
    font-size: 10px;
}`,
  },
  {
    id: 1003,
    name: "Checkbox Card",
    preview: (
      <label className="checkbox-1003">
        <input type="checkbox" defaultChecked />
        <div className="checkbox-1003__card">
          <span className="checkbox-1003__box"></span>
          <div>
            <strong>Analytics</strong>
            <span>Include performance analytics in your workspace.</span>
          </div>
        </div>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <div class="Checkbox-card">
        <span class="Checkbox-box"></span>
        <div>
            <strong>Analytics</strong>
            <span>Include performance analytics in your workspace.</span>
        </div>
    </div>
</label>`,
    css: `.Checkbox {
    width: 340px;
    display: block;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-card {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 14px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
}
.Checkbox input:checked + .Checkbox-card {
    border-color: #D97757;
    background: #fff7f3;
}
.Checkbox-box {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
    position: relative;
}
.Checkbox input:checked + .Checkbox-card .Checkbox-box {
    border-color: #D97757;
    background: #D97757;
}
.Checkbox input:checked + .Checkbox-card .Checkbox-box::after {
    content: "✓";
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: #fff;
    font-size: 11px;
    font-weight: 800;
}
.Checkbox-card strong {
    display: block;
    color: #18181b;
    font-size: 12px;
}
.Checkbox-card span {
    display: block;
    margin-top: 3px;
    color: #71717a;
    font-size: 9px;
    line-height: 1.4;
}`,
  },
  {
    id: 1004,
    name: "Feature Checkbox",
    preview: (
      <label className="checkbox-1004">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1004__icon">
          <i className="fa-solid fa-bolt"></i>
        </span>
        <span>Enable acceleration</span>
        <span className="checkbox-1004__check">
          <i className="fa-solid fa-check"></i>
        </span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-icon">
        <i class="fa-solid fa-bolt"></i>
    </span>
    <span>Enable acceleration</span>
    <span class="Checkbox-check">
        <i class="fa-solid fa-check"></i>
    </span>
</label>`,
    css: `.Checkbox {
    width: 310px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: #3f3f46;
    font-size: 11px;
}
.Checkbox input {
    display: none;
}
.Checkbox-icon {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #fff7ed;
    color: #ea580c;
}
.Checkbox-check {
    margin-left: auto;
    width: 18px;
    height: 18px;
    display: grid;
    place-items: center;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
    color: transparent;
}
.Checkbox input:checked ~ .Checkbox-check {
    border-color: #ea580c;
    background: #ea580c;
    color: #fff;
}
.Checkbox-check i {
    font-size: 9px;
}`,
  },
  {
    id: 1005,
    name: "Dark Checkbox",
    preview: (
      <label className="checkbox-1005">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1005__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <span>Dark mode enabled</span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
    <span>Dark mode enabled</span>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px 12px;
    border-radius: 9px;
    background: #18181b;
    color: #e4e4e7;
    font-size: 11px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 18px;
    height: 18px;
    display: grid;
    place-items: center;
    border: 1.5px solid #52525b;
    border-radius: 5px;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-box {
    border-color: #818cf8;
    background: #6366f1;
    color: #fff;
}
.Checkbox i {
    font-size: 9px;
}`,
  },
  {
    id: 1006,
    name: "Glass Checkbox",
    preview: (
      <div className="checkbox-1006">
        <label>
          <input type="checkbox" defaultChecked />
          <span className="checkbox-1006__box"></span>
          <span>Glass option</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="checkbox-1006__box"></span>
          <span>Another option</span>
        </label>
      </div>
    ),
    html: `<div class="CheckboxGroup">
    <label>
        <input type="checkbox" checked>
        <span class="Checkbox-box"></span>
        <span>Glass option</span>
    </label>
    <label>
        <input type="checkbox">
        <span class="Checkbox-box"></span>
        <span>Another option</span>
    </label>
</div>`,
    css: `.CheckboxGroup {
    width: 280px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 9px;
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 15px;
    background: linear-gradient(135deg,#111827,#1e293b);
}
.CheckboxGroup label {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #dbeafe;
    font-size: 11px;
    cursor: pointer;
}
.CheckboxGroup input {
    display: none;
}
.Checkbox-box {
    width: 17px;
    height: 17px;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: 5px;
}
.CheckboxGroup input:checked + .Checkbox-box {
    background: #38bdf8;
    border-color: #38bdf8;
    box-shadow: 0 0 12px rgba(56,189,248,.3);
}
.CheckboxGroup input:checked + .Checkbox-box::after {
    content: "✓";
    display: grid;
    place-items: center;
    height: 100%;
    color: #082f49;
    font-size: 10px;
    font-weight: 900;
}`,
  },
  {
    id: 1007,
    name: "Neon Checkbox",
    preview: (
      <label className="checkbox-1007">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1007__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <span>Neon active</span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
    <span>Neon active</span>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px 13px;
    border-radius: 9px;
    background: #020617;
    color: #a7f3d0;
    font-family: monospace;
    font-size: 11px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 18px;
    height: 18px;
    display: grid;
    place-items: center;
    border: 1px solid #22c55e;
    border-radius: 4px;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-box {
    background: #22c55e;
    color: #022c22;
    box-shadow: 0 0 15px rgba(34,197,94,.5);
}
.Checkbox i {
    font-size: 9px;
}`,
  },
  {
    id: 1008,
    name: "Color Checkbox",
    preview: (
      <div className="checkbox-1008">
        <label>
          <input type="checkbox" defaultChecked />
          <span className="checkbox-1008__red"></span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="checkbox-1008__orange"></span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="checkbox-1008__yellow"></span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="checkbox-1008__blue"></span>
        </label>
      </div>
    ),
    html: `<div class="CheckboxColors">
    <label>
        <input type="checkbox" checked>
        <span class="Checkbox-red"></span>
    </label>
    <label>
        <input type="checkbox">
        <span class="Checkbox-orange"></span>
    </label>
    <label>
        <input type="checkbox">
        <span class="Checkbox-yellow"></span>
    </label>
    <label>
        <input type="checkbox">
        <span class="Checkbox-blue"></span>
    </label>
</div>`,
    css: `.CheckboxColors {
    display: flex;
    gap: 10px;
}
.CheckboxColors label {
    cursor: pointer;
}
.CheckboxColors input {
    display: none;
}
.CheckboxColors label span {
    width: 28px;
    height: 28px;
    display: block;
    border: 3px solid #fff;
    border-radius: 8px;
    outline: 1px solid #d4d4d8;
}
.CheckboxColors input:checked + span {
    outline: 2px solid #18181b;
    outline-offset: 2px;
}
.Checkbox-red {
    background: #ef4444;
}
.Checkbox-orange {
    background: #f97316;
}
.Checkbox-yellow {
    background: #facc15;
}
.Checkbox-blue {
    background: #3b82f6;
}`,
  },
  {
    id: 1009,
    name: "Task Checkbox",
    preview: (
      <label className="checkbox-1009">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1009__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <div>
          <strong>Finish dashboard</strong>
          <span>Update charts and responsive layout</span>
        </div>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
    <div>
        <strong>Finish dashboard</strong>
        <span>Update charts and responsive layout</span>
    </div>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    width: 300px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    margin-top: 1px;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-box {
    background: #16a34a;
    border-color: #16a34a;
    color: #fff;
}
.Checkbox i {
    font-size: 9px;
}
.Checkbox strong {
    display: block;
    color: #18181b;
    font-size: 11px;
}
.Checkbox div span {
    display: block;
    margin-top: 3px;
    color: #71717a;
    font-size: 9px;
}`,
  },
  {
    id: 1010,
    name: "Tag Checkbox",
    preview: (
      <div className="checkbox-1010">
        <label>
          <input type="checkbox" defaultChecked />
          <span>React</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Vue</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Svelte</span>
        </label>
      </div>
    ),
    html: `<div class="CheckboxTags">
    <label>
        <input type="checkbox" checked>
        <span>React</span>
    </label>
    <label>
        <input type="checkbox">
        <span>Vue</span>
    </label>
    <label>
        <input type="checkbox">
        <span>Svelte</span>
    </label>
</div>`,
    css: `.CheckboxTags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
}
.CheckboxTags label {
    cursor: pointer;
}
.CheckboxTags input {
    display: none;
}
.CheckboxTags label span {
    display: block;
    padding: 7px 10px;
    border: 1px solid #e4e4e7;
    border-radius: 999px;
    color: #52525b;
    background: #fff;
    font-size: 10px;
    font-weight: 600;
}
.CheckboxTags input:checked + span {
    border-color: #6366f1;
    background: #eef2ff;
    color: #4338ca;
}`,
  },
  {
    id: 1011,
    name: "Permission Checkbox",
    preview: (
      <div className="checkbox-1011">
        <label>
          <input type="checkbox" defaultChecked />
          <span className="checkbox-1011__box">
            <i className="fa-solid fa-check"></i>
          </span>
          <span>Read</span>
        </label>
        <label>
          <input type="checkbox" defaultChecked />
          <span className="checkbox-1011__box">
            <i className="fa-solid fa-check"></i>
          </span>
          <span>Write</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="checkbox-1011__box">
            <i className="fa-solid fa-check"></i>
          </span>
          <span>Delete</span>
        </label>
      </div>
    ),
    html: `<div class="CheckboxPermissions">
    <label>
        <input type="checkbox" checked>
        <span class="Checkbox-box"><i class="fa-solid fa-check"></i></span>
        <span>Read</span>
    </label>
    <label>
        <input type="checkbox" checked>
        <span class="Checkbox-box"><i class="fa-solid fa-check"></i></span>
        <span>Write</span>
    </label>
    <label>
        <input type="checkbox">
        <span class="Checkbox-box"><i class="fa-solid fa-check"></i></span>
        <span>Delete</span>
    </label>
</div>`,
    css: `.CheckboxPermissions {
    display: flex;
    gap: 14px;
}
.CheckboxPermissions label {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #52525b;
    font-size: 10px;
    cursor: pointer;
}
.CheckboxPermissions input {
    display: none;
}
.Checkbox-box {
    width: 16px;
    height: 16px;
    display: grid;
    place-items: center;
    border: 1px solid #d4d4d8;
    border-radius: 4px;
    color: transparent;
}
.CheckboxPermissions input:checked + .Checkbox-box {
    background: #2563eb;
    border-color: #2563eb;
    color: #fff;
}
.Checkbox-box i {
    font-size: 8px;
}`,
  },
  {
    id: 1012,
    name: "Rounded Checkbox",
    preview: (
      <label className="checkbox-1012">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1012__box"></span>
        <span>Rounded selection</span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box"></span>
    <span>Rounded selection</span>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #3f3f46;
    font-size: 12px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 19px;
    height: 19px;
    border: 2px solid #d4d4d8;
    border-radius: 50%;
    position: relative;
}
.Checkbox input:checked + .Checkbox-box {
    border-color: #D97757;
    background: #D97757;
}
.Checkbox input:checked + .Checkbox-box::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 9px;
    left: 6px;
    top: 3px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(45deg);
}`,
  },
  {
    id: 1013,
    name: "Indeterminate Style",
    preview: (
      <div className="checkbox-1013">
        <span className="checkbox-1013__box"></span>
        <span>Some options selected</span>
      </div>
    ),
    html: `<label class="Checkbox">
    <span class="Checkbox-box"></span>
    <span>Some options selected</span>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #3f3f46;
    font-size: 11px;
}
.Checkbox-box {
    width: 18px;
    height: 18px;
    display: grid;
    place-items: center;
    border: 1.5px solid #2563eb;
    border-radius: 5px;
    background: #2563eb;
}
.Checkbox-box::after {
    content: "";
    width: 8px;
    height: 2px;
    border-radius: 2px;
    background: #fff;
}`,
  },
  {
    id: 1014,
    name: "Checkbox With Badge",
    preview: (
      <label className="checkbox-1014">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1014__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <span>Marketing emails</span>
        <span className="checkbox-1014__badge">NEW</span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box"><i class="fa-solid fa-check"></i></span>
    <span>Marketing emails</span>
    <span class="Checkbox-badge">NEW</span>
</label>`,
    css: `.Checkbox {
    width: 300px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 17px;
    height: 17px;
    display: grid;
    place-items: center;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-box {
    background: #2563eb;
    border-color: #2563eb;
    color: #fff;
}
.Checkbox-box i {
    font-size: 8px;
}
.Checkbox > span:nth-of-type(2) {
    color: #3f3f46;
    font-size: 11px;
}
.Checkbox-badge {
    margin-left: auto;
    padding: 3px 6px;
    border-radius: 999px;
    background: #dcfce7;
    color: #15803d;
    font-size: 7px;
    font-weight: 800;
}`,
  },
  {
    id: 1015,
    name: "Checkbox Switch",
    preview: (
      <label className="checkbox-1015">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1015__switch">
          <span></span>
        </span>
        <div>
          <strong>Auto save</strong>
          <span>Save changes automatically.</span>
        </div>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-switch">
        <span></span>
    </span>
    <div>
        <strong>Auto save</strong>
        <span>Save changes automatically.</span>
    </div>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-switch {
    width: 42px;
    height: 24px;
    padding: 3px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    border-radius: 999px;
    background: #d4d4d8;
    transition: background .2s ease;
}
.Checkbox-switch > span {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,.2);
    transition: transform .2s ease;
}
.Checkbox input:checked + .Checkbox-switch {
    background: #D97757;
    justify-content: flex-end;
}
.Checkbox > div strong {
    display: block;
    color: #18181b;
    font-size: 11px;
}
.Checkbox > div span {
    display: block;
    margin-top: 2px;
    color: #71717a;
    font-size: 9px;
}`,
  },
  {
    id: 1016,
    name: "Icon Checkbox",
    preview: (
      <label className="checkbox-1016">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1016__icon">
          <i className="fa-solid fa-bell"></i>
        </span>
        <span>Notifications</span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-icon">
        <i class="fa-solid fa-bell"></i>
    </span>
    <span>Notifications</span>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: center;
    gap: 9px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-icon {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border: 1px solid #e4e4e7;
    border-radius: 9px;
    background: #fff;
    color: #71717a;
}
.Checkbox input:checked + .Checkbox-icon {
    border-color: #fca5a5;
    background: #fef2f2;
    color: #dc2626;
}
.Checkbox > span:last-child {
    color: #3f3f46;
    font-size: 11px;
}
.Checkbox i {
    font-size: 12px;
}`,
  },
  {
    id: 1017,
    name: "Checkbox List",
    preview: (
      <div className="checkbox-1017">
        <label>
          <input type="checkbox" defaultChecked />
          <span className="checkbox-1017__box"></span>
          <span>Design</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="checkbox-1017__box"></span>
          <span>Development</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="checkbox-1017__box"></span>
          <span>Marketing</span>
        </label>
      </div>
    ),
    html: `<div class="CheckboxList">
    <label>
        <input type="checkbox" checked>
        <span class="Checkbox-box"></span>
        <span>Design</span>
    </label>
    <label>
        <input type="checkbox">
        <span class="Checkbox-box"></span>
        <span>Development</span>
    </label>
    <label>
        <input type="checkbox">
        <span class="Checkbox-box"></span>
        <span>Marketing</span>
    </label>
</div>`,
    css: `.CheckboxList {
    width: 230px;
    display: flex;
    flex-direction: column;
    gap: 7px;
}
.CheckboxList label {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 7px 8px;
    border-radius: 7px;
    cursor: pointer;
}
.CheckboxList label:hover {
    background: #f4f4f5;
}
.CheckboxList input {
    display: none;
}
.Checkbox-box {
    width: 16px;
    height: 16px;
    border: 1.5px solid #d4d4d8;
    border-radius: 4px;
}
.CheckboxList input:checked + .Checkbox-box {
    background: #2563eb;
    border-color: #2563eb;
}
.CheckboxList input:checked + .Checkbox-box::after {
    content: "✓";
    display: grid;
    place-items: center;
    height: 100%;
    color: #fff;
    font-size: 9px;
    font-weight: 800;
}`,
  },
  {
    id: 1018,
    name: "Checkbox With Description",
    preview: (
      <label className="checkbox-1018">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1018__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <div>
          <strong>Two-factor authentication</strong>
          <span>Add an extra layer of security to your account.</span>
        </div>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box"><i class="fa-solid fa-check"></i></span>
    <div>
        <strong>Two-factor authentication</strong>
        <span>Add an extra layer of security to your account.</span>
    </div>
</label>`,
    css: `.Checkbox {
    width: 350px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-box {
    border-color: #16a34a;
    background: #16a34a;
    color: #fff;
}
.Checkbox i {
    font-size: 9px;
}
.Checkbox div strong {
    display: block;
    color: #18181b;
    font-size: 11px;
}
.Checkbox div span {
    display: block;
    margin-top: 3px;
    color: #71717a;
    font-size: 9px;
    line-height: 1.45;
}`,
  },
  {
    id: 1019,
    name: "Select All Checkbox",
    preview: (
      <div className="checkbox-1019">
        <label className="checkbox-1019__master">
          <input type="checkbox" defaultChecked />
          <span className="checkbox-1019__box">
            <i className="fa-solid fa-check"></i>
          </span>
          <strong>Select all</strong>
          <span>3 selected</span>
        </label>
        <div className="checkbox-1019__line"></div>
        <label>
          <input type="checkbox" defaultChecked />
          <span className="checkbox-1019__small"></span>
          <span>Project Alpha</span>
        </label>
        <label>
          <input type="checkbox" defaultChecked />
          <span className="checkbox-1019__small"></span>
          <span>Project Beta</span>
        </label>
      </div>
    ),
    html: `<div class="CheckboxSelectAll">
    <label class="Checkbox-master">
        <input type="checkbox" checked>
        <span class="Checkbox-box"><i class="fa-solid fa-check"></i></span>
        <strong>Select all</strong>
        <span>3 selected</span>
    </label>
    <div class="Checkbox-line"></div>
    <label>
        <input type="checkbox" checked>
        <span class="Checkbox-small"></span>
        <span>Project Alpha</span>
    </label>
    <label>
        <input type="checkbox" checked>
        <span class="Checkbox-small"></span>
        <span>Project Beta</span>
    </label>
</div>`,
    css: `.CheckboxSelectAll {
    width: 280px;
    padding: 13px;
    border: 1px solid #e4e4e7;
    border-radius: 11px;
    background: #fff;
}
.CheckboxSelectAll label {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 0;
    color: #3f3f46;
    font-size: 10px;
    cursor: pointer;
}
.CheckboxSelectAll input {
    display: none;
}
.Checkbox-master strong {
    color: #18181b;
    font-size: 11px;
}
.Checkbox-master > span:last-child {
    margin-left: auto;
    color: #a1a1aa;
    font-size: 8px;
}
.Checkbox-box,
.Checkbox-small {
    width: 17px;
    height: 17px;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
}
.Checkbox-small {
    width: 15px;
    height: 15px;
    border-radius: 4px;
}
.CheckboxSelectAll input:checked + .Checkbox-box,
.CheckboxSelectAll input:checked + .Checkbox-small {
    background: #2563eb;
    border-color: #2563eb;
}
.CheckboxSelectAll input:checked + .Checkbox-box::after,
.CheckboxSelectAll input:checked + .Checkbox-small::after {
    content: "✓";
    display: grid;
    place-items: center;
    height: 100%;
    color: #fff;
    font-size: 9px;
    font-weight: 800;
}
.Checkbox-line {
    height: 1px;
    margin: 6px 0;
    background: #f4f4f5;
}`,
  },
  {
    id: 1020,
    name: "Rainbow Checkbox",
    preview: (
      <label className="checkbox-1020">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1020__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <span>Rainbow mode</span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
    <span>Rainbow mode</span>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #3f3f46;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 19px;
    height: 19px;
    display: grid;
    place-items: center;
    border: 2px solid transparent;
    border-radius: 6px;
    background:
        linear-gradient(#fff,#fff) padding-box,
        linear-gradient(135deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899) border-box;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-box {
    background:
        linear-gradient(135deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899) padding-box,
        linear-gradient(135deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899) border-box;
    color: #fff;
}
.Checkbox i {
    font-size: 10px;
}`,
  },
  {
    id: 1021,
    name: "Gradient Checkbox",
    preview: (
      <label className="checkbox-1021">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1021__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <span>Gradient selection</span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
    <span>Gradient selection</span>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #3f3f46;
    font-size: 12px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 19px;
    height: 19px;
    display: grid;
    place-items: center;
    border: 1.5px solid #d4d4d8;
    border-radius: 6px;
}
.Checkbox input:checked + .Checkbox-box {
    border-color: transparent;
    background: linear-gradient(135deg,#8b5cf6,#ec4899);
    color: #fff;
    box-shadow: 0 5px 13px rgba(139,92,246,.22);
}
.Checkbox i {
    font-size: 10px;
}`,
  },
  {
    id: 1022,
    name: "Orange Checkbox",
    preview: (
      <label className="checkbox-1022">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1022__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <span>Orange theme</span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
    <span>Orange theme</span>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #431407;
    font-size: 11px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 18px;
    height: 18px;
    display: grid;
    place-items: center;
    border: 1.5px solid #fdba74;
    border-radius: 5px;
    color: transparent;
    background: #fff7ed;
}
.Checkbox input:checked + .Checkbox-box {
    border-color: #f97316;
    background: #f97316;
    color: #fff;
}
.Checkbox i {
    font-size: 9px;
}`,
  },
  {
    id: 1023,
    name: "Success Checkbox",
    preview: (
      <label className="checkbox-1023">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1023__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <span>Everything is ready</span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
    <span>Everything is ready</span>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 11px;
    border: 1px solid #bbf7d0;
    border-radius: 9px;
    background: #f0fdf4;
    color: #166534;
    font-size: 11px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 18px;
    height: 18px;
    display: grid;
    place-items: center;
    border: 1.5px solid #22c55e;
    border-radius: 5px;
    background: #22c55e;
    color: #fff;
}
.Checkbox i {
    font-size: 9px;
}`,
  },
  {
    id: 1024,
    name: "Danger Checkbox",
    preview: (
      <label className="checkbox-1024">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1024__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <span>Delete permanently</span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
    <span>Delete permanently</span>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 11px;
    border: 1px solid #fecaca;
    border-radius: 9px;
    background: #fef2f2;
    color: #991b1b;
    font-size: 11px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 18px;
    height: 18px;
    display: grid;
    place-items: center;
    border: 1.5px solid #ef4444;
    border-radius: 5px;
    background: #ef4444;
    color: #fff;
}
.Checkbox i {
    font-size: 9px;
}`,
  },
  {
    id: 1025,
    name: "Checkbox With Price",
    preview: (
      <label className="checkbox-1025">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1025__box"></span>
        <div>
          <strong>Priority support</strong>
          <span>Get help from our team</span>
        </div>
        <strong className="checkbox-1025__price">+$9</strong>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box"></span>
    <div>
        <strong>Priority support</strong>
        <span>Get help from our team</span>
    </div>
    <strong class="Checkbox-price">+$9</strong>
</label>`,
    css: `.Checkbox {
    width: 340px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 12px;
    border: 1px solid #e4e4e7;
    border-radius: 10px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 17px;
    height: 17px;
    flex-shrink: 0;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
}
.Checkbox input:checked + .Checkbox-box {
    border-color: #7c3aed;
    background: #7c3aed;
}
.Checkbox input:checked + .Checkbox-box::after {
    content: "✓";
    display: grid;
    place-items: center;
    height: 100%;
    color: #fff;
    font-size: 9px;
    font-weight: 800;
}
.Checkbox > div {
    flex: 1;
}
.Checkbox div strong {
    display: block;
    color: #18181b;
    font-size: 11px;
}
.Checkbox div span {
    display: block;
    margin-top: 2px;
    color: #71717a;
    font-size: 9px;
}
.Checkbox-price {
    color: #7c3aed;
    font-size: 11px;
}`,
  },
  {
    id: 1026,
    name: "Checkbox With Avatar",
    preview: (
      <label className="checkbox-1026">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1026__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <span className="checkbox-1026__avatar">AM</span>
        <div>
          <strong>Alex Morgan</strong>
          <span>Product designer</span>
        </div>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box"><i class="fa-solid fa-check"></i></span>
    <span class="Checkbox-avatar">AM</span>
    <div>
        <strong>Alex Morgan</strong>
        <span>Product designer</span>
    </div>
</label>`,
    css: `.Checkbox {
    width: 320px;
    display: flex;
    align-items: center;
    gap: 9px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 17px;
    height: 17px;
    display: grid;
    place-items: center;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-box {
    border-color: #2563eb;
    background: #2563eb;
    color: #fff;
}
.Checkbox-box i {
    font-size: 8px;
}
.Checkbox-avatar {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #e0e7ff;
    color: #4338ca;
    font-size: 8px;
    font-weight: 800;
}
.Checkbox > div {
    flex: 1;
}
.Checkbox div strong {
    display: block;
    color: #18181b;
    font-size: 10px;
}
.Checkbox div span {
    display: block;
    margin-top: 2px;
    color: #71717a;
    font-size: 8px;
}`,
  },
  {
    id: 1027,
    name: "Checkbox Progress",
    preview: (
      <label className="checkbox-1027">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1027__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <div>
          <strong>Profile completion</strong>
          <span>80% complete</span>
        </div>
        <div className="checkbox-1027__progress">
          <span></span>
        </div>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box"><i class="fa-solid fa-check"></i></span>
    <div>
        <strong>Profile completion</strong>
        <span>80% complete</span>
    </div>
    <div class="Checkbox-progress">
        <span></span>
    </div>
</label>`,
    css: `.Checkbox {
    width: 350px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 12px;
    border: 1px solid #e4e4e7;
    border-radius: 10px;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 17px;
    height: 17px;
    display: grid;
    place-items: center;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-box {
    border-color: #16a34a;
    background: #16a34a;
    color: #fff;
}
.Checkbox-box i {
    font-size: 8px;
}
.Checkbox > div:nth-of-type(1) {
    flex: 1;
}
.Checkbox div strong {
    display: block;
    color: #18181b;
    font-size: 10px;
}
.Checkbox div span {
    display: block;
    margin-top: 2px;
    color: #a1a1aa;
    font-size: 8px;
}
.Checkbox-progress {
    width: 55px;
    height: 5px;
    overflow: hidden;
    border-radius: 999px;
    background: #e4e4e7;
}
.Checkbox-progress span {
    display: block;
    width: 80%;
    height: 100%;
    background: #22c55e;
}`,
  },
  {
    id: 1028,
    name: "Checkbox Group Card",
    preview: (
      <div className="checkbox-1028">
        <div className="checkbox-1028__header">
          <strong>Notifications</strong>
          <span>Choose what you receive</span>
        </div>
        <label>
          <input type="checkbox" defaultChecked />
          <span className="checkbox-1028__box"></span>
          <span>Email notifications</span>
        </label>
        <label>
          <input type="checkbox" defaultChecked />
          <span className="checkbox-1028__box"></span>
          <span>Push notifications</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="checkbox-1028__box"></span>
          <span>Weekly digest</span>
        </label>
      </div>
    ),
    html: `<div class="CheckboxGroup">
    <div class="Checkbox-header">
        <strong>Notifications</strong>
        <span>Choose what you receive</span>
    </div>
    <label>
        <input type="checkbox" checked>
        <span class="Checkbox-box"></span>
        <span>Email notifications</span>
    </label>
    <label>
        <input type="checkbox" checked>
        <span class="Checkbox-box"></span>
        <span>Push notifications</span>
    </label>
    <label>
        <input type="checkbox">
        <span class="Checkbox-box"></span>
        <span>Weekly digest</span>
    </label>
</div>`,
    css: `.CheckboxGroup {
    width: 300px;
    padding: 15px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #fff;
}
.Checkbox-header {
    padding-bottom: 10px;
    margin-bottom: 7px;
    border-bottom: 1px solid #f4f4f5;
}
.Checkbox-header strong {
    display: block;
    color: #18181b;
    font-size: 12px;
}
.Checkbox-header span {
    display: block;
    margin-top: 2px;
    color: #a1a1aa;
    font-size: 9px;
}
.CheckboxGroup label {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 0;
    color: #52525b;
    font-size: 10px;
    cursor: pointer;
}
.CheckboxGroup input {
    display: none;
}
.Checkbox-box {
    width: 16px;
    height: 16px;
    border: 1.5px solid #d4d4d8;
    border-radius: 4px;
}
.CheckboxGroup input:checked + .Checkbox-box {
    background: #2563eb;
    border-color: #2563eb;
}
.CheckboxGroup input:checked + .Checkbox-box::after {
    content: "✓";
    display: grid;
    place-items: center;
    height: 100%;
    color: #fff;
    font-size: 9px;
}`,
  },
  {
    id: 1029,
    name: "Checkbox Action Row",
    preview: (
      <label className="checkbox-1029">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1029__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <div>
          <strong>Sync across devices</strong>
          <span>Your preferences stay synchronized.</span>
        </div>
        <i className="fa-solid fa-cloud-arrow-up checkbox-1029__cloud"></i>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box"><i class="fa-solid fa-check"></i></span>
    <div>
        <strong>Sync across devices</strong>
        <span>Your preferences stay synchronized.</span>
    </div>
    <i class="fa-solid fa-cloud-arrow-up Checkbox-cloud"></i>
</label>`,
    css: `.Checkbox {
    width: 350px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 12px 13px;
    border: 1px solid #e4e4e7;
    border-radius: 10px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 17px;
    height: 17px;
    display: grid;
    place-items: center;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-box {
    background: #2563eb;
    border-color: #2563eb;
    color: #fff;
}
.Checkbox-box i {
    font-size: 8px;
}
.Checkbox > div {
    flex: 1;
}
.Checkbox div strong {
    display: block;
    color: #18181b;
    font-size: 10px;
}
.Checkbox div span {
    display: block;
    margin-top: 2px;
    color: #71717a;
    font-size: 8px;
}
.Checkbox-cloud {
    color: #2563eb;
    font-size: 13px;
}`,
  },
  {
    id: 1030,
    name: "Checkbox With Shortcut",
    preview: (
      <label className="checkbox-1030">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1030__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <span>Enable command palette</span>
        <kbd>⌘ K</kbd>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box"><i class="fa-solid fa-check"></i></span>
    <span>Enable command palette</span>
    <kbd>⌘ K</kbd>
</label>`,
    css: `.Checkbox {
    width: 320px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 17px;
    height: 17px;
    display: grid;
    place-items: center;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-box {
    background: #18181b;
    border-color: #18181b;
    color: #fff;
}
.Checkbox-box i {
    font-size: 8px;
}
.Checkbox > span:nth-of-type(2) {
    flex: 1;
    color: #3f3f46;
    font-size: 10px;
}
.Checkbox kbd {
    padding: 3px 6px;
    border: 1px solid #d4d4d8;
    border-radius: 5px;
    background: #f4f4f5;
    color: #71717a;
    font-family: monospace;
    font-size: 8px;
}`,
  },
  {
    id: 1031,
    name: "Checkbox Feature Tiles",
    preview: (
      <div className="checkbox-1031">
        <label>
          <input type="checkbox" defaultChecked />
          <div>
            <i className="fa-solid fa-bolt"></i>
            <strong>Fast</strong>
            <span>Optimized</span>
          </div>
        </label>
        <label>
          <input type="checkbox" />
          <div>
            <i className="fa-solid fa-shield-halved"></i>
            <strong>Secure</strong>
            <span>Protected</span>
          </div>
        </label>
        <label>
          <input type="checkbox" />
          <div>
            <i className="fa-solid fa-chart-line"></i>
            <strong>Insights</strong>
            <span>Analytics</span>
          </div>
        </label>
      </div>
    ),
    html: `<div class="CheckboxTiles">
    <label>
        <input type="checkbox" checked>
        <div>
            <i class="fa-solid fa-bolt"></i>
            <strong>Fast</strong>
            <span>Optimized</span>
        </div>
    </label>
    <label>
        <input type="checkbox">
        <div>
            <i class="fa-solid fa-shield-halved"></i>
            <strong>Secure</strong>
            <span>Protected</span>
        </div>
    </label>
    <label>
        <input type="checkbox">
        <div>
            <i class="fa-solid fa-chart-line"></i>
            <strong>Insights</strong>
            <span>Analytics</span>
        </div>
    </label>
</div>`,
    css: `.CheckboxTiles {
    display: flex;
    gap: 8px;
}
.CheckboxTiles label {
    cursor: pointer;
}
.CheckboxTiles input {
    display: none;
}
.CheckboxTiles label > div {
    width: 90px;
    padding: 12px 8px;
    text-align: center;
    border: 1px solid #e4e4e7;
    border-radius: 10px;
    background: #fff;
}
.CheckboxTiles input:checked + div {
    border-color: #2563eb;
    background: #eff6ff;
    color: #2563eb;
}
.CheckboxTiles i {
    font-size: 18px;
}
.CheckboxTiles strong {
    display: block;
    margin-top: 7px;
    color: #18181b;
    font-size: 10px;
}
.CheckboxTiles span {
    display: block;
    margin-top: 2px;
    color: #a1a1aa;
    font-size: 7px;
}`,
  },
  {
    id: 1032,
    name: "Checkbox With Star",
    preview: (
      <label className="checkbox-1032">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1032__star">
          <i className="fa-solid fa-star"></i>
        </span>
        <div>
          <strong>Featured</strong>
          <span>Show this item prominently</span>
        </div>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-star">
        <i class="fa-solid fa-star"></i>
    </span>
    <div>
        <strong>Featured</strong>
        <span>Show this item prominently</span>
    </div>
</label>`,
    css: `.Checkbox {
    width: 300px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 11px;
    border-radius: 10px;
    background: #fffbeb;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-star {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    color: #a16207;
    background: #fef3c7;
}
.Checkbox input:checked + .Checkbox-star {
    background: #facc15;
    color: #713f12;
}
.Checkbox > div {
    flex: 1;
}
.Checkbox div strong {
    display: block;
    color: #422006;
    font-size: 11px;
}
.Checkbox div span {
    display: block;
    margin-top: 2px;
    color: #a16207;
    font-size: 8px;
}
.Checkbox i {
    font-size: 11px;
}`,
  },
  {
    id: 1033,
    name: "Checkbox Compact",
    preview: (
      <div className="checkbox-1033">
        <label>
          <input type="checkbox" defaultChecked />
          <span className="checkbox-1033__box"></span>
          <span>Daily</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="checkbox-1033__box"></span>
          <span>Weekly</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="checkbox-1033__box"></span>
          <span>Monthly</span>
        </label>
      </div>
    ),
    html: `<div class="CheckboxGroup">
    <label>
        <input type="checkbox" checked>
        <span class="Checkbox-box"></span>
        <span>Daily</span>
    </label>
    <label>
        <input type="checkbox">
        <span class="Checkbox-box"></span>
        <span>Weekly</span>
    </label>
    <label>
        <input type="checkbox">
        <span class="Checkbox-box"></span>
        <span>Monthly</span>
    </label>
</div>`,
    css: `.CheckboxGroup {
    display: flex;
    gap: 14px;
}
.CheckboxGroup label {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #52525b;
    font-size: 9px;
    cursor: pointer;
}
.CheckboxGroup input {
    display: none;
}
.Checkbox-box {
    width: 14px;
    height: 14px;
    border: 1px solid #d4d4d8;
    border-radius: 3px;
}
.CheckboxGroup input:checked + .Checkbox-box {
    background: #D97757;
    border-color: #D97757;
}
.CheckboxGroup input:checked + .Checkbox-box::after {
    content: "✓";
    display: grid;
    place-items: center;
    height: 100%;
    color: #fff;
    font-size: 7px;
    font-weight: 800;
}`,
  },
  {
    id: 1034,
    name: "Checkbox Large",
    preview: (
      <label className="checkbox-1034">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1034__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <span>Large selection</span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
    <span>Large selection</span>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: center;
    gap: 11px;
    color: #18181b;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 23px;
    height: 23px;
    display: grid;
    place-items: center;
    border: 2px solid #d4d4d8;
    border-radius: 7px;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-box {
    background: #D97757;
    border-color: #D97757;
    color: #fff;
}
.Checkbox i {
    font-size: 12px;
}`,
  },
  {
    id: 1035,
    name: "Checkbox Outline Card",
    preview: (
      <label className="checkbox-1035">
        <input type="checkbox" defaultChecked />
        <div className="checkbox-1035__card">
          <span className="checkbox-1035__box"></span>
          <div>
            <strong>Team access</strong>
            <span>Allow team members to collaborate.</span>
          </div>
        </div>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <div class="Checkbox-card">
        <span class="Checkbox-box"></span>
        <div>
            <strong>Team access</strong>
            <span>Allow team members to collaborate.</span>
        </div>
    </div>
</label>`,
    css: `.Checkbox {
    width: 340px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-card {
    display: flex;
    gap: 10px;
    padding: 14px;
    border: 2px solid #e4e4e7;
    border-radius: 12px;
}
.Checkbox input:checked + .Checkbox-card {
    border-color: #18181b;
}
.Checkbox-box {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
    position: relative;
}
.Checkbox input:checked + .Checkbox-card .Checkbox-box {
    background: #18181b;
    border-color: #18181b;
}
.Checkbox input:checked + .Checkbox-card .Checkbox-box::after {
    content: "✓";
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: #fff;
    font-size: 10px;
    font-weight: 800;
}
.Checkbox-card strong {
    display: block;
    color: #18181b;
    font-size: 11px;
}
.Checkbox-card span {
    display: block;
    margin-top: 3px;
    color: #71717a;
    font-size: 9px;
}`,
  },
  {
    id: 1036,
    name: "Checkbox With Icon Circle",
    preview: (
      <label className="checkbox-1036">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1036__circle">
          <i className="fa-solid fa-check"></i>
        </span>
        <span>Completed</span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-circle">
        <i class="fa-solid fa-check"></i>
    </span>
    <span>Completed</span>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #52525b;
    font-size: 11px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-circle {
    width: 20px;
    height: 20px;
    display: grid;
    place-items: center;
    border: 1.5px solid #d4d4d8;
    border-radius: 50%;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-circle {
    background: #22c55e;
    border-color: #22c55e;
    color: #fff;
}
.Checkbox i {
    font-size: 9px;
}`,
  },
  {
    id: 1037,
    name: "Checkbox With Delete",
    preview: (
      <label className="checkbox-1037">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1037__box"></span>
        <div>
          <strong>Old project</strong>
          <span>Archived 3 months ago</span>
        </div>
        <button type="button">
          <i className="fa-solid fa-trash"></i>
        </button>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box"></span>
    <div>
        <strong>Old project</strong>
        <span>Archived 3 months ago</span>
    </div>
    <button type="button">
        <i class="fa-solid fa-trash"></i>
    </button>
</label>`,
    css: `.Checkbox {
    width: 320px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    border: 1px solid #e4e4e7;
    border-radius: 10px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 17px;
    height: 17px;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
}
.Checkbox input:checked + .Checkbox-box {
    background: #71717a;
    border-color: #71717a;
}
.Checkbox input:checked + .Checkbox-box::after {
    content: "✓";
    display: grid;
    place-items: center;
    height: 100%;
    color: #fff;
    font-size: 8px;
}
.Checkbox > div {
    flex: 1;
}
.Checkbox div strong {
    display: block;
    color: #18181b;
    font-size: 10px;
}
.Checkbox div span {
    display: block;
    margin-top: 2px;
    color: #a1a1aa;
    font-size: 8px;
}
.Checkbox button {
    border: none;
    background: transparent;
    color: #a1a1aa;
    cursor: pointer;
}
.Checkbox button:hover {
    color: #dc2626;
}`,
  },
  {
    id: 1038,
    name: "Checkbox With External Icon",
    preview: (
      <label className="checkbox-1038">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1038__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <span>Open links externally</span>
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box"><i class="fa-solid fa-check"></i></span>
    <span>Open links externally</span>
    <i class="fa-solid fa-arrow-up-right-from-square"></i>
</label>`,
    css: `.Checkbox {
    width: 300px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 17px;
    height: 17px;
    display: grid;
    place-items: center;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-box {
    background: #2563eb;
    border-color: #2563eb;
    color: #fff;
}
.Checkbox-box i {
    font-size: 8px;
}
.Checkbox > span:nth-of-type(2) {
    flex: 1;
    color: #3f3f46;
    font-size: 10px;
}
.Checkbox > i {
    color: #a1a1aa;
    font-size: 10px;
}`,
  },
  {
    id: 1039,
    name: "Checkbox Neon Card",
    preview: (
      <label className="checkbox-1039">
        <input type="checkbox" defaultChecked />
        <div className="checkbox-1039__card">
          <span className="checkbox-1039__box">
            <i className="fa-solid fa-check"></i>
          </span>
          <div>
            <strong>ONLINE</strong>
            <span>Realtime synchronization</span>
          </div>
          <i className="fa-solid fa-wifi"></i>
        </div>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <div class="Checkbox-card">
        <span class="Checkbox-box">
            <i class="fa-solid fa-check"></i>
        </span>
        <div>
            <strong>ONLINE</strong>
            <span>Realtime synchronization</span>
        </div>
        <i class="fa-solid fa-wifi"></i>
    </div>
</label>`,
    css: `.Checkbox {
    width: 330px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-card {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 13px;
    border: 1px solid #164e63;
    border-radius: 11px;
    background: #020617;
    color: #67e8f9;
}
.Checkbox-box {
    width: 18px;
    height: 18px;
    display: grid;
    place-items: center;
    border: 1px solid #155e75;
    border-radius: 5px;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-card .Checkbox-box {
    background: #06b6d4;
    border-color: #06b6d4;
    color: #082f49;
    box-shadow: 0 0 12px rgba(6,182,212,.35);
}
.Checkbox-box i {
    font-size: 9px;
}
.Checkbox-card div {
    flex: 1;
}
.Checkbox-card div strong {
    display: block;
    color: #67e8f9;
    font-family: monospace;
    font-size: 10px;
}
.Checkbox-card div span {
    display: block;
    margin-top: 2px;
    color: #64748b;
    font-size: 8px;
}
.Checkbox-card > i {
    color: #22d3ee;
    font-size: 12px;
}`,
  },
  {
    id: 1040,
    name: "Checkbox Social",
    preview: (
      <label className="checkbox-1040">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1040__icon">
          <i className="fa-brands fa-github"></i>
        </span>
        <div>
          <strong>GitHub</strong>
          <span>Connect repository</span>
        </div>
        <span className="checkbox-1040__box">
          <i className="fa-solid fa-check"></i>
        </span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-icon">
        <i class="fa-brands fa-github"></i>
    </span>
    <div>
        <strong>GitHub</strong>
        <span>Connect repository</span>
    </div>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
</label>`,
    css: `.Checkbox {
    width: 320px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 11px;
    border: 1px solid #e4e4e7;
    border-radius: 10px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-icon {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #f4f4f5;
    color: #18181b;
}
.Checkbox > div {
    flex: 1;
}
.Checkbox div strong {
    display: block;
    color: #18181b;
    font-size: 10px;
}
.Checkbox div span {
    display: block;
    margin-top: 2px;
    color: #71717a;
    font-size: 8px;
}
.Checkbox-box {
    width: 17px;
    height: 17px;
    display: grid;
    place-items: center;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
    color: transparent;
}
.Checkbox input:checked ~ .Checkbox-box {
    background: #18181b;
    border-color: #18181b;
    color: #fff;
}
.Checkbox-box i {
    font-size: 8px;
}`,
  },
  {
    id: 1041,
    name: "Checkbox With Count",
    preview: (
      <div className="checkbox-1041">
        <label>
          <input type="checkbox" defaultChecked />
          <span className="checkbox-1041__box"></span>
          <span>Design</span>
          <strong>12</strong>
        </label>
        <label>
          <input type="checkbox" />
          <span className="checkbox-1041__box"></span>
          <span>Development</span>
          <strong>28</strong>
        </label>
      </div>
    ),
    html: `<div class="CheckboxGroup">
    <label>
        <input type="checkbox" checked>
        <span class="Checkbox-box"></span>
        <span>Design</span>
        <strong>12</strong>
    </label>
    <label>
        <input type="checkbox">
        <span class="Checkbox-box"></span>
        <span>Development</span>
        <strong>28</strong>
    </label>
</div>`,
    css: `.CheckboxGroup {
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 7px;
}
.CheckboxGroup label {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
}
.CheckboxGroup label:hover {
    background: #f4f4f5;
}
.CheckboxGroup input {
    display: none;
}
.Checkbox-box {
    width: 16px;
    height: 16px;
    border: 1.5px solid #d4d4d8;
    border-radius: 4px;
}
.CheckboxGroup input:checked + .Checkbox-box {
    background: #6366f1;
    border-color: #6366f1;
}
.CheckboxGroup input:checked + .Checkbox-box::after {
    content: "✓";
    display: grid;
    place-items: center;
    height: 100%;
    color: #fff;
    font-size: 8px;
}
.CheckboxGroup label > span:nth-of-type(2) {
    flex: 1;
    color: #52525b;
    font-size: 10px;
}
.CheckboxGroup strong {
    color: #a1a1aa;
    font-size: 9px;
}`,
  },
  {
    id: 1042,
    name: "Checkbox With Date",
    preview: (
      <label className="checkbox-1042">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1042__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <div>
          <strong>Project launch</strong>
          <span>
            <i className="fa-regular fa-calendar"></i> September 18, 2026
          </span>
        </div>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
    <div>
        <strong>Project launch</strong>
        <span><i class="fa-regular fa-calendar"></i> September 18, 2026</span>
    </div>
</label>`,
    css: `.Checkbox {
    width: 320px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 11px;
    border: 1px solid #e4e4e7;
    border-radius: 10px;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 17px;
    height: 17px;
    display: grid;
    place-items: center;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-box {
    background: #2563eb;
    border-color: #2563eb;
    color: #fff;
}
.Checkbox i {
    font-size: 8px;
}
.Checkbox > div {
    flex: 1;
}
.Checkbox div strong {
    display: block;
    color: #18181b;
    font-size: 10px;
}
.Checkbox div span {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 3px;
    color: #71717a;
    font-size: 8px;
}
.Checkbox div span i {
    color: #2563eb;
}`,
  },
  {
    id: 1043,
    name: "Checkbox Notification",
    preview: (
      <label className="checkbox-1043">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1043__box"></span>
        <div>
          <strong>Product updates</strong>
          <span>New features and announcements</span>
        </div>
        <span className="checkbox-1043__dot"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box"></span>
    <div>
        <strong>Product updates</strong>
        <span>New features and announcements</span>
    </div>
    <span class="Checkbox-dot"></span>
</label>`,
    css: `.Checkbox {
    width: 330px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 11px;
    border: 1px solid #e4e4e7;
    border-radius: 10px;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 17px;
    height: 17px;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
}
.Checkbox input:checked + .Checkbox-box {
    background: #7c3aed;
    border-color: #7c3aed;
}
.Checkbox input:checked + .Checkbox-box::after {
    content: "✓";
    display: grid;
    place-items: center;
    height: 100%;
    color: #fff;
    font-size: 8px;
}
.Checkbox > div {
    flex: 1;
}
.Checkbox div strong {
    display: block;
    color: #18181b;
    font-size: 10px;
}
.Checkbox div span {
    display: block;
    margin-top: 2px;
    color: #71717a;
    font-size: 8px;
}
.Checkbox-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #7c3aed;
}`,
  },
  {
    id: 1044,
    name: "Checkbox Security",
    preview: (
      <label className="checkbox-1044">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1044__icon">
          <i className="fa-solid fa-shield-halved"></i>
        </span>
        <div>
          <strong>Secure mode</strong>
          <span>Enable extra security checks</span>
        </div>
        <span className="checkbox-1044__box">
          <i className="fa-solid fa-check"></i>
        </span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-icon">
        <i class="fa-solid fa-shield-halved"></i>
    </span>
    <div>
        <strong>Secure mode</strong>
        <span>Enable extra security checks</span>
    </div>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
</label>`,
    css: `.Checkbox {
    width: 350px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    border: 1px solid #bae6fd;
    border-radius: 11px;
    background: #f0f9ff;
}
.Checkbox input {
    display: none;
}
.Checkbox-icon {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #e0f2fe;
    color: #0284c7;
}
.Checkbox > div {
    flex: 1;
}
.Checkbox div strong {
    display: block;
    color: #0c4a6e;
    font-size: 10px;
}
.Checkbox div span {
    display: block;
    margin-top: 2px;
    color: #0369a1;
    font-size: 8px;
}
.Checkbox-box {
    width: 17px;
    height: 17px;
    display: grid;
    place-items: center;
    border: 1.5px solid #38bdf8;
    border-radius: 5px;
    color: transparent;
}
.Checkbox input:checked ~ .Checkbox-box {
    background: #0284c7;
    border-color: #0284c7;
    color: #fff;
}
.Checkbox-box i {
    font-size: 8px;
}`,
  },
  {
    id: 1045,
    name: "Checkbox Plan",
    preview: (
      <label className="checkbox-1045">
        <input type="checkbox" defaultChecked />
        <div className="checkbox-1045__card">
          <div>
            <span className="checkbox-1045__badge">OPTIONAL</span>
            <strong>Advanced analytics</strong>
            <p>Unlock detailed reports and insights.</p>
          </div>
          <span className="checkbox-1045__box">
            <i className="fa-solid fa-check"></i>
          </span>
        </div>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <div class="Checkbox-card">
        <div>
            <span class="Checkbox-badge">OPTIONAL</span>
            <strong>Advanced analytics</strong>
            <p>Unlock detailed reports and insights.</p>
        </div>
        <span class="Checkbox-box">
            <i class="fa-solid fa-check"></i>
        </span>
    </div>
</label>`,
    css: `.Checkbox {
    width: 340px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 15px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
}
.Checkbox input:checked + .Checkbox-card {
    border-color: #7c3aed;
    background: #faf5ff;
}
.Checkbox-card > div {
    flex: 1;
}
.Checkbox-badge {
    display: inline-block;
    padding: 3px 6px;
    border-radius: 999px;
    background: #ede9fe;
    color: #6d28d9;
    font-size: 7px;
    font-weight: 800;
}
.Checkbox-card strong {
    display: block;
    margin-top: 5px;
    color: #18181b;
    font-size: 11px;
}
.Checkbox-card p {
    margin: 3px 0 0;
    color: #71717a;
    font-size: 8px;
}
.Checkbox-box {
    width: 18px;
    height: 18px;
    display: grid;
    place-items: center;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-card .Checkbox-box {
    background: #7c3aed;
    border-color: #7c3aed;
    color: #fff;
}
.Checkbox-box i {
    font-size: 9px;
}`,
  },
  {
    id: 1046,
    name: "Checkbox Gradient Border",
    preview: (
      <label className="checkbox-1046">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1046__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <span>Gradient border</span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
    <span>Gradient border</span>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #3f3f46;
    font-size: 11px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 19px;
    height: 19px;
    display: grid;
    place-items: center;
    border: 2px solid transparent;
    border-radius: 6px;
    background:
        linear-gradient(#fff,#fff) padding-box,
        linear-gradient(135deg,#f97316,#eab308,#22c55e,#06b6d4,#8b5cf6) border-box;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-box {
    background:
        linear-gradient(135deg,#f97316,#eab308,#22c55e,#06b6d4,#8b5cf6) padding-box,
        linear-gradient(135deg,#f97316,#eab308,#22c55e,#06b6d4,#8b5cf6) border-box;
    color: #fff;
}
.Checkbox i {
    font-size: 9px;
}`,
  },
  {
    id: 1047,
    name: "Checkbox Hover Reveal",
    preview: (
      <label className="checkbox-1047">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1047__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <span>Hover interaction</span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
    <span>Hover interaction</span>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 11px;
    border-radius: 8px;
    color: #52525b;
    font-size: 11px;
    cursor: pointer;
    transition: background .2s ease;
}
.Checkbox:hover {
    background: #f4f4f5;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 18px;
    height: 18px;
    display: grid;
    place-items: center;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
    color: transparent;
    transition: all .2s ease;
}
.Checkbox:hover .Checkbox-box {
    border-color: #a1a1aa;
}
.Checkbox input:checked + .Checkbox-box {
    background: #18181b;
    border-color: #18181b;
    color: #fff;
}
.Checkbox i {
    font-size: 9px;
}`,
  },
  {
    id: 1048,
    name: "Checkbox With Lock",
    preview: (
      <label className="checkbox-1048">
        <input type="checkbox" disabled />
        <span className="checkbox-1048__box"></span>
        <span>Enterprise security</span>
        <i className="fa-solid fa-lock"></i>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" disabled>
    <span class="Checkbox-box"></span>
    <span>Enterprise security</span>
    <i class="fa-solid fa-lock"></i>
</label>`,
    css: `.Checkbox {
    width: 280px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px;
    border: 1px solid #e4e4e7;
    border-radius: 9px;
    background: #fafafa;
    color: #a1a1aa;
    font-size: 10px;
    cursor: not-allowed;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 17px;
    height: 17px;
    border: 1.5px solid #d4d4d8;
    border-radius: 5px;
    opacity: .7;
}
.Checkbox > span:nth-of-type(2) {
    flex: 1;
}
.Checkbox > i {
    color: #a1a1aa;
    font-size: 10px;
}`,
  },
  {
    id: 1049,
    name: "Checkbox Animated Check",
    preview: (
      <label className="checkbox-1049">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1049__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <span>Animated success</span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
    <span>Animated success</span>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #3f3f46;
    font-size: 11px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 19px;
    height: 19px;
    display: grid;
    place-items: center;
    border: 1.5px solid #d4d4d8;
    border-radius: 6px;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-box {
    border-color: #22c55e;
    background: #22c55e;
    color: #fff;
    animation: checkbox-pop .28s ease;
}
.Checkbox i {
    font-size: 10px;
}
@keyframes checkbox-pop {
    0% {
        transform: scale(.7);
    }
    70% {
        transform: scale(1.12);
    }
    100% {
        transform: scale(1);
    }
}`,
  },
  {
    id: 1050,
    name: "Checkbox Rainbow Glow",
    preview: (
      <label className="checkbox-1050">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1050__box">
          <i className="fa-solid fa-check"></i>
        </span>
        <span>Rainbow glow</span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
    <span>Rainbow glow</span>
</label>`,
    css: `.Checkbox {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #3f3f46;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 19px;
    height: 19px;
    display: grid;
    place-items: center;
    border: 2px solid transparent;
    border-radius: 6px;
    background:
        linear-gradient(#fff,#fff) padding-box,
        linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899) border-box;
    background-size: 100% 100%, 300% 100%;
    color: transparent;
    animation: checkbox-rainbow 3s linear infinite;
}
.Checkbox input:checked + .Checkbox-box {
    color: #fff;
    background:
        linear-gradient(135deg,#18181b,#18181b) padding-box,
        linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899) border-box;
    box-shadow: 0 0 18px rgba(139,92,246,.3);
}
.Checkbox i {
    font-size: 10px;
}
@keyframes checkbox-rainbow {
    to {
        background-position: 100% 0, 300% 0;
    }
}`,
  },
  {
    id: 1051,
    name: "Ultimate Checkbox",
    preview: (
      <label className="checkbox-1051">
        <input type="checkbox" defaultChecked />
        <div className="checkbox-1051__card">
          <span className="checkbox-1051__icon">
            <i className="fa-solid fa-sparkles"></i>
          </span>
          <div>
            <strong>Enable everything</strong>
            <span>Unlock all premium features and advanced tools.</span>
          </div>
          <span className="checkbox-1051__box">
            <i className="fa-solid fa-check"></i>
          </span>
        </div>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <div class="Checkbox-card">
        <span class="Checkbox-icon">
            <i class="fa-solid fa-sparkles"></i>
        </span>
        <div>
            <strong>Enable everything</strong>
            <span>Unlock all premium features and advanced tools.</span>
        </div>
        <span class="Checkbox-box">
            <i class="fa-solid fa-check"></i>
        </span>
    </div>
</label>`,
    css: `.Checkbox {
    width: 390px;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-card {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 14px;
    border: 2px solid transparent;
    border-radius: 14px;
    background:
        linear-gradient(#fff,#fff) padding-box,
        linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899) border-box;
}
.Checkbox input:checked + .Checkbox-card {
    background:
        linear-gradient(135deg,#fff7ed,#faf5ff) padding-box,
        linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899) border-box;
    box-shadow: 0 8px 25px rgba(99,102,241,.12);
}
.Checkbox-icon {
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: linear-gradient(135deg,#ef4444,#f97316,#8b5cf6);
    color: #fff;
}
.Checkbox-card > div {
    flex: 1;
}
.Checkbox-card strong {
    display: block;
    color: #18181b;
    font-size: 11px;
}
.Checkbox-card div span {
    display: block;
    margin-top: 3px;
    color: #71717a;
    font-size: 8px;
    line-height: 1.45;
}
.Checkbox-box {
    width: 19px;
    height: 19px;
    display: grid;
    place-items: center;
    border: 1.5px solid #d4d4d8;
    border-radius: 6px;
    color: transparent;
}
.Checkbox input:checked + .Checkbox-card .Checkbox-box {
    border-color: #7c3aed;
    background: linear-gradient(135deg,#7c3aed,#ec4899);
    color: #fff;
    box-shadow: 0 0 14px rgba(124,58,237,.25);
}
.Checkbox-box i {
    font-size: 9px;
}`,
  },
  {
    id: 1051,
    name: "Circle Checkbox Gray",
    preview: (
      <label className="checkbox-1051">
        <input type="checkbox" />
        <span className="checkbox-1051__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    display: block;
    border: 2px solid #a1a1aa;
    border-radius: 50%;
    transition: all .2s ease;
}
.Checkbox input:checked + .Checkbox-box {
    background: #a1a1aa;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1052,
    name: "Square Checkbox Red",
    preview: (
      <label className="checkbox-1052">
        <input type="checkbox" />
        <span className="checkbox-1052__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 24px;
    height: 24px;
    display: block;
    border: 2px solid #ff5a5f;
    border-radius: 4px;
    transition: all .2s ease;
}
.Checkbox input:checked + .Checkbox-box {
    background: #ff5a5f;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1053,
    name: "Square Checkbox Green",
    preview: (
      <label className="checkbox-1053">
        <input type="checkbox" />
        <span className="checkbox-1053__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 24px;
    height: 24px;
    border: 2px solid #4ade80;
    border-radius: 4px;
}
.Checkbox input:checked + .Checkbox-box {
    background: #4ade80;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1054,
    name: "Square Checkbox Blue",
    preview: (
      <label className="checkbox-1054">
        <input type="checkbox" />
        <span className="checkbox-1054__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 24px;
    height: 24px;
    border: 2px solid #60a5fa;
    border-radius: 4px;
}
.Checkbox input:checked + .Checkbox-box {
    background: #60a5fa;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1055,
    name: "Square Checkbox Cyan",
    preview: (
      <label className="checkbox-1055">
        <input type="checkbox" />
        <span className="checkbox-1055__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 24px;
    height: 24px;
    border: 2px solid #22d3ee;
    border-radius: 4px;
}
.Checkbox input:checked + .Checkbox-box {
    background: #22d3ee;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1056,
    name: "Square Checkbox Purple",
    preview: (
      <label className="checkbox-1056">
        <input type="checkbox" />
        <span className="checkbox-1056__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 24px;
    height: 24px;
    border: 2px solid #a78bfa;
    border-radius: 4px;
}
.Checkbox input:checked + .Checkbox-box {
    background: #a78bfa;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1057,
    name: "Square Checkbox Orange",
    preview: (
      <label className="checkbox-1057">
        <input type="checkbox" />
        <span className="checkbox-1057__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 24px;
    height: 24px;
    border: 2px solid #fb923c;
    border-radius: 4px;
}
.Checkbox input:checked + .Checkbox-box {
    background: #fb923c;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1058,
    name: "Square Checkbox Yellow",
    preview: (
      <label className="checkbox-1058">
        <input type="checkbox" />
        <span className="checkbox-1058__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 24px;
    height: 24px;
    border: 2px solid #facc15;
    border-radius: 4px;
}
.Checkbox input:checked + .Checkbox-box {
    background: #facc15;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1059,
    name: "Square Checkbox Pink",
    preview: (
      <label className="checkbox-1059">
        <input type="checkbox" />
        <span className="checkbox-1059__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 24px;
    height: 24px;
    border: 2px solid #f472b6;
    border-radius: 4px;
}
.Checkbox input:checked + .Checkbox-box {
    background: #f472b6;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1060,
    name: "Square Checkbox Small",
    preview: (
      <label className="checkbox-1060">
        <input type="checkbox" />
        <span className="checkbox-1060__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 17px;
    height: 17px;
    border: 2px solid #71717a;
    border-radius: 3px;
}
.Checkbox input:checked + .Checkbox-box {
    background: #71717a;
    box-shadow: inset 0 0 0 4px #0b0b0d;
}`,
  },
  {
    id: 1061,
    name: "Square Checkbox Large",
    preview: (
      <label className="checkbox-1061">
        <input type="checkbox" />
        <span className="checkbox-1061__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 31px;
    height: 31px;
    border: 2px solid #52525b;
    border-radius: 6px;
}
.Checkbox input:checked + .Checkbox-box {
    background: #71717a;
    box-shadow: inset 0 0 0 7px #0b0b0d;
}`,
  },
  {
    id: 1062,
    name: "Circle Checkbox Red",
    preview: (
      <label className="checkbox-1062">
        <input type="checkbox" />
        <span className="checkbox-1062__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    border: 2px solid #ff5a5f;
    border-radius: 50%;
}
.Checkbox input:checked + .Checkbox-box {
    background: #ff5a5f;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1063,
    name: "Circle Checkbox Orange",
    preview: (
      <label className="checkbox-1063">
        <input type="checkbox" />
        <span className="checkbox-1063__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    border: 2px solid #f97316;
    border-radius: 50%;
}
.Checkbox input:checked + .Checkbox-box {
    background: #f97316;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1064,
    name: "Circle Checkbox Yellow",
    preview: (
      <label className="checkbox-1064">
        <input type="checkbox" />
        <span className="checkbox-1064__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    border: 2px solid #facc15;
    border-radius: 50%;
}
.Checkbox input:checked + .Checkbox-box {
    background: #facc15;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1065,
    name: "Circle Checkbox Green",
    preview: (
      <label className="checkbox-1065">
        <input type="checkbox" />
        <span className="checkbox-1065__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    border: 2px solid #22c55e;
    border-radius: 50%;
}
.Checkbox input:checked + .Checkbox-box {
    background: #22c55e;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1066,
    name: "Circle Checkbox Cyan",
    preview: (
      <label className="checkbox-1066">
        <input type="checkbox" />
        <span className="checkbox-1066__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    border: 2px solid #22d3ee;
    border-radius: 50%;
}
.Checkbox input:checked + .Checkbox-box {
    background: #22d3ee;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1067,
    name: "Circle Checkbox Blue",
    preview: (
      <label className="checkbox-1067">
        <input type="checkbox" />
        <span className="checkbox-1067__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    border: 2px solid #60a5fa;
    border-radius: 50%;
}
.Checkbox input:checked + .Checkbox-box {
    background: #60a5fa;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1068,
    name: "Circle Checkbox Purple",
    preview: (
      <label className="checkbox-1068">
        <input type="checkbox" />
        <span className="checkbox-1068__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    border: 2px solid #a78bfa;
    border-radius: 50%;
}
.Checkbox input:checked + .Checkbox-box {
    background: #a78bfa;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1069,
    name: "Circle Checkbox Pink",
    preview: (
      <label className="checkbox-1069">
        <input type="checkbox" />
        <span className="checkbox-1069__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    border: 2px solid #f472b6;
    border-radius: 50%;
}
.Checkbox input:checked + .Checkbox-box {
    background: #f472b6;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1070,
    name: "Circle Checkbox White",
    preview: (
      <label className="checkbox-1070">
        <input type="checkbox" />
        <span className="checkbox-1070__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    border: 2px solid #e4e4e7;
    border-radius: 50%;
}
.Checkbox input:checked + .Checkbox-box {
    background: #fff;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1071,
    name: "Soft Square",
    preview: (
      <label className="checkbox-1071">
        <input type="checkbox" />
        <span className="checkbox-1071__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 24px;
    height: 24px;
    border: 2px solid #52525b;
    border-radius: 8px;
    transition: all .2s ease;
}
.Checkbox:hover .Checkbox-box {
    border-color: #a1a1aa;
}
.Checkbox input:checked + .Checkbox-box {
    background: #52525b;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1072,
    name: "Sharp Square",
    preview: (
      <label className="checkbox-1072">
        <input type="checkbox" />
        <span className="checkbox-1072__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 24px;
    height: 24px;
    border: 2px solid #71717a;
    border-radius: 2px;
}
.Checkbox input:checked + .Checkbox-box {
    background: #71717a;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1073,
    name: "Red Glow Square",
    preview: (
      <label className="checkbox-1073">
        <input type="checkbox" />
        <span className="checkbox-1073__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 24px;
    height: 24px;
    border: 2px solid #ef4444;
    border-radius: 4px;
    transition: all .2s ease;
}
.Checkbox:hover .Checkbox-box {
    box-shadow: 0 0 14px rgba(239,68,68,.35);
}
.Checkbox input:checked + .Checkbox-box {
    background: #ef4444;
    box-shadow: 0 0 18px rgba(239,68,68,.5), inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1074,
    name: "Cyan Glow Square",
    preview: (
      <label className="checkbox-1074">
        <input type="checkbox" />
        <span className="checkbox-1074__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 24px;
    height: 24px;
    border: 2px solid #22d3ee;
    border-radius: 4px;
    transition: all .2s ease;
}
.Checkbox:hover .Checkbox-box {
    box-shadow: 0 0 14px rgba(34,211,238,.35);
}
.Checkbox input:checked + .Checkbox-box {
    background: #22d3ee;
    box-shadow: 0 0 18px rgba(34,211,238,.45), inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1075,
    name: "Purple Glow Circle",
    preview: (
      <label className="checkbox-1075">
        <input type="checkbox" />
        <span className="checkbox-1075__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    border: 2px solid #8b5cf6;
    border-radius: 50%;
}
.Checkbox:hover .Checkbox-box {
    box-shadow: 0 0 16px rgba(139,92,246,.3);
}
.Checkbox input:checked + .Checkbox-box {
    background: #8b5cf6;
    box-shadow: 0 0 20px rgba(139,92,246,.5), inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1076,
    name: "Double Border Circle",
    preview: (
      <label className="checkbox-1076">
        <input type="checkbox" />
        <span className="checkbox-1076__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    display: grid;
    place-items: center;
    border: 2px solid #52525b;
    border-radius: 50%;
}
.Checkbox-box::after {
    content: "";
    width: 15px;
    height: 15px;
    border: 1px solid #71717a;
    border-radius: 50%;
}
.Checkbox input:checked + .Checkbox-box::after {
    background: #a1a1aa;
}`,
  },
  {
    id: 1077,
    name: "Inner Dot Circle",
    preview: (
      <label className="checkbox-1077">
        <input type="checkbox" />
        <span className="checkbox-1077__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    display: grid;
    place-items: center;
    border: 2px solid #71717a;
    border-radius: 50%;
}
.Checkbox input:checked + .Checkbox-box::after {
    content: "";
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #fff;
}`,
  },
  {
    id: 1078,
    name: "Blue Inner Dot",
    preview: (
      <label className="checkbox-1078">
        <input type="checkbox" />
        <span className="checkbox-1078__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    display: grid;
    place-items: center;
    border: 2px solid #60a5fa;
    border-radius: 50%;
}
.Checkbox input:checked + .Checkbox-box::after {
    content: "";
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #60a5fa;
}`,
  },
  {
    id: 1079,
    name: "Orange Inner Dot",
    preview: (
      <label className="checkbox-1079">
        <input type="checkbox" />
        <span className="checkbox-1079__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    display: grid;
    place-items: center;
    border: 2px solid #fb923c;
    border-radius: 50%;
}
.Checkbox input:checked + .Checkbox-box::after {
    content: "";
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #fb923c;
}`,
  },
  {
    id: 1080,
    name: "Green Inner Dot",
    preview: (
      <label className="checkbox-1080">
        <input type="checkbox" />
        <span className="checkbox-1080__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    display: grid;
    place-items: center;
    border: 2px solid #4ade80;
    border-radius: 50%;
}
.Checkbox input:checked + .Checkbox-box::after {
    content: "";
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #4ade80;
}`,
  },
  {
    id: 1081,
    name: "Gradient Square",
    preview: (
      <label className="checkbox-1081">
        <input type="checkbox" />
        <span className="checkbox-1081__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    border: 2px solid transparent;
    border-radius: 5px;
    background:
        linear-gradient(#0b0b0d,#0b0b0d) padding-box,
        linear-gradient(135deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1) border-box;
}
.Checkbox input:checked + .Checkbox-box {
    background:
        linear-gradient(135deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1) padding-box,
        linear-gradient(135deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1) border-box;
}`,
  },
  {
    id: 1082,
    name: "Gradient Circle",
    preview: (
      <label className="checkbox-1082">
        <input type="checkbox" />
        <span className="checkbox-1082__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    border: 2px solid transparent;
    border-radius: 50%;
    background:
        linear-gradient(#0b0b0d,#0b0b0d) padding-box,
        linear-gradient(135deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1) border-box;
}
.Checkbox input:checked + .Checkbox-box {
    background:
        radial-gradient(circle,#fff 0 3px,#0b0b0d 4px) padding-box,
        linear-gradient(135deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1) border-box;
}`,
  },
  {
    id: 1083,
    name: "Rainbow Square",
    preview: (
      <label className="checkbox-1083">
        <input type="checkbox" />
        <span className="checkbox-1083__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    border: 2px solid transparent;
    border-radius: 5px;
    background:
        linear-gradient(#0b0b0d,#0b0b0d) padding-box,
        linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899) border-box;
    background-size: 100% 100%, 300% 100%;
    animation: checkbox-1083-rainbow 4s linear infinite;
}
.Checkbox input:checked + .Checkbox-box {
    background:
        linear-gradient(135deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899) padding-box,
        linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899) border-box;
}
@keyframes checkbox-1083-rainbow {
    to {
        background-position: 0 0, 300% 0;
    }
}`,
  },
  {
    id: 1084,
    name: "Rainbow Circle",
    preview: (
      <label className="checkbox-1084">
        <input type="checkbox" />
        <span className="checkbox-1084__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 26px;
    height: 26px;
    border: 2px solid transparent;
    border-radius: 50%;
    background:
        linear-gradient(#0b0b0d,#0b0b0d) padding-box,
        linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899) border-box;
    background-size: 100% 100%, 300% 100%;
    animation: checkbox-1084-rainbow 4s linear infinite;
}
.Checkbox input:checked + .Checkbox-box {
    background:
        radial-gradient(circle,#fff 0 4px,#0b0b0d 5px) padding-box,
        linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899) border-box;
}
@keyframes checkbox-1084-rainbow {
    to {
        background-position: 0 0, 300% 0;
    }
}`,
  },
  {
    id: 1085,
    name: "Glass Square",
    preview: (
      <label className="checkbox-1085">
        <input type="checkbox" />
        <span className="checkbox-1085__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: 6px;
    background: rgba(255,255,255,.06);
    backdrop-filter: blur(8px);
}
.Checkbox input:checked + .Checkbox-box {
    border-color: rgba(255,255,255,.7);
    background: rgba(255,255,255,.25);
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1086,
    name: "Glass Circle",
    preview: (
      <label className="checkbox-1086">
        <input type="checkbox" />
        <span className="checkbox-1086__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 26px;
    height: 26px;
    border: 1px solid rgba(255,255,255,.35);
    border-radius: 50%;
    background: rgba(255,255,255,.05);
    backdrop-filter: blur(8px);
}
.Checkbox input:checked + .Checkbox-box {
    border-color: rgba(255,255,255,.8);
    background: rgba(255,255,255,.25);
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1087,
    name: "Dashed Checkbox",
    preview: (
      <label className="checkbox-1087">
        <input type="checkbox" />
        <span className="checkbox-1087__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    border: 2px dashed #71717a;
    border-radius: 5px;
}
.Checkbox input:checked + .Checkbox-box {
    border-style: solid;
    border-color: #a1a1aa;
    background: #a1a1aa;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1088,
    name: "Dashed Circle",
    preview: (
      <label className="checkbox-1088">
        <input type="checkbox" />
        <span className="checkbox-1088__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 26px;
    height: 26px;
    border: 2px dashed #71717a;
    border-radius: 50%;
}
.Checkbox input:checked + .Checkbox-box {
    border-style: solid;
    border-color: #a1a1aa;
    background: #a1a1aa;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}`,
  },
  {
    id: 1089,
    name: "Animated Square",
    preview: (
      <label className="checkbox-1089">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1089__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    border: 2px solid #4ade80;
    border-radius: 5px;
}
.Checkbox input:checked + .Checkbox-box {
    background: #4ade80;
    animation: checkbox-1089-pop .3s ease;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}
@keyframes checkbox-1089-pop {
    0% {
        transform: scale(.6);
    }
    70% {
        transform: scale(1.12);
    }
    100% {
        transform: scale(1);
    }
}`,
  },
  {
    id: 1090,
    name: "Animated Circle",
    preview: (
      <label className="checkbox-1090">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1090__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 26px;
    height: 26px;
    border: 2px solid #60a5fa;
    border-radius: 50%;
}
.Checkbox input:checked + .Checkbox-box {
    background: #60a5fa;
    animation: checkbox-1090-pop .3s ease;
    box-shadow: inset 0 0 0 5px #0b0b0d;
}
@keyframes checkbox-1090-pop {
    0% {
        transform: scale(.6);
    }
    70% {
        transform: scale(1.12);
    }
    100% {
        transform: scale(1);
    }
}`,
  },
  {
    id: 1091,
    name: "Pulse Checkbox",
    preview: (
      <label className="checkbox-1091">
        <input type="checkbox" />
        <span className="checkbox-1091__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    border: 2px solid #22d3ee;
    border-radius: 6px;
    animation: checkbox-1091-pulse 2s infinite;
}
.Checkbox input:checked + .Checkbox-box {
    background: #22d3ee;
    box-shadow: inset 0 0 0 5px #0b0b0d, 0 0 18px rgba(34,211,238,.4);
}
@keyframes checkbox-1091-pulse {
    50% {
        box-shadow: 0 0 10px rgba(34,211,238,.2);
    }
}`,
  },
  {
    id: 1092,
    name: "Pulse Circle",
    preview: (
      <label className="checkbox-1092">
        <input type="checkbox" />
        <span className="checkbox-1092__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 26px;
    height: 26px;
    border: 2px solid #a78bfa;
    border-radius: 50%;
    animation: checkbox-1092-pulse 2s infinite;
}
.Checkbox input:checked + .Checkbox-box {
    background: #a78bfa;
    box-shadow: inset 0 0 0 5px #0b0b0d, 0 0 20px rgba(167,139,250,.4);
}
@keyframes checkbox-1092-pulse {
    50% {
        box-shadow: 0 0 10px rgba(167,139,250,.2);
    }
}`,
  },
  {
    id: 1093,
    name: "Minimal Square",
    preview: (
      <label className="checkbox-1093">
        <input type="checkbox" />
        <span className="checkbox-1093__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 20px;
    height: 20px;
    border: 1px solid #52525b;
    border-radius: 3px;
}
.Checkbox input:checked + .Checkbox-box {
    background: #e4e4e7;
    border-color: #e4e4e7;
    box-shadow: inset 0 0 0 4px #0b0b0d;
}`,
  },
  {
    id: 1094,
    name: "Minimal Circle",
    preview: (
      <label className="checkbox-1094">
        <input type="checkbox" />
        <span className="checkbox-1094__box"></span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-box"></span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 21px;
    height: 21px;
    border: 1px solid #52525b;
    border-radius: 50%;
}
.Checkbox input:checked + .Checkbox-box {
    background: #e4e4e7;
    border-color: #e4e4e7;
    box-shadow: inset 0 0 0 4px #0b0b0d;
}`,
  },
  {
    id: 1095,
    name: "Red Filled Checkbox",
    preview: (
      <label className="checkbox-1095">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1095__box">
          <i className="fa-solid fa-check"></i>
        </span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    display: grid;
    place-items: center;
    border: 2px solid #ef4444;
    border-radius: 5px;
    background: #ef4444;
    color: #fff;
}
.Checkbox-box i {
    font-size: 12px;
}`,
  },
  {
    id: 1096,
    name: "Orange Filled Circle",
    preview: (
      <label className="checkbox-1096">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1096__box">
          <i className="fa-solid fa-check"></i>
        </span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 26px;
    height: 26px;
    display: grid;
    place-items: center;
    border: 2px solid #f97316;
    border-radius: 50%;
    background: #f97316;
    color: #fff;
}
.Checkbox-box i {
    font-size: 12px;
}`,
  },
  {
    id: 1097,
    name: "Cyan Filled Square",
    preview: (
      <label className="checkbox-1097">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1097__box">
          <i className="fa-solid fa-check"></i>
        </span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 25px;
    height: 25px;
    display: grid;
    place-items: center;
    border: 2px solid #22d3ee;
    border-radius: 5px;
    background: #22d3ee;
    color: #082f49;
}
.Checkbox-box i {
    font-size: 11px;
}`,
  },
  {
    id: 1098,
    name: "Purple Filled Circle",
    preview: (
      <label className="checkbox-1098">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1098__box">
          <i className="fa-solid fa-check"></i>
        </span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 26px;
    height: 26px;
    display: grid;
    place-items: center;
    border: 2px solid #8b5cf6;
    border-radius: 50%;
    background: #8b5cf6;
    color: #fff;
}
.Checkbox-box i {
    font-size: 12px;
}`,
  },
  {
    id: 1099,
    name: "Rainbow Checkbox Glow",
    preview: (
      <label className="checkbox-1099">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1099__box">
          <i className="fa-solid fa-check"></i>
        </span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 26px;
    height: 26px;
    display: grid;
    place-items: center;
    border: 2px solid transparent;
    border-radius: 7px;
    background:
        linear-gradient(#18181b,#18181b) padding-box,
        linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899) border-box;
    background-size: 100% 100%, 300% 100%;
    animation: checkbox-1099-rainbow 3s linear infinite;
    color: #fff;
    box-shadow: 0 0 16px rgba(139,92,246,.35);
}
.Checkbox-box i {
    font-size: 11px;
}
@keyframes checkbox-1099-rainbow {
    to {
        background-position: 0 0, 300% 0;
    }
}`,
  },
  {
    id: 1100,
    name: "Ultimate Rainbow Circle",
    preview: (
      <label className="checkbox-1100">
        <input type="checkbox" defaultChecked />
        <span className="checkbox-1100__box">
          <i className="fa-solid fa-check"></i>
        </span>
      </label>
    ),
    html: `<label class="Checkbox">
    <input type="checkbox" checked>
    <span class="Checkbox-box">
        <i class="fa-solid fa-check"></i>
    </span>
</label>`,
    css: `.Checkbox {
    display: inline-flex;
    cursor: pointer;
}
.Checkbox input {
    display: none;
}
.Checkbox-box {
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    border: 2px solid transparent;
    border-radius: 50%;
    background:
        linear-gradient(#18181b,#18181b) padding-box,
        linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899,#ef4444) border-box;
    background-size: 100% 100%, 300% 100%;
    animation: checkbox-1100-rainbow 2.5s linear infinite;
    color: #fff;
    box-shadow:
        0 0 12px rgba(239,68,68,.2),
        0 0 24px rgba(99,102,241,.15);
}
.Checkbox-box i {
    font-size: 12px;
}
@keyframes checkbox-1100-rainbow {
    to {
        background-position: 0 0, 300% 0;
    }
}`,
  },

  {
    id: 2257,
    name: "Dark Energy Core Checkbox",
    preview: (
      <div className="checkbox-2257">
        <label className="checkbox-2257__control">
          <input type="checkbox" className="checkbox-2257__input" />
          <span className="checkbox-2257__visual">
            <span className="checkbox-2257__halo"></span>
            <span className="checkbox-2257__ring checkbox-2257__ring--outer"></span>
            <span className="checkbox-2257__ring checkbox-2257__ring--middle"></span>
            <span className="checkbox-2257__ring checkbox-2257__ring--inner"></span>
            <span className="checkbox-2257__core"></span>
            <span className="checkbox-2257__check">
              <i className="fa-solid fa-check"></i>
            </span>
            <span className="checkbox-2257__scan"></span>
          </span>
          <span className="checkbox-2257__info">
            <strong>Dark Energy</strong>
            <span>Advanced system module</span>
            <small>CORE STATUS</small>
          </span>
          <span className="checkbox-2257__state">
            <span className="checkbox-2257__state-dot"></span>
            <span className="checkbox-2257__state-text">STANDBY</span>
          </span>
        </label>
      </div>
    ),
    html: `<label class="DarkEnergyCheckbox">
  <input type="checkbox" class="DarkEnergyCheckbox-input">
  <span class="DarkEnergyCheckbox-visual">
    <span class="DarkEnergyCheckbox-halo"></span>
    <span class="DarkEnergyCheckbox-ring DarkEnergyCheckbox-ring--outer"></span>
    <span class="DarkEnergyCheckbox-ring DarkEnergyCheckbox-ring--middle"></span>
    <span class="DarkEnergyCheckbox-ring DarkEnergyCheckbox-ring--inner"></span>
    <span class="DarkEnergyCheckbox-core"></span>
    <span class="DarkEnergyCheckbox-check">
      <i class="fa-solid fa-check"></i>
    </span>
    <span class="DarkEnergyCheckbox-scan"></span>
  </span>
  <span class="DarkEnergyCheckbox-info">
    <strong>Dark Energy</strong>
    <span>Advanced system module</span>
    <small>CORE STATUS</small>
  </span>
  <span class="DarkEnergyCheckbox-state">
    <span class="DarkEnergyCheckbox-state-dot"></span>
    <span class="DarkEnergyCheckbox-state-text">STANDBY</span>
  </span>
</label>`,
    css: `.DarkEnergyCheckbox {
  position: relative;
  width: 100%;
  max-width: 620px;
  min-height: 118px;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 20px 22px;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid rgba(71,85,105,.28);
  border-radius: 24px;
  background:
    radial-gradient(circle at 12% 50%,rgba(34,211,238,.05),transparent 22%),
    radial-gradient(circle at 80% 30%,rgba(139,92,246,.05),transparent 30%),
    linear-gradient(145deg,#07090d,#0c1017 55%,#05070a);
  color: #fff;
  font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
  box-shadow:
    inset 0 1px rgba(255,255,255,.045),
    inset 0 -18px 35px rgba(0,0,0,.18),
    0 18px 45px rgba(0,0,0,.3);
}
.DarkEnergyCheckbox::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg,transparent,rgba(255,255,255,.018),transparent),
    repeating-linear-gradient(
      90deg,
      transparent 0,
      transparent 38px,
      rgba(148,163,184,.018) 39px,
      transparent 40px
    );
}
.DarkEnergyCheckbox::after {
  content: "";
  position: absolute;
  width: 260px;
  height: 260px;
  left: 80px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background: radial-gradient(circle,rgba(34,211,238,.04),transparent 68%);
  filter: blur(18px);
  pointer-events: none;
}
.DarkEnergyCheckbox-input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
}
.DarkEnergyCheckbox-visual {
  position: relative;
  width: 76px;
  height: 76px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  border: 1px solid rgba(100,116,139,.28);
  border-radius: 20px;
  background:
    radial-gradient(circle at 50% 50%,rgba(15,23,42,.92),rgba(4,7,12,1) 72%);
  box-shadow:
    inset 0 1px rgba(255,255,255,.055),
    inset 0 -10px 22px rgba(0,0,0,.32),
    0 10px 26px rgba(0,0,0,.28);
  overflow: hidden;
  isolation: isolate;
  cursor: pointer;
  transition:
    transform .18s ease,
    border-color .25s ease,
    box-shadow .25s ease,
    background .25s ease;
}
.DarkEnergyCheckbox-visual::before {
  content: "";
  position: absolute;
  inset: 3px;
  border: 1px solid rgba(148,163,184,.1);
  border-radius: 17px;
  pointer-events: none;
}
.DarkEnergyCheckbox-visual::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: linear-gradient(90deg,transparent,rgba(100,116,139,.1),transparent);
  pointer-events: none;
}
.DarkEnergyCheckbox-input:focus-visible + .DarkEnergyCheckbox-visual {
  outline: none;
  border-color: rgba(34,211,238,.55);
  box-shadow:
    0 0 0 3px rgba(34,211,238,.12),
    0 0 26px rgba(34,211,238,.16),
    inset 0 1px rgba(255,255,255,.06);
}
.DarkEnergyCheckbox-visual:hover {
  border-color: rgba(34,211,238,.32);
  transform: translateY(-2px);
  box-shadow:
    0 0 16px rgba(34,211,238,.08),
    0 14px 28px rgba(0,0,0,.32),
    inset 0 1px rgba(255,255,255,.07);
}
.DarkEnergyCheckbox-input:active + .DarkEnergyCheckbox-visual {
  transform: scale(.95);
}
.DarkEnergyCheckbox-halo {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: radial-gradient(circle,rgba(34,211,238,.16),transparent 68%);
  opacity: .32;
  transition:
    opacity .3s ease,
    transform .35s ease,
    filter .35s ease;
}
.DarkEnergyCheckbox-input:checked + .DarkEnergyCheckbox-visual .DarkEnergyCheckbox-halo {
  opacity: 1;
  transform: scale(1.18);
  filter: blur(1px);
}
.DarkEnergyCheckbox-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid transparent;
  transition:
    border-color .3s ease,
    transform .5s ease,
    opacity .3s ease;
}
.DarkEnergyCheckbox-ring--outer {
  width: 60px;
  height: 60px;
  border-top-color: rgba(100,116,139,.28);
  border-right-color: rgba(100,116,139,.12);
}
.DarkEnergyCheckbox-ring--middle {
  width: 47px;
  height: 47px;
  border-left-color: rgba(71,85,105,.24);
  border-bottom-color: rgba(71,85,105,.12);
}
.DarkEnergyCheckbox-ring--inner {
  width: 34px;
  height: 34px;
  border-top-color: rgba(71,85,105,.18);
  border-right-color: rgba(71,85,105,.08);
}
.DarkEnergyCheckbox-input:checked + .DarkEnergyCheckbox-visual .DarkEnergyCheckbox-ring--outer {
  border-top-color: rgba(34,211,238,.9);
  border-right-color: rgba(34,211,238,.24);
  transform: rotate(180deg);
  animation: dark-energy-2257-outer 4s linear infinite;
}
.DarkEnergyCheckbox-input:checked + .DarkEnergyCheckbox-visual .DarkEnergyCheckbox-ring--middle {
  border-left-color: rgba(139,92,246,.7);
  border-bottom-color: rgba(34,211,238,.35);
  transform: rotate(-180deg);
  animation: dark-energy-2257-middle 2.7s linear infinite;
}
.DarkEnergyCheckbox-input:checked + .DarkEnergyCheckbox-visual .DarkEnergyCheckbox-ring--inner {
  border-top-color: rgba(103,232,249,.75);
  border-right-color: rgba(34,211,238,.28);
  transform: rotate(180deg);
  animation: dark-energy-2257-inner 1.8s linear infinite;
}
.DarkEnergyCheckbox-core {
  position: absolute;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 35% 30%,#fff 0%,#ecfeff 14%,#67e8f9 32%,#22d3ee 52%,#0e7490 75%,#082f49 100%);
  opacity: .25;
  transform: scale(.65);
  box-shadow:
    0 0 5px rgba(255,255,255,.24),
    0 0 12px rgba(34,211,238,.2);
  transition:
    opacity .3s ease,
    transform .4s cubic-bezier(.2,1.4,.3,1),
    box-shadow .4s ease;
  z-index: 4;
}
.DarkEnergyCheckbox-input:checked + .DarkEnergyCheckbox-visual .DarkEnergyCheckbox-core {
  opacity: 1;
  transform: scale(1.25);
  box-shadow:
    0 0 7px rgba(255,255,255,.75),
    0 0 15px rgba(34,211,238,.95),
    0 0 30px rgba(34,211,238,.45);
  animation: dark-energy-2257-core 1.5s ease-in-out infinite;
}
.DarkEnergyCheckbox-check {
  position: absolute;
  z-index: 5;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #ecfeff;
  font-size: 11px;
  background: rgba(34,211,238,.05);
  opacity: 0;
  transform: scale(.45) rotate(-90deg);
  text-shadow:
    0 0 6px #fff,
    0 0 13px #22d3ee;
  transition:
    opacity .2s ease,
    transform .42s cubic-bezier(.2,1.5,.3,1);
}
.DarkEnergyCheckbox-input:checked + .DarkEnergyCheckbox-visual .DarkEnergyCheckbox-check {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}
.DarkEnergyCheckbox-pulse {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(34,211,238,.6);
  border-radius: 50%;
  opacity: 0;
}
.DarkEnergyCheckbox-input:checked + .DarkEnergyCheckbox-visual .DarkEnergyCheckbox-pulse {
  animation: dark-energy-2257-pulse 1.7s ease-out infinite;
}
.DarkEnergyCheckbox-scan {
  position: absolute;
  top: -15%;
  left: -50%;
  width: 35%;
  height: 130%;
  background: linear-gradient(90deg,transparent,rgba(103,232,249,.38),transparent);
  transform: skewX(-18deg);
  opacity: 0;
  z-index: 6;
  pointer-events: none;
}
.DarkEnergyCheckbox-input:checked + .DarkEnergyCheckbox-visual .DarkEnergyCheckbox-scan {
  opacity: 1;
  animation: dark-energy-2257-scan 2.5s ease-in-out infinite;
}
.DarkEnergyCheckbox-info {
  min-width: 0;
  display: flex;
  flex-direction: column;
  user-select: none;
}
.DarkEnergyCheckbox-info strong {
  color: #f8fafc;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .2px;
}
.DarkEnergyCheckbox-info span {
  margin-top: 4px;
  color: #94a3b8;
  font-size: 10px;
}
.DarkEnergyCheckbox-info small {
  margin-top: 9px;
  color: #475569;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: 1.8px;
  transition: color .3s ease;
}
.DarkEnergyCheckbox-state {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 7px;
  margin-left: auto;
  min-width: 62px;
  user-select: none;
}
.DarkEnergyCheckbox-state-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #475569;
  box-shadow: 0 0 0 transparent;
  transition:
    background .3s ease,
    box-shadow .3s ease,
    transform .3s ease;
}
.DarkEnergyCheckbox-state-text {
  color: #475569;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: 1px;
  transition: color .3s ease;
}
.DarkEnergyCheckbox-input:checked ~ .DarkEnergyCheckbox-info small {
  color: rgba(34,211,238,.62);
}
.DarkEnergyCheckbox-input:checked ~ .DarkEnergyCheckbox-state .DarkEnergyCheckbox-state-dot {
  background: #22d3ee;
  box-shadow:
    0 0 6px #22d3ee,
    0 0 16px rgba(34,211,238,.58);
  transform: scale(1.15);
  animation: dark-energy-2257-status 1.4s ease-in-out infinite;
}
.DarkEnergyCheckbox-input:checked ~ .DarkEnergyCheckbox-state .DarkEnergyCheckbox-state-text {
  color: #22d3ee;
}
@keyframes dark-energy-2257-outer {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes dark-energy-2257-middle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
@keyframes dark-energy-2257-inner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes dark-energy-2257-core {
  0%,
  100% {
    transform: scale(1.16);
  }
  50% {
    transform: scale(1.4);
  }
}
@keyframes dark-energy-2257-pulse {
  0% {
    transform: scale(.8);
    opacity: .8;
  }
  75% {
    transform: scale(3);
    opacity: 0;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}
@keyframes dark-energy-2257-scan {
  0% {
    left: -50%;
  }
  55% {
    left: 125%;
  }
  100% {
    left: 125%;
  }
}
@keyframes dark-energy-2257-status {
  0%,
  100% {
    opacity: .6;
  }
  50% {
    opacity: 1;
  }
}`,
  },
  {
    id: 2258,
    name: "Legendary Fire Core Checkbox",
    preview: (
      <div className="checkbox-2258">
        <label className="checkbox-2258__control">
          <input type="checkbox" className="checkbox-2258__input" />
          <span className="checkbox-2258__visual">
            <span className="checkbox-2258__heat"></span>
            <span className="checkbox-2258__ring checkbox-2258__ring--outer"></span>
            <span className="checkbox-2258__ring checkbox-2258__ring--middle"></span>
            <span className="checkbox-2258__ring checkbox-2258__ring--inner"></span>
            <span className="checkbox-2258__flame checkbox-2258__flame--one"></span>
            <span className="checkbox-2258__flame checkbox-2258__flame--two"></span>
            <span className="checkbox-2258__flame checkbox-2258__flame--three"></span>
            <span className="checkbox-2258__core"></span>
            <span className="checkbox-2258__check">
              <i className="fa-solid fa-fire"></i>
            </span>
            <span className="checkbox-2258__embers checkbox-2258__embers--one"></span>
            <span className="checkbox-2258__embers checkbox-2258__embers--two"></span>
            <span className="checkbox-2258__embers checkbox-2258__embers--three"></span>
            <span className="checkbox-2258__embers checkbox-2258__embers--four"></span>
            <span className="checkbox-2258__scan"></span>
          </span>
          <span className="checkbox-2258__info">
            <strong>Inferno Core</strong>
            <span>Thermal energy system</span>
            <small>EMBER PROTOCOL</small>
          </span>
          <span className="checkbox-2258__state">
            <span className="checkbox-2258__state-dot"></span>
            <span className="checkbox-2258__state-text">DORMANT</span>
          </span>
        </label>
      </div>
    ),
    html: `<label class="InfernoCheckbox">
  <input type="checkbox" class="InfernoCheckbox-input">
  <span class="InfernoCheckbox-visual">
    <span class="InfernoCheckbox-heat"></span>
    <span class="InfernoCheckbox-ring InfernoCheckbox-ring--outer"></span>
    <span class="InfernoCheckbox-ring InfernoCheckbox-ring--middle"></span>
    <span class="InfernoCheckbox-ring InfernoCheckbox-ring--inner"></span>
    <span class="InfernoCheckbox-flame InfernoCheckbox-flame--one"></span>
    <span class="InfernoCheckbox-flame InfernoCheckbox-flame--two"></span>
    <span class="InfernoCheckbox-flame InfernoCheckbox-flame--three"></span>
    <span class="InfernoCheckbox-core"></span>
    <span class="InfernoCheckbox-check">
      <i class="fa-solid fa-fire"></i>
    </span>
    <span class="InfernoCheckbox-embers InfernoCheckbox-embers--one"></span>
    <span class="InfernoCheckbox-embers InfernoCheckbox-embers--two"></span>
    <span class="InfernoCheckbox-embers InfernoCheckbox-embers--three"></span>
    <span class="InfernoCheckbox-embers InfernoCheckbox-embers--four"></span>
    <span class="InfernoCheckbox-scan"></span>
  </span>
  <span class="InfernoCheckbox-info">
    <strong>Inferno Core</strong>
    <span>Thermal energy system</span>
    <small>EMBER PROTOCOL</small>
  </span>
  <span class="InfernoCheckbox-state">
    <span class="InfernoCheckbox-state-dot"></span>
    <span class="InfernoCheckbox-state-text">DORMANT</span>
  </span>
</label>`,
    css: `.InfernoCheckbox {
  position: relative;
  width: 100%;
  max-width: 620px;
  min-height: 120px;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 20px 22px;
  box-sizing: border-box;
  overflow: hidden;
  border: 1px solid rgba(120,53,15,.34);
  border-radius: 24px;
  background:
    radial-gradient(circle at 16% 50%,rgba(249,115,22,.07),transparent 20%),
    radial-gradient(circle at 80% 20%,rgba(239,68,68,.05),transparent 28%),
    linear-gradient(145deg,#080503,#120a07 48%,#060403);
  color: #fff;
  font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
  box-shadow:
    inset 0 1px rgba(255,255,255,.04),
    inset 0 -18px 35px rgba(0,0,0,.2),
    0 18px 45px rgba(0,0,0,.34);
}
.InfernoCheckbox::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(251,191,36,.015) 1px,transparent 1px),
    linear-gradient(90deg,rgba(251,191,36,.012) 1px,transparent 1px);
  background-size: 25px 25px;
  mask-image: linear-gradient(to bottom,transparent,#000 20%,#000 80%,transparent);
  pointer-events: none;
}
.InfernoCheckbox::after {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background: radial-gradient(circle,rgba(249,115,22,.055),transparent 68%);
  filter: blur(25px);
  pointer-events: none;
}
.InfernoCheckbox-input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
}
.InfernoCheckbox-visual {
  position: relative;
  width: 78px;
  height: 78px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  overflow: hidden;
  border: 1px solid rgba(120,53,15,.4);
  border-radius: 21px;
  background:
    radial-gradient(circle,#1c0b04 0%,#090503 72%);
  cursor: pointer;
  isolation: isolate;
  box-shadow:
    inset 0 1px rgba(255,255,255,.05),
    inset 0 -12px 24px rgba(0,0,0,.38),
    0 12px 28px rgba(0,0,0,.3);
  transition:
    transform .18s ease,
    border-color .25s ease,
    box-shadow .25s ease,
    background .3s ease;
}
.InfernoCheckbox-visual::before {
  content: "";
  position: absolute;
  inset: 4px;
  border: 1px solid rgba(251,146,60,.08);
  border-radius: 17px;
}
.InfernoCheckbox-visual::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: linear-gradient(90deg,transparent,rgba(251,146,60,.1),transparent);
}
.InfernoCheckbox-input:focus-visible + .InfernoCheckbox-visual {
  outline: none;
  border-color: rgba(251,146,60,.6);
  box-shadow:
    0 0 0 3px rgba(249,115,22,.12),
    0 0 28px rgba(249,115,22,.16),
    inset 0 1px rgba(255,255,255,.06);
}
.InfernoCheckbox-visual:hover {
  transform: translateY(-2px);
  border-color: rgba(249,115,22,.45);
  box-shadow:
    0 0 18px rgba(249,115,22,.09),
    0 15px 32px rgba(0,0,0,.34),
    inset 0 1px rgba(255,255,255,.07);
}
.InfernoCheckbox-input:active + .InfernoCheckbox-visual {
  transform: scale(.95);
}
.InfernoCheckbox-input:checked + .InfernoCheckbox-visual {
  border-color: rgba(251,146,60,.75);
  background:
    radial-gradient(circle at 50% 48%,rgba(249,115,22,.18),#160704 62%,#070302 100%);
  box-shadow:
    inset 0 1px rgba(255,255,255,.07),
    0 0 14px rgba(249,115,22,.28),
    0 0 34px rgba(239,68,68,.13),
    0 18px 35px rgba(0,0,0,.42);
}
.InfernoCheckbox-heat {
  position: absolute;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background:
    radial-gradient(circle,rgba(255,251,235,.22),rgba(251,146,60,.14) 28%,rgba(239,68,68,.07) 54%,transparent 72%);
  filter: blur(4px);
  opacity: .22;
  transition:
    transform .35s ease,
    opacity .35s ease,
    filter .35s ease;
}
.InfernoCheckbox-input:checked + .InfernoCheckbox-visual .InfernoCheckbox-heat {
  opacity: 1;
  transform: scale(1.25);
  filter: blur(2px);
  animation: inferno-2258-heat 1.8s ease-in-out infinite;
}
.InfernoCheckbox-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid transparent;
  transition:
    opacity .3s ease,
    border-color .3s ease;
}
.InfernoCheckbox-ring--outer {
  width: 64px;
  height: 64px;
  border-top-color: rgba(146,64,14,.5);
  border-right-color: rgba(146,64,14,.12);
}
.InfernoCheckbox-ring--middle {
  width: 49px;
  height: 49px;
  border-left-color: rgba(180,83,9,.38);
  border-bottom-color: rgba(180,83,9,.12);
}
.InfernoCheckbox-ring--inner {
  width: 35px;
  height: 35px;
  border-top-color: rgba(234,88,12,.25);
  border-right-color: rgba(234,88,12,.08);
}
.InfernoCheckbox-input:checked + .InfernoCheckbox-visual .InfernoCheckbox-ring--outer {
  border-top-color: #fb923c;
  border-right-color: rgba(251,146,60,.22);
  animation: inferno-2258-ring-one 4s linear infinite;
}
.InfernoCheckbox-input:checked + .InfernoCheckbox-visual .InfernoCheckbox-ring--middle {
  border-left-color: #f97316;
  border-bottom-color: rgba(239,68,68,.32);
  animation: inferno-2258-ring-two 2.6s linear infinite;
}
.InfernoCheckbox-input:checked + .InfernoCheckbox-visual .InfernoCheckbox-ring--inner {
  border-top-color: #fb7185;
  border-right-color: rgba(251,113,133,.25);
  animation: inferno-2258-ring-three 1.7s linear infinite;
}
.InfernoCheckbox-flame {
  position: absolute;
  bottom: 17px;
  border-radius: 60% 40% 55% 45%;
  background:
    linear-gradient(to top,#7c2d12 0%,#ea580c 45%,#fb923c 72%,#fff7ed 100%);
  opacity: 0;
  filter: blur(.2px);
  transform-origin: bottom center;
  transition:
    opacity .3s ease,
    transform .3s ease;
}
.InfernoCheckbox-flame--one {
  width: 15px;
  height: 27px;
  left: 31px;
  transform: rotate(-8deg) scale(.55);
}
.InfernoCheckbox-flame--two {
  width: 11px;
  height: 21px;
  left: 24px;
  transform: rotate(8deg) scale(.5);
}
.InfernoCheckbox-flame--three {
  width: 10px;
  height: 18px;
  right: 24px;
  transform: rotate(-12deg) scale(.45);
}
.InfernoCheckbox-input:checked + .InfernoCheckbox-visual .InfernoCheckbox-flame {
  opacity: .8;
}
.InfernoCheckbox-input:checked + .InfernoCheckbox-visual .InfernoCheckbox-flame--one {
  transform: rotate(-4deg) scale(1);
  animation: inferno-2258-flame-one .9s ease-in-out infinite alternate;
}
.InfernoCheckbox-input:checked + .InfernoCheckbox-visual .InfernoCheckbox-flame--two {
  transform: rotate(6deg) scale(.85);
  animation: inferno-2258-flame-two .7s ease-in-out infinite alternate;
}
.InfernoCheckbox-input:checked + .InfernoCheckbox-visual .InfernoCheckbox-flame--three {
  transform: rotate(-8deg) scale(.8);
  animation: inferno-2258-flame-three 1.1s ease-in-out infinite alternate;
}
.InfernoCheckbox-core {
  position: absolute;
  width: 17px;
  height: 17px;
  z-index: 4;
  border-radius: 50%;
  background:
    radial-gradient(circle at 35% 28%,#fff 0%,#fff7ed 15%,#fde68a 30%,#fb923c 48%,#ea580c 68%,#7c2d12 100%);
  opacity: .28;
  transform: scale(.62);
  box-shadow:
    0 0 5px rgba(255,247,237,.25),
    0 0 14px rgba(249,115,22,.22);
  transition:
    opacity .3s ease,
    transform .4s cubic-bezier(.2,1.5,.3,1),
    box-shadow .35s ease;
}
.InfernoCheckbox-input:checked + .InfernoCheckbox-visual .InfernoCheckbox-core {
  opacity: 1;
  transform: scale(1.25);
  box-shadow:
    0 0 8px rgba(255,247,237,.9),
    0 0 17px rgba(251,146,60,.9),
    0 0 32px rgba(239,68,68,.5);
  animation: inferno-2258-core 1.3s ease-in-out infinite;
}
.InfernoCheckbox-check {
  position: absolute;
  z-index: 6;
  width: 31px;
  height: 31px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(249,115,22,.04);
  color: #fff7ed;
  font-size: 11px;
  opacity: 0;
  transform: scale(.42) rotate(-45deg);
  text-shadow:
    0 0 5px #fff7ed,
    0 0 13px #fb923c,
    0 0 22px #ef4444;
  transition:
    opacity .2s ease,
    transform .4s cubic-bezier(.2,1.5,.3,1);
}
.InfernoCheckbox-input:checked + .InfernoCheckbox-visual .InfernoCheckbox-check {
  opacity: 1;
  transform: scale(1) rotate(0);
}
.InfernoCheckbox-embers {
  position: absolute;
  z-index: 7;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #fdba74;
  opacity: 0;
  box-shadow:
    0 0 6px #fb923c,
    0 0 13px rgba(239,68,68,.65);
  pointer-events: none;
}
.InfernoCheckbox-embers--one {
  left: 20px;
  bottom: 19px;
}
.InfernoCheckbox-embers--two {
  left: 55px;
  bottom: 24px;
  width: 3px;
  height: 3px;
}
.InfernoCheckbox-embers--three {
  right: 19px;
  bottom: 27px;
  width: 3px;
  height: 3px;
}
.InfernoCheckbox-embers--four {
  right: 29px;
  bottom: 16px;
  width: 5px;
  height: 5px;
}
.InfernoCheckbox-input:checked + .InfernoCheckbox-visual .InfernoCheckbox-embers {
  opacity: 1;
}
.InfernoCheckbox-input:checked + .InfernoCheckbox-visual .InfernoCheckbox-embers--one {
  animation: inferno-2258-ember-one 1.7s ease-out infinite;
}
.InfernoCheckbox-input:checked + .InfernoCheckbox-visual .InfernoCheckbox-embers--two {
  animation: inferno-2258-ember-two 1.3s ease-out infinite .25s;
}
.InfernoCheckbox-input:checked + .InfernoCheckbox-visual .InfernoCheckbox-embers--three {
  animation: inferno-2258-ember-three 1.6s ease-out infinite .1s;
}
.InfernoCheckbox-input:checked + .InfernoCheckbox-visual .InfernoCheckbox-embers--four {
  animation: inferno-2258-ember-four 1.9s ease-out infinite .4s;
}
.InfernoCheckbox-scan {
  position: absolute;
  top: -20%;
  left: -55%;
  width: 32%;
  height: 140%;
  z-index: 8;
  background:
    linear-gradient(90deg,transparent,rgba(255,237,213,.32),transparent);
  transform: skewX(-18deg);
  opacity: 0;
  pointer-events: none;
}
.InfernoCheckbox-input:checked + .InfernoCheckbox-visual .InfernoCheckbox-scan {
  opacity: 1;
  animation: inferno-2258-scan 2.6s ease-in-out infinite;
}
.InfernoCheckbox-info {
  min-width: 0;
  display: flex;
  flex-direction: column;
  user-select: none;
}
.InfernoCheckbox-info strong {
  color: #fff7ed;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .2px;
}
.InfernoCheckbox-info span {
  margin-top: 4px;
  color: #a8a29e;
  font-size: 10px;
}
.InfernoCheckbox-info small {
  margin-top: 9px;
  color: #57534e;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: 1.8px;
  transition: color .3s ease;
}
.InfernoCheckbox-state {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 7px;
  margin-left: auto;
  min-width: 64px;
  user-select: none;
}
.InfernoCheckbox-state-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #57534e;
  transition:
    background .3s ease,
    box-shadow .3s ease,
    transform .3s ease;
}
.InfernoCheckbox-state-text {
  color: #57534e;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: 1px;
  transition: color .3s ease;
}
.InfernoCheckbox-input:checked ~ .InfernoCheckbox-info small {
  color: rgba(251,146,60,.7);
}
.InfernoCheckbox-input:checked ~ .InfernoCheckbox-state .InfernoCheckbox-state-dot {
  background: #fb923c;
  box-shadow:
    0 0 7px #fb923c,
    0 0 16px rgba(239,68,68,.7);
  transform: scale(1.18);
  animation: inferno-2258-status 1.3s ease-in-out infinite;
}
.InfernoCheckbox-input:checked ~ .InfernoCheckbox-state .InfernoCheckbox-state-text {
  color: #fb923c;
}
@keyframes inferno-2258-heat {
  0%,100% {
    transform: scale(.92);
  }
  50% {
    transform: scale(1.12);
  }
}
@keyframes inferno-2258-ring-one {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes inferno-2258-ring-two {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
@keyframes inferno-2258-ring-three {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes inferno-2258-core {
  0%,100% {
    transform: scale(1.15);
  }
  50% {
    transform: scale(1.42);
  }
}
@keyframes inferno-2258-flame-one {
  from {
    transform: rotate(-4deg) scale(1);
  }
  to {
    transform: rotate(7deg) scale(1.12);
  }
}
@keyframes inferno-2258-flame-two {
  from {
    transform: rotate(6deg) scale(.85);
  }
  to {
    transform: rotate(-8deg) scale(1);
  }
}
@keyframes inferno-2258-flame-three {
  from {
    transform: rotate(-8deg) scale(.8);
  }
  to {
    transform: rotate(7deg) scale(.95);
  }
}
@keyframes inferno-2258-ember-one {
  0% {
    transform: translate(0,0) scale(.6);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translate(-7px,-34px) scale(0);
    opacity: 0;
  }
}
@keyframes inferno-2258-ember-two {
  0% {
    transform: translate(0,0) scale(.5);
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translate(5px,-41px) scale(0);
    opacity: 0;
  }
}
@keyframes inferno-2258-ember-three {
  0% {
    transform: translate(0,0) scale(.5);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translate(8px,-37px) scale(0);
    opacity: 0;
  }
}
@keyframes inferno-2258-ember-four {
  0% {
    transform: translate(0,0) scale(.5);
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translate(-4px,-46px) scale(0);
    opacity: 0;
  }
}
@keyframes inferno-2258-scan {
  0% {
    left: -55%;
  }
  55% {
    left: 125%;
  }
  100% {
    left: 125%;
  }
}
@keyframes inferno-2258-status {
  0%,100% {
    opacity: .65;
  }
  50% {
    opacity: 1;
  }
}
`,
  },
  {
    id: 2681,
    name: "Legendary Celestial Checkbox",
    preview: (
      <label className="legendary-celestial-checkbox">
        <input type="checkbox" />
        <span className="celestial-stage">
          <span className="celestial-bg"></span>
          <span className="celestial-stars">
            <span className="celestial-star celestial-star-1"></span>
            <span className="celestial-star celestial-star-2"></span>
            <span className="celestial-star celestial-star-3"></span>
            <span className="celestial-star celestial-star-4"></span>
            <span className="celestial-star celestial-star-5"></span>
            <span className="celestial-star celestial-star-6"></span>
            <span className="celestial-star celestial-star-7"></span>
            <span className="celestial-star celestial-star-8"></span>
            <span className="celestial-star celestial-star-9"></span>
            <span className="celestial-star celestial-star-10"></span>
            <span className="celestial-star celestial-star-11"></span>
            <span className="celestial-star celestial-star-12"></span>
            <span className="celestial-star celestial-star-13"></span>
            <span className="celestial-star celestial-star-14"></span>
            <span className="celestial-star celestial-star-15"></span>
            <span className="celestial-star celestial-star-16"></span>
            <span className="celestial-star celestial-star-17"></span>
            <span className="celestial-star celestial-star-18"></span>
          </span>
          <span className="celestial-orbit celestial-orbit-1"></span>
          <span className="celestial-orbit celestial-orbit-2"></span>
          <span className="celestial-orbit celestial-orbit-3"></span>
          <span className="celestial-orbit celestial-orbit-4"></span>
          <span className="celestial-orbit celestial-orbit-5"></span>
          <span className="celestial-energy celestial-energy-1"></span>
          <span className="celestial-energy celestial-energy-2"></span>
          <span className="celestial-energy celestial-energy-3"></span>
          <span className="celestial-energy celestial-energy-4"></span>
          <span className="celestial-energy celestial-energy-5"></span>
          <span className="celestial-energy celestial-energy-6"></span>
          <span className="celestial-particle celestial-particle-1"></span>
          <span className="celestial-particle celestial-particle-2"></span>
          <span className="celestial-particle celestial-particle-3"></span>
          <span className="celestial-particle celestial-particle-4"></span>
          <span className="celestial-particle celestial-particle-5"></span>
          <span className="celestial-particle celestial-particle-6"></span>
          <span className="celestial-particle celestial-particle-7"></span>
          <span className="celestial-particle celestial-particle-8"></span>
          <span className="celestial-particle celestial-particle-9"></span>
          <span className="celestial-particle celestial-particle-10"></span>
          <span className="celestial-particle celestial-particle-11"></span>
          <span className="celestial-particle celestial-particle-12"></span>
          <span className="celestial-particle celestial-particle-13"></span>
          <span className="celestial-particle celestial-particle-14"></span>
          <span className="celestial-particle celestial-particle-15"></span>
          <span className="celestial-particle celestial-particle-16"></span>
          <span className="celestial-particle celestial-particle-17"></span>
          <span className="celestial-particle celestial-particle-18"></span>
          <span className="celestial-particle celestial-particle-19"></span>
          <span className="celestial-particle celestial-particle-20"></span>
          <span className="celestial-core">
            <span className="celestial-core-halo"></span>
            <span className="celestial-core-ring"></span>
            <span className="celestial-core-inner"></span>
            <span className="celestial-core-icon">
              <i className="ri-check-line"></i>
            </span>
          </span>
          <span className="celestial-beam celestial-beam-1"></span>
          <span className="celestial-beam celestial-beam-2"></span>
          <span className="celestial-beam celestial-beam-3"></span>
          <span className="celestial-spark celestial-spark-1"></span>
          <span className="celestial-spark celestial-spark-2"></span>
          <span className="celestial-spark celestial-spark-3"></span>
          <span className="celestial-spark celestial-spark-4"></span>
          <span className="celestial-spark celestial-spark-5"></span>
          <span className="celestial-spark celestial-spark-6"></span>
          <span className="celestial-scan"></span>
          <span className="celestial-shine"></span>
          <span className="celestial-border"></span>
        </span>
        <span className="celestial-copy">
          <span className="celestial-copy-icon">
            <i className="ri-sparkling-2-fill"></i>
          </span>
          <span className="celestial-copy-text">
            <span className="celestial-title">Legendary</span>
            <span className="celestial-subtitle">Celestial Core</span>
          </span>
        </span>
      </label>
    ),
    html: `<label class="legendary-celestial-checkbox">
  <input type="checkbox">
  <span class="celestial-stage">
    <span class="celestial-bg"></span>
    <span class="celestial-stars">
      <span class="celestial-star celestial-star-1"></span>
      <span class="celestial-star celestial-star-2"></span>
      <span class="celestial-star celestial-star-3"></span>
      <span class="celestial-star celestial-star-4"></span>
      <span class="celestial-star celestial-star-5"></span>
      <span class="celestial-star celestial-star-6"></span>
      <span class="celestial-star celestial-star-7"></span>
      <span class="celestial-star celestial-star-8"></span>
      <span class="celestial-star celestial-star-9"></span>
      <span class="celestial-star celestial-star-10"></span>
      <span class="celestial-star celestial-star-11"></span>
      <span class="celestial-star celestial-star-12"></span>
      <span class="celestial-star celestial-star-13"></span>
      <span class="celestial-star celestial-star-14"></span>
      <span class="celestial-star celestial-star-15"></span>
      <span class="celestial-star celestial-star-16"></span>
      <span class="celestial-star celestial-star-17"></span>
      <span class="celestial-star celestial-star-18"></span>
    </span>
    <span class="celestial-orbit celestial-orbit-1"></span>
    <span class="celestial-orbit celestial-orbit-2"></span>
    <span class="celestial-orbit celestial-orbit-3"></span>
    <span class="celestial-orbit celestial-orbit-4"></span>
    <span class="celestial-orbit celestial-orbit-5"></span>
    <span class="celestial-energy celestial-energy-1"></span>
    <span class="celestial-energy celestial-energy-2"></span>
    <span class="celestial-energy celestial-energy-3"></span>
    <span class="celestial-energy celestial-energy-4"></span>
    <span class="celestial-energy celestial-energy-5"></span>
    <span class="celestial-energy celestial-energy-6"></span>
    <span class="celestial-particle celestial-particle-1"></span>
    <span class="celestial-particle celestial-particle-2"></span>
    <span class="celestial-particle celestial-particle-3"></span>
    <span class="celestial-particle celestial-particle-4"></span>
    <span class="celestial-particle celestial-particle-5"></span>
    <span class="celestial-particle celestial-particle-6"></span>
    <span class="celestial-particle celestial-particle-7"></span>
    <span class="celestial-particle celestial-particle-8"></span>
    <span class="celestial-particle celestial-particle-9"></span>
    <span class="celestial-particle celestial-particle-10"></span>
    <span class="celestial-particle celestial-particle-11"></span>
    <span class="celestial-particle celestial-particle-12"></span>
    <span class="celestial-particle celestial-particle-13"></span>
    <span class="celestial-particle celestial-particle-14"></span>
    <span class="celestial-particle celestial-particle-15"></span>
    <span class="celestial-particle celestial-particle-16"></span>
    <span class="celestial-particle celestial-particle-17"></span>
    <span class="celestial-particle celestial-particle-18"></span>
    <span class="celestial-particle celestial-particle-19"></span>
    <span class="celestial-particle celestial-particle-20"></span>
    <span class="celestial-core">
      <span class="celestial-core-halo"></span>
      <span class="celestial-core-ring"></span>
      <span class="celestial-core-inner"></span>
      <span class="celestial-core-icon"><i class="ri-check-line"></i></span>
    </span>
    <span class="celestial-beam celestial-beam-1"></span>
    <span class="celestial-beam celestial-beam-2"></span>
    <span class="celestial-beam celestial-beam-3"></span>
    <span class="celestial-spark celestial-spark-1"></span>
    <span class="celestial-spark celestial-spark-2"></span>
    <span class="celestial-spark celestial-spark-3"></span>
    <span class="celestial-spark celestial-spark-4"></span>
    <span class="celestial-spark celestial-spark-5"></span>
    <span class="celestial-spark celestial-spark-6"></span>
    <span class="celestial-scan"></span>
    <span class="celestial-shine"></span>
    <span class="celestial-border"></span>
  </span>
  <span class="celestial-copy">
    <span class="celestial-copy-icon"><i class="ri-sparkling-2-fill"></i></span>
    <span class="celestial-copy-text">
      <span class="celestial-title">Legendary</span>
      <span class="celestial-subtitle">Celestial Core</span>
    </span>
  </span>
</label>`,
    css: `
.legendary-celestial-checkbox {
  --celestial-cyan: #7df9ff;
  --celestial-blue: #3e9cff;
  --celestial-violet: #7a5cff;
  --celestial-pink: #e96bff;
  --celestial-white: #f8ffff;
  --celestial-dark: #030813;
  --celestial-deep: #01040a;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 16px;
  min-width: 320px;
  min-height: 112px;
  padding: 12px 20px 12px 12px;
  border: 1px solid rgba(113,221,255,.22);
  border-radius: 24px;
  background:
    linear-gradient(145deg,rgba(255,255,255,.045),transparent 25%),
    linear-gradient(325deg,rgba(57,106,255,.05),transparent 40%),
    rgba(3,9,18,.94);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.055),
    0 9px 28px rgba(0,0,0,.32),
    0 0 28px rgba(65,164,255,.08);
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
  user-select: none;
  transform: translateZ(0);
  transition:
    transform .4s cubic-bezier(.18,.8,.2,1),
    border-color .4s ease,
    box-shadow .4s ease,
    background .4s ease;
}
.legendary-celestial-checkbox:hover {
  transform: translateY(-4px) scale(1.015);
  border-color: rgba(133,241,255,.48);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.07),
    0 14px 38px rgba(0,0,0,.36),
    0 0 38px rgba(73,198,255,.16),
    0 0 70px rgba(111,74,255,.08);
}
.legendary-celestial-checkbox:focus-within {
  border-color: rgba(161,245,255,.66);
  box-shadow:
    0 0 0 3px rgba(75,205,255,.12),
    0 0 0 7px rgba(75,205,255,.05),
    0 0 42px rgba(70,188,255,.22);
}
.legendary-celestial-checkbox input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
.celestial-stage {
  position: relative;
  flex: 0 0 108px;
  width: 108px;
  height: 88px;
  border-radius: 19px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 50%,rgba(76,211,255,.12),transparent 23%),
    radial-gradient(circle at 32% 68%,rgba(108,80,255,.09),transparent 31%),
    linear-gradient(145deg,#071322,#030913 70%);
  box-shadow:
    inset 0 0 0 1px rgba(255,255,255,.035),
    inset 0 0 25px rgba(55,190,255,.045);
  isolation: isolate;
}
.celestial-stage::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 28;
  background:
    linear-gradient(110deg,transparent 0%,rgba(255,255,255,.035) 48%,transparent 54%);
  background-size: 220% 100%;
  animation: celestialPanelSweep2681 8s linear infinite;
  pointer-events: none;
}
.celestial-stage::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 31;
  border-radius: inherit;
  border: 1px solid rgba(255,255,255,.035);
  pointer-events: none;
}
.celestial-bg {
  position: absolute;
  inset: -25%;
  z-index: -5;
  background:
    radial-gradient(circle at 30% 40%,rgba(0,237,255,.16),transparent 20%),
    radial-gradient(circle at 70% 65%,rgba(104,69,255,.18),transparent 24%),
    radial-gradient(circle at 45% 54%,rgba(255,85,211,.08),transparent 30%),
    conic-gradient(
      from 0deg,
      rgba(30,116,255,.08),
      rgba(93,255,226,.08),
      rgba(129,73,255,.09),
      rgba(255,75,208,.06),
      rgba(30,116,255,.08)
    );
  filter: blur(17px);
  animation: celestialBgRotation2681 16s linear infinite;
}
.celestial-stars {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
}
.celestial-star {
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: #ecffff;
  box-shadow:
    0 0 4px #ecffff,
    0 0 10px rgba(86,237,255,.75);
  opacity: .35;
}
.celestial-star-1 { left: 8%; top: 14%; animation: celestialTwinkle1 3.6s ease-in-out infinite; }
.celestial-star-2 { left: 19%; top: 24%; animation: celestialTwinkle2 4.2s ease-in-out infinite; }
.celestial-star-3 { left: 31%; top: 11%; animation: celestialTwinkle3 3.2s ease-in-out infinite; }
.celestial-star-4 { left: 45%; top: 17%; animation: celestialTwinkle4 4.5s ease-in-out infinite; }
.celestial-star-5 { left: 59%; top: 12%; animation: celestialTwinkle5 3.8s ease-in-out infinite; }
.celestial-star-6 { left: 74%; top: 21%; animation: celestialTwinkle6 4s ease-in-out infinite; }
.celestial-star-7 { left: 87%; top: 13%; animation: celestialTwinkle7 3.4s ease-in-out infinite; }
.celestial-star-8 { left: 94%; top: 39%; animation: celestialTwinkle8 4.8s ease-in-out infinite; }
.celestial-star-9 { left: 83%; top: 56%; animation: celestialTwinkle9 3.9s ease-in-out infinite; }
.celestial-star-10 { left: 72%; top: 72%; animation: celestialTwinkle10 4.6s ease-in-out infinite; }
.celestial-star-11 { left: 58%; top: 82%; animation: celestialTwinkle11 3.7s ease-in-out infinite; }
.celestial-star-12 { left: 44%; top: 74%; animation: celestialTwinkle12 4.1s ease-in-out infinite; }
.celestial-star-13 { left: 31%; top: 83%; animation: celestialTwinkle13 3.5s ease-in-out infinite; }
.celestial-star-14 { left: 18%; top: 69%; animation: celestialTwinkle14 4.7s ease-in-out infinite; }
.celestial-star-15 { left: 7%; top: 53%; animation: celestialTwinkle15 3.3s ease-in-out infinite; }
.celestial-star-16 { left: 14%; top: 42%; animation: celestialTwinkle16 4.9s ease-in-out infinite; }
.celestial-star-17 { left: 39%; top: 36%; animation: celestialTwinkle17 3.9s ease-in-out infinite; }
.celestial-star-18 { left: 65%; top: 42%; animation: celestialTwinkle18 4.4s ease-in-out infinite; }
.celestial-orbit {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  border: 1px solid rgba(104,229,255,.11);
  transform: translate(-50%,-50%);
  pointer-events: none;
}
.celestial-orbit-1 {
  width: 64px;
  height: 25px;
  transform: translate(-50%,-50%) rotate(20deg);
  animation: celestialOrbit1 6.5s linear infinite;
}
.celestial-orbit-2 {
  width: 72px;
  height: 30px;
  transform: translate(-50%,-50%) rotate(-35deg);
  border-color: rgba(114,113,255,.09);
  animation: celestialOrbit2 8s linear infinite reverse;
}
.celestial-orbit-3 {
  width: 84px;
  height: 45px;
  transform: translate(-50%,-50%) rotate(75deg);
  border-color: rgba(97,242,232,.07);
  animation: celestialOrbit3 10s linear infinite;
}
.celestial-orbit-4 {
  width: 92px;
  height: 53px;
  transform: translate(-50%,-50%) rotate(-60deg);
  border-color: rgba(181,110,255,.055);
  animation: celestialOrbit4 12s linear infinite reverse;
}
.celestial-orbit-5 {
  width: 99px;
  height: 62px;
  transform: translate(-50%,-50%) rotate(8deg);
  border-color: rgba(81,190,255,.045);
  animation: celestialOrbit5 14s linear infinite;
}
.celestial-energy {
  position: absolute;
  z-index: 8;
  height: 1px;
  border-radius: 999px;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(191,255,250,.18),
      rgba(71,245,225,.78),
      rgba(96,181,255,.18),
      transparent
    );
  filter: blur(.25px);
  pointer-events: none;
}
.celestial-energy-1 {
  left: 2px;
  top: 24px;
  width: 39px;
  transform: rotate(14deg);
  animation: celestialEnergy1 4.5s ease-in-out infinite;
}
.celestial-energy-2 {
  right: 0;
  top: 32px;
  width: 42px;
  transform: rotate(-19deg);
  animation: celestialEnergy2 5.1s ease-in-out infinite;
}
.celestial-energy-3 {
  left: 10px;
  bottom: 16px;
  width: 34px;
  transform: rotate(-12deg);
  animation: celestialEnergy3 4.9s ease-in-out infinite;
}
.celestial-energy-4 {
  right: 10px;
  bottom: 15px;
  width: 40px;
  transform: rotate(15deg);
  animation: celestialEnergy4 5.3s ease-in-out infinite;
}
.celestial-energy-5 {
  left: 29px;
  top: 6px;
  width: 26px;
  transform: rotate(42deg);
  animation: celestialEnergy5 4.3s ease-in-out infinite;
}
.celestial-energy-6 {
  right: 26px;
  bottom: 8px;
  width: 28px;
  transform: rotate(-40deg);
  animation: celestialEnergy6 4.8s ease-in-out infinite;
}
.celestial-particle {
  position: absolute;
  z-index: 11;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #eaffff;
  box-shadow:
    0 0 5px rgba(245,255,255,.95),
    0 0 12px rgba(95,241,255,.7),
    0 0 20px rgba(99,92,255,.35);
  pointer-events: none;
}
.celestial-particle-1 { left: 6px; top: 8px; animation: celestialParticle1 4.1s ease-in-out infinite; }
.celestial-particle-2 { left: 17px; top: 74px; animation: celestialParticle2 4.8s ease-in-out infinite; }
.celestial-particle-3 { left: 29px; top: 48px; animation: celestialParticle3 3.8s ease-in-out infinite; }
.celestial-particle-4 { left: 40px; top: 20px; animation: celestialParticle4 5.2s ease-in-out infinite; }
.celestial-particle-5 { left: 50px; top: 6px; animation: celestialParticle5 4.4s ease-in-out infinite; }
.celestial-particle-6 { left: 62px; top: 77px; animation: celestialParticle6 4.9s ease-in-out infinite; }
.celestial-particle-7 { left: 76px; top: 12px; animation: celestialParticle7 3.9s ease-in-out infinite; }
.celestial-particle-8 { left: 88px; top: 30px; animation: celestialParticle8 5s ease-in-out infinite; }
.celestial-particle-9 { right: 6px; top: 55px; animation: celestialParticle9 4.3s ease-in-out infinite; }
.celestial-particle-10 { right: 17px; bottom: 7px; animation: celestialParticle10 5.4s ease-in-out infinite; }
.celestial-particle-11 { right: 30px; bottom: 28px; animation: celestialParticle11 4.2s ease-in-out infinite; }
.celestial-particle-12 { right: 42px; top: 11px; animation: celestialParticle12 5.1s ease-in-out infinite; }
.celestial-particle-13 { right: 53px; bottom: 6px; animation: celestialParticle13 4.6s ease-in-out infinite; }
.celestial-particle-14 { left: 12px; bottom: 37px; animation: celestialParticle14 5.3s ease-in-out infinite; }
.celestial-particle-15 { left: 97px; top: 43px; animation: celestialParticle15 4s ease-in-out infinite; }
.celestial-particle-16 { left: 70px; bottom: 15px; animation: celestialParticle16 5.2s ease-in-out infinite; }
.celestial-particle-17 { left: 24px; top: 30px; animation: celestialParticle17 4.7s ease-in-out infinite; }
.celestial-particle-18 { right: 26px; top: 45px; animation: celestialParticle18 4.1s ease-in-out infinite; }
.celestial-particle-19 { left: 52px; top: 34px; width: 2px; height: 2px; animation: celestialParticle19 3.7s ease-in-out infinite; }
.celestial-particle-20 { left: 80px; bottom: 39px; width: 2px; height: 2px; animation: celestialParticle20 4.6s ease-in-out infinite; }
.celestial-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 61px;
  height: 61px;
  transform: translate(-50%,-50%);
  z-index: 14;
  border-radius: 50%;
  background:
    radial-gradient(
      circle,
      rgba(224,255,251,.12),
      rgba(74,245,227,.08) 28%,
      rgba(84,145,255,.055) 47%,
      transparent 72%
    );
  animation: celestialCoreFloat2681 3.4s ease-in-out infinite;
  pointer-events: none;
}
.celestial-core-halo {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 82px;
  height: 82px;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background:
    radial-gradient(
      circle,
      rgba(106,255,232,.2),
      rgba(58,182,255,.1) 38%,
      rgba(116,72,255,.06) 56%,
      transparent 72%
    );
  filter: blur(9px);
  animation: celestialHalo2681 3.1s ease-in-out infinite;
}
.celestial-core-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 53px;
  height: 53px;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  border: 1px solid rgba(182,255,247,.22);
  box-shadow:
    0 0 12px rgba(84,244,224,.15),
    inset 0 0 12px rgba(84,244,224,.08);
  animation: celestialCoreRing2681 5s linear infinite;
}
.celestial-core-inner {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 37px;
  height: 37px;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background:
    radial-gradient(
      circle at 34% 29%,
      #ffffff 0%,
      #dffffa 13%,
      #73ffe9 30%,
      #35dce6 48%,
      rgba(77,105,255,.32) 68%,
      transparent 79%
    );
  box-shadow:
    0 0 7px rgba(234,255,253,.95),
    0 0 15px rgba(110,255,231,.82),
    0 0 27px rgba(50,201,230,.55),
    0 0 43px rgba(88,86,255,.32);
  animation: celestialCoreInner2681 2.3s ease-in-out infinite;
}
.celestial-core-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 20px;
  transform: translate(-50%,-50%) scale(.3) rotate(-20deg);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  color: #ffffff;
  filter:
    drop-shadow(0 0 6px rgba(255,255,255,.98))
    drop-shadow(0 0 13px rgba(84,255,232,.7));
}
.legendary-celestial-checkbox input:checked + .celestial-stage .celestial-core-icon {
  opacity: 1;
  transform: translate(-50%,-50%) scale(1) rotate(0deg);
  transition:
    opacity .4s ease .05s,
    transform .55s cubic-bezier(.18,.9,.2,1) .05s;
}
.celestial-core-icon i {
  font-size: 18px;
  font-weight: 900;
}
.celestial-beam {
  position: absolute;
  z-index: 9;
  border-radius: 999px;
  pointer-events: none;
  filter: blur(4px);
}
.celestial-beam-1 {
  left: 3%;
  top: 50%;
  width: 94%;
  height: 1px;
  transform: translateY(-50%);
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(83,255,233,.05) 10%,
      rgba(83,255,233,.55) 50%,
      rgba(126,116,255,.05) 90%,
      transparent
    );
  animation: celestialBeam1 4s ease-in-out infinite;
}
.celestial-beam-2 {
  left: 50%;
  top: 3%;
  width: 1px;
  height: 94%;
  transform: translateX(-50%);
  background:
    linear-gradient(
      to bottom,
      transparent,
      rgba(97,213,255,.04) 12%,
      rgba(119,255,237,.42) 50%,
      rgba(150,105,255,.04) 88%,
      transparent
    );
  filter: blur(3px);
  animation: celestialBeam2 4.8s ease-in-out infinite;
}
.celestial-beam-3 {
  left: 50%;
  top: 50%;
  width: 84px;
  height: 84px;
  transform: translate(-50%,-50%) rotate(45deg);
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,.05),
      rgba(85,255,227,.18),
      rgba(255,255,255,.05),
      transparent
    );
  filter: blur(9px);
  animation: celestialBeam3 5.6s ease-in-out infinite;
}
.celestial-spark {
  position: absolute;
  z-index: 17;
  width: 9px;
  height: 9px;
  pointer-events: none;
}
.celestial-spark::before,
.celestial-spark::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 999px;
  background: #eaffff;
  box-shadow:
    0 0 5px rgba(255,255,255,.95),
    0 0 13px rgba(67,241,225,.7),
    0 0 20px rgba(89,103,255,.34);
}
.celestial-spark::before {
  width: 2px;
  height: 10px;
}
.celestial-spark::after {
  width: 10px;
  height: 2px;
}
.celestial-spark-1 { left: 17px; top: 29px; animation: celestialSpark1 2.8s ease-in-out infinite; }
.celestial-spark-2 { left: 35px; bottom: 23px; animation: celestialSpark2 3.2s ease-in-out infinite .5s; }
.celestial-spark-3 { left: 69px; top: 20px; animation: celestialSpark3 2.7s ease-in-out infinite .3s; }
.celestial-spark-4 { right: 14px; top: 37px; animation: celestialSpark4 3.4s ease-in-out infinite; }
.celestial-spark-5 { right: 32px; bottom: 20px; animation: celestialSpark5 2.9s ease-in-out infinite .4s; }
.celestial-spark-6 { left: 52px; top: 68px; animation: celestialSpark6 3.3s ease-in-out infinite .7s; }
.celestial-scan {
  position: absolute;
  left: 8px;
  right: 8px;
  top: -12%;
  height: 1px;
  z-index: 25;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(90,248,228,.07),
      rgba(230,255,252,.5),
      rgba(88,205,255,.22),
      transparent
    );
  box-shadow: 0 0 8px rgba(87,240,225,.2);
  animation: celestialScan2681 4.8s ease-in-out infinite;
  pointer-events: none;
}
.celestial-shine {
  position: absolute;
  top: -55%;
  left: -80%;
  width: 38%;
  height: 210%;
  z-index: 27;
  transform: rotate(22deg);
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,.02) 25%,
      rgba(228,255,251,.42) 48%,
      rgba(255,255,255,.06) 61%,
      transparent
    );
  filter: blur(1px);
  animation: celestialShine2681 5.4s cubic-bezier(.18,.7,.2,1) infinite;
  pointer-events: none;
}
.celestial-border {
  position: absolute;
  inset: 1px;
  z-index: 29;
  border-radius: 19px;
  padding: 1px;
  background:
    conic-gradient(
      from 0deg,
      rgba(92,255,235,.65),
      rgba(83,188,255,.35),
      rgba(117,92,255,.45),
      rgba(233,106,255,.34),
      rgba(92,255,235,.65)
    );
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  mask-composite: exclude;
  animation: celestialBorder2681 5s linear infinite;
  pointer-events: none;
}
.celestial-copy {
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 150px;
}
.celestial-copy-icon {
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background:
    linear-gradient(145deg,rgba(103,255,234,.12),rgba(84,112,255,.08));
  border: 1px solid rgba(126,235,255,.14);
  box-shadow:
    inset 0 0 12px rgba(99,241,225,.05),
    0 0 14px rgba(69,208,255,.06);
  color: #eaffff;
}
.celestial-copy-icon i {
  font-size: 18px;
  text-shadow:
    0 0 6px rgba(255,255,255,.9),
    0 0 15px rgba(94,255,233,.65);
  animation: celestialIconFloat2681 2.8s ease-in-out infinite;
}
.celestial-copy-text {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.celestial-title {
  font-size: 16px;
  line-height: 1;
  font-weight: 800;
  letter-spacing: .2px;
  color: #f4ffff;
}
.celestial-subtitle {
  font-size: 8px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 2.3px;
  text-transform: uppercase;
  color: rgba(169,233,255,.54);
}
.legendary-celestial-checkbox input:checked + .celestial-stage {
  box-shadow:
    inset 0 0 0 1px rgba(255,255,255,.04),
    inset 0 0 28px rgba(84,246,227,.09),
    0 0 30px rgba(71,242,218,.12);
}
.legendary-celestial-checkbox input:checked + .celestial-stage .celestial-bg {
  animation-duration: 7s;
}
.legendary-celestial-checkbox input:checked + .celestial-stage .celestial-core {
  animation-duration: 1.8s;
}
.legendary-celestial-checkbox input:checked + .celestial-stage .celestial-core-inner {
  animation-duration: 1.2s;
}
.legendary-celestial-checkbox input:checked + .celestial-stage .celestial-core-ring {
  border-color: rgba(202,255,246,.4);
  box-shadow:
    0 0 17px rgba(81,245,222,.24),
    inset 0 0 15px rgba(81,245,222,.12);
  animation-duration: 2.1s;
}
.legendary-celestial-checkbox input:checked + .celestial-stage .celestial-orbit {
  border-color: rgba(111,255,236,.23);
}
.legendary-celestial-checkbox input:checked + .celestial-stage .celestial-particle {
  animation-duration: 2s;
}
.legendary-celestial-checkbox input:checked + .celestial-stage .celestial-star {
  animation-duration: 1.7s;
}
.legendary-celestial-checkbox input:checked + .celestial-stage .celestial-scan {
  animation-duration: 2.3s;
}
.legendary-celestial-checkbox input:checked + .celestial-stage .celestial-shine {
  animation-duration: 2.6s;
}
.legendary-celestial-checkbox input:checked + .celestial-stage .celestial-border {
  animation-duration: 2.5s;
}
.legendary-celestial-checkbox input:checked + .celestial-stage::after {
  border-color: rgba(127,245,235,.15);
}
.legendary-celestial-checkbox input:checked ~ .celestial-copy .celestial-copy-icon {
  border-color: rgba(119,255,238,.34);
  background:
    linear-gradient(145deg,rgba(96,255,227,.17),rgba(101,104,255,.12));
  box-shadow:
    inset 0 0 16px rgba(99,241,225,.08),
    0 0 18px rgba(69,208,255,.13);
}
.legendary-celestial-checkbox input:checked ~ .celestial-copy .celestial-copy-icon i {
  animation-duration: 1.5s;
}
.legendary-celestial-checkbox input:checked ~ .celestial-copy .celestial-title {
  color: #ffffff;
  text-shadow:
    0 0 8px rgba(139,255,239,.24),
    0 0 16px rgba(74,177,255,.1);
}
@keyframes celestialPanelSweep2681 {
  0% {
    background-position: -120% 0;
  }
  45% {
    background-position: 120% 0;
  }
  100% {
    background-position: 120% 0;
  }
}
@keyframes celestialBgRotation2681 {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.06);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
@keyframes celestialTwinkle1 {
  0%,100% { opacity:.18; transform:scale(.7); }
  50% { opacity:.95; transform:scale(1.25); }
}
@keyframes celestialTwinkle2 {
  0%,100% { opacity:.25; transform:scale(.65); }
  50% { opacity:.75; transform:scale(1.1); }
}
@keyframes celestialTwinkle3 {
  0%,100% { opacity:.12; transform:scale(.6); }
  50% { opacity:1; transform:scale(1.35); }
}
@keyframes celestialTwinkle4 {
  0%,100% { opacity:.2; transform:scale(.72); }
  50% { opacity:.82; transform:scale(1.18); }
}
@keyframes celestialTwinkle5 {
  0%,100% { opacity:.18; transform:scale(.62); }
  50% { opacity:.94; transform:scale(1.2); }
}
@keyframes celestialTwinkle6 {
  0%,100% { opacity:.22; transform:scale(.65); }
  50% { opacity:.9; transform:scale(1.22); }
}
@keyframes celestialTwinkle7 {
  0%,100% { opacity:.14; transform:scale(.58); }
  50% { opacity:.9; transform:scale(1.3); }
}
@keyframes celestialTwinkle8 {
  0%,100% { opacity:.2; transform:scale(.62); }
  50% { opacity:.84; transform:scale(1.18); }
}
@keyframes celestialTwinkle9 {
  0%,100% { opacity:.15; transform:scale(.6); }
  50% { opacity:.96; transform:scale(1.26); }
}
@keyframes celestialTwinkle10 {
  0%,100% { opacity:.22; transform:scale(.66); }
  50% { opacity:.8; transform:scale(1.12); }
}
@keyframes celestialTwinkle11 {
  0%,100% { opacity:.13; transform:scale(.56); }
  50% { opacity:.9; transform:scale(1.3); }
}
@keyframes celestialTwinkle12 {
  0%,100% { opacity:.2; transform:scale(.64); }
  50% { opacity:.88; transform:scale(1.18); }
}
@keyframes celestialTwinkle13 {
  0%,100% { opacity:.16; transform:scale(.58); }
  50% { opacity:.93; transform:scale(1.24); }
}
@keyframes celestialTwinkle14 {
  0%,100% { opacity:.23; transform:scale(.66); }
  50% { opacity:.79; transform:scale(1.12); }
}
@keyframes celestialTwinkle15 {
  0%,100% { opacity:.15; transform:scale(.6); }
  50% { opacity:.96; transform:scale(1.27); }
}
@keyframes celestialTwinkle16 {
  0%,100% { opacity:.19; transform:scale(.64); }
  50% { opacity:.84; transform:scale(1.19); }
}
@keyframes celestialTwinkle17 {
  0%,100% { opacity:.11; transform:scale(.54); }
  50% { opacity:.98; transform:scale(1.34); }
}
@keyframes celestialTwinkle18 {
  0%,100% { opacity:.21; transform:scale(.65); }
  50% { opacity:.82; transform:scale(1.16); }
}
@keyframes celestialOrbit1 {
  0% { transform:translate(-50%,-50%) rotate(20deg) scale(.95); opacity:.12; }
  50% { transform:translate(-50%,-50%) rotate(200deg) scale(1.04); opacity:.34; }
  100% { transform:translate(-50%,-50%) rotate(380deg) scale(.95); opacity:.12; }
}
@keyframes celestialOrbit2 {
  0% { transform:translate(-50%,-50%) rotate(-35deg) scale(.92); opacity:.08; }
  50% { transform:translate(-50%,-50%) rotate(145deg) scale(1.06); opacity:.27; }
  100% { transform:translate(-50%,-50%) rotate(325deg) scale(.92); opacity:.08; }
}
@keyframes celestialOrbit3 {
  0% { transform:translate(-50%,-50%) rotate(75deg) scale(.94); opacity:.07; }
  50% { transform:translate(-50%,-50%) rotate(255deg) scale(1.04); opacity:.22; }
  100% { transform:translate(-50%,-50%) rotate(435deg) scale(.94); opacity:.07; }
}
@keyframes celestialOrbit4 {
  0% { transform:translate(-50%,-50%) rotate(-60deg) scale(.93); opacity:.05; }
  50% { transform:translate(-50%,-50%) rotate(120deg) scale(1.04); opacity:.17; }
  100% { transform:translate(-50%,-50%) rotate(300deg) scale(.93); opacity:.05; }
}
@keyframes celestialOrbit5 {
  0% { transform:translate(-50%,-50%) rotate(8deg) scale(.96); opacity:.04; }
  50% { transform:translate(-50%,-50%) rotate(188deg) scale(1.03); opacity:.11; }
  100% { transform:translate(-50%,-50%) rotate(368deg) scale(.96); opacity:.04; }
}
@keyframes celestialEnergy1 {
  0%,100% { transform:translateX(-8px) rotate(14deg) scaleX(.62); opacity:.06; }
  50% { transform:translateX(10px) rotate(11deg) scaleX(1.08); opacity:.58; }
}
@keyframes celestialEnergy2 {
  0%,100% { transform:translateX(9px) rotate(-19deg) scaleX(.58); opacity:.05; }
  50% { transform:translateX(-11px) rotate(-15deg) scaleX(1.05); opacity:.53; }
}
@keyframes celestialEnergy3 {
  0%,100% { transform:translateX(8px) rotate(-12deg) scaleX(.6); opacity:.05; }
  50% { transform:translateX(-9px) rotate(-9deg) scaleX(1.04); opacity:.48; }
}
@keyframes celestialEnergy4 {
  0%,100% { transform:translateX(-8px) rotate(15deg) scaleX(.61); opacity:.05; }
  50% { transform:translateX(10px) rotate(11deg) scaleX(1.07); opacity:.56; }
}
@keyframes celestialEnergy5 {
  0%,100% { transform:translateY(6px) rotate(42deg) scaleX(.58); opacity:.04; }
  50% { transform:translateY(-8px) rotate(48deg) scaleX(1.05); opacity:.43; }
}
@keyframes celestialEnergy6 {
  0%,100% { transform:translateY(-5px) rotate(-40deg) scaleX(.56); opacity:.04; }
  50% { transform:translateY(7px) rotate(-34deg) scaleX(1.06); opacity:.45; }
}
@keyframes celestialParticle1 {
  0%,100% { transform:translate(0,0) scale(.5); opacity:.13; }
  50% { transform:translate(8px,-12px) scale(1.2); opacity:.9; }
}
@keyframes celestialParticle2 {
  0%,100% { transform:translate(0,0) scale(.55); opacity:.16; }
  50% { transform:translate(-7px,-13px) scale(1.15); opacity:.84; }
}
@keyframes celestialParticle3 {
  0%,100% { transform:translate(0,0) scale(.48); opacity:.11; }
  50% { transform:translate(9px,-10px) scale(1.2); opacity:.93; }
}
@keyframes celestialParticle4 {
  0%,100% { transform:translate(0,0) scale(.52); opacity:.14; }
  50% { transform:translate(-8px,12px) scale(1.13); opacity:.86; }
}
@keyframes celestialParticle5 {
  0%,100% { transform:translate(0,0) scale(.45); opacity:.1; }
  50% { transform:translate(5px,14px) scale(1.22); opacity:.94; }
}
@keyframes celestialParticle6 {
  0%,100% { transform:translate(0,0) scale(.56); opacity:.15; }
  50% { transform:translate(-9px,-11px) scale(1.11); opacity:.83; }
}
@keyframes celestialParticle7 {
  0%,100% { transform:translate(0,0) scale(.48); opacity:.12; }
  50% { transform:translate(8px,10px) scale(1.2); opacity:.92; }
}
@keyframes celestialParticle8 {
  0%,100% { transform:translate(0,0) scale(.5); opacity:.14; }
  50% { transform:translate(-9px,-9px) scale(1.16); opacity:.88; }
}
@keyframes celestialParticle9 {
  0%,100% { transform:translate(0,0) scale(.45); opacity:.1; }
  50% { transform:translate(-9px,9px) scale(1.23); opacity:.95; }
}
@keyframes celestialParticle10 {
  0%,100% { transform:translate(0,0) scale(.5); opacity:.13; }
  50% { transform:translate(8px,-11px) scale(1.18); opacity:.89; }
}
@keyframes celestialParticle11 {
  0%,100% { transform:translate(0,0) scale(.54); opacity:.12; }
  50% { transform:translate(-8px,-10px) scale(1.14); opacity:.9; }
}
@keyframes celestialParticle12 {
  0%,100% { transform:translate(0,0) scale(.46); opacity:.1; }
  50% { transform:translate(6px,12px) scale(1.18); opacity:.91; }
}
@keyframes celestialParticle13 {
  0%,100% { transform:translate(0,0) scale(.49); opacity:.12; }
  50% { transform:translate(-7px,-12px) scale(1.2); opacity:.88; }
}
@keyframes celestialParticle14 {
  0%,100% { transform:translate(0,0) scale(.52); opacity:.12; }
  50% { transform:translate(10px,-8px) scale(1.15); opacity:.86; }
}
@keyframes celestialParticle15 {
  0%,100% { transform:translate(0,0) scale(.44); opacity:.1; }
  50% { transform:translate(-10px,8px) scale(1.24); opacity:.93; }
}
@keyframes celestialParticle16 {
  0%,100% { transform:translate(0,0) scale(.5); opacity:.12; }
  50% { transform:translate(-7px,-11px) scale(1.17); opacity:.86; }
}
@keyframes celestialParticle17 {
  0%,100% { transform:translate(0,0) scale(.46); opacity:.1; }
  50% { transform:translate(9px,8px) scale(1.2); opacity:.9; }
}
@keyframes celestialParticle18 {
  0%,100% { transform:translate(0,0) scale(.5); opacity:.11; }
  50% { transform:translate(-8px,-9px) scale(1.2); opacity:.92; }
}
@keyframes celestialParticle19 {
  0%,100% { transform:translate(0,0) scale(.42); opacity:.08; }
  50% { transform:translate(7px,-13px) scale(1.3); opacity:1; }
}
@keyframes celestialParticle20 {
  0%,100% { transform:translate(0,0) scale(.43); opacity:.08; }
  50% { transform:translate(-8px,-12px) scale(1.25); opacity:.96; }
}
@keyframes celestialCoreFloat2681 {
  0%,100% {
    transform:translate(-50%,-50%) translateY(4px) scale(.92);
    opacity:.57;
  }
  50% {
    transform:translate(-50%,-50%) translateY(-5px) scale(1.06);
    opacity:1;
  }
}
@keyframes celestialHalo2681 {
  0%,100% {
    transform:translate(-50%,-50%) scale(.8);
    opacity:.32;
  }
  50% {
    transform:translate(-50%,-50%) scale(1.16);
    opacity:.8;
  }
}
@keyframes celestialCoreRing2681 {
  0% {
    transform:translate(-50%,-50%) rotate(0deg) scale(.94);
    opacity:.18;
  }
  50% {
    transform:translate(-50%,-50%) rotate(180deg) scale(1.05);
    opacity:.62;
  }
  100% {
    transform:translate(-50%,-50%) rotate(360deg) scale(.94);
    opacity:.18;
  }
}
@keyframes celestialCoreInner2681 {
  0%,100% {
    transform:translate(-50%,-50%) scale(.84);
    filter:brightness(.88) saturate(1);
  }
  50% {
    transform:translate(-50%,-50%) scale(1.1);
    filter:brightness(1.34) saturate(1.14);
  }
}
@keyframes celestialBeam1 {
  0%,100% {
    opacity:.13;
    transform:translateY(-50%) scaleX(.72);
  }
  50% {
    opacity:.54;
    transform:translateY(-50%) scaleX(1.05);
  }
}
@keyframes celestialBeam2 {
  0%,100% {
    opacity:.08;
    transform:translateX(-50%) scaleY(.7);
  }
  50% {
    opacity:.42;
    transform:translateX(-50%) scaleY(1.06);
  }
}
@keyframes celestialBeam3 {
  0%,100% {
    opacity:.05;
    transform:translate(-50%,-50%) rotate(45deg) scale(.75);
  }
  50% {
    opacity:.25;
    transform:translate(-50%,-50%) rotate(135deg) scale(1.08);
  }
}
@keyframes celestialSpark1 {
  0%,100% {
    transform:scale(.35) rotate(0deg);
    opacity:.08;
  }
  50% {
    transform:scale(1) rotate(45deg);
    opacity:1;
  }
}
@keyframes celestialSpark2 {
  0%,100% {
    transform:scale(.3) rotate(0deg);
    opacity:.07;
  }
  50% {
    transform:scale(.9) rotate(-45deg);
    opacity:.86;
  }
}
@keyframes celestialSpark3 {
  0%,100% {
    transform:scale(.32) rotate(0deg);
    opacity:.06;
  }
  50% {
    transform:scale(1.05) rotate(45deg);
    opacity:.98;
  }
}
@keyframes celestialSpark4 {
  0%,100% {
    transform:scale(.36) rotate(0deg);
    opacity:.07;
  }
  50% {
    transform:scale(1) rotate(-45deg);
    opacity:.95;
  }
}
@keyframes celestialSpark5 {
  0%,100% {
    transform:scale(.3) rotate(0deg);
    opacity:.06;
  }
  50% {
    transform:scale(.88) rotate(45deg);
    opacity:.84;
  }
}
@keyframes celestialSpark6 {
  0%,100% {
    transform:scale(.32) rotate(0deg);
    opacity:.07;
  }
  50% {
    transform:scale(.98) rotate(-45deg);
    opacity:.92;
  }
}
@keyframes celestialScan2681 {
  0% {
    top:-12%;
    opacity:0;
  }
  11% {
    opacity:.08;
  }
  28% {
    opacity:.65;
  }
  43% {
    opacity:.12;
  }
  61% {
    top:112%;
    opacity:0;
  }
  100% {
    top:112%;
    opacity:0;
  }
}
@keyframes celestialShine2681 {
  0% {
    left:-80%;
    opacity:0;
  }
  9% {
    opacity:.02;
  }
  18% {
    opacity:.72;
  }
  31% {
    opacity:.14;
  }
  45% {
    left:135%;
    opacity:0;
  }
  100% {
    left:135%;
    opacity:0;
  }
}
@keyframes celestialBorder2681 {
  to {
    transform:rotate(360deg);
  }
}
@keyframes celestialIconFloat2681 {
  0%,100% {
    transform:translateY(0) rotate(0deg);
  }
  50% {
    transform:translateY(-3px) rotate(7deg);
  }
}
@media (max-width:600px) {
  .legendary-celestial-checkbox {
    min-width:270px;
    gap:11px;
    padding-right:14px;
  }
  .celestial-stage {
    flex-basis:92px;
    width:92px;
    height:78px;
  }
  .celestial-copy {
    gap:9px;
  }
  .celestial-copy-icon {
    width:30px;
    height:30px;
  }
  .celestial-title {
    font-size:14px;
  }
  .celestial-subtitle {
    font-size:7px;
    letter-spacing:1.8px;
  }
}
@media (max-width:430px) {
  .legendary-celestial-checkbox {
    min-width:225px;
    gap:8px;
    padding:10px;
  }
  .celestial-stage {
    flex-basis:76px;
    width:76px;
    height:68px;
    border-radius:15px;
  }
  .celestial-copy-icon {
    width:27px;
    height:27px;
    border-radius:9px;
  }
  .celestial-copy-icon i {
    font-size:15px;
  }
  .celestial-title {
    font-size:12px;
  }
  .celestial-subtitle {
    font-size:6px;
    letter-spacing:1.4px;
  }
}
@media (prefers-reduced-motion:reduce) {
  .legendary-celestial-checkbox,
  .legendary-celestial-checkbox *,
  .legendary-celestial-checkbox::before,
  .legendary-celestial-checkbox::after {
    animation-duration:.001ms !important;
    animation-iteration-count:1 !important;
    transition-duration:.001ms !important;
  }
}
`,
  },
  {
    id: 2682,
    name: "Legendary Quantum Reactor Checkbox",
    preview: (
      <label className="quantum-reactor-checkbox">
        <input type="checkbox" />
        <span className="quantum-reactor-main">
          <span className="quantum-reactor-background"></span>
          <span className="quantum-reactor-noise"></span>
          <span className="quantum-reactor-grid"></span>
          <span className="quantum-reactor-grid quantum-reactor-grid-2"></span>
          <span className="quantum-reactor-vignette"></span>
          <span className="quantum-reactor-frame">
            <span className="quantum-frame-line quantum-frame-line-1"></span>
            <span className="quantum-frame-line quantum-frame-line-2"></span>
            <span className="quantum-frame-line quantum-frame-line-3"></span>
            <span className="quantum-frame-line quantum-frame-line-4"></span>
            <span className="quantum-frame-corner quantum-frame-corner-1"></span>
            <span className="quantum-frame-corner quantum-frame-corner-2"></span>
            <span className="quantum-frame-corner quantum-frame-corner-3"></span>
            <span className="quantum-frame-corner quantum-frame-corner-4"></span>
          </span>
          <span className="quantum-reactor-hex quantum-reactor-hex-1"></span>
          <span className="quantum-reactor-hex quantum-reactor-hex-2"></span>
          <span className="quantum-reactor-hex quantum-reactor-hex-3"></span>
          <span className="quantum-reactor-hex quantum-reactor-hex-4"></span>
          <span className="quantum-reactor-ring quantum-reactor-ring-1"></span>
          <span className="quantum-reactor-ring quantum-reactor-ring-2"></span>
          <span className="quantum-reactor-ring quantum-reactor-ring-3"></span>
          <span className="quantum-reactor-ring quantum-reactor-ring-4"></span>
          <span className="quantum-reactor-ring quantum-reactor-ring-5"></span>
          <span className="quantum-reactor-ring quantum-reactor-ring-6"></span>
          <span className="quantum-reactor-orbit quantum-reactor-orbit-1"></span>
          <span className="quantum-reactor-orbit quantum-reactor-orbit-2"></span>
          <span className="quantum-reactor-orbit quantum-reactor-orbit-3"></span>
          <span className="quantum-reactor-orbit-dot quantum-reactor-orbit-dot-1"></span>
          <span className="quantum-reactor-orbit-dot quantum-reactor-orbit-dot-2"></span>
          <span className="quantum-reactor-orbit-dot quantum-reactor-orbit-dot-3"></span>
          <span className="quantum-reactor-orbit-dot quantum-reactor-orbit-dot-4"></span>
          <span className="quantum-reactor-orbit-dot quantum-reactor-orbit-dot-5"></span>
          <span className="quantum-reactor-orbit-dot quantum-reactor-orbit-dot-6"></span>
          <span className="quantum-reactor-pulse quantum-reactor-pulse-1"></span>
          <span className="quantum-reactor-pulse quantum-reactor-pulse-2"></span>
          <span className="quantum-reactor-pulse quantum-reactor-pulse-3"></span>
          <span className="quantum-reactor-pulse quantum-reactor-pulse-4"></span>
          <span className="quantum-reactor-energy quantum-reactor-energy-1"></span>
          <span className="quantum-reactor-energy quantum-reactor-energy-2"></span>
          <span className="quantum-reactor-energy quantum-reactor-energy-3"></span>
          <span className="quantum-reactor-energy quantum-reactor-energy-4"></span>
          <span className="quantum-reactor-energy quantum-reactor-energy-5"></span>
          <span className="quantum-reactor-energy quantum-reactor-energy-6"></span>
          <span className="quantum-reactor-energy quantum-reactor-energy-7"></span>
          <span className="quantum-reactor-energy quantum-reactor-energy-8"></span>
          <span className="quantum-reactor-energy quantum-reactor-energy-9"></span>
          <span className="quantum-reactor-energy quantum-reactor-energy-10"></span>
          <span className="quantum-reactor-energy quantum-reactor-energy-11"></span>
          <span className="quantum-reactor-energy quantum-reactor-energy-12"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-1"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-2"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-3"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-4"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-5"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-6"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-7"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-8"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-9"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-10"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-11"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-12"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-13"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-14"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-15"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-16"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-17"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-18"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-19"></span>
          <span className="quantum-reactor-particle quantum-reactor-particle-20"></span>
          <span className="quantum-reactor-spark quantum-reactor-spark-1"></span>
          <span className="quantum-reactor-spark quantum-reactor-spark-2"></span>
          <span className="quantum-reactor-spark quantum-reactor-spark-3"></span>
          <span className="quantum-reactor-spark quantum-reactor-spark-4"></span>
          <span className="quantum-reactor-spark quantum-reactor-spark-5"></span>
          <span className="quantum-reactor-spark quantum-reactor-spark-6"></span>
          <span className="quantum-reactor-spark quantum-reactor-spark-7"></span>
          <span className="quantum-reactor-spark quantum-reactor-spark-8"></span>
          <span className="quantum-reactor-reactor">
            <span className="quantum-reactor-reactor-halo"></span>
            <span className="quantum-reactor-reactor-shell"></span>
            <span className="quantum-reactor-reactor-shell quantum-reactor-reactor-shell-2"></span>
            <span className="quantum-reactor-reactor-shell quantum-reactor-reactor-shell-3"></span>
            <span className="quantum-reactor-reactor-core"></span>
            <span className="quantum-reactor-reactor-core quantum-reactor-reactor-core-2"></span>
            <span className="quantum-reactor-reactor-light"></span>
            <span className="quantum-reactor-check">
              <i className="ri-check-line"></i>
            </span>
          </span>
          <span className="quantum-reactor-beam quantum-reactor-beam-1"></span>
          <span className="quantum-reactor-beam quantum-reactor-beam-2"></span>
          <span className="quantum-reactor-beam quantum-reactor-beam-3"></span>
          <span className="quantum-reactor-beam quantum-reactor-beam-4"></span>
          <span className="quantum-reactor-ray quantum-reactor-ray-1"></span>
          <span className="quantum-reactor-ray quantum-reactor-ray-2"></span>
          <span className="quantum-reactor-ray quantum-reactor-ray-3"></span>
          <span className="quantum-reactor-ray quantum-reactor-ray-4"></span>
          <span className="quantum-reactor-scan quantum-reactor-scan-1"></span>
          <span className="quantum-reactor-scan quantum-reactor-scan-2"></span>
          <span className="quantum-reactor-shine"></span>
          <span className="quantum-reactor-glitch quantum-reactor-glitch-1"></span>
          <span className="quantum-reactor-glitch quantum-reactor-glitch-2"></span>
          <span className="quantum-reactor-status quantum-reactor-status-1"></span>
          <span className="quantum-reactor-status quantum-reactor-status-2"></span>
          <span className="quantum-reactor-status quantum-reactor-status-3"></span>
          <span className="quantum-reactor-border"></span>
        </span>
        <span className="quantum-reactor-label">
          <span className="quantum-reactor-label-icon">
            <i className="ri-cpu-line"></i>
          </span>
          <span className="quantum-reactor-label-copy">
            <span className="quantum-reactor-title">Quantum Core</span>
            <span className="quantum-reactor-subtitle">
              Reactor Authorization
            </span>
          </span>
          <span className="quantum-reactor-indicator"></span>
        </span>
      </label>
    ),
    html: `<label class="quantum-reactor-checkbox">
  <input type="checkbox">
  <span class="quantum-reactor-main">
    <span class="quantum-reactor-background"></span>
    <span class="quantum-reactor-noise"></span>
    <span class="quantum-reactor-grid"></span>
    <span class="quantum-reactor-grid quantum-reactor-grid-2"></span>
    <span class="quantum-reactor-vignette"></span>
    <span class="quantum-reactor-frame">
      <span class="quantum-frame-line quantum-frame-line-1"></span>
      <span class="quantum-frame-line quantum-frame-line-2"></span>
      <span class="quantum-frame-line quantum-frame-line-3"></span>
      <span class="quantum-frame-line quantum-frame-line-4"></span>
      <span class="quantum-frame-corner quantum-frame-corner-1"></span>
      <span class="quantum-frame-corner quantum-frame-corner-2"></span>
      <span class="quantum-frame-corner quantum-frame-corner-3"></span>
      <span class="quantum-frame-corner quantum-frame-corner-4"></span>
    </span>
    <span class="quantum-reactor-hex quantum-reactor-hex-1"></span>
    <span class="quantum-reactor-hex quantum-reactor-hex-2"></span>
    <span class="quantum-reactor-hex quantum-reactor-hex-3"></span>
    <span class="quantum-reactor-hex quantum-reactor-hex-4"></span>
    <span class="quantum-reactor-ring quantum-reactor-ring-1"></span>
    <span class="quantum-reactor-ring quantum-reactor-ring-2"></span>
    <span class="quantum-reactor-ring quantum-reactor-ring-3"></span>
    <span class="quantum-reactor-ring quantum-reactor-ring-4"></span>
    <span class="quantum-reactor-ring quantum-reactor-ring-5"></span>
    <span class="quantum-reactor-ring quantum-reactor-ring-6"></span>
    <span class="quantum-reactor-orbit quantum-reactor-orbit-1"></span>
    <span class="quantum-reactor-orbit quantum-reactor-orbit-2"></span>
    <span class="quantum-reactor-orbit quantum-reactor-orbit-3"></span>
    <span class="quantum-reactor-orbit-dot quantum-reactor-orbit-dot-1"></span>
    <span class="quantum-reactor-orbit-dot quantum-reactor-orbit-dot-2"></span>
    <span class="quantum-reactor-orbit-dot quantum-reactor-orbit-dot-3"></span>
    <span class="quantum-reactor-orbit-dot quantum-reactor-orbit-dot-4"></span>
    <span class="quantum-reactor-orbit-dot quantum-reactor-orbit-dot-5"></span>
    <span class="quantum-reactor-orbit-dot quantum-reactor-orbit-dot-6"></span>
    <span class="quantum-reactor-pulse quantum-reactor-pulse-1"></span>
    <span class="quantum-reactor-pulse quantum-reactor-pulse-2"></span>
    <span class="quantum-reactor-pulse quantum-reactor-pulse-3"></span>
    <span class="quantum-reactor-pulse quantum-reactor-pulse-4"></span>
    <span class="quantum-reactor-energy quantum-reactor-energy-1"></span>
    <span class="quantum-reactor-energy quantum-reactor-energy-2"></span>
    <span class="quantum-reactor-energy quantum-reactor-energy-3"></span>
    <span class="quantum-reactor-energy quantum-reactor-energy-4"></span>
    <span class="quantum-reactor-energy quantum-reactor-energy-5"></span>
    <span class="quantum-reactor-energy quantum-reactor-energy-6"></span>
    <span class="quantum-reactor-energy quantum-reactor-energy-7"></span>
    <span class="quantum-reactor-energy quantum-reactor-energy-8"></span>
    <span class="quantum-reactor-energy quantum-reactor-energy-9"></span>
    <span class="quantum-reactor-energy quantum-reactor-energy-10"></span>
    <span class="quantum-reactor-energy quantum-reactor-energy-11"></span>
    <span class="quantum-reactor-energy quantum-reactor-energy-12"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-1"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-2"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-3"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-4"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-5"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-6"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-7"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-8"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-9"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-10"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-11"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-12"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-13"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-14"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-15"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-16"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-17"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-18"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-19"></span>
    <span class="quantum-reactor-particle quantum-reactor-particle-20"></span>
    <span class="quantum-reactor-spark quantum-reactor-spark-1"></span>
    <span class="quantum-reactor-spark quantum-reactor-spark-2"></span>
    <span class="quantum-reactor-spark quantum-reactor-spark-3"></span>
    <span class="quantum-reactor-spark quantum-reactor-spark-4"></span>
    <span class="quantum-reactor-spark quantum-reactor-spark-5"></span>
    <span class="quantum-reactor-spark quantum-reactor-spark-6"></span>
    <span class="quantum-reactor-spark quantum-reactor-spark-7"></span>
    <span class="quantum-reactor-spark quantum-reactor-spark-8"></span>
    <span class="quantum-reactor-reactor">
      <span class="quantum-reactor-reactor-halo"></span>
      <span class="quantum-reactor-reactor-shell"></span>
      <span class="quantum-reactor-reactor-shell quantum-reactor-reactor-shell-2"></span>
      <span class="quantum-reactor-reactor-shell quantum-reactor-reactor-shell-3"></span>
      <span class="quantum-reactor-reactor-core"></span>
      <span class="quantum-reactor-reactor-core quantum-reactor-reactor-core-2"></span>
      <span class="quantum-reactor-reactor-light"></span>
      <span class="quantum-reactor-check"><i class="ri-check-line"></i></span>
    </span>
    <span class="quantum-reactor-beam quantum-reactor-beam-1"></span>
    <span class="quantum-reactor-beam quantum-reactor-beam-2"></span>
    <span class="quantum-reactor-beam quantum-reactor-beam-3"></span>
    <span class="quantum-reactor-beam quantum-reactor-beam-4"></span>
    <span class="quantum-reactor-ray quantum-reactor-ray-1"></span>
    <span class="quantum-reactor-ray quantum-reactor-ray-2"></span>
    <span class="quantum-reactor-ray quantum-reactor-ray-3"></span>
    <span class="quantum-reactor-ray quantum-reactor-ray-4"></span>
    <span class="quantum-reactor-scan quantum-reactor-scan-1"></span>
    <span class="quantum-reactor-scan quantum-reactor-scan-2"></span>
    <span class="quantum-reactor-shine"></span>
    <span class="quantum-reactor-glitch quantum-reactor-glitch-1"></span>
    <span class="quantum-reactor-glitch quantum-reactor-glitch-2"></span>
    <span class="quantum-reactor-status quantum-reactor-status-1"></span>
    <span class="quantum-reactor-status quantum-reactor-status-2"></span>
    <span class="quantum-reactor-status quantum-reactor-status-3"></span>
    <span class="quantum-reactor-border"></span>
  </span>
  <span class="quantum-reactor-label">
    <span class="quantum-reactor-label-icon"><i class="ri-cpu-line"></i></span>
    <span class="quantum-reactor-label-copy">
      <span class="quantum-reactor-title">Quantum Core</span>
      <span class="quantum-reactor-subtitle">Reactor Authorization</span>
    </span>
    <span class="quantum-reactor-indicator"></span>
  </span>
</label>`,
    css: `
.quantum-reactor-checkbox{--qr-cyan:#67fff1;--qr-aqua:#36dfff;--qr-blue:#4389ff;--qr-violet:#855cff;--qr-pink:#dc60ff;--qr-white:#f7ffff;position:relative;display:inline-flex;align-items:center;gap:18px;width:390px;min-height:126px;padding:13px 20px 13px 13px;border:1px solid rgba(88,213,255,.2);border-radius:25px;background:linear-gradient(145deg,rgba(255,255,255,.035),transparent 28%),linear-gradient(325deg,rgba(57,81,255,.045),transparent 50%),rgba(3,8,17,.96);box-shadow:inset 0 1px 0 rgba(255,255,255,.06),0 13px 36px rgba(0,0,0,.34),0 0 30px rgba(61,159,255,.06);overflow:hidden;isolation:isolate;cursor:pointer;user-select:none;transform:translateZ(0);transition:transform .45s cubic-bezier(.18,.82,.2,1),border-color .45s ease,box-shadow .45s ease,background .45s ease}
.quantum-reactor-checkbox:hover{transform:translateY(-5px) scale(1.012);border-color:rgba(108,237,255,.48);box-shadow:inset 0 1px 0 rgba(255,255,255,.075),0 17px 45px rgba(0,0,0,.4),0 0 42px rgba(54,212,255,.12),0 0 80px rgba(124,75,255,.06)}
.quantum-reactor-checkbox:active{transform:translateY(-1px) scale(.995)}
.quantum-reactor-checkbox:focus-within{border-color:rgba(151,245,255,.65);box-shadow:0 0 0 3px rgba(69,210,255,.11),0 0 0 7px rgba(69,210,255,.045),0 0 45px rgba(66,211,255,.18)}
.quantum-reactor-checkbox input{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}
.quantum-reactor-main{position:relative;flex:0 0 154px;width:154px;height:100px;border-radius:20px;overflow:hidden;background:radial-gradient(circle at 50% 50%,rgba(70,223,255,.085),transparent 27%),linear-gradient(145deg,#071523,#020711 72%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.035),inset 0 0 35px rgba(49,196,255,.04);isolation:isolate}
.quantum-reactor-main::before{content:"";position:absolute;inset:0;z-index:38;border-radius:inherit;border:1px solid rgba(255,255,255,.035);pointer-events:none}
.quantum-reactor-main::after{content:"";position:absolute;inset:0;z-index:39;background:linear-gradient(115deg,transparent,rgba(255,255,255,.025) 47%,transparent 53%);background-size:220% 100%;animation:qrPanelSweep2682 7s linear infinite;pointer-events:none}
.quantum-reactor-background{position:absolute;inset:-30%;z-index:-6;background:radial-gradient(circle at 30% 40%,rgba(53,235,255,.16),transparent 22%),radial-gradient(circle at 70% 64%,rgba(102,75,255,.15),transparent 25%),conic-gradient(from 0deg,rgba(42,144,255,.04),rgba(82,255,227,.08),rgba(137,76,255,.08),rgba(220,92,255,.04),rgba(42,144,255,.04));filter:blur(13px);animation:qrBackground2682 18s linear infinite}
.quantum-reactor-noise{position:absolute;inset:0;z-index:2;opacity:.12;background-image:radial-gradient(rgba(255,255,255,.4) .5px,transparent .7px);background-size:7px 7px;mix-blend-mode:screen;animation:qrNoise2682 .18s steps(2) infinite}
.quantum-reactor-grid{position:absolute;inset:0;z-index:3;background-image:linear-gradient(rgba(83,230,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(83,230,255,.035) 1px,transparent 1px);background-size:16px 16px;mask-image:linear-gradient(to bottom,transparent,#000 20%,#000 80%,transparent);-webkit-mask-image:linear-gradient(to bottom,transparent,#000 20%,#000 80%,transparent);animation:qrGrid2682 8s linear infinite;pointer-events:none}
.quantum-reactor-grid-2{background-size:37px 37px;background-image:linear-gradient(rgba(115,96,255,.024) 1px,transparent 1px),linear-gradient(90deg,rgba(115,96,255,.024) 1px,transparent 1px);animation-duration:13s;animation-direction:reverse}
.quantum-reactor-vignette{position:absolute;inset:0;z-index:4;background:radial-gradient(circle,transparent 30%,rgba(0,0,0,.28) 100%);pointer-events:none}
.quantum-reactor-frame{position:absolute;inset:8px;z-index:12;border:1px solid rgba(77,212,255,.08);border-radius:16px;pointer-events:none}
.quantum-frame-line{position:absolute;background:linear-gradient(90deg,transparent,rgba(78,240,227,.5),transparent)}
.quantum-frame-line-1{left:12px;right:12px;top:0;height:1px;animation:qrFrameLineTop2682 4s linear infinite}
.quantum-frame-line-2{left:12px;right:12px;bottom:0;height:1px;animation:qrFrameLineBottom2682 4.7s linear infinite}
.quantum-frame-line-3{top:12px;bottom:12px;left:0;width:1px;transform:rotate(180deg);animation:qrFrameLineLeft2682 4.4s linear infinite}
.quantum-frame-line-4{top:12px;bottom:12px;right:0;width:1px;transform:rotate(180deg);animation:qrFrameLineRight2682 5s linear infinite}
.quantum-frame-corner{position:absolute;width:17px;height:17px;border-color:rgba(105,236,255,.5)}
.quantum-frame-corner-1{left:-1px;top:-1px;border-left:2px solid;border-top:2px solid}
.quantum-frame-corner-2{right:-1px;top:-1px;border-right:2px solid;border-top:2px solid}
.quantum-frame-corner-3{left:-1px;bottom:-1px;border-left:2px solid;border-bottom:2px solid}
.quantum-frame-corner-4{right:-1px;bottom:-1px;border-right:2px solid;border-bottom:2px solid}
.quantum-reactor-hex{position:absolute;left:50%;top:50%;width:108px;height:94px;transform:translate(-50%,-50%);clip-path:polygon(25% 4%,75% 4%,98% 50%,75% 96%,25% 96%,2% 50%);border:1px solid rgba(94,219,255,.1);background:linear-gradient(145deg,rgba(57,224,255,.035),rgba(115,82,255,.035));pointer-events:none}
.quantum-reactor-hex-1{width:109px;height:95px;animation:qrHexOne2682 8s linear infinite}
.quantum-reactor-hex-2{width:92px;height:80px;transform:translate(-50%,-50%) rotate(30deg);border-color:rgba(116,103,255,.08);animation:qrHexTwo2682 10s linear infinite reverse}
.quantum-reactor-hex-3{width:132px;height:113px;transform:translate(-50%,-50%) rotate(15deg);border-color:rgba(59,238,228,.055);animation:qrHexThree2682 14s linear infinite}
.quantum-reactor-hex-4{width:77px;height:68px;transform:translate(-50%,-50%) rotate(-25deg);border-color:rgba(224,95,255,.06);animation:qrHexFour2682 6.7s linear infinite reverse}
.quantum-reactor-ring{position:absolute;left:50%;top:50%;border-radius:50%;transform:translate(-50%,-50%);pointer-events:none}
.quantum-reactor-ring-1{width:35px;height:35px;border:1px solid rgba(210,255,250,.18);animation:qrRingOne2682 3s ease-in-out infinite}
.quantum-reactor-ring-2{width:51px;height:51px;border:1px solid rgba(83,248,228,.13);animation:qrRingTwo2682 5s linear infinite}
.quantum-reactor-ring-3{width:69px;height:69px;border:1px solid rgba(71,207,255,.1);animation:qrRingThree2682 7s linear infinite reverse}
.quantum-reactor-ring-4{width:86px;height:86px;border:1px dashed rgba(111,101,255,.09);animation:qrRingFour2682 9s linear infinite}
.quantum-reactor-ring-5{width:111px;height:111px;border:1px solid rgba(93,240,231,.055);animation:qrRingFive2682 12s linear infinite reverse}
.quantum-reactor-ring-6{width:139px;height:139px;border:1px solid rgba(88,111,255,.045);animation:qrRingSix2682 16s linear infinite}
.quantum-reactor-orbit{position:absolute;left:50%;top:50%;border:1px solid rgba(100,235,255,.09);border-radius:50%;transform:translate(-50%,-50%);pointer-events:none}
.quantum-reactor-orbit-1{width:104px;height:34px;transform:translate(-50%,-50%) rotate(20deg);animation:qrOrbitOne2682 6s linear infinite}
.quantum-reactor-orbit-2{width:122px;height:44px;transform:translate(-50%,-50%) rotate(-32deg);border-color:rgba(124,90,255,.07);animation:qrOrbitTwo2682 8s linear infinite reverse}
.quantum-reactor-orbit-3{width:139px;height:59px;transform:translate(-50%,-50%) rotate(63deg);border-color:rgba(64,245,220,.06);animation:qrOrbitThree2682 11s linear infinite}
.quantum-reactor-orbit-dot{position:absolute;width:4px;height:4px;border-radius:50%;background:#dcfffa;box-shadow:0 0 5px rgba(255,255,255,.9),0 0 13px rgba(71,243,224,.85);z-index:17}
.quantum-reactor-orbit-dot-1{left:29px;top:31px;animation:qrOrbitDotOne2682 4.4s linear infinite}
.quantum-reactor-orbit-dot-2{right:28px;top:27px;animation:qrOrbitDotTwo2682 5.3s linear infinite reverse}
.quantum-reactor-orbit-dot-3{left:42px;bottom:23px;animation:qrOrbitDotThree2682 4.9s linear infinite}
.quantum-reactor-orbit-dot-4{right:42px;bottom:21px;animation:qrOrbitDotFour2682 5.8s linear infinite reverse}
.quantum-reactor-orbit-dot-5{left:77px;top:12px;width:3px;height:3px;animation:qrOrbitDotFive2682 3.8s linear infinite}
.quantum-reactor-orbit-dot-6{right:77px;bottom:11px;width:3px;height:3px;animation:qrOrbitDotSix2682 4.6s linear infinite reverse}
.quantum-reactor-pulse{position:absolute;left:50%;top:50%;width:52px;height:52px;border-radius:50%;transform:translate(-50%,-50%);border:1px solid rgba(86,255,232,.25);pointer-events:none}
.quantum-reactor-pulse-1{animation:qrPulseOne2682 2.7s ease-out infinite}
.quantum-reactor-pulse-2{animation:qrPulseTwo2682 2.7s ease-out .9s infinite}
.quantum-reactor-pulse-3{animation:qrPulseThree2682 2.7s ease-out 1.8s infinite}
.quantum-reactor-pulse-4{animation:qrPulseFour2682 3.8s ease-out 2.4s infinite}
.quantum-reactor-energy{position:absolute;height:1px;border-radius:999px;background:linear-gradient(90deg,transparent,rgba(178,255,246,.18),rgba(78,255,229,.8),rgba(92,167,255,.18),transparent);filter:blur(.25px);z-index:18;pointer-events:none}
.quantum-reactor-energy-1{left:1px;top:19px;width:41px;transform:rotate(16deg);animation:qrEnergyOne2682 4s ease-in-out infinite}
.quantum-reactor-energy-2{right:1px;top:24px;width:42px;transform:rotate(-17deg);animation:qrEnergyTwo2682 4.6s ease-in-out infinite}
.quantum-reactor-energy-3{left:3px;bottom:23px;width:43px;transform:rotate(-12deg);animation:qrEnergyThree2682 4.4s ease-in-out infinite}
.quantum-reactor-energy-4{right:3px;bottom:20px;width:40px;transform:rotate(14deg);animation:qrEnergyFour2682 5s ease-in-out infinite}
.quantum-reactor-energy-5{left:28px;top:5px;width:28px;transform:rotate(40deg);animation:qrEnergyFive2682 4.8s ease-in-out infinite}
.quantum-reactor-energy-6{right:28px;bottom:5px;width:31px;transform:rotate(-42deg);animation:qrEnergySix2682 4.1s ease-in-out infinite}
.quantum-reactor-energy-7{left:16px;top:45px;width:27px;transform:rotate(-90deg);animation:qrEnergySeven2682 5.4s ease-in-out infinite}
.quantum-reactor-energy-8{right:17px;top:53px;width:30px;transform:rotate(90deg);animation:qrEnergyEight2682 4.9s ease-in-out infinite}
.quantum-reactor-energy-9{left:53px;top:1px;width:21px;transform:rotate(4deg);animation:qrEnergyNine2682 3.9s ease-in-out infinite}
.quantum-reactor-energy-10{right:53px;bottom:1px;width:22px;transform:rotate(-5deg);animation:qrEnergyTen2682 4.7s ease-in-out infinite}
.quantum-reactor-energy-11{left:5px;top:69px;width:24px;transform:rotate(31deg);animation:qrEnergyEleven2682 4.2s ease-in-out infinite}
.quantum-reactor-energy-12{right:5px;top:70px;width:23px;transform:rotate(-30deg);animation:qrEnergyTwelve2682 5.1s ease-in-out infinite}
.quantum-reactor-particle{position:absolute;width:3px;height:3px;border-radius:50%;background:#efffff;box-shadow:0 0 5px rgba(238,255,255,.95),0 0 12px rgba(65,239,224,.8),0 0 22px rgba(81,120,255,.3);z-index:20;pointer-events:none}
.quantum-reactor-particle-1{left:9px;top:12px;animation:qrParticleOne2682 4.1s ease-in-out infinite}
.quantum-reactor-particle-2{left:24px;top:55px;animation:qrParticleTwo2682 5.2s ease-in-out infinite}
.quantum-reactor-particle-3{left:38px;top:7px;animation:qrParticleThree2682 4.7s ease-in-out infinite}
.quantum-reactor-particle-4{left:53px;top:81px;animation:qrParticleFour2682 4.5s ease-in-out infinite}
.quantum-reactor-particle-5{left:67px;top:18px;animation:qrParticleFive2682 5.5s ease-in-out infinite}
.quantum-reactor-particle-6{left:82px;top:68px;animation:qrParticleSix2682 4.4s ease-in-out infinite}
.quantum-reactor-particle-7{left:95px;top:12px;animation:qrParticleSeven2682 5.1s ease-in-out infinite}
.quantum-reactor-particle-8{left:111px;top:82px;animation:qrParticleEight2682 4.8s ease-in-out infinite}
.quantum-reactor-particle-9{left:127px;top:27px;animation:qrParticleNine2682 3.9s ease-in-out infinite}
.quantum-reactor-particle-10{right:10px;top:44px;animation:qrParticleTen2682 4.6s ease-in-out infinite}
.quantum-reactor-particle-11{right:24px;top:8px;animation:qrParticleEleven2682 5.3s ease-in-out infinite}
.quantum-reactor-particle-12{right:38px;top:72px;animation:qrParticleTwelve2682 4.2s ease-in-out infinite}
.quantum-reactor-particle-13{right:52px;top:17px;animation:qrParticleThirteen2682 5s ease-in-out infinite}
.quantum-reactor-particle-14{right:66px;bottom:9px;animation:qrParticleFourteen2682 4.8s ease-in-out infinite}
.quantum-reactor-particle-15{right:81px;top:83px;animation:qrParticleFifteen2682 4.1s ease-in-out infinite}
.quantum-reactor-particle-16{right:96px;top:32px;animation:qrParticleSixteen2682 5.4s ease-in-out infinite}
.quantum-reactor-particle-17{left:16px;bottom:9px;animation:qrParticleSeventeen2682 4.3s ease-in-out infinite}
.quantum-reactor-particle-18{left:72px;bottom:6px;animation:qrParticleEighteen2682 5.1s ease-in-out infinite}
.quantum-reactor-particle-19{left:103px;bottom:19px;animation:qrParticleNineteen2682 4.4s ease-in-out infinite}
.quantum-reactor-particle-20{right:15px;bottom:20px;animation:qrParticleTwenty2682 5.6s ease-in-out infinite}
.quantum-reactor-spark{position:absolute;width:8px;height:8px;z-index:23;pointer-events:none}
.quantum-reactor-spark::before,.quantum-reactor-spark::after{content:"";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);background:#efffff;border-radius:999px;box-shadow:0 0 5px rgba(255,255,255,.95),0 0 13px rgba(80,255,228,.8),0 0 23px rgba(93,112,255,.35)}
.quantum-reactor-spark::before{width:2px;height:12px}
.quantum-reactor-spark::after{width:12px;height:2px}
.quantum-reactor-spark-1{left:19px;top:37px;animation:qrSparkOne2682 2.6s ease-in-out infinite}
.quantum-reactor-spark-2{left:39px;bottom:19px;animation:qrSparkTwo2682 3.1s ease-in-out infinite .3s}
.quantum-reactor-spark-3{left:60px;top:26px;animation:qrSparkThree2682 2.8s ease-in-out infinite .6s}
.quantum-reactor-spark-4{right:20px;top:32px;animation:qrSparkFour2682 3.4s ease-in-out infinite .2s}
.quantum-reactor-spark-5{right:43px;bottom:20px;animation:qrSparkFive2682 2.7s ease-in-out infinite .5s}
.quantum-reactor-spark-6{left:84px;top:76px;animation:qrSparkSix2682 3.2s ease-in-out infinite .8s}
.quantum-reactor-spark-7{left:111px;top:40px;animation:qrSparkSeven2682 2.9s ease-in-out infinite .4s}
.quantum-reactor-spark-8{right:75px;bottom:36px;animation:qrSparkEight2682 3.5s ease-in-out infinite .7s}
.quantum-reactor-reactor{position:absolute;left:50%;top:50%;width:67px;height:67px;transform:translate(-50%,-50%);z-index:25;border-radius:50%;pointer-events:none}
.quantum-reactor-reactor-halo{position:absolute;left:50%;top:50%;width:96px;height:96px;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,rgba(61,255,223,.18),rgba(64,199,255,.07) 43%,rgba(116,68,255,.035) 60%,transparent 75%);filter:blur(7px);animation:qrHalo2682 3.2s ease-in-out infinite}
.quantum-reactor-reactor-shell{position:absolute;left:50%;top:50%;width:60px;height:60px;transform:translate(-50%,-50%);border-radius:50%;border:1px solid rgba(137,255,247,.23);box-shadow:0 0 12px rgba(62,246,222,.11),inset 0 0 13px rgba(61,246,222,.06);animation:qrShell2682 5s linear infinite}
.quantum-reactor-reactor-shell-2{width:51px;height:51px;border-color:rgba(65,190,255,.14);animation:qrShellTwo2682 3.8s linear infinite reverse}
.quantum-reactor-reactor-shell-3{width:43px;height:43px;border-color:rgba(124,93,255,.13);border-style:dashed;animation:qrShellThree2682 6.5s linear infinite}
.quantum-reactor-reactor-core{position:absolute;left:50%;top:50%;width:39px;height:39px;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle at 37% 31%,#fff 0%,#dffff9 11%,#6affea 27%,#31d9df 43%,#456bff 62%,transparent 79%);box-shadow:0 0 8px rgba(241,255,252,.95),0 0 17px rgba(79,255,227,.85),0 0 32px rgba(42,198,225,.6),0 0 51px rgba(100,86,255,.3);animation:qrCore2682 2.3s ease-in-out infinite}
.quantum-reactor-reactor-core-2{width:24px;height:24px;background:radial-gradient(circle,#fff 0%,#e5fffb 24%,#7dfff0 52%,transparent 79%);box-shadow:0 0 7px #fff,0 0 15px rgba(105,255,230,.98),0 0 25px rgba(46,212,232,.65);animation:qrCoreTwo2682 1.6s ease-in-out infinite}
.quantum-reactor-reactor-light{position:absolute;left:50%;top:50%;width:8px;height:8px;transform:translate(-50%,-50%);border-radius:50%;background:#fff;box-shadow:0 0 5px #fff,0 0 14px #a4fff4,0 0 25px #40ffe4;animation:qrLight2682 1.1s ease-in-out infinite}
.quantum-reactor-check{position:absolute;left:50%;top:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;transform:translate(-50%,-50%) scale(.25) rotate(-35deg);opacity:0;color:#fff;filter:drop-shadow(0 0 6px rgba(255,255,255,.95)) drop-shadow(0 0 14px rgba(74,255,230,.85));transition:opacity .2s ease,transform .65s cubic-bezier(.18,.92,.2,1)}
.quantum-reactor-check i{font-size:26px;font-weight:900}
.quantum-reactor-beam{position:absolute;z-index:21;pointer-events:none;border-radius:999px}
.quantum-reactor-beam-1{left:0;right:0;top:50%;height:1px;transform:translateY(-50%);background:linear-gradient(90deg,transparent,rgba(76,255,227,.05),rgba(188,255,249,.75),rgba(95,159,255,.06),transparent);filter:blur(1px);animation:qrBeamOne2682 3.7s ease-in-out infinite}
.quantum-reactor-beam-2{top:0;bottom:0;left:50%;width:1px;transform:translateX(-50%);background:linear-gradient(to bottom,transparent,rgba(77,222,255,.04),rgba(107,255,234,.65),rgba(108,104,255,.05),transparent);filter:blur(1px);animation:qrBeamTwo2682 4.3s ease-in-out infinite}
.quantum-reactor-beam-3{left:18px;right:18px;top:50%;height:1px;transform:translateY(-50%) rotate(45deg);background:linear-gradient(90deg,transparent,rgba(106,245,255,.18),rgba(255,255,255,.46),rgba(128,95,255,.1),transparent);filter:blur(2px);animation:qrBeamThree2682 5.4s ease-in-out infinite}
.quantum-reactor-beam-4{left:18px;right:18px;top:50%;height:1px;transform:translateY(-50%) rotate(-45deg);background:linear-gradient(90deg,transparent,rgba(131,100,255,.08),rgba(255,255,255,.36),rgba(96,244,225,.1),transparent);filter:blur(2px);animation:qrBeamFour2682 5.7s ease-in-out infinite reverse}
.quantum-reactor-ray{position:absolute;left:50%;top:50%;border-radius:50%;transform:translate(-50%,-50%);pointer-events:none;z-index:6}
.quantum-reactor-ray-1{width:138px;height:138px;background:repeating-conic-gradient(from 0deg,rgba(82,255,232,.045) 0deg,rgba(82,255,232,.045) 1deg,transparent 1deg,transparent 24deg);mask-image:radial-gradient(circle,transparent 0 25%,#000 51%,transparent 76%);-webkit-mask-image:radial-gradient(circle,transparent 0 25%,#000 51%,transparent 76%);animation:qrRayOne2682 16s linear infinite}
.quantum-reactor-ray-2{width:157px;height:157px;background:repeating-conic-gradient(from 8deg,rgba(83,125,255,.04) 0deg,rgba(83,125,255,.04) 2deg,transparent 2deg,transparent 34deg);mask-image:radial-gradient(circle,transparent 0 30%,#000 51%,transparent 77%);-webkit-mask-image:radial-gradient(circle,transparent 0 30%,#000 51%,transparent 77%);animation:qrRayTwo2682 21s linear infinite reverse}
.quantum-reactor-ray-3{width:181px;height:181px;background:repeating-conic-gradient(from 15deg,rgba(229,94,255,.025) 0deg,rgba(229,94,255,.025) 2deg,transparent 2deg,transparent 47deg);mask-image:radial-gradient(circle,transparent 0 39%,#000 54%,transparent 77%);-webkit-mask-image:radial-gradient(circle,transparent 0 39%,#000 54%,transparent 77%);animation:qrRayThree2682 27s linear infinite}
.quantum-reactor-ray-4{width:109px;height:109px;background:repeating-conic-gradient(from 22deg,rgba(227,255,248,.05) 0deg,rgba(227,255,248,.05) 1deg,transparent 1deg,transparent 18deg);mask-image:radial-gradient(circle,transparent 0 25%,#000 48%,transparent 70%);-webkit-mask-image:radial-gradient(circle,transparent 0 25%,#000 48%,transparent 70%);animation:qrRayFour2682 11s linear infinite reverse}
.quantum-reactor-scan{position:absolute;left:8px;right:8px;height:1px;z-index:30;background:linear-gradient(90deg,transparent,rgba(89,251,231,.05),rgba(232,255,251,.6),rgba(90,191,255,.16),transparent);box-shadow:0 0 7px rgba(74,238,220,.22)}
.quantum-reactor-scan-1{top:-10%;animation:qrScanOne2682 4.5s ease-in-out infinite}
.quantum-reactor-scan-2{bottom:-10%;opacity:.3;animation:qrScanTwo2682 6s ease-in-out infinite reverse}
.quantum-reactor-shine{position:absolute;top:-60%;left:-80%;width:35%;height:220%;z-index:35;transform:rotate(22deg);background:linear-gradient(90deg,transparent,rgba(255,255,255,.02) 24%,rgba(227,255,252,.45) 48%,rgba(255,255,255,.07) 61%,transparent);filter:blur(1px);animation:qrShine2682 5.3s cubic-bezier(.18,.72,.2,1) infinite;pointer-events:none}
.quantum-reactor-glitch{position:absolute;z-index:26;pointer-events:none;mix-blend-mode:screen}
.quantum-reactor-glitch-1{left:17px;top:17px;width:29px;height:1px;background:#54ffe4;box-shadow:7px 4px 0 rgba(81,139,255,.55),-5px 7px 0 rgba(220,81,255,.3);animation:qrGlitchOne2682 3.8s steps(6) infinite}
.quantum-reactor-glitch-2{right:12px;bottom:18px;width:32px;height:1px;background:#62cfff;box-shadow:-7px -4px 0 rgba(127,89,255,.4),6px -7px 0 rgba(63,255,219,.25);animation:qrGlitchTwo2682 4.4s steps(7) infinite}
.quantum-reactor-status{position:absolute;z-index:29;width:7px;height:7px;border:1px solid rgba(103,245,231,.3);background:rgba(82,255,229,.08);box-shadow:0 0 7px rgba(71,255,228,.2);pointer-events:none}
.quantum-reactor-status-1{left:12px;top:12px;animation:qrStatusOne2682 2.1s ease-in-out infinite}
.quantum-reactor-status-2{right:12px;top:12px;animation:qrStatusTwo2682 2.7s ease-in-out infinite}
.quantum-reactor-status-3{right:12px;bottom:12px;animation:qrStatusThree2682 2.4s ease-in-out infinite}
.quantum-reactor-border{position:absolute;inset:1px;z-index:37;border-radius:20px;padding:1px;background:conic-gradient(from 0deg,rgba(78,255,228,.6),rgba(70,189,255,.35),rgba(122,83,255,.45),rgba(221,91,255,.3),rgba(78,255,228,.6));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude;animation:qrBorder2682 5s linear infinite;pointer-events:none}
.quantum-reactor-label{position:relative;z-index:8;display:flex;align-items:center;min-width:180px;gap:11px}
.quantum-reactor-label-icon{width:38px;height:38px;display:flex;align-items:center;justify-content:center;flex:0 0 38px;border:1px solid rgba(81,239,230,.16);border-radius:12px;background:linear-gradient(145deg,rgba(81,240,225,.1),rgba(101,77,255,.08));color:#dffffb;box-shadow:inset 0 0 14px rgba(79,237,222,.05),0 0 16px rgba(64,196,255,.06)}
.quantum-reactor-label-icon i{font-size:19px;text-shadow:0 0 7px rgba(255,255,255,.85),0 0 14px rgba(81,246,229,.62);animation:qrLabelIcon2682 2.7s ease-in-out infinite}
.quantum-reactor-label-copy{display:flex;flex-direction:column;gap:5px}
.quantum-reactor-title{font-size:16px;line-height:1;font-weight:800;letter-spacing:.15px;color:#f5ffff}
.quantum-reactor-subtitle{font-size:7.5px;line-height:1;text-transform:uppercase;font-weight:700;letter-spacing:1.85px;color:rgba(171,231,255,.5)}
.quantum-reactor-indicator{width:6px;height:6px;margin-left:auto;border-radius:50%;background:#4effdc;box-shadow:0 0 6px #4effdc,0 0 14px rgba(78,255,220,.6);animation:qrIndicator2682 1.8s ease-in-out infinite}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main{box-shadow:inset 0 0 0 1px rgba(255,255,255,.045),inset 0 0 35px rgba(74,248,226,.09),0 0 28px rgba(65,243,224,.12)}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-background{animation-duration:7s}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-ring-1{animation-duration:1.6s}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-ring-2{animation-duration:2.7s}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-ring-3{animation-duration:4s}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-ring-4{animation-duration:5.2s}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-orbit{border-color:rgba(112,255,237,.26)}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-particle{animation-duration:2.2s}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-pulse{border-color:rgba(104,255,237,.42)}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-reactor-core{animation-duration:1.35s}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-reactor-core-2{animation-duration:.95s}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-reactor-light{animation-duration:.7s}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-check{opacity:1;transform:translate(-50%,-50%) scale(1) rotate(0deg);transition-delay:.05s}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-reactor-core{opacity:.16}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-reactor-core-2{opacity:.12}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-reactor-light{opacity:.12}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-border{animation-duration:2.1s}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-scan-1{animation-duration:2.4s}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-shine{animation-duration:2.8s}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-beam{animation-duration:2.1s}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-spark{animation-duration:1.7s}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-hex-1{border-color:rgba(110,255,237,.24)}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-hex-2{border-color:rgba(113,221,255,.17)}
.quantum-reactor-checkbox input:checked + .quantum-reactor-main .quantum-reactor-hex-3{border-color:rgba(114,92,255,.13)}
.quantum-reactor-checkbox input:checked ~ .quantum-reactor-label .quantum-reactor-label-icon{border-color:rgba(102,255,237,.35);background:linear-gradient(145deg,rgba(89,255,229,.15),rgba(97,90,255,.11));box-shadow:inset 0 0 15px rgba(79,240,223,.08),0 0 18px rgba(68,214,255,.12)}
.quantum-reactor-checkbox input:checked ~ .quantum-reactor-label .quantum-reactor-indicator{background:#77fff0;box-shadow:0 0 8px #77fff0,0 0 19px rgba(79,255,228,.82);animation-duration:.9s}
@keyframes qrPanelSweep2682{0%{background-position:-120% 0}42%{background-position:120% 0}100%{background-position:120% 0}}
@keyframes qrBackground2682{0%{transform:rotate(0deg) scale(1);opacity:.55}50%{transform:rotate(180deg) scale(1.06);opacity:1}100%{transform:rotate(360deg) scale(1);opacity:.55}}
@keyframes qrNoise2682{0%{transform:translate(0,0)}25%{transform:translate(1px,-1px)}50%{transform:translate(-1px,1px)}75%{transform:translate(1px,1px)}100%{transform:translate(0,0)}}
@keyframes qrGrid2682{0%{background-position:0 0,0 0;opacity:.22}50%{background-position:0 8px,8px 0;opacity:.42}100%{background-position:0 16px,16px 0;opacity:.22}}
@keyframes qrFrameLineTop2682{0%{transform:translateX(-30px);opacity:0}20%{opacity:1}80%{opacity:1}100%{transform:translateX(120px);opacity:0}}
@keyframes qrFrameLineBottom2682{0%{transform:translateX(120px);opacity:0}20%{opacity:1}80%{opacity:1}100%{transform:translateX(-30px);opacity:0}}
@keyframes qrFrameLineLeft2682{0%{transform:rotate(180deg) translateY(-25px);opacity:0}20%{opacity:1}80%{opacity:1}100%{transform:rotate(180deg) translateY(60px);opacity:0}}
@keyframes qrFrameLineRight2682{0%{transform:rotate(180deg) translateY(60px);opacity:0}20%{opacity:1}80%{opacity:1}100%{transform:rotate(180deg) translateY(-25px);opacity:0}}
@keyframes qrHexOne2682{0%{transform:translate(-50%,-50%) rotate(0deg) scale(.96);opacity:.1}50%{transform:translate(-50%,-50%) rotate(180deg) scale(1.04);opacity:.32}100%{transform:translate(-50%,-50%) rotate(360deg) scale(.96);opacity:.1}}
@keyframes qrHexTwo2682{0%{transform:translate(-50%,-50%) rotate(30deg) scale(.94);opacity:.08}50%{transform:translate(-50%,-50%) rotate(210deg) scale(1.06);opacity:.25}100%{transform:translate(-50%,-50%) rotate(390deg) scale(.94);opacity:.08}}
@keyframes qrHexThree2682{0%{transform:translate(-50%,-50%) rotate(15deg) scale(.92);opacity:.05}50%{transform:translate(-50%,-50%) rotate(195deg) scale(1.03);opacity:.17}100%{transform:translate(-50%,-50%) rotate(375deg) scale(.92);opacity:.05}}
@keyframes qrHexFour2682{0%{transform:translate(-50%,-50%) rotate(-25deg) scale(.9);opacity:.05}50%{transform:translate(-50%,-50%) rotate(155deg) scale(1.06);opacity:.18}100%{transform:translate(-50%,-50%) rotate(335deg) scale(.9);opacity:.05}}
@keyframes qrRingOne2682{0%,100%{transform:translate(-50%,-50%) scale(.75);opacity:.2}50%{transform:translate(-50%,-50%) scale(1.25);opacity:.85}}
@keyframes qrRingTwo2682{0%{transform:translate(-50%,-50%) rotate(0deg) scale(.92);opacity:.08}50%{transform:translate(-50%,-50%) rotate(180deg) scale(1.05);opacity:.32}100%{transform:translate(-50%,-50%) rotate(360deg) scale(.92);opacity:.08}}
@keyframes qrRingThree2682{0%{transform:translate(-50%,-50%) rotate(0deg) scale(.9);opacity:.07}50%{transform:translate(-50%,-50%) rotate(180deg) scale(1.05);opacity:.24}100%{transform:translate(-50%,-50%) rotate(360deg) scale(.9);opacity:.07}}
@keyframes qrRingFour2682{0%{transform:translate(-50%,-50%) rotate(0deg) scale(.94);opacity:.05}50%{transform:translate(-50%,-50%) rotate(180deg) scale(1.03);opacity:.19}100%{transform:translate(-50%,-50%) rotate(360deg) scale(.94);opacity:.05}}
@keyframes qrRingFive2682{0%{transform:translate(-50%,-50%) rotate(0deg) scale(.95);opacity:.04}50%{transform:translate(-50%,-50%) rotate(180deg) scale(1.03);opacity:.12}100%{transform:translate(-50%,-50%) rotate(360deg) scale(.95);opacity:.04}}
@keyframes qrRingSix2682{0%{transform:translate(-50%,-50%) rotate(0deg) scale(.94);opacity:.03}50%{transform:translate(-50%,-50%) rotate(180deg) scale(1.04);opacity:.09}100%{transform:translate(-50%,-50%) rotate(360deg) scale(.94);opacity:.03}}
@keyframes qrOrbitOne2682{0%{transform:translate(-50%,-50%) rotate(20deg) scale(.94);opacity:.08}50%{transform:translate(-50%,-50%) rotate(200deg) scale(1.04);opacity:.34}100%{transform:translate(-50%,-50%) rotate(380deg) scale(.94);opacity:.08}}
@keyframes qrOrbitTwo2682{0%{transform:translate(-50%,-50%) rotate(-32deg) scale(.92);opacity:.06}50%{transform:translate(-50%,-50%) rotate(148deg) scale(1.04);opacity:.23}100%{transform:translate(-50%,-50%) rotate(328deg) scale(.92);opacity:.06}}
@keyframes qrOrbitThree2682{0%{transform:translate(-50%,-50%) rotate(63deg) scale(.91);opacity:.05}50%{transform:translate(-50%,-50%) rotate(243deg) scale(1.05);opacity:.18}100%{transform:translate(-50%,-50%) rotate(423deg) scale(.91);opacity:.05}}
@keyframes qrOrbitDotOne2682{0%{transform:translate3d(0,0,0) scale(.5);opacity:.15}50%{transform:translate3d(11px,-9px,0) scale(1.2);opacity:.95}100%{transform:translate3d(0,0,0) scale(.5);opacity:.15}}
@keyframes qrOrbitDotTwo2682{0%{transform:translate3d(0,0,0) scale(.45);opacity:.12}50%{transform:translate3d(-9px,10px,0) scale(1.15);opacity:.9}100%{transform:translate3d(0,0,0) scale(.45);opacity:.12}}
@keyframes qrOrbitDotThree2682{0%{transform:translate3d(0,0,0) scale(.48);opacity:.14}50%{transform:translate3d(8px,8px,0) scale(1.2);opacity:.92}100%{transform:translate3d(0,0,0) scale(.48);opacity:.14}}
@keyframes qrOrbitDotFour2682{0%{transform:translate3d(0,0,0) scale(.45);opacity:.1}50%{transform:translate3d(-10px,-7px,0) scale(1.18);opacity:.88}100%{transform:translate3d(0,0,0) scale(.45);opacity:.1}}
@keyframes qrOrbitDotFive2682{0%{transform:translate3d(0,0,0) scale(.4);opacity:.08}50%{transform:translate3d(-6px,11px,0) scale(1.3);opacity:1}100%{transform:translate3d(0,0,0) scale(.4);opacity:.08}}
@keyframes qrOrbitDotSix2682{0%{transform:translate3d(0,0,0) scale(.42);opacity:.08}50%{transform:translate3d(7px,-10px,0) scale(1.26);opacity:.96}100%{transform:translate3d(0,0,0) scale(.42);opacity:.08}}
@keyframes qrPulseOne2682{0%{width:52px;height:52px;opacity:.65;transform:translate(-50%,-50%) scale(.7)}100%{width:120px;height:120px;opacity:0;transform:translate(-50%,-50%) scale(1)}} 
@keyframes qrPulseTwo2682{0%{width:52px;height:52px;opacity:.55;transform:translate(-50%,-50%) scale(.7)}100%{width:132px;height:132px;opacity:0;transform:translate(-50%,-50%) scale(1)}} 
@keyframes qrPulseThree2682{0%{width:52px;height:52px;opacity:.45;transform:translate(-50%,-50%) scale(.7)}100%{width:144px;height:144px;opacity:0;transform:translate(-50%,-50%) scale(1)}} 
@keyframes qrPulseFour2682{0%{width:58px;height:58px;opacity:.3;transform:translate(-50%,-50%) scale(.8)}100%{width:153px;height:153px;opacity:0;transform:translate(-50%,-50%) scale(1.02)}}
@keyframes qrEnergyOne2682{0%,100%{transform:translateX(-8px) rotate(16deg) scaleX(.62);opacity:.05}50%{transform:translateX(10px) rotate(12deg) scaleX(1.1);opacity:.6}}
@keyframes qrEnergyTwo2682{0%,100%{transform:translateX(8px) rotate(-17deg) scaleX(.58);opacity:.05}50%{transform:translateX(-10px) rotate(-13deg) scaleX(1.08);opacity:.58}}
@keyframes qrEnergyThree2682{0%,100%{transform:translateX(8px) rotate(-12deg) scaleX(.6);opacity:.04}50%{transform:translateX(-9px) rotate(-9deg) scaleX(1.08);opacity:.56}}
@keyframes qrEnergyFour2682{0%,100%{transform:translateX(-8px) rotate(14deg) scaleX(.62);opacity:.05}50%{transform:translateX(9px) rotate(11deg) scaleX(1.07);opacity:.6}}
@keyframes qrEnergyFive2682{0%,100%{transform:translateY(6px) rotate(40deg) scaleX(.58);opacity:.04}50%{transform:translateY(-7px) rotate(47deg) scaleX(1.08);opacity:.46}}
@keyframes qrEnergySix2682{0%,100%{transform:translateY(-6px) rotate(-42deg) scaleX(.57);opacity:.04}50%{transform:translateY(7px) rotate(-35deg) scaleX(1.05);opacity:.47}}
@keyframes qrEnergySeven2682{0%,100%{transform:translateY(7px) rotate(-90deg) scaleX(.55);opacity:.04}50%{transform:translateY(-7px) rotate(-90deg) scaleX(1.1);opacity:.48}}
@keyframes qrEnergyEight2682{0%,100%{transform:translateY(-7px) rotate(90deg) scaleX(.58);opacity:.04}50%{transform:translateY(7px) rotate(90deg) scaleX(1.08);opacity:.52}}
@keyframes qrEnergyNine2682{0%,100%{transform:translateX(-5px) rotate(4deg) scaleX(.58);opacity:.03}50%{transform:translateX(7px) rotate(7deg) scaleX(1.05);opacity:.42}}
@keyframes qrEnergyTen2682{0%,100%{transform:translateX(5px) rotate(-5deg) scaleX(.57);opacity:.03}50%{transform:translateX(-7px) rotate(-8deg) scaleX(1.05);opacity:.43}}
@keyframes qrEnergyEleven2682{0%,100%{transform:translateX(-7px) rotate(31deg) scaleX(.6);opacity:.03}50%{transform:translateX(8px) rotate(25deg) scaleX(1.08);opacity:.45}}
@keyframes qrEnergyTwelve2682{0%,100%{transform:translateX(7px) rotate(-30deg) scaleX(.57);opacity:.03}50%{transform:translateX(-8px) rotate(-24deg) scaleX(1.06);opacity:.47}}
@keyframes qrParticleOne2682{0%,100%{transform:translate(0,0) scale(.45);opacity:.1}50%{transform:translate(8px,-12px) scale(1.2);opacity:.9}}
@keyframes qrParticleTwo2682{0%,100%{transform:translate(0,0) scale(.5);opacity:.12}50%{transform:translate(-9px,-8px) scale(1.14);opacity:.82}}
@keyframes qrParticleThree2682{0%,100%{transform:translate(0,0) scale(.42);opacity:.08}50%{transform:translate(9px,12px) scale(1.22);opacity:.94}}
@keyframes qrParticleFour2682{0%,100%{transform:translate(0,0) scale(.45);opacity:.1}50%{transform:translate(-7px,-13px) scale(1.15);opacity:.88}}
@keyframes qrParticleFive2682{0%,100%{transform:translate(0,0) scale(.5);opacity:.11}50%{transform:translate(6px,14px) scale(1.25);opacity:.96}}
@keyframes qrParticleSix2682{0%,100%{transform:translate(0,0) scale(.44);opacity:.09}50%{transform:translate(-9px,-11px) scale(1.18);opacity:.9}}
@keyframes qrParticleSeven2682{0%,100%{transform:translate(0,0) scale(.46);opacity:.1}50%{transform:translate(9px,12px) scale(1.19);opacity:.92}}
@keyframes qrParticleEight2682{0%,100%{transform:translate(0,0) scale(.48);opacity:.09}50%{transform:translate(-7px,-12px) scale(1.16);opacity:.86}}
@keyframes qrParticleNine2682{0%,100%{transform:translate(0,0) scale(.43);opacity:.08}50%{transform:translate(11px,-8px) scale(1.24);opacity:.95}}
@keyframes qrParticleTen2682{0%,100%{transform:translate(0,0) scale(.47);opacity:.1}50%{transform:translate(-9px,10px) scale(1.15);opacity:.87}}
@keyframes qrParticleEleven2682{0%,100%{transform:translate(0,0) scale(.44);opacity:.08}50%{transform:translate(7px,-11px) scale(1.2);opacity:.94}}
@keyframes qrParticleTwelve2682{0%,100%{transform:translate(0,0) scale(.48);opacity:.1}50%{transform:translate(-9px,-9px) scale(1.12);opacity:.85}}
@keyframes qrParticleThirteen2682{0%,100%{transform:translate(0,0) scale(.45);opacity:.08}50%{transform:translate(10px,11px) scale(1.22);opacity:.92}}
@keyframes qrParticleFourteen2682{0%,100%{transform:translate(0,0) scale(.46);opacity:.09}50%{transform:translate(-7px,-13px) scale(1.17);opacity:.89}}
@keyframes qrParticleFifteen2682{0%,100%{transform:translate(0,0) scale(.45);opacity:.08}50%{transform:translate(8px,10px) scale(1.2);opacity:.94}}
@keyframes qrParticleSixteen2682{0%,100%{transform:translate(0,0) scale(.43);opacity:.08}50%{transform:translate(-10px,-9px) scale(1.18);opacity:.91}}
@keyframes qrParticleSeventeen2682{0%,100%{transform:translate(0,0) scale(.48);opacity:.09}50%{transform:translate(9px,-12px) scale(1.16);opacity:.87}}
@keyframes qrParticleEighteen2682{0%,100%{transform:translate(0,0) scale(.44);opacity:.08}50%{transform:translate(-8px,-10px) scale(1.22);opacity:.93}}
@keyframes qrParticleNineteen2682{0%,100%{transform:translate(0,0) scale(.42);opacity:.07}50%{transform:translate(8px,-13px) scale(1.25);opacity:.98}}
@keyframes qrParticleTwenty2682{0%,100%{transform:translate(0,0) scale(.46);opacity:.08}50%{transform:translate(-8px,-11px) scale(1.18);opacity:.9}}
@keyframes qrSparkOne2682{0%,100%{transform:scale(.3) rotate(0deg);opacity:.08}50%{transform:scale(1) rotate(45deg);opacity:1}}
@keyframes qrSparkTwo2682{0%,100%{transform:scale(.28) rotate(0deg);opacity:.07}50%{transform:scale(.92) rotate(-45deg);opacity:.9}}
@keyframes qrSparkThree2682{0%,100%{transform:scale(.3) rotate(0deg);opacity:.06}50%{transform:scale(1.05) rotate(45deg);opacity:1}}
@keyframes qrSparkFour2682{0%,100%{transform:scale(.32) rotate(0deg);opacity:.08}50%{transform:scale(.98) rotate(-45deg);opacity:.94}}
@keyframes qrSparkFive2682{0%,100%{transform:scale(.27) rotate(0deg);opacity:.06}50%{transform:scale(.88) rotate(45deg);opacity:.88}}
@keyframes qrSparkSix2682{0%,100%{transform:scale(.3) rotate(0deg);opacity:.07}50%{transform:scale(1.02) rotate(-45deg);opacity:.96}}
@keyframes qrSparkSeven2682{0%,100%{transform:scale(.28) rotate(0deg);opacity:.05}50%{transform:scale(.94) rotate(45deg);opacity:.92}}
@keyframes qrSparkEight2682{0%,100%{transform:scale(.3) rotate(0deg);opacity:.06}50%{transform:scale(1) rotate(-45deg);opacity:.95}}
@keyframes qrHalo2682{0%,100%{transform:translate(-50%,-50%) scale(.8);opacity:.25}50%{transform:translate(-50%,-50%) scale(1.2);opacity:.78}}
@keyframes qrShell2682{0%{transform:translate(-50%,-50%) rotate(0deg) scale(.94);opacity:.16}50%{transform:translate(-50%,-50%) rotate(180deg) scale(1.06);opacity:.52}100%{transform:translate(-50%,-50%) rotate(360deg) scale(.94);opacity:.16}}
@keyframes qrShellTwo2682{0%{transform:translate(-50%,-50%) rotate(0deg) scale(.9);opacity:.1}50%{transform:translate(-50%,-50%) rotate(180deg) scale(1.08);opacity:.38}100%{transform:translate(-50%,-50%) rotate(360deg) scale(.9);opacity:.1}}
@keyframes qrShellThree2682{0%{transform:translate(-50%,-50%) rotate(0deg) scale(.88);opacity:.08}50%{transform:translate(-50%,-50%) rotate(180deg) scale(1.05);opacity:.3}100%{transform:translate(-50%,-50%) rotate(360deg) scale(.88);opacity:.08}}
@keyframes qrCore2682{0%,100%{transform:translate(-50%,-50%) scale(.8);filter:brightness(.9);opacity:.72}50%{transform:translate(-50%,-50%) scale(1.12);filter:brightness(1.3);opacity:1}}
@keyframes qrCoreTwo2682{0%,100%{transform:translate(-50%,-50%) scale(.7);opacity:.62}50%{transform:translate(-50%,-50%) scale(1.22);opacity:1}}
@keyframes qrLight2682{0%,100%{transform:translate(-50%,-50%) scale(.65);opacity:.7}50%{transform:translate(-50%,-50%) scale(1.32);opacity:1}}
@keyframes qrBeamOne2682{0%,100%{opacity:.1;transform:translateY(-50%) scaleX(.72)}50%{opacity:.58;transform:translateY(-50%) scaleX(1.02)}}
@keyframes qrBeamTwo2682{0%,100%{opacity:.08;transform:translateX(-50%) scaleY(.7)}50%{opacity:.48;transform:translateX(-50%) scaleY(1.03)}}
@keyframes qrBeamThree2682{0%,100%{opacity:.05;transform:translateY(-50%) rotate(45deg) scaleX(.7)}50%{opacity:.32;transform:translateY(-50%) rotate(45deg) scaleX(1.04)}}
@keyframes qrBeamFour2682{0%,100%{opacity:.04;transform:translateY(-50%) rotate(-45deg) scaleX(.68)}50%{opacity:.28;transform:translateY(-50%) rotate(-45deg) scaleX(1.03)}}
@keyframes qrRayOne2682{from{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(360deg)}}
@keyframes qrRayTwo2682{from{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(-360deg)}}
@keyframes qrRayThree2682{from{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(360deg)}}
@keyframes qrRayFour2682{from{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(-360deg)}}
@keyframes qrScanOne2682{0%{top:-10%;opacity:0}12%{opacity:.1}28%{opacity:.72}45%{opacity:.12}62%{top:110%;opacity:0}100%{top:110%;opacity:0}}
@keyframes qrScanTwo2682{0%{bottom:-10%;opacity:0}15%{opacity:.08}31%{opacity:.45}48%{opacity:.06}66%{bottom:110%;opacity:0}100%{bottom:110%;opacity:0}}
@keyframes qrShine2682{0%{left:-80%;opacity:0}8%{opacity:.02}18%{opacity:.72}31%{opacity:.15}46%{left:135%;opacity:0}100%{left:135%;opacity:0}}
@keyframes qrGlitchOne2682{0%,80%,100%{transform:translate(0,0);opacity:.15}82%{transform:translate(4px,-2px);opacity:.8}84%{transform:translate(-3px,2px);opacity:.3}86%{transform:translate(2px,0);opacity:.7}88%{transform:translate(0,0);opacity:.15}}
@keyframes qrGlitchTwo2682{0%,76%,100%{transform:translate(0,0);opacity:.12}78%{transform:translate(-4px,1px);opacity:.75}80%{transform:translate(3px,-1px);opacity:.25}82%{transform:translate(-1px,2px);opacity:.65}84%{transform:translate(0,0);opacity:.12}}
@keyframes qrStatusOne2682{0%,100%{opacity:.2;box-shadow:0 0 4px rgba(71,255,225,.08)}50%{opacity:1;box-shadow:0 0 9px rgba(71,255,225,.55)}}
@keyframes qrStatusTwo2682{0%,100%{opacity:.15;box-shadow:0 0 4px rgba(87,147,255,.08)}50%{opacity:.9;box-shadow:0 0 9px rgba(87,147,255,.45)}}
@keyframes qrStatusThree2682{0%,100%{opacity:.18;box-shadow:0 0 4px rgba(220,91,255,.06)}50%{opacity:.9;box-shadow:0 0 9px rgba(220,91,255,.42)}}
@keyframes qrBorder2682{to{transform:rotate(360deg)}}
@keyframes qrLabelIcon2682{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-2px) rotate(5deg)}}
@keyframes qrIndicator2682{0%,100%{transform:scale(.75);opacity:.35}50%{transform:scale(1.25);opacity:1}}
@media (max-width:700px){.quantum-reactor-checkbox{width:340px;gap:12px}.quantum-reactor-main{flex-basis:135px;width:135px;height:94px}.quantum-reactor-label{min-width:155px}.quantum-reactor-title{font-size:14px}.quantum-reactor-subtitle{font-size:6.5px}}
@media (max-width:520px){.quantum-reactor-checkbox{width:285px;min-height:102px;padding:10px;gap:9px;border-radius:19px}.quantum-reactor-main{flex-basis:104px;width:104px;height:80px;border-radius:16px}.quantum-reactor-label{min-width:0;gap:8px}.quantum-reactor-label-icon{width:30px;height:30px;flex-basis:30px;border-radius:9px}.quantum-reactor-label-icon i{font-size:15px}.quantum-reactor-title{font-size:12px}.quantum-reactor-subtitle{font-size:5.6px;letter-spacing:1.3px}.quantum-reactor-indicator{width:5px;height:5px}.quantum-reactor-ring-5{width:92px;height:92px}.quantum-reactor-ring-6{width:110px;height:110px}}
@media (prefers-reduced-motion:reduce){.quantum-reactor-checkbox,.quantum-reactor-checkbox *,.quantum-reactor-checkbox::before,.quantum-reactor-checkbox::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important}}
`,
  },
  {
    id: 2683,
    name: "Rainbow Pulse Checkbox",
    preview: (
      <label className="rainbow-checkbox rainbow-checkbox-pulse">
        <input type="checkbox" />
        <span className="rainbow-box">
          <span className="rainbow-box-glow"></span>
          <span className="rainbow-box-check">
            <i className="ri-check-line"></i>
          </span>
        </span>
        <span className="rainbow-checkbox-text">Rainbow Pulse</span>
      </label>
    ),
    html: `<label class="rainbow-checkbox rainbow-checkbox-pulse"><input type="checkbox"><span class="rainbow-box"><span class="rainbow-box-glow"></span><span class="rainbow-box-check"><i class="ri-check-line"></i></span></span><span class="rainbow-checkbox-text">Rainbow Pulse</span></label>`,
    css: `
.rainbow-checkbox-pulse {}
`,
  },
  {
    id: 2684,
    name: "Prism Flow Checkbox",
    preview: (
      <label className="rainbow-checkbox rainbow-checkbox-prism">
        <input type="checkbox" />
        <span className="rainbow-box">
          <span className="rainbow-box-shine"></span>
          <span className="rainbow-box-check">
            <i className="ri-sparkling-line"></i>
          </span>
        </span>
        <span className="rainbow-checkbox-text">Prism Flow</span>
      </label>
    ),
    html: `<label class="rainbow-checkbox rainbow-checkbox-prism"><input type="checkbox"><span class="rainbow-box"><span class="rainbow-box-shine"></span><span class="rainbow-box-check"><i class="ri-sparkling-line"></i></span></span><span class="rainbow-checkbox-text">Prism Flow</span></label>`,
    css: `
.rainbow-checkbox-prism {}
`,
  },
  {
    id: 2685,
    name: "Aurora Checkbox",
    preview: (
      <label className="rainbow-checkbox rainbow-checkbox-aurora">
        <input type="checkbox" />
        <span className="rainbow-box">
          <span className="rainbow-aurora"></span>
          <span className="rainbow-box-check">
            <i className="ri-sun-line"></i>
          </span>
        </span>
        <span className="rainbow-checkbox-text">Aurora</span>
      </label>
    ),
    html: `<label class="rainbow-checkbox rainbow-checkbox-aurora"><input type="checkbox"><span class="rainbow-box"><span class="rainbow-aurora"></span><span class="rainbow-box-check"><i class="ri-sun-line"></i></span></span><span class="rainbow-checkbox-text">Aurora</span></label>`,
    css: `
.rainbow-checkbox-aurora {}
`,
  },
  {
    id: 2686,
    name: "Spectrum Orbit Checkbox",
    preview: (
      <label className="rainbow-checkbox rainbow-checkbox-orbit">
        <input type="checkbox" />
        <span className="rainbow-box">
          <span className="rainbow-orbit"></span>
          <span className="rainbow-box-check">
            <i className="ri-loader-4-line"></i>
          </span>
        </span>
        <span className="rainbow-checkbox-text">Spectrum Orbit</span>
      </label>
    ),
    html: `<label class="rainbow-checkbox rainbow-checkbox-orbit"><input type="checkbox"><span class="rainbow-box"><span class="rainbow-orbit"></span><span class="rainbow-box-check"><i class="ri-loader-4-line"></i></span></span><span class="rainbow-checkbox-text">Spectrum Orbit</span></label>`,
    css: `
.rainbow-checkbox-orbit {}
`,
  },
  {
    id: 2687,
    name: "Rainbow Energy Checkbox",
    preview: (
      <label className="rainbow-checkbox rainbow-checkbox-energy">
        <input type="checkbox" />
        <span className="rainbow-box">
          <span className="rainbow-energy-core"></span>
          <span className="rainbow-box-check">
            <i className="ri-flashlight-line"></i>
          </span>
        </span>
        <span className="rainbow-checkbox-text">Rainbow Energy</span>
      </label>
    ),
    html: `<label class="rainbow-checkbox rainbow-checkbox-energy"><input type="checkbox"><span class="rainbow-box"><span class="rainbow-energy-core"></span><span class="rainbow-box-check"><i class="ri-flashlight-line"></i></span></span><span class="rainbow-checkbox-text">Rainbow Energy</span></label>`,
    css: `
.rainbow-checkbox-energy {}
`,
  },
  {
    id: 2688,
    name: "Neon Spectrum Checkbox",
    preview: (
      <label className="rainbow-checkbox rainbow-checkbox-neon">
        <input type="checkbox" />
        <span className="rainbow-box">
          <span className="rainbow-neon-ring"></span>
          <span className="rainbow-box-check">
            <i className="ri-rainbow-line"></i>
          </span>
        </span>
        <span className="rainbow-checkbox-text">Neon Spectrum</span>
      </label>
    ),
    html: `<label class="rainbow-checkbox rainbow-checkbox-neon"><input type="checkbox"><span class="rainbow-box"><span class="rainbow-neon-ring"></span><span class="rainbow-box-check"><i class="ri-rainbow-line"></i></span></span><span class="rainbow-checkbox-text">Neon Spectrum</span></label>`,
    css: `
.rainbow-checkbox-neon {}
`,
  },
  {
    id: 2689,
    name: "Rainbow Flame Checkbox",
    preview: (
      <label className="rainbow-checkbox rainbow-checkbox-flame">
        <input type="checkbox" />
        <span className="rainbow-box">
          <span className="rainbow-flame"></span>
          <span className="rainbow-box-check">
            <i className="ri-fire-line"></i>
          </span>
        </span>
        <span className="rainbow-checkbox-text">Rainbow Flame</span>
      </label>
    ),
    html: `<label class="rainbow-checkbox rainbow-checkbox-flame"><input type="checkbox"><span class="rainbow-box"><span class="rainbow-flame"></span><span class="rainbow-box-check"><i class="ri-fire-line"></i></span></span><span class="rainbow-checkbox-text">Rainbow Flame</span></label>`,
    css: `
.rainbow-checkbox-flame {}
`,
  },
  {
    id: 2690,
    name: "Holographic Checkbox",
    preview: (
      <label className="rainbow-checkbox rainbow-checkbox-holo">
        <input type="checkbox" />
        <span className="rainbow-box">
          <span className="rainbow-hologram"></span>
          <span className="rainbow-box-check">
            <i className="ri-hologram-2-line"></i>
          </span>
        </span>
        <span className="rainbow-checkbox-text">Holographic</span>
      </label>
    ),
    html: `<label class="rainbow-checkbox rainbow-checkbox-holo"><input type="checkbox"><span class="rainbow-box"><span class="rainbow-hologram"></span><span class="rainbow-box-check"><i class="ri-hologram-2-line"></i></span></span><span class="rainbow-checkbox-text">Holographic</span></label>`,
    css: `
.rainbow-checkbox-holo {}
`,
  },
  {
    id: 2691,
    name: "Cosmic Rainbow Checkbox",
    preview: (
      <label className="rainbow-checkbox rainbow-checkbox-cosmic">
        <input type="checkbox" />
        <span className="rainbow-box">
          <span className="rainbow-cosmic"></span>
          <span className="rainbow-box-check">
            <i className="ri-planet-line"></i>
          </span>
        </span>
        <span className="rainbow-checkbox-text">Cosmic Rainbow</span>
      </label>
    ),
    html: `<label class="rainbow-checkbox rainbow-checkbox-cosmic"><input type="checkbox"><span class="rainbow-box"><span class="rainbow-cosmic"></span><span class="rainbow-box-check"><i class="ri-planet-line"></i></span></span><span class="rainbow-checkbox-text">Cosmic Rainbow</span></label>`,
    css: `
.rainbow-checkbox-cosmic {}
`,
  },
  {
    id: 2692,
    name: "Ultimate Rainbow Checkbox",
    preview: (
      <label className="rainbow-checkbox rainbow-checkbox-ultimate">
        <input type="checkbox" />
        <span className="rainbow-box">
          <span className="rainbow-ultimate-border"></span>
          <span className="rainbow-ultimate-particle rainbow-ultimate-particle-1"></span>
          <span className="rainbow-ultimate-particle rainbow-ultimate-particle-2"></span>
          <span className="rainbow-ultimate-particle rainbow-ultimate-particle-3"></span>
          <span className="rainbow-ultimate-particle rainbow-ultimate-particle-4"></span>
          <span className="rainbow-box-check">
            <i className="ri-sparkling-fill"></i>
          </span>
        </span>
        <span className="rainbow-checkbox-text">Ultimate Rainbow</span>
      </label>
    ),
    html: `<label class="rainbow-checkbox rainbow-checkbox-ultimate"><input type="checkbox"><span class="rainbow-box"><span class="rainbow-ultimate-border"></span><span class="rainbow-ultimate-particle rainbow-ultimate-particle-1"></span><span class="rainbow-ultimate-particle rainbow-ultimate-particle-2"></span><span class="rainbow-ultimate-particle rainbow-ultimate-particle-3"></span><span class="rainbow-ultimate-particle rainbow-ultimate-particle-4"></span><span class="rainbow-box-check"><i class="ri-sparkling-fill"></i></span></span><span class="rainbow-checkbox-text">Ultimate Rainbow</span></label>`,
    css: `
.rainbow-checkbox-ultimate {}
`,
  },
  {
    id: 2694,
    name: "Soft Square Checkbox",
    code: `<label class="cb-soft-square"><input type="checkbox"><span></span></label>`,
    css: `.cb-soft-square{display:inline-flex;align-items:center;justify-content:center;cursor:pointer}.cb-soft-square input{display:none}.cb-soft-square span{width:24px;height:24px;border:2px solid #777;border-radius:6px;display:block;position:relative;transition:.25s ease}.cb-soft-square input:checked+span{border-color:#fff;background:#fff;box-shadow:0 0 14px rgba(255,255,255,.4)}.cb-soft-square input:checked+span:after{content:"";position:absolute;width:7px;height:12px;border-right:2px solid #111;border-bottom:2px solid #111;transform:rotate(45deg);left:7px;top:3px}`,
  },
  {
    id: 2695,
    name: "Soft Circle Checkbox",
    code: `<label class="cb-soft-circle"><input type="checkbox"><span></span></label>`,
    css: `.cb-soft-circle{display:inline-flex;align-items:center;justify-content:center;cursor:pointer}.cb-soft-circle input{display:none}.cb-soft-circle span{width:24px;height:24px;border:2px solid #777;border-radius:50%;display:block;position:relative;transition:.25s ease}.cb-soft-circle input:checked+span{border-color:#fff;background:#fff;box-shadow:0 0 14px rgba(255,255,255,.35)}.cb-soft-circle input:checked+span:after{content:"";position:absolute;width:7px;height:12px;border-right:2px solid #111;border-bottom:2px solid #111;transform:rotate(45deg);left:7px;top:3px}`,
  },
  {
    id: 2696,
    name: "Inner Dot Square",
    code: `<label class="cb-inner-dot-square"><input type="checkbox"><span></span></label>`,
    css: `.cb-inner-dot-square{display:inline-flex;cursor:pointer}.cb-inner-dot-square input{display:none}.cb-inner-dot-square span{width:22px;height:22px;border:2px solid #666;border-radius:4px;display:block;position:relative;transition:.25s ease}.cb-inner-dot-square input:checked+span{border-color:#5ee7ff;box-shadow:0 0 10px rgba(94,231,255,.35)}.cb-inner-dot-square input:checked+span:after{content:"";position:absolute;width:8px;height:8px;background:#5ee7ff;border-radius:2px;left:5px;top:5px;box-shadow:0 0 8px #5ee7ff}`,
  },
  {
    id: 2697,
    name: "Inner Dot Circle",
    code: `<label class="cb-inner-dot-circle"><input type="checkbox"><span></span></label>`,
    css: `.cb-inner-dot-circle{display:inline-flex;cursor:pointer}.cb-inner-dot-circle input{display:none}.cb-inner-dot-circle span{width:24px;height:24px;border:2px solid #666;border-radius:50%;display:block;position:relative;transition:.25s ease}.cb-inner-dot-circle input:checked+span{border-color:#a86cff;box-shadow:0 0 12px rgba(168,108,255,.4)}.cb-inner-dot-circle input:checked+span:after{content:"";position:absolute;width:8px;height:8px;background:#a86cff;border-radius:50%;left:6px;top:6px;box-shadow:0 0 9px #a86cff}`,
  },
  {
    id: 2698,
    name: "Double Border Square",
    code: `<label class="cb-double-square"><input type="checkbox"><span></span></label>`,
    css: `.cb-double-square{display:inline-flex;cursor:pointer}.cb-double-square input{display:none}.cb-double-square span{width:23px;height:23px;border:2px solid #777;border-radius:5px;display:block;position:relative;transition:.25s ease}.cb-double-square span:before{content:"";position:absolute;inset:4px;border:1px solid #555;border-radius:3px;transition:.25s ease}.cb-double-square input:checked+span{border-color:#fff;box-shadow:0 0 10px rgba(255,255,255,.25)}.cb-double-square input:checked+span:before{border-color:#fff;background:rgba(255,255,255,.08)}`,
  },
  {
    id: 2699,
    name: "Double Border Circle",
    code: `<label class="cb-double-circle"><input type="checkbox"><span></span></label>`,
    css: `.cb-double-circle{display:inline-flex;cursor:pointer}.cb-double-circle input{display:none}.cb-double-circle span{width:24px;height:24px;border:2px solid #777;border-radius:50%;display:block;position:relative;transition:.25s ease}.cb-double-circle span:before{content:"";position:absolute;inset:4px;border:1px solid #555;border-radius:50%;transition:.25s ease}.cb-double-circle input:checked+span{border-color:#fff;box-shadow:0 0 12px rgba(255,255,255,.3)}.cb-double-circle input:checked+span:before{border-color:#fff;background:rgba(255,255,255,.08)}`,
  },
  {
    id: 2700,
    name: "Blue Glow Square",
    code: `<label class="cb-blue-glow"><input type="checkbox"><span></span></label>`,
    css: `.cb-blue-glow{display:inline-flex;cursor:pointer}.cb-blue-glow input{display:none}.cb-blue-glow span{width:24px;height:24px;border:2px solid #4da6ff;border-radius:5px;display:block;position:relative;transition:.3s ease}.cb-blue-glow input:checked+span{background:#4da6ff;box-shadow:0 0 8px #4da6ff,0 0 20px rgba(77,166,255,.65)}.cb-blue-glow input:checked+span:after{content:"";position:absolute;width:7px;height:12px;border-right:2px solid #06111d;border-bottom:2px solid #06111d;transform:rotate(45deg);left:7px;top:3px}`,
  },
  {
    id: 2701,
    name: "Purple Glow Circle",
    code: `<label class="cb-purple-glow"><input type="checkbox"><span></span></label>`,
    css: `.cb-purple-glow{display:inline-flex;cursor:pointer}.cb-purple-glow input{display:none}.cb-purple-glow span{width:24px;height:24px;border:2px solid #9b5cff;border-radius:50%;display:block;position:relative;transition:.3s ease}.cb-purple-glow input:checked+span{background:#9b5cff;box-shadow:0 0 8px #9b5cff,0 0 22px rgba(155,92,255,.7)}.cb-purple-glow input:checked+span:after{content:"";position:absolute;width:7px;height:12px;border-right:2px solid #170b27;border-bottom:2px solid #170b27;transform:rotate(45deg);left:7px;top:3px}`,
  },
  {
    id: 2702,
    name: "Cyan Ring Checkbox",
    code: `<label class="cb-cyan-ring"><input type="checkbox"><span></span></label>`,
    css: `.cb-cyan-ring{display:inline-flex;cursor:pointer}.cb-cyan-ring input{display:none}.cb-cyan-ring span{width:25px;height:25px;border:2px solid #555;border-radius:50%;display:block;position:relative;transition:.3s ease}.cb-cyan-ring input:checked+span{border-color:#00e5ff;box-shadow:0 0 12px rgba(0,229,255,.6)}.cb-cyan-ring input:checked+span:before{content:"";position:absolute;inset:4px;border-radius:50%;background:#00e5ff;box-shadow:0 0 8px #00e5ff}.cb-cyan-ring input:checked+span:after{content:"";position:absolute;inset:-5px;border:1px solid rgba(0,229,255,.3);border-radius:50%;animation:cb-cyan-spin 2s linear infinite}@keyframes cb-cyan-spin{to{transform:rotate(360deg)}}`,
  },
  {
    id: 2703,
    name: "Orange Ring Checkbox",
    code: `<label class="cb-orange-ring"><input type="checkbox"><span></span></label>`,
    css: `.cb-orange-ring{display:inline-flex;cursor:pointer}.cb-orange-ring input{display:none}.cb-orange-ring span{width:25px;height:25px;border:2px solid #666;border-radius:50%;display:block;position:relative;transition:.3s ease}.cb-orange-ring input:checked+span{border-color:#ff8a00;box-shadow:0 0 12px rgba(255,138,0,.6)}.cb-orange-ring input:checked+span:before{content:"";position:absolute;inset:5px;border-radius:50%;background:#ff8a00;box-shadow:0 0 8px #ff8a00}.cb-orange-ring input:checked+span:after{content:"";position:absolute;inset:-5px;border:1px dashed rgba(255,138,0,.45);border-radius:50%;animation:cb-orange-spin 2.5s linear infinite}@keyframes cb-orange-spin{to{transform:rotate(-360deg)}}`,
  },
  {
    id: 2704,
    name: "Dashed Square",
    code: `<label class="cb-dashed-square"><input type="checkbox"><span></span></label>`,
    css: `.cb-dashed-square{display:inline-flex;cursor:pointer}.cb-dashed-square input{display:none}.cb-dashed-square span{width:24px;height:24px;border:2px dashed #666;border-radius:4px;display:block;position:relative;transition:.25s ease}.cb-dashed-square input:checked+span{border-color:#fff;box-shadow:0 0 10px rgba(255,255,255,.25)}.cb-dashed-square input:checked+span:after{content:"";position:absolute;width:7px;height:12px;border-right:2px solid #fff;border-bottom:2px solid #fff;transform:rotate(45deg);left:7px;top:3px}`,
  },
  {
    id: 2705,
    name: "Dashed Circle",
    code: `<label class="cb-dashed-circle"><input type="checkbox"><span></span></label>`,
    css: `.cb-dashed-circle{display:inline-flex;cursor:pointer}.cb-dashed-circle input{display:none}.cb-dashed-circle span{width:25px;height:25px;border:2px dashed #666;border-radius:50%;display:block;position:relative;transition:.25s ease}.cb-dashed-circle input:checked+span{border-color:#fff;box-shadow:0 0 10px rgba(255,255,255,.25)}.cb-dashed-circle input:checked+span:after{content:"";position:absolute;width:7px;height:12px;border-right:2px solid #fff;border-bottom:2px solid #fff;transform:rotate(45deg);left:7px;top:3px}`,
  },
  {
    id: 2706,
    name: "Glass Square",
    code: `<label class="cb-glass-square"><input type="checkbox"><span></span></label>`,
    css: `.cb-glass-square{display:inline-flex;cursor:pointer}.cb-glass-square input{display:none}.cb-glass-square span{width:25px;height:25px;border:1px solid rgba(255,255,255,.3);border-radius:6px;display:block;position:relative;background:rgba(255,255,255,.04);backdrop-filter:blur(6px);transition:.3s ease}.cb-glass-square input:checked+span{background:rgba(255,255,255,.18);border-color:rgba(255,255,255,.75);box-shadow:inset 0 0 10px rgba(255,255,255,.12),0 0 15px rgba(255,255,255,.18)}.cb-glass-square input:checked+span:after{content:"";position:absolute;width:7px;height:12px;border-right:2px solid #fff;border-bottom:2px solid #fff;transform:rotate(45deg);left:7px;top:3px}`,
  },
  {
    id: 2707,
    name: "Glass Circle",
    code: `<label class="cb-glass-circle"><input type="checkbox"><span></span></label>`,
    css: `.cb-glass-circle{display:inline-flex;cursor:pointer}.cb-glass-circle input{display:none}.cb-glass-circle span{width:25px;height:25px;border:1px solid rgba(255,255,255,.3);border-radius:50%;display:block;position:relative;background:rgba(255,255,255,.04);backdrop-filter:blur(6px);transition:.3s ease}.cb-glass-circle input:checked+span{background:rgba(255,255,255,.18);border-color:rgba(255,255,255,.75);box-shadow:inset 0 0 10px rgba(255,255,255,.12),0 0 15px rgba(255,255,255,.18)}.cb-glass-circle input:checked+span:after{content:"";position:absolute;width:7px;height:12px;border-right:2px solid #fff;border-bottom:2px solid #fff;transform:rotate(45deg);left:7px;top:3px}`,
  },
  {
    id: 2708,
    name: "Rainbow Border Square",
    code: `<label class="cb-rainbow-square"><input type="checkbox"><span></span></label>`,
    css: `.cb-rainbow-square{display:inline-flex;cursor:pointer}.cb-rainbow-square input{display:none}.cb-rainbow-square span{width:25px;height:25px;border-radius:6px;padding:2px;background:linear-gradient(45deg,#ff004c,#ff8a00,#ffe600,#00e676,#00cfff,#8a5cff,#ff00c8);display:block;transition:.35s ease}.cb-rainbow-square span:before{content:"";display:block;width:100%;height:100%;border-radius:4px;background:#101010}.cb-rainbow-square input:checked+span{box-shadow:0 0 10px rgba(255,0,180,.35),0 0 18px rgba(0,220,255,.25);transform:scale(1.08)}.cb-rainbow-square input:checked+span:after{content:"✓";position:absolute;color:#fff;font-size:16px;line-height:25px;transform:translate(-21px,0);text-align:center;width:25px;height:25px}`,
  },
  {
    id: 2709,
    name: "Rainbow Border Circle",
    code: `<label class="cb-rainbow-circle"><input type="checkbox"><span></span></label>`,
    css: `.cb-rainbow-circle{display:inline-flex;cursor:pointer}.cb-rainbow-circle input{display:none}.cb-rainbow-circle span{width:25px;height:25px;border-radius:50%;padding:2px;background:linear-gradient(45deg,#ff004c,#ff8a00,#ffe600,#00e676,#00cfff,#8a5cff,#ff00c8);display:block;transition:.35s ease}.cb-rainbow-circle span:before{content:"";display:block;width:100%;height:100%;border-radius:50%;background:#101010}.cb-rainbow-circle input:checked+span{box-shadow:0 0 10px rgba(255,0,180,.35),0 0 18px rgba(0,220,255,.25);transform:scale(1.08)}.cb-rainbow-circle input:checked+span:after{content:"✓";position:absolute;color:#fff;font-size:16px;line-height:25px;transform:translate(-21px,0);text-align:center;width:25px;height:25px}`,
  },
  {
    id: 2710,
    name: "Red Pulse Checkbox",
    code: `<label class="cb-red-pulse"><input type="checkbox"><span></span></label>`,
    css: `.cb-red-pulse{display:inline-flex;cursor:pointer}.cb-red-pulse input{display:none}.cb-red-pulse span{width:24px;height:24px;border:2px solid #ff3b4f;border-radius:5px;display:block;position:relative;transition:.25s ease}.cb-red-pulse input:checked+span{background:#ff3b4f;box-shadow:0 0 8px #ff3b4f,0 0 22px rgba(255,59,79,.55);animation:cb-red-pulse 1.3s ease-in-out infinite}.cb-red-pulse input:checked+span:after{content:"";position:absolute;width:7px;height:12px;border-right:2px solid #190306;border-bottom:2px solid #190306;transform:rotate(45deg);left:7px;top:3px}@keyframes cb-red-pulse{50%{box-shadow:0 0 14px #ff3b4f,0 0 32px rgba(255,59,79,.75)}}`,
  },
  {
    id: 2711,
    name: "Green Pulse Circle",
    code: `<label class="cb-green-pulse"><input type="checkbox"><span></span></label>`,
    css: `.cb-green-pulse{display:inline-flex;cursor:pointer}.cb-green-pulse input{display:none}.cb-green-pulse span{width:24px;height:24px;border:2px solid #23e68a;border-radius:50%;display:block;position:relative;transition:.25s ease}.cb-green-pulse input:checked+span{background:#23e68a;box-shadow:0 0 8px #23e68a,0 0 22px rgba(35,230,138,.55);animation:cb-green-pulse 1.3s ease-in-out infinite}.cb-green-pulse input:checked+span:after{content:"";position:absolute;width:7px;height:12px;border-right:2px solid #03140c;border-bottom:2px solid #03140c;transform:rotate(45deg);left:7px;top:3px}@keyframes cb-green-pulse{50%{box-shadow:0 0 14px #23e68a,0 0 32px rgba(35,230,138,.72)}}`,
  },
  {
    id: 2712,
    name: "Yellow Dot Checkbox",
    code: `<label class="cb-yellow-dot"><input type="checkbox"><span></span></label>`,
    css: `.cb-yellow-dot{display:inline-flex;cursor:pointer}.cb-yellow-dot input{display:none}.cb-yellow-dot span{width:24px;height:24px;border:2px solid #767676;border-radius:5px;display:block;position:relative;transition:.25s ease}.cb-yellow-dot input:checked+span{border-color:#ffd43b;box-shadow:0 0 10px rgba(255,212,59,.35)}.cb-yellow-dot input:checked+span:after{content:"";position:absolute;width:8px;height:8px;background:#ffd43b;border-radius:50%;left:6px;top:6px;box-shadow:0 0 8px #ffd43b}`,
  },
  {
    id: 2713,
    name: "Rainbow Animated Circle",
    code: `<label class="cb-rainbow-spin"><input type="checkbox"><span></span></label>`,
    css: `.cb-rainbow-spin{display:inline-flex;cursor:pointer}.cb-rainbow-spin input{display:none}.cb-rainbow-spin span{width:25px;height:25px;border:2px solid transparent;border-radius:50%;display:block;position:relative;background:linear-gradient(#0d0d0d,#0d0d0d) padding-box,linear-gradient(0deg,#ff004c,#ff8a00,#ffe600,#00e676,#00cfff,#8a5cff,#ff00c8) border-box;transition:.3s ease}.cb-rainbow-spin input:checked+span{animation:cb-rainbow-spin 2s linear infinite;box-shadow:0 0 14px rgba(255,0,180,.4),0 0 20px rgba(0,220,255,.25)}.cb-rainbow-spin input:checked+span:after{content:"";position:absolute;width:7px;height:12px;border-right:2px solid #fff;border-bottom:2px solid #fff;transform:rotate(45deg);left:7px;top:3px}@keyframes cb-rainbow-spin{to{filter:hue-rotate(360deg)}}`,
  },
];
