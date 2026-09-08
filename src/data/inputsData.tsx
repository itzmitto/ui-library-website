import "../pages/All.css";

export const inputs = [
  {
    id: 12,
    name: "Text Input",
    preview: (
      <input
        className="prev-input"
        type="text"
        placeholder="Type something..."
      />
    ),
    html: `<input class="Input" type="text" placeholder="Type something..." />`,
    css: `.Input {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    padding: 10px 14px;
    border-radius: 8px;
    font-size: 14px;
    width: 180px;
    outline: none;
    transition: border-color 0.2s;
}
.Input::placeholder {
    color: #52525b;
}
.Input:focus {
    border-color: #7c3aed;
}`,
  },
  {
    id: 171,
    name: "input",
    preview: (
      <input className="ip-171" type="text" placeholder="Type something..." />
    ),
    html: `<input class="Input" type="text" placeholder="Type something..." />`,
    css: `.Input {
    width: 250px;
    padding: 12px 16px;
    border: 2px solid #d1d5db;
    border-radius: 10px;
    outline: none;
    font-size: 15px;
    transition: 0.2s ease;
}
.Input:focus {
    border-color: #3b82f6;
}`,
  },
  {
    id: 172,
    name: "input",
    preview: (
      <input className="ip-172" type="text" placeholder="Type something..." />
    ),
    html: `<input class="Input" type="text" placeholder="Type something..." />`,
    css: `.Input {
    width: 250px;
    padding: 12px 16px;
    border: none;
    border-bottom: 2px solid #cbd5e1;
    outline: none;
    font-size: 15px;
    background: transparent;
    transition: 0.2s ease;
}
.Input:focus {
    border-bottom-color: #2563eb;
}`,
  },
  {
    id: 173,
    name: "input",
    preview: (
      <input className="ip-173" type="text" placeholder="Type something..." />
    ),
    html: `<input class="Input" type="text" placeholder="Type something..." />`,
    css: `.Input {
    width: 250px;
    padding: 12px 16px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
    background: #f8fafc;
    outline: none;
    font-size: 15px;
    transition: 0.2s ease;
}
.Input:focus {
    background: white;
    border-color: #6366f1;
}`,
  },
  {
    id: 174,
    name: "input",
    preview: (
      <input className="ip-174" type="text" placeholder="Type something..." />
    ),
    html: `<input class="Input" type="text" placeholder="Type something..." />`,
    css: `.Input {
    width: 250px;
    padding: 12px 16px;
    border: 2px solid transparent;
    border-radius: 12px;
    background: #f1f5f9;
    outline: none;
    font-size: 15px;
    transition: 0.2s ease;
}
.Input:focus {
    border-color: #0f172a;
    background: white;
}`,
  },
  {
    id: 175,
    name: "input",
    preview: (
      <input className="ip-175" type="text" placeholder="Type something..." />
    ),
    html: `<input class="Input" type="text" placeholder="Type something..." />`,
    css: `.Input {
    width: 250px;
    padding: 12px 16px;
    border: 1px solid #d4d4d8;
    border-radius: 999px;
    outline: none;
    font-size: 15px;
    transition: 0.2s ease;
}
.Input:focus {
    border-color: #8b5cf6;
    box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.15);
}`,
  },
  {
    id: 176,
    name: "input",
    preview: (
      <input className="ip-176" type="text" placeholder="Type something..." />
    ),
    html: `<input class="Input" type="text" placeholder="Type something..." />`,
    css: `.Input {
    width: 250px;
    padding: 14px 18px;
    border: none;
    border-radius: 10px;
    background: #111827;
    color: white;
    outline: none;
    font-size: 15px;
}
.Input::placeholder {
    color: grey;
}`,
  },
  {
    id: 177,
    name: "input",
    preview: (
      <input className="ip-177" type="text" placeholder="Type something..." />
    ),
    html: `<input class="Input" type="text" placeholder="Type something..." />`,
    css: `.Input {
    width: 250px;
    padding: 12px 16px;
    border: 5px solid #d4d4d8;
    border-radius: 8px;
    outline: none;
    font-size: 15px;
    transition: 0.2s ease;
}
.Input:hover {
    border-color: grey;
}
.Input:focus {
    border-color: purple;
}`,
  },
  {
    id: 178,
    name: "input",
    preview: (
      <input className="ip-178" type="text" placeholder="Type something..." />
    ),
    html: `<input class="Input" type="text" placeholder="Type something..." />`,
    css: `.Input {
    width: 250px;
    padding: 12px 16px;
    border: 2px solid rgb(141, 28, 141);
    border-radius: 14px;
    outline: none;
    font-size: 15px;
    transition: all 0.25s ease;
}`,
  },
  {
    id: 179,
    name: "input",
    preview: (
      <div className="ip-179-container">
        <input
          className="ip-179"
          type="text"
          placeholder="Search the internet..."
        />
      </div>
    ),
    html: `<div class="Input-container">
    <input class="Input" type="text" placeholder="Search the internet..." />
</div>`,
    css: `.Input-container {
    position: relative;
    width: 100%;
    max-width: 270px;
}
.Input {
    width: 100%;
    height: 60px;
    padding: 12px;
    font-size: 18px;
    font-family: "Courier New", monospace;
    color: #000;
    background-color: #fff;
    border: 4px solid #000;
    outline: none;
    border-radius: 0;
    transition: all 0.3s ease;
    box-shadow: 8px 8px 0 #000;
}
.Input::placeholder {
    color: #888;
}
.Input:hover {
    transform: translate(-4px, -4px);
    box-shadow: 12px 12px 0 #000;
}
.Input:focus {
    background-color: #000;
    color: #fff;
    border-color: #fff;
    animation: Input-shake 0.5s ease-in-out;
}
.Input:focus::placeholder {
    color: #fff;
}
.Input:not(:placeholder-shown) {
    animation: Input-glitch 1s linear infinite;
    font-weight: bold;
    letter-spacing: 1px;
}
.Input-container::after {
    content: "|";
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #000;
    animation: Input-blink 0.7s step-end infinite;
}
@keyframes Input-blink {
    50% {
        opacity: 0;
    }
}
@keyframes Input-shake {
    0% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-5px) rotate(-5deg);
    }
    50% {
        transform: translateX(5px) rotate(5deg);
    }
    75% {
        transform: translateX(-5px) rotate(-5deg);
    }
    100% {
        transform: translateX(0);
    }
}
@keyframes Input-glitch {
    0% {
        transform: none;
        opacity: 1;
    }
    7% {
        transform: skew(-0.5deg, -0.9deg);
        opacity: 0.75;
    }
    10% {
        transform: none;
        opacity: 1;
    }
    27% {
        transform: none;
        opacity: 1;
    }
    30% {
        transform: skew(0.8deg, -0.1deg);
        opacity: 0.75;
    }
    35% {
        transform: none;
        opacity: 1;
    }
    52% {
        transform: none;
        opacity: 1;
    }
    55% {
        transform: skew(-1deg, 0.2deg);
        opacity: 0.75;
    }
    72% {
        transform: none;
        opacity: 1;
    }
    75% {
        transform: skew(0.4deg, 1deg);
        opacity: 0.75;
    }
    80% {
        transform: none;
        opacity: 1;
    }
    100% {
        transform: none;
        opacity: 1;
    }
}`,
  },
  {
    id: 180,
    name: "input",
    preview: (
      <input className="ip-180" type="text" placeholder="Type something..." />
    ),
    html: `<input class="Input" type="text" placeholder="Type something..." />`,
    css: `.Input {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 20px 28px;
    border-radius: 8px;
    font-size: 15px;
    width: 280px;
    outline: none;
    transition: border-color 0.2s;
}
.Input::placeholder {
    color: grey;
}
.Input:focus {
    border-color: #5e0aee;
}`,
  },
  {
    id: 181,
    name: "rating",
    preview: (
      <div className="ip-181-rating">
        <input type="radio" id="ip181-star5" name="ip181-rating" />
        <label htmlFor="ip181-star5"></label>
        <input type="radio" id="ip181-star4" name="ip181-rating" />
        <label htmlFor="ip181-star4"></label>
        <input type="radio" id="ip181-star3" name="ip181-rating" />
        <label htmlFor="ip181-star3"></label>
        <input type="radio" id="ip181-star2" name="ip181-rating" />
        <label htmlFor="ip181-star2"></label>
        <input type="radio" id="ip181-star1" name="ip181-rating" />
        <label htmlFor="ip181-star1"></label>
      </div>
    ),
    html: `<div class="Rating">
    <input type="radio" id="rating-star5" name="rating" />
    <label for="rating-star5"></label>
    <input type="radio" id="rating-star4" name="rating" />
    <label for="rating-star4"></label>
    <input type="radio" id="rating-star3" name="rating" />
    <label for="rating-star3"></label>
    <input type="radio" id="rating-star2" name="rating" />
    <label for="rating-star2"></label>
    <input type="radio" id="rating-star1" name="rating" />
    <label for="rating-star1"></label>
</div>`,
    css: `.Rating {
    display: inline-block;
}
.Rating input {
    display: none;
}
.Rating label {
    float: right;
    cursor: pointer;
    transition: color 0.3s ease;
}
.Rating label::before {
    content: "\\2605";
    font-size: 32px;
    color: #d4d4d8;
}
.Rating input:checked~label::before,
.Rating label:hover::before,
.Rating label:hover~label::before {
    color: #ffd700;
}`,
  },
  {
    id: 182,
    name: "search input",
    preview: (
      <div className="ip-182-container">
        <input placeholder="Search" className="ip-182-input" type="text" />
        <label className="ip-182-label"></label>
      </div>
    ),
    html: `<div class="Input-container">
    <input placeholder="Search" class="Input" type="text" />
    <label class="Input-label"></label>
</div>`,
    css: `.Input-container {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    cursor: text;
    padding-left: 15px;
}
.Input {
    width: 170px;
    height: 100%;
    border: none;
    outline: none;
    font-size: 0.9em;
    caret-color: red;
}
.Input-label {
    cursor: text;
    padding: 0 12px;
}`,
  },
  {
    id: 183,
    name: "input",
    preview: (
      <div className="ip-183-container">
        <input
          className="ip-183"
          type="text"
          placeholder="Search the internet..."
        />
      </div>
    ),
    html: `<div class="Input-container">
    <input class="Input" type="text" placeholder="Search the internet..." />
</div>`,
    css: `.Input-container {
    position: relative;
    width: 100%;
    max-width: 270px;
}
.Input {
    width: 100%;
    height: 60px;
    padding: 12px;
    font-size: 18px;
    font-family: "Courier New", monospace;
    color: #000;
    background-color: #fff;
    border: 4px solid #000;
    border-radius: 0;
    outline: none;
    transition: all 0.3s ease;
    box-shadow: 8px 8px 0 #000;
}
.Input::placeholder {
    color: #888;
}
.Input:hover {
    transform: translate(-4px, -4px);
    box-shadow: 12px 12px 0 #000;
}
.Input:focus {
    background-color: #010101;
    color: #fff;
    border-color: #d6d9dd;
    animation: Input-shake 0.5s ease-in-out;
}
.Input:focus::placeholder {
    color: #fff;
}
.Input:not(:placeholder-shown) {
    animation: Input-glitch 1s linear infinite;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: 0 0 0 #000;
}
.Input-container::after {
    content: "|";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #000;
    animation: Input-blink 0.7s step-end infinite;
    pointer-events: none;
}
.Input:focus~.Input-container::after {
    color: #fff;
}
@keyframes Input-shake {
    0% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-5px) rotate(-5deg);
    }
    50% {
        transform: translateX(5px) rotate(5deg);
    }
    75% {
        transform: translateX(-5px) rotate(-5deg);
    }
    100% {
        transform: translateX(0);
    }
}
@keyframes Input-glitch {
    0% {
        transform: none;
        opacity: 1;
    }
    7% {
        transform: skew(-0.5deg, -0.9deg);
        opacity: 0.75;
    }
    10% {
        transform: none;
        opacity: 1;
    }
    27% {
        transform: none;
        opacity: 1;
    }
    30% {
        transform: skew(0.8deg, -0.1deg);
        opacity: 0.75;
    }
    35% {
        transform: none;
        opacity: 1;
    }
    52% {
        transform: none;
        opacity: 1;
    }
    55% {
        transform: skew(-1deg, 0.2deg);
        opacity: 0.75;
    }
    72% {
        transform: none;
        opacity: 1;
    }
    75% {
        transform: skew(0.4deg, 1deg);
        opacity: 0.75;
    }
    80% {
        transform: none;
        opacity: 1;
    }
    100% {
        transform: none;
        opacity: 1;
    }
}
@keyframes Input-blink {
    50% {
        opacity: 0;
    }
}`,
  },
  {
    id: 184,
    name: "input",
    preview: (
      <input className="ip-184" type="text" placeholder="Type something..." />
    ),
    html: `<input class="Input" type="text" placeholder="Type something..." />`,
    css: `.Input {
    width: 240px;
    padding: 12px 16px;
    background: #111827;
    color: white;
    border: none;
    border-radius: 8px;
    outline: none;
}
.Input::placeholder {
    color: #9ca3af;
}`,
  },
  {
    id: 185,
    name: "input",
    preview: (
      <input className="ip-185" type="text" placeholder="Type something..." />
    ),
    html: `<input class="Input" type="text" placeholder="Type something..." />`,
    css: `.Input {
    width: 240px;
    padding: 12px 16px;
    border: 2px solid #e4e4e7;
    border-radius: 999px;
    outline: none;
}
.Input:focus {
    border-color: #0f172a;
}`,
  },
  {
    id: 186,
    name: "input",
    preview: (
      <input className="ip-186" type="text" placeholder="Type something..." />
    ),
    html: `<input class="Input" type="text" placeholder="Type something..." />`,
    css: `.Input {
    width: 240px;
    padding: 12px 0;
    border: none;
    border-bottom: 2px solid #d4d4d8;
    outline: none;
    background: transparent;
}
.Input:focus {
    border-bottom-color: #3b82f6;
}`,
  },
  {
    id: 187,
    name: "input",
    preview: (
      <input className="ip-187" type="text" placeholder="Type something..." />
    ),
    html: `<input class="Input" type="text" placeholder="Type something..." />`,
    css: `.Input {
    max-width: 190px;
    height: 30px;
    border: 2px solid transparent;
    outline: none;
    border-bottom: 2px solid #3f3f3f;
    caret-color: #3f3f3f;
    background-color: #212121;
    padding: 5px;
    transition: 0.5s linear;
    font-family: monospace;
    letter-spacing: 1px;
    color: #fff;
}
.Input:focus {
    border: 2px solid tomato;
    caret-color: tomato;
    color: tomato;
    box-shadow: 4px 4px 10px #070707;
}
.Input:focus::placeholder {
    color: tomato;
}`,
  },
  {
    id: 188,
    name: "input",
    preview: (
      <div className="ip-188-container">
        <input className="ip-188" type="text" required />
        <label>You'r name</label>
        <i></i>
      </div>
    ),
    html: `<div class="Input-container">
    <input class="Input" type="text" required />
    <label>You'r name</label>
    <i></i>
</div>`,
    css: `.Input-container {
    position: relative;
    width: 200px;
}
.Input-container .Input {
    width: 100%;
    background: transparent;
    outline: none;
    border: none;
    color: #222;
    padding: 8px;
}
.Input-container label {
    position: absolute;
    left: 0;
    top: 0;
    color: rgba(105, 105, 105, 0.7);
    text-transform: uppercase;
    pointer-events: none;
    transition: 0.5s;
    font-weight: bold;
}
.Input-container .Input:valid ~ label,
.Input-container .Input:focus ~ label {
    color: rgb(10, 131, 212);
    transform: translateY(-15px);
    font-size: 0.6rem;
}
.Input-container i {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #222;
    overflow: hidden;
}
.Input-container i::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 100%;
    background: linear-gradient(
        90deg,
        #ff1b69,
        #ff0,
        #2196f3,
        #9c27b0,
        #ff1b69
    );
    animation: Input-animate 3s linear infinite;
}
@keyframes Input-animate {
    0% {
        transform: translateX(-50%);
    }
    100% {
        transform: translateX(0%);
    }
}`,
  },
  {
    id: 792,
    name: "Clean Text Input",
    preview: (
      <div className="inp-792">
        <label>Full name</label>
        <input type="text" placeholder="Enter your full name" />
      </div>
    ),
    html: `<div class="Input">
    <label>Full name</label>
    <input type="text" placeholder="Enter your full name">
</div>`,
    css: `.Input {
    width: 320px;
}

.Input label {
    display: block;
    margin-bottom: 7px;
    color: #18181b;
    font-size: 12px;
    font-weight: 600;
}

.Input input {
    width: 100%;
    height: 46px;
    padding: 0 13px;
    box-sizing: border-box;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    background: #fff;
    color: #18181b;
    outline: none;
    font-size: 13px;
    transition: all 0.2s;
}

.Input input::placeholder {
    color: #a1a1aa;
}

.Input input:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.08);
}`,
  },
  {
    id: 793,
    name: "Icon Text Input",
    preview: (
      <div className="inp-793">
        <label>Email address</label>
        <div className="inp-793__field">
          <i className="fa-regular fa-envelope"></i>
          <input type="email" placeholder="you@example.com" />
        </div>
      </div>
    ),
    html: `<div class="Input">
    <label>Email address</label>
    <div class="Input-field">
        <i class="fa-regular fa-envelope"></i>
        <input type="email" placeholder="you@example.com">
    </div>
</div>`,
    css: `.Input {
    width: 320px;
}

.Input label {
    display: block;
    margin-bottom: 7px;
    color: #27272a;
    font-size: 12px;
    font-weight: 600;
}

.Input-field {
    height: 46px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 13px;
    box-sizing: border-box;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    background: #fff;
    transition: all 0.2s;
}

.Input-field i {
    color: #a1a1aa;
    font-size: 14px;
}

.Input-field input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: #18181b;
    font-size: 13px;
}

.Input-field:focus-within {
    border-color: #7c3aed;
    box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.08);
}`,
  },
  {
    id: 794,
    name: "Search Input",
    preview: (
      <div className="inp-794">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="Search anything..." />
        <kbd>/</kbd>
      </div>
    ),
    html: `<div class="SearchInput">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type="search" placeholder="Search anything...">
    <kbd>/</kbd>
</div>`,
    css: `.SearchInput {
    width: 360px;
    height: 46px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 11px;
    box-sizing: border-box;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);
}

.SearchInput > i {
    color: #71717a;
}

.SearchInput input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    font-size: 13px;
}

.SearchInput kbd {
    min-width: 22px;
    height: 22px;
    display: grid;
    place-items: center;
    border: 1px solid #d4d4d8;
    border-radius: 6px;
    background: #f4f4f5;
    color: #71717a;
    font-size: 11px;
}`,
  },
  {
    id: 795,
    name: "Password Input",
    preview: (
      <div className="inp-795">
        <label>Password</label>
        <div className="inp-795__field">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Enter your password" />
          <button type="button">
            <i className="fa-solid fa-eye"></i>
          </button>
        </div>
        <span className="inp-795__hint">Use at least 8 characters.</span>
      </div>
    ),
    html: `<div class="Input">
    <label>Password</label>
    <div class="Input-field">
        <i class="fa-solid fa-lock"></i>
        <input type="password" placeholder="Enter your password">
        <button type="button">
            <i class="fa-solid fa-eye"></i>
        </button>
    </div>
    <span class="Input-hint">Use at least 8 characters.</span>
</div>`,
    css: `.Input {
    width: 320px;
}

.Input label {
    display: block;
    margin-bottom: 7px;
    color: #18181b;
    font-size: 12px;
    font-weight: 600;
}

.Input-field {
    height: 46px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 12px;
    box-sizing: border-box;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    background: #fff;
}

.Input-field > i {
    color: #71717a;
}

.Input-field input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    font-size: 13px;
    background: transparent;
}

.Input-field button {
    border: none;
    background: transparent;
    color: #a1a1aa;
    cursor: pointer;
}

.Input-field:focus-within {
    border-color: #18181b;
}

.Input-hint {
    display: block;
    margin-top: 6px;
    color: #a1a1aa;
    font-size: 10px;
}`,
  },
  {
    id: 796,
    name: "Floating Label Input",
    preview: (
      <div className="inp-796">
        <div className="inp-796__field">
          <input id="floating-name" type="text" placeholder=" " />
          <label htmlFor="floating-name">Your name</label>
        </div>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-field">
        <input id="floating-name" type="text" placeholder=" ">
        <label for="floating-name">Your name</label>
    </div>
</div>`,
    css: `.Input {
    width: 320px;
}

.Input-field {
    position: relative;
}

.Input-field input {
    width: 100%;
    height: 52px;
    padding: 18px 13px 5px;
    box-sizing: border-box;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    outline: none;
    background: #fff;
    color: #18181b;
    font-size: 13px;
}

.Input-field label {
    position: absolute;
    left: 13px;
    top: 50%;
    transform: translateY(-50%);
    color: #a1a1aa;
    font-size: 12px;
    pointer-events: none;
    transition: all 0.2s;
    background: #fff;
    padding: 0 3px;
}

.Input-field input:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.08);
}

.Input-field input:focus + label,
.Input-field input:not(:placeholder-shown) + label {
    top: 0;
    font-size: 9px;
    color: #2563eb;
}`,
  },
  {
    id: 797,
    name: "Username Input",
    preview: (
      <div className="inp-797">
        <label>Username</label>
        <div className="inp-797__field">
          <span>@</span>
          <input type="text" placeholder="username" />
          <i className="fa-solid fa-check"></i>
        </div>
        <small>Username is available.</small>
      </div>
    ),
    html: `<div class="Input">
    <label>Username</label>
    <div class="Input-field">
        <span>@</span>
        <input type="text" placeholder="username">
        <i class="fa-solid fa-check"></i>
    </div>
    <small>Username is available.</small>
</div>`,
    css: `.Input {
    width: 320px;
}

.Input > label {
    display: block;
    margin-bottom: 7px;
    color: #18181b;
    font-size: 12px;
    font-weight: 600;
}

.Input-field {
    height: 46px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 12px;
    border: 1px solid #bbf7d0;
    border-radius: 10px;
    background: #f0fdf4;
}

.Input-field span {
    color: #71717a;
    font-size: 13px;
    font-weight: 600;
}

.Input-field input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    font-size: 13px;
}

