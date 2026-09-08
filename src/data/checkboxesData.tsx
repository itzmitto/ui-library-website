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
];
