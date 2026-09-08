import "../pages/All.css";

export const forms = [
  {
    id: 210,
    name: "Login Form",
    preview: (
      <div className="fm-210">
        <div className="fm-210__title">Sign in</div>
        <div className="fm-210__field">
          <label className="fm-210__label">Email</label>
          <input
            className="fm-210__input"
            type="email"
            placeholder="you@example.com"
          />
        </div>
        <div className="fm-210__field">
          <label className="fm-210__label">Password</label>
          <input
            className="fm-210__input"
            type="password"
            placeholder="••••••••"
          />
        </div>
        <button className="fm-210__btn">Sign in</button>
        <div className="fm-210__footer">
          Don't have an account? <span>Sign up</span>
        </div>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Sign in</div>
    <div class="Form__field">
        <label class="Form__label">Email</label>
        <input class="Form__input" type="email" placeholder="you@example.com" />
    </div>
    <div class="Form__field">
        <label class="Form__label">Password</label>
        <input class="Form__input" type="password" placeholder="••••••••" />
    </div>
    <button class="Form__btn">Sign in</button>
    <div class="Form__footer">Don't have an account? <span>Sign up</span></div>
</div>`,
    css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    padding: 24px;
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transform: scale(0.8);
}
.Form__title {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 4px;
}
.Form__field {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.Form__label {
    font-size: 12px;
    font-weight: 500;
    color: #a1a1aa;
}
.Form__input {
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 9px 12px;
    border-radius: 8px;
    font-size: 13px;
    outline: none;
    transition: border-color 0.2s;
    font-family: inherit;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 2px;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #6d28d9;
}
.Form__footer {
    font-size: 11px;
    color: #71717a;
    text-align: center;
}
.Form__footer span {
    color: #a855f7;
    cursor: pointer;
}
.Form__footer span:hover {
    text-decoration: underline;
}`,
  },
  {
    id: 211,
    name: "Register Form",
    preview: (
      <div className="fm-211">
        <div className="fm-211__title">Create account</div>
        <div className="fm-211__field">
          <label className="fm-211__label">Username</label>
          <input className="fm-211__input" type="text" placeholder="andre" />
        </div>
        <div className="fm-211__field">
          <label className="fm-211__label">Email</label>
          <input
            className="fm-211__input"
            type="email"
            placeholder="you@example.com"
          />
        </div>
        <div className="fm-211__field">
          <label className="fm-211__label">Password</label>
          <input
            className="fm-211__input"
            type="password"
            placeholder="••••••••"
          />
        </div>
        <div className="fm-211__field">
          <label className="fm-211__label">Confirm password</label>
          <input
            className="fm-211__input"
            type="password"
            placeholder="••••••••"
          />
        </div>
        <button className="fm-211__btn">Create account</button>
        <div className="fm-211__footer">
          Already have an account? <span>Sign in</span>
        </div>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Create account</div>
    <div class="Form__field">
        <label class="Form__label">Username</label>
        <input class="Form__input" type="text" placeholder="andre" />
    </div>
    <div class="Form__field">
        <label class="Form__label">Email</label>
        <input class="Form__input" type="email" placeholder="you@example.com" />
    </div>
    <div class="Form__field">
        <label class="Form__label">Password</label>
        <input class="Form__input" type="password" placeholder="••••••••" />
    </div>
    <div class="Form__field">
        <label class="Form__label">Confirm password</label>
        <input class="Form__input" type="password" placeholder="••••••••" />
    </div>
    <button class="Form__btn">Create account</button>
    <div class="Form__footer">Already have an account? <span>Sign in</span></div>
</div>`,
    css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    padding: 24px;
    width: 260px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transform: scale(0.72);
}
.Form__title {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 2px;
}
.Form__field {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.Form__label {
    font-size: 12px;
    font-weight: 500;
    color: #a1a1aa;
}
.Form__input {
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 9px 12px;
    border-radius: 8px;
    font-size: 13px;
    outline: none;
    transition: border-color 0.2s;
    font-family: inherit;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 2px;
    transition: opacity 0.2s;
    width: 100%;
}
.Form__btn:hover {
    opacity: 0.88;
}
.Form__footer {
    font-size: 11px;
    color: #71717a;
    text-align: center;
}
.Form__footer span {
    color: #a855f7;
    cursor: pointer;
}
.Form__footer span:hover {
    text-decoration: underline;
}`,
  },
  {
    id: 212,
    name: "Login Form",
    preview: (
      <div className="fm-212">
        <span className="fm-212__input-span">
          <label className="fm-212__label">Email</label>
          <input
            className="fm-212__input"
            type="email"
            placeholder="you@example.com"
          />
        </span>
        <span className="fm-212__input-span">
          <label className="fm-212__label">Password</label>
          <input
            className="fm-212__input"
            type="password"
            placeholder="••••••••"
          />
        </span>
        <span className="fm-212__span">
          <a href="#">Forgot password?</a>
        </span>
        <button className="fm-212__submit">Log in</button>
        <span className="fm-212__span">
          Don't have an account? <a href="#">Sign up</a>
        </span>
      </div>
    ),
    html: `<div class="Form">
    <span class="Form__input-span">
        <label class="Form__label">Email</label>
        <input class="Form__input" type="email" placeholder="you@example.com" />
    </span>
    <span class="Form__input-span">
        <label class="Form__label">Password</label>
        <input class="Form__input" type="password" placeholder="••••••••" />
    </span>
    <span class="Form__span"><a href="#">Forgot password?</a></span>
    <button class="Form__submit">Log in</button>
    <span class="Form__span">Don't have an account? <a href="#">Sign up</a></span>
</div>`,
    css: `.Form {
    --bg-light: #efefef;
    --bg-dark: #707070;
    --clr: #58bc82;
    --clr-alpha: #9c9c9c60;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 220px;
    transform: scale(0.85);
}
.Form__input-span {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.Form__input {
    border-radius: 0.5rem;
    padding: 0.75rem;
    width: 100%;
    border: none;
    background-color: var(--clr-alpha);
    outline: 2px solid var(--bg-dark);
    font-family: inherit;
    font-size: 13px;
    color: #fff;
    box-sizing: border-box;
}
.Form__input:focus {
    outline: 2px solid var(--clr);
}
.Form__input::placeholder {
    color: #9c9c9c;
}
.Form__label {
    align-self: flex-start;
    color: var(--clr);
    font-weight: 600;
    font-size: 13px;
}
.Form__submit {
    padding: 0.75rem;
    width: 100%;
    border-radius: 3rem;
    background-color: var(--bg-dark);
    color: var(--bg-light);
    border: none;
    cursor: pointer;
    transition: all 300ms;
    font-weight: 600;
    font-size: 13px;
}
.Form__submit:hover {
    background-color: var(--clr);
    color: var(--bg-dark);
}
.Form__span {
    font-size: 11px;
    color: var(--bg-dark);
}
.Form__span a {
    color: var(--clr);
    text-decoration: none;
}
.Form__span a:hover {
    text-decoration: underline;
}`,
  },
  {
    id: 213,
    name: "Flip Login Form",
    preview: (
      <div className="fm-213">
        <label className="fm-213__switch">
          <input type="checkbox" className="fm-213__toggle" />
          <span className="fm-213__slider"></span>
          <span className="fm-213__card-side"></span>
          <div className="fm-213__inner">
            <div className="fm-213__front">
              <div className="fm-213__title">Log in</div>
              <div className="fm-213__form">
                <input
                  className="fm-213__input"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="fm-213__input"
                  placeholder="Password"
                  type="password"
                />
                <button className="fm-213__btn">Let's go!</button>
              </div>
            </div>
            <div className="fm-213__back">
              <div className="fm-213__title">Sign up</div>
              <div className="fm-213__form">
                <input
                  className="fm-213__input"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="fm-213__input"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="fm-213__input"
                  placeholder="Password"
                  type="password"
                />
                <button className="fm-213__btn">Confirm!</button>
              </div>
            </div>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Form">
    <label class="Form__switch">
        <input type="checkbox" class="Form__toggle" />
        <span class="Form__slider"></span>
        <span class="Form__card-side"></span>
        <div class="Form__inner">
            <div class="Form__front">
                <div class="Form__title">Log in</div>
                <div class="Form__form">
                    <input class="Form__input" placeholder="Email" type="email" />
                    <input class="Form__input" placeholder="Password" type="password" />
                    <button class="Form__btn">Let's go!</button>
                </div>
            </div>
            <div class="Form__back">
                <div class="Form__title">Sign up</div>
                <div class="Form__form">
                    <input class="Form__input" placeholder="Name" type="text" />
                    <input class="Form__input" placeholder="Email" type="email" />
                    <input class="Form__input" placeholder="Password" type="password" />
                    <button class="Form__btn">Confirm!</button>
                </div>
            </div>
        </div>
    </label>
</div>`,
    css: `.Form {
    --input-focus: #2d8cf0;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --main-color: #323232;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    transform: scale(0.75);
    height: 320px;
}
.Form__switch {
    transform: translateY(-200px);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 50px;
    height: 20px;
}
.Form__card-side::before {
    position: absolute;
    content: 'Log in';
    left: -70px;
    top: 0;
    width: 100px;
    text-decoration: underline;
    color: var(--font-color);
    font-weight: 600;
}
.Form__card-side::after {
    position: absolute;
    content: 'Sign up';
    left: 70px;
    top: 0;
    width: 100px;
    text-decoration: none;
    color: var(--font-color);
    font-weight: 600;
}
.Form__toggle {
    opacity: 0;
    width: 0;
    height: 0;
}
.Form__slider {
    box-sizing: border-box;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-color);
    transition: 0.3s;
}
.Form__slider::before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    border: 2px solid var(--main-color);
    border-radius: 5px;
    left: -2px;
    bottom: 2px;
    background-color: var(--bg-color);
    box-shadow: 0 3px 0 var(--main-color);
    transition: 0.3s;
}
.Form__toggle:checked+.Form__slider {
    background-color: var(--input-focus);
}
.Form__toggle:checked+.Form__slider::before {
    transform: translateX(30px);
}
.Form__toggle:checked~.Form__card-side::before {
    text-decoration: none;
}
.Form__toggle:checked~.Form__card-side::after {
    text-decoration: underline;
}
.Form__inner {
    width: 300px;
    height: 350px;
    position: relative;
    background-color: transparent;
    perspective: 1000px;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}
.Form__toggle:checked~.Form__inner {
    transform: rotateY(180deg);
}
.Form__front,
.Form__back {
    padding: 20px;
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background: lightgrey;
    gap: 20px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    box-sizing: border-box;
}
.Form__back {
    transform: rotateY(180deg);
}
.Form__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
}
.Form__title {
    font-size: 22px;
    font-weight: 900;
    text-align: center;
    color: var(--main-color);
}
.Form__input {
    width: 100%;
    height: 38px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 14px;
    font-weight: 600;
    color: var(--font-color);
    padding: 5px 10px;
    outline: none;
    box-sizing: border-box;
}
.Form__input::placeholder {
    color: var(--font-color-sub);
    opacity: 0.8;
}
.Form__input:focus {
    border: 2px solid var(--input-focus);
}
.Form__btn {
    width: 120px;
    height: 38px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 15px;
    font-weight: 600;
    color: var(--font-color);
    cursor: pointer;
    transition: 0.1s;
}
.Form__btn:active {
    box-shadow: 0px 0px var(--main-color);
    transform: translate(3px, 3px);
}`,
  },
  {
    id: 214,
    name: "OAuth Form",
    preview: (
      <div className="fm-214">
        <p className="fm-214__title">
          Welcome,
          <span>sign in to continue</span>
        </p>
        <button className="fm-214__oauth">Continue with Google</button>
        <button className="fm-214__oauth">Continue with Github</button>
        <div className="fm-214__separator">
          <div></div>
          <span>OR</span>
          <div></div>
        </div>
        <input className="fm-214__input" type="email" placeholder="Email" />
        <button className="fm-214__oauth">Continue</button>
      </div>
    ),
    html: `<div class="Form">
    <p class="Form__title">
        Welcome,
        <span>sign in to continue</span>
    </p>
    <button class="Form__oauth">Continue with Google</button>
    <button class="Form__oauth">Continue with Github</button>
    <div class="Form__separator">
        <div></div>
        <span>OR</span>
        <div></div>
    </div>
    <input class="Form__input" type="email" placeholder="Email" />
    <button class="Form__oauth">Continue</button>
</div>`,
    css: `.Form {
    --background: #d3d3d3;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --main-color: #323232;
    padding: 20px;
    background: var(--background);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    transform: scale(0.72);
    width: 260px;
    box-sizing: border-box;
}
.Form__title {
    color: var(--font-color);
    font-weight: 700;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    margin: 0 0 6px 0;
}
.Form__title span {
    color: var(--font-color-sub);
    font-weight: 600;
    font-size: 14px;
}
.Form__oauth {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 100%;
    height: 38px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 14px;
    font-weight: 600;
    color: var(--font-color);
    cursor: pointer;
    transition: all 250ms;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.Form__oauth::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: #212121;
    z-index: -1;
    transition: all 250ms;
}
.Form__oauth:hover {
    color: #e8e8e8;
}
.Form__oauth:hover::before {
    width: 100%;
}
.Form__separator {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
.Form__separator div {
    flex: 1;
    height: 3px;
    border-radius: 5px;
    background-color: var(--font-color-sub);
}
.Form__separator span {
    color: var(--font-color);
    font-weight: 600;
    font-size: 13px;
}
.Form__input {
    width: 100%;
    height: 38px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 14px;
    font-weight: 600;
    color: var(--font-color);
    padding: 5px 10px;
    outline: none;
    box-sizing: border-box;
    font-family: inherit;
}
.Form__input::placeholder {
    color: var(--font-color-sub);
}
.Form__input:focus {
    border-color: #2d8cf0;
}`,
  },
  {
    id: 215,
    name: "Sign Up Form",
    preview: (
      <div className="fm-215__box">
        <div className="fm-215__form">
          <span className="fm-215__title">Sign up</span>
          <span className="fm-215__subtitle">
            Create a free account with your email.
          </span>
          <div className="fm-215__container">
            <input
              type="text"
              className="fm-215__input"
              placeholder="Full Name"
            />
            <input type="email" className="fm-215__input" placeholder="Email" />
            <input
              type="password"
              className="fm-215__input"
              placeholder="Password"
            />
          </div>
          <button className="fm-215__btn">Sign up</button>
        </div>
        <div className="fm-215__section">
          <p>
            Have an account? <a href="#">Log in</a>
          </p>
        </div>
      </div>
    ),
    html: `<div class="Form-box">
    <div class="Form">
        <span class="Form__title">Sign up</span>
        <span class="Form__subtitle">Create a free account with your email.</span>
        <div class="Form__container">
            <input type="text" class="Form__input" placeholder="Full Name" />
            <input type="email" class="Form__input" placeholder="Email" />
            <input type="password" class="Form__input" placeholder="Password" />
        </div>
        <button class="Form__btn">Sign up</button>
    </div>
    <div class="Form__section">
        <p>Have an account? <a href="#">Log in</a></p>
    </div>
</div>`,
    css: `.Form-box {
    width: 240px;
    background: #f1f7fe;
    overflow: hidden;
    border-radius: 16px;
    color: #010101;
    transform: scale(0.85);
}
.Form {
    display: flex;
    flex-direction: column;
    padding: 24px 20px 16px;
    gap: 12px;
    text-align: center;
}
.Form__title {
    font-weight: 700;
    font-size: 1.4rem;
    color: #010101;
}
.Form__subtitle {
    font-size: 0.85rem;
    color: #666;
}
.Form__container {
    overflow: hidden;
    border-radius: 8px;
    background-color: #fff;
    margin: 6px 0 4px;
    width: 100%;
}
.Form__input {
    background: none;
    border: 0;
    outline: 0;
    height: 38px;
    width: 100%;
    border-bottom: 1px solid #eee;
    font-size: 0.85rem;
    padding: 8px 12px;
    box-sizing: border-box;
    font-family: inherit;
    color: #010101;
}
.Form__input:last-child {
    border-bottom: none;
}
.Form__btn {
    background-color: #0066ff;
    color: #fff;
    border: 0;
    border-radius: 24px;
    padding: 9px 16px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
}
.Form__btn:hover {
    background-color: #005ce6;
}
.Form__section {
    padding: 12px 16px;
    font-size: 0.8rem;
    background-color: #e0ecfb;
    box-shadow: rgba(0, 0, 0, 0.08) 0 -1px;
    text-align: center;
    color: #010101;
}
.Form__section a {
    font-weight: 700;
    color: #0066ff;
    text-decoration: none;
    transition: color 0.3s ease;
}
.Form__section a:hover {
    color: #005ce6;
    text-decoration: underline;
}`,
  },
  {
    id: 216,
    name: "Spotify Login Form",
    preview: (
      <div className="fm-216">
        <div className="fm-216__body">
          <div className="fm-216__welcome">
            <div className="fm-216__line1">Spotify</div>
            <div className="fm-216__line2">Welcome Back, André</div>
          </div>
          <div className="fm-216__inputs">
            <div className="fm-216__inp">
              <input placeholder="Email Address" type="text" />
            </div>
            <div className="fm-216__inp">
              <input placeholder="Password" type="password" />
            </div>
          </div>
          <div className="fm-216__submit-wrap">
            <button className="fm-216__submit">Login</button>
          </div>
          <div className="fm-216__forgot">
            <a href="#">Forgot password?</a>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__body">
        <div class="Form__welcome">
            <div class="Form__line1">Spotify</div>
            <div class="Form__line2">Welcome Back, André</div>
        </div>
        <div class="Form__inputs">
            <div class="Form__inp">
                <input placeholder="Email Address" type="text" />
            </div>
            <div class="Form__inp">
                <input placeholder="Password" type="password" />
            </div>
        </div>
        <div class="Form__submit-wrap">
            <button class="Form__submit">Login</button>
        </div>
        <div class="Form__forgot">
            <a href="#">Forgot password?</a>
        </div>
    </div>
</div>`,
    css: `.Form {
    display: grid;
    place-items: center;
    width: 260px;
    height: 380px;
    padding: 25px;
    background-color: #161616;
    box-shadow: 0px 15px 40px #00FF7F;
    outline: 1px solid #2b9962;
    border-radius: 10px;
    position: relative;
    transform: scale(0.82);
    box-sizing: border-box;
}
.Form__body {
    width: 100%;
}
.Form__welcome {
    text-align: center;
    line-height: 1;
    margin-bottom: 24px;
}
.Form__line1 {
    color: #00FF7F;
    font-weight: 600;
    font-size: 32px;
}
.Form__line2 {
    color: #fff;
    font-size: 15px;
    margin-top: 12px;
}
.Form__inputs {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.Form__inp {
    padding: 10px 16px;
    background: transparent;
    border: 1px solid #e3e3e3;
    border-radius: 8px;
    transition: border-color 0.2s;
}
.Form__inp:focus-within {
    border-color: #00FF7F;
}
.Form__inp input {
    width: 100%;
    background: none;
    font-size: 13px;
    color: #00FF7F;
    border: none;
    outline: none;
    padding: 0;
    font-family: inherit;
}
.Form__inp input::placeholder {
    color: #4a4a4a;
}
.Form__submit-wrap {
    margin-top: 16px;
}
.Form__submit {
    display: block;
    width: 100%;
    color: #00FF7F;
    background-color: transparent;
    font-weight: 600;
    font-size: 14px;
    padding: 12px;
    border: 0;
    outline: 1px solid #00FF7F;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
}
.Form__submit:hover {
    background-color: #00FF7F;
    color: #161616;
}
.Form__forgot {
    text-align: center;
    margin-top: 10px;
}
.Form__forgot a {
    color: #868686;
    font-size: 12px;
    text-decoration: none;
}
.Form__forgot a:hover {
    color: #00FF7F;
}`,
  },
  {
    id: 217,
    name: "Minimal Login",
    preview: (
      <div className="fm-217">
        <div className="fm-217__logo">A</div>
        <div className="fm-217__title">Welcome back</div>
        <div className="fm-217__sub">Sign in to your account</div>
        <input className="fm-217__input" type="email" placeholder="Email" />
        <input
          className="fm-217__input"
          type="password"
          placeholder="Password"
        />
        <button className="fm-217__btn">Sign in</button>
        <div className="fm-217__footer">
          No account? <span>Sign up</span>
        </div>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__logo">A</div>
    <div class="Form__title">Welcome back</div>
    <div class="Form__sub">Sign in to your account</div>
    <input class="Form__input" type="email" placeholder="Email" />
    <input class="Form__input" type="password" placeholder="Password" />
    <button class="Form__btn">Sign in</button>
    <div class="Form__footer">No account? <span>Sign up</span></div>
</div>`,
    css: `.Form {
    background: #fff;
    border-radius: 14px;
    padding: 24px 20px;
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    transform: scale(0.82);
    box-sizing: border-box;
}
.Form__logo {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 18px;
    margin-bottom: 4px;
}
.Form__title {
    font-size: 16px;
    font-weight: 700;
    color: #111;
}
.Form__sub {
    font-size: 11px;
    color: #888;
    margin-bottom: 4px;
}
.Form__input {
    width: 100%;
    padding: 9px 12px;
    border: 1.5px solid #e5e5e5;
    border-radius: 8px;
    font-size: 12px;
    outline: none;
    color: #111;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
}
.Form__input:focus {
    border-color: #111;
}
.Form__input::placeholder {
    color: #bbb;
}
.Form__btn {
    width: 100%;
    padding: 10px;
    background: #111;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s;
    font-family: inherit;
}
.Form__btn:hover {
    opacity: 0.85;
}
.Form__footer {
    font-size: 11px;
    color: #888;
}
.Form__footer span {
    color: #111;
    font-weight: 600;
    cursor: pointer;
}`,
  },
  {
    id: 218,
    name: "Dark Login",
    preview: (
      <div className="fm-218">
        <div className="fm-218__title">Sign in</div>
        <div className="fm-218__sub">Enter your credentials to continue</div>
        <div className="fm-218__field">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>
        <div className="fm-218__field">
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
        </div>
        <div className="fm-218__row">
          <label className="fm-218__check">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <a href="#">Forgot?</a>
        </div>
        <button className="fm-218__btn">Continue</button>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Sign in</div>
    <div class="Form__sub">Enter your credentials to continue</div>
    <div class="Form__field">
        <label>Email</label>
        <input type="email" placeholder="you@example.com" />
    </div>
    <div class="Form__field">
        <label>Password</label>
        <input type="password" placeholder="••••••••" />
    </div>
    <div class="Form__row">
        <label class="Form__check">
            <input type="checkbox" />
            <span>Remember me</span>
        </label>
        <a href="#">Forgot?</a>
    </div>
    <button class="Form__btn">Continue</button>
</div>`,
    css: `.Form {
    background: #0f0f0f;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    padding: 22px 18px;
    width: 220px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transform: scale(0.82);
    box-sizing: border-box;
}
.Form__title {
    font-size: 17px;
    font-weight: 700;
    color: #fff;
}
.Form__sub {
    font-size: 11px;
    color: #555;
    margin-bottom: 2px;
}
.Form__field {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.Form__field label {
    font-size: 11px;
    color: #888;
    font-weight: 500;
}
.Form__field input {
    background: #1a1a1a;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 8px 10px;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
}
.Form__field input:focus {
    border-color: #7c3aed;
}
.Form__field input::placeholder {
    color: #444;
}
.Form__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.Form__check {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    color: #666;
    cursor: pointer;
}
.Form__check input {
    accent-color: #7c3aed;
}
.Form__row a {
    font-size: 11px;
    color: #7c3aed;
    text-decoration: none;
}
.Form__btn {
    width: 100%;
    padding: 10px;
    background: #7c3aed;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    font-family: inherit;
}
.Form__btn:hover {
    background: #6d28d9;
}`,
  },
  {
    id: 219,
    name: "Glass Login",
    preview: (
      <div className="fm-219">
        <div className="fm-219__inner">
          <div className="fm-219__title">Login</div>
          <div className="fm-219__field">
            <input className="fm-219__input" type="email" placeholder="Email" />
          </div>
          <div className="fm-219__field">
            <input
              className="fm-219__input"
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="fm-219__btn">Log in</button>
          <div className="fm-219__footer">
            <a href="#">Forgot password?</a>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__inner">
        <div class="Form__title">Login</div>
        <div class="Form__field">
            <input class="Form__input" type="email" placeholder="Email" />
        </div>
        <div class="Form__field">
            <input class="Form__input" type="password" placeholder="Password" />
        </div>
        <button class="Form__btn">Log in</button>
        <div class="Form__footer">
            <a href="#">Forgot password?</a>
        </div>
    </div>
</div>`,
    css: `.Form {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 16px;
    padding: 3px;
    transform: scale(0.82);
}
.Form__inner {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(20px);
    border-radius: 14px;
    padding: 22px 18px;
    width: 210px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
}
.Form__title {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 2px;
}
.Form__field {
    width: 100%;
}
.Form__input {
    width: 100%;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    padding: 9px 12px;
    border-radius: 8px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
}
.Form__input:focus {
    border-color: rgba(255, 255, 255, 0.5);
}
.Form__input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}
.Form__btn {
    width: 100%;
    padding: 10px;
    background: #fff;
    color: #764ba2;
    border: none;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s;
    font-family: inherit;
}
.Form__btn:hover {
    opacity: 0.9;
}
.Form__footer {
    text-align: center;
}
.Form__footer a {
    color: rgba(255, 255, 255, 0.6);
    font-size: 11px;
    text-decoration: none;
}
.Form__footer a:hover {
    color: #fff;
}`,
  },
  {
    id: 220,
    name: "Gradient Login",
    preview: (
      <div className="fm-220">
        <div className="fm-220__left">
          <div className="fm-220__brand">MyApp</div>
          <div className="fm-220__tagline">Good to see you again</div>
        </div>
        <div className="fm-220__right">
          <div className="fm-220__title">Sign in</div>
          <input className="fm-220__input" type="email" placeholder="Email" />
          <input
            className="fm-220__input"
            type="password"
            placeholder="Password"
          />
          <button className="fm-220__btn">Sign in</button>
          <div className="fm-220__footer">
            No account? <span>Register</span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__left">
        <div class="Form__brand">MyApp</div>
        <div class="Form__tagline">Good to see you again</div>
    </div>
    <div class="Form__right">
        <div class="Form__title">Sign in</div>
        <input class="Form__input" type="email" placeholder="Email" />
        <input class="Form__input" type="password" placeholder="Password" />
        <button class="Form__btn">Sign in</button>
        <div class="Form__footer">No account? <span>Register</span></div>
    </div>
</div>`,
    css: `.Form {
    display: flex;
    border-radius: 14px;
    overflow: hidden;
    width: 280px;
    transform: scale(0.72);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}
.Form__left {
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    width: 90px;
    flex-shrink: 0;
}
.Form__brand {
    font-size: 13px;
    font-weight: 800;
    color: #fff;
}
.Form__tagline {
    font-size: 9px;
    color: rgba(255, 255, 255, 0.65);
    line-height: 1.4;
}
.Form__right {
    background: #18181b;
    padding: 20px 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.Form__title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 2px;
}
.Form__input {
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 8px 10px;
    border-radius: 7px;
    font-size: 11px;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    padding: 8px;
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    color: #fff;
    border: none;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s;
    font-family: inherit;
}
.Form__btn:hover {
    opacity: 0.85;
}
.Form__footer {
    font-size: 10px;
    color: #71717a;
}
.Form__footer span {
    color: #a855f7;
    cursor: pointer;
    font-weight: 500;
}`,
  },
  {
    id: 221,
    name: "Microsoft Login",
    preview: (
      <div className="fm-221">
        <p className="fm-221__title">Sign in</p>
        <input
          className="fm-221__email"
          placeholder="E-mail, phone, or Skype"
          type="text"
        />
        <p className="fm-221__text">
          <a href="#">No account? Create one!</a>
        </p>
        <p className="fm-221__text">
          <a href="#">Can't access your account?</a>
        </p>
        <div className="fm-221__row">
          <button className="fm-221__btn fm-221__btn--secondary">Back</button>
          <button className="fm-221__btn fm-221__btn--primary">Next</button>
        </div>
      </div>
    ),
    html: `<div class="Form">
    <p class="Form__title">Sign in</p>
    <input class="Form__email" placeholder="E-mail, phone, or Skype" type="text" />
    <p class="Form__text"><a href="#">No account? Create one!</a></p>
    <p class="Form__text"><a href="#">Can't access your account?</a></p>
    <div class="Form__row">
        <button class="Form__btn Form__btn--secondary">Back</button>
        <button class="Form__btn Form__btn--primary">Next</button>
    </div>
</div>`,
    css: `.Form {
    background-color: #ffffff;
    width: 260px;
    padding: 28px;
    box-sizing: border-box;
    transform: scale(0.82);
}
.Form__title {
    color: #1b1b1b;
    font-size: 1.4rem;
    font-weight: 600;
    margin: 12px 0 10px 0;
    font-family: "Segoe UI", "Helvetica Neue", sans-serif;
}
.Form__email {
    width: 100%;
    padding: 6px 0;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
    height: 34px;
    outline: none;
    background-color: transparent;
    color: #000;
    font-size: 13px;
    margin-bottom: 14px;
    box-sizing: border-box;
    font-family: inherit;
}
.Form__email::placeholder {
    color: #666;
    font-size: 13px;
}
.Form__text {
    color: #1b1b1b;
    font-size: 0.8rem;
    line-height: 1.25rem;
    margin-bottom: 10px;
    font-family: "Segoe UI", sans-serif;
}
.Form__text a {
    color: #0067B8;
    text-decoration: none;
    cursor: pointer;
}
.Form__text a:hover {
    text-decoration: underline;
}
.Form__row {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 4px;
    margin-top: 16px;
}
.Form__btn {
    width: 90px;
    height: 32px;
    border: none;
    font-size: 14px;
    cursor: pointer;
    font-family: inherit;
    transition: background-color 0.15s;
}
.Form__btn--secondary {
    background-color: rgba(0, 0, 0, 0.15);
    color: #000;
}
.Form__btn--secondary:hover {
    background-color: rgba(0, 0, 0, 0.25);
}
.Form__btn--primary {
    background-color: #0067b8;
    color: #fff;
}
.Form__btn--primary:hover {
    background-color: #005da6;
}`,
  },
  {
    id: 222,
    name: "Contact Form",
    preview: (
      <div className="fm-222">
        <div className="fm-222__title">Contact us</div>
        <div className="fm-222__sub">
          We'll get back to you within 24 hours.
        </div>
        <input className="fm-222__input" type="text" placeholder="Full name" />
        <input className="fm-222__input" type="email" placeholder="Email" />
        <textarea
          className="fm-222__textarea"
          placeholder="Your message"
        ></textarea>
        <button className="fm-222__btn">Send message</button>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Contact us</div>
    <div class="Form__sub">We'll get back to you within 24 hours.</div>
    <input class="Form__input" type="text" placeholder="Full name" />
    <input class="Form__input" type="email" placeholder="Email" />
    <textarea class="Form__textarea" placeholder="Your message"></textarea>
    <button class="Form__btn">Send message</button>
</div>`,
    css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 20px;
    width: 220px;
    display: flex;
    flex-direction: column;
    gap: 9px;
    transform: scale(0.78);
    box-sizing: border-box;
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
}
.Form__sub {
    font-size: 11px;
    color: #71717a;
    margin-bottom: 2px;
}
.Form__input,
.Form__textarea {
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 8px 10px;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
    width: 100%;
}
.Form__input:focus,
.Form__textarea:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder,
.Form__textarea::placeholder {
    color: #52525b;
}
.Form__textarea {
    height: 60px;
    resize: none;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
}
.Form__btn:hover {
    background: #6d28d9;
}`,
  },
  {
    id: 223,
    name: "Reset Password",
    preview: (
      <div className="fm-223">
        <div className="fm-223__title">Reset password</div>
        <div className="fm-223__sub">
          Enter your email to receive a reset link.
        </div>
        <input
          className="fm-223__input"
          type="email"
          placeholder="Email address"
        />
        <button className="fm-223__btn">Send reset link</button>
        <div className="fm-223__back">
          <a href="#">Back to sign in</a>
        </div>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Reset password</div>
    <div class="Form__sub">Enter your email to receive a reset link.</div>
    <input class="Form__input" type="email" placeholder="Email address" />
    <button class="Form__btn">Send reset link</button>
    <div class="Form__back"><a href="#">Back to sign in</a></div>
</div>`,
    css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 22px 20px;
    width: 220px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transform: scale(0.82);
    box-sizing: border-box;
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
}
.Form__sub {
    font-size: 11px;
    color: #71717a;
    margin-bottom: 2px;
}
.Form__input {
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 9px 10px;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
    width: 100%;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
}
.Form__btn:hover {
    background: #6d28d9;
}
.Form__back {
    text-align: center;
    font-size: 11px;
}
.Form__back a {
    color: #a855f7;
    text-decoration: none;
}`,
  },
  {
    id: 224,
    name: "Subscribe Form",
    preview: (
      <div className="fm-224">
        <div className="fm-224__title">Stay in the loop</div>
        <div className="fm-224__sub">Get the latest updates in your inbox.</div>
        <div className="fm-224__row">
          <input
            className="fm-224__input"
            type="email"
            placeholder="Enter your email"
          />
          <button className="fm-224__btn">Subscribe</button>
        </div>
        <div className="fm-224__note">No spam, unsubscribe at any time.</div>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Stay in the loop</div>
    <div class="Form__sub">Get the latest updates in your inbox.</div>
    <div class="Form__row">
        <input class="Form__input" type="email" placeholder="Enter your email" />
        <button class="Form__btn">Subscribe</button>
    </div>
    <div class="Form__note">No spam, unsubscribe at any time.</div>
</div>`,
    css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 20px;
    width: 240px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    transform: scale(0.8);
    box-sizing: border-box;
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
}
.Form__sub {
    font-size: 11px;
    color: #71717a;
    margin-bottom: 2px;
}
.Form__row {
    display: flex;
    gap: 6px;
}
.Form__input {
    flex: 1;
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 8px 10px;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    min-width: 0;
    transition: border-color 0.2s;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    white-space: nowrap;
    transition: background 0.2s;
}
.Form__btn:hover {
    background: #6d28d9;
}
.Form__note {
    font-size: 10px;
    color: #52525b;
}`,
  },
  {
    id: 225,
    name: "Two Factor",
    preview: (
      <div className="fm-225">
        <div className="fm-225__title">Two-step verification</div>
        <div className="fm-225__sub">
          Enter the 6-digit code sent to your phone.
        </div>
        <div className="fm-225__inputs">
          <input className="fm-225__box" type="text" maxLength={1} />
          <input className="fm-225__box" type="text" maxLength={1} />
          <input className="fm-225__box" type="text" maxLength={1} />
          <input className="fm-225__box" type="text" maxLength={1} />
          <input className="fm-225__box" type="text" maxLength={1} />
          <input className="fm-225__box" type="text" maxLength={1} />
        </div>
        <button className="fm-225__btn">Verify</button>
        <div className="fm-225__resend">
          <a href="#">Resend code</a>
        </div>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Two-step verification</div>
    <div class="Form__sub">Enter the 6-digit code sent to your phone.</div>
    <div class="Form__inputs">
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
    </div>
    <button class="Form__btn">Verify</button>
    <div class="Form__resend"><a href="#">Resend code</a></div>
</div>`,
    css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 22px 20px;
    width: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    transform: scale(0.8);
    box-sizing: border-box;
}
.Form__title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    text-align: center;
}
.Form__sub {
    font-size: 11px;
    color: #71717a;
    text-align: center;
    margin-bottom: 2px;
}
.Form__inputs {
    display: flex;
    gap: 6px;
}
.Form__box {
    width: 34px;
    height: 38px;
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    border-radius: 7px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
}
.Form__box:focus {
    border-color: #7c3aed;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    width: 100%;
    transition: background 0.2s;
}
.Form__btn:hover {
    background: #6d28d9;
}
.Form__resend {
    font-size: 11px;
}
.Form__resend a {
    color: #a855f7;
    text-decoration: none;
}`,
  },
  {
    id: 226,
    name: "Checkout Form",
    preview: (
      <div className="fm-226">
        <div className="fm-226__title">Payment</div>
        <input
          className="fm-226__input"
          type="text"
          placeholder="Cardholder name"
        />
        <input
          className="fm-226__input"
          type="text"
          placeholder="Card number"
        />
        <div className="fm-226__row">
          <input
            className="fm-226__input fm-226__input--half"
            type="text"
            placeholder="MM / YY"
          />
          <input
            className="fm-226__input fm-226__input--half"
            type="text"
            placeholder="CVC"
          />
        </div>
        <button className="fm-226__btn">Pay now</button>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Payment</div>
    <input class="Form__input" type="text" placeholder="Cardholder name" />
    <input class="Form__input" type="text" placeholder="Card number" />
    <div class="Form__row">
        <input class="Form__input Form__input--half" type="text" placeholder="MM / YY" />
        <input class="Form__input Form__input--half" type="text" placeholder="CVC" />
    </div>
    <button class="Form__btn">Pay now</button>
</div>`,
    css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 20px;
    width: 220px;
    display: flex;
    flex-direction: column;
    gap: 9px;
    transform: scale(0.8);
    box-sizing: border-box;
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 2px;
}
.Form__input {
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 8px 10px;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
    width: 100%;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__row {
    display: flex;
    gap: 8px;
}
.Form__input--half {
    width: calc(50% - 4px);
}
.Form__btn {
    background: #22c55e;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 7px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    margin-top: 2px;
}
.Form__btn:hover {
    background: #16a34a;
}`,
  },
  {
    id: 227,
    name: "Profile Form",
    preview: (
      <div className="fm-227">
        <div className="fm-227__title">Edit profile</div>
        <div className="fm-227__avatar">A</div>
        <input className="fm-227__input" type="text" placeholder="Full name" />
        <input className="fm-227__input" type="email" placeholder="Email" />
        <input className="fm-227__input" type="text" placeholder="Username" />
        <button className="fm-227__btn">Save changes</button>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Edit profile</div>
    <div class="Form__avatar">A</div>
    <input class="Form__input" type="text" placeholder="Full name" />
    <input class="Form__input" type="email" placeholder="Email" />
    <input class="Form__input" type="text" placeholder="Username" />
    <button class="Form__btn">Save changes</button>
</div>`,
    css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 20px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
    transform: scale(0.8);
    box-sizing: border-box;
}
.Form__title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    align-self: flex-start;
}
.Form__avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 15px;
    color: #fff;
    margin: 4px 0;
}
.Form__input {
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 8px 10px;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
    width: 100%;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    width: 100%;
    transition: background 0.2s;
}
.Form__btn:hover {
    background: #6d28d9;
}`,
  },
  {
    id: 228,
    name: "Search Form",
    preview: (
      <div className="fm-228">
        <div className="fm-228__title">Search</div>
        <div className="fm-228__wrap">
          <input
            className="fm-228__input"
            type="text"
            placeholder="Search for anything..."
          />
          <button className="fm-228__btn">Search</button>
        </div>
        <div className="fm-228__tags">
          <span>Design</span>
          <span>React</span>
          <span>CSS</span>
          <span>UI</span>
        </div>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Search</div>
    <div class="Form__wrap">
        <input class="Form__input" type="text" placeholder="Search for anything..." />
        <button class="Form__btn">Search</button>
    </div>
    <div class="Form__tags">
        <span>Design</span>
        <span>React</span>
        <span>CSS</span>
        <span>UI</span>
    </div>
</div>`,
    css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 20px;
    width: 230px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transform: scale(0.82);
    box-sizing: border-box;
}
.Form__title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
}
.Form__wrap {
    display: flex;
    gap: 6px;
}
.Form__input {
    flex: 1;
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 8px 10px;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    min-width: 0;
    transition: border-color 0.2s;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
}
.Form__btn:hover {
    background: #6d28d9;
}
.Form__tags {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
}
.Form__tags span {
    background: rgba(124, 58, 237, 0.12);
    color: #a855f7;
    font-size: 10px;
    padding: 3px 10px;
    border-radius: 999px;
    border: 1px solid rgba(124, 58, 237, 0.25);
    cursor: pointer;
}`,
  },
  {
    id: 229,
    name: "Feedback Form",
    preview: (
      <div className="fm-229">
        <div className="fm-229__title">Leave feedback</div>
        <div className="fm-229__stars">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
        <textarea
          className="fm-229__textarea"
          placeholder="Tell us what you think..."
        ></textarea>
        <button className="fm-229__btn">Submit</button>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Leave feedback</div>
    <div class="Form__stars">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
    </div>
    <textarea class="Form__textarea" placeholder="Tell us what you think..."></textarea>
    <button class="Form__btn">Submit</button>
</div>`,
    css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 20px;
    width: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    transform: scale(0.82);
    box-sizing: border-box;
}
.Form__title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    align-self: flex-start;
}
.Form__stars {
    display: flex;
    gap: 4px;
}
.Form__stars span {
    font-size: 20px;
    color: #f59e0b;
    cursor: pointer;
}
.Form__textarea {
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 8px 10px;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    height: 60px;
    resize: none;
    width: 100%;
    transition: border-color 0.2s;
    box-sizing: border-box;
}
.Form__textarea:focus {
    border-color: #7c3aed;
}
.Form__textarea::placeholder {
    color: #52525b;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    width: 100%;
    transition: background 0.2s;
}
.Form__btn:hover {
    background: #6d28d9;
}`,
  },
  {
    id: 230,
    name: "Delete Account",
    preview: (
      <div className="fm-230">
        <div className="fm-230__title">Delete account</div>
        <div className="fm-230__sub">
          This action is permanent and cannot be undone.
        </div>
        <input
          className="fm-230__input"
          type="password"
          placeholder="Enter your password"
        />
        <div className="fm-230__check">
          <input type="checkbox" id="fm230-confirm" />
          <label htmlFor="fm230-confirm">I understand this is permanent</label>
        </div>
        <button className="fm-230__btn">Delete my account</button>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Delete account</div>
    <div class="Form__sub">This action is permanent and cannot be undone.</div>
    <input class="Form__input" type="password" placeholder="Enter your password" />
    <div class="Form__check">
        <input type="checkbox" id="form-confirm" />
        <label for="form-confirm">I understand this is permanent</label>
    </div>
    <button class="Form__btn">Delete my account</button>
</div>`,
    css: `.Form {
    background: #18181b;
    border: 1px solid rgba(248, 113, 113, 0.2);
    border-radius: 12px;
    padding: 20px;
    width: 220px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transform: scale(0.82);
    box-sizing: border-box;
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #f87171;
}
.Form__sub {
    font-size: 11px;
    color: #71717a;
    margin-bottom: 2px;
}
.Form__input {
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 8px 10px;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
    width: 100%;
}
.Form__input:focus {
    border-color: #f87171;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__check {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: #a1a1aa;
}
.Form__check input {
    accent-color: #f87171;
    cursor: pointer;
}
.Form__check label {
    cursor: pointer;
}
.Form__btn {
    background: #ef4444;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
}
.Form__btn:hover {
    background: #dc2626;
}`,
  },
  {
    id: 231,
    name: "Login Form",
    preview: (
      <div className="fm-231">
        <p className="fm-231__heading">Login</p>
        <div className="fm-231__input-container">
          <input placeholder="Username" className="fm-231__input" type="text" />
        </div>
        <div className="fm-231__input-container">
          <input
            placeholder="Password"
            className="fm-231__input"
            type="password"
          />
        </div>
        <button className="fm-231__btn">Submit</button>
        <div className="fm-231__signup">
          <p>Don't have any account?</p>
          <a href="#">Sign up</a>
        </div>
      </div>
    ),
    html: `<div class="Form">
    <p class="Form__heading">Login</p>
    <div class="Form__input-container">
        <input placeholder="Username" class="Form__input" type="text" />
    </div>
    <div class="Form__input-container">
        <input placeholder="Password" class="Form__input" type="password" />
    </div>
    <button class="Form__btn">Submit</button>
    <div class="Form__signup">
        <p>Don't have any account?</p>
        <a href="#">Sign up</a>
    </div>
</div>`,
    css: `.Form {
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 24px;
    border-radius: 30px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.062);
    box-sizing: border-box;
}
.Form__heading {
    font-size: 2em;
    color: #2e2e2e;
    font-weight: 700;
    margin: 10px 0 20px 0;
}
.Form__input-container {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Form__input {
    width: 100%;
    height: 38px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid rgb(173, 173, 173);
    border-radius: 30px;
    margin: 8px 0;
    color: black;
    font-size: 0.8em;
    font-weight: 500;
    box-sizing: border-box;
    padding-left: 16px;
    outline: none;
    font-family: inherit;
}
.Form__input:focus {
    border-bottom: 2px solid rgb(199, 114, 255);
}
.Form__input::placeholder {
    color: rgb(80, 80, 80);
    font-size: 1em;
    font-weight: 500;
}
.Form__btn {
    position: relative;
    width: 100%;
    border: 2px solid #8000ff;
    background-color: #8000ff;
    height: 38px;
    color: white;
    font-size: 0.8em;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 30px;
    margin: 10px 0;
    cursor: pointer;
    overflow: hidden;
    font-family: inherit;
}
.Form__btn::after {
    content: "";
    position: absolute;
    background-color: rgba(255, 255, 255, 0.253);
    height: 100%;
    width: 150px;
    top: 0;
    left: -200px;
    border-bottom-right-radius: 100px;
    border-top-left-radius: 100px;
    filter: blur(10px);
    transition-duration: 0.5s;
}
.Form__btn:hover::after {
    transform: translateX(600px);
    transition-duration: 0.5s;
}
.Form__signup {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.Form__signup p {
    font-size: 0.85em;
    font-weight: 500;
    color: black;
    margin: 0;
}
.Form__signup a {
    font-size: 0.7em;
    font-weight: 500;
    background-color: #2e2e2e;
    color: white;
    text-decoration: none;
    padding: 7px 14px;
    border-radius: 20px;
}`,
  },
  {
    id: 232,
    name: "Login Form",
    preview: (
      <div className="fm-232">
        <p className="fm-232__heading">Login</p>
        <input className="fm-232__input" placeholder="Username" type="text" />
        <input
          className="fm-232__input"
          placeholder="Password"
          type="password"
        />
        <button className="fm-232__btn">Submit</button>
      </div>
    ),
    html: `<div class="Form">
    <p class="Form__heading">Login</p>
    <input class="Form__input" placeholder="Username" type="text" />
    <input class="Form__input" placeholder="Password" type="password" />
    <button class="Form__btn">Submit</button>
</div>`,
    css: `.Form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    padding: 2em;
    border-radius: 25px;
    transition: 0.4s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
    width: 220px;
    box-sizing: border-box;
}
.Form:hover {
    transform: translateX(-0.5em) translateY(-0.5em);
    border: 1px solid #171717;
    box-shadow: 10px 10px 0px #666666;
}
.Form__heading {
    color: black;
    padding-bottom: 1em;
    text-align: center;
    font-weight: bold;
    margin: 0;
    font-size: 15px;
}
.Form__input {
    border-radius: 5px;
    border: 1px solid whitesmoke;
    background-color: whitesmoke;
    outline: none;
    padding: 0.6em;
    transition: 0.4s ease-in-out;
    font-family: inherit;
    font-size: 13px;
}
.Form__input:hover {
    box-shadow: 6px 6px 0px #969696, -3px -3px 10px #ffffff;
}
.Form__input:focus {
    background: #ffffff;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
}
.Form__btn {
    margin-top: 1em;
    align-self: center;
    padding: 0.6em 1.2em;
    border-radius: 10px;
    border: none;
    color: black;
    transition: 0.4s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 1px;
    cursor: pointer;
    font-family: inherit;
    font-size: 13px;
    background: #fff;
}
.Form__btn:hover {
    box-shadow: 6px 6px 0px #969696, -3px -3px 10px #ffffff;
    transform: translateX(-0.5em) translateY(-0.5em);
}
.Form__btn:active {
    transition: 0.2s;
    transform: translateX(0) translateY(0);
    box-shadow: none;
}`,
  },
  {
    id: 233,
    name: "Contact Form",
    preview: (
      <div className="fm-233">
        <div className="fm-233__flex">
          <label className="fm-233__label">
            <input
              required
              placeholder=""
              type="text"
              className="fm-233__input"
            />
            <span>first name</span>
          </label>
          <label className="fm-233__label">
            <input
              required
              placeholder=""
              type="text"
              className="fm-233__input"
            />
            <span>last name</span>
          </label>
        </div>
        <label className="fm-233__label">
          <input
            required
            placeholder=""
            type="email"
            className="fm-233__input"
          />
          <span>email</span>
        </label>
        <label className="fm-233__label">
          <input required placeholder="" type="tel" className="fm-233__input" />
          <span>contact number</span>
        </label>
        <label className="fm-233__label">
          <textarea
            required
            rows={3}
            placeholder=""
            className="fm-233__textarea"
          ></textarea>
          <span>message</span>
        </label>
        <button className="fm-233__fancy">
          <span className="fm-233__top-key"></span>
          <span className="fm-233__text">submit</span>
          <span className="fm-233__bottom-key-1"></span>
          <span className="fm-233__bottom-key-2"></span>
        </button>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__flex">
        <label class="Form__label">
            <input required placeholder="" type="text" class="Form__input" />
            <span>first name</span>
        </label>
        <label class="Form__label">
            <input required placeholder="" type="text" class="Form__input" />
            <span>last name</span>
        </label>
    </div>
    <label class="Form__label">
        <input required placeholder="" type="email" class="Form__input" />
        <span>email</span>
    </label>
    <label class="Form__label">
        <input required placeholder="" type="tel" class="Form__input" />
        <span>contact number</span>
    </label>
    <label class="Form__label">
        <textarea required rows="3" placeholder="" class="Form__textarea"></textarea>
        <span>message</span>
    </label>
    <button class="Form__fancy">
        <span class="Form__top-key"></span>
        <span class="Form__text">submit</span>
        <span class="Form__bottom-key-1"></span>
        <span class="Form__bottom-key-2"></span>
    </button>
</div>`,
    css: `.Form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 280px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
}
.Form__flex {
    display: flex;
    width: 100%;
    gap: 6px;
}
.Form__label {
    position: relative;
    display: block;
    width: 100%;
}
.Form__input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 5px;
    font-family: inherit;
    font-size: 13px;
    box-sizing: border-box;
}
.Form__label .Form__input+span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.85em;
    cursor: text;
    transition: 0.3s ease;
    pointer-events: none;
}
.Form__label .Form__input:placeholder-shown+span {
    top: 15px;
    font-size: 0.85em;
}
.Form__label .Form__input:focus+span,
.Form__label .Form__input:valid+span {
    top: 28px;
    font-size: 0.65em;
    font-weight: 600;
}
.Form__label .Form__input:valid+span {
    color: green;
}
.Form__textarea {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 5px;
    font-family: inherit;
    font-size: 13px;
    box-sizing: border-box;
    resize: none;
}
.Form__label .Form__textarea+span {
    position: absolute;
    left: 10px;
    top: 12px;
    color: grey;
    font-size: 0.85em;
    cursor: text;
    transition: 0.3s ease;
    pointer-events: none;
}
.Form__label .Form__textarea:focus+span,
.Form__label .Form__textarea:valid+span {
    top: 46px;
    font-size: 0.65em;
    font-weight: 600;
}
.Form__label .Form__textarea:valid+span {
    color: green;
}
.Form__fancy {
    background-color: transparent;
    border: 2px solid #cacaca;
    border-radius: 0;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    font-weight: 390;
    letter-spacing: 2px;
    margin: 0;
    outline: none;
    overflow: visible;
    padding: 8px 30px;
    position: relative;
    text-align: center;
    transition: all 0.3s ease-in-out;
    font-size: 13px;
    background: #fff;
}
.Form__fancy::before {
    content: " ";
    width: 1.7rem;
    height: 2px;
    background: #cacaca;
    top: 50%;
    left: 1.5em;
    position: absolute;
    transform: translateX(230%);
    transition: background 0.3s linear, width 0.3s linear;
}
.Form__text {
    font-size: 1em;
    line-height: 1.33em;
    padding-left: 2em;
    display: block;
    text-align: left;
    transition: all 0.3s ease-in-out;
    text-transform: lowercase;
    color: #818181;
    transform: translateX(30%);
}
.Form__top-key {
    height: 2px;
    width: 1.5625rem;
    top: -2px;
    left: 0.625rem;
    position: absolute;
    background: white;
    transition: width 0.5s ease-out, left 0.3s ease-out;
}
.Form__bottom-key-1 {
    height: 2px;
    width: 1.5625rem;
    right: 1.875rem;
    bottom: -2px;
    position: absolute;
    background: white;
    transition: width 0.5s ease-out, right 0.3s ease-out;
}
.Form__bottom-key-2 {
    height: 2px;
    width: 0.625rem;
    right: 0.625rem;
    bottom: -2px;
    position: absolute;
    background: white;
    transition: width 0.5s ease-out, right 0.3s ease-out;
}
.Form__fancy:hover {
    background: #cacaca;
}
.Form__fancy:hover::before {
    width: 1.5rem;
    background: white;
}
.Form__fancy:hover .Form__text {
    color: white;
    padding-left: 1.5em;
}
.Form__fancy:hover .Form__top-key {
    left: -2px;
    width: 0;
}
.Form__fancy:hover .Form__bottom-key-1,
.Form__fancy:hover .Form__bottom-key-2 {
    right: 0;
    width: 0;
}`,
  },
  {
    id: 234,
    name: "Sign In Form",
    preview: (
      <div className="fm-234">
        <div className="fm-234__title">Sign in</div>
        <input
          className="fm-234__input"
          type="email"
          placeholder="Email address"
        />
        <input
          className="fm-234__input"
          type="password"
          placeholder="Password"
        />
        <div className="fm-234__forgot">
          <a href="#">Forgot password?</a>
        </div>
        <button className="fm-234__btn">Sign in</button>
        <div className="fm-234__footer">
          New here? <a href="#">Create account</a>
        </div>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Sign in</div>
    <input class="Form__input" type="email" placeholder="Email address" />
    <input class="Form__input" type="password" placeholder="Password" />
    <div class="Form__forgot"><a href="#">Forgot password?</a></div>
    <button class="Form__btn">Sign in</button>
    <div class="Form__footer">New here? <a href="#">Create account</a></div>
</div>`,
    css: `.Form {
    background: #fff;
    border-radius: 12px;
    padding: 24px 20px;
    width: 240px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
.Form__title {
    font-size: 18px;
    font-weight: 700;
    color: #111;
    margin-bottom: 4px;
}
.Form__input {
    width: 100%;
    padding: 9px 12px;
    border: 1.5px solid #e5e5e5;
    border-radius: 8px;
    font-size: 13px;
    outline: none;
    color: #111;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
}
.Form__input:focus {
    border-color: #6366f1;
}
.Form__input::placeholder {
    color: #aaa;
}
.Form__forgot {
    text-align: right;
}
.Form__forgot a {
    font-size: 11px;
    color: #6366f1;
    text-decoration: none;
}
.Form__btn {
    background: #6366f1;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #4f46e5;
}
.Form__footer {
    font-size: 11px;
    color: #888;
    text-align: center;
}
.Form__footer a {
    color: #6366f1;
    text-decoration: none;
    font-weight: 600;
}`,
  },
  {
    id: 235,
    name: "Register Form",
    preview: (
      <div className="fm-235">
        <div className="fm-235__title">Create account</div>
        <div className="fm-235__row">
          <input
            className="fm-235__input"
            type="text"
            placeholder="First name"
          />
          <input
            className="fm-235__input"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="fm-235__input fm-235__input--full"
          type="email"
          placeholder="Email"
        />
        <input
          className="fm-235__input fm-235__input--full"
          type="password"
          placeholder="Password"
        />
        <button className="fm-235__btn">Register</button>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Create account</div>
    <div class="Form__row">
        <input class="Form__input" type="text" placeholder="First name" />
        <input class="Form__input" type="text" placeholder="Last name" />
    </div>
    <input class="Form__input Form__input--full" type="email" placeholder="Email" />
    <input class="Form__input Form__input--full" type="password" placeholder="Password" />
    <button class="Form__btn">Register</button>
</div>`,
    css: `.Form {
    background: #fff;
    border-radius: 12px;
    padding: 22px 18px;
    width: 240px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
.Form__title {
    font-size: 16px;
    font-weight: 700;
    color: #111;
    margin-bottom: 4px;
}
.Form__row {
    display: flex;
    gap: 6px;
}
.Form__input {
    flex: 1;
    padding: 8px 10px;
    border: 1.5px solid #e5e5e5;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    color: #111;
    font-family: inherit;
    transition: border-color 0.2s;
    min-width: 0;
    box-sizing: border-box;
}
.Form__input--full {
    width: 100%;
    flex: none;
}
.Form__input:focus {
    border-color: #6366f1;
}
.Form__input::placeholder {
    color: #aaa;
}
.Form__btn {
    background: #6366f1;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
    margin-top: 2px;
}
.Form__btn:hover {
    background: #4f46e5;
}`,
  },
  {
    id: 236,
    name: "Contact Form",
    preview: (
      <div className="fm-236">
        <div className="fm-236__title">Get in touch</div>
        <input className="fm-236__input" type="text" placeholder="Your name" />
        <input
          className="fm-236__input"
          type="email"
          placeholder="Email address"
        />
        <input className="fm-236__input" type="text" placeholder="Subject" />
        <textarea
          className="fm-236__textarea"
          placeholder="Your message"
        ></textarea>
        <button className="fm-236__btn">Send message</button>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Get in touch</div>
    <input class="Form__input" type="text" placeholder="Your name" />
    <input class="Form__input" type="email" placeholder="Email address" />
    <input class="Form__input" type="text" placeholder="Subject" />
    <textarea class="Form__textarea" placeholder="Your message"></textarea>
    <button class="Form__btn">Send message</button>
</div>`,
    css: `.Form {
    background: #fff;
    border-radius: 12px;
    padding: 22px 18px;
    width: 240px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
.Form__title {
    font-size: 16px;
    font-weight: 700;
    color: #111;
    margin-bottom: 4px;
}
.Form__input {
    width: 100%;
    padding: 8px 10px;
    border: 1.5px solid #e5e5e5;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    color: #111;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
}
.Form__input:focus {
    border-color: #10b981;
}
.Form__input::placeholder {
    color: #aaa;
}
.Form__textarea {
    width: 100%;
    padding: 8px 10px;
    border: 1.5px solid #e5e5e5;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    color: #111;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
    height: 60px;
    resize: none;
}
.Form__textarea:focus {
    border-color: #10b981;
}
.Form__textarea::placeholder {
    color: #aaa;
}
.Form__btn {
    background: #10b981;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #059669;
}`,
  },
  {
    id: 237,
    name: "Newsletter Form",
    preview: (
      <div className="fm-237">
        <div className="fm-237__title">Newsletter</div>
        <div className="fm-237__sub">
          Get weekly updates delivered to your inbox.
        </div>
        <input className="fm-237__input" type="text" placeholder="Your name" />
        <input
          className="fm-237__input"
          type="email"
          placeholder="Email address"
        />
        <button className="fm-237__btn">Subscribe</button>
        <div className="fm-237__note">Unsubscribe anytime.</div>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Newsletter</div>
    <div class="Form__sub">Get weekly updates delivered to your inbox.</div>
    <input class="Form__input" type="text" placeholder="Your name" />
    <input class="Form__input" type="email" placeholder="Email address" />
    <button class="Form__btn">Subscribe</button>
    <div class="Form__note">Unsubscribe anytime.</div>
</div>`,
    css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 22px 18px;
    width: 230px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    box-sizing: border-box;
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
}
.Form__sub {
    font-size: 11px;
    color: #71717a;
    margin-bottom: 2px;
}
.Form__input {
    width: 100%;
    padding: 8px 10px;
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    color: #fff;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #6d28d9;
}
.Form__note {
    font-size: 10px;
    color: #52525b;
    text-align: center;
}`,
  },
  {
    id: 238,
    name: "Forgot Password",
    preview: (
      <div className="fm-238">
        <div className="fm-238__title">Forgot password</div>
        <div className="fm-238__sub">
          Enter your email and we will send you a link to reset your password.
        </div>
        <input
          className="fm-238__input"
          type="email"
          placeholder="Email address"
        />
        <button className="fm-238__btn">Send link</button>
        <div className="fm-238__footer">
          <a href="#">Back to login</a>
        </div>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Forgot password</div>
    <div class="Form__sub">Enter your email and we will send you a link to reset your password.</div>
    <input class="Form__input" type="email" placeholder="Email address" />
    <button class="Form__btn">Send link</button>
    <div class="Form__footer"><a href="#">Back to login</a></div>
</div>`,
    css: `.Form {
    background: #fff;
    border-radius: 12px;
    padding: 24px 20px;
    width: 240px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
.Form__title {
    font-size: 16px;
    font-weight: 700;
    color: #111;
}
.Form__sub {
    font-size: 11px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 2px;
}
.Form__input {
    width: 100%;
    padding: 9px 12px;
    border: 1.5px solid #e5e5e5;
    border-radius: 8px;
    font-size: 13px;
    outline: none;
    color: #111;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
}
.Form__input:focus {
    border-color: #f59e0b;
}
.Form__input::placeholder {
    color: #aaa;
}
.Form__btn {
    background: #f59e0b;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #d97706;
}
.Form__footer {
    text-align: center;
}
.Form__footer a {
    font-size: 11px;
    color: #6366f1;
    text-decoration: none;
}`,
  },
  {
    id: 239,
    name: "Checkout Form",
    preview: (
      <div className="fm-239">
        <div className="fm-239__title">Checkout</div>
        <input className="fm-239__input" type="text" placeholder="Full name" />
        <input className="fm-239__input" type="text" placeholder="Address" />
        <div className="fm-239__row">
          <input className="fm-239__input" type="text" placeholder="City" />
          <input className="fm-239__input" type="text" placeholder="ZIP" />
        </div>
        <input
          className="fm-239__input fm-239__input--full"
          type="text"
          placeholder="Card number"
        />
        <div className="fm-239__row">
          <input className="fm-239__input" type="text" placeholder="MM / YY" />
          <input className="fm-239__input" type="text" placeholder="CVC" />
        </div>
        <button className="fm-239__btn">Pay now</button>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Checkout</div>
    <input class="Form__input" type="text" placeholder="Full name" />
    <input class="Form__input" type="text" placeholder="Address" />
    <div class="Form__row">
        <input class="Form__input" type="text" placeholder="City" />
        <input class="Form__input" type="text" placeholder="ZIP" />
    </div>
    <input class="Form__input Form__input--full" type="text" placeholder="Card number" />
    <div class="Form__row">
        <input class="Form__input" type="text" placeholder="MM / YY" />
        <input class="Form__input" type="text" placeholder="CVC" />
    </div>
    <button class="Form__btn">Pay now</button>
</div>`,
    css: `.Form {
    background: #fff;
    border-radius: 12px;
    padding: 20px 18px;
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #111;
    margin-bottom: 4px;
}
.Form__row {
    display: flex;
    gap: 6px;
}
.Form__input {
    flex: 1;
    padding: 7px 9px;
    border: 1.5px solid #e5e5e5;
    border-radius: 7px;
    font-size: 11px;
    outline: none;
    color: #111;
    font-family: inherit;
    transition: border-color 0.2s;
    min-width: 0;
    box-sizing: border-box;
}
.Form__input--full {
    width: 100%;
    flex: none;
}
.Form__input:focus {
    border-color: #22c55e;
}
.Form__input::placeholder {
    color: #aaa;
}
.Form__btn {
    background: #22c55e;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
    margin-top: 4px;
}
.Form__btn:hover {
    background: #16a34a;
}`,
  },
  {
    id: 240,
    name: "Profile Settings",
    preview: (
      <div className="fm-240">
        <div className="fm-240__title">Profile settings</div>
        <div className="fm-240__avatar">A</div>
        <input
          className="fm-240__input"
          type="text"
          placeholder="Display name"
        />
        <input
          className="fm-240__input"
          type="email"
          placeholder="Email address"
        />
        <input className="fm-240__input" type="text" placeholder="Bio" />
        <button className="fm-240__btn">Save changes</button>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Profile settings</div>
    <div class="Form__avatar">A</div>
    <input class="Form__input" type="text" placeholder="Display name" />
    <input class="Form__input" type="email" placeholder="Email address" />
    <input class="Form__input" type="text" placeholder="Bio" />
    <button class="Form__btn">Save changes</button>
</div>`,
    css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 20px 18px;
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    box-sizing: border-box;
}
.Form__title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    align-self: flex-start;
}
.Form__avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    color: #fff;
    margin: 4px 0;
}
.Form__input {
    width: 100%;
    padding: 8px 10px;
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    color: #fff;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #6d28d9;
}`,
  },
  {
    id: 241,
    name: "OTP Form",
    preview: (
      <div className="fm-241">
        <div className="fm-241__title">Verify your email</div>
        <div className="fm-241__sub">
          Enter the 6-digit code we sent to your email.
        </div>
        <div className="fm-241__boxes">
          <input className="fm-241__box" type="text" maxLength={1} />
          <input className="fm-241__box" type="text" maxLength={1} />
          <input className="fm-241__box" type="text" maxLength={1} />
          <input className="fm-241__box" type="text" maxLength={1} />
          <input className="fm-241__box" type="text" maxLength={1} />
          <input className="fm-241__box" type="text" maxLength={1} />
        </div>
        <button className="fm-241__btn">Verify</button>
        <div className="fm-241__resend">
          <a href="#">Resend code</a>
        </div>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Verify your email</div>
    <div class="Form__sub">Enter the 6-digit code we sent to your email.</div>
    <div class="Form__boxes">
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
    </div>
    <button class="Form__btn">Verify</button>
    <div class="Form__resend"><a href="#">Resend code</a></div>
</div>`,
    css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 22px 18px;
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
}
.Form__title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    text-align: center;
}
.Form__sub {
    font-size: 11px;
    color: #71717a;
    text-align: center;
    margin-bottom: 2px;
}
.Form__boxes {
    display: flex;
    gap: 6px;
}
.Form__box {
    width: 32px;
    height: 36px;
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    border-radius: 6px;
    text-align: center;
    font-size: 15px;
    font-weight: 700;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
}
.Form__box:focus {
    border-color: #7c3aed;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #6d28d9;
}
.Form__resend {
    font-size: 11px;
}
.Form__resend a {
    color: #a855f7;
    text-decoration: none;
}`,
  },
  {
    id: 242,
    name: "Job Application",
    preview: (
      <div className="fm-242">
        <div className="fm-242__title">Apply now</div>
        <input className="fm-242__input" type="text" placeholder="Full name" />
        <input className="fm-242__input" type="email" placeholder="Email" />
        <input
          className="fm-242__input"
          type="text"
          placeholder="LinkedIn URL"
        />
        <select className="fm-242__select">
          <option value="">Select role</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Designer</option>
        </select>
        <textarea
          className="fm-242__textarea"
          placeholder="Why do you want to join?"
        ></textarea>
        <button className="fm-242__btn">Submit application</button>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Apply now</div>
    <input class="Form__input" type="text" placeholder="Full name" />
    <input class="Form__input" type="email" placeholder="Email" />
    <input class="Form__input" type="text" placeholder="LinkedIn URL" />
    <select class="Form__select">
        <option value="">Select role</option>
        <option>Frontend Developer</option>
        <option>Backend Developer</option>
        <option>Designer</option>
    </select>
    <textarea class="Form__textarea" placeholder="Why do you want to join?"></textarea>
    <button class="Form__btn">Submit application</button>
</div>`,
    css: `.Form {
    background: #fff;
    border-radius: 12px;
    padding: 20px 18px;
    width: 240px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #111;
    margin-bottom: 2px;
}
.Form__input,
.Form__select,
.Form__textarea {
    width: 100%;
    padding: 8px 10px;
    border: 1.5px solid #e5e5e5;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    color: #111;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
    background: #fff;
}
.Form__input:focus,
.Form__select:focus,
.Form__textarea:focus {
    border-color: #6366f1;
}
.Form__input::placeholder,
.Form__textarea::placeholder {
    color: #aaa;
}
.Form__textarea {
    height: 50px;
    resize: none;
}
.Form__btn {
    background: #6366f1;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #4f46e5;
}`,
  },
  {
    id: 243,
    name: "Change Password",
    preview: (
      <div className="fm-243">
        <div className="fm-243__title">Change password</div>
        <input
          className="fm-243__input"
          type="password"
          placeholder="Current password"
        />
        <input
          className="fm-243__input"
          type="password"
          placeholder="New password"
        />
        <input
          className="fm-243__input"
          type="password"
          placeholder="Confirm new password"
        />
        <button className="fm-243__btn">Update password</button>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Change password</div>
    <input class="Form__input" type="password" placeholder="Current password" />
    <input class="Form__input" type="password" placeholder="New password" />
    <input class="Form__input" type="password" placeholder="Confirm new password" />
    <button class="Form__btn">Update password</button>
</div>`,
    css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 22px 18px;
    width: 220px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 2px;
}
.Form__input {
    width: 100%;
    padding: 9px 10px;
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    color: #fff;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
}
.Form__input:focus {
    border-color: #f87171;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    background: #f87171;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #ef4444;
}`,
  },
  {
    id: 244,
    name: "Survey Form",
    preview: (
      <div className="fm-244">
        <div className="fm-244__title">Quick survey</div>
        <div className="fm-244__question">How did you hear about us?</div>
        <div className="fm-244__options">
          <label className="fm-244__option">
            <input type="radio" name="fm244" />
            <span>Google</span>
          </label>
          <label className="fm-244__option">
            <input type="radio" name="fm244" />
            <span>Social media</span>
          </label>
          <label className="fm-244__option">
            <input type="radio" name="fm244" />
            <span>Friend</span>
          </label>
          <label className="fm-244__option">
            <input type="radio" name="fm244" />
            <span>Other</span>
          </label>
        </div>
        <textarea
          className="fm-244__textarea"
          placeholder="Any additional feedback?"
        ></textarea>
        <button className="fm-244__btn">Submit</button>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__title">Quick survey</div>
    <div class="Form__question">How did you hear about us?</div>
    <div class="Form__options">
        <label class="Form__option"><input type="radio" name="survey" /><span>Google</span></label>
        <label class="Form__option"><input type="radio" name="survey" /><span>Social media</span></label>
        <label class="Form__option"><input type="radio" name="survey" /><span>Friend</span></label>
        <label class="Form__option"><input type="radio" name="survey" /><span>Other</span></label>
    </div>
    <textarea class="Form__textarea" placeholder="Any additional feedback?"></textarea>
    <button class="Form__btn">Submit</button>
</div>`,
    css: `.Form {
    background: #fff;
    border-radius: 12px;
    padding: 20px 18px;
    width: 230px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #111;
}
.Form__question {
    font-size: 12px;
    font-weight: 600;
    color: #333;
}
.Form__options {
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.Form__option {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 12px;
    color: #444;
    cursor: pointer;
}
.Form__option input {
    accent-color: #6366f1;
    cursor: pointer;
}
.Form__textarea {
    width: 100%;
    padding: 8px 10px;
    border: 1.5px solid #e5e5e5;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    color: #111;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
    height: 50px;
    resize: none;
}
.Form__textarea:focus {
    border-color: #6366f1;
}
.Form__textarea::placeholder {
    color: #aaa;
}
.Form__btn {
    background: #6366f1;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #4f46e5;
}`,
  },
  {
    id: 245,
    name: "Gradient Login",
    preview: (
      <div className="fm-245">
        <p className="fm-245__title">Login</p>
        <div className="fm-245__input-box">
          <input required placeholder="Username" type="text" />
        </div>
        <div className="fm-245__input-box">
          <input required placeholder="Password" type="password" />
        </div>
        <div className="fm-245__remember">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="#">Forgot Password</a>
        </div>
        <button className="fm-245__btn">Login</button>
        <div className="fm-245__register">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </div>
    ),
    html: `<div class="Form">
    <p class="Form__title">Login</p>
    <div class="Form__input-box">
        <input required placeholder="Username" type="text" />
    </div>
    <div class="Form__input-box">
        <input required placeholder="Password" type="password" />
    </div>
    <div class="Form__remember">
        <label><input type="checkbox" /> Remember Me</label>
        <a href="#">Forgot Password</a>
    </div>
    <button class="Form__btn">Login</button>
    <div class="Form__register">
        <p>Don't have an account? <a href="#">Register</a></p>
    </div>
</div>`,
    css: `.Form {
    width: 260px;
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 9%, rgba(9, 9, 121, 1) 68%, rgba(0, 91, 255, 1) 97%);
    color: #fff;
    border-radius: 12px;
    padding: 24px 28px;
    box-sizing: border-box;
}
.Form__title {
    font-size: 26px;
    text-align: center;
    font-weight: 700;
    margin: 0 0 4px 0;
}
.Form__input-box {
    position: relative;
    width: 100%;
    height: 44px;
    margin: 16px 0;
}
.Form__input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    font-size: 13px;
    color: #fff;
    padding: 0 16px;
    outline: none;
    box-sizing: border-box;
    font-family: inherit;
}
.Form__input-box input::placeholder {
    color: rgba(255, 255, 255, 0.7);
}
.Form__remember {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin: -6px 0 12px;
    align-items: center;
}
.Form__remember label {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
}
.Form__remember label input {
    accent-color: #fff;
}
.Form__remember a {
    color: #fff;
    text-decoration: none;
    font-size: 12px;
}
.Form__remember a:hover {
    text-decoration: underline;
}
.Form__btn {
    display: block;
    width: 130px;
    height: 40px;
    background: #fff;
    border: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    margin: 8px auto 0;
    transition: opacity 0.2s;
    font-family: inherit;
}
.Form__btn:hover {
    opacity: 0.9;
}
.Form__register {
    font-size: 12px;
    text-align: center;
    margin-top: 16px;
}
.Form__register p {
    margin: 0;
}
.Form__register a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}
.Form__register a:hover {
    text-decoration: underline;
}`,
  },
  {
    id: 246,
    name: "Gradient Login",
    preview: (
      <div className="fm-246">
        <p className="fm-246__title">Login</p>
        <div className="fm-246__input-box">
          <input required placeholder="Username" type="text" />
        </div>
        <div className="fm-246__input-box">
          <input required placeholder="Password" type="password" />
        </div>
        <div className="fm-246__remember">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="#">Forgot Password</a>
        </div>
        <button className="fm-246__btn">Login</button>
        <div className="fm-246__register">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </div>
    ),
    html: `<div class="Form">
    <p class="Form__title">Login</p>
    <div class="Form__input-box">
        <input required placeholder="Username" type="text" />
    </div>
    <div class="Form__input-box">
        <input required placeholder="Password" type="password" />
    </div>
    <div class="Form__remember">
        <label><input type="checkbox" /> Remember Me</label>
        <a href="#">Forgot Password</a>
    </div>
    <button class="Form__btn">Login</button>
    <div class="Form__register">
        <p>Don't have an account? <a href="#">Register</a></p>
    </div>
</div>`,
    css: `.Form {
    width: 260px;
    background: linear-gradient(90deg,
        #ff0000 0%,
        #0066ff 100%);
    color: #fff;
    border-radius: 12px;
    padding: 24px 28px;
    box-sizing: border-box;
}
.Form__title {
    font-size: 26px;
    text-align: center;
    font-weight: 700;
    margin: 0 0 4px 0;
}
.Form__input-box {
    position: relative;
    width: 100%;
    height: 44px;
    margin: 16px 0;
}
.Form__input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    font-size: 13px;
    color: #fff;
    padding: 0 16px;
    outline: none;
    box-sizing: border-box;
    font-family: inherit;
}
.Form__input-box input::placeholder {
    color: rgba(255, 255, 255, 0.7);
}
.Form__remember {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin: -6px 0 12px;
    align-items: center;
}
.Form__remember label {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
}
.Form__remember label input {
    accent-color: #fff;
}
.Form__remember a {
    color: #fff;
    text-decoration: none;
    font-size: 12px;
}
.Form__remember a:hover {
    text-decoration: underline;
}
.Form__btn {
    display: block;
    width: 130px;
    height: 40px;
    background: #fff;
    border: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    margin: 8px auto 0;
    transition: opacity 0.2s;
    font-family: inherit;
}
.Form__btn:hover {
    opacity: 0.9;
}
.Form__register {
    font-size: 12px;
    text-align: center;
    margin-top: 16px;
}
.Form__register p {
    margin: 0;
}
.Form__register a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}
.Form__register a:hover {
    text-decoration: underline;
}`,
  },
  {
    id: 247,
    name: "Brutalist Login",
    preview: (
      <div className="fm-247">
        <div className="fm-247__card">
          <div className="fm-247__title">
            <span className="fm-247__text">Login</span>
          </div>
          <div className="fm-247__form">
            <div className="fm-247__group">
              <input
                required
                placeholder="Hero"
                className="fm-247__input"
                type="text"
              />
            </div>
            <div className="fm-247__group">
              <input
                required
                placeholder="Heropass"
                className="fm-247__input"
                type="password"
              />
            </div>
            <button className="fm-247__btn">ENTER ZONE</button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__card">
        <div class="Form__title">
            <span class="Form__text">Login</span>
        </div>
        <div class="Form__form">
            <div class="Form__group">
                <input required placeholder="Hero" class="Form__input" type="text" />
            </div>
            <div class="Form__group">
                <input required placeholder="Heropass" class="Form__input" type="password" />
            </div>
            <button class="Form__btn">ENTER ZONE</button>
        </div>
    </div>
</div>`,
    css: `.Form {
    position: relative;
    perspective: 1000px;
    width: 200px;
}
.Form__card {
    position: relative;
    width: 100%;
    height: 80px;
    background: linear-gradient(135deg, #ff3366, #ff6b35);
    border: 4px solid #000;
    box-shadow: 8px 8px 0 #000, 16px 16px 0 rgba(255, 51, 102, 0.3);
    cursor: pointer;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform-style: preserve-3d;
}
.Form__card:hover {
    height: 240px;
    transform: translateZ(20px) rotateX(5deg) rotateY(-5deg);
    box-shadow: 12px 12px 0 #000, 24px 24px 0 rgba(255, 51, 102, 0.4), 0 0 50px rgba(255, 51, 102, 0.6);
}
.Form__title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: inherit;
    transition: all 0.4s ease;
}
.Form__text {
    color: #000;
    font-weight: 800;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.3);
    transition: all 0.4s ease;
}
.Form__card:hover .Form__text {
    opacity: 0;
    transform: translateY(-30px) scale(0.8);
}
.Form__form {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    opacity: 0;
    transform: translateY(30px) scale(0.8);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.Form__card:hover .Form__form {
    opacity: 1;
    transform: translateY(0) scale(1);
}
.Form__group {
    position: relative;
    width: 100%;
    margin-bottom: 14px;
}
.Form__input {
    width: 100%;
    padding: 10px;
    background: rgba(255, 255, 255, 0.8);
    border: 3px solid #000;
    font-weight: 700;
    color: #000;
    box-shadow: 4px 4px 0 #000;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    font-family: inherit;
    font-size: 12px;
    box-sizing: border-box;
    outline: none;
}
.Form__input:focus {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 #000;
}
.Form__input::placeholder {
    color: #000;
    opacity: 0.6;
}
.Form__btn {
    width: 100%;
    padding: 10px;
    background: #000;
    color: #fff;
    border: none;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: 4px 4px 0 rgba(255, 255, 255, 0.3);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    font-family: inherit;
    font-size: 11px;
}
.Form__btn:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 rgba(255, 255, 255, 0.3);
    background: #333;
}
.Form__card::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.Form__card:hover::before {
    left: 100%;
}
.Form__card::after {
    content: "";
    position: absolute;
    top: -4px;
    right: -4px;
    width: 20px;
    height: 20px;
    background: #000;
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    transition: all 0.6s ease;
}
.Form__card:hover::after {
    background: rgb(246, 168, 116);
}
.Form::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 51, 102, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease;
    z-index: -1;
}
.Form:hover::before {
    width: 400px;
    height: 400px;
}`,
  },
  {
    id: 248,
    name: "Sign Up Form",
    preview: (
      <div className="fm-248">
        <div className="fm-248__card">
          <div className="fm-248__left">
            <div className="fm-248__noise"></div>
            <div className="fm-248__brand">DesktopLogin</div>
            <div className="fm-248__hero">
              <div className="fm-248__hero-title">Get Started with Us</div>
              <div className="fm-248__hero-desc">
                Complete these easy steps to register your account.
              </div>
              <div className="fm-248__steps">
                <div className="fm-248__step fm-248__step--active">
                  <div className="fm-248__step-num">1</div>
                  <span>Sign up your account</span>
                </div>
                <div className="fm-248__step">
                  <div className="fm-248__step-num">2</div>
                  <span>Set up your workspace</span>
                </div>
                <div className="fm-248__step">
                  <div className="fm-248__step-num">3</div>
                  <span>Set up your profile</span>
                </div>
              </div>
            </div>
          </div>
          <div className="fm-248__right">
            <div className="fm-248__form-title">Sign Up Account</div>
            <div className="fm-248__form-desc">
              Enter your personal data to create your account.
            </div>
            <div className="fm-248__socials">
              <button className="fm-248__social">Google</button>
              <button className="fm-248__social">Github</button>
            </div>
            <div className="fm-248__divider">Or</div>
            <div className="fm-248__row">
              <div className="fm-248__field">
                <label className="fm-248__label">First Name</label>
                <input
                  className="fm-248__input"
                  type="text"
                  placeholder="eg. John"
                />
              </div>
              <div className="fm-248__field">
                <label className="fm-248__label">Last Name</label>
                <input
                  className="fm-248__input"
                  type="text"
                  placeholder="eg. Francisco"
                />
              </div>
            </div>
            <div className="fm-248__field">
              <label className="fm-248__label">Email</label>
              <input
                className="fm-248__input"
                type="email"
                placeholder="eg. john@gmail.com"
              />
            </div>
            <div className="fm-248__field">
              <label className="fm-248__label">Password</label>
              <input
                className="fm-248__input"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="fm-248__hint">Must be at least 8 characters.</div>
            <button className="fm-248__btn">Sign Up</button>
            <div className="fm-248__footer">
              Already have an account? <a href="#">Log in</a>
            </div>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__card">
        <div class="Form__left">
            <div class="Form__noise"></div>
            <div class="Form__brand">DesktopLogin</div>
            <div class="Form__hero">
                <div class="Form__hero-title">Get Started with Us</div>
                <div class="Form__hero-desc">Complete these easy steps to register your account.</div>
                <div class="Form__steps">
                    <div class="Form__step Form__step--active">
                        <div class="Form__step-num">1</div>
                        <span>Sign up your account</span>
                    </div>
                    <div class="Form__step">
                        <div class="Form__step-num">2</div>
                        <span>Set up your workspace</span>
                    </div>
                    <div class="Form__step">
                        <div class="Form__step-num">3</div>
                        <span>Set up your profile</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="Form__right">
            <div class="Form__form-title">Sign Up Account</div>
            <div class="Form__form-desc">Enter your personal data to create your account.</div>
            <div class="Form__socials">
                <button class="Form__social">Google</button>
                <button class="Form__social">Github</button>
            </div>
            <div class="Form__divider">Or</div>
            <div class="Form__row">
                <div class="Form__field">
                    <label class="Form__label">First Name</label>
                    <input class="Form__input" type="text" placeholder="eg. John" />
                </div>
                <div class="Form__field">
                    <label class="Form__label">Last Name</label>
                    <input class="Form__input" type="text" placeholder="eg. Francisco" />
                </div>
            </div>
            <div class="Form__field">
                <label class="Form__label">Email</label>
                <input class="Form__input" type="email" placeholder="eg. john@gmail.com" />
            </div>
            <div class="Form__field">
                <label class="Form__label">Password</label>
                <input class="Form__input" type="password" placeholder="Enter your password" />
            </div>
            <div class="Form__hint">Must be at least 8 characters.</div>
            <button class="Form__btn">Sign Up</button>
            <div class="Form__footer">Already have an account? <a href="#">Log in</a></div>
        </div>
    </div>
</div>`,
    css: `.Form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #000;
    padding: 10px;
    font-family: "Inter", sans-serif;
    color: white;
    box-sizing: border-box;
}
.Form * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.Form__card {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 700px;
    background: #000;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid #1a1a1a;
    box-shadow: 0 0 40px rgba(0,0,0,0.5);
}
.Form__left {
    flex: 1 1 200px;
    position: relative;
    background: radial-gradient(circle at 50% 10%, #d8b4fe 0%, #7e22ce 30%, #3b0764 60%, #000 100%);
    padding: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 320px;
}
.Form__noise {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    opacity: 0.6;
    mix-blend-mode: overlay;
    pointer-events: none;
}
.Form__brand {
    position: relative;
    z-index: 2;
    font-weight: 600;
    font-size: 14px;
}
.Form__hero {
    position: relative;
    z-index: 2;
    margin-top: auto;
    margin-bottom: auto;
    padding-top: 20px;
}
.Form__hero-title {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 8px;
}
.Form__hero-desc {
    color: rgba(255,255,255,0.7);
    margin-bottom: 16px;
    font-size: 12px;
}
.Form__steps {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.Form__step {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 10px;
    font-size: 12px;
    transition: 0.3s;
}
.Form__step--active {
    background: white;
    color: black;
    border: none;
    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
}
.Form__step-num {
    width: 20px;
    height: 20px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: 700;
    flex-shrink: 0;
}
.Form__step--active .Form__step-num {
    background: black;
    color: white;
}
.Form__right {
    flex: 1 1 200px;
    background: black;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.Form__form-title {
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 4px;
}
.Form__form-desc {
    color: #888;
    font-size: 12px;
    margin-bottom: 16px;
}
.Form__socials {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
}
.Form__social {
    flex: 1;
    background: transparent;
    border: 1px solid #333;
    color: white;
    padding: 8px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s;
    font-family: inherit;
    font-size: 12px;
}
.Form__social:hover {
    background: #111;
    border-color: #555;
}
.Form__divider {
    display: flex;
    align-items: center;
    color: #666;
    font-size: 12px;
    margin-bottom: 14px;
}
.Form__divider::before,
.Form__divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #333;
    margin: 0 10px;
}
.Form__row {
    display: flex;
    gap: 8px;
}
.Form__field {
    width: 100%;
    margin-bottom: 12px;
    min-width: 0;
}
.Form__label {
    display: block;
    color: #ccc;
    font-size: 11px;
    font-weight: 500;
    margin-bottom: 5px;
}
.Form__input {
    width: 100%;
    background: #121212;
    border: 1px solid #1a1a1a;
    padding: 9px 10px;
    border-radius: 7px;
    color: white;
    outline: none;
    font-family: inherit;
    font-size: 12px;
    transition: 0.2s;
}
.Form__input:focus {
    background: #1a1a1a;
    border-color: #444;
}
.Form__input::placeholder {
    color: #555;
}
.Form__hint {
    color: #666;
    font-size: 11px;
    margin-top: -6px;
    margin-bottom: 14px;
}
.Form__btn {
    width: 100%;
    background: white;
    color: black;
    border: none;
    padding: 11px;
    border-radius: 7px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
    font-family: inherit;
    font-size: 13px;
}
.Form__btn:hover {
    background: #e5e5e5;
}
.Form__footer {
    text-align: center;
    margin-top: 14px;
    color: #888;
    font-size: 12px;
}
.Form__footer a {
    color: white;
    text-decoration: none;
}`,
  },
  {
    id: 249,
    name: "Dossier Login",
    preview: (
      <div className="fm-249">
        <div className="fm-249__content">
          <div className="fm-249__title-section">
            <p className="fm-249__title">Dossier</p>
          </div>
          <div className="fm-249__form">
            <div className="fm-249__group">
              <div className="fm-249__field-content">
                <label htmlFor="fm249-user">Username</label>
                <input
                  type="text"
                  id="fm249-user"
                  placeholder="Enter your username"
                />
              </div>
            </div>
            <div className="fm-249__group">
              <div className="fm-249__field-content">
                <label htmlFor="fm249-pass">Password</label>
                <input
                  type="password"
                  id="fm249-pass"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="fm-249__forgot">
              <a href="#">Forgot Password?</a>
            </div>
            <button className="fm-249__sign">
              <span>Sign In</span>
              <span className="fm-249__arrow">→</span>
            </button>
          </div>
          <div className="fm-249__divider">
            <div className="fm-249__line"></div>
            <p className="fm-249__or">Or continue with</p>
            <div className="fm-249__line"></div>
          </div>
          <div className="fm-249__socials">
            <button className="fm-249__social">
              <span>Google</span>
            </button>
            <button className="fm-249__social">
              <span>GitHub</span>
            </button>
            <button className="fm-249__social">
              <span>X</span>
            </button>
          </div>
          <p className="fm-249__signup">
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    ),
    html: `<div class="Form">
    <div class="Form__content">
        <div class="Form__title-section">
            <p class="Form__title">Dossier</p>
        </div>
        <div class="Form__form">
            <div class="Form__group">
                <div class="Form__field-content">
                    <label for="form-user">Username</label>
                    <input type="text" id="form-user" placeholder="Enter your username" />
                </div>
            </div>
            <div class="Form__group">
                <div class="Form__field-content">
                    <label for="form-pass">Password</label>
                    <input type="password" id="form-pass" placeholder="Enter your password" />
                </div>
            </div>
            <div class="Form__forgot">
                <a href="#">Forgot Password?</a>
            </div>
            <button class="Form__sign">
                <span>Sign In</span>
                <span class="Form__arrow">→</span>
            </button>
        </div>
        <div class="Form__divider">
            <div class="Form__line"></div>
            <p class="Form__or">Or continue with</p>
            <div class="Form__line"></div>
        </div>
        <div class="Form__socials">
            <button class="Form__social"><span>Google</span></button>
            <button class="Form__social"><span>GitHub</span></button>
            <button class="Form__social"><span>X</span></button>
        </div>
        <p class="Form__signup">Don't have an account? <a href="#">Sign up</a></p>
    </div>
</div>`,
    css: `.Form {
    width: 100%;
    max-width: 300px;
    background: linear-gradient(145deg, #0f0f0f 0%, #080808 50%, #0a0a0a 100%);
    color: #fff;
    border: 1px solid rgba(212, 168, 75, 0.15);
    overflow: hidden;
    box-shadow: 0 30px 80px -20px rgba(0,0,0,0.8);
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    box-sizing: border-box;
}
.Form::before {
    content: "";
    display: block;
    height: 3px;
    background: linear-gradient(90deg, transparent 0%, #b8922f 20%, #d4a84b 50%, #b8922f 80%, transparent 100%);
}
.Form__content {
    padding: 20px;
}
.Form__title-section {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(90deg, #d4a84b, transparent) 1;
}
.Form__title {
    font-family: Impact, "Arial Black", sans-serif;
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
    background: linear-gradient(180deg, #fff 30%, #999 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
}
.Form__form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.Form__group {
    background: linear-gradient(135deg, rgba(10,22,40,0.8) 0%, rgba(7,18,34,0.9) 100%);
    border: 1px solid #1a2d47;
    padding: 10px 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease;
    position: relative;
    box-sizing: border-box;
}
.Form__group::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 3px; height: 0;
    background: linear-gradient(180deg, #d4a84b, #00d4ff);
    transition: height 0.3s ease;
}
.Form__group:focus-within::before { height: 100%; }
.Form__group:focus-within { border-color: #d4a84b; transform: translateX(3px); }
.Form__group:hover { border-color: #2a4a70; }
.Form__field-content {
    flex: 1;
    min-width: 0;
}
.Form__group label {
    display: block;
    color: #6b7280;
    font-size: 0.55rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 3px;
    transition: color 0.3s ease;
}
.Form__group:focus-within label { color: #d4a84b; }
.Form__group input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
}
.Form__group input::placeholder { color: #3a4a5a; }
.Form__forgot {
    display: flex;
    justify-content: flex-end;
    margin-top: 4px;
}
.Form__forgot a {
    color: #6b7280;
    text-decoration: none;
    font-size: 0.65rem;
    transition: color 0.3s;
}
.Form__forgot a:hover { color: #d4a84b; }
.Form__sign {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    background: linear-gradient(135deg, #d4a84b 0%, #b8922f 100%);
    padding: 10px;
    color: #000;
    border: none;
    font-weight: 700;
    font-size: 0.7rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 6px;
    font-family: inherit;
}
.Form__sign:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(212,168,75,0.4);
}
.Form__arrow { transition: transform 0.3s ease; }
.Form__sign:hover .Form__arrow { transform: translateX(4px); }
.Form__divider {
    display: flex;
    align-items: center;
    padding-top: 16px;
    margin-bottom: 12px;
}
.Form__line {
    height: 1px;
    flex: 1;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
}
.Form__or {
    padding: 0 10px;
    font-size: 0.55rem;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0;
}
.Form__socials {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
}
.Form__social {
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(10,22,40,0.8) 0%, rgba(7,18,34,0.9) 100%);
    border: 1px solid #1a2d47;
    cursor: pointer;
    transition: all 0.3s ease;
    box-sizing: border-box;
    font-family: inherit;
}
.Form__social:hover {
    transform: translateY(-3px);
    border-color: #d4a84b;
}
.Form__social span {
    font-size: 0.55rem;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.3s;
}
.Form__social:hover span { color: #d4a84b; }
.Form__signup {
    text-align: center;
    font-size: 0.7rem;
    color: #6b7280;
    margin-top: 16px;
    margin-bottom: 0;
}
.Form__signup a {
    color: #d4a84b;
    text-decoration: none;
    font-weight: 600;
}
.Form__signup a:hover { color: #fff; }`,
  },
];