.Input-field > i {
    color: #16a34a;
}

.Input small {
    display: block;
    margin-top: 6px;
    color: #16a34a;
    font-size: 10px;
}`,
  },
  {
    id: 798,
    name: "Error Input",
    preview: (
      <div className="inp-798">
        <label>Work email</label>
        <div className="inp-798__field">
          <i className="fa-regular fa-envelope"></i>
          <input type="email" value="andre@" readOnly />
          <i className="fa-solid fa-circle-exclamation"></i>
        </div>
        <span>Please enter a valid email address.</span>
      </div>
    ),
    html: `<div class="Input">
    <label>Work email</label>
    <div class="Input-field">
        <i class="fa-regular fa-envelope"></i>
        <input type="email" value="andre@" readonly>
        <i class="fa-solid fa-circle-exclamation"></i>
    </div>
    <span>Please enter a valid email address.</span>
</div>`,
    css: `.Input {
    width: 320px;
}

.Input > label {
    display: block;
    margin-bottom: 7px;
    color: #18181b;
    font-size: 12px;
    font-weight: 600;
}

.Input-field {
    height: 46px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 0 12px;
    border: 1px solid #fca5a5;
    border-radius: 10px;
    background: #fff;
}

.Input-field > i:first-child {
    color: #a1a1aa;
}

.Input-field input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    font-size: 13px;
}

.Input-field > i:last-child {
    color: #dc2626;
}

.Input > span {
    display: block;
    margin-top: 6px;
    color: #dc2626;
    font-size: 10px;
}`,
  },
  {
    id: 799,
    name: "Success Input",
    preview: (
      <div className="inp-799">
        <label>Website URL</label>
        <div className="inp-799__field">
          <i className="fa-solid fa-link"></i>
          <input type="url" value="https://example.com" readOnly />
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <span>Valid URL</span>
      </div>
    ),
    html: `<div class="Input">
    <label>Website URL</label>
    <div class="Input-field">
        <i class="fa-solid fa-link"></i>
        <input type="url" value="https://example.com" readonly>
        <i class="fa-solid fa-circle-check"></i>
    </div>
    <span>Valid URL</span>
</div>`,
    css: `.Input {
    width: 320px;
}

.Input > label {
    display: block;
    margin-bottom: 7px;
    color: #18181b;
    font-size: 12px;
    font-weight: 600;
}

.Input-field {
    height: 46px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 0 12px;
    border: 1px solid #86efac;
    border-radius: 10px;
    background: #f0fdf4;
}

.Input-field > i:first-child {
    color: #65a30d;
}

.Input-field input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    font-size: 13px;
}

.Input-field > i:last-child {
    color: #16a34a;
}

.Input > span {
    display: block;
    margin-top: 6px;
    color: #16a34a;
    font-size: 10px;
}`,
  },
  {
    id: 800,
    name: "Phone Input",
    preview: (
      <div className="inp-800">
        <label>Phone number</label>
        <div className="inp-800__field">
          <button type="button">
            <span>🇳🇱</span>
            <span>+31</span>
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <input type="tel" placeholder="6 12345678" />
        </div>
      </div>
    ),
    html: `<div class="Input">
    <label>Phone number</label>
    <div class="Input-field">
        <button type="button">
            <span>🇳🇱</span>
            <span>+31</span>
            <i class="fa-solid fa-chevron-down"></i>
        </button>
        <input type="tel" placeholder="6 12345678">
    </div>
</div>`,
    css: `.Input {
    width: 320px;
}

.Input > label {
    display: block;
    margin-bottom: 7px;
    color: #18181b;
    font-size: 12px;
    font-weight: 600;
}

.Input-field {
    height: 46px;
    display: flex;
    align-items: center;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    background: #fff;
    overflow: hidden;
}

.Input-field button {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 0 11px;
    border: none;
    border-right: 1px solid #e4e4e7;
    background: #fafafa;
    color: #52525b;
    font-size: 12px;
}

.Input-field button i {
    font-size: 8px;
}

.Input-field input {
    flex: 1;
    min-width: 0;
    height: 100%;
    padding: 0 12px;
    border: none;
    outline: none;
    font-size: 13px;
}`,
  },
  {
    id: 801,
    name: "Amount Input",
    preview: (
      <div className="inp-801">
        <label>Amount</label>
        <div className="inp-801__field">
          <span>€</span>
          <input type="text" value="1,250.00" readOnly />
          <small>EUR</small>
        </div>
      </div>
    ),
    html: `<div class="Input">
    <label>Amount</label>
    <div class="Input-field">
        <span>€</span>
        <input type="text" value="1,250.00" readonly>
        <small>EUR</small>
    </div>
</div>`,
    css: `.Input {
    width: 300px;
}

.Input > label {
    display: block;
    margin-bottom: 7px;
    color: #18181b;
    font-size: 12px;
    font-weight: 600;
}

.Input-field {
    height: 50px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 13px;
    border: 1px solid #d4d4d8;
    border-radius: 11px;
    background: #fff;
}

.Input-field > span {
    color: #71717a;
    font-size: 18px;
    font-weight: 600;
}

.Input-field input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: #18181b;
    font-size: 18px;
    font-weight: 600;
}

.Input-field small {
    color: #a1a1aa;
    font-size: 9px;
    font-weight: 700;
}`,
  },
  {
    id: 802,
    name: "Date Input",
    preview: (
      <div className="inp-802">
        <label>Project deadline</label>
        <div className="inp-802__field">
          <input type="date" defaultValue="2026-09-15" />
          <i className="fa-regular fa-calendar"></i>
        </div>
      </div>
    ),
    html: `<div class="Input">
    <label>Project deadline</label>
    <div class="Input-field">
        <input type="date" value="2026-09-15">
        <i class="fa-regular fa-calendar"></i>
    </div>
</div>`,
    css: `.Input {
    width: 320px;
}

.Input > label {
    display: block;
    margin-bottom: 7px;
    color: #18181b;
    font-size: 12px;
    font-weight: 600;
}

.Input-field {
    height: 46px;
    display: flex;
    align-items: center;
    padding: 0 13px;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    background: #fff;
}

.Input-field input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: #52525b;
    font-size: 13px;
    font-family: inherit;
}

.Input-field > i {
    color: #71717a;
}`,
  },
  {
    id: 803,
    name: "Compact Input Group",
    preview: (
      <div className="inp-803">
        <span>https://</span>
        <input type="text" placeholder="yourwebsite.com" />
        <button type="button">
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
      </div>
    ),
    html: `<div class="Input">
    <span>https://</span>
    <input type="text" placeholder="yourwebsite.com">
    <button type="button">
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </button>
</div>`,
    css: `.Input {
    width: 350px;
    height: 44px;
    display: flex;
    align-items: center;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    background: #fff;
    overflow: hidden;
}

.Input > span {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 11px;
    border-right: 1px solid #e4e4e7;
    background: #fafafa;
    color: #71717a;
    font-size: 11px;
}

.Input input {
    flex: 1;
    min-width: 0;
    height: 100%;
    padding: 0 11px;
    border: none;
    outline: none;
    font-size: 12px;
}

.Input button {
    width: 40px;
    height: 100%;
    border: none;
    border-left: 1px solid #e4e4e7;
    background: #fff;
    color: #52525b;
}`,
  },
  {
    id: 804,
    name: "Search With Filter",
    preview: (
      <div className="inp-804">
        <div className="inp-804__search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="Search users..." />
        </div>
        <button type="button">
          <i className="fa-solid fa-sliders"></i>
          Filters
        </button>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="Search users...">
    </div>
    <button type="button">
        <i class="fa-solid fa-sliders"></i>
        Filters
    </button>
</div>`,
    css: `.Input {
    width: 400px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.Input-search {
    height: 44px;
    display: flex;
    align-items: center;
    gap: 9px;
    flex: 1;
    padding: 0 12px;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    background: #fff;
}

.Input-search i {
    color: #a1a1aa;
}

.Input-search input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 12px;
}

.Input > button {
    height: 44px;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 0 12px;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    background: #fff;
    color: #52525b;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
}`,
  },
  {
    id: 805,
    name: "OTP Input",
    preview: (
      <div className="inp-805">
        <label>Verification code</label>
        <div className="inp-805__boxes">
          <input type="text" maxLength={1} value="4" readOnly />
          <input type="text" maxLength={1} value="8" readOnly />
          <input type="text" maxLength={1} value="2" readOnly />
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
        </div>
        <span>Enter the 6-digit code sent to your email.</span>
      </div>
    ),
    html: `<div class="Input">
    <label>Verification code</label>
    <div class="Input-boxes">
        <input type="text" maxlength="1" value="4">
        <input type="text" maxlength="1" value="8">
        <input type="text" maxlength="1" value="2">
        <input type="text" maxlength="1">
        <input type="text" maxlength="1">
        <input type="text" maxlength="1">
    </div>
    <span>Enter the 6-digit code sent to your email.</span>
</div>`,
    css: `.Input {
    width: 320px;
}

.Input > label {
    display: block;
    margin-bottom: 9px;
    color: #18181b;
    font-size: 12px;
    font-weight: 600;
}

.Input-boxes {
    display: flex;
    gap: 7px;
}

.Input-boxes input {
    width: 42px;
    height: 48px;
    box-sizing: border-box;
    border: 1px solid #d4d4d8;
    border-radius: 9px;
    outline: none;
    text-align: center;
    font-size: 17px;
    font-weight: 700;
}

.Input-boxes input:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.08);
}

.Input > span {
    display: block;
    margin-top: 8px;
    color: #a1a1aa;
    font-size: 9px;
}`,
  },
  {
    id: 806,
    name: "Dark Input",
    preview: (
      <div className="inp-806">
        <label>API key</label>
        <div className="inp-806__field">
          <i className="fa-solid fa-key"></i>
          <input type="text" value="sk_live_••••••••••••" readOnly />
          <button type="button">
            <i className="fa-regular fa-copy"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Input">
    <label>API key</label>
    <div class="Input-field">
        <i class="fa-solid fa-key"></i>
        <input type="text" value="sk_live_••••••••••••" readonly>
        <button type="button">
            <i class="fa-regular fa-copy"></i>
        </button>
    </div>
</div>`,
    css: `.Input {
    width: 350px;
    padding: 18px;
    box-sizing: border-box;
    border-radius: 14px;
    background: #18181b;
    border: 1px solid #27272a;
}

.Input label {
    display: block;
    margin-bottom: 8px;
    color: #f4f4f5;
    font-size: 11px;
    font-weight: 600;
}

.Input-field {
    height: 44px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 0 11px;
    background: #09090b;
    border: 1px solid #3f3f46;
    border-radius: 9px;
}

.Input-field > i {
    color: #71717a;
}

.Input-field input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: #d4d4d8;
    font-family: monospace;
    font-size: 11px;
}

.Input-field button {
    border: none;
    background: transparent;
    color: #a1a1aa;
    cursor: pointer;
}`,
  },
  {
    id: 807,
    name: "Inline Label Input",
    preview: (
      <div className="inp-807">
        <span>Email</span>
        <input type="email" placeholder="name@company.com" />
        <button type="button">
          Continue
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Input">
    <span>Email</span>
    <input type="email" placeholder="name@company.com">
    <button type="button">
        Continue
        <i class="fa-solid fa-arrow-right"></i>
    </button>
</div>`,
    css: `.Input {
    width: 420px;
    height: 48px;
    display: flex;
    align-items: center;
    border: 1px solid #d4d4d8;
    border-radius: 11px;
    background: #fff;
    overflow: hidden;
}

.Input > span {
    padding: 0 12px;
    color: #71717a;
    font-size: 11px;
    font-weight: 600;
}

.Input input {
    flex: 1;
    min-width: 0;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 12px;
}

.Input button {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 0 14px;
    border: none;
    background: #18181b;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
}`,
  },
  {
    id: 808,
    name: "Glass Input",
    preview: (
      <div className="inp-808">
        <label>Search workspace</label>
        <div className="inp-808__field">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Type to search..." />
          <span>⌘K</span>
        </div>
      </div>
    ),
    html: `<div class="Input">
    <label>Search workspace</label>
    <div class="Input-field">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Type to search...">
        <span>⌘K</span>
    </div>
</div>`,
    css: `.Input {
    width: 350px;
    padding: 18px;
    border-radius: 18px;
    background: linear-gradient(135deg, #18181b, #27272a);
    color: #fff;
}

.Input label {
    display: block;
    margin-bottom: 8px;
    color: #e4e4e7;
    font-size: 11px;
    font-weight: 600;
}

.Input-field {
    height: 46px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 0 11px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 11px;
    background: rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(14px);
}

.Input-field > i {
    color: #a1a1aa;
}

.Input-field input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    font-size: 12px;
}

.Input-field input::placeholder {
    color: #71717a;
}

.Input-field > span {
    padding: 3px 6px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.1);
    color: #a1a1aa;
    font-size: 9px;
}`,
  },
  {
    id: 809,
    name: "Select Style Input",
    preview: (
      <div className="inp-809">
        <label>Country</label>
        <div className="inp-809__field">
          <span>Netherlands</span>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    ),
    html: `<div class="Input">
    <label>Country</label>
    <div class="Input-field">
        <span>Netherlands</span>
        <i class="fa-solid fa-chevron-down"></i>
    </div>
</div>`,
    css: `.Input {
    width: 300px;
}

.Input > label {
    display: block;
    margin-bottom: 7px;
    color: #18181b;
    font-size: 12px;
    font-weight: 600;
}

.Input-field {
    height: 46px;
    padding: 0 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    background: #fff;
    color: #3f3f46;
    font-size: 13px;
}

.Input-field i {
    color: #71717a;
    font-size: 10px;
}`,
  },
  {
    id: 810,
    name: "Multi Action Input",
    preview: (
      <div className="inp-810">
        <label>Invite teammate</label>
        <div className="inp-810__field">
          <div className="inp-810__icon">
            <i className="fa-solid fa-user-plus"></i>
          </div>
          <input type="email" placeholder="teammate@company.com" />
          <button type="button">Invite</button>
        </div>
        <div className="inp-810__suggestion">
          <span>Suggested:</span>
          <button type="button">alex@company.com</button>
          <button type="button">sam@company.com</button>
        </div>
      </div>
    ),
    html: `<div class="Input">
    <label>Invite teammate</label>
    <div class="Input-field">
        <div class="Input-icon">
            <i class="fa-solid fa-user-plus"></i>
        </div>
        <input type="email" placeholder="teammate@company.com">
        <button type="button">Invite</button>
    </div>
    <div class="Input-suggestion">
        <span>Suggested:</span>
        <button type="button">alex@company.com</button>
        <button type="button">sam@company.com</button>
    </div>
</div>`,
    css: `.Input {
    width: 390px;
}

.Input > label {
    display: block;
    margin-bottom: 7px;
    color: #18181b;
    font-size: 12px;
    font-weight: 600;
}

.Input-field {
    height: 48px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 0 5px 0 7px;
    box-sizing: border-box;
    border: 1px solid #d4d4d8;
    border-radius: 11px;
    background: #fff;
}

.Input-icon {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #f4f4f5;
    color: #52525b;
}

.Input-field input {
    flex: 1;
    min-width: 0;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 12px;
}

.Input-field > button {
    height: 38px;
    padding: 0 13px;
    border: none;
    border-radius: 8px;
    background: #18181b;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
}

.Input-suggestion {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 8px;
    flex-wrap: wrap;
}

.Input-suggestion span {
    color: #a1a1aa;
    font-size: 9px;
}

.Input-suggestion button {
    padding: 4px 7px;
    border: 1px solid #e4e4e7;
    border-radius: 999px;
    background: #fafafa;
    color: #71717a;
    font-size: 8px;
    cursor: pointer;
}`,
  },

  {
    id: 1275,
    name: "Modern Search Input",
    preview: (
      <div className="ip-1275-wrap">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          className="ip-1275"
          type="text"
          placeholder="Search projects..."
        />
      </div>
    ),
    html: `<div class="Input-wrap">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input class="Input" type="text" placeholder="Search projects...">
</div>`,
    css: `.Input-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 260px;
    padding: 0 14px;
    border: 1px solid #d4d4d8;
    border-radius: 12px;
    background: #ffffff;
}
.Input-wrap i {
    color: #71717a;
}
.Input {
    width: 100%;
    height: 44px;
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
}
.Input::placeholder {
    color: #a1a1aa;
}`,
  },
  {
    id: 1276,
    name: "Dark Search Input",
    preview: (
      <div className="ip-1276-wrap">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          className="ip-1276"
          type="text"
          placeholder="Search anything..."
        />
        <span>⌘ K</span>
      </div>
    ),
    html: `<div class="Input-wrap">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input class="Input" type="text" placeholder="Search anything...">
    <span>⌘ K</span>
</div>`,
    css: `.Input-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 290px;
    height: 46px;
    padding: 0 12px;
    box-sizing: border-box;
    background: #18181b;
    border: 1px solid #3f3f46;
    border-radius: 12px;
}
.Input-wrap i {
    color: #71717a;
}
.Input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: #ffffff;
    font-size: 13px;
}
.Input::placeholder {
    color: #52525b;
}
.Input-wrap span {
    padding: 4px 7px;
    border: 1px solid #3f3f46;
    border-radius: 6px;
    color: #71717a;
    font-size: 10px;
}`,
  },
  {
    id: 1277,
    name: "Floating Label Input",
    preview: (
      <div className="ip-1277-field">
        <input className="ip-1277" type="text" placeholder=" " />
        <label>Full name</label>
      </div>
    ),
    html: `<div class="Input-field">
    <input class="Input" type="text" placeholder=" ">
    <label>Full name</label>
</div>`,
    css: `.Input-field {
    position: relative;
    width: 250px;
}
.Input {
    width: 100%;
    height: 50px;
    padding: 14px 14px 5px;
    box-sizing: border-box;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    outline: none;
    font-size: 14px;
    background: #ffffff;
}
.Input-field label {
    position: absolute;
    left: 13px;
    top: 16px;
    color: #71717a;
    font-size: 13px;
    pointer-events: none;
    transition: .2s ease;
    background: #ffffff;
    padding: 0 4px;
}
.Input:focus {
    border-color: #6366f1;
}
.Input:focus + label,
.Input:not(:placeholder-shown) + label {
    top: -7px;
    color: #6366f1;
    font-size: 11px;
}`,
  },
  {
    id: 1278,
    name: "Email Icon Input",
    preview: (
      <div className="ip-1278-wrap">
        <i className="fa-regular fa-envelope"></i>
        <input className="ip-1278" type="email" placeholder="you@example.com" />
      </div>
    ),
    html: `<div class="Input-wrap">
    <i class="fa-regular fa-envelope"></i>
    <input class="Input" type="email" placeholder="you@example.com">
</div>`,
    css: `.Input-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 255px;
    height: 46px;
    padding: 0 13px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
}
.Input-wrap i {
    color: #64748b;
}
.Input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: 13px;
}
.Input:focus {
    color: #0f172a;
}
.Input::placeholder {
    color: #94a3b8;
}`,
  },
  {
    id: 1279,
    name: "Password Input",
    preview: (
      <div className="ip-1279-wrap">
        <i className="fa-solid fa-lock"></i>
        <input
          className="ip-1279"
          type="password"
          placeholder="Enter password"
        />
        <i className="fa-regular fa-eye"></i>
      </div>
    ),
    html: `<div class="Input-wrap">
    <i class="fa-solid fa-lock"></i>
    <input class="Input" type="password" placeholder="Enter password">
    <i class="fa-regular fa-eye"></i>
</div>`,
    css: `.Input-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 260px;
    height: 48px;
    padding: 0 14px;
    background: #ffffff;
    border: 1px solid #d4d4d8;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,.04);
}
.Input-wrap i {
    color: #71717a;
}
.Input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    font-size: 13px;
}
.Input::placeholder {
    color: #a1a1aa;
}`,
  },
  {
    id: 1280,
    name: "Neon Input",
    preview: (
      <input className="ip-1280" type="text" placeholder="Enter command..." />
    ),
    html: `<input class="Input" type="text" placeholder="Enter command...">`,
    css: `.Input {
    width: 260px;
    height: 46px;
    padding: 0 15px;
    box-sizing: border-box;
    border: 1px solid #22d3ee;
    border-radius: 10px;
    outline: none;
    background: #09090b;
    color: #67e8f9;
    font-family: monospace;
    font-size: 13px;
    box-shadow: 0 0 0 rgba(34,211,238,0);
    transition: .25s ease;
}
.Input::placeholder {
    color: #155e75;
}
.Input:focus {
    box-shadow: 0 0 18px rgba(34,211,238,.25);
}`,
  },
  {
    id: 1281,
    name: "Gradient Border Input",
    preview: (
      <div className="ip-1281-box">
        <input className="ip-1281" type="text" placeholder="Your username" />
      </div>
    ),
    html: `<div class="Input-box">
    <input class="Input" type="text" placeholder="Your username">
</div>`,
    css: `.Input-box {
    width: 260px;
    padding: 2px;
    border-radius: 11px;
    background: linear-gradient(90deg,#06b6d4,#6366f1,#ec4899);
}
.Input {
    width: 100%;
    height: 46px;
    padding: 0 14px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 9px;
    background: #ffffff;
    font-size: 13px;
}
.Input::placeholder {
    color: #a1a1aa;
}`,
  },
  {
    id: 1282,
    name: "Soft Gray Input",
    preview: (
      <input
        className="ip-1282"
        type="text"
        placeholder="Type your message..."
      />
    ),
    html: `<input class="Input" type="text" placeholder="Type your message...">`,
    css: `.Input {
    width: 270px;
    height: 48px;
    padding: 0 16px;
    box-sizing: border-box;
    border: 1px solid transparent;
    border-radius: 14px;
    outline: none;
    background: #f4f4f5;
    color: #18181b;
    font-size: 13px;
    transition: .2s ease;
}
.Input:hover {
    background: #e4e4e7;
}
.Input:focus {
    background: #ffffff;
    border-color: #a1a1aa;
}`,
  },
  {
    id: 1283,
    name: "Underline Input",
    preview: (
      <input className="ip-1283" type="text" placeholder="Project name" />
    ),
    html: `<input class="Input" type="text" placeholder="Project name">`,
    css: `.Input {
    width: 250px;
    height: 44px;
    padding: 0 4px;
    border: none;
    border-bottom: 2px solid #d4d4d8;
    outline: none;
    background: transparent;
    font-size: 14px;
    transition: .2s ease;
}
.Input::placeholder {
    color: #a1a1aa;
}
.Input:focus {
    border-bottom-color: #2563eb;
}`,
  },
  {
    id: 1284,
    name: "Glass Input",
    preview: (
      <div className="ip-1284-wrap">
        <i className="fa-solid fa-user"></i>
        <input className="ip-1284" type="text" placeholder="Username" />
      </div>
    ),
    html: `<div class="Input-wrap">
    <i class="fa-solid fa-user"></i>
    <input class="Input" type="text" placeholder="Username">
</div>`,
    css: `.Input-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 255px;
    height: 48px;
    padding: 0 14px;
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 13px;
    background: rgba(255,255,255,.08);
    backdrop-filter: blur(15px);
}
.Input-wrap i {
    color: rgba(255,255,255,.55);
}
.Input {
    flex: 1;
    border: none;
    outline: none;
    color: #ffffff;
    background: transparent;
    font-size: 13px;
}
.Input::placeholder {
    color: rgba(255,255,255,.4);
}`,
  },
  {
    id: 1285,
    name: "Code Input",
    preview: (
      <input
        className="ip-1285"
        type="text"
        placeholder="npm install package"
      />
    ),
    html: `<input class="Input" type="text" placeholder="npm install package">`,
    css: `.Input {
    width: 280px;
    height: 48px;
    padding: 0 14px;
    box-sizing: border-box;
    border: 1px solid #27272a;
    border-radius: 9px;
    outline: none;
    background: #09090b;
    color: #a7f3d0;
    font-family: "Courier New", monospace;
    font-size: 13px;
    transition: .2s ease;
}
.Input::placeholder {
    color: #52525b;
}
.Input:focus {
    border-color: #22c55e;
    box-shadow: 0 0 12px rgba(34,197,94,.12);
}`,
  },
  {
    id: 1286,
    name: "Search Pill Input",
    preview: (
      <div className="ip-1286-wrap">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input className="ip-1286" type="search" placeholder="Search..." />
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Input-wrap">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input class="Input" type="search" placeholder="Search...">
    <button>
        <i class="fa-solid fa-arrow-right"></i>
    </button>
</div>`,
    css: `.Input-wrap {
    display: flex;
    align-items: center;
    gap: 9px;
    width: 290px;
    height: 48px;
    padding: 0 6px 0 15px;
    box-sizing: border-box;
    border: 1px solid #d4d4d8;
    border-radius: 999px;
    background: #ffffff;
}
.Input-wrap > i {
    color: #71717a;
}
.Input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    font-size: 13px;
}
.Input-wrap button {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background: #18181b;
    color: #ffffff;
    cursor: pointer;
}`,
  },
  {
    id: 1287,
    name: "Success Input",
    preview: (
      <div className="ip-1287-wrap">
        <input
          className="ip-1287"
          type="email"
          value="hello@example.com"
          readOnly
        />
        <i className="fa-solid fa-circle-check"></i>
      </div>
    ),
    html: `<div class="Input-wrap">
    <input class="Input" type="email" value="hello@example.com" readonly>
    <i class="fa-solid fa-circle-check"></i>
</div>`,
    css: `.Input-wrap {
    display: flex;
    align-items: center;
    width: 270px;
    height: 48px;
    padding: 0 14px;
    box-sizing: border-box;
    border: 1px solid #86efac;
    border-radius: 10px;
    background: #f0fdf4;
}
.Input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    color: #166534;
    font-size: 13px;
}
.Input-wrap i {
    color: #22c55e;
}`,
  },
  {
    id: 1288,
    name: "Error Input",
    preview: (
      <div className="ip-1288-field">
        <div className="ip-1288-wrap">
          <i className="fa-solid fa-circle-exclamation"></i>
          <input
            className="ip-1288"
            type="email"
            value="invalid@email"
            readOnly
          />
        </div>
        <span>Enter a valid email address.</span>
      </div>
    ),
    html: `<div class="Input-field">
    <div class="Input-wrap">
        <i class="fa-solid fa-circle-exclamation"></i>
        <input class="Input" type="email" value="invalid@email" readonly>
    </div>
    <span>Enter a valid email address.</span>
</div>`,
    css: `.Input-field {
    width: 270px;
}
.Input-wrap {
    display: flex;
    align-items: center;
    gap: 9px;
    height: 48px;
    padding: 0 14px;
    box-sizing: border-box;
    border: 1px solid #fca5a5;
    border-radius: 10px;
    background: #fef2f2;
}
.Input-wrap i {
    color: #ef4444;
}
.Input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    color: #991b1b;
}
.Input-field > span {
    display: block;
    margin-top: 6px;
    color: #dc2626;
    font-size: 10px;
}`,
  },
  {
    id: 1289,
    name: "Search with Badge",
    preview: (
      <div className="ip-1289-wrap">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input className="ip-1289" type="text" placeholder="Search users..." />
        <span>12 results</span>
      </div>
    ),
    html: `<div class="Input-wrap">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input class="Input" type="text" placeholder="Search users...">
    <span>12 results</span>
</div>`,
    css: `.Input-wrap {
    display: flex;
    align-items: center;
    gap: 9px;
    width: 295px;
    height: 46px;
    padding: 0 12px;
    box-sizing: border-box;
    border: 1px solid #e4e4e7;
    border-radius: 11px;
    background: #ffffff;
}
.Input-wrap > i {
    color: #71717a;
}
.Input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    font-size: 12px;
}
.Input::placeholder {
    color: #a1a1aa;
}
.Input-wrap > span {
    padding: 4px 7px;
    border-radius: 999px;
    background: #f4f4f5;
    color: #71717a;
    font-size: 9px;
}`,
  },
  {
    id: 1290,
    name: "Large Hero Input",
    preview: (
      <input
        className="ip-1290"
        type="text"
        placeholder="What do you want to build?"
      />
    ),
    html: `<input class="Input" type="text" placeholder="What do you want to build?">`,
    css: `.Input {
    width: 320px;
    height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
    outline: none;
    background: #ffffff;
    color: #18181b;
    font-size: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,.06);
    transition: .25s ease;
}
.Input::placeholder {
    color: #a1a1aa;
}
.Input:focus {
    border-color: #6366f1;
    box-shadow: 0 12px 35px rgba(99,102,241,.15);
    transform: translateY(-1px);
}`,
  },
  {
    id: 1291,
    name: "Minimal Icon Input",
    preview: (
      <div className="ip-1291-wrap">
        <i className="fa-solid fa-at"></i>
        <input className="ip-1291" type="text" placeholder="Username" />
      </div>
    ),
    html: `<div class="Input-wrap">
    <i class="fa-solid fa-at"></i>
    <input class="Input" type="text" placeholder="Username">
</div>`,
    css: `.Input-wrap {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 230px;
    padding-bottom: 8px;
    border-bottom: 1px solid #d4d4d8;
}
.Input-wrap i {
    color: #a1a1aa;
}
.Input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 13px;
}
.Input:focus {
    border: none;
}`,
  },
  {
    id: 1292,
    name: "Glass Search Input",
    preview: (
      <div className="ip-1292-wrap">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          className="ip-1292"
          type="text"
          placeholder="Explore the universe..."
        />
      </div>
    ),
    html: `<div class="Input-wrap">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input class="Input" type="text" placeholder="Explore the universe...">
</div>`,
    css: `.Input-wrap {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 290px;
    height: 50px;
    padding: 0 16px;
    box-sizing: border-box;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 14px;
    background: linear-gradient(
        135deg,
        rgba(56,189,248,.12),
        rgba(139,92,246,.12)
    );
    backdrop-filter: blur(18px);
}
.Input-wrap i {
    color: #7dd3fc;
}
.Input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    color: #ffffff;
}
.Input::placeholder {
    color: rgba(255,255,255,.4);
}`,
  },
  {
    id: 1293,
    name: "URL Input",
    preview: (
      <div className="ip-1293-wrap">
        <span>https://</span>
        <input className="ip-1293" type="text" placeholder="yourwebsite.com" />
      </div>
    ),
    html: `<div class="Input-wrap">
    <span>https://</span>
    <input class="Input" type="text" placeholder="yourwebsite.com">
</div>`,
    css: `.Input-wrap {
    display: flex;
    align-items: center;
    width: 280px;
    height: 46px;
    overflow: hidden;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    background: #ffffff;
}
.Input-wrap > span {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 11px;
    border-right: 1px solid #e4e4e7;
    background: #f4f4f5;
    color: #71717a;
    font-size: 11px;
}
.Input {
    flex: 1;
    min-width: 0;
    height: 100%;
    padding: 0 12px;
    border: none;
    outline: none;
    font-size: 12px;
}`,
  },
  {
    id: 1294,
    name: "Number Input",
    preview: (
      <div className="ip-1294-wrap">
        <button>-</button>
        <input className="ip-1294" type="number" value="2" readOnly />
        <button>+</button>
      </div>
    ),
    html: `<div class="Input-wrap">
    <button>-</button>
    <input class="Input" type="number" value="2" readonly>
    <button>+</button>
</div>`,
    css: `.Input-wrap {
    display: flex;
    align-items: center;
    width: 145px;
    height: 42px;
    overflow: hidden;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    background: #ffffff;
}
.Input-wrap button {
    width: 40px;
    height: 100%;
    border: none;
    background: #f4f4f5;
    color: #52525b;
    cursor: pointer;
    font-size: 15px;
}
.Input-wrap button:hover {
    background: #e4e4e7;
}
.Input {
    flex: 1;
    min-width: 0;
    height: 100%;
    border: none;
    outline: none;
    text-align: center;
    font-size: 13px;
}`,
  },
  {
    id: 1295,
    name: "Token Input",
    preview: (
      <div className="ip-1295-wrap">
        <span>react</span>
        <span>typescript</span>
        <input className="ip-1295" type="text" placeholder="Add tag..." />
      </div>
    ),
    html: `<div class="Input-wrap">
    <span>react</span>
    <span>typescript</span>
    <input class="Input" type="text" placeholder="Add tag...">
</div>`,
    css: `.Input-wrap {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    width: 300px;
    min-height: 46px;
    padding: 7px 10px;
    box-sizing: border-box;
    border: 1px solid #d4d4d8;
    border-radius: 11px;
    background: #ffffff;
}
.Input-wrap > span {
    padding: 5px 8px;
    border-radius: 7px;
    background: #ede9fe;
    color: #6d28d9;
    font-size: 10px;
}
.Input {
    flex: 1;
    min-width: 80px;
    border: none;
    outline: none;
    background: transparent;
    font-size: 11px;
}
.Input::placeholder {
    color: #a1a1aa;
}`,
  },
  {
    id: 1296,
    name: "OTP Input",
    preview: (
      <div className="ip-1296-wrap">
        <input className="ip-1296" value="4" readOnly />
        <input className="ip-1296" value="8" readOnly />
        <input className="ip-1296" value="2" readOnly />
        <input className="ip-1296" value="1" readOnly />
      </div>
    ),
    html: `<div class="Input-wrap">
    <input class="Input" value="4" readonly>
    <input class="Input" value="8" readonly>
    <input class="Input" value="2" readonly>
    <input class="Input" value="1" readonly>
</div>`,
    css: `.Input-wrap {
    display: flex;
    gap: 8px;
}
.Input {
    width: 42px;
    height: 48px;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    outline: none;
    background: #ffffff;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    color: #18181b;
    box-sizing: border-box;
    transition: .2s ease;
}
.Input:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99,102,241,.12);
}`,
  },
  {
    id: 1297,
    name: "Command Input",
    preview: (
      <div className="ip-1297-wrap">
        <span>$</span>
        <input className="ip-1297" type="text" placeholder="Enter command" />
        <i className="fa-solid fa-terminal"></i>
      </div>
    ),
    html: `<div class="Input-wrap">
    <span>$</span>
    <input class="Input" type="text" placeholder="Enter command">
    <i class="fa-solid fa-terminal"></i>
</div>`,
    css: `.Input-wrap {
    display: flex;
    align-items: center;
    gap: 9px;
    width: 280px;
    height: 48px;
    padding: 0 14px;
    box-sizing: border-box;
    border: 1px solid #27272a;
    border-radius: 9px;
    background: #09090b;
    color: #22c55e;
}
.Input-wrap > span {
    font-family: monospace;
    font-size: 15px;
}
.Input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: #a7f3d0;
    font-family: monospace;
    font-size: 12px;
}
.Input::placeholder {
    color: #52525b;
}
.Input-wrap i {
    color: #52525b;
}`,
  },
  {
    id: 1298,
    name: "Search Gradient Input",
    preview: (
      <div className="ip-1298-wrap">
        <i className="fa-solid fa-sparkles"></i>
        <input className="ip-1298" type="text" placeholder="Ask anything..." />
      </div>
    ),
    html: `<div class="Input-wrap">
    <i class="fa-solid fa-sparkles"></i>
    <input class="Input" type="text" placeholder="Ask anything...">
</div>`,
    css: `.Input-wrap {
    display: flex;
    align-items: center;
    gap: 11px;
    width: 290px;
    height: 50px;
    padding: 0 15px;
    border: 1px solid transparent;
    border-radius: 14px;
    background:
        linear-gradient(#ffffff,#ffffff) padding-box,
        linear-gradient(90deg,#f97316,#ec4899,#8b5cf6,#06b6d4) border-box;
    box-shadow: 0 8px 25px rgba(99,102,241,.08);
}
.Input-wrap i {
    background: linear-gradient(90deg,#f97316,#ec4899,#8b5cf6);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
.Input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    font-size: 13px;
}
.Input::placeholder {
    color: #a1a1aa;
}`,
  },
  {
    id: 1299,
    name: "Futuristic Input",
    preview: (
      <div className="ip-1299-wrap">
        <i className="fa-solid fa-circle-nodes"></i>
        <input
          className="ip-1299"
          type="text"
          placeholder="Initialize connection..."
        />
        <span></span>
      </div>
    ),
    html: `<div class="Input-wrap">
    <i class="fa-solid fa-circle-nodes"></i>
    <input class="Input" type="text" placeholder="Initialize connection...">
    <span></span>
</div>`,
    css: `.Input-wrap {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 300px;
    height: 50px;
    padding: 0 15px;
    border: 1px solid #334155;
    border-radius: 10px;
    background: linear-gradient(180deg,#0f172a,#020617);
    box-shadow: inset 0 0 20px rgba(56,189,248,.04);
}
.Input-wrap > i {
    color: #38bdf8;
}
.Input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    color: #e0f2fe;
    font-size: 12px;
}
.Input::placeholder {
    color: #475569;
}
.Input-wrap > span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 10px #22c55e;
    animation: futuristic-blink 1.2s infinite;
}
@keyframes futuristic-blink {
    50% {
        opacity: .25;
    }
}`,
  },
  {
    id: 1300,
    name: "Rainbow AI Input",
    preview: (
      <div className="ip-1300-wrap">
        <div className="ip-1300-icon">
          <i className="fa-solid fa-wand-magic-sparkles"></i>
        </div>
        <input
          className="ip-1300"
          type="text"
          placeholder="Describe what you want to create..."
        />
        <button>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    ),
    html: `<div class="Input-wrap">
    <div class="Input-icon">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
    </div>
    <input class="Input" type="text" placeholder="Describe what you want to create...">
    <button>
        <i class="fa-solid fa-arrow-up"></i>
    </button>
</div>`,
    css: `.Input-wrap {
    position: relative;
    display: flex;
    align-items: center;
    gap: 11px;
    width: 340px;
    height: 58px;
    padding: 0 7px 0 9px;
    box-sizing: border-box;
    border: 1px solid transparent;
    border-radius: 17px;
    background:
        linear-gradient(#18181b,#18181b) padding-box,
        linear-gradient(
            90deg,
            #ef4444,
            #f97316,
            #eab308,
            #22c55e,
            #06b6d4,
            #6366f1,
            #ec4899
        ) border-box;
    background-size: 100% 100%, 300% 100%;
    animation: rainbow-input 5s linear infinite;
}
.Input-icon {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: linear-gradient(135deg,#f97316,#ec4899,#8b5cf6);
    color: #ffffff;
    flex-shrink: 0;
}
.Input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: #ffffff;
    font-size: 13px;
}
.Input::placeholder {
    color: #71717a;
}
.Input-wrap button {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 12px;
    background: #ffffff;
    color: #18181b;
    cursor: pointer;
}
@keyframes rainbow-input {
    to {
        background-position: 100% 0;
    }
}`,
  },
  {
    id: 1301,
    name: "Legendary AI Prompt",
    preview: (
      <div className="ip-1301">
        <div className="ip-1301__top">
          <i className="fa-solid fa-wand-magic-sparkles"></i>
          <span>AI ASSISTANT</span>
        </div>
        <textarea placeholder="Describe what you want to build..." />
        <div className="ip-1301__bottom">
          <button>
            <i className="fa-solid fa-paperclip"></i>
          </button>
          <span>Press Enter to send</span>
          <button className="ip-1301__send">
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-top">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
        <span>AI ASSISTANT</span>
    </div>
    <textarea placeholder="Describe what you want to build..."></textarea>
    <div class="Input-bottom">
        <button>
            <i class="fa-solid fa-paperclip"></i>
        </button>
        <span>Press Enter to send</span>
        <button class="Input-send">
            <i class="fa-solid fa-arrow-up"></i>
        </button>
    </div>
</div>`,
    css: `.Input {
    width: 360px;
    padding: 16px;
    border: 1px solid #27272a;
    border-radius: 18px;
    background: #09090b;
    color: #ffffff;
    box-shadow: 0 20px 50px rgba(0,0,0,.25);
}
.Input-top {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #c4b5fd;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
}
.Input textarea {
    width: 100%;
    min-height: 80px;
    margin-top: 14px;
    padding: 0;
    border: none;
    outline: none;
    resize: none;
    background: transparent;
    color: #ffffff;
    font-family: inherit;
    font-size: 14px;
}
.Input textarea::placeholder {
    color: #52525b;
}
.Input-bottom {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 12px;
}
.Input-bottom span {
    flex: 1;
    color: #52525b;
    font-size: 9px;
}
.Input-bottom button {
    width: 34px;
    height: 34px;
    border: 1px solid #27272a;
    border-radius: 9px;
    background: #18181b;
    color: #71717a;
}
.Input-bottom .Input-send {
    border: none;
    background: linear-gradient(135deg,#8b5cf6,#ec4899);
    color: #ffffff;
}`,
  },
  {
    id: 1302,
    name: "Legendary Command Palette",
    preview: (
      <div className="ip-1302">
        <div className="ip-1302__input">
          <i className="fa-solid fa-terminal"></i>
          <input type="text" placeholder="Type a command..." />
          <kbd>⌘ K</kbd>
        </div>
        <div className="ip-1302__results">
          <div>
            <i className="fa-solid fa-code"></i>
            <span>Open command palette</span>
            <kbd>↵</kbd>
          </div>
          <div>
            <i className="fa-solid fa-folder"></i>
            <span>Open project</span>
            <kbd>⌘ P</kbd>
          </div>
          <div>
            <i className="fa-solid fa-gear"></i>
            <span>Settings</span>
            <kbd>⌘ ,</kbd>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-input">
        <i class="fa-solid fa-terminal"></i>
        <input type="text" placeholder="Type a command...">
        <kbd>⌘ K</kbd>
    </div>
    <div class="Input-results">
        <div>
            <i class="fa-solid fa-code"></i>
            <span>Open command palette</span>
            <kbd>↵</kbd>
        </div>
        <div>
            <i class="fa-solid fa-folder"></i>
            <span>Open project</span>
            <kbd>⌘ P</kbd>
        </div>
        <div>
            <i class="fa-solid fa-gear"></i>
            <span>Settings</span>
            <kbd>⌘ ,</kbd>
        </div>
    </div>
</div>`,
    css: `.Input {
    width: 330px;
    overflow: hidden;
    border: 1px solid #3f3f46;
    border-radius: 15px;
    background: #18181b;
    box-shadow: 0 20px 50px rgba(0,0,0,.25);
}
.Input-input {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 14px;
    border-bottom: 1px solid #27272a;
}
.Input-input > i {
    color: #8b5cf6;
}
.Input-input input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: #ffffff;
    font-size: 12px;
}
.Input-input input::placeholder {
    color: #71717a;
}
.Input kbd {
    padding: 3px 6px;
    border: 1px solid #3f3f46;
    border-radius: 5px;
    background: #27272a;
    color: #a1a1aa;
    font-size: 9px;
}
.Input-results {
    padding: 7px;
}
.Input-results > div {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px;
    border-radius: 8px;
    color: #d4d4d8;
}
.Input-results > div:first-child {
    background: #27272a;
}
.Input-results > div > i {
    width: 16px;
    color: #71717a;
}
.Input-results span {
    flex: 1;
    font-size: 11px;
}`,
  },
  {
    id: 1303,
    name: "Legendary Cyber Search",
    preview: (
      <div className="ip-1303">
        <div className="ip-1303__scan"></div>
        <i className="fa-solid fa-crosshairs"></i>
        <input type="text" placeholder="Scan target..." />
        <span>ONLINE</span>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-scan"></div>
    <i class="fa-solid fa-crosshairs"></i>
    <input type="text" placeholder="Scan target...">
    <span>ONLINE</span>
</div>`,
    css: `.Input {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 300px;
    height: 48px;
    padding: 0 13px;
    border: 1px solid rgba(34,197,94,.35);
    border-radius: 8px;
    background: #020b05;
    color: #22c55e;
    box-shadow: inset 0 0 25px rgba(34,197,94,.05);
}
.Input-scan {
    position: absolute;
    inset: 0;
    width: 35%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(34,197,94,.12),
        transparent
    );
    animation: cyber-scan 1.8s linear infinite;
}
.Input > i {
    position: relative;
    color: #22c55e;
}
.Input input {
    position: relative;
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: #86efac;
    font-family: monospace;
    font-size: 12px;
}
.Input input::placeholder {
    color: #166534;
}
.Input > span {
    position: relative;
    padding: 4px 6px;
    border: 1px solid #166534;
    border-radius: 4px;
    font-family: monospace;
    font-size: 8px;
}
@keyframes cyber-scan {
    from {
        transform: translateX(-120%);
    }
    to {
        transform: translateX(320%);
    }
}`,
  },
  {
    id: 1304,
    name: "Legendary Glass Search",
    preview: (
      <div className="ip-1304">
        <div className="ip-1304__icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <input type="text" placeholder="Search the collection..." />
        <button>
          <i className="fa-solid fa-sliders"></i>
        </button>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-icon">
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <input type="text" placeholder="Search the collection...">
    <button>
        <i class="fa-solid fa-sliders"></i>
    </button>
</div>`,
    css: `.Input {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 320px;
    height: 54px;
    padding: 0 8px;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 17px;
    background: rgba(255,255,255,.08);
    backdrop-filter: blur(20px);
    box-shadow: 0 15px 40px rgba(0,0,0,.12);
}
.Input-icon {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: rgba(255,255,255,.1);
    color: #93c5fd;
}
.Input input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: #ffffff;
    font-size: 12px;
}
.Input input::placeholder {
    color: rgba(255,255,255,.4);
}
.Input button {
    width: 38px;
    height: 38px;
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 11px;
    background: rgba(255,255,255,.08);
    color: #d4d4d8;
}`,
  },
  {
    id: 1305,
    name: "Legendary Rainbow Input",
    preview: (
      <div className="ip-1305">
        <div className="ip-1305__border"></div>
        <div className="ip-1305__content">
          <i className="fa-solid fa-sparkles"></i>
          <input type="text" placeholder="Create something legendary..." />
          <button>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-border"></div>
    <div class="Input-content">
        <i class="fa-solid fa-sparkles"></i>
        <input type="text" placeholder="Create something legendary...">
        <button>
            <i class="fa-solid fa-arrow-right"></i>
        </button>
    </div>
</div>`,
    css: `.Input {
    position: relative;
    width: 340px;
    height: 58px;
    padding: 2px;
    overflow: hidden;
    border-radius: 17px;
}
.Input-border {
    position: absolute;
    inset: -150%;
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
    animation: rainbow-border 4s linear infinite;
}
.Input-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 7px 0 14px;
    border-radius: 15px;
    background: #18181b;
}
.Input-content > i {
    color: #f0abfc;
}
.Input-content input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: #ffffff;
    font-size: 12px;
}
.Input-content input::placeholder {
    color: #71717a;
}
.Input-content button {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 12px;
    background: #ffffff;
    color: #18181b;
}
@keyframes rainbow-border {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1306,
    name: "Legendary Multi Tag Input",
    preview: (
      <div className="ip-1306">
        <span>React</span>
        <span>TypeScript</span>
        <span>UI</span>
        <input type="text" placeholder="Add technology..." />
        <button>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    ),
    html: `<div class="Input">
    <span>React</span>
    <span>TypeScript</span>
    <span>UI</span>
    <input type="text" placeholder="Add technology...">
    <button>
        <i class="fa-solid fa-plus"></i>
    </button>
</div>`,
    css: `.Input {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    width: 340px;
    min-height: 54px;
    padding: 7px;
    box-sizing: border-box;
    border: 1px solid #d4d4d8;
    border-radius: 14px;
    background: #ffffff;
}
.Input > span {
    padding: 6px 9px;
    border-radius: 8px;
    background: #ede9fe;
    color: #6d28d9;
    font-size: 10px;
    font-weight: 600;
}
.Input input {
    flex: 1;
    min-width: 90px;
    height: 32px;
    border: none;
    outline: none;
    background: transparent;
    font-size: 11px;
}
.Input button {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 9px;
    background: #18181b;
    color: #ffffff;
}`,
  },
  {
    id: 1307,
    name: "Legendary Terminal Input",
    preview: (
      <div className="ip-1307">
        <div className="ip-1307__header">
          <span></span>
          <span></span>
          <span></span>
          <strong>terminal</strong>
        </div>
        <div className="ip-1307__body">
          <b>root@system:~$</b>
          <input type="text" placeholder="enter command" />
          <i className="fa-solid fa-caret-right"></i>
        </div>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-header">
        <span></span>
        <span></span>
        <span></span>
        <strong>terminal</strong>
    </div>
    <div class="Input-body">
        <b>root@system:~$</b>
        <input type="text" placeholder="enter command">
        <i class="fa-solid fa-caret-right"></i>
    </div>
</div>`,
    css: `.Input {
    width: 350px;
    overflow: hidden;
    border: 1px solid #27272a;
    border-radius: 12px;
    background: #050505;
    color: #22c55e;
    font-family: monospace;
}
.Input-header {
    height: 30px;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 10px;
    border-bottom: 1px solid #27272a;
}
.Input-header > span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #3f3f46;
}
.Input-header strong {
    margin-left: 7px;
    color: #52525b;
    font-size: 8px;
    font-weight: 400;
}
.Input-body {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 14px;
}
.Input-body b {
    font-size: 10px;
    white-space: nowrap;
}
.Input-body input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: #86efac;
    font-family: monospace;
    font-size: 11px;
}
.Input-body input::placeholder {
    color: #166534;
}
.Input-body i {
    color: #4ade80;
}`,
  },
  {
    id: 1308,
    name: "Legendary OTP Input",
    preview: (
      <div className="ip-1308">
        <div className="ip-1308__box active">4</div>
        <div className="ip-1308__box">8</div>
        <div className="ip-1308__box">2</div>
        <div className="ip-1308__box">1</div>
        <div className="ip-1308__box"></div>
        <div className="ip-1308__box"></div>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-box active">4</div>
    <div class="Input-box">8</div>
    <div class="Input-box">2</div>
    <div class="Input-box">1</div>
    <div class="Input-box"></div>
    <div class="Input-box"></div>
</div>`,
    css: `.Input {
    display: flex;
    gap: 7px;
}
.Input-box {
    width: 41px;
    height: 50px;
    display: grid;
    place-items: center;
    border: 1px solid #d4d4d8;
    border-radius: 11px;
    background: #ffffff;
    color: #18181b;
    font-size: 18px;
    font-weight: 700;
    transition: .2s ease;
}
.Input-box.active {
    border-color: #7c3aed;
    box-shadow: 0 0 0 4px rgba(124,58,237,.12);
    color: #7c3aed;
}`,
  },
  {
    id: 1309,
    name: "Legendary Search Command Input",
    preview: (
      <div className="ip-1309">
        <div className="ip-1309__main">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search components..." />
          <kbd>/</kbd>
        </div>
        <div className="ip-1309__filters">
          <span>
            <i className="fa-solid fa-layer-group"></i> Components
          </span>
          <span>
            <i className="fa-solid fa-code"></i> Code
          </span>
          <span>
            <i className="fa-solid fa-palette"></i> Design
          </span>
        </div>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-main">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search components...">
        <kbd>/</kbd>
    </div>
    <div class="Input-filters">
        <span><i class="fa-solid fa-layer-group"></i> Components</span>
        <span><i class="fa-solid fa-code"></i> Code</span>
        <span><i class="fa-solid fa-palette"></i> Design</span>
    </div>
</div>`,
    css: `.Input {
    width: 350px;
    padding: 7px;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 0 15px 40px rgba(0,0,0,.07);
}
.Input-main {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px;
}
.Input-main > i {
    color: #71717a;
}
.Input-main input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 12px;
}
.Input-main input::placeholder {
    color: #a1a1aa;
}
.Input-main kbd {
    padding: 3px 7px;
    border: 1px solid #d4d4d8;
    border-radius: 6px;
    background: #f4f4f5;
    color: #71717a;
}
.Input-filters {
    display: flex;
    gap: 5px;
    padding-top: 6px;
    border-top: 1px solid #f4f4f5;
}
.Input-filters span {
    padding: 5px 8px;
    border-radius: 7px;
    background: #f4f4f5;
    color: #52525b;
    font-size: 9px;
}
.Input-filters i {
    margin-right: 4px;
}`,
  },
  {
    id: 1310,
    name: "Legendary Glass AI Input",
    preview: (
      <div className="ip-1310">
        <div className="ip-1310__glow"></div>
        <div className="ip-1310__content">
          <div className="ip-1310__avatar">
            <i className="fa-solid fa-brain"></i>
          </div>
          <div className="ip-1310__field">
            <span>ASK AI</span>
            <input type="text" placeholder="What should we build today?" />
          </div>
          <button>
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-glow"></div>
    <div class="Input-content">
        <div class="Input-avatar">
            <i class="fa-solid fa-brain"></i>
        </div>
        <div class="Input-field">
            <span>ASK AI</span>
            <input type="text" placeholder="What should we build today?">
        </div>
        <button>
            <i class="fa-solid fa-arrow-up"></i>
        </button>
    </div>
</div>`,
    css: `.Input {
    position: relative;
    overflow: hidden;
    width: 370px;
    padding: 2px;
    border-radius: 20px;
    background: linear-gradient(135deg,#38bdf8,#8b5cf6,#ec4899);
}
.Input-glow {
    position: absolute;
    width: 140px;
    height: 140px;
    right: -40px;
    top: -60px;
    border-radius: 50%;
    background: #ec4899;
    filter: blur(50px);
    opacity: .45;
}
.Input-content {
    position: relative;
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 9px;
    border-radius: 18px;
    background: #09090b;
}
.Input-avatar {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 13px;
    background: linear-gradient(135deg,#06b6d4,#8b5cf6);
    color: #ffffff;
}
.Input-field {
    flex: 1;
    min-width: 0;
}
.Input-field > span {
    display: block;
    margin-bottom: 3px;
    color: #a78bfa;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 1px;
}
.Input-field input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: #ffffff;
    font-size: 12px;
}
.Input-field input::placeholder {
    color: #71717a;
}
.Input-content button {
    width: 42px;
    height: 42px;
    border: none;
    border-radius: 13px;
    background: #ffffff;
    color: #18181b;
}`,
  },

  {
    id: 1311,
    name: "Holographic Search",
    preview: (
      <div className="ip-1311">
        <div className="ip-1311__holo"></div>
        <div className="ip-1311__content">
          <div className="ip-1311__icon">
            <i className="fa-solid fa-satellite-dish"></i>
          </div>
          <div className="ip-1311__field">
            <span>HOLOGRAPHIC SEARCH</span>
            <input type="text" placeholder="Search the network..." />
          </div>
          <button>
            <i className="fa-solid fa-arrow-up-right"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-holo"></div>
    <div class="Input-content">
        <div class="Input-icon">
            <i class="fa-solid fa-satellite-dish"></i>
        </div>
        <div class="Input-field">
            <span>HOLOGRAPHIC SEARCH</span>
            <input type="text" placeholder="Search the network...">
        </div>
        <button>
            <i class="fa-solid fa-arrow-up-right"></i>
        </button>
    </div>
</div>`,
    css: `.Input {
    position: relative;
    overflow: hidden;
    width: 360px;
    padding: 2px;
    border-radius: 19px;
    background: linear-gradient(135deg,#22d3ee,#6366f1,#ec4899);
}
.Input-holo {
    position: absolute;
    inset: -100%;
    background: repeating-linear-gradient(
        135deg,
        rgba(255,255,255,.2) 0 1px,
        transparent 1px 7px
    );
    opacity: .15;
    animation: holo 6s linear infinite;
}
.Input-content {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px;
    border-radius: 17px;
    background: #09090b;
}
.Input-icon {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border-radius: 13px;
    background: linear-gradient(135deg,#06b6d4,#6366f1);
    color: #ffffff;
}
.Input-field {
    flex: 1;
}
.Input-field > span {
    display: block;
    margin-bottom: 3px;
    color: #67e8f9;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 1.3px;
}
.Input-field input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: #ffffff;
    font-size: 12px;
}
.Input-field input::placeholder {
    color: #52525b;
}
.Input-content button {
    width: 42px;
    height: 42px;
    border: 1px solid #3f3f46;
    border-radius: 12px;
    background: #18181b;
    color: #67e8f9;
}
@keyframes holo {
    to {
        transform: translate(30px,30px);
    }
}`,
  },
  {
    id: 1312,
    name: "AI Command Center",
    preview: (
      <div className="ip-1312">
        <div className="ip-1312__header">
          <div>
            <i className="fa-solid fa-brain"></i>
            <span>COMMAND CENTER</span>
          </div>
          <span>ONLINE</span>
        </div>
        <div className="ip-1312__input">
          <input type="text" placeholder="Ask the system anything..." />
          <button>
            <i className="fa-solid fa-microphone"></i>
          </button>
          <button className="ip-1312__send">
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
        <div className="ip-1312__suggestions">
          <span>Analyze data</span>
          <span>Generate UI</span>
          <span>Write code</span>
        </div>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-header">
        <div>
            <i class="fa-solid fa-brain"></i>
            <span>COMMAND CENTER</span>
        </div>
        <span>ONLINE</span>
    </div>
    <div class="Input-input">
        <input type="text" placeholder="Ask the system anything...">
        <button>
            <i class="fa-solid fa-microphone"></i>
        </button>
        <button class="Input-send">
            <i class="fa-solid fa-arrow-up"></i>
        </button>
    </div>
    <div class="Input-suggestions">
        <span>Analyze data</span>
        <span>Generate UI</span>
        <span>Write code</span>
    </div>
</div>`,
    css: `.Input {
    width: 380px;
    padding: 15px;
    border: 1px solid #27272a;
    border-radius: 20px;
    background: #09090b;
    color: #ffffff;
    box-shadow: 0 25px 70px rgba(0,0,0,.3);
}
.Input-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 13px;
}
.Input-header > div {
    display: flex;
    align-items: center;
    gap: 8px;
}
.Input-header i {
    color: #a78bfa;
}
.Input-header span {
    color: #a1a1aa;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 1px;
}
.Input-header > span {
    color: #4ade80;
}
.Input-input {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 6px;
    border: 1px solid #3f3f46;
    border-radius: 13px;
    background: #18181b;
}
.Input-input input {
    flex: 1;
    min-width: 0;
    height: 38px;
    border: none;
    outline: none;
    background: transparent;
    color: #ffffff;
    padding: 0 8px;
}
.Input-input input::placeholder {
    color: #52525b;
}
.Input-input button {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 10px;
    background: #27272a;
    color: #a1a1aa;
}
.Input-input .Input-send {
    background: linear-gradient(135deg,#8b5cf6,#ec4899);
    color: #ffffff;
}
.Input-suggestions {
    display: flex;
    gap: 6px;
    margin-top: 10px;
}
.Input-suggestions span {
    padding: 6px 9px;
    border: 1px solid #27272a;
    border-radius: 7px;
    color: #71717a;
    font-size: 9px;
}`,
  },
  {
    id: 1313,
    name: "Energy Core Input",
    preview: (
      <div className="ip-1313">
        <div className="ip-1313__core">
          <i className="fa-solid fa-bolt"></i>
        </div>
        <input type="text" placeholder="Channel your idea..." />
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-core">
        <i class="fa-solid fa-bolt"></i>
    </div>
    <input type="text" placeholder="Channel your idea...">
    <button>
        <i class="fa-solid fa-arrow-right"></i>
    </button>
</div>`,
    css: `.Input {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    width: 350px;
    height: 60px;
    padding: 0 8px;
    box-sizing: border-box;
    border: 1px solid #7f1d1d;
    border-radius: 18px;
    background: #0c0707;
    box-shadow:
        0 0 25px rgba(239,68,68,.1),
        inset 0 0 25px rgba(249,115,22,.05);
}
.Input::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(90deg,transparent,rgba(249,115,22,.1),transparent);
    animation: energy-sweep 2s linear infinite;
}
.Input-core {
    position: relative;
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: linear-gradient(135deg,#ef4444,#f97316,#facc15);
    color: #ffffff;
    box-shadow: 0 0 18px rgba(249,115,22,.5);
}
.Input input {
    position: relative;
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: #ffffff;
    font-size: 13px;
}
.Input input::placeholder {
    color: #7f1d1d;
}
.Input button {
    position: relative;
    width: 42px;
    height: 42px;
    border: none;
    border-radius: 13px;
    background: #ffffff;
    color: #7f1d1d;
}
@keyframes energy-sweep {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}`,
  },
  {
    id: 1314,
    name: "Cyberpunk Hacker Input",
    preview: (
      <div className="ip-1314">
        <div className="ip-1314__top">
          <span>ACCESS TERMINAL</span>
          <i className="fa-solid fa-lock-open"></i>
        </div>
        <div className="ip-1314__field">
          <span>&gt;_</span>
          <input type="text" placeholder="enter access code" />
          <i className="fa-solid fa-terminal"></i>
        </div>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-top">
        <span>ACCESS TERMINAL</span>
        <i class="fa-solid fa-lock-open"></i>
    </div>
    <div class="Input-field">
        <span>&gt;_</span>
        <input type="text" placeholder="enter access code">
        <i class="fa-solid fa-terminal"></i>
    </div>
</div>`,
    css: `.Input {
    width: 340px;
    padding: 15px;
    border: 1px solid #164e63;
    background: #020617;
    color: #22d3ee;
    box-shadow: 0 0 30px rgba(34,211,238,.08);
    font-family: monospace;
}
.Input-top {
    display: flex;
    justify-content: space-between;
    padding-bottom: 9px;
    border-bottom: 1px solid #164e63;
    font-size: 8px;
    letter-spacing: 1.5px;
}
.Input-top i {
    color: #22c55e;
}
.Input-field {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 14px;
}
.Input-field > span {
    color: #22c55e;
}
.Input-field input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: #a5f3fc;
    font-family: monospace;
    font-size: 12px;
}
.Input-field input::placeholder {
    color: #155e75;
}
.Input-field > i {
    color: #0891b2;
}`,
  },
  {
    id: 1315,
    name: "Aurora Glass Input",
    preview: (
      <div className="ip-1315">
        <div className="ip-1315__aurora"></div>
        <div className="ip-1315__content">
          <i className="fa-solid fa-moon"></i>
          <input type="text" placeholder="Search beyond the ordinary..." />
          <button>
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-aurora"></div>
    <div class="Input-content">
        <i class="fa-solid fa-moon"></i>
        <input type="text" placeholder="Search beyond the ordinary...">
        <button>
            <i class="fa-solid fa-arrow-up"></i>
        </button>
    </div>
</div>`,
    css: `.Input {
    position: relative;
    overflow: hidden;
    width: 360px;
    padding: 2px;
    border-radius: 20px;
    background: rgba(255,255,255,.12);
    border: 1px solid rgba(255,255,255,.2);
    backdrop-filter: blur(20px);
}
.Input-aurora {
    position: absolute;
    width: 220px;
    height: 120px;
    left: 50%;
    top: -60px;
    transform: translateX(-50%);
    border-radius: 50%;
    background: linear-gradient(90deg,#22d3ee,#8b5cf6,#ec4899);
    filter: blur(35px);
    opacity: .6;
    animation: aurora-move 4s ease-in-out infinite alternate;
}
.Input-content {
    position: relative;
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 10px 9px 10px 15px;
    border-radius: 18px;
    background: rgba(9,9,11,.8);
}
.Input-content > i {
    color: #c4b5fd;
}
.Input-content input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    color: #ffffff;
}
.Input-content input::placeholder {
    color: #71717a;
}
.Input-content button {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 12px;
    background: #ffffff;
    color: #18181b;
}
@keyframes aurora-move {
    from {
        transform: translateX(-65%);
    }
    to {
        transform: translateX(-35%);
    }
}`,
  },
  {
    id: 1316,
    name: "Infinity Search Input",
    preview: (
      <div className="ip-1316">
        <div className="ip-1316__icon">
          <i className="fa-solid fa-infinity"></i>
        </div>
        <input type="text" placeholder="Search without limits..." />
        <span>∞</span>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-icon">
        <i class="fa-solid fa-infinity"></i>
    </div>
    <input type="text" placeholder="Search without limits...">
    <span>∞</span>
</div>`,
    css: `.Input {
    display: flex;
    align-items: center;
    gap: 11px;
    width: 330px;
    height: 56px;
    padding: 0 15px 0 8px;
    border: 1px solid transparent;
    border-radius: 18px;
    background:
        linear-gradient(#ffffff,#ffffff) padding-box,
        linear-gradient(90deg,#6366f1,#ec4899,#06b6d4,#6366f1) border-box;
    background-size: 100% 100%,300% 100%;
    animation: infinity-border 4s linear infinite;
    box-shadow: 0 12px 35px rgba(99,102,241,.08);
}
.Input-icon {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 13px;
    background: linear-gradient(135deg,#6366f1,#ec4899);
    color: #ffffff;
}
.Input input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    font-size: 13px;
}
.Input input::placeholder {
    color: #a1a1aa;
}
.Input > span {
    color: #6366f1;
    font-size: 22px;
    font-weight: 700;
}
@keyframes infinity-border {
    to {
        background-position: 100% 0;
    }
}`,
  },
  {
    id: 1317,
    name: "Mission Control Input",
    preview: (
      <div className="ip-1317">
        <div className="ip-1317__header">
          <span>MISSION CONTROL</span>
          <div>
            <i className="fa-solid fa-signal"></i>
            <i className="fa-solid fa-satellite"></i>
          </div>
        </div>
        <div className="ip-1317__field">
          <input type="text" placeholder="Enter mission command..." />
          <button>
            <i className="fa-solid fa-rocket"></i>
            Launch
          </button>
        </div>
        <div className="ip-1317__status">
          <span></span>
          SYSTEM READY
        </div>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-header">
        <span>MISSION CONTROL</span>
        <div>
            <i class="fa-solid fa-signal"></i>
            <i class="fa-solid fa-satellite"></i>
        </div>
    </div>
    <div class="Input-field">
        <input type="text" placeholder="Enter mission command...">
        <button>
            <i class="fa-solid fa-rocket"></i>
            Launch
        </button>
    </div>
    <div class="Input-status">
        <span></span>
        SYSTEM READY
    </div>
</div>`,
    css: `.Input {
    width: 380px;
    padding: 16px;
    border: 1px solid #334155;
    border-radius: 16px;
    background: linear-gradient(145deg,#0f172a,#020617);
    color: #e2e8f0;
    box-shadow: 0 20px 50px rgba(0,0,0,.25);
}
.Input-header {
    display: flex;
    justify-content: space-between;
    color: #64748b;
    font-size: 8px;
    letter-spacing: 1.5px;
}
.Input-header div {
    display: flex;
    gap: 8px;
    color: #38bdf8;
}
.Input-field {
    display: flex;
    gap: 8px;
    margin-top: 14px;
    padding: 5px;
    border: 1px solid #334155;
    border-radius: 10px;
    background: #020617;
}
.Input-field input {
    flex: 1;
    min-width: 0;
    height: 38px;
    padding: 0 9px;
    border: none;
    outline: none;
    background: transparent;
    color: #e0f2fe;
    font-family: monospace;
}
.Input-field input::placeholder {
    color: #475569;
}
.Input-field button {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 13px;
    border: none;
    border-radius: 7px;
    background: #0284c7;
    color: #ffffff;
    font-size: 10px;
}
.Input-status {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-top: 11px;
    color: #4ade80;
    font-size: 8px;
    letter-spacing: 1px;
}
.Input-status span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 8px #22c55e;
}`,
  },
  {
    id: 1318,
    name: "Legendary Creator Input",
    preview: (
      <div className="ip-1318">
        <div className="ip-1318__top">
          <div className="ip-1318__badge">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
          </div>
          <div>
            <strong>CREATOR MODE</strong>
            <span>Turn an idea into reality</span>
          </div>
        </div>
        <textarea placeholder="Describe your next masterpiece..." />
        <div className="ip-1318__bottom">
          <div>
            <button>
              <i className="fa-solid fa-image"></i>
            </button>
            <button>
              <i className="fa-solid fa-paperclip"></i>
            </button>
            <button>
              <i className="fa-solid fa-globe"></i>
            </button>
          </div>
          <button className="ip-1318__create">
            Create
            <i className="fa-solid fa-sparkles"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-top">
        <div class="Input-badge">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
        </div>
        <div>
            <strong>CREATOR MODE</strong>
            <span>Turn an idea into reality</span>
        </div>
    </div>
    <textarea placeholder="Describe your next masterpiece..."></textarea>
    <div class="Input-bottom">
        <div>
            <button><i class="fa-solid fa-image"></i></button>
            <button><i class="fa-solid fa-paperclip"></i></button>
            <button><i class="fa-solid fa-globe"></i></button>
        </div>
        <button class="Input-create">
            Create
            <i class="fa-solid fa-sparkles"></i>
        </button>
    </div>
</div>`,
    css: `.Input {
    width: 390px;
    padding: 18px;
    background: #ffffff;
    border: 1px solid #e4e4e7;
    border-radius: 22px;
    box-shadow: 0 25px 70px rgba(0,0,0,.08);
}
.Input-top {
    display: flex;
    align-items: center;
    gap: 11px;
}
.Input-badge {
    width: 43px;
    height: 43px;
    display: grid;
    place-items: center;
    border-radius: 13px;
    background: linear-gradient(135deg,#8b5cf6,#ec4899);
    color: #ffffff;
}
.Input-top strong {
    display: block;
    color: #18181b;
    font-size: 10px;
    letter-spacing: 1px;
}
.Input-top span {
    display: block;
    margin-top: 3px;
    color: #a1a1aa;
    font-size: 10px;
}
.Input textarea {
    width: 100%;
    min-height: 90px;
    margin-top: 16px;
    padding: 0;
    resize: none;
    border: none;
    outline: none;
    background: transparent;
    color: #18181b;
    font-family: inherit;
    font-size: 14px;
    line-height: 1.6;
}
.Input textarea::placeholder {
    color: #a1a1aa;
}
.Input-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 12px;
    border-top: 1px solid #f4f4f5;
}
.Input-bottom > div {
    display: flex;
    gap: 5px;
}
.Input-bottom button {
    width: 33px;
    height: 33px;
    border: none;
    border-radius: 9px;
    background: #f4f4f5;
    color: #71717a;
}
.Input-bottom .Input-create {
    width: auto;
    padding: 0 13px;
    display: flex;
    align-items: center;
    gap: 7px;
    background: #18181b;
    color: #ffffff;
    font-size: 10px;
    font-weight: 600;
}`,
  },
  {
    id: 1319,
    name: "Quantum Input",
    preview: (
      <div className="ip-1319">
        <div className="ip-1319__rings">
          <span></span>
          <span></span>
          <span></span>
          <i className="fa-solid fa-atom"></i>
        </div>
        <input type="text" placeholder="Enter quantum query..." />
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-rings">
        <span></span>
        <span></span>
        <span></span>
        <i class="fa-solid fa-atom"></i>
    </div>
    <input type="text" placeholder="Enter quantum query...">
    <button>
        <i class="fa-solid fa-arrow-right"></i>
    </button>
</div>`,
    css: `.Input {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    width: 360px;
    height: 62px;
    padding: 0 8px;
    border: 1px solid #312e81;
    border-radius: 18px;
    background: #05051a;
    color: #ffffff;
    box-shadow: 0 0 35px rgba(99,102,241,.12);
}
.Input-rings {
    position: relative;
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
}
.Input-rings span {
    position: absolute;
    width: 39px;
    height: 20px;
    border: 1px solid #6366f1;
    border-radius: 50%;
    transform: rotate(45deg);
    animation: quantum 1.3s linear infinite;
}
.Input-rings span:nth-child(2) {
    transform: rotate(-45deg);
    border-color: #ec4899;
}
.Input-rings span:nth-child(3) {
    width: 25px;
    height: 25px;
    border-color: #22d3ee;
    animation-duration: 1.8s;
}
.Input-rings i {
    position: relative;
    z-index: 2;
    font-size: 12px;
    color: #ffffff;
}
.Input input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: #e0e7ff;
    font-size: 12px;
}
.Input input::placeholder {
    color: #4f46e5;
}
.Input button {
    width: 42px;
    height: 42px;
    border: none;
    border-radius: 13px;
    background: linear-gradient(135deg,#6366f1,#ec4899);
    color: #ffffff;
}
@keyframes quantum {
    to {
        transform: rotate(405deg);
    }
}`,
  },
  {
    id: 1320,
    name: "Ultimate Legendary Input",
    preview: (
      <div className="ip-1320">
        <div className="ip-1320__energy"></div>
        <div className="ip-1320__content">
          <div className="ip-1320__logo">
            <i className="fa-solid fa-crown"></i>
          </div>
          <div className="ip-1320__field">
            <span>LEGENDARY MODE</span>
            <input type="text" placeholder="What will you create?" />
          </div>
          <button>
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Input">
    <div class="Input-energy"></div>
    <div class="Input-content">
        <div class="Input-logo">
            <i class="fa-solid fa-crown"></i>
        </div>
        <div class="Input-field">
            <span>LEGENDARY MODE</span>
            <input type="text" placeholder="What will you create?">
        </div>
        <button>
            <i class="fa-solid fa-arrow-up"></i>
        </button>
    </div>
</div>`,
    css: `.Input {
    position: relative;
    width: 390px;
    padding: 2px;
    overflow: hidden;
    border-radius: 21px;
    background: linear-gradient(
        90deg,
        #ef4444,
        #f97316,
        #eab308,
        #22c55e,
        #06b6d4,
        #6366f1,
        #ec4899,
        #ef4444
    );
    background-size: 300% 100%;
    animation: legendary-border 4s linear infinite;
}
.Input-energy {
    position: absolute;
    inset: -120%;
    background: conic-gradient(
        transparent,
        rgba(255,255,255,.3),
        transparent 20%
    );
    animation: legendary-energy 2s linear infinite;
}
.Input-content {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 9px;
    border-radius: 19px;
    background: #09090b;
}
.Input-logo {
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 14px;
    background: linear-gradient(135deg,#facc15,#f97316,#ec4899);
    color: #ffffff;
    box-shadow: 0 0 20px rgba(249,115,22,.4);
}
.Input-field {
    flex: 1;
    min-width: 0;
}
.Input-field > span {
    display: block;
    margin-bottom: 3px;
    color: #facc15;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 1.5px;
}
.Input-field input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: #ffffff;
    font-size: 13px;
}
.Input-field input::placeholder {
    color: #71717a;
}
.Input-content button {
    width: 44px;
    height: 44px;
    border: none;
    border-radius: 14px;
    background: #ffffff;
    color: #18181b;
}
@keyframes legendary-border {
    to {
        background-position: 300% 0;
    }
}
@keyframes legendary-energy {
    to {
        transform: rotate(360deg);
    }
}`,
  },
];
