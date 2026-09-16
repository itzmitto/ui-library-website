import "../pages/All.css";

export const logins = [
  {
    id: 731,
    name: "Simple Login",
    preview: (
      <div className="login-731">
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Login</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Login</button>
</div>`,
    css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login h2 {
    margin: 0 0 4px;
    font-size: 24px;
}
.Login input {
    padding: 10px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
}
.Login button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: white;
    cursor: pointer;
}`,
  },
  {
    id: 732,
    name: "Outline Login",
    preview: (
      <div className="login-732">
        <h2>Welcome back</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign in</button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Welcome back</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Sign in</button>
</div>`,
    css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login input {
    padding: 10px;
    border: 1px solid #71717a;
    border-radius: 8px;
}
.Login button {
    padding: 10px;
    border: 1px solid #2563eb;
    background: transparent;
    color: #2563eb;
    border-radius: 8px;
}`,
  },
  {
    id: 733,
    name: "Purple Login",
    preview: (
      <div className="login-733">
        <h2>Sign In</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Sign In</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Sign In</button>
</div>`,
    css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login input {
    padding: 10px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
}
.Login button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #7c3aed;
    color: white;
}`,
  },
  {
    id: 734,
    name: "Gradient Login",
    preview: (
      <div className="login-734">
        <h2>Welcome</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Continue</button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Welcome</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Continue</button>
</div>`,
    css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login input {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #f4f4f5;
}
.Login button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
}`,
  },
  {
    id: 735,
    name: "Dark Login",
    preview: (
      <div className="login-735">
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Login</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Login</button>
</div>`,
    css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login input {
    padding: 10px;
    border: 1px solid #3f3f46;
    border-radius: 8px;
    background: #18181b;
    color: white;
}
.Login button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #27272a;
    color: white;
}`,
  },
  {
    id: 736,
    name: "Green Login",
    preview: (
      <div className="login-736">
        <h2>Sign In</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Sign In</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Sign In</button>
</div>`,
    css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login input {
    padding: 10px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
}
.Login button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #16a34a;
    color: white;
}`,
  },
  {
    id: 737,
    name: "Rounded Login",
    preview: (
      <div className="login-737">
        <h2>Account Login</h2>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Account Login</h2>
    <input type="email" placeholder="Email address">
    <input type="password" placeholder="Password">
    <button>Login</button>
</div>`,
    css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login input {
    padding: 11px 14px;
    border: 1px solid #d4d4d8;
    border-radius: 999px;
}
.Login button {
    padding: 11px;
    border: none;
    border-radius: 999px;
    background: #2563eb;
    color: white;
}`,
  },
  {
    id: 738,
    name: "Minimal Login",
    preview: (
      <div className="login-738">
        <h2>Sign in</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Continue</button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Sign in</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Continue</button>
</div>`,
    css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login input {
    padding: 10px 0;
    border: none;
    border-bottom: 1px solid #a1a1aa;
    outline: none;
}
.Login button {
    padding: 10px;
    border: none;
    background: #18181b;
    color: white;
    border-radius: 6px;
}`,
  },
  {
    id: 739,
    name: "Blue Login",
    preview: (
      <div className="login-739">
        <h2>Welcome back</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Welcome back</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Login</button>
</div>`,
    css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login input {
    padding: 10px;
    border: 1px solid #93c5fd;
    border-radius: 8px;
}
.Login button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #0284c7;
    color: white;
}`,
  },
  {
    id: 740,
    name: "Soft Login",
    preview: (
      <div className="login-740">
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign in</button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Login</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Sign in</button>
</div>`,
    css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login input {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #f4f4f5;
}
.Login button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #334155;
    color: white;
}`,
  },
  {
    id: 741,
    name: "Icon Login",
    preview: (
      <div className="login-741">
        <h2>Welcome Back</h2>
        <div className="login-input">
          <i className="fa-solid fa-envelope"></i>
          <input type="email" placeholder="Email address" />
        </div>
        <div className="login-input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
        <button>
          <i className="fa-solid fa-arrow-right-to-bracket"></i> Sign In
        </button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Welcome Back</h2>
    <div class="login-input">
        <i class="fa-solid fa-envelope"></i>
        <input type="email" placeholder="Email address">
    </div>
    <div class="login-input">
        <i class="fa-solid fa-lock"></i>
        <input type="password" placeholder="Password">
    </div>
    <button><i class="fa-solid fa-arrow-right-to-bracket"></i> Sign In</button>
</div>`,
    css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 280px;
}
.login-input {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
}
.login-input i {
    color: #71717a;
}
.login-input input {
    border: none;
    outline: none;
    width: 100%;
}
.Login button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: white;
}`,
  },
  {
    id: 742,
    name: "Remember Me Login",
    preview: (
      <div className="login-742">
        <h2>Sign In</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        <button>Login</button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Sign In</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <label><input type="checkbox"> Remember me</label>
    <button>Login</button>
</div>`,
    css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
}
.Login button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: white;
}`,
  },
  {
    id: 743,
    name: "Forgot Password Login",
    preview: (
      <div className="login-743">
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot password?</a>
        <button>Sign In</button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Login</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <a href="#">Forgot password?</a>
    <button>Sign In</button>
</div>`,
    css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login a {
    text-align: right;
    color: #2563eb;
    font-size: 12px;
    text-decoration: none;
}
.Login button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: white;
}`,
  },
  {
    id: 744,
    name: "Social Login",
    preview: (
      <div className="login-744">
        <h2>Continue with</h2>
        <button>
          <i className="fa-brands fa-google"></i> Google
        </button>
        <button>
          <i className="fa-brands fa-github"></i> GitHub
        </button>
        <div className="login-divider">
          <span>or</span>
        </div>
        <input type="email" placeholder="Email" />
        <button>Continue</button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Continue with</h2>
    <button><i class="fa-brands fa-google"></i> Google</button>
    <button><i class="fa-brands fa-github"></i> GitHub</button>
    <div class="login-divider"><span>or</span></div>
    <input type="email" placeholder="Email">
    <button>Continue</button>
</div>`,
    css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 280px;
}
.login-divider {
    display: flex;
    align-items: center;
    gap: 10px;
}
.login-divider::before,
.login-divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #d4d4d8;
}
.Login button {
    padding: 10px;
    border: 1px solid #d4d4d8;
    background: white;
    border-radius: 8px;
}`,
  },
  {
    id: 745,
    name: "Glass Login",
    preview: (
      <div className="login-745">
        <i className="fa-solid fa-user-shield login-icon"></i>
        <h2>Secure Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    ),
    html: `<div class="Login">
    <i class="fa-solid fa-user-shield"></i>
    <h2>Secure Login</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Login</button>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 24px;
    border-radius: 18px;
    background: rgba(255,255,255,.12);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,.2);
}
.Login input {
    background: rgba(255,255,255,.15);
    color: white;
    border: 1px solid rgba(255,255,255,.2);
    padding: 10px;
    border-radius: 8px;
}
.Login button {
    background: white;
    color: #18181b;
    border: none;
    padding: 10px;
    border-radius: 8px;
}`,
  },
  {
    id: 746,
    name: "Floating Label Login",
    preview: (
      <div className="login-746">
        <h2>Sign In</h2>
        <div className="floating-field">
          <input type="email" placeholder=" " />
          <label>Email</label>
        </div>
        <div className="floating-field">
          <input type="password" placeholder=" " />
          <label>Password</label>
        </div>
        <button>Sign In</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="floating-field">
        <input type="email" placeholder=" ">
        <label>Email</label>
    </div>
    <div class="floating-field">
        <input type="password" placeholder=" ">
        <label>Password</label>
    </div>
    <button>Sign In</button>
</div>`,
    css: `.floating-field {
    position: relative;
}
.floating-field input {
    width: 100%;
    padding: 12px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
    outline: none;
}
.floating-field label {
    position: absolute;
    left: 10px;
    top: 11px;
    color: #71717a;
    pointer-events: none;
}
.floating-field input:focus + label,
.floating-field input:not(:placeholder-shown) + label {
    top: -8px;
    background: white;
    padding: 0 4px;
    font-size: 11px;
    color: #2563eb;
}`,
  },
  {
    id: 747,
    name: "Split Login",
    preview: (
      <div className="login-747">
        <div className="login-747-side">
          <i className="fa-solid fa-layer-group"></i>
        </div>
        <div className="login-747-form">
          <h2>Welcome</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </div>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-side">
        <i class="fa-solid fa-layer-group"></i>
    </div>
    <div class="Login-form">
        <h2>Welcome</h2>
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <button>Login</button>
    </div>
</div>`,
    css: `.Login {
    display: flex;
    width: 300px;
}
.Login-side {
    width: 90px;
    background: #2563eb;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Login-form {
    flex: 1;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}`,
  },
  {
    id: 748,
    name: "Password Reveal Login",
    preview: (
      <div className="login-748">
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <div className="password-field">
          <input type="password" placeholder="Password" />
          <i className="fa-solid fa-eye"></i>
        </div>
        <button>Sign In</button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Login</h2>
    <input type="email" placeholder="Email">
    <div class="password-field">
        <input type="password" placeholder="Password">
        <i class="fa-solid fa-eye"></i>
    </div>
    <button>Sign In</button>
</div>`,
    css: `.password-field {
    position: relative;
}
.password-field input {
    width: 100%;
    padding: 10px 36px 10px 10px;
}
.password-field i {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #71717a;
}`,
  },
  {
    id: 749,
    name: "Two Column Login",
    preview: (
      <div className="login-749">
        <h2>Account</h2>
        <div className="login-row">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Create Account</button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Account</h2>
    <div class="login-row">
        <input type="text" placeholder="First name">
        <input type="text" placeholder="Last name">
    </div>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Create Account</button>
</div>`,
    css: `.login-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}`,
  },
  {
    id: 750,
    name: "Premium Login",
    preview: (
      <div className="login-750">
        <i className="fa-solid fa-crown"></i>
        <h2>Premium Access</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Unlock</button>
      </div>
    ),
    html: `<div class="Login">
    <i class="fa-solid fa-crown"></i>
    <h2>Premium Access</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Unlock</button>
</div>`,
    css: `.Login {
    padding: 20px;
    border-radius: 14px;
    border: 1px solid #facc15;
    background: linear-gradient(145deg,#fff7ed,#fefce8);
}`,
  },
  {
    id: 751,
    name: "Compact Login",
    preview: (
      <div className="login-751">
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Login</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button><i class="fa-solid fa-arrow-right"></i></button>
</div>`,
    css: `.Login button {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    background: #18181b;
    color: white;
    align-self: flex-end;
}`,
  },
  {
    id: 752,
    name: "Admin Login",
    preview: (
      <div className="login-752">
        <i className="fa-solid fa-user-tie"></i>
        <h2>Admin Portal</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Access Dashboard</button>
      </div>
    ),
    html: `<div class="Login">
    <i class="fa-solid fa-user-tie"></i>
    <h2>Admin Portal</h2>
    <input type="text" placeholder="Username">
    <input type="password" placeholder="Password">
    <button>Access Dashboard</button>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 20px;
    background: #18181b;
    color: white;
    border-radius: 12px;
}
.Login button {
    background: #ef4444;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 8px;
}`,
  },
  {
    id: 753,
    name: "Gradient Border Login",
    preview: (
      <div className="login-753">
        <h2>Sign In</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Continue</button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Sign In</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Continue</button>
</div>`,
    css: `.Login {
    border: 2px solid transparent;
    border-radius: 12px;
    background:
        linear-gradient(white,white) padding-box,
        linear-gradient(135deg,#2563eb,#9333ea) border-box;
    padding: 20px;
}`,
  },
  {
    id: 754,
    name: "Centered Icon Login",
    preview: (
      <div className="login-754">
        <div className="login-avatar">
          <i className="fa-solid fa-user"></i>
        </div>
        <h2>Hello again</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-avatar">
        <i class="fa-solid fa-user"></i>
    </div>
    <h2>Hello again</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Login</button>
</div>`,
    css: `.Login-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: #dbeafe;
    color: #2563eb;
    margin: auto;
}`,
  },
  {
    id: 755,
    name: "Neon Login",
    preview: (
      <div className="login-755">
        <h2>Neon Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Enter</button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Neon Login</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Enter</button>
</div>`,
    css: `.Login {
    background: #09090b;
    color: white;
    border: 1px solid #22d3ee;
    box-shadow: 0 0 20px rgba(34,211,238,.2);
    padding: 20px;
    border-radius: 12px;
}`,
  },
  {
    id: 756,
    name: "Newsletter Login",
    preview: (
      <div className="login-756">
        <i className="fa-solid fa-paper-plane"></i>
        <h2>Join Us</h2>
        <p>Sign in to continue</p>
        <input type="email" placeholder="Email address" />
        <button>Continue</button>
      </div>
    ),
    html: `<div class="Login">
    <i class="fa-solid fa-paper-plane"></i>
    <h2>Join Us</h2>
    <p>Sign in to continue</p>
    <input type="email" placeholder="Email address">
    <button>Continue</button>
</div>`,
    css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.Login p {
    font-size: 12px;
    color: #71717a;
}`,
  },
  {
    id: 757,
    name: "Security Login",
    preview: (
      <div className="login-757">
        <i className="fa-solid fa-shield-halved"></i>
        <h2>Verify Identity</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Verify</button>
      </div>
    ),
    html: `<div class="Login">
    <i class="fa-solid fa-shield-halved"></i>
    <h2>Verify Identity</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Verify</button>
</div>`,
    css: `.Login {
    border: 1px solid #bfdbfe;
    background: #eff6ff;
    padding: 20px;
    border-radius: 14px;
}`,
  },
  {
    id: 758,
    name: "Dark Gradient Login",
    preview: (
      <div className="login-758">
        <h2>Welcome</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </div>
    ),
    html: `<div class="Login">
    <h2>Welcome</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Sign In</button>
</div>`,
    css: `.Login {
    background: linear-gradient(145deg,#18181b,#27272a);
    color: white;
    padding: 20px;
    border-radius: 14px;
}
.Login button {
    background: linear-gradient(135deg,#06b6d4,#3b82f6);
    color: white;
    border: none;
    padding: 10px;
    border-radius: 8px;
}`,
  },
  {
    id: 759,
    name: "Minimal Icon Login",
    preview: (
      <div className="login-759">
        <div className="icon-input">
          <i className="fa-solid fa-at"></i>
          <input type="email" placeholder="Email" />
        </div>
        <div className="icon-input">
          <i className="fa-solid fa-key"></i>
          <input type="password" placeholder="Password" />
        </div>
        <button>Sign In</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="icon-input">
        <i class="fa-solid fa-at"></i>
        <input type="email" placeholder="Email">
    </div>
    <div class="icon-input">
        <i class="fa-solid fa-key"></i>
        <input type="password" placeholder="Password">
    </div>
    <button>Sign In</button>
</div>`,
    css: `.icon-input {
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid #d4d4d8;
    padding: 8px 0;
}
.icon-input input {
    border: none;
    outline: none;
}`,
  },
  {
    id: 760,
    name: "Modern Login",
    preview: (
      <div className="login-760">
        <div className="login-top">
          <div>
            <span>Good to see you</span>
            <h2>Sign in</h2>
          </div>
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <div className="login-actions">
          <label>
            <input type="checkbox" />
            Remember
          </label>
          <a href="#">Forgot?</a>
        </div>
        <button>Continue</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="login-top">
        <div>
            <span>Good to see you</span>
            <h2>Sign in</h2>
        </div>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </div>
    <input type="email" placeholder="Email address">
    <input type="password" placeholder="Password">
    <div class="login-actions">
        <label><input type="checkbox"> Remember</label>
        <a href="#">Forgot?</a>
    </div>
    <button>Continue</button>
</div>`,
    css: `.login-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.login-top span {
    font-size: 11px;
    color: #71717a;
}
.login-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
}
.login-actions a {
    color: #2563eb;
    text-decoration: none;
}`,
  },
  {
    id: 761,
    name: "SaaS Dashboard Login",
    preview: (
      <div className="login-761">
        <div className="login-761-logo">
          <i className="fa-solid fa-cube"></i>
        </div>
        <h2>Welcome back</h2>
        <p className="login-761-subtitle">Sign in to your workspace</p>
        <div className="login-761-field">
          <label>Email address</label>
          <div className="login-761-input">
            <i className="fa-solid fa-envelope"></i>
            <input type="email" placeholder="you@example.com" />
          </div>
        </div>
        <div className="login-761-field">
          <div className="login-761-label-row">
            <label>Password</label>
            <a href="#">Forgot password?</a>
          </div>
          <div className="login-761-input">
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder="Enter your password" />
            <i className="fa-solid fa-eye"></i>
          </div>
        </div>
        <label className="login-761-remember">
          <input type="checkbox" />
          <span>Remember me for 30 days</span>
        </label>
        <button className="login-761-button">
          Sign in
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        <div className="login-761-divider">
          <span>or continue with</span>
        </div>
        <div className="login-761-socials">
          <button>
            <i className="fa-brands fa-google"></i>
            Google
          </button>
          <button>
            <i className="fa-brands fa-github"></i>
            GitHub
          </button>
        </div>
        <p className="login-761-footer">
          Don't have an account? <a href="#">Create one</a>
        </p>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-logo">
        <i class="fa-solid fa-cube"></i>
    </div>
    <h2>Welcome back</h2>
    <p class="Login-subtitle">Sign in to your workspace</p>
    <div class="Login-field">
        <label>Email address</label>
        <div class="Login-input">
            <i class="fa-solid fa-envelope"></i>
            <input type="email" placeholder="you@example.com">
        </div>
    </div>
    <div class="Login-field">
        <div class="Login-label-row">
            <label>Password</label>
            <a href="#">Forgot password?</a>
        </div>
        <div class="Login-input">
            <i class="fa-solid fa-lock"></i>
            <input type="password" placeholder="Enter your password">
            <i class="fa-solid fa-eye"></i>
        </div>
    </div>
    <label class="Login-remember">
        <input type="checkbox">
        <span>Remember me for 30 days</span>
    </label>
    <button class="Login-button">
        Sign in
        <i class="fa-solid fa-arrow-right"></i>
    </button>
    <div class="Login-divider">
        <span>or continue with</span>
    </div>
    <div class="Login-socials">
        <button><i class="fa-brands fa-google"></i>Google</button>
        <button><i class="fa-brands fa-github"></i>GitHub</button>
    </div>
    <p class="Login-footer">
        Don't have an account? <a href="#">Create one</a>
    </p>
</div>`,
    css: `.Login {
    width: 420px;
    padding: 36px;
    background: #ffffff;
    border: 1px solid #e4e4e7;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.08);
}
.Login-logo {
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: linear-gradient(135deg, #2563eb, #7c3aed);
    color: white;
    font-size: 20px;
    margin-bottom: 20px;
}
.Login h2 {
    font-size: 30px;
    margin: 0;
}
.Login-subtitle {
    margin: 8px 0 28px;
    color: #71717a;
}
.Login-field {
    margin-bottom: 18px;
}
.Login-field label {
    display: block;
    margin-bottom: 7px;
    font-size: 13px;
    font-weight: 600;
}
.Login-label-row {
    display: flex;
    justify-content: space-between;
}
.Login-label-row a {
    color: #2563eb;
    text-decoration: none;
}
.Login-input {
    height: 48px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 14px;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
}
.Login-input:focus-within {
    border-color: #2563eb;
    box-shadow: 0 0 0 4px rgba(37,99,235,0.1);
}
.Login-input input {
    flex: 1;
    border: none;
    outline: none;
}
.Login-remember {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 13px;
    margin-bottom: 20px;
}
.Login-button {
    width: 100%;
    height: 48px;
    border: none;
    border-radius: 10px;
    background: #18181b;
    color: white;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.Login-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 24px 0;
    color: #a1a1aa;
    font-size: 12px;
}
.Login-divider::before,
.Login-divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e4e4e7;
}
.Login-socials {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}
.Login-socials button {
    height: 44px;
    border: 1px solid #d4d4d8;
    background: white;
    border-radius: 10px;
}
.Login-footer {
    margin: 22px 0 0;
    text-align: center;
    color: #71717a;
    font-size: 13px;
}
.Login-footer a {
    color: #2563eb;
    text-decoration: none;
}`,
  },
  {
    id: 762,
    name: "Split Image Login",
    preview: (
      <div className="login-762">
        <div className="login-762-visual">
          <div className="login-762-overlay">
            <span className="login-762-badge">
              <i className="fa-solid fa-bolt"></i>
              Fast & secure
            </span>
            <h2>
              Build something
              <br />
              great today.
            </h2>
            <p>Simple tools for modern teams and developers.</p>
          </div>
        </div>
        <div className="login-762-form">
          <div className="login-762-top">
            <span>New here?</span>
            <a href="#">Create account</a>
          </div>
          <div>
            <h2>Sign in</h2>
            <p>Enter your credentials to continue.</p>
          </div>
          <button className="login-762-google">
            <i className="fa-brands fa-google"></i>
            Continue with Google
          </button>
          <div className="login-762-divider">
            <span>or</span>
          </div>
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
          <div className="login-762-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot?</a>
          </div>
          <button className="login-762-submit">Sign in</button>
        </div>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-visual">
        <div class="Login-overlay">
            <span class="Login-badge">
                <i class="fa-solid fa-bolt"></i>
                Fast & secure
            </span>
            <h2>Build something<br>great today.</h2>
            <p>Simple tools for modern teams and developers.</p>
        </div>
    </div>
    <div class="Login-form">
        <div class="Login-top">
            <span>New here?</span>
            <a href="#">Create account</a>
        </div>
        <h2>Sign in</h2>
        <p>Enter your credentials to continue.</p>
        <button class="Login-google">
            <i class="fa-brands fa-google"></i>
            Continue with Google
        </button>
        <div class="Login-divider"><span>or</span></div>
        <label>Email</label>
        <input type="email" placeholder="you@example.com">
        <label>Password</label>
        <input type="password" placeholder="••••••••">
        <div class="Login-options">
            <label><input type="checkbox"> Remember me</label>
            <a href="#">Forgot?</a>
        </div>
        <button class="Login-submit">Sign in</button>
    </div>
</div>`,
    css: `.Login {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 760px;
    min-height: 500px;
    overflow: hidden;
    border-radius: 24px;
    background: white;
    box-shadow: 0 30px 80px rgba(0,0,0,0.12);
}
.Login-visual {
    position: relative;
    background:
        radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2), transparent 30%),
        linear-gradient(145deg,#2563eb,#7c3aed);
}
.Login-overlay {
    position: absolute;
    inset: 0;
    padding: 40px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.Login-badge {
    width: fit-content;
    padding: 7px 10px;
    border: 1px solid rgba(255,255,255,0.25);
    background: rgba(255,255,255,0.1);
    border-radius: 999px;
}
.Login-overlay h2 {
    font-size: 38px;
    line-height: 1;
    margin: 18px 0;
}
.Login-overlay p {
    color: rgba(255,255,255,0.8);
}
.Login-form {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.Login-top {
    display: flex;
    justify-content: flex-end;
    gap: 6px;
    font-size: 12px;
}
.Login-top a {
    color: #2563eb;
    text-decoration: none;
}
.Login-form h2 {
    font-size: 32px;
    margin: 36px 0 6px;
}
.Login-form > p {
    margin: 0 0 24px;
    color: #71717a;
}
.Login-google {
    height: 46px;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    background: white;
}
.Login-divider {
    margin: 22px 0;
    text-align: center;
    color: #a1a1aa;
}
.Login-form > input {
    height: 46px;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    padding: 0 12px;
    margin: 7px 0 15px;
}
.Login-options {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
}
.Login-options a {
    color: #2563eb;
    text-decoration: none;
}
.Login-submit {
    margin-top: 20px;
    height: 48px;
    border: none;
    border-radius: 10px;
    background: #18181b;
    color: white;
    font-weight: 600;
}`,
  },
  {
    id: 763,
    name: "Glassmorphism Login",
    preview: (
      <div className="login-763">
        <div className="login-763-orb login-763-orb-one"></div>
        <div className="login-763-orb login-763-orb-two"></div>
        <div className="login-763-card">
          <div className="login-763-icon">
            <i className="fa-solid fa-fingerprint"></i>
          </div>
          <h2>Welcome back</h2>
          <p>Sign in to access your account</p>
          <div className="login-763-input">
            <i className="fa-solid fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="login-763-input">
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <button>Sign in</button>
          <div className="login-763-bottom">
            <span>Secure login</span>
            <i className="fa-solid fa-shield"></i>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-orb Login-orb-one"></div>
    <div class="Login-orb Login-orb-two"></div>
    <div class="Login-card">
        <div class="Login-icon">
            <i class="fa-solid fa-fingerprint"></i>
        </div>
        <h2>Welcome back</h2>
        <p>Sign in to access your account</p>
        <div class="Login-input">
            <i class="fa-solid fa-user"></i>
            <input type="text" placeholder="Username">
        </div>
        <div class="Login-input">
            <i class="fa-solid fa-lock"></i>
            <input type="password" placeholder="Password">
        </div>
        <button>Sign in</button>
        <div class="Login-bottom">
            <span>Secure login</span>
            <i class="fa-solid fa-shield"></i>
        </div>
    </div>
</div>`,
    css: `.Login {
    position: relative;
    width: 420px;
    min-height: 540px;
    overflow: hidden;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg,#0f172a,#312e81);
}
.Login-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(2px);
}
.Login-orb-one {
    width: 220px;
    height: 220px;
    top: -80px;
    right: -60px;
    background: #8b5cf6;
}
.Login-orb-two {
    width: 180px;
    height: 180px;
    bottom: -60px;
    left: -50px;
    background: #06b6d4;
}
.Login-card {
    position: relative;
    z-index: 2;
    width: 300px;
    padding: 32px;
    border-radius: 24px;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.2);
    backdrop-filter: blur(20px);
    color: white;
    box-shadow: 0 25px 70px rgba(0,0,0,.25);
}
.Login-icon {
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    border-radius: 16px;
    background: rgba(255,255,255,0.12);
    margin-bottom: 20px;
}
.Login-card h2 {
    font-size: 28px;
    margin-bottom: 6px;
}
.Login-card > p {
    color: rgba(255,255,255,.7);
    margin-bottom: 24px;
}
.Login-input {
    height: 48px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 12px;
    margin-bottom: 12px;
    border-radius: 12px;
    background: rgba(255,255,255,.08);
    border: 1px solid rgba(255,255,255,.15);
}
.Login-input input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: white;
}
.Login-input input::placeholder {
    color: rgba(255,255,255,.5);
}
.Login-card button {
    width: 100%;
    height: 48px;
    border: none;
    border-radius: 12px;
    background: white;
    color: #18181b;
    font-weight: 600;
}
.Login-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    color: rgba(255,255,255,.5);
    font-size: 11px;
}`,
  },
  {
    id: 764,
    name: "Cyber Security Login",
    preview: (
      <div className="login-764">
        <div className="login-764-header">
          <div className="login-764-status"></div>
          <span>SYSTEM ACCESS</span>
        </div>
        <div className="login-764-center">
          <i className="fa-solid fa-terminal"></i>
          <h2>AUTHENTICATE</h2>
          <p>Restricted area. Authorized users only.</p>
        </div>
        <div className="login-764-field">
          <span>USER_ID</span>
          <input type="text" placeholder="user_01" />
        </div>
        <div className="login-764-field">
          <span>PASS_KEY</span>
          <input type="password" placeholder="••••••••" />
        </div>
        <button>
          <span>ACCESS SYSTEM</span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        <div className="login-764-footer">
          <span>ENCRYPTED CONNECTION</span>
          <span>v4.2.0</span>
        </div>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-header">
        <div class="Login-status"></div>
        <span>SYSTEM ACCESS</span>
    </div>
    <div class="Login-center">
        <i class="fa-solid fa-terminal"></i>
        <h2>AUTHENTICATE</h2>
        <p>Restricted area. Authorized users only.</p>
    </div>
    <div class="Login-field">
        <span>USER_ID</span>
        <input type="text" placeholder="user_01">
    </div>
    <div class="Login-field">
        <span>PASS_KEY</span>
        <input type="password" placeholder="••••••••">
    </div>
    <button>
        <span>ACCESS SYSTEM</span>
        <i class="fa-solid fa-arrow-right"></i>
    </button>
    <div class="Login-footer">
        <span>ENCRYPTED CONNECTION</span>
        <span>v4.2.0</span>
    </div>
</div>`,
    css: `.Login {
    width: 380px;
    padding: 28px;
    background: #050505;
    color: #22c55e;
    border: 1px solid #1f2937;
    font-family: monospace;
    box-shadow: inset 0 0 50px rgba(34,197,94,.03);
}
.Login-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 18px;
    border-bottom: 1px solid #1f2937;
    font-size: 11px;
}
.Login-status {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 10px #22c55e;
}
.Login-center {
    text-align: center;
    padding: 34px 0 28px;
}
.Login-center > i {
    font-size: 26px;
    margin-bottom: 16px;
}
.Login-center h2 {
    font-size: 22px;
    letter-spacing: 4px;
    margin-bottom: 8px;
}
.Login-center p {
    margin: 0;
    color: #4ade80;
    opacity: .6;
    font-size: 10px;
}
.Login-field {
    margin-bottom: 16px;
}
.Login-field span {
    display: block;
    margin-bottom: 7px;
    font-size: 9px;
    color: #4ade80;
}
.Login-field input {
    width: 100%;
    height: 44px;
    padding: 0 12px;
    box-sizing: border-box;
    border: 1px solid #1f2937;
    background: #0a0a0a;
    color: #22c55e;
    outline: none;
}
.Login-field input:focus {
    border-color: #22c55e;
    box-shadow: 0 0 15px rgba(34,197,94,.12);
}
.Login > button {
    width: 100%;
    height: 46px;
    border: 1px solid #22c55e;
    background: transparent;
    color: #22c55e;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;
    font-family: monospace;
}
.Login-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 22px;
    padding-top: 14px;
    border-top: 1px solid #1f2937;
    font-size: 8px;
    color: #4ade80;
    opacity: .5;
}`,
  },
  {
    id: 765,
    name: "Modern Auth Login",
    preview: (
      <div className="login-765">
        <div className="login-765-header">
          <div className="login-765-brand">
            <div className="login-765-brand-icon">
              <i className="fa-solid fa-shapes"></i>
            </div>
            <span>Studio</span>
          </div>
          <button className="login-765-menu">
            <i className="fa-solid fa-ellipsis"></i>
          </button>
        </div>
        <div className="login-765-body">
          <span className="login-765-kicker">YOUR WORKSPACE</span>
          <h2>Sign in to Studio</h2>
          <p>Access your projects, analytics and team.</p>
          <div className="login-765-provider">
            <i className="fa-brands fa-google"></i>
            <span>Continue with Google</span>
          </div>
          <div className="login-765-provider">
            <i className="fa-brands fa-apple"></i>
            <span>Continue with Apple</span>
          </div>
          <div className="login-765-divider">
            <span>or</span>
          </div>
          <label>Email address</label>
          <input type="email" placeholder="name@company.com" />
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
          <div className="login-765-row">
            <label>
              <input type="checkbox" />
              Keep me signed in
            </label>
            <a href="#">Reset</a>
          </div>
          <button className="login-765-main-button">
            Sign in to workspace
          </button>
          <div className="login-765-help">
            <i className="fa-solid fa-circle-info"></i>
            Need help? Contact your workspace admin.
          </div>
        </div>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-header">
        <div class="Login-brand">
            <div class="Login-brand-icon">
                <i class="fa-solid fa-shapes"></i>
            </div>
            <span>Studio</span>
        </div>
        <button class="Login-menu">
            <i class="fa-solid fa-ellipsis"></i>
        </button>
    </div>
    <div class="Login-body">
        <span class="Login-kicker">YOUR WORKSPACE</span>
        <h2>Sign in to Studio</h2>
        <p>Access your projects, analytics and team.</p>
        <div class="Login-provider">
            <i class="fa-brands fa-google"></i>
            <span>Continue with Google</span>
        </div>
        <div class="Login-provider">
            <i class="fa-brands fa-apple"></i>
            <span>Continue with Apple</span>
        </div>
        <div class="Login-divider"><span>or</span></div>
        <label>Email address</label>
        <input type="email" placeholder="name@company.com">
        <label>Password</label>
        <input type="password" placeholder="Enter password">
        <div class="Login-row">
            <label>
                <input type="checkbox">
                Keep me signed in
            </label>
            <a href="#">Reset</a>
        </div>
        <button class="Login-main-button">
            Sign in to workspace
        </button>
        <div class="Login-help">
            <i class="fa-solid fa-circle-info"></i>
            Need help? Contact your workspace admin.
        </div>
    </div>
</div>`,
    css: `.Login {
    width: 430px;
    overflow: hidden;
    background: white;
    border: 1px solid #e4e4e7;
    border-radius: 20px;
    box-shadow: 0 25px 70px rgba(0,0,0,.08);
}
.Login-header {
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 22px;
    border-bottom: 1px solid #f4f4f5;
}
.Login-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
}
.Login-brand-icon {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #18181b;
    color: white;
}
.Login-menu {
    border: none;
    background: transparent;
    color: #71717a;
}
.Login-body {
    padding: 34px;
}
.Login-kicker {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.4px;
    color: #2563eb;
}
.Login-body h2 {
    font-size: 30px;
    margin: 8px 0 6px;
}
.Login-body > p {
    color: #71717a;
    font-size: 13px;
    margin-bottom: 24px;
}
.Login-provider {
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    margin-bottom: 10px;
    font-size: 13px;
}
.Login-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 22px 0;
    color: #a1a1aa;
    font-size: 11px;
}
.Login-divider::before,
.Login-divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e4e4e7;
}
.Login-body > label {
    display: block;
    margin-bottom: 7px;
    font-size: 12px;
    font-weight: 600;
}
.Login-body > input {
    width: 100%;
    height: 46px;
    box-sizing: border-box;
    padding: 0 12px;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    margin-bottom: 16px;
    outline: none;
}
.Login-body > input:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 4px rgba(37,99,235,.08);
}
.Login-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    margin-bottom: 18px;
}
.Login-row a {
    color: #2563eb;
    text-decoration: none;
}
.Login-main-button {
    width: 100%;
    height: 48px;
    border: none;
    border-radius: 10px;
    background: #2563eb;
    color: white;
    font-weight: 600;
}
.Login-help {
    display: flex;
    gap: 7px;
    align-items: center;
    margin-top: 18px;
    color: #71717a;
    font-size: 10px;
}`,
  },
  {
    id: 1834,
    name: "Premium Dark Login",
    preview: (
      <div className="login-1834">
        <div className="login-1834__icon">
          <i className="fa-solid fa-lock"></i>
        </div>
        <h3>Welcome back</h3>
        <p>Sign in to continue to your account.</p>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button>Sign in</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-icon">
        <i class="fa-solid fa-lock"></i>
    </div>
    <h3>Welcome back</h3>
    <p>Sign in to continue to your account.</p>
    <input type="email" placeholder="Email address" />
    <input type="password" placeholder="Password" />
    <button>Sign in</button>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 24px;
    border: 1px solid #27272a;
    border-radius: 16px;
    background: #09090b;
    color: #fff;
}
.Login-icon {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    margin-bottom: 14px;
    border-radius: 10px;
    background: #18181b;
    color: #67e8f9;
}
.Login h3 {
    margin: 0;
    font-size: 18px;
}
.Login p {
    margin: 6px 0 17px;
    color: #71717a;
    font-size: 9px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px 11px;
    border: 1px solid #27272a;
    border-radius: 8px;
    outline: none;
    background: #111113;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #22d3ee;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #fff;
    color: #09090b;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1835,
    name: "Ice Glass Login",
    preview: (
      <div className="login-1835">
        <div className="login-1835__orb"></div>
        <h3>Sign in</h3>
        <span>Access your workspace</span>
        <div className="login-1835__field">
          <i className="fa-solid fa-envelope"></i>
          <input type="email" placeholder="Email" />
        </div>
        <div className="login-1835__field">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-orb"></div>
    <h3>Sign in</h3>
    <span>Access your workspace</span>
    <div class="Login-field">
        <i class="fa-solid fa-envelope"></i>
        <input type="email" placeholder="Email" />
    </div>
    <div class="Login-field">
        <i class="fa-solid fa-lock"></i>
        <input type="password" placeholder="Password" />
    </div>
    <button>Continue</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 285px;
    padding: 24px;
    overflow: hidden;
    border: 1px solid rgba(186,230,253,.35);
    border-radius: 17px;
    background: rgba(255,255,255,.08);
    backdrop-filter: blur(16px);
    color: #fff;
}
.Login-orb {
    position: absolute;
    width: 100px;
    height: 100px;
    top: -45px;
    right: -35px;
    border-radius: 50%;
    background: #22d3ee;
    filter: blur(35px);
    opacity: .2;
}
.Login h3,
.Login > span,
.Login-field,
.Login button {
    position: relative;
    z-index: 1;
}
.Login h3 {
    margin: 0;
    font-size: 18px;
}
.Login > span {
    display: block;
    margin: 5px 0 17px;
    color: #bae6fd;
    font-size: 9px;
}
.Login-field {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 9px;
    padding: 0 10px;
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 8px;
    background: rgba(255,255,255,.07);
}
.Login-field i {
    color: #7dd3fc;
    font-size: 8px;
}
.Login-field input {
    width: 100%;
    padding: 10px 0;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    font-size: 9px;
}
.Login button {
    width: 100%;
    margin-top: 4px;
    padding: 10px;
    border: 1px solid #7dd3fc;
    border-radius: 8px;
    background: rgba(125,211,252,.12);
    color: #e0f2fe;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1836,
    name: "Neon Cyber Login",
    preview: (
      <div className="login-1836">
        <div className="login-1836__header">
          <i className="fa-solid fa-terminal"></i>
          <span>SYSTEM ACCESS</span>
        </div>
        <input type="text" placeholder="USER_ID" />
        <input type="password" placeholder="PASSWORD" />
        <button>AUTHENTICATE</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-header">
        <i class="fa-solid fa-terminal"></i>
        <span>SYSTEM ACCESS</span>
    </div>
    <input type="text" placeholder="USER_ID" />
    <input type="password" placeholder="PASSWORD" />
    <button>AUTHENTICATE</button>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 20px;
    border: 1px solid #155e75;
    background: #020617;
    color: #22d3ee;
    font-family: monospace;
}
.Login-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
    font-size: 9px;
    letter-spacing: 1px;
}
.Login-header i {
    color: #67e8f9;
    text-shadow: 0 0 8px #22d3ee;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #164e63;
    outline: none;
    background: #030712;
    color: #67e8f9;
    font-family: monospace;
    font-size: 8px;
}
.Login input:focus {
    border-color: #22d3ee;
    box-shadow: 0 0 10px rgba(34,211,238,.12);
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #22d3ee;
    background: transparent;
    color: #67e8f9;
    font-family: monospace;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1837,
    name: "Gradient Modern Login",
    preview: (
      <div className="login-1837">
        <h3>Welcome</h3>
        <p>Log in to your account</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <span>Forgot password?</span>
      </div>
    ),
    html: `<div class="Login">
    <h3>Welcome</h3>
    <p>Log in to your account</p>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Login</button>
    <span>Forgot password?</span>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 24px;
    border-radius: 17px;
    background: linear-gradient(145deg,#2563eb,#7c3aed);
    color: #fff;
    box-shadow: 0 15px 35px rgba(99,102,241,.25);
}
.Login h3 {
    margin: 0;
    font-size: 19px;
}
.Login p {
    margin: 5px 0 17px;
    color: rgba(255,255,255,.72);
    font-size: 9px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 8px;
    outline: none;
    background: rgba(255,255,255,.11);
    color: #fff;
    font-size: 9px;
}
.Login input::placeholder {
    color: rgba(255,255,255,.55);
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #fff;
    color: #3730a3;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}
.Login > span {
    display: block;
    margin-top: 12px;
    text-align: center;
    color: rgba(255,255,255,.75);
    font-size: 8px;
}`,
  },
  {
    id: 1838,
    name: "Split Screen Login",
    preview: (
      <div className="login-1838">
        <div className="login-1838__visual">
          <i className="fa-solid fa-cube"></i>
          <strong>ANDRE UI</strong>
        </div>
        <div className="login-1838__form">
          <h3>Welcome back</h3>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
        </div>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-visual">
        <i class="fa-solid fa-cube"></i>
        <strong>ANDRE UI</strong>
    </div>
    <div class="Login-form">
        <h3>Welcome back</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign in</button>
    </div>
</div>`,
    css: `.Login {
    display: flex;
    width: 420px;
    min-height: 235px;
    overflow: hidden;
    border: 1px solid #27272a;
    border-radius: 16px;
    background: #fff;
}
.Login-visual {
    width: 42%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 9px;
    background: linear-gradient(145deg,#0f172a,#2563eb,#7c3aed);
    color: #fff;
}
.Login-visual i {
    font-size: 27px;
}
.Login-visual strong {
    font-size: 9px;
    letter-spacing: 1px;
}
.Login-form {
    flex: 1;
    padding: 24px;
}
.Login-form h3 {
    margin: 0 0 15px;
    color: #18181b;
    font-size: 17px;
}
.Login-form input {
    width: 100%;
    margin-bottom: 8px;
    padding: 9px;
    border: 1px solid #e4e4e7;
    border-radius: 7px;
    outline: none;
    font-size: 9px;
}
.Login-form input:focus {
    border-color: #6366f1;
}
.Login-form button {
    width: 100%;
    padding: 9px;
    border: none;
    border-radius: 7px;
    background: #18181b;
    color: #fff;
    font-size: 9px;
    cursor: pointer;
}`,
  },
  {
    id: 1839,
    name: "Social Login",
    preview: (
      <div className="login-1839">
        <h3>Sign in</h3>
        <button className="login-1839__social">
          <i className="fa-brands fa-google"></i>
          Continue with Google
        </button>
        <button className="login-1839__social">
          <i className="fa-brands fa-github"></i>
          Continue with GitHub
        </button>
        <div className="login-1839__divider">
          <span>or</span>
        </div>
        <input type="email" placeholder="Email address" />
        <button className="login-1839__submit">Continue</button>
      </div>
    ),
    html: `<div class="Login">
    <h3>Sign in</h3>
    <button class="Login-social">
        <i class="fa-brands fa-google"></i>
        Continue with Google
    </button>
    <button class="Login-social">
        <i class="fa-brands fa-github"></i>
        Continue with GitHub
    </button>
    <div class="Login-divider">
        <span>or</span>
    </div>
    <input type="email" placeholder="Email address" />
    <button class="Login-submit">Continue</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 22px;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
    background: #fff;
}
.Login h3 {
    margin: 0 0 15px;
    text-align: center;
    color: #18181b;
    font-size: 18px;
}
.Login-social,
.Login-submit {
    width: 100%;
    padding: 10px;
    margin-bottom: 8px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 9px;
}
.Login-social {
    border: 1px solid #e4e4e7;
    background: #fff;
    color: #27272a;
}
.Login-social i {
    margin-right: 7px;
}
.Login-divider {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 12px 0;
    color: #a1a1aa;
    font-size: 8px;
}
.Login-divider::before,
.Login-divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e4e4e7;
}
.Login input {
    width: 100%;
    margin-bottom: 8px;
    padding: 10px;
    border: 1px solid #e4e4e7;
    border-radius: 8px;
    outline: none;
    font-size: 9px;
}
.Login-submit {
    border: none;
    background: #18181b;
    color: #fff;
}`,
  },
  {
    id: 1840,
    name: "Fire Login",
    preview: (
      <div className="login-1840">
        <div className="login-1840__icon">
          <i className="fa-solid fa-fire"></i>
        </div>
        <h3>Enter the inferno</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Enter</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-icon">
        <i class="fa-solid fa-fire"></i>
    </div>
    <h3>Enter the inferno</h3>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Enter</button>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 23px;
    border: 1px solid #7c2d12;
    border-radius: 15px;
    background: #170704;
    color: #fff;
    box-shadow: 0 0 25px rgba(249,115,22,.12);
}
.Login-icon {
    width: 39px;
    height: 39px;
    display: grid;
    place-items: center;
    margin-bottom: 12px;
    border-radius: 50%;
    background: #291006;
    color: #f97316;
    box-shadow: 0 0 16px rgba(249,115,22,.4);
}
.Login h3 {
    margin: 0 0 15px;
    font-size: 16px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #7c2d12;
    border-radius: 8px;
    outline: none;
    background: #1f0b05;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #f97316;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(135deg,#ef4444,#f97316);
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1841,
    name: "Minimal Login",
    preview: (
      <div className="login-1841">
        <h3>Log in</h3>
        <label>Email</label>
        <input type="email" placeholder="you@example.com" />
        <label>Password</label>
        <input type="password" placeholder="••••••••" />
        <button>Log in</button>
      </div>
    ),
    html: `<div class="Login">
    <h3>Log in</h3>
    <label>Email</label>
    <input type="email" placeholder="you@example.com" />
    <label>Password</label>
    <input type="password" placeholder="••••••••" />
    <button>Log in</button>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 22px;
    color: #18181b;
}
.Login h3 {
    margin: 0 0 18px;
    font-size: 20px;
}
.Login label {
    display: block;
    margin-bottom: 5px;
    color: #52525b;
    font-size: 9px;
    font-weight: 700;
}
.Login input {
    width: 100%;
    margin-bottom: 13px;
    padding: 10px 0;
    border: none;
    border-bottom: 1px solid #d4d4d8;
    outline: none;
    font-size: 10px;
}
.Login input:focus {
    border-color: #18181b;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 7px;
    background: #18181b;
    color: #fff;
    font-size: 9px;
    cursor: pointer;
}`,
  },
  {
    id: 1842,
    name: "Purple Neon Login",
    preview: (
      <div className="login-1842">
        <i className="fa-solid fa-user-astronaut"></i>
        <h3>Welcome, traveler</h3>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Launch session</button>
      </div>
    ),
    html: `<div class="Login">
    <i class="fa-solid fa-user-astronaut"></i>
    <h3>Welcome, traveler</h3>
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <button>Launch session</button>
</div>`,
    css: `.Login {
    width: 285px;
    padding: 23px;
    border: 1px solid #7c3aed;
    border-radius: 16px;
    background: #0f0720;
    color: #fff;
    box-shadow: 0 0 25px rgba(139,92,246,.18);
    text-align: center;
}
.Login > i {
    color: #c4b5fd;
    font-size: 25px;
    text-shadow: 0 0 13px #8b5cf6;
}
.Login h3 {
    margin: 10px 0 16px;
    font-size: 16px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #4c1d95;
    border-radius: 8px;
    outline: none;
    background: #160a25;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #a855f7;
    box-shadow: 0 0 10px rgba(168,85,247,.12);
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #a855f7;
    border-radius: 8px;
    background: rgba(168,85,247,.12);
    color: #e9d5ff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1843,
    name: "Floating Label Login",
    preview: (
      <div className="login-1843">
        <div>
          <input type="email" placeholder=" " />
          <label>Email address</label>
        </div>
        <div>
          <input type="password" placeholder=" " />
          <label>Password</label>
        </div>
        <button>Sign in</button>
      </div>
    ),
    html: `<div class="Login">
    <div>
        <input type="email" placeholder=" " />
        <label>Email address</label>
    </div>
    <div>
        <input type="password" placeholder=" " />
        <label>Password</label>
    </div>
    <button>Sign in</button>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 22px;
}
.Login > div {
    position: relative;
    margin-bottom: 14px;
}
.Login input {
    width: 100%;
    padding: 12px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
    outline: none;
    background: #fff;
    font-size: 9px;
}
.Login label {
    position: absolute;
    left: 10px;
    top: 11px;
    padding: 0 3px;
    background: #fff;
    color: #a1a1aa;
    font-size: 9px;
    pointer-events: none;
    transition: .2s ease;
}
.Login input:focus {
    border-color: #6366f1;
}
.Login input:focus + label,
.Login input:not(:placeholder-shown) + label {
    top: -5px;
    color: #6366f1;
    font-size: 7px;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #6366f1;
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1844,
    name: "Ice Dark Login",
    preview: (
      <div className="login-1844">
        <div className="login-1844__crystal">
          <i className="fa-solid fa-snowflake"></i>
        </div>
        <h3>Frozen Access</h3>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button>Unlock</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-crystal">
        <i class="fa-solid fa-snowflake"></i>
    </div>
    <h3>Frozen Access</h3>
    <input type="email" placeholder="Email address" />
    <input type="password" placeholder="Password" />
    <button>Unlock</button>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 24px;
    border: 1px solid #075985;
    border-radius: 15px;
    background: linear-gradient(145deg,#020617,#082f49);
    color: #e0f2fe;
    text-align: center;
}
.Login-crystal {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    margin: 0 auto 12px;
    border-radius: 12px;
    border: 1px solid #38bdf8;
    color: #bae6fd;
    box-shadow: 0 0 18px rgba(56,189,248,.2);
}
.Login h3 {
    margin: 0 0 16px;
    font-size: 16px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #164e63;
    border-radius: 8px;
    outline: none;
    background: rgba(2,6,23,.6);
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #38bdf8;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #38bdf8;
    border-radius: 8px;
    background: rgba(56,189,248,.1);
    color: #e0f2fe;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1845,
    name: "Ecommerce Login",
    preview: (
      <div className="login-1845">
        <i className="fa-solid fa-bag-shopping"></i>
        <h3>Welcome back</h3>
        <p>Sign in to continue shopping.</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign in</button>
      </div>
    ),
    html: `<div class="Login">
    <i class="fa-solid fa-bag-shopping"></i>
    <h3>Welcome back</h3>
    <p>Sign in to continue shopping.</p>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Sign in</button>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 23px;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
    background: #fff;
}
.Login > i {
    color: #18181b;
    font-size: 22px;
}
.Login h3 {
    margin: 11px 0 4px;
    color: #18181b;
    font-size: 17px;
}
.Login p {
    margin: 0 0 16px;
    color: #71717a;
    font-size: 9px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
    outline: none;
    font-size: 9px;
}
.Login input:focus {
    border-color: #18181b;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #18181b;
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1846,
    name: "Glassmorphism Login",
    preview: (
      <div className="login-1846">
        <div className="login-1846__icon">
          <i className="fa-solid fa-user"></i>
        </div>
        <h3>Sign in</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Continue</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-icon">
        <i class="fa-solid fa-user"></i>
    </div>
    <h3>Sign in</h3>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Continue</button>
</div>`,
    css: `.Login {
    width: 275px;
    padding: 24px;
    border: 1px solid rgba(255,255,255,.28);
    border-radius: 18px;
    background: rgba(255,255,255,.1);
    backdrop-filter: blur(18px);
    color: #fff;
    text-align: center;
}
.Login-icon {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    margin: 0 auto 12px;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: 50%;
    background: rgba(255,255,255,.1);
}
.Login h3 {
    margin: 0 0 16px;
    font-size: 17px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 8px;
    outline: none;
    background: rgba(255,255,255,.08);
    color: #fff;
    font-size: 9px;
}
.Login input::placeholder {
    color: rgba(255,255,255,.55);
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(255,255,255,.4);
    border-radius: 8px;
    background: rgba(255,255,255,.14);
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1847,
    name: "Dashboard Login",
    preview: (
      <div className="login-1847">
        <div className="login-1847__brand">
          <i className="fa-solid fa-chart-line"></i>
          Dashboard
        </div>
        <h3>Sign in to dashboard</h3>
        <input type="email" placeholder="Work email" />
        <input type="password" placeholder="Password" />
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        <button>Sign in</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-brand">
        <i class="fa-solid fa-chart-line"></i>
        Dashboard
    </div>
    <h3>Sign in to dashboard</h3>
    <input type="email" placeholder="Work email" />
    <input type="password" placeholder="Password" />
    <label>
        <input type="checkbox" />
        Remember me
    </label>
    <button>Sign in</button>
</div>`,
    css: `.Login {
    width: 285px;
    padding: 23px;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
    background: #fff;
}
.Login-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 17px;
    color: #2563eb;
    font-size: 10px;
    font-weight: 800;
}
.Login h3 {
    margin: 0 0 15px;
    color: #18181b;
    font-size: 16px;
}
.Login > input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
    outline: none;
    font-size: 9px;
}
.Login > input:focus {
    border-color: #2563eb;
}
.Login label {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 12px;
    color: #71717a;
    font-size: 8px;
}
.Login label input {
    accent-color: #2563eb;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1848,
    name: "Gradient Border Login",
    preview: (
      <div className="login-1848">
        <h3>Welcome</h3>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    ),
    html: `<div class="Login">
    <h3>Welcome</h3>
    <input type="email" placeholder="Email address" />
    <input type="password" placeholder="Password" />
    <button>Login</button>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 24px;
    border: 1px solid transparent;
    border-radius: 16px;
    background:
        linear-gradient(#09090b,#09090b) padding-box,
        linear-gradient(135deg,#22d3ee,#6366f1,#ec4899,#f97316) border-box;
    color: #fff;
}
.Login h3 {
    margin: 0 0 17px;
    font-size: 18px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #27272a;
    border-radius: 8px;
    outline: none;
    background: #111113;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #6366f1;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid transparent;
    border-radius: 8px;
    background: linear-gradient(135deg,#22d3ee,#6366f1,#ec4899);
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1849,
    name: "Rounded Pill Login",
    preview: (
      <div className="login-1849">
        <div className="login-1849__logo">
          <i className="fa-solid fa-user"></i>
        </div>
        <h3>Member Login</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Continue</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-logo">
        <i class="fa-solid fa-user"></i>
    </div>
    <h3>Member Login</h3>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Continue</button>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 23px;
    border: 1px solid #e4e4e7;
    border-radius: 25px;
    background: #fafafa;
    text-align: center;
}
.Login-logo {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    margin: 0 auto 12px;
    border-radius: 50%;
    background: #18181b;
    color: #fff;
}
.Login h3 {
    margin: 0 0 16px;
    color: #18181b;
    font-size: 17px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 11px 14px;
    border: 1px solid #d4d4d8;
    border-radius: 999px;
    outline: none;
    background: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #18181b;
}
.Login button {
    width: 100%;
    padding: 11px;
    border: none;
    border-radius: 999px;
    background: #18181b;
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1850,
    name: "Terminal Login",
    preview: (
      <div className="login-1850">
        <div className="login-1850__top">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>&gt; authenticate_user</p>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>ENTER</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-top">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <p>> authenticate_user</p>
    <input type="text" placeholder="username" />
    <input type="password" placeholder="password" />
    <button>ENTER</button>
</div>`,
    css: `.Login {
    width: 290px;
    overflow: hidden;
    border: 1px solid #27272a;
    border-radius: 9px;
    background: #050505;
    color: #4ade80;
    font-family: monospace;
}
.Login-top {
    display: flex;
    gap: 5px;
    padding: 8px;
    background: #111113;
    border-bottom: 1px solid #27272a;
}
.Login-top span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
}
.Login-top span:nth-child(1) {
    background: #ef4444;
}
.Login-top span:nth-child(2) {
    background: #facc15;
}
.Login-top span:nth-child(3) {
    background: #22c55e;
}
.Login > p {
    margin: 15px 18px 11px;
    font-size: 8px;
}
.Login input {
    width: calc(100% - 36px);
    margin: 0 18px 8px;
    padding: 9px;
    border: 1px solid #14532d;
    border-radius: 5px;
    outline: none;
    background: #020908;
    color: #4ade80;
    font-family: monospace;
    font-size: 8px;
}
.Login input:focus {
    border-color: #22c55e;
    box-shadow: 0 0 8px rgba(34,197,94,.1);
}
.Login button {
    width: calc(100% - 36px);
    margin: 4px 18px 18px;
    padding: 9px;
    border: 1px solid #22c55e;
    background: transparent;
    color: #4ade80;
    font-family: monospace;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1851,
    name: "Luxury Gold Login",
    preview: (
      <div className="login-1851">
        <div className="login-1851__icon">
          <i className="fa-solid fa-crown"></i>
        </div>
        <h3>Member Access</h3>
        <span>Exclusive workspace</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Enter</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-icon">
        <i class="fa-solid fa-crown"></i>
    </div>
    <h3>Member Access</h3>
    <span>Exclusive workspace</span>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Enter</button>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 24px;
    border: 1px solid #a16207;
    border-radius: 15px;
    background: linear-gradient(145deg,#09090b,#1c1917);
    color: #fff;
    text-align: center;
}
.Login-icon {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    margin: 0 auto 12px;
    border-radius: 11px;
    background: linear-gradient(135deg,#facc15,#f59e0b);
    color: #451a03;
    box-shadow: 0 0 18px rgba(250,204,21,.2);
}
.Login h3 {
    margin: 0;
    font-size: 17px;
}
.Login > span {
    display: block;
    margin: 5px 0 17px;
    color: #a8a29e;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #44403c;
    border-radius: 8px;
    outline: none;
    background: #18181b;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #facc15;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(135deg,#facc15,#d97706);
    color: #451a03;
    font-size: 9px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1852,
    name: "Holographic Login",
    preview: (
      <div className="login-1852">
        <div className="login-1852__glow"></div>
        <i className="fa-solid fa-fingerprint"></i>
        <h3>Identity check</h3>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Passcode" />
        <button>Verify identity</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-glow"></div>
    <i class="fa-solid fa-fingerprint"></i>
    <h3>Identity check</h3>
    <input type="email" placeholder="Email address" />
    <input type="password" placeholder="Passcode" />
    <button>Verify identity</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 285px;
    padding: 25px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 17px;
    background: rgba(10,10,15,.88);
    color: #fff;
    text-align: center;
}
.Login-glow {
    position: absolute;
    width: 150px;
    height: 150px;
    left: 50%;
    top: -100px;
    transform: translateX(-50%);
    border-radius: 50%;
    background: linear-gradient(90deg,#22d3ee,#8b5cf6,#ec4899);
    filter: blur(45px);
    opacity: .22;
}
.Login > i {
    position: relative;
    color: #67e8f9;
    font-size: 27px;
    text-shadow: 0 0 14px #22d3ee;
}
.Login h3 {
    position: relative;
    margin: 11px 0 17px;
    font-size: 17px;
}
.Login input {
    position: relative;
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #3f3f46;
    border-radius: 8px;
    outline: none;
    background: rgba(255,255,255,.05);
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #8b5cf6;
}
.Login button {
    position: relative;
    width: 100%;
    padding: 10px;
    border: 1px solid transparent;
    border-radius: 8px;
    background:
        linear-gradient(#18181b,#18181b) padding-box,
        linear-gradient(90deg,#22d3ee,#8b5cf6,#ec4899) border-box;
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1853,
    name: "Legendary Prism Login",
    preview: (
      <div className="login-1853">
        <div className="login-1853__shine"></div>
        <div className="login-1853__icon">
          <i className="fa-solid fa-gem"></i>
        </div>
        <h3>Legendary Access</h3>
        <p>Enter the next level of your workspace.</p>
        <div className="login-1853__field">
          <i className="fa-solid fa-envelope"></i>
          <input type="email" placeholder="Email address" />
        </div>
        <div className="login-1853__field">
          <i className="fa-solid fa-key"></i>
          <input type="password" placeholder="Password" />
        </div>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
          Enter workspace
        </button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-shine"></div>
    <div class="Login-icon">
        <i class="fa-solid fa-gem"></i>
    </div>
    <h3>Legendary Access</h3>
    <p>Enter the next level of your workspace.</p>
    <div class="Login-field">
        <i class="fa-solid fa-envelope"></i>
        <input type="email" placeholder="Email address" />
    </div>
    <div class="Login-field">
        <i class="fa-solid fa-key"></i>
        <input type="password" placeholder="Password" />
    </div>
    <button>
        <i class="fa-solid fa-arrow-right"></i>
        Enter workspace
    </button>
</div>`,
    css: `.Login {
    position: relative;
    width: 310px;
    padding: 25px;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 18px;
    background:
        linear-gradient(#08080a,#08080a) padding-box,
        linear-gradient(135deg,#22d3ee,#3b82f6,#8b5cf6,#ec4899,#f97316) border-box;
    color: #fff;
    box-shadow: 0 0 30px rgba(99,102,241,.16);
}
.Login-shine {
    position: absolute;
    width: 70px;
    height: 150%;
    top: -25%;
    left: -80px;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.45),transparent);
    transform: skewX(-20deg);
    animation: login-shine-1853 3s ease-in-out infinite;
}
.Login-icon {
    position: relative;
    width: 43px;
    height: 43px;
    display: grid;
    place-items: center;
    margin-bottom: 12px;
    border: 1px solid rgba(103,232,249,.45);
    border-radius: 12px;
    background: rgba(34,211,238,.08);
    color: #67e8f9;
    box-shadow: 0 0 17px rgba(34,211,238,.15);
}
.Login-icon i {
    text-shadow: 0 0 10px #22d3ee;
}
.Login h3 {
    position: relative;
    margin: 0;
    font-size: 18px;
}
.Login p {
    position: relative;
    margin: 5px 0 17px;
    color: #a1a1aa;
    font-size: 9px;
}
.Login-field {
    position: relative;
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 9px;
    padding: 0 10px;
    border: 1px solid #27272a;
    border-radius: 8px;
    background: #111113;
}
.Login-field i {
    color: #8b5cf6;
    font-size: 8px;
}
.Login-field input {
    width: 100%;
    padding: 10px 0;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    font-size: 9px;
}
.Login button {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    margin-top: 4px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    color: #fff;
    font-size: 9px;
    font-weight: 900;
    cursor: pointer;
}
@keyframes login-shine-1853 {
    0% {
        left: -80px;
    }
    55% {
        left: 135%;
    }
    100% {
        left: 135%;
    }
}`,
  },

  {
    id: 1854,
    name: "Aurora Login",
    preview: (
      <div className="login-1854">
        <div className="login-1854__aurora"></div>
        <div className="login-1854__icon">
          <i className="fa-solid fa-user"></i>
        </div>
        <h3>Welcome back</h3>
        <p>Sign in to continue</p>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button>Sign in</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-aurora"></div>
    <div class="Login-icon">
        <i class="fa-solid fa-user"></i>
    </div>
    <h3>Welcome back</h3>
    <p>Sign in to continue</p>
    <input type="email" placeholder="Email address" />
    <input type="password" placeholder="Password" />
    <button>Sign in</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 285px;
    padding: 24px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 18px;
    background: #07111f;
    color: #fff;
}
.Login-aurora {
    position: absolute;
    width: 150px;
    height: 150px;
    top: -80px;
    left: -30px;
    border-radius: 50%;
    background: linear-gradient(135deg,#22d3ee,#6366f1,#ec4899);
    filter: blur(45px);
    opacity: .25;
}
.Login-icon,
.Login h3,
.Login p,
.Login input,
.Login button {
    position: relative;
}
.Login-icon {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border-radius: 11px;
    background: rgba(255,255,255,.08);
    color: #67e8f9;
}
.Login h3 {
    margin: 0;
    font-size: 18px;
}
.Login p {
    margin: 5px 0 16px;
    color: #94a3b8;
    font-size: 9px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 8px;
    outline: none;
    background: rgba(255,255,255,.05);
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #22d3ee;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#22d3ee,#6366f1);
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1855,
    name: "Blue Neon Login",
    preview: (
      <div className="login-1855">
        <div className="login-1855__title">
          <i className="fa-solid fa-bolt"></i>
          <span>SECURE LOGIN</span>
        </div>
        <input type="text" placeholder="USERNAME" />
        <input type="password" placeholder="PASSWORD" />
        <button>ACCESS</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-title">
        <i class="fa-solid fa-bolt"></i>
        <span>SECURE LOGIN</span>
    </div>
    <input type="text" placeholder="USERNAME" />
    <input type="password" placeholder="PASSWORD" />
    <button>ACCESS</button>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 20px;
    border: 1px solid #0ea5e9;
    border-radius: 10px;
    background: #020617;
    color: #38bdf8;
    box-shadow: 0 0 20px rgba(14,165,233,.14);
    font-family: monospace;
}
.Login-title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 1px;
}
.Login-title i {
    text-shadow: 0 0 9px #22d3ee;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #164e63;
    border-radius: 6px;
    outline: none;
    background: #03101c;
    color: #67e8f9;
    font-family: monospace;
    font-size: 8px;
}
.Login input:focus {
    border-color: #22d3ee;
    box-shadow: 0 0 10px rgba(34,211,238,.12);
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #22d3ee;
    border-radius: 6px;
    background: rgba(34,211,238,.08);
    color: #67e8f9;
    font-family: monospace;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1856,
    name: "Soft Purple Login",
    preview: (
      <div className="login-1856">
        <div className="login-1856__icon">
          <i className="fa-solid fa-sparkles"></i>
        </div>
        <h3>Sign in</h3>
        <p>Enter your details below</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Continue</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-icon">
        <i class="fa-solid fa-sparkles"></i>
    </div>
    <h3>Sign in</h3>
    <p>Enter your details below</p>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Continue</button>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 23px;
    border: 1px solid #ddd6fe;
    border-radius: 17px;
    background: #faf5ff;
    color: #312e81;
}
.Login-icon {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border-radius: 11px;
    background: linear-gradient(135deg,#8b5cf6,#6366f1);
    color: #fff;
}
.Login h3 {
    margin: 0;
    font-size: 18px;
}
.Login p {
    margin: 5px 0 17px;
    color: #7c83a4;
    font-size: 9px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #ddd6fe;
    border-radius: 8px;
    outline: none;
    background: #fff;
    color: #312e81;
    font-size: 9px;
}
.Login input:focus {
    border-color: #8b5cf6;
    box-shadow: 0 0 0 3px rgba(139,92,246,.1);
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #7c3aed;
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1857,
    name: "Split Login Card",
    preview: (
      <div className="login-1857">
        <div className="login-1857__side">
          <i className="fa-solid fa-rocket"></i>
          <strong>Launch</strong>
        </div>
        <div className="login-1857__form">
          <h3>Login</h3>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Enter</button>
        </div>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-side">
        <i class="fa-solid fa-rocket"></i>
        <strong>Launch</strong>
    </div>
    <div class="Login-form">
        <h3>Login</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Enter</button>
    </div>
</div>`,
    css: `.Login {
    display: flex;
    width: 410px;
    min-height: 220px;
    overflow: hidden;
    border-radius: 16px;
    border: 1px solid #e4e4e7;
    background: #fff;
}
.Login-side {
    width: 38%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: linear-gradient(160deg,#0f172a,#2563eb,#06b6d4);
    color: #fff;
}
.Login-side i {
    font-size: 25px;
}
.Login-side strong {
    font-size: 10px;
}
.Login-form {
    flex: 1;
    padding: 22px;
}
.Login-form h3 {
    margin: 0 0 15px;
    color: #18181b;
    font-size: 18px;
}
.Login-form input {
    width: 100%;
    margin-bottom: 8px;
    padding: 9px;
    border: 1px solid #e4e4e7;
    border-radius: 7px;
    outline: none;
    font-size: 9px;
}
.Login-form input:focus {
    border-color: #2563eb;
}
.Login-form button {
    width: 100%;
    padding: 9px;
    border: none;
    border-radius: 7px;
    background: #2563eb;
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1858,
    name: "Glass Aurora Login",
    preview: (
      <div className="login-1858">
        <div className="login-1858__glow"></div>
        <i className="fa-solid fa-fingerprint"></i>
        <h3>Identity</h3>
        <p>Verify your account to continue.</p>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button>Verify</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-glow"></div>
    <i class="fa-solid fa-fingerprint"></i>
    <h3>Identity</h3>
    <p>Verify your account to continue.</p>
    <input type="email" placeholder="Email address" />
    <input type="password" placeholder="Password" />
    <button>Verify</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 285px;
    padding: 24px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.22);
    border-radius: 18px;
    background: rgba(255,255,255,.08);
    backdrop-filter: blur(18px);
    color: #fff;
    text-align: center;
}
.Login-glow {
    position: absolute;
    width: 130px;
    height: 130px;
    top: -70px;
    right: -35px;
    border-radius: 50%;
    background: #6366f1;
    filter: blur(40px);
    opacity: .3;
}
.Login > i {
    position: relative;
    font-size: 28px;
    color: #c4b5fd;
    text-shadow: 0 0 14px #8b5cf6;
}
.Login h3 {
    position: relative;
    margin: 10px 0 4px;
    font-size: 18px;
}
.Login p {
    position: relative;
    margin: 0 0 16px;
    color: rgba(255,255,255,.62);
    font-size: 9px;
}
.Login input {
    position: relative;
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 8px;
    outline: none;
    background: rgba(255,255,255,.08);
    color: #fff;
    font-size: 9px;
}
.Login input::placeholder {
    color: rgba(255,255,255,.5);
}
.Login button {
    position: relative;
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(255,255,255,.35);
    border-radius: 8px;
    background: rgba(255,255,255,.14);
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1859,
    name: "Developer Login",
    preview: (
      <div className="login-1859">
        <div className="login-1859__brand">
          <i className="fa-solid fa-code"></i>
          DEV CONSOLE
        </div>
        <label>Username</label>
        <input type="text" placeholder="andre_dev" />
        <label>Password</label>
        <input type="password" placeholder="••••••••" />
        <button>Sign in</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-brand">
        <i class="fa-solid fa-code"></i>
        DEV CONSOLE
    </div>
    <label>Username</label>
    <input type="text" placeholder="andre_dev" />
    <label>Password</label>
    <input type="password" placeholder="••••••••" />
    <button>Sign in</button>
</div>`,
    css: `.Login {
    width: 285px;
    padding: 21px;
    border: 1px solid #27272a;
    border-radius: 10px;
    background: #09090b;
    color: #d4d4d8;
    font-family: monospace;
}
.Login-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 17px;
    color: #67e8f9;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 1px;
}
.Login-brand i {
    text-shadow: 0 0 8px #22d3ee;
}
.Login label {
    display: block;
    margin-bottom: 5px;
    color: #71717a;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 10px;
    padding: 9px;
    border: 1px solid #27272a;
    border-radius: 6px;
    outline: none;
    background: #111113;
    color: #fff;
    font-family: monospace;
    font-size: 8px;
}
.Login input:focus {
    border-color: #22d3ee;
}
.Login button {
    width: 100%;
    padding: 9px;
    border: 1px solid #22d3ee;
    border-radius: 6px;
    background: transparent;
    color: #67e8f9;
    font-family: monospace;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1860,
    name: "Neon Pink Login",
    preview: (
      <div className="login-1860">
        <div className="login-1860__icon">
          <i className="fa-solid fa-heart"></i>
        </div>
        <h3>Welcome</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Enter</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-icon">
        <i class="fa-solid fa-heart"></i>
    </div>
    <h3>Welcome</h3>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Enter</button>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 23px;
    border: 1px solid #9d174d;
    border-radius: 16px;
    background: #160611;
    color: #fff;
    box-shadow: 0 0 25px rgba(236,72,153,.12);
}
.Login-icon {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border-radius: 50%;
    background: rgba(236,72,153,.1);
    color: #f472b6;
    box-shadow: 0 0 14px rgba(236,72,153,.3);
}
.Login h3 {
    margin: 0 0 15px;
    font-size: 18px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #4a0d2b;
    border-radius: 8px;
    outline: none;
    background: #1d0714;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #ec4899;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#db2777,#ec4899);
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1861,
    name: "Clean SaaS Login",
    preview: (
      <div className="login-1861">
        <h3>Sign in to workspace</h3>
        <input type="email" placeholder="you@company.com" />
        <input type="password" placeholder="Password" />
        <div className="login-1861__row">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot?</a>
        </div>
        <button>Sign in</button>
      </div>
    ),
    html: `<div class="Login">
    <h3>Sign in to workspace</h3>
    <input type="email" placeholder="you@company.com" />
    <input type="password" placeholder="Password" />
    <div class="Login-row">
        <label>
            <input type="checkbox" />
            Remember me
        </label>
        <a href="#">Forgot?</a>
    </div>
    <button>Sign in</button>
</div>`,
    css: `.Login {
    width: 285px;
    padding: 24px;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
    background: #fff;
}
.Login h3 {
    margin: 0 0 16px;
    color: #18181b;
    font-size: 17px;
}
.Login > input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
    outline: none;
    font-size: 9px;
}
.Login > input:focus {
    border-color: #2563eb;
}
.Login-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3px 0 13px;
}
.Login-row label {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #71717a;
    font-size: 8px;
}
.Login-row input {
    accent-color: #2563eb;
}
.Login-row a {
    color: #2563eb;
    text-decoration: none;
    font-size: 8px;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1862,
    name: "Fire Glass Login",
    preview: (
      <div className="login-1862">
        <div className="login-1862__flame">
          <i className="fa-solid fa-fire"></i>
        </div>
        <h3>Enter the fire</h3>
        <p>Unlock your workspace</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Unlock</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-flame">
        <i class="fa-solid fa-fire"></i>
    </div>
    <h3>Enter the fire</h3>
    <p>Unlock your workspace</p>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Unlock</button>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 24px;
    border: 1px solid rgba(249,115,22,.35);
    border-radius: 18px;
    background: rgba(30,10,4,.8);
    color: #fff;
    box-shadow: 0 0 25px rgba(249,115,22,.12);
}
.Login-flame {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border-radius: 12px;
    background: rgba(249,115,22,.1);
    color: #fb923c;
    box-shadow: 0 0 15px rgba(249,115,22,.3);
}
.Login h3 {
    margin: 0;
    font-size: 17px;
}
.Login p {
    margin: 5px 0 16px;
    color: #d6a67d;
    font-size: 9px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #7c2d12;
    border-radius: 8px;
    outline: none;
    background: rgba(69,10,3,.35);
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #f97316;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #fb923c;
    border-radius: 8px;
    background: linear-gradient(135deg,#ea580c,#f97316);
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1863,
    name: "Social Cards Login",
    preview: (
      <div className="login-1863">
        <h3>Join the community</h3>
        <button>
          <i className="fa-brands fa-google"></i>
          Continue with Google
        </button>
        <button>
          <i className="fa-brands fa-github"></i>
          Continue with GitHub
        </button>
        <div className="login-1863__line">
          <span>OR</span>
        </div>
        <input type="email" placeholder="Email address" />
        <button className="login-1863__email">Continue with email</button>
      </div>
    ),
    html: `<div class="Login">
    <h3>Join the community</h3>
    <button>
        <i class="fa-brands fa-google"></i>
        Continue with Google
    </button>
    <button>
        <i class="fa-brands fa-github"></i>
        Continue with GitHub
    </button>
    <div class="Login-line">
        <span>OR</span>
    </div>
    <input type="email" placeholder="Email address" />
    <button class="Login-email">Continue with email</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 22px;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
    background: #fff;
}
.Login h3 {
    margin: 0 0 16px;
    color: #18181b;
    font-size: 17px;
    text-align: center;
}
.Login > button {
    width: 100%;
    margin-bottom: 8px;
    padding: 10px;
    border: 1px solid #e4e4e7;
    border-radius: 8px;
    background: #fff;
    color: #27272a;
    font-size: 9px;
    cursor: pointer;
}
.Login > button i {
    margin-right: 7px;
}
.Login-line {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 12px 0;
    color: #a1a1aa;
    font-size: 7px;
}
.Login-line::before,
.Login-line::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e4e4e7;
}
.Login input {
    width: 100%;
    margin-bottom: 8px;
    padding: 10px;
    border: 1px solid #e4e4e7;
    border-radius: 8px;
    outline: none;
    font-size: 9px;
}
.Login-email {
    background: #18181b !important;
    color: #fff !important;
    border-color: #18181b !important;
}`,
  },
  {
    id: 1864,
    name: "Black Gold Login",
    preview: (
      <div className="login-1864">
        <div className="login-1864__crown">
          <i className="fa-solid fa-crown"></i>
        </div>
        <h3>Private Access</h3>
        <p>Members only</p>
        <input type="email" placeholder="Member email" />
        <input type="password" placeholder="Access key" />
        <button>ENTER</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-crown">
        <i class="fa-solid fa-crown"></i>
    </div>
    <h3>Private Access</h3>
    <p>Members only</p>
    <input type="email" placeholder="Member email" />
    <input type="password" placeholder="Access key" />
    <button>ENTER</button>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 24px;
    border: 1px solid #a16207;
    border-radius: 14px;
    background: #0b0a08;
    color: #fff;
    text-align: center;
    box-shadow: 0 0 25px rgba(250,204,21,.08);
}
.Login-crown {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    margin: 0 auto 12px;
    border-radius: 12px;
    background: linear-gradient(135deg,#facc15,#d97706);
    color: #451a03;
}
.Login h3 {
    margin: 0;
    font-size: 17px;
}
.Login p {
    margin: 5px 0 17px;
    color: #a8a29e;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #44403c;
    border-radius: 8px;
    outline: none;
    background: #171513;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #facc15;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(135deg,#fde047,#d97706);
    color: #451a03;
    font-size: 9px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1865,
    name: "Ice Crystal Login",
    preview: (
      <div className="login-1865">
        <div className="login-1865__crystal">
          <i className="fa-solid fa-snowflake"></i>
        </div>
        <h3>Frozen Portal</h3>
        <p>Secure access through the crystal gate.</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Open portal</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-crystal">
        <i class="fa-solid fa-snowflake"></i>
    </div>
    <h3>Frozen Portal</h3>
    <p>Secure access through the crystal gate.</p>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Open portal</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 24px;
    border: 1px solid #38bdf8;
    border-radius: 16px;
    background: linear-gradient(145deg,#020617,#082f49);
    color: #e0f2fe;
    box-shadow: 0 0 24px rgba(56,189,248,.15);
}
.Login-crystal {
    width: 43px;
    height: 43px;
    display: grid;
    place-items: center;
    margin-bottom: 12px;
    border: 1px solid #7dd3fc;
    border-radius: 12px;
    background: rgba(56,189,248,.08);
    color: #bae6fd;
    box-shadow: 0 0 15px rgba(56,189,248,.25);
}
.Login h3 {
    margin: 0;
    font-size: 17px;
}
.Login p {
    margin: 5px 0 17px;
    color: #7dd3fc;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #164e63;
    border-radius: 8px;
    outline: none;
    background: #031827;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #38bdf8;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #38bdf8;
    border-radius: 8px;
    background: rgba(56,189,248,.1);
    color: #e0f2fe;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1866,
    name: "Rainbow Login",
    preview: (
      <div className="login-1866">
        <div className="login-1866__inner">
          <i className="fa-solid fa-star"></i>
          <h3>Colorful Access</h3>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Enter</button>
        </div>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-inner">
        <i class="fa-solid fa-star"></i>
        <h3>Colorful Access</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Enter</button>
    </div>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 2px;
    border-radius: 17px;
    background: linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899);
}
.Login-inner {
    padding: 23px;
    border-radius: 15px;
    background: #09090b;
    color: #fff;
    text-align: center;
}
.Login-inner > i {
    color: #fde68a;
    font-size: 23px;
    text-shadow: 0 0 10px #facc15;
}
.Login h3 {
    margin: 9px 0 16px;
    font-size: 17px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #27272a;
    border-radius: 8px;
    outline: none;
    background: #111113;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #8b5cf6;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1867,
    name: "Centered Minimal Login",
    preview: (
      <div className="login-1867">
        <div className="login-1867__logo">
          <i className="fa-solid fa-user"></i>
        </div>
        <h3>Welcome back</h3>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button>Sign in</button>
        <span>New here? Create an account</span>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-logo">
        <i class="fa-solid fa-user"></i>
    </div>
    <h3>Welcome back</h3>
    <input type="email" placeholder="Email address" />
    <input type="password" placeholder="Password" />
    <button>Sign in</button>
    <span>New here? Create an account</span>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 24px;
    text-align: center;
}
.Login-logo {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    margin: 0 auto 13px;
    border-radius: 50%;
    background: #18181b;
    color: #fff;
}
.Login h3 {
    margin: 0 0 17px;
    color: #18181b;
    font-size: 18px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
    outline: none;
    font-size: 9px;
}
.Login input:focus {
    border-color: #18181b;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #18181b;
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}
.Login > span {
    display: block;
    margin-top: 11px;
    color: #71717a;
    font-size: 8px;
}`,
  },
  {
    id: 1868,
    name: "Security Shield Login",
    preview: (
      <div className="login-1868">
        <div className="login-1868__shield">
          <i className="fa-solid fa-shield-halved"></i>
        </div>
        <h3>Secure sign in</h3>
        <p>Your account is protected.</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Authenticate</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-shield">
        <i class="fa-solid fa-shield-halved"></i>
    </div>
    <h3>Secure sign in</h3>
    <p>Your account is protected.</p>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Authenticate</button>
</div>`,
    css: `.Login {
    width: 285px;
    padding: 24px;
    border: 1px solid #bbf7d0;
    border-radius: 16px;
    background: linear-gradient(145deg,#f0fdf4,#ffffff);
    color: #166534;
}
.Login-shield {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    margin-bottom: 12px;
    border-radius: 12px;
    background: #dcfce7;
    color: #16a34a;
}
.Login h3 {
    margin: 0;
    color: #14532d;
    font-size: 17px;
}
.Login p {
    margin: 5px 0 17px;
    color: #4d7c5d;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #bbf7d0;
    border-radius: 8px;
    outline: none;
    background: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #22c55e;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #16a34a;
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1869,
    name: "Floating Field Login",
    preview: (
      <div className="login-1869">
        <h3>Account login</h3>
        <div>
          <input type="email" placeholder=" " />
          <label>Email</label>
        </div>
        <div>
          <input type="password" placeholder=" " />
          <label>Password</label>
        </div>
        <button>Continue</button>
      </div>
    ),
    html: `<div class="Login">
    <h3>Account login</h3>
    <div>
        <input type="email" placeholder=" " />
        <label>Email</label>
    </div>
    <div>
        <input type="password" placeholder=" " />
        <label>Password</label>
    </div>
    <button>Continue</button>
</div>`,
    css: `.Login {
    width: 280px;
    padding: 23px;
}
.Login h3 {
    margin: 0 0 18px;
    color: #18181b;
    font-size: 18px;
}
.Login > div {
    position: relative;
    margin-bottom: 14px;
}
.Login input {
    width: 100%;
    padding: 12px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
    outline: none;
    background: #fff;
    font-size: 9px;
}
.Login label {
    position: absolute;
    left: 10px;
    top: 11px;
    padding: 0 3px;
    background: #fff;
    color: #a1a1aa;
    font-size: 9px;
    pointer-events: none;
    transition: .2s ease;
}
.Login input:focus {
    border-color: #8b5cf6;
}
.Login input:focus + label,
.Login input:not(:placeholder-shown) + label {
    top: -5px;
    color: #8b5cf6;
    font-size: 7px;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #7c3aed;
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1870,
    name: "Purple Cyber Login",
    preview: (
      <div className="login-1870">
        <div className="login-1870__header">
          <i className="fa-solid fa-microchip"></i>
          <span>NEURAL ACCESS</span>
        </div>
        <input type="text" placeholder="IDENTITY" />
        <input type="password" placeholder="ACCESS CODE" />
        <button>INITIALIZE</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-header">
        <i class="fa-solid fa-microchip"></i>
        <span>NEURAL ACCESS</span>
    </div>
    <input type="text" placeholder="IDENTITY" />
    <input type="password" placeholder="ACCESS CODE" />
    <button>INITIALIZE</button>
</div>`,
    css: `.Login {
    width: 285px;
    padding: 20px;
    border: 1px solid #7c3aed;
    border-radius: 9px;
    background: #0c0615;
    color: #d8b4fe;
    font-family: monospace;
    box-shadow: 0 0 20px rgba(139,92,246,.12);
}
.Login-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1.2px;
}
.Login-header i {
    color: #c084fc;
    text-shadow: 0 0 9px #a855f7;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #4c1d95;
    border-radius: 6px;
    outline: none;
    background: #12091d;
    color: #d8b4fe;
    font-family: monospace;
    font-size: 8px;
}
.Login input:focus {
    border-color: #a855f7;
    box-shadow: 0 0 9px rgba(168,85,247,.12);
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #a855f7;
    border-radius: 6px;
    background: rgba(168,85,247,.08);
    color: #d8b4fe;
    font-family: monospace;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1871,
    name: "Pink Gradient Login",
    preview: (
      <div className="login-1871">
        <div className="login-1871__icon">
          <i className="fa-solid fa-heart"></i>
        </div>
        <h3>Nice to see you</h3>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button>Welcome in</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-icon">
        <i class="fa-solid fa-heart"></i>
    </div>
    <h3>Nice to see you</h3>
    <input type="email" placeholder="Email address" />
    <input type="password" placeholder="Password" />
    <button>Welcome in</button>
</div>`,
    css: `.Login {
    width: 285px;
    padding: 24px;
    border-radius: 18px;
    background: linear-gradient(145deg,#ec4899,#8b5cf6);
    color: #fff;
    box-shadow: 0 15px 35px rgba(139,92,246,.22);
}
.Login-icon {
    width: 41px;
    height: 41px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border-radius: 12px;
    background: rgba(255,255,255,.15);
}
.Login h3 {
    margin: 0 0 16px;
    font-size: 18px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid rgba(255,255,255,.22);
    border-radius: 8px;
    outline: none;
    background: rgba(255,255,255,.1);
    color: #fff;
    font-size: 9px;
}
.Login input::placeholder {
    color: rgba(255,255,255,.6);
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #fff;
    color: #7c3aed;
    font-size: 9px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1872,
    name: "Glass Prism Login",
    preview: (
      <div className="login-1872">
        <div className="login-1872__prism"></div>
        <div className="login-1872__top">
          <i className="fa-solid fa-gem"></i>
          <span>PRISM</span>
        </div>
        <h3>Welcome inside</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Enter workspace</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-prism"></div>
    <div class="Login-top">
        <i class="fa-solid fa-gem"></i>
        <span>PRISM</span>
    </div>
    <h3>Welcome inside</h3>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Enter workspace</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 300px;
    padding: 24px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 18px;
    background: #09090b;
    color: #fff;
}
.Login-prism {
    position: absolute;
    width: 170px;
    height: 170px;
    right: -80px;
    top: -90px;
    border-radius: 50%;
    background: linear-gradient(135deg,#22d3ee,#6366f1,#ec4899,#f97316);
    filter: blur(45px);
    opacity: .28;
}
.Login-top {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
    color: #67e8f9;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
}
.Login-top i {
    text-shadow: 0 0 10px #22d3ee;
}
.Login h3 {
    position: relative;
    margin: 0 0 17px;
    font-size: 18px;
}
.Login input {
    position: relative;
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #27272a;
    border-radius: 8px;
    outline: none;
    background: #111113;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #8b5cf6;
}
.Login button {
    position: relative;
    width: 100%;
    padding: 10px;
    border: 1px solid transparent;
    border-radius: 8px;
    background:
        linear-gradient(#18181b,#18181b) padding-box,
        linear-gradient(90deg,#22d3ee,#6366f1,#ec4899) border-box;
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1873,
    name: "Legendary Cosmic Login",
    preview: (
      <div className="login-1873">
        <div className="login-1873__stars"></div>
        <div className="login-1873__icon">
          <i className="fa-solid fa-wand-magic-sparkles"></i>
        </div>
        <h3>Cosmic Access</h3>
        <p>Unlock your next dimension.</p>
        <div className="login-1873__field">
          <i className="fa-solid fa-envelope"></i>
          <input type="email" placeholder="Email address" />
        </div>
        <div className="login-1873__field">
          <i className="fa-solid fa-key"></i>
          <input type="password" placeholder="Password" />
        </div>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
          Enter
        </button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-stars"></div>
    <div class="Login-icon">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
    </div>
    <h3>Cosmic Access</h3>
    <p>Unlock your next dimension.</p>
    <div class="Login-field">
        <i class="fa-solid fa-envelope"></i>
        <input type="email" placeholder="Email address" />
    </div>
    <div class="Login-field">
        <i class="fa-solid fa-key"></i>
        <input type="password" placeholder="Password" />
    </div>
    <button>
        <i class="fa-solid fa-arrow-right"></i>
        Enter
    </button>
</div>`,
    css: `.Login {
    position: relative;
    width: 305px;
    padding: 25px;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 18px;
    background:
        linear-gradient(#050509,#050509) padding-box,
        linear-gradient(135deg,#22d3ee,#6366f1,#ec4899,#f97316) border-box;
    color: #fff;
    box-shadow: 0 0 30px rgba(99,102,241,.18);
}
.Login-stars {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at 15% 20%,rgba(103,232,249,.8) 0 1px,transparent 2px),
        radial-gradient(circle at 80% 25%,rgba(255,255,255,.8) 0 1px,transparent 2px),
        radial-gradient(circle at 60% 75%,rgba(236,72,153,.8) 0 1px,transparent 2px),
        radial-gradient(circle at 90% 80%,rgba(129,140,248,.8) 0 1px,transparent 2px);
    opacity: .5;
}
.Login-icon {
    position: relative;
    width: 43px;
    height: 43px;
    display: grid;
    place-items: center;
    margin-bottom: 12px;
    border: 1px solid rgba(103,232,249,.4);
    border-radius: 12px;
    background: rgba(34,211,238,.08);
    color: #c4b5fd;
    box-shadow: 0 0 18px rgba(34,211,238,.12);
}
.Login-icon i {
    text-shadow: 0 0 11px #8b5cf6;
}
.Login h3 {
    position: relative;
    margin: 0;
    font-size: 18px;
}
.Login p {
    position: relative;
    margin: 5px 0 17px;
    color: #a1a1aa;
    font-size: 9px;
}
.Login-field {
    position: relative;
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 9px;
    padding: 0 10px;
    border: 1px solid #27272a;
    border-radius: 8px;
    background: rgba(255,255,255,.04);
}
.Login-field i {
    color: #67e8f9;
    font-size: 8px;
}
.Login-field input {
    width: 100%;
    padding: 10px 0;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    font-size: 9px;
}
.Login button {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    margin-top: 4px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    color: #fff;
    font-size: 9px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1874,
    name: "Black Ice Login",
    preview: (
      <div className="login-1874">
        <div className="login-1874__core">
          <i className="fa-solid fa-snowflake"></i>
        </div>
        <h3>BLACK ICE</h3>
        <p>Secure terminal access</p>
        <div className="login-1874__field">
          <i className="fa-solid fa-user"></i>
          <input type="text" placeholder="Username" />
        </div>
        <div className="login-1874__field">
          <i className="fa-solid fa-key"></i>
          <input type="password" placeholder="Password" />
        </div>
        <button>UNLOCK</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-core">
        <i class="fa-solid fa-snowflake"></i>
    </div>
    <h3>BLACK ICE</h3>
    <p>Secure terminal access</p>
    <div class="Login-field">
        <i class="fa-solid fa-user"></i>
        <input type="text" placeholder="Username" />
    </div>
    <div class="Login-field">
        <i class="fa-solid fa-key"></i>
        <input type="password" placeholder="Password" />
    </div>
    <button>UNLOCK</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 24px;
    border: 1px solid #0ea5e9;
    border-radius: 16px;
    background: linear-gradient(145deg,#020617,#071827);
    color: #e0f2fe;
    box-shadow: 0 0 25px rgba(14,165,233,.18),inset 0 0 25px rgba(56,189,248,.04);
}
.Login-core {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    margin-bottom: 14px;
    border: 1px solid #67e8f9;
    border-radius: 12px;
    background: rgba(34,211,238,.08);
    color: #bae6fd;
    box-shadow: 0 0 18px rgba(34,211,238,.35);
}
.Login h3 {
    margin: 0;
    font-size: 17px;
    letter-spacing: 2px;
}
.Login p {
    margin: 5px 0 18px;
    color: #7dd3fc;
    font-size: 8px;
}
.Login-field {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 9px;
    padding: 0 10px;
    border: 1px solid #164e63;
    border-radius: 8px;
    background: #03111d;
}
.Login-field i {
    color: #22d3ee;
    font-size: 8px;
}
.Login-field input {
    width: 100%;
    padding: 10px 0;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    font-size: 9px;
}
.Login button {
    width: 100%;
    margin-top: 4px;
    padding: 10px;
    border: 1px solid #22d3ee;
    border-radius: 8px;
    background: rgba(34,211,238,.08);
    color: #67e8f9;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
    cursor: pointer;
}`,
  },
  {
    id: 1875,
    name: "Inferno Login",
    preview: (
      <div className="login-1875">
        <div className="login-1875__flame">
          <i className="fa-solid fa-fire"></i>
        </div>
        <h3>INFERNO</h3>
        <p>Enter the inner circle</p>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button>ENTER</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-flame">
        <i class="fa-solid fa-fire"></i>
    </div>
    <h3>INFERNO</h3>
    <p>Enter the inner circle</p>
    <input type="email" placeholder="Email address" />
    <input type="password" placeholder="Password" />
    <button>ENTER</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 24px;
    border: 1px solid #f97316;
    border-radius: 17px;
    background: radial-gradient(circle at top,#451a03,#170704 60%);
    color: #fff7ed;
    box-shadow: 0 0 30px rgba(249,115,22,.2);
}
.Login-flame {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border-radius: 50%;
    background: linear-gradient(145deg,#facc15,#ef4444);
    color: #450a0a;
    box-shadow: 0 0 20px rgba(249,115,22,.55);
}
.Login-flame i {
    font-size: 18px;
}
.Login h3 {
    margin: 0;
    font-size: 18px;
    letter-spacing: 2px;
}
.Login p {
    margin: 5px 0 18px;
    color: #fdba74;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #7c2d12;
    border-radius: 8px;
    outline: none;
    background: rgba(67,20,7,.5);
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #fb923c;
    box-shadow: 0 0 12px rgba(249,115,22,.15);
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#ef4444,#f97316,#facc15);
    color: #431407;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1876,
    name: "Aurora Glass Login",
    preview: (
      <div className="login-1876">
        <div className="login-1876__aurora"></div>
        <div className="login-1876__icon">
          <i className="fa-solid fa-wand-magic-sparkles"></i>
        </div>
        <h3>Aurora</h3>
        <p>Welcome to your workspace</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Continue</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-aurora"></div>
    <div class="Login-icon">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
    </div>
    <h3>Aurora</h3>
    <p>Welcome to your workspace</p>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Continue</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 295px;
    padding: 25px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 19px;
    background: rgba(10,15,25,.72);
    backdrop-filter: blur(18px);
    color: #fff;
}
.Login-aurora {
    position: absolute;
    width: 190px;
    height: 110px;
    top: -65px;
    left: 30px;
    border-radius: 50%;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    filter: blur(42px);
    opacity: .28;
}
.Login-icon {
    position: relative;
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: 13px;
    background: rgba(255,255,255,.08);
    color: #c4b5fd;
    box-shadow: 0 0 18px rgba(139,92,246,.2);
}
.Login-icon i {
    text-shadow: 0 0 12px #8b5cf6;
}
.Login h3 {
    position: relative;
    margin: 0;
    font-size: 18px;
}
.Login p {
    position: relative;
    margin: 5px 0 18px;
    color: #a5b4fc;
    font-size: 8px;
}
.Login input {
    position: relative;
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 8px;
    outline: none;
    background: rgba(255,255,255,.07);
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #8b5cf6;
}
.Login button {
    position: relative;
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: 8px;
    background: linear-gradient(90deg,rgba(34,211,238,.2),rgba(139,92,246,.3),rgba(236,72,153,.2));
    color: #fff;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1877,
    name: "Cyberpunk Access Login",
    preview: (
      <div className="login-1877">
        <div className="login-1877__top">
          <i className="fa-solid fa-microchip"></i>
          <span>CYBER ACCESS</span>
        </div>
        <input type="text" placeholder="IDENTITY://" />
        <input type="password" placeholder="KEY://" />
        <button>INITIALIZE</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-top">
        <i class="fa-solid fa-microchip"></i>
        <span>CYBER ACCESS</span>
    </div>
    <input type="text" placeholder="IDENTITY://" />
    <input type="password" placeholder="KEY://" />
    <button>INITIALIZE</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 21px;
    border: 1px solid #ec4899;
    background: #08030b;
    color: #f9a8d4;
    font-family: monospace;
    box-shadow: 0 0 22px rgba(236,72,153,.15);
}
.Login-top {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    color: #67e8f9;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1.5px;
}
.Login-top i {
    text-shadow: 0 0 10px #22d3ee;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #701a75;
    outline: none;
    background: #100611;
    color: #f9a8d4;
    font-family: monospace;
    font-size: 8px;
}
.Login input:focus {
    border-color: #ec4899;
    box-shadow: 0 0 10px rgba(236,72,153,.14);
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #22d3ee;
    background: transparent;
    color: #67e8f9;
    font-family: monospace;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1878,
    name: "Prism Portal Login",
    preview: (
      <div className="login-1878">
        <div className="login-1878__prism"></div>
        <i className="fa-solid fa-gem"></i>
        <h3>Prism Portal</h3>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button>ENTER PORTAL</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-prism"></div>
    <i class="fa-solid fa-gem"></i>
    <h3>Prism Portal</h3>
    <input type="email" placeholder="Email address" />
    <input type="password" placeholder="Password" />
    <button>ENTER PORTAL</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 290px;
    padding: 25px;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 18px;
    background:
        linear-gradient(#09090b,#09090b) padding-box,
        linear-gradient(135deg,#22d3ee,#6366f1,#ec4899,#f97316) border-box;
    color: #fff;
    text-align: center;
}
.Login-prism {
    position: absolute;
    width: 170px;
    height: 170px;
    top: -90px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: linear-gradient(135deg,#22d3ee,#6366f1,#ec4899);
    filter: blur(45px);
    opacity: .2;
}
.Login > i {
    position: relative;
    color: #67e8f9;
    font-size: 25px;
    text-shadow: 0 0 13px #22d3ee;
}
.Login h3 {
    position: relative;
    margin: 10px 0 17px;
    font-size: 18px;
}
.Login input {
    position: relative;
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #27272a;
    border-radius: 8px;
    outline: none;
    background: #111113;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #6366f1;
}
.Login button {
    position: relative;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .6px;
    cursor: pointer;
}`,
  },
  {
    id: 1879,
    name: "Quantum Login",
    preview: (
      <div className="login-1879">
        <div className="login-1879__ring">
          <span></span>
          <i className="fa-solid fa-atom"></i>
        </div>
        <h3>Quantum Access</h3>
        <p>Authenticate your quantum workspace</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>CONNECT</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-ring">
        <span></span>
        <i class="fa-solid fa-atom"></i>
    </div>
    <h3>Quantum Access</h3>
    <p>Authenticate your quantum workspace</p>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>CONNECT</button>
</div>`,
    css: `.Login {
    width: 295px;
    padding: 24px;
    border: 1px solid #4c1d95;
    border-radius: 17px;
    background: #090516;
    color: #fff;
    box-shadow: 0 0 28px rgba(139,92,246,.15);
    text-align: center;
}
.Login-ring {
    position: relative;
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    margin: 0 auto 13px;
    border: 1px solid transparent;
    border-radius: 50%;
    background:
        linear-gradient(#090516,#090516) padding-box,
        linear-gradient(90deg,#22d3ee,#8b5cf6,#ec4899) border-box;
}
.Login-ring span {
    position: absolute;
    width: 64px;
    height: 28px;
    border: 1px solid #22d3ee;
    border-radius: 50%;
    transform: rotate(45deg);
}
.Login-ring i {
    color: #c4b5fd;
    text-shadow: 0 0 10px #8b5cf6;
}
.Login h3 {
    margin: 0;
    font-size: 17px;
}
.Login p {
    margin: 5px 0 17px;
    color: #a78bfa;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #4c1d95;
    border-radius: 8px;
    outline: none;
    background: #11091c;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #a855f7;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #8b5cf6;
    border-radius: 8px;
    background: rgba(139,92,246,.12);
    color: #ddd6fe;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1880,
    name: "Royal Crown Login",
    preview: (
      <div className="login-1880">
        <div className="login-1880__crown">
          <i className="fa-solid fa-crown"></i>
        </div>
        <h3>ROYAL ACCESS</h3>
        <p>Members of the inner circle</p>
        <input type="email" placeholder="Royal email" />
        <input type="password" placeholder="Secret key" />
        <button>ENTER KINGDOM</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-crown">
        <i class="fa-solid fa-crown"></i>
    </div>
    <h3>ROYAL ACCESS</h3>
    <p>Members of the inner circle</p>
    <input type="email" placeholder="Royal email" />
    <input type="password" placeholder="Secret key" />
    <button>ENTER KINGDOM</button>
</div>`,
    css: `.Login {
    width: 295px;
    padding: 25px;
    border: 1px solid #a16207;
    border-radius: 18px;
    background: linear-gradient(145deg,#100d05,#201807);
    color: #fef3c7;
    text-align: center;
    box-shadow: 0 0 25px rgba(250,204,21,.12);
}
.Login-crown {
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    margin: 0 auto 13px;
    border-radius: 13px;
    background: linear-gradient(135deg,#fde047,#d97706);
    color: #451a03;
    box-shadow: 0 0 19px rgba(250,204,21,.35);
}
.Login-crown i {
    font-size: 18px;
}
.Login h3 {
    margin: 0;
    font-size: 17px;
    letter-spacing: 1px;
}
.Login p {
    margin: 5px 0 18px;
    color: #d6b96a;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #57500b;
    border-radius: 8px;
    outline: none;
    background: #171305;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #facc15;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #facc15;
    border-radius: 8px;
    background: linear-gradient(90deg,#facc15,#d97706);
    color: #451a03;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1881,
    name: "Hologram Login",
    preview: (
      <div className="login-1881">
        <div className="login-1881__scan"></div>
        <div className="login-1881__icon">
          <i className="fa-solid fa-fingerprint"></i>
        </div>
        <h3>HOLOGRAM ID</h3>
        <input type="email" placeholder="Identity" />
        <input type="password" placeholder="Passcode" />
        <button>VERIFY</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-scan"></div>
    <div class="Login-icon">
        <i class="fa-solid fa-fingerprint"></i>
    </div>
    <h3>HOLOGRAM ID</h3>
    <input type="email" placeholder="Identity" />
    <input type="password" placeholder="Passcode" />
    <button>VERIFY</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 290px;
    padding: 24px;
    overflow: hidden;
    border: 1px solid rgba(34,211,238,.35);
    border-radius: 17px;
    background: rgba(2,6,23,.8);
    color: #fff;
    box-shadow: 0 0 24px rgba(34,211,238,.14);
}
.Login-scan {
    position: absolute;
    left: 0;
    right: 0;
    top: -10%;
    height: 3px;
    background: #22d3ee;
    box-shadow: 0 0 15px #22d3ee;
    opacity: .55;
    animation: scan-1881 2.8s linear infinite;
}
.Login-icon {
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border: 1px solid #22d3ee;
    border-radius: 50%;
    background: rgba(34,211,238,.08);
    color: #67e8f9;
}
.Login-icon i {
    font-size: 19px;
    text-shadow: 0 0 10px #22d3ee;
}
.Login h3 {
    margin: 0 0 17px;
    font-size: 17px;
    letter-spacing: 1.5px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #164e63;
    border-radius: 8px;
    outline: none;
    background: #03101b;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #22d3ee;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #22d3ee;
    border-radius: 8px;
    background: transparent;
    color: #67e8f9;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}
@keyframes scan-1881 {
    from {
        top: -10%;
    }
    to {
        top: 110%;
    }
}`,
  },
  {
    id: 1882,
    name: "Emerald Matrix Login",
    preview: (
      <div className="login-1882">
        <div className="login-1882__matrix">
          <span>01</span>
          <span>10</span>
          <span>11</span>
        </div>
        <i className="fa-solid fa-terminal"></i>
        <h3>MATRIX ACCESS</h3>
        <input type="text" placeholder="USER_ID" />
        <input type="password" placeholder="PASSWORD" />
        <button>LOGIN</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-matrix">
        <span>01</span>
        <span>10</span>
        <span>11</span>
    </div>
    <i class="fa-solid fa-terminal"></i>
    <h3>MATRIX ACCESS</h3>
    <input type="text" placeholder="USER_ID" />
    <input type="password" placeholder="PASSWORD" />
    <button>LOGIN</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 290px;
    padding: 23px;
    overflow: hidden;
    border: 1px solid #166534;
    border-radius: 8px;
    background: #020a05;
    color: #4ade80;
    font-family: monospace;
}
.Login-matrix {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: space-around;
    color: rgba(34,197,94,.08);
    font-size: 10px;
    pointer-events: none;
}
.Login-matrix span {
    animation: matrix-fall-1882 3s linear infinite;
}
.Login-matrix span:nth-child(2) {
    animation-delay: 1s;
}
.Login-matrix span:nth-child(3) {
    animation-delay: 1.8s;
}
.Login > i {
    position: relative;
    color: #22c55e;
    text-shadow: 0 0 9px #22c55e;
    font-size: 20px;
}
.Login h3 {
    position: relative;
    margin: 10px 0 17px;
    font-size: 16px;
}
.Login input {
    position: relative;
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #14532d;
    outline: none;
    background: #020b05;
    color: #4ade80;
    font-family: monospace;
    font-size: 8px;
}
.Login input:focus {
    border-color: #22c55e;
}
.Login button {
    position: relative;
    width: 100%;
    padding: 10px;
    border: 1px solid #22c55e;
    background: rgba(34,197,94,.06);
    color: #4ade80;
    font-family: monospace;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}
@keyframes matrix-fall-1882 {
    to {
        transform: translateY(220px);
    }
}`,
  },
  {
    id: 1883,
    name: "Rainbow Prism Login",
    preview: (
      <div className="login-1883">
        <div className="login-1883__inner">
          <i className="fa-solid fa-sparkles"></i>
          <h3>PRISM LOGIN</h3>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>ENTER</button>
        </div>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-inner">
        <i class="fa-solid fa-sparkles"></i>
        <h3>PRISM LOGIN</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>ENTER</button>
    </div>
</div>`,
    css: `.Login {
    width: 292px;
    padding: 2px;
    border-radius: 18px;
    background: linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899,#ef4444);
    background-size: 300% 100%;
    animation: rainbow-1883 5s linear infinite;
}
.Login-inner {
    padding: 23px;
    border-radius: 16px;
    background: #08080a;
    color: #fff;
    text-align: center;
}
.Login-inner > i {
    color: #f0abfc;
    font-size: 23px;
    text-shadow: 0 0 10px #ec4899;
}
.Login h3 {
    margin: 10px 0 17px;
    font-size: 17px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #27272a;
    border-radius: 8px;
    outline: none;
    background: #111113;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #8b5cf6;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}
@keyframes rainbow-1883 {
    to {
        background-position: 300% 0;
    }
}`,
  },
  {
    id: 1884,
    name: "Electric Blue Login",
    preview: (
      <div className="login-1884">
        <div className="login-1884__bolt">
          <i className="fa-solid fa-bolt"></i>
        </div>
        <h3>ELECTRIC</h3>
        <p>Power your session</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>POWER ON</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-bolt">
        <i class="fa-solid fa-bolt"></i>
    </div>
    <h3>ELECTRIC</h3>
    <p>Power your session</p>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>POWER ON</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 24px;
    border: 1px solid #2563eb;
    border-radius: 15px;
    background: radial-gradient(circle at top,#172554,#050b1a 65%);
    color: #dbeafe;
    box-shadow: 0 0 25px rgba(37,99,235,.2);
}
.Login-bolt {
    width: 43px;
    height: 43px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border-radius: 11px;
    background: rgba(37,99,235,.12);
    color: #60a5fa;
    box-shadow: 0 0 18px rgba(59,130,246,.45);
}
.Login-bolt i {
    text-shadow: 0 0 9px #3b82f6;
}
.Login h3 {
    margin: 0;
    font-size: 18px;
    letter-spacing: 2px;
}
.Login p {
    margin: 5px 0 18px;
    color: #93c5fd;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #1e40af;
    border-radius: 8px;
    outline: none;
    background: #071225;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #60a5fa;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#2563eb,#38bdf8);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1885,
    name: "Cyber Red Login",
    preview: (
      <div className="login-1885">
        <div className="login-1885__header">
          <span></span>
          <span>SECURITY NODE</span>
        </div>
        <input type="text" placeholder="ACCESS ID" />
        <input type="password" placeholder="SECURITY KEY" />
        <button>AUTHORIZE</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-header">
        <span></span>
        <span>SECURITY NODE</span>
    </div>
    <input type="text" placeholder="ACCESS ID" />
    <input type="password" placeholder="SECURITY KEY" />
    <button>AUTHORIZE</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 21px;
    border: 1px solid #dc2626;
    background: #0b0505;
    color: #fca5a5;
    font-family: monospace;
    box-shadow: 0 0 20px rgba(220,38,38,.12);
}
.Login-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    color: #f87171;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
}
.Login-header span:first-child {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #ef4444;
    box-shadow: 0 0 9px #ef4444;
    animation: red-blink-1885 1s infinite;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #7f1d1d;
    outline: none;
    background: #140606;
    color: #fca5a5;
    font-family: monospace;
    font-size: 8px;
}
.Login input:focus {
    border-color: #ef4444;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #ef4444;
    background: rgba(239,68,68,.05);
    color: #fca5a5;
    font-family: monospace;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}
@keyframes red-blink-1885 {
    50% {
        opacity: .3;
    }
}`,
  },
  {
    id: 1886,
    name: "Crystal Energy Login",
    preview: (
      <div className="login-1886">
        <div className="login-1886__crystal">
          <i className="fa-solid fa-gem"></i>
        </div>
        <h3>CRYSTAL CORE</h3>
        <p>Sync with your energy vault</p>
        <input type="email" placeholder="Crystal ID" />
        <input type="password" placeholder="Core key" />
        <button>SYNC CORE</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-crystal">
        <i class="fa-solid fa-gem"></i>
    </div>
    <h3>CRYSTAL CORE</h3>
    <p>Sync with your energy vault</p>
    <input type="email" placeholder="Crystal ID" />
    <input type="password" placeholder="Core key" />
    <button>SYNC CORE</button>
</div>`,
    css: `.Login {
    width: 295px;
    padding: 24px;
    border: 1px solid #8b5cf6;
    border-radius: 18px;
    background: linear-gradient(145deg,#0b0615,#151026);
    color: #f5f3ff;
    box-shadow: 0 0 28px rgba(139,92,246,.18);
    text-align: center;
}
.Login-crystal {
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    margin: 0 auto 13px;
    transform: rotate(0deg);
    border: 1px solid #c4b5fd;
    border-radius: 12px;
    background: linear-gradient(135deg,rgba(34,211,238,.1),rgba(168,85,247,.18));
    color: #ddd6fe;
    box-shadow: 0 0 18px rgba(167,139,250,.3);
}
.Login-crystal i {
    font-size: 18px;
    text-shadow: 0 0 11px #a855f7;
}
.Login h3 {
    margin: 0;
    font-size: 16px;
    letter-spacing: 1.5px;
}
.Login p {
    margin: 5px 0 17px;
    color: #a78bfa;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #4c1d95;
    border-radius: 8px;
    outline: none;
    background: #10091a;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #c084fc;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #a855f7;
    border-radius: 8px;
    background: linear-gradient(90deg,#7c3aed,#a855f7);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1887,
    name: "Ocean Deep Login",
    preview: (
      <div className="login-1887">
        <div className="login-1887__wave"></div>
        <i className="fa-solid fa-water"></i>
        <h3>DEEP OCEAN</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>DIVE IN</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-wave"></div>
    <i class="fa-solid fa-water"></i>
    <h3>DEEP OCEAN</h3>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>DIVE IN</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 290px;
    padding: 24px;
    overflow: hidden;
    border: 1px solid #0369a1;
    border-radius: 18px;
    background: linear-gradient(180deg,#082f49,#020617);
    color: #e0f2fe;
}
.Login-wave {
    position: absolute;
    width: 180px;
    height: 80px;
    right: -80px;
    top: -30px;
    border-radius: 50%;
    background: #0ea5e9;
    filter: blur(35px);
    opacity: .22;
}
.Login > i {
    position: relative;
    color: #38bdf8;
    font-size: 22px;
}
.Login h3 {
    position: relative;
    margin: 10px 0 17px;
    font-size: 17px;
    letter-spacing: 1px;
}
.Login input {
    position: relative;
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #075985;
    border-radius: 8px;
    outline: none;
    background: rgba(2,6,23,.6);
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #38bdf8;
}
.Login button {
    position: relative;
    width: 100%;
    padding: 10px;
    border: 1px solid #38bdf8;
    border-radius: 8px;
    background: rgba(14,165,233,.12);
    color: #bae6fd;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1888,
    name: "Violet Galaxy Login",
    preview: (
      <div className="login-1888">
        <div className="login-1888__stars"></div>
        <div className="login-1888__icon">
          <i className="fa-solid fa-star"></i>
        </div>
        <h3>GALAXY ACCESS</h3>
        <p>Welcome beyond the stars</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>LAUNCH</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-stars"></div>
    <div class="Login-icon">
        <i class="fa-solid fa-star"></i>
    </div>
    <h3>GALAXY ACCESS</h3>
    <p>Welcome beyond the stars</p>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>LAUNCH</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 295px;
    padding: 24px;
    overflow: hidden;
    border: 1px solid #6d28d9;
    border-radius: 18px;
    background: radial-gradient(circle at top,#221044,#06030c 65%);
    color: #fff;
}
.Login-stars {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at 15% 20%,#fff 0 1px,transparent 2px),
        radial-gradient(circle at 80% 25%,#c4b5fd 0 1px,transparent 2px),
        radial-gradient(circle at 60% 75%,#f0abfc 0 1px,transparent 2px),
        radial-gradient(circle at 90% 70%,#67e8f9 0 1px,transparent 2px);
    opacity: .45;
}
.Login-icon {
    position: relative;
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border-radius: 50%;
    background: rgba(139,92,246,.14);
    color: #fde68a;
    box-shadow: 0 0 20px rgba(139,92,246,.3);
}
.Login-icon i {
    text-shadow: 0 0 10px #facc15;
}
.Login h3 {
    position: relative;
    margin: 0;
    font-size: 17px;
    letter-spacing: 1px;
}
.Login p {
    position: relative;
    margin: 5px 0 17px;
    color: #a78bfa;
    font-size: 8px;
}
.Login input {
    position: relative;
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #4c1d95;
    border-radius: 8px;
    outline: none;
    background: rgba(6,3,12,.75);
    color: #fff;
    font-size: 9px;
}
.Login button {
    position: relative;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#7c3aed,#ec4899);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1889,
    name: "Silver Glass Login",
    preview: (
      <div className="login-1889">
        <div className="login-1889__badge">
          <i className="fa-solid fa-shield"></i>
        </div>
        <h3>Secure Account</h3>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button>Sign in securely</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-badge">
        <i class="fa-solid fa-shield"></i>
    </div>
    <h3>Secure Account</h3>
    <input type="email" placeholder="Email address" />
    <input type="password" placeholder="Password" />
    <button>Sign in securely</button>
</div>`,
    css: `.Login {
    width: 285px;
    padding: 24px;
    border: 1px solid rgba(255,255,255,.35);
    border-radius: 18px;
    background: linear-gradient(145deg,rgba(255,255,255,.17),rgba(255,255,255,.06));
    backdrop-filter: blur(18px);
    color: #fff;
    box-shadow: 0 15px 35px rgba(0,0,0,.2);
    text-align: center;
}
.Login-badge {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    margin: 0 auto 13px;
    border: 1px solid rgba(255,255,255,.4);
    border-radius: 13px;
    background: rgba(255,255,255,.12);
    color: #e5e7eb;
}
.Login h3 {
    margin: 0 0 17px;
    font-size: 17px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid rgba(255,255,255,.24);
    border-radius: 8px;
    outline: none;
    background: rgba(255,255,255,.08);
    color: #fff;
    font-size: 9px;
}
.Login input::placeholder {
    color: rgba(255,255,255,.55);
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(255,255,255,.35);
    border-radius: 8px;
    background: rgba(255,255,255,.15);
    color: #fff;
    font-size: 8px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1890,
    name: "Pink Holographic Login",
    preview: (
      <div className="login-1890">
        <div className="login-1890__orb"></div>
        <i className="fa-solid fa-heart"></i>
        <h3>HOLO LOVE</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>ENTER</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-orb"></div>
    <i class="fa-solid fa-heart"></i>
    <h3>HOLO LOVE</h3>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>ENTER</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 290px;
    padding: 24px;
    overflow: hidden;
    border: 1px solid #ec4899;
    border-radius: 18px;
    background: #10050d;
    color: #fff;
    box-shadow: 0 0 25px rgba(236,72,153,.15);
    text-align: center;
}
.Login-orb {
    position: absolute;
    width: 140px;
    height: 140px;
    left: 50%;
    top: -90px;
    transform: translateX(-50%);
    border-radius: 50%;
    background: linear-gradient(90deg,#ec4899,#8b5cf6);
    filter: blur(40px);
    opacity: .25;
}
.Login > i {
    position: relative;
    color: #f9a8d4;
    font-size: 24px;
    text-shadow: 0 0 13px #ec4899;
}
.Login h3 {
    position: relative;
    margin: 10px 0 17px;
    font-size: 17px;
}
.Login input {
    position: relative;
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #831843;
    border-radius: 8px;
    outline: none;
    background: #1b0714;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #f472b6;
}
.Login button {
    position: relative;
    width: 100%;
    padding: 10px;
    border: 1px solid #ec4899;
    border-radius: 8px;
    background: rgba(236,72,153,.1);
    color: #f9a8d4;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1891,
    name: "White Luxury Login",
    preview: (
      <div className="login-1891">
        <div className="login-1891__logo">
          <i className="fa-solid fa-diamond"></i>
        </div>
        <h3>Private Club</h3>
        <p>Exclusive member access</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>ENTER</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-logo">
        <i class="fa-solid fa-diamond"></i>
    </div>
    <h3>Private Club</h3>
    <p>Exclusive member access</p>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>ENTER</button>
</div>`,
    css: `.Login {
    width: 285px;
    padding: 24px;
    border: 1px solid #d4d4d8;
    border-radius: 17px;
    background: linear-gradient(145deg,#fff,#f4f4f5);
    color: #18181b;
    box-shadow: 0 18px 35px rgba(24,24,27,.08);
    text-align: center;
}
.Login-logo {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    margin: 0 auto 13px;
    border-radius: 50%;
    background: #18181b;
    color: #fff;
}
.Login h3 {
    margin: 0;
    font-size: 18px;
}
.Login p {
    margin: 5px 0 18px;
    color: #71717a;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
    outline: none;
    background: #fff;
    color: #18181b;
    font-size: 9px;
}
.Login input:focus {
    border-color: #18181b;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #18181b;
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1892,
    name: "Neon Emerald Login",
    preview: (
      <div className="login-1892">
        <div className="login-1892__icon">
          <i className="fa-solid fa-leaf"></i>
        </div>
        <h3>EMERALD NODE</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>CONNECT</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-icon">
        <i class="fa-solid fa-leaf"></i>
    </div>
    <h3>EMERALD NODE</h3>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>CONNECT</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 24px;
    border: 1px solid #10b981;
    border-radius: 16px;
    background: #03100a;
    color: #ecfdf5;
    box-shadow: 0 0 25px rgba(16,185,129,.14);
}
.Login-icon {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border-radius: 12px;
    border: 1px solid #34d399;
    color: #6ee7b7;
    box-shadow: 0 0 17px rgba(16,185,129,.3);
}
.Login h3 {
    margin: 0 0 17px;
    font-size: 17px;
    letter-spacing: 1px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #065f46;
    border-radius: 8px;
    outline: none;
    background: #04180e;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #34d399;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #10b981;
    border-radius: 8px;
    background: rgba(16,185,129,.1);
    color: #6ee7b7;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1893,
    name: "Orange Plasma Login",
    preview: (
      <div className="login-1893">
        <div className="login-1893__plasma"></div>
        <i className="fa-solid fa-atom"></i>
        <h3>PLASMA CORE</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>ACTIVATE</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-plasma"></div>
    <i class="fa-solid fa-atom"></i>
    <h3>PLASMA CORE</h3>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>ACTIVATE</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 290px;
    padding: 24px;
    overflow: hidden;
    border: 1px solid #f97316;
    border-radius: 18px;
    background: #110806;
    color: #fff;
    box-shadow: 0 0 25px rgba(249,115,22,.14);
}
.Login-plasma {
    position: absolute;
    width: 170px;
    height: 100px;
    top: -65px;
    right: -40px;
    border-radius: 50%;
    background: linear-gradient(90deg,#f97316,#ef4444,#facc15);
    filter: blur(40px);
    opacity: .22;
}
.Login > i {
    position: relative;
    color: #fed7aa;
    font-size: 23px;
    text-shadow: 0 0 12px #f97316;
}
.Login h3 {
    position: relative;
    margin: 10px 0 17px;
    font-size: 17px;
    letter-spacing: 1px;
}
.Login input {
    position: relative;
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #7c2d12;
    border-radius: 8px;
    outline: none;
    background: #1c0a05;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #fb923c;
}
.Login button {
    position: relative;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#ea580c,#f97316);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1894,
    name: "Blue Crystal Login",
    preview: (
      <div className="login-1894">
        <div className="login-1894__icon">
          <i className="fa-solid fa-cube"></i>
        </div>
        <h3>CRYO SYSTEM</h3>
        <p>Cold storage authentication</p>
        <input type="email" placeholder="Identity" />
        <input type="password" placeholder="Code" />
        <button>OPEN VAULT</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-icon">
        <i class="fa-solid fa-cube"></i>
    </div>
    <h3>CRYO SYSTEM</h3>
    <p>Cold storage authentication</p>
    <input type="email" placeholder="Identity" />
    <input type="password" placeholder="Code" />
    <button>OPEN VAULT</button>
</div>`,
    css: `.Login {
    width: 295px;
    padding: 24px;
    border: 1px solid #38bdf8;
    border-radius: 17px;
    background: linear-gradient(145deg,#020617,#082f49);
    color: #e0f2fe;
    box-shadow: 0 0 28px rgba(56,189,248,.18);
}
.Login-icon {
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border: 1px solid #7dd3fc;
    border-radius: 13px;
    background: rgba(56,189,248,.08);
    color: #bae6fd;
    box-shadow: 0 0 18px rgba(56,189,248,.25);
}
.Login h3 {
    margin: 0;
    font-size: 17px;
    letter-spacing: 1px;
}
.Login p {
    margin: 5px 0 17px;
    color: #7dd3fc;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #164e63;
    border-radius: 8px;
    outline: none;
    background: #031827;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #7dd3fc;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #38bdf8;
    border-radius: 8px;
    background: rgba(56,189,248,.12);
    color: #e0f2fe;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1895,
    name: "Red Diamond Login",
    preview: (
      <div className="login-1895">
        <div className="login-1895__diamond">
          <i className="fa-solid fa-diamond"></i>
        </div>
        <h3>CRIMSON ACCESS</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>ENTER</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-diamond">
        <i class="fa-solid fa-diamond"></i>
    </div>
    <h3>CRIMSON ACCESS</h3>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>ENTER</button>
</div>`,
    css: `.Login {
    width: 285px;
    padding: 24px;
    border: 1px solid #ef4444;
    border-radius: 16px;
    background: linear-gradient(145deg,#160507,#09090b);
    color: #fff;
    box-shadow: 0 0 24px rgba(239,68,68,.15);
    text-align: center;
}
.Login-diamond {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    margin: 0 auto 13px;
    border-radius: 12px;
    background: linear-gradient(135deg,#dc2626,#7f1d1d);
    color: #fee2e2;
    box-shadow: 0 0 17px rgba(239,68,68,.35);
}
.Login h3 {
    margin: 0 0 17px;
    font-size: 17px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #7f1d1d;
    border-radius: 8px;
    outline: none;
    background: #16080a;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #ef4444;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#991b1b,#dc2626);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1896,
    name: "Cyber Grid Login",
    preview: (
      <div className="login-1896">
        <div className="login-1896__grid"></div>
        <div className="login-1896__title">
          <i className="fa-solid fa-network-wired"></i>
          NETWORK ACCESS
        </div>
        <input type="text" placeholder="NODE ID" />
        <input type="password" placeholder="ACCESS KEY" />
        <button>CONNECT NODE</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-grid"></div>
    <div class="Login-title">
        <i class="fa-solid fa-network-wired"></i>
        NETWORK ACCESS
    </div>
    <input type="text" placeholder="NODE ID" />
    <input type="password" placeholder="ACCESS KEY" />
    <button>CONNECT NODE</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 290px;
    padding: 21px;
    overflow: hidden;
    border: 1px solid #2563eb;
    background: #020617;
    color: #60a5fa;
    font-family: monospace;
}
.Login-grid {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(37,99,235,.05) 1px,transparent 1px),
        linear-gradient(90deg,rgba(37,99,235,.05) 1px,transparent 1px);
    background-size: 16px 16px;
}
.Login-title {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
}
.Login-title i {
    color: #38bdf8;
    text-shadow: 0 0 8px #3b82f6;
}
.Login input {
    position: relative;
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #1d4ed8;
    outline: none;
    background: rgba(2,6,23,.85);
    color: #93c5fd;
    font-family: monospace;
    font-size: 8px;
}
.Login input:focus {
    border-color: #60a5fa;
}
.Login button {
    position: relative;
    width: 100%;
    padding: 10px;
    border: 1px solid #3b82f6;
    background: rgba(37,99,235,.1);
    color: #60a5fa;
    font-family: monospace;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1897,
    name: "Violet Crown Login",
    preview: (
      <div className="login-1897">
        <div className="login-1897__icon">
          <i className="fa-solid fa-crown"></i>
        </div>
        <h3>ROYAL VOID</h3>
        <p>The kingdom awaits</p>
        <input type="email" placeholder="Royal ID" />
        <input type="password" placeholder="Passcode" />
        <button>ASCEND</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-icon">
        <i class="fa-solid fa-crown"></i>
    </div>
    <h3>ROYAL VOID</h3>
    <p>The kingdom awaits</p>
    <input type="email" placeholder="Royal ID" />
    <input type="password" placeholder="Passcode" />
    <button>ASCEND</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 24px;
    border: 1px solid #8b5cf6;
    border-radius: 18px;
    background: radial-gradient(circle at top,#21143e,#08050e);
    color: #f5f3ff;
    box-shadow: 0 0 28px rgba(139,92,246,.16);
}
.Login-icon {
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border-radius: 13px;
    background: linear-gradient(135deg,#7c3aed,#4c1d95);
    color: #fef3c7;
    box-shadow: 0 0 18px rgba(139,92,246,.35);
}
.Login h3 {
    margin: 0;
    font-size: 17px;
    letter-spacing: 1px;
}
.Login p {
    margin: 5px 0 17px;
    color: #c4b5fd;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #5b21b6;
    border-radius: 8px;
    outline: none;
    background: #0d0717;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #a78bfa;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#6d28d9,#a855f7);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1898,
    name: "Ice Glass Portal",
    preview: (
      <div className="login-1898">
        <div className="login-1898__snow">
          <i className="fa-solid fa-snowflake"></i>
        </div>
        <h3>FROZEN PORTAL</h3>
        <p>Pass through the crystal gate</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>OPEN GATE</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-snow">
        <i class="fa-solid fa-snowflake"></i>
    </div>
    <h3>FROZEN PORTAL</h3>
    <p>Pass through the crystal gate</p>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>OPEN GATE</button>
</div>`,
    css: `.Login {
    width: 295px;
    padding: 24px;
    border: 1px solid rgba(186,230,253,.45);
    border-radius: 18px;
    background: rgba(8,47,73,.46);
    backdrop-filter: blur(16px);
    color: #e0f2fe;
    box-shadow: inset 0 0 25px rgba(125,211,252,.05),0 0 25px rgba(56,189,248,.12);
}
.Login-snow {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border: 1px solid #7dd3fc;
    border-radius: 50%;
    background: rgba(255,255,255,.08);
    color: #bae6fd;
    box-shadow: 0 0 18px rgba(125,211,252,.35);
}
.Login-snow i {
    text-shadow: 0 0 10px #38bdf8;
}
.Login h3 {
    margin: 0;
    font-size: 17px;
    letter-spacing: 1px;
}
.Login p {
    margin: 5px 0 17px;
    color: #7dd3fc;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid rgba(125,211,252,.25);
    border-radius: 8px;
    outline: none;
    background: rgba(2,6,23,.4);
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #7dd3fc;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #7dd3fc;
    border-radius: 8px;
    background: rgba(125,211,252,.1);
    color: #e0f2fe;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1899,
    name: "Golden Vault Login",
    preview: (
      <div className="login-1899">
        <div className="login-1899__lock">
          <i className="fa-solid fa-lock"></i>
        </div>
        <h3>GOLDEN VAULT</h3>
        <p>Restricted access</p>
        <input type="email" placeholder="Vault ID" />
        <input type="password" placeholder="Vault key" />
        <button>UNLOCK VAULT</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-lock">
        <i class="fa-solid fa-lock"></i>
    </div>
    <h3>GOLDEN VAULT</h3>
    <p>Restricted access</p>
    <input type="email" placeholder="Vault ID" />
    <input type="password" placeholder="Vault key" />
    <button>UNLOCK VAULT</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 24px;
    border: 1px solid #f59e0b;
    border-radius: 17px;
    background: linear-gradient(145deg,#171006,#0a0905);
    color: #fef3c7;
    box-shadow: 0 0 28px rgba(245,158,11,.15);
    text-align: center;
}
.Login-lock {
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    margin: 0 auto 13px;
    border-radius: 12px;
    background: linear-gradient(135deg,#facc15,#92400e);
    color: #451a03;
    box-shadow: 0 0 18px rgba(250,204,21,.35);
}
.Login h3 {
    margin: 0;
    font-size: 17px;
    letter-spacing: 1px;
}
.Login p {
    margin: 5px 0 17px;
    color: #d6b96a;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #713f12;
    border-radius: 8px;
    outline: none;
    background: #151006;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #f59e0b;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #facc15;
    border-radius: 8px;
    background: linear-gradient(90deg,#92400e,#d97706);
    color: #fef3c7;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1900,
    name: "Quantum Ring Login",
    preview: (
      <div className="login-1900">
        <div className="login-1900__ring">
          <span></span>
          <span></span>
          <i className="fa-solid fa-atom"></i>
        </div>
        <h3>QUANTUM CORE</h3>
        <input type="email" placeholder="Quantum ID" />
        <input type="password" placeholder="Encryption key" />
        <button>LINK CORE</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-ring">
        <span></span>
        <span></span>
        <i class="fa-solid fa-atom"></i>
    </div>
    <h3>QUANTUM CORE</h3>
    <input type="email" placeholder="Quantum ID" />
    <input type="password" placeholder="Encryption key" />
    <button>LINK CORE</button>
</div>`,
    css: `.Login {
    width: 295px;
    padding: 24px;
    border: 1px solid #6366f1;
    border-radius: 18px;
    background: #070710;
    color: #fff;
    text-align: center;
    box-shadow: 0 0 26px rgba(99,102,241,.16);
}
.Login-ring {
    position: relative;
    width: 56px;
    height: 56px;
    display: grid;
    place-items: center;
    margin: 0 auto 13px;
}
.Login-ring span {
    position: absolute;
    width: 56px;
    height: 28px;
    border: 1px solid #22d3ee;
    border-radius: 50%;
    transform: rotate(40deg);
}
.Login-ring span:nth-child(2) {
    transform: rotate(-40deg);
    border-color: #ec4899;
}
.Login-ring i {
    color: #c4b5fd;
    text-shadow: 0 0 10px #6366f1;
}
.Login h3 {
    margin: 0 0 17px;
    font-size: 17px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #27272a;
    border-radius: 8px;
    outline: none;
    background: #111113;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #6366f1;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #6366f1;
    border-radius: 8px;
    background: linear-gradient(90deg,#3730a3,#7c3aed);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1901,
    name: "Nebula Login",
    preview: (
      <div className="login-1901">
        <div className="login-1901__nebula"></div>
        <i className="fa-solid fa-shuttle-space"></i>
        <h3>NEBULA STATION</h3>
        <input type="email" placeholder="Crew ID" />
        <input type="password" placeholder="Access code" />
        <button>BOARD</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-nebula"></div>
    <i class="fa-solid fa-shuttle-space"></i>
    <h3>NEBULA STATION</h3>
    <input type="email" placeholder="Crew ID" />
    <input type="password" placeholder="Access code" />
    <button>BOARD</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 295px;
    padding: 24px;
    overflow: hidden;
    border: 1px solid #7c3aed;
    border-radius: 18px;
    background: #06030d;
    color: #fff;
}
.Login-nebula {
    position: absolute;
    width: 200px;
    height: 100px;
    top: -45px;
    left: 25px;
    border-radius: 50%;
    background: linear-gradient(90deg,#ec4899,#8b5cf6,#22d3ee);
    filter: blur(45px);
    opacity: .2;
}
.Login > i {
    position: relative;
    color: #c4b5fd;
    font-size: 23px;
    text-shadow: 0 0 12px #8b5cf6;
}
.Login h3 {
    position: relative;
    margin: 10px 0 17px;
    font-size: 17px;
    letter-spacing: 1px;
}
.Login input {
    position: relative;
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #4c1d95;
    border-radius: 8px;
    outline: none;
    background: #10081a;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #a855f7;
}
.Login button {
    position: relative;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#7c3aed,#ec4899);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1902,
    name: "Ice Hex Login",
    preview: (
      <div className="login-1902">
        <div className="login-1902__hex">
          <i className="fa-solid fa-snowflake"></i>
        </div>
        <h3>CRYO HEX</h3>
        <input type="email" placeholder="User ID" />
        <input type="password" placeholder="Password" />
        <button>ACCESS</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-hex">
        <i class="fa-solid fa-snowflake"></i>
    </div>
    <h3>CRYO HEX</h3>
    <input type="email" placeholder="User ID" />
    <input type="password" placeholder="Password" />
    <button>ACCESS</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 24px;
    border: 1px solid #0ea5e9;
    border-radius: 16px;
    background: #02131d;
    color: #e0f2fe;
    box-shadow: 0 0 25px rgba(14,165,233,.15);
}
.Login-hex {
    width: 46px;
    height: 40px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);
    background: linear-gradient(135deg,#22d3ee,#2563eb);
    color: #fff;
}
.Login h3 {
    margin: 0 0 17px;
    font-size: 17px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #164e63;
    border-radius: 8px;
    outline: none;
    background: #041a28;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #22d3ee;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #0284c7;
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1903,
    name: "Cyber Violet Terminal",
    preview: (
      <div className="login-1903">
        <div className="login-1903__bar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>&gt; secure_login</p>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>RUN</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-bar">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <p>> secure_login</p>
    <input type="text" placeholder="username" />
    <input type="password" placeholder="password" />
    <button>RUN</button>
</div>`,
    css: `.Login {
    width: 290px;
    overflow: hidden;
    border: 1px solid #4c1d95;
    border-radius: 8px;
    background: #05020a;
    color: #c4b5fd;
    font-family: monospace;
}
.Login-bar {
    display: flex;
    gap: 5px;
    padding: 8px;
    border-bottom: 1px solid #27272a;
    background: #0f0718;
}
.Login-bar span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
}
.Login-bar span:first-child {
    background: #ef4444;
}
.Login-bar span:nth-child(2) {
    background: #facc15;
}
.Login-bar span:last-child {
    background: #22c55e;
}
.Login p {
    margin: 15px 18px 10px;
    color: #a855f7;
    font-size: 8px;
}
.Login input {
    width: calc(100% - 36px);
    margin: 0 18px 8px;
    padding: 9px;
    border: 1px solid #4c1d95;
    outline: none;
    background: #090510;
    color: #d8b4fe;
    font-family: monospace;
    font-size: 8px;
}
.Login input:focus {
    border-color: #a855f7;
}
.Login button {
    width: calc(100% - 36px);
    margin: 4px 18px 18px;
    padding: 9px;
    border: 1px solid #a855f7;
    background: rgba(168,85,247,.08);
    color: #c4b5fd;
    font-family: monospace;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1904,
    name: "Rainbow Aurora Login",
    preview: (
      <div className="login-1904">
        <div className="login-1904__aurora"></div>
        <div className="login-1904__icon">
          <i className="fa-solid fa-rainbow"></i>
        </div>
        <h3>COLOR WAVE</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>ENTER</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-aurora"></div>
    <div class="Login-icon">
        <i class="fa-solid fa-rainbow"></i>
    </div>
    <h3>COLOR WAVE</h3>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>ENTER</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 295px;
    padding: 25px;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 19px;
    background:
        linear-gradient(#08080a,#08080a) padding-box,
        linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899) border-box;
    color: #fff;
}
.Login-aurora {
    position: absolute;
    width: 220px;
    height: 120px;
    top: -70px;
    left: 40px;
    border-radius: 50%;
    background: linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899);
    filter: blur(45px);
    opacity: .16;
}
.Login-icon {
    position: relative;
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border-radius: 12px;
    background: rgba(255,255,255,.08);
    color: #f0abfc;
}
.Login-icon i {
    text-shadow: 0 0 11px #ec4899;
}
.Login h3 {
    position: relative;
    margin: 0 0 17px;
    font-size: 17px;
    letter-spacing: 1px;
}
.Login input {
    position: relative;
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #27272a;
    border-radius: 8px;
    outline: none;
    background: rgba(255,255,255,.04);
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #8b5cf6;
}
.Login button {
    position: relative;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1905,
    name: "Shadow Portal Login",
    preview: (
      <div className="login-1905">
        <div className="login-1905__portal">
          <i className="fa-solid fa-eye"></i>
        </div>
        <h3>SHADOW PORTAL</h3>
        <p>Step into the unknown</p>
        <input type="email" placeholder="Identity" />
        <input type="password" placeholder="Passcode" />
        <button>ENTER SHADOW</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-portal">
        <i class="fa-solid fa-eye"></i>
    </div>
    <h3>SHADOW PORTAL</h3>
    <p>Step into the unknown</p>
    <input type="email" placeholder="Identity" />
    <input type="password" placeholder="Passcode" />
    <button>ENTER SHADOW</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 24px;
    border: 1px solid #52525b;
    border-radius: 18px;
    background: radial-gradient(circle at top,#27272a,#09090b 65%);
    color: #fff;
    box-shadow: 0 0 25px rgba(24,24,27,.5);
    text-align: center;
}
.Login-portal {
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    margin: 0 auto 13px;
    border-radius: 50%;
    border: 1px solid #71717a;
    background: #18181b;
    color: #d4d4d8;
    box-shadow: inset 0 0 15px #000,0 0 12px rgba(113,113,122,.2);
}
.Login h3 {
    margin: 0;
    font-size: 17px;
    letter-spacing: 1px;
}
.Login p {
    margin: 5px 0 17px;
    color: #a1a1aa;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #3f3f46;
    border-radius: 8px;
    outline: none;
    background: #111113;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #a1a1aa;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #71717a;
    border-radius: 8px;
    background: #18181b;
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1906,
    name: "Solar Flare Login",
    preview: (
      <div className="login-1906">
        <div className="login-1906__sun">
          <i className="fa-solid fa-sun"></i>
        </div>
        <h3>SOLAR FLARE</h3>
        <input type="email" placeholder="Solar ID" />
        <input type="password" placeholder="Core password" />
        <button>IGNITE</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-sun">
        <i class="fa-solid fa-sun"></i>
    </div>
    <h3>SOLAR FLARE</h3>
    <input type="email" placeholder="Solar ID" />
    <input type="password" placeholder="Core password" />
    <button>IGNITE</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 24px;
    border: 1px solid #f59e0b;
    border-radius: 18px;
    background: #160b02;
    color: #fff7ed;
    box-shadow: 0 0 30px rgba(249,115,22,.15);
}
.Login-sun {
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border-radius: 50%;
    background: radial-gradient(circle,#fef08a,#f97316);
    color: #7c2d12;
    box-shadow: 0 0 22px rgba(250,204,21,.5);
}
.Login h3 {
    margin: 0 0 17px;
    font-size: 17px;
    letter-spacing: 1px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #7c2d12;
    border-radius: 8px;
    outline: none;
    background: #1f0d03;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #facc15;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#ea580c,#facc15);
    color: #431407;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1907,
    name: "Blue Matrix Login",
    preview: (
      <div className="login-1907">
        <div className="login-1907__scanline"></div>
        <i className="fa-solid fa-terminal"></i>
        <h3>BLUE MATRIX</h3>
        <input type="text" placeholder="USER" />
        <input type="password" placeholder="PASSWORD" />
        <button>EXECUTE</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-scanline"></div>
    <i class="fa-solid fa-terminal"></i>
    <h3>BLUE MATRIX</h3>
    <input type="text" placeholder="USER" />
    <input type="password" placeholder="PASSWORD" />
    <button>EXECUTE</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 290px;
    padding: 23px;
    overflow: hidden;
    border: 1px solid #0284c7;
    background: #020617;
    color: #38bdf8;
    font-family: monospace;
}
.Login-scanline {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(0deg,transparent 0,transparent 3px,rgba(56,189,248,.025) 4px);
    pointer-events: none;
}
.Login > i {
    position: relative;
    font-size: 20px;
    text-shadow: 0 0 8px #0ea5e9;
}
.Login h3 {
    position: relative;
    margin: 10px 0 17px;
    font-size: 16px;
    letter-spacing: 1.5px;
}
.Login input {
    position: relative;
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #164e63;
    outline: none;
    background: #03101c;
    color: #67e8f9;
    font-family: monospace;
    font-size: 8px;
}
.Login input:focus {
    border-color: #22d3ee;
}
.Login button {
    position: relative;
    width: 100%;
    padding: 10px;
    border: 1px solid #22d3ee;
    background: rgba(34,211,238,.05);
    color: #67e8f9;
    font-family: monospace;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1908,
    name: "Pink Nebula Login",
    preview: (
      <div className="login-1908">
        <div className="login-1908__nebula"></div>
        <div className="login-1908__icon">
          <i className="fa-solid fa-star"></i>
        </div>
        <h3>PINK NEBULA</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>FLOAT IN</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-nebula"></div>
    <div class="Login-icon">
        <i class="fa-solid fa-star"></i>
    </div>
    <h3>PINK NEBULA</h3>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>FLOAT IN</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 290px;
    padding: 24px;
    overflow: hidden;
    border: 1px solid #db2777;
    border-radius: 18px;
    background: #11040d;
    color: #fff;
    box-shadow: 0 0 26px rgba(219,39,119,.16);
}
.Login-nebula {
    position: absolute;
    width: 170px;
    height: 100px;
    top: -40px;
    left: -20px;
    border-radius: 50%;
    background: linear-gradient(90deg,#ec4899,#a855f7,#3b82f6);
    filter: blur(45px);
    opacity: .22;
}
.Login-icon {
    position: relative;
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border-radius: 12px;
    background: rgba(236,72,153,.1);
    color: #f9a8d4;
    box-shadow: 0 0 17px rgba(236,72,153,.3);
}
.Login-icon i {
    text-shadow: 0 0 9px #ec4899;
}
.Login h3 {
    position: relative;
    margin: 0 0 17px;
    font-size: 17px;
}
.Login input {
    position: relative;
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #831843;
    border-radius: 8px;
    outline: none;
    background: #1b0715;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #f472b6;
}
.Login button {
    position: relative;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#db2777,#8b5cf6);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1909,
    name: "Emerald Glass Login",
    preview: (
      <div className="login-1909">
        <div className="login-1909__leaf">
          <i className="fa-solid fa-leaf"></i>
        </div>
        <h3>GREENHOUSE</h3>
        <p>Secure garden access</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>GROW</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-leaf">
        <i class="fa-solid fa-leaf"></i>
    </div>
    <h3>GREENHOUSE</h3>
    <p>Secure garden access</p>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>GROW</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 24px;
    border: 1px solid rgba(52,211,153,.35);
    border-radius: 18px;
    background: rgba(6,78,59,.22);
    backdrop-filter: blur(15px);
    color: #ecfdf5;
    box-shadow: 0 0 25px rgba(16,185,129,.12);
}
.Login-leaf {
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border-radius: 50%;
    border: 1px solid #34d399;
    color: #6ee7b7;
    box-shadow: 0 0 16px rgba(16,185,129,.25);
}
.Login h3 {
    margin: 0;
    font-size: 17px;
}
.Login p {
    margin: 5px 0 17px;
    color: #6ee7b7;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid rgba(52,211,153,.25);
    border-radius: 8px;
    outline: none;
    background: rgba(0,0,0,.18);
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #34d399;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #34d399;
    border-radius: 8px;
    background: rgba(16,185,129,.12);
    color: #a7f3d0;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1910,
    name: "Purple Energy Login",
    preview: (
      <div className="login-1910">
        <div className="login-1910__energy">
          <i className="fa-solid fa-bolt"></i>
        </div>
        <h3>VOID ENERGY</h3>
        <input type="email" placeholder="Energy ID" />
        <input type="password" placeholder="Energy key" />
        <button>CHARGE</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-energy">
        <i class="fa-solid fa-bolt"></i>
    </div>
    <h3>VOID ENERGY</h3>
    <input type="email" placeholder="Energy ID" />
    <input type="password" placeholder="Energy key" />
    <button>CHARGE</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 24px;
    border: 1px solid #9333ea;
    border-radius: 17px;
    background: #0e0616;
    color: #f5f3ff;
    box-shadow: 0 0 30px rgba(147,51,234,.17);
}
.Login-energy {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border-radius: 12px;
    background: linear-gradient(135deg,#7c3aed,#c026d3);
    color: #fff;
    box-shadow: 0 0 20px rgba(168,85,247,.45);
}
.Login-energy i {
    text-shadow: 0 0 10px #f0abfc;
}
.Login h3 {
    margin: 0 0 17px;
    font-size: 17px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #581c87;
    border-radius: 8px;
    outline: none;
    background: #15091f;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #c084fc;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#7c3aed,#c026d3);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1911,
    name: "Fire Glass Login",
    preview: (
      <div className="login-1911">
        <div className="login-1911__flame">
          <i className="fa-solid fa-fire-flame-curved"></i>
        </div>
        <h3>FIREWALL</h3>
        <p>Protected access point</p>
        <input type="text" placeholder="Identity" />
        <input type="password" placeholder="Password" />
        <button>BREACH FIREWALL</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-flame">
        <i class="fa-solid fa-fire-flame-curved"></i>
    </div>
    <h3>FIREWALL</h3>
    <p>Protected access point</p>
    <input type="text" placeholder="Identity" />
    <input type="password" placeholder="Password" />
    <button>BREACH FIREWALL</button>
</div>`,
    css: `.Login {
    width: 295px;
    padding: 24px;
    border: 1px solid rgba(248,113,113,.4);
    border-radius: 18px;
    background: rgba(69,10,10,.45);
    backdrop-filter: blur(15px);
    color: #fff;
    box-shadow: 0 0 27px rgba(239,68,68,.13);
}
.Login-flame {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border-radius: 12px;
    background: rgba(239,68,68,.1);
    color: #fb923c;
    box-shadow: 0 0 18px rgba(249,115,22,.35);
}
.Login-flame i {
    text-shadow: 0 0 10px #f97316;
}
.Login h3 {
    margin: 0;
    font-size: 17px;
    letter-spacing: 1px;
}
.Login p {
    margin: 5px 0 17px;
    color: #fca5a5;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid rgba(239,68,68,.28);
    border-radius: 8px;
    outline: none;
    background: rgba(30,5,5,.45);
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #fb7185;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #f87171;
    border-radius: 8px;
    background: linear-gradient(90deg,rgba(220,38,38,.35),rgba(249,115,22,.3));
    color: #fecaca;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1912,
    name: "Holographic Identity Login",
    preview: (
      <div className="login-1912">
        <div className="login-1912__fingerprint">
          <i className="fa-solid fa-fingerprint"></i>
        </div>
        <h3>IDENTITY MATRIX</h3>
        <input type="email" placeholder="Identity" />
        <input type="password" placeholder="Security code" />
        <button>SCAN IDENTITY</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-fingerprint">
        <i class="fa-solid fa-fingerprint"></i>
    </div>
    <h3>IDENTITY MATRIX</h3>
    <input type="email" placeholder="Identity" />
    <input type="password" placeholder="Security code" />
    <button>SCAN IDENTITY</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 24px;
    border: 1px solid transparent;
    border-radius: 18px;
    background:
        linear-gradient(#05050a,#05050a) padding-box,
        linear-gradient(135deg,#22d3ee,#8b5cf6,#ec4899) border-box;
    color: #fff;
    text-align: center;
}
.Login-fingerprint {
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    margin: 0 auto 13px;
    border: 1px solid #22d3ee;
    border-radius: 50%;
    color: #a5f3fc;
    background: rgba(34,211,238,.06);
    box-shadow: 0 0 17px rgba(34,211,238,.23);
}
.Login-fingerprint i {
    font-size: 19px;
    text-shadow: 0 0 10px #22d3ee;
}
.Login h3 {
    margin: 0 0 17px;
    font-size: 16px;
    letter-spacing: 1px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #27272a;
    border-radius: 8px;
    outline: none;
    background: #111113;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #8b5cf6;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid transparent;
    border-radius: 8px;
    background:
        linear-gradient(#18181b,#18181b) padding-box,
        linear-gradient(90deg,#22d3ee,#8b5cf6,#ec4899) border-box;
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1913,
    name: "Legendary Blue Vault",
    preview: (
      <div className="login-1913">
        <div className="login-1913__lock">
          <i className="fa-solid fa-vault"></i>
        </div>
        <h3>BLUE VAULT</h3>
        <p>Level 5 security clearance</p>
        <input type="text" placeholder="Vault ID" />
        <input type="password" placeholder="Vault key" />
        <button>OPEN VAULT</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-lock">
        <i class="fa-solid fa-vault"></i>
    </div>
    <h3>BLUE VAULT</h3>
    <p>Level 5 security clearance</p>
    <input type="text" placeholder="Vault ID" />
    <input type="password" placeholder="Vault key" />
    <button>OPEN VAULT</button>
</div>`,
    css: `.Login {
    width: 295px;
    padding: 24px;
    border: 1px solid #2563eb;
    border-radius: 16px;
    background: linear-gradient(145deg,#030712,#0f172a);
    color: #dbeafe;
    box-shadow: 0 0 28px rgba(37,99,235,.18);
}
.Login-lock {
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border: 1px solid #60a5fa;
    border-radius: 12px;
    background: rgba(37,99,235,.1);
    color: #93c5fd;
    box-shadow: 0 0 17px rgba(59,130,246,.3);
}
.Login h3 {
    margin: 0;
    font-size: 17px;
    letter-spacing: 1px;
}
.Login p {
    margin: 5px 0 17px;
    color: #60a5fa;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #1e40af;
    border-radius: 8px;
    outline: none;
    background: #081120;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #60a5fa;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#1d4ed8,#38bdf8);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1914,
    name: "Dark Prism Login",
    preview: (
      <div className="login-1914">
        <div className="login-1914__shine"></div>
        <div className="login-1914__icon">
          <i className="fa-solid fa-gem"></i>
        </div>
        <h3>PRISM CORE</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>ACCESS CORE</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-shine"></div>
    <div class="Login-icon">
        <i class="fa-solid fa-gem"></i>
    </div>
    <h3>PRISM CORE</h3>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>ACCESS CORE</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 295px;
    padding: 24px;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 18px;
    background:
        linear-gradient(#070709,#070709) padding-box,
        linear-gradient(90deg,#22d3ee,#3b82f6,#8b5cf6,#ec4899,#f97316) border-box;
    color: #fff;
}
.Login-shine {
    position: absolute;
    width: 60px;
    height: 150%;
    top: -25%;
    left: -80px;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.48),transparent);
    transform: skewX(-20deg);
    animation: login-shine-1914 3s ease-in-out infinite;
}
.Login-icon {
    position: relative;
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border: 1px solid rgba(103,232,249,.4);
    border-radius: 12px;
    background: rgba(34,211,238,.06);
    color: #67e8f9;
    box-shadow: 0 0 18px rgba(34,211,238,.15);
}
.Login-icon i {
    text-shadow: 0 0 10px #22d3ee;
}
.Login h3 {
    position: relative;
    margin: 0 0 17px;
    font-size: 17px;
}
.Login input {
    position: relative;
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #27272a;
    border-radius: 8px;
    outline: none;
    background: #101012;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #8b5cf6;
}
.Login button {
    position: relative;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}
@keyframes login-shine-1914 {
    0% {
        left: -80px;
    }
    55% {
        left: 135%;
    }
    100% {
        left: 135%;
    }
}`,
  },
  {
    id: 1915,
    name: "Cyber Orange Login",
    preview: (
      <div className="login-1915">
        <div className="login-1915__header">
          <i className="fa-solid fa-terminal"></i>
          <span>ORANGE PROTOCOL</span>
        </div>
        <input type="text" placeholder="USER://ID" />
        <input type="password" placeholder="KEY://PASS" />
        <button>RUN PROTOCOL</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-header">
        <i class="fa-solid fa-terminal"></i>
        <span>ORANGE PROTOCOL</span>
    </div>
    <input type="text" placeholder="USER://ID" />
    <input type="password" placeholder="KEY://PASS" />
    <button>RUN PROTOCOL</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 21px;
    border: 1px solid #f97316;
    border-radius: 7px;
    background: #0d0602;
    color: #fdba74;
    font-family: monospace;
}
.Login-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    color: #fb923c;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
}
.Login-header i {
    text-shadow: 0 0 9px #f97316;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #7c2d12;
    outline: none;
    background: #170904;
    color: #fed7aa;
    font-family: monospace;
    font-size: 8px;
}
.Login input:focus {
    border-color: #fb923c;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #fb923c;
    background: rgba(249,115,22,.06);
    color: #fdba74;
    font-family: monospace;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1916,
    name: "Ice Crown Login",
    preview: (
      <div className="login-1916">
        <div className="login-1916__crown">
          <i className="fa-solid fa-crown"></i>
        </div>
        <h3>FROZEN KINGDOM</h3>
        <p>Royal cryogenic access</p>
        <input type="email" placeholder="Royal ID" />
        <input type="password" placeholder="Royal key" />
        <button>ASCEND</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-crown">
        <i class="fa-solid fa-crown"></i>
    </div>
    <h3>FROZEN KINGDOM</h3>
    <p>Royal cryogenic access</p>
    <input type="email" placeholder="Royal ID" />
    <input type="password" placeholder="Royal key" />
    <button>ASCEND</button>
</div>`,
    css: `.Login {
    width: 295px;
    padding: 24px;
    border: 1px solid #38bdf8;
    border-radius: 18px;
    background: linear-gradient(145deg,#020617,#082f49);
    color: #f0f9ff;
    box-shadow: 0 0 28px rgba(56,189,248,.17);
    text-align: center;
}
.Login-crown {
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    margin: 0 auto 13px;
    border: 1px solid #7dd3fc;
    border-radius: 50%;
    background: rgba(125,211,252,.08);
    color: #e0f2fe;
    box-shadow: 0 0 18px rgba(125,211,252,.3);
}
.Login-crown i {
    text-shadow: 0 0 9px #38bdf8;
}
.Login h3 {
    margin: 0;
    font-size: 17px;
}
.Login p {
    margin: 5px 0 17px;
    color: #7dd3fc;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #164e63;
    border-radius: 8px;
    outline: none;
    background: #031827;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #bae6fd;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #7dd3fc;
    border-radius: 8px;
    background: linear-gradient(90deg,#0369a1,#38bdf8);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1917,
    name: "Cosmic Portal Login",
    preview: (
      <div className="login-1917">
        <div className="login-1917__portal">
          <span></span>
          <i className="fa-solid fa-wand-magic-sparkles"></i>
        </div>
        <h3>COSMIC PORTAL</h3>
        <input type="email" placeholder="Cosmic ID" />
        <input type="password" placeholder="Portal key" />
        <button>TRAVEL</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-portal">
        <span></span>
        <i class="fa-solid fa-wand-magic-sparkles"></i>
    </div>
    <h3>COSMIC PORTAL</h3>
    <input type="email" placeholder="Cosmic ID" />
    <input type="password" placeholder="Portal key" />
    <button>TRAVEL</button>
</div>`,
    css: `.Login {
    width: 295px;
    padding: 24px;
    border: 1px solid #6366f1;
    border-radius: 18px;
    background: #050509;
    color: #fff;
    text-align: center;
    box-shadow: 0 0 30px rgba(99,102,241,.17);
}
.Login-portal {
    position: relative;
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    margin: 0 auto 14px;
    border-radius: 50%;
    background: #0f0d22;
    color: #c4b5fd;
}
.Login-portal::before {
    content: "";
    position: absolute;
    inset: -5px;
    border: 1px solid #22d3ee;
    border-left-color: transparent;
    border-radius: 50%;
    animation: portal-1917 2s linear infinite;
}
.Login-portal::after {
    content: "";
    position: absolute;
    inset: -10px;
    border: 1px solid #ec4899;
    border-right-color: transparent;
    border-radius: 50%;
    animation: portal-1917 3s linear reverse infinite;
}
.Login-portal span {
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    background: linear-gradient(135deg,#22d3ee,#8b5cf6,#ec4899);
    filter: blur(8px);
    opacity: .45;
}
.Login-portal i {
    position: relative;
    z-index: 1;
}
.Login h3 {
    margin: 0 0 17px;
    font-size: 17px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #27272a;
    border-radius: 8px;
    outline: none;
    background: #0d0d12;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #8b5cf6;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}
@keyframes portal-1917 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1918,
    name: "Neon Shield Login",
    preview: (
      <div className="login-1918">
        <div className="login-1918__shield">
          <i className="fa-solid fa-shield-halved"></i>
        </div>
        <h3>NEON DEFENSE</h3>
        <p>Protected workspace</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>VERIFY</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-shield">
        <i class="fa-solid fa-shield-halved"></i>
    </div>
    <h3>NEON DEFENSE</h3>
    <p>Protected workspace</p>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>VERIFY</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 24px;
    border: 1px solid #22d3ee;
    border-radius: 16px;
    background: #021014;
    color: #e0f2fe;
    box-shadow: 0 0 26px rgba(34,211,238,.15);
}
.Login-shield {
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border-radius: 12px;
    border: 1px solid #22d3ee;
    color: #67e8f9;
    box-shadow: 0 0 18px rgba(34,211,238,.32);
}
.Login-shield i {
    text-shadow: 0 0 10px #22d3ee;
}
.Login h3 {
    margin: 0;
    font-size: 17px;
}
.Login p {
    margin: 5px 0 17px;
    color: #67e8f9;
    font-size: 8px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #155e75;
    border-radius: 8px;
    outline: none;
    background: #03151c;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #22d3ee;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #22d3ee;
    border-radius: 8px;
    background: rgba(34,211,238,.08);
    color: #67e8f9;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1919,
    name: "Fire Crown Login",
    preview: (
      <div className="login-1919">
        <div className="login-1919__crown">
          <i className="fa-solid fa-crown"></i>
        </div>
        <h3>INFERNO KING</h3>
        <input type="email" placeholder="Royal ID" />
        <input type="password" placeholder="Royal key" />
        <button>CLAIM THRONE</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-crown">
        <i class="fa-solid fa-crown"></i>
    </div>
    <h3>INFERNO KING</h3>
    <input type="email" placeholder="Royal ID" />
    <input type="password" placeholder="Royal key" />
    <button>CLAIM THRONE</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 24px;
    border: 1px solid #f97316;
    border-radius: 18px;
    background: linear-gradient(145deg,#180704,#080504);
    color: #fff7ed;
    box-shadow: 0 0 28px rgba(249,115,22,.18);
    text-align: center;
}
.Login-crown {
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    margin: 0 auto 13px;
    border-radius: 13px;
    background: linear-gradient(135deg,#facc15,#ef4444);
    color: #450a0a;
    box-shadow: 0 0 22px rgba(249,115,22,.5);
}
.Login-crown i {
    font-size: 18px;
}
.Login h3 {
    margin: 0 0 17px;
    font-size: 17px;
    letter-spacing: 1px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #7c2d12;
    border-radius: 8px;
    outline: none;
    background: #1b0804;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #fb923c;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#dc2626,#f97316,#facc15);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1920,
    name: "Ice Reactor Login",
    preview: (
      <div className="login-1920">
        <div className="login-1920__reactor">
          <div></div>
        </div>
        <h3>ICE REACTOR</h3>
        <input type="email" placeholder="Operator ID" />
        <input type="password" placeholder="Reactor key" />
        <button>START REACTOR</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-reactor">
        <div></div>
    </div>
    <h3>ICE REACTOR</h3>
    <input type="email" placeholder="Operator ID" />
    <input type="password" placeholder="Reactor key" />
    <button>START REACTOR</button>
</div>`,
    css: `.Login {
    width: 290px;
    padding: 24px;
    border: 1px solid #38bdf8;
    border-radius: 18px;
    background: #021018;
    color: #e0f2fe;
    box-shadow: 0 0 28px rgba(56,189,248,.17);
    text-align: center;
}
.Login-reactor {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    margin: 0 auto 13px;
    border: 2px solid #7dd3fc;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(56,189,248,.4),inset 0 0 12px rgba(34,211,238,.2);
}
.Login-reactor div {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background: #67e8f9;
    box-shadow: 0 0 15px #22d3ee;
    animation: reactor-1920 1.1s ease-in-out infinite;
}
.Login h3 {
    margin: 0 0 17px;
    font-size: 17px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #164e63;
    border-radius: 8px;
    outline: none;
    background: #041924;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #7dd3fc;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: 1px solid #38bdf8;
    border-radius: 8px;
    background: linear-gradient(90deg,#0369a1,#0ea5e9);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}
@keyframes reactor-1920 {
    50% {
        transform: scale(1.45);
        opacity: .55;
    }
}`,
  },
  {
    id: 1921,
    name: "Legendary Holo Prism Login",
    preview: (
      <div className="login-1921">
        <div className="login-1921__shine"></div>
        <div className="login-1921__icon">
          <i className="fa-solid fa-gem"></i>
        </div>
        <h3>HOLO PRISM</h3>
        <p>Advanced identity gateway</p>
        <div className="login-1921__field">
          <i className="fa-solid fa-envelope"></i>
          <input type="email" placeholder="Email address" />
        </div>
        <div className="login-1921__field">
          <i className="fa-solid fa-key"></i>
          <input type="password" placeholder="Password" />
        </div>
        <button>ENTER GATEWAY</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-shine"></div>
    <div class="Login-icon">
        <i class="fa-solid fa-gem"></i>
    </div>
    <h3>HOLO PRISM</h3>
    <p>Advanced identity gateway</p>
    <div class="Login-field">
        <i class="fa-solid fa-envelope"></i>
        <input type="email" placeholder="Email address" />
    </div>
    <div class="Login-field">
        <i class="fa-solid fa-key"></i>
        <input type="password" placeholder="Password" />
    </div>
    <button>ENTER GATEWAY</button>
</div>`,
    css: `.Login {
    position: relative;
    width: 310px;
    padding: 25px;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 19px;
    background:
        linear-gradient(#08080a,#08080a) padding-box,
        linear-gradient(135deg,#22d3ee,#3b82f6,#8b5cf6,#ec4899,#f97316) border-box;
    color: #fff;
    box-shadow: 0 0 30px rgba(99,102,241,.18);
}
.Login-shine {
    position: absolute;
    width: 65px;
    height: 150%;
    top: -25%;
    left: -80px;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.7),transparent);
    transform: skewX(-20deg);
    animation: holo-shine-1921 2.8s ease-in-out infinite;
}
.Login-icon {
    position: relative;
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border: 1px solid rgba(103,232,249,.4);
    border-radius: 12px;
    background: rgba(34,211,238,.07);
    color: #67e8f9;
    box-shadow: 0 0 18px rgba(34,211,238,.16);
}
.Login-icon i {
    text-shadow: 0 0 10px #22d3ee;
}
.Login h3 {
    position: relative;
    margin: 0;
    font-size: 18px;
    letter-spacing: 1px;
}
.Login p {
    position: relative;
    margin: 5px 0 17px;
    color: #a1a1aa;
    font-size: 9px;
}
.Login-field {
    position: relative;
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 9px;
    padding: 0 10px;
    border: 1px solid #27272a;
    border-radius: 8px;
    background: #111113;
}
.Login-field i {
    color: #8b5cf6;
    font-size: 8px;
}
.Login-field input {
    width: 100%;
    padding: 10px 0;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    font-size: 9px;
}
.Login button {
    position: relative;
    width: 100%;
    margin-top: 4px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}
@keyframes holo-shine-1921 {
    0% {
        left: -80px;
    }
    55% {
        left: 135%;
    }
    100% {
        left: 135%;
    }
}`,
  },
  {
    id: 1922,
    name: "Legendary Rainbow Core Login",
    preview: (
      <div className="login-1922">
        <div className="login-1922__core">
          <i className="fa-solid fa-sparkles"></i>
        </div>
        <h3>RAINBOW CORE</h3>
        <p>Infinite color authentication</p>
        <input type="email" placeholder="Core identity" />
        <input type="password" placeholder="Core password" />
        <button>ACTIVATE CORE</button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-core">
        <i class="fa-solid fa-sparkles"></i>
    </div>
    <h3>RAINBOW CORE</h3>
    <p>Infinite color authentication</p>
    <input type="email" placeholder="Core identity" />
    <input type="password" placeholder="Core password" />
    <button>ACTIVATE CORE</button>
</div>`,
    css: `.Login {
    width: 300px;
    padding: 3px;
    border-radius: 19px;
    background: linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899,#ef4444);
    background-size: 300% 100%;
    animation: rainbow-core-1922 5s linear infinite;
}
.Login-core,
.Login h3,
.Login p,
.Login input,
.Login button {
    position: relative;
}
.Login-core {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    margin-bottom: 13px;
    border-radius: 12px;
    background: linear-gradient(135deg,#22d3ee,#ec4899);
    color: #fff;
    box-shadow: 0 0 20px rgba(236,72,153,.35);
}
.Login-core i {
    text-shadow: 0 0 10px #fff;
}
.Login h3 {
    margin: 0;
    font-size: 18px;
}
.Login p {
    margin: 5px 0 17px;
    color: #a1a1aa;
    font-size: 9px;
}
.Login input {
    width: 100%;
    margin-bottom: 9px;
    padding: 10px;
    border: 1px solid #27272a;
    border-radius: 8px;
    outline: none;
    background: #111113;
    color: #fff;
    font-size: 9px;
}
.Login input:focus {
    border-color: #6366f1;
}
.Login button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}
@keyframes rainbow-core-1922 {
    to {
        background-position: 300% 0;
    }
}`,
  },
  {
    id: 1923,
    name: "Ultimate Cosmic Login",
    preview: (
      <div className="login-1923">
        <div className="login-1923__stars"></div>
        <div className="login-1923__portal">
          <i className="fa-solid fa-gem"></i>
        </div>
        <h3>LEGENDARY ACCESS</h3>
        <p>Welcome to the final gateway.</p>
        <div className="login-1923__field">
          <i className="fa-solid fa-envelope"></i>
          <input type="email" placeholder="Email address" />
        </div>
        <div className="login-1923__field">
          <i className="fa-solid fa-key"></i>
          <input type="password" placeholder="Password" />
        </div>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
          ENTER THE COSMOS
        </button>
      </div>
    ),
    html: `<div class="Login">
    <div class="Login-stars"></div>
    <div class="Login-portal">
        <i class="fa-solid fa-gem"></i>
    </div>
    <h3>LEGENDARY ACCESS</h3>
    <p>Welcome to the final gateway.</p>
    <div class="Login-field">
        <i class="fa-solid fa-envelope"></i>
        <input type="email" placeholder="Email address" />
    </div>
    <div class="Login-field">
        <i class="fa-solid fa-key"></i>
        <input type="password" placeholder="Password" />
    </div>
    <button>
        <i class="fa-solid fa-arrow-right"></i>
        ENTER THE COSMOS
    </button>
</div>`,
    css: `.Login {
    position: relative;
    width: 315px;
    padding: 26px;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 20px;
    background:
        linear-gradient(#050509,#050509) padding-box,
        linear-gradient(135deg,#22d3ee,#3b82f6,#8b5cf6,#ec4899,#f97316,#facc15) border-box;
    color: #fff;
    box-shadow: 0 0 35px rgba(99,102,241,.2),inset 0 0 22px rgba(255,255,255,.02);
}
.Login-stars {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at 10% 15%,rgba(255,255,255,.9) 0 1px,transparent 2px),
        radial-gradient(circle at 82% 15%,rgba(103,232,249,.9) 0 1px,transparent 2px),
        radial-gradient(circle at 65% 35%,rgba(196,181,253,.9) 0 1px,transparent 2px),
        radial-gradient(circle at 22% 75%,rgba(244,114,182,.9) 0 1px,transparent 2px),
        radial-gradient(circle at 90% 80%,rgba(250,204,21,.9) 0 1px,transparent 2px);
    animation: starfield-1923 4s ease-in-out infinite;
}
.Login-portal {
    position: relative;
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    margin-bottom: 14px;
    border: 1px solid #67e8f9;
    border-radius: 50%;
    background: radial-gradient(circle,#172554,#08090d);
    color: #67e8f9;
    box-shadow: 0 0 18px rgba(34,211,238,.35),0 0 40px rgba(139,92,246,.18);
}
.Login-portal::before {
    content: "";
    position: absolute;
    inset: -7px;
    border: 1px solid #8b5cf6;
    border-left-color: transparent;
    border-radius: 50%;
    animation: cosmic-ring-1923 2s linear infinite;
}
.Login-portal::after {
    content: "";
    position: absolute;
    inset: -12px;
    border: 1px solid #ec4899;
    border-right-color: transparent;
    border-radius: 50%;
    animation: cosmic-ring-1923 3s linear reverse infinite;
}
.Login-portal i {
    position: relative;
    z-index: 2;
    text-shadow: 0 0 12px #22d3ee;
}
.Login h3 {
    position: relative;
    margin: 0;
    font-size: 18px;
    letter-spacing: 1.5px;
}
.Login p {
    position: relative;
    margin: 5px 0 18px;
    color: #a1a1aa;
    font-size: 9px;
}
.Login-field {
    position: relative;
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 9px;
    padding: 0 10px;
    border: 1px solid #27272a;
    border-radius: 9px;
    background: rgba(255,255,255,.04);
}
.Login-field i {
    color: #67e8f9;
    font-size: 8px;
}
.Login-field input {
    width: 100%;
    padding: 10px 0;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    font-size: 9px;
}
.Login button {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    margin-top: 4px;
    padding: 10px;
    border: none;
    border-radius: 9px;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899,#f97316);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .6px;
    cursor: pointer;
    box-shadow: 0 0 18px rgba(99,102,241,.2);
}
@keyframes cosmic-ring-1923 {
    to {
        transform: rotate(360deg);
    }
}
@keyframes starfield-1923 {
    50% {
        opacity: .65;
    }
}`,
  },
  {
  id: 3128,
  name: "Astral Command Login",
  preview: (
    <div className="login-3128">
      <div className="login-3128-background"></div>
      <div className="login-3128-grid"></div>
      <div className="login-3128-glow login-3128-glow-1"></div>
      <div className="login-3128-glow login-3128-glow-2"></div>
      <div className="login-3128-glow login-3128-glow-3"></div>

      <div className="login-3128-stars">
        <span className="login-3128-star login-3128-star-1"></span>
        <span className="login-3128-star login-3128-star-2"></span>
        <span className="login-3128-star login-3128-star-3"></span>
        <span className="login-3128-star login-3128-star-4"></span>
        <span className="login-3128-star login-3128-star-5"></span>
        <span className="login-3128-star login-3128-star-6"></span>
        <span className="login-3128-star login-3128-star-7"></span>
        <span className="login-3128-star login-3128-star-8"></span>
        <span className="login-3128-star login-3128-star-9"></span>
        <span className="login-3128-star login-3128-star-10"></span>
        <span className="login-3128-star login-3128-star-11"></span>
        <span className="login-3128-star login-3128-star-12"></span>
        <span className="login-3128-star login-3128-star-13"></span>
        <span className="login-3128-star login-3128-star-14"></span>
        <span className="login-3128-star login-3128-star-15"></span>
        <span className="login-3128-star login-3128-star-16"></span>
        <span className="login-3128-star login-3128-star-17"></span>
        <span className="login-3128-star login-3128-star-18"></span>
      </div>

      <div className="login-3128-ring login-3128-ring-1"></div>
      <div className="login-3128-ring login-3128-ring-2"></div>
      <div className="login-3128-ring login-3128-ring-3"></div>

      <div className="login-3128-orb">
        <div className="login-3128-orb-core"></div>
        <div className="login-3128-orb-light"></div>
      </div>

      <div className="login-3128-scanline"></div>

      <span className="login-3128-corner login-3128-corner-tl"></span>
      <span className="login-3128-corner login-3128-corner-tr"></span>
      <span className="login-3128-corner login-3128-corner-bl"></span>
      <span className="login-3128-corner login-3128-corner-br"></span>

      <div className="login-3128-card">
        <div className="login-3128-top">
          <div className="login-3128-brand">
            <div className="login-3128-brand-icon">
              <i className="ri-sparkling-2-fill"></i>
            </div>

            <div className="login-3128-brand-text">
              <strong>ASTRAL</strong>
              <span>COMMAND NETWORK</span>
            </div>
          </div>

          <div className="login-3128-security">
            <span className="login-3128-security-dot"></span>
            SECURE
          </div>
        </div>

        <div className="login-3128-heading">
          <span className="login-3128-eyebrow">
            AUTHORIZATION PORTAL
          </span>

          <h2>
            Welcome
            <span> back.</span>
          </h2>

          <p>
            Enter your access credentials to reconnect with the command network.
          </p>
        </div>

        <div className="login-3128-form">
          <label className="login-3128-field">
            <span className="login-3128-field-icon">
              <i className="ri-mail-line"></i>
            </span>

            <input
              type="email"
              placeholder="Email address"
            />

            <span className="login-3128-field-line"></span>
          </label>

          <label className="login-3128-field">
            <span className="login-3128-field-icon">
              <i className="ri-lock-2-line"></i>
            </span>

            <input
              type="password"
              placeholder="Password"
            />

            <span className="login-3128-eye">
              <i className="ri-eye-line"></i>
            </span>

            <span className="login-3128-field-line"></span>
          </label>

          <div className="login-3128-options">
            <label className="login-3128-remember">
              <input
                type="checkbox"
                defaultChecked
              />

              <span className="login-3128-checkbox">
                <i className="ri-check-line"></i>
              </span>

              <span>Remember me</span>
            </label>

            <a
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              Forgot password?
            </a>
          </div>

          <button
            className="login-3128-submit"
            type="button"
          >
            <span>ENTER COMMAND</span>

            <span className="login-3128-submit-icon">
              <i className="ri-arrow-right-up-line"></i>
            </span>

            <span className="login-3128-submit-shine"></span>
          </button>
        </div>

        <div className="login-3128-divider">
          <span></span>
          <p>OR CONTINUE WITH</p>
          <span></span>
        </div>

        <div className="login-3128-socials">
          <button type="button">
            <i className="ri-google-fill"></i>
          </button>

          <button type="button">
            <i className="ri-github-fill"></i>
          </button>

          <button type="button">
            <i className="ri-apple-fill"></i>
          </button>
        </div>

        <div className="login-3128-footer">
          <span>
            New operator?
            <a
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              Create identity
            </a>
          </span>

          <span className="login-3128-encrypted">
            <i className="ri-shield-check-line"></i>
            AES-256
          </span>
        </div>
      </div>
    </div>
  ),

  html: `<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
    rel="stylesheet"
/>

<div class="Login">
    <div class="Login-background"></div>
    <div class="Login-grid"></div>

    <div class="Login-glow Login-glow-1"></div>
    <div class="Login-glow Login-glow-2"></div>
    <div class="Login-glow Login-glow-3"></div>

    <div class="Login-stars">
        <span class="Login-star Login-star-1"></span>
        <span class="Login-star Login-star-2"></span>
        <span class="Login-star Login-star-3"></span>
        <span class="Login-star Login-star-4"></span>
        <span class="Login-star Login-star-5"></span>
        <span class="Login-star Login-star-6"></span>
        <span class="Login-star Login-star-7"></span>
        <span class="Login-star Login-star-8"></span>
        <span class="Login-star Login-star-9"></span>
        <span class="Login-star Login-star-10"></span>
        <span class="Login-star Login-star-11"></span>
        <span class="Login-star Login-star-12"></span>
        <span class="Login-star Login-star-13"></span>
        <span class="Login-star Login-star-14"></span>
        <span class="Login-star Login-star-15"></span>
        <span class="Login-star Login-star-16"></span>
        <span class="Login-star Login-star-17"></span>
        <span class="Login-star Login-star-18"></span>
    </div>

    <div class="Login-ring Login-ring-1"></div>
    <div class="Login-ring Login-ring-2"></div>
    <div class="Login-ring Login-ring-3"></div>

    <div class="Login-orb">
        <div class="Login-orb-core"></div>
        <div class="Login-orb-light"></div>
    </div>

    <div class="Login-scanline"></div>

    <span class="Login-corner Login-corner-tl"></span>
    <span class="Login-corner Login-corner-tr"></span>
    <span class="Login-corner Login-corner-bl"></span>
    <span class="Login-corner Login-corner-br"></span>

    <div class="Login-card">
        <div class="Login-top">
            <div class="Login-brand">
                <div class="Login-brand-icon">
                    <i class="ri-sparkling-2-fill"></i>
                </div>

                <div class="Login-brand-text">
                    <strong>ASTRAL</strong>
                    <span>COMMAND NETWORK</span>
                </div>
            </div>

            <div class="Login-security">
                <span class="Login-security-dot"></span>
                SECURE
            </div>
        </div>

        <div class="Login-heading">
            <span class="Login-eyebrow">
                AUTHORIZATION PORTAL
            </span>

            <h2>
                Welcome
                <span> back.</span>
            </h2>

            <p>
                Enter your access credentials to reconnect with the command network.
            </p>
        </div>

        <div class="Login-form">
            <label class="Login-field">
                <span class="Login-field-icon">
                    <i class="ri-mail-line"></i>
                </span>

                <input
                    type="email"
                    placeholder="Email address"
                >

                <span class="Login-field-line"></span>
            </label>

            <label class="Login-field">
                <span class="Login-field-icon">
                    <i class="ri-lock-2-line"></i>
                </span>

                <input
                    type="password"
                    placeholder="Password"
                >

                <span class="Login-eye">
                    <i class="ri-eye-line"></i>
                </span>

                <span class="Login-field-line"></span>
            </label>

            <div class="Login-options">
                <label class="Login-remember">
                    <input
                        type="checkbox"
                        checked
                    >

                    <span class="Login-checkbox">
                        <i class="ri-check-line"></i>
                    </span>

                    <span>Remember me</span>
                </label>

                <a href="#">
                    Forgot password?
                </a>
            </div>

            <button
                class="Login-submit"
                type="button"
            >
                <span>ENTER COMMAND</span>

                <span class="Login-submit-icon">
                    <i class="ri-arrow-right-up-line"></i>
                </span>

                <span class="Login-submit-shine"></span>
            </button>
        </div>

        <div class="Login-divider">
            <span></span>
            <p>OR CONTINUE WITH</p>
            <span></span>
        </div>

        <div class="Login-socials">
            <button type="button">
                <i class="ri-google-fill"></i>
            </button>

            <button type="button">
                <i class="ri-github-fill"></i>
            </button>

            <button type="button">
                <i class="ri-apple-fill"></i>
            </button>
        </div>

        <div class="Login-footer">
            <span>
                New operator?
                <a href="#">
                    Create identity
                </a>
            </span>

            <span class="Login-encrypted">
                <i class="ri-shield-check-line"></i>
                AES-256
            </span>
        </div>
    </div>
</div>`,

  css: `.Login {
    --bg: #040712;
    --panel: rgba(7, 13, 31, 0.88);
    --panel-strong: rgba(10, 18, 41, 0.96);
    --blue: #63b3ff;
    --cyan: #67e8f9;
    --indigo: #6366f1;
    --purple: #a855f7;
    --pink: #ec4899;
    --text: #f8fbff;
    --soft: #b8c5df;
    --muted: #73819d;
    --border: rgba(116, 170, 255, 0.2);

    position: relative;
    width: 380px;
    min-height: 560px;

    overflow: hidden;

    border: 1px solid rgba(108, 165, 255, 0.25);
    border-radius: 28px;

    color: var(--text);

    background:
        radial-gradient(
            circle at 16% 9%,
            rgba(58, 134, 255, 0.2),
            transparent 26%
        ),
        radial-gradient(
            circle at 91% 17%,
            rgba(143, 93, 255, 0.16),
            transparent 28%
        ),
        linear-gradient(
            145deg,
            #07101f 0%,
            #040815 48%,
            #070717 100%
        );

    box-shadow:
        0 30px 80px rgba(0, 0, 0, 0.52),
        0 0 60px rgba(59, 130, 246, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.04);

    isolation: isolate;

    font-family:
        Inter,
        ui-sans-serif,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;
}

.Login,
.Login * {
    box-sizing: border-box;
}

.Login button,
.Login input {
    font: inherit;
}

.Login-background {
    position: absolute;

    inset: -70%;

    z-index: -12;

    background:
        conic-gradient(
            from 180deg at 50% 50%,
            rgba(59, 130, 246, 0) 0deg,
            rgba(59, 130, 246, 0.22) 48deg,
            rgba(99, 102, 241, 0.2) 95deg,
            rgba(168, 85, 247, 0.15) 142deg,
            rgba(236, 72, 153, 0.1) 190deg,
            rgba(34, 211, 238, 0.18) 240deg,
            rgba(59, 130, 246, 0) 310deg,
            rgba(59, 130, 246, 0.2) 350deg,
            rgba(59, 130, 246, 0) 360deg
        );

    filter: blur(55px);

    opacity: 0.8;

    transform-origin: center;

    animation:
        login-3128-aurora 18s
        linear
        infinite;
}

.Login-grid {
    position: absolute;

    inset: 0;

    z-index: -11;

    opacity: 0.24;

    background-image:
        linear-gradient(
            rgba(89, 148, 255, 0.08) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(89, 148, 255, 0.08) 1px,
            transparent 1px
        );

    background-size:
        26px 26px;

    mask-image:
        linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.9),
            transparent 94%
        );

    -webkit-mask-image:
        linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.9),
            transparent 94%
        );

    animation:
        login-3128-grid
        14s
        linear
        infinite;
}

.Login-glow {
    position: absolute;

    z-index: -10;

    border-radius: 999px;

    pointer-events: none;

    filter: blur(38px);
}

.Login-glow-1 {
    width: 220px;
    height: 220px;

    left: -110px;
    top: -75px;

    background:
        rgba(46, 127, 255, 0.18);

    animation:
        login-3128-glow-1
        8s
        ease-in-out
        infinite
        alternate;
}

.Login-glow-2 {
    width: 190px;
    height: 190px;

    right: -92px;
    top: 65px;

    background:
        rgba(138, 92, 246, 0.15);

    animation:
        login-3128-glow-2
        10s
        ease-in-out
        infinite
        alternate;
}

.Login-glow-3 {
    width: 230px;
    height: 150px;

    left: 72px;
    bottom: -94px;

    background:
        rgba(45, 212, 191, 0.1);

    animation:
        login-3128-glow-3
        9s
        ease-in-out
        infinite
        alternate;
}

.Login-stars {
    position: absolute;

    inset: 0;

    z-index: -9;

    pointer-events: none;
}

.Login-star {
    position: absolute;

    width: 2px;
    height: 2px;

    border-radius: 999px;

    background:
        rgba(225, 242, 255, 0.9);

    box-shadow:
        0 0 7px rgba(116, 199, 255, 0.9);

    animation:
        login-3128-star
        4s
        ease-in-out
        infinite;
}

.Login-star-1 {
    left: 8%;
    top: 11%;
}

.Login-star-2 {
    left: 19%;
    top: 27%;

    animation-delay: -1.2s;
}

.Login-star-3 {
    left: 30%;
    top: 8%;

    animation-delay: -2s;
}

.Login-star-4 {
    left: 43%;
    top: 18%;

    animation-delay: -0.8s;
}

.Login-star-5 {
    left: 55%;
    top: 6%;

    animation-delay: -2.6s;
}

.Login-star-6 {
    left: 66%;
    top: 26%;

    animation-delay: -1.6s;
}

.Login-star-7 {
    left: 79%;
    top: 13%;

    animation-delay: -3s;
}

.Login-star-8 {
    left: 92%;
    top: 35%;

    animation-delay: -0.5s;
}

.Login-star-9 {
    left: 11%;
    top: 47%;

    animation-delay: -2.2s;
}

.Login-star-10 {
    left: 24%;
    top: 61%;

    animation-delay: -1.1s;
}

.Login-star-11 {
    left: 38%;
    top: 51%;

    animation-delay: -3.2s;
}

.Login-star-12 {
    left: 49%;
    top: 70%;

    animation-delay: -1.8s;
}

.Login-star-13 {
    left: 62%;
    top: 57%;

    animation-delay: -2.8s;
}

.Login-star-14 {
    left: 74%;
    top: 76%;

    animation-delay: -0.9s;
}

.Login-star-15 {
    left: 87%;
    top: 63%;

    animation-delay: -2.4s;
}

.Login-star-16 {
    left: 15%;
    top: 84%;

    animation-delay: -1.4s;
}

.Login-star-17 {
    left: 46%;
    top: 89%;

    animation-delay: -3.1s;
}

.Login-star-18 {
    left: 91%;
    top: 91%;

    animation-delay: -1.9s;
}

.Login-ring {
    position: absolute;

    z-index: -8;

    border-radius: 999px;

    pointer-events: none;
}

.Login-ring-1 {
    width: 240px;
    height: 240px;

    right: -127px;
    top: -118px;

    border:
        1px solid
        rgba(105, 180, 255, 0.13);

    animation:
        login-3128-ring
        18s
        linear
        infinite;
}

.Login-ring-2 {
    width: 192px;
    height: 192px;

    right: -103px;
    top: -94px;

    border:
        1px dashed
        rgba(137, 111, 255, 0.13);

    animation:
        login-3128-ring-reverse
        13s
        linear
        infinite;
}

.Login-ring-3 {
    width: 140px;
    height: 140px;

    right: -77px;
    top: -67px;

    border:
        1px solid
        rgba(83, 221, 255, 0.11);

    animation:
        login-3128-ring
        9s
        linear
        infinite;
}

.Login-orb {
    position: absolute;

    right: 20px;
    top: 19px;

    z-index: -7;

    width: 22px;
    height: 22px;

    display: grid;

    place-items: center;

    animation:
        login-3128-orb-float
        4s
        ease-in-out
        infinite;
}

.Login-orb-core {
    width: 9px;
    height: 9px;

    border-radius: 999px;

    background:
        radial-gradient(
            circle,
            #ffffff 0%,
            #8cddff 30%,
            #6f76ff 60%,
            transparent 74%
        );

    box-shadow:
        0 0 10px rgba(112, 221, 255, 0.95),
        0 0 24px rgba(102, 121, 255, 0.7);

    animation:
        login-3128-orb-pulse
        2s
        ease-in-out
        infinite;
}

.Login-orb-light {
    position: absolute;

    inset: -9px;

    border-radius: 999px;

    border:
        1px solid
        rgba(125, 207, 255, 0.15);

    animation:
        login-3128-orb-light
        2s
        ease-in-out
        infinite;
}

.Login-scanline {
    position: absolute;

    left: 0;
    right: 0;
    top: -160px;

    z-index: 10;

    height: 130px;

    pointer-events: none;

    background:
        linear-gradient(
            180deg,
            transparent,
            rgba(119, 195, 255, 0.03),
            rgba(166, 215, 255, 0.1),
            rgba(119, 195, 255, 0.03),
            transparent
        );

    animation:
        login-3128-scan
        8s
        linear
        infinite;
}

.Login-corner {
    position: absolute;

    z-index: 8;

    width: 26px;
    height: 26px;

    pointer-events: none;
}

.Login-corner::before,
.Login-corner::after {
    content: "";

    position: absolute;

    background:
        linear-gradient(
            90deg,
            rgba(100, 183, 255, 0.55),
            transparent
        );
}

.Login-corner::before {
    width: 19px;
    height: 1px;
}

.Login-corner::after {
    width: 1px;
    height: 19px;

    background:
        linear-gradient(
            180deg,
            rgba(100, 183, 255, 0.55),
            transparent
        );
}

.Login-corner-tl {
    left: 10px;
    top: 10px;
}

.Login-corner-tr {
    right: 10px;
    top: 10px;

    transform:
        rotate(90deg);
}

.Login-corner-bl {
    left: 10px;
    bottom: 10px;

    transform:
        rotate(-90deg);
}

.Login-corner-br {
    right: 10px;
    bottom: 10px;

    transform:
        rotate(180deg);
}

.Login-card {
    position: relative;

    z-index: 4;

    min-height: 560px;

    padding:
        29px
        28px
        24px;

    display: flex;

    flex-direction: column;
}

.Login-top {
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 14px;

    margin-bottom: 32px;
}

.Login-brand {
    min-width: 0;

    display: flex;

    align-items: center;

    gap: 11px;
}

.Login-brand-icon {
    position: relative;

    width: 39px;
    height: 39px;

    flex: 0 0 39px;

    display: grid;

    place-items: center;

    overflow: hidden;

    border:
        1px solid
        rgba(123, 190, 255, 0.3);

    border-radius: 12px;

    color: #c0e7ff;

    background:
        radial-gradient(
            circle at 30% 25%,
            rgba(111, 208, 255, 0.25),
            transparent 42%
        ),
        linear-gradient(
            145deg,
            rgba(57, 113, 232, 0.35),
            rgba(72, 36, 143, 0.3)
        );

    box-shadow:
        0 0 23px
            rgba(76, 148, 255, 0.2),
        inset 0 1px 0
            rgba(255, 255, 255, 0.09);
}

.Login-brand-icon::before {
    content: "";

    position: absolute;

    width: 55px;
    height: 10px;

    border-radius: 999px;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(114, 239, 255, 0.85),
            transparent
        );

    transform:
        rotate(-42deg)
        translateY(-27px);

    animation:
        login-3128-brand-shine
        4.5s
        ease-in-out
        infinite;
}

.Login-brand-icon i {
    position: relative;

    z-index: 1;

    font-size: 21px;

    filter:
        drop-shadow(
            0 0 7px
            rgba(118, 205, 255, 0.55)
        );
}

.Login-brand-text {
    min-width: 0;

    display: flex;

    flex-direction: column;

    gap: 4px;
}

.Login-brand-text strong {
    color: #f5faff;

    font-size: 13px;

    line-height: 1;

    font-weight: 900;

    letter-spacing: 0.17em;
}

.Login-brand-text span {
    color: #7287ad;

    font-size: 7px;

    line-height: 1;

    font-weight: 800;

    letter-spacing: 0.12em;
}

.Login-security {
    height: 29px;

    padding: 0 10px;

    display: inline-flex;

    align-items: center;

    gap: 6px;

    border:
        1px solid
        rgba(102, 225, 184, 0.16);

    border-radius: 999px;

    color: #a2f4d3;

    background:
        rgba(29, 115, 84, 0.1);

    font-size: 7px;

    font-weight: 900;

    letter-spacing: 0.12em;
}

.Login-security-dot {
    width: 6px;
    height: 6px;

    border-radius: 999px;

    background: #6cebb8;

    box-shadow:
        0 0 9px
        rgba(108, 235, 184, 0.9);

    animation:
        login-3128-secure
        2s
        ease-in-out
        infinite;
}

.Login-heading {
    margin-bottom: 24px;
}

.Login-eyebrow {
    display: block;

    margin-bottom: 7px;

    color: #72baff;

    font-size: 8px;

    font-weight: 900;

    letter-spacing: 0.22em;
}

.Login-heading h2 {
    margin: 0;

    color: #f9fbff;

    font-size: 36px;

    line-height: 0.95;

    font-weight: 900;

    letter-spacing: -0.055em;

    text-shadow:
        0 0 26px
        rgba(71, 143, 255, 0.14);
}

.Login-heading h2 span {
    color: transparent;

    background:
        linear-gradient(
            90deg,
            #a8ddff,
            #7b9dff 52%,
            #bb83ff
        );

    background-clip: text;

    -webkit-background-clip: text;
}

.Login-heading p {
    max-width: 290px;

    margin:
        12px
        0
        0;

    color:
        rgba(
            188,
            207,
            238,
            0.66
        );

    font-size: 11px;

    line-height: 1.55;
}

.Login-form {
    display: grid;

    gap: 11px;
}

.Login-field {
    position: relative;

    height: 49px;

    display: flex;

    align-items: center;

    overflow: hidden;

    border:
        1px solid
        rgba(121, 164, 235, 0.16);

    border-radius: 13px;

    background:
        rgba(
            5,
            11,
            28,
            0.7
        );

    box-shadow:
        inset 0 1px 0
        rgba(255, 255, 255, 0.02);

    transition:
        border-color 0.25s ease,
        background 0.25s ease,
        box-shadow 0.25s ease,
        transform 0.25s ease;
}

.Login-field:hover {
    border-color:
        rgba(
            122,
            181,
            255,
            0.28
        );

    background:
        rgba(
            8,
            15,
            36,
            0.82
        );
}

.Login-field:focus-within {
    border-color:
        rgba(
            102,
            181,
            255,
            0.6
        );

    background:
        rgba(
            9,
            17,
            40,
            0.94
        );

    box-shadow:
        0 0 0 3px
        rgba(82, 148, 255, 0.07),
        0 0 23px
        rgba(67, 137, 255, 0.09);

    transform:
        translateY(-1px);
}

.Login-field-icon {
    width: 45px;

    flex: 0 0 45px;

    display: grid;

    place-items: center;

    color: #6e94ca;

    font-size: 17px;

    transition:
        color 0.2s ease,
        transform 0.2s ease;
}

.Login-field:focus-within
.Login-field-icon {
    color: #92ceff;

    transform:
        scale(1.08);
}

.Login-field input {
    width: 100%;

    min-width: 0;

    height: 100%;

    padding:
        0
        10px
        0
        0;

    outline: none;

    border: 0;

    color: #eef6ff;

    background: transparent;

    font-size: 11px;

    caret-color: #77c9ff;
}

.Login-field input::placeholder {
    color: #5d6d8e;

    opacity: 1;
}

.Login-eye {
    width: 44px;

    flex: 0 0 44px;

    display: grid;

    place-items: center;

    color: #7188ae;

    font-size: 16px;
}

.Login-field-line {
    position: absolute;

    left: 12px;
    right: 12px;
    bottom: 0;

    height: 1px;

    opacity: 0;

    transform:
        scaleX(0.25);

    background:
        linear-gradient(
            90deg,
            transparent,
            #6bc7ff,
            #8c7dff,
            transparent
        );

    transition:
        opacity 0.25s ease,
        transform 0.25s ease;
}

.Login-field:focus-within
.Login-field-line {
    opacity: 1;

    transform:
        scaleX(1);
}

.Login-options {
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 10px;

    margin:
        1px
        1px
        4px;
}

.Login-remember {
    display: inline-flex;

    align-items: center;

    gap: 7px;

    cursor: pointer;

    color: #8798b9;

    font-size: 9px;

    user-select: none;
}

.Login-remember input {
    position: absolute;

    width: 1px;
    height: 1px;

    opacity: 0;
}

.Login-checkbox {
    width: 15px;
    height: 15px;

    display: grid;

    place-items: center;

    border:
        1px solid
        rgba(123, 165, 230, 0.3);

    border-radius: 4px;

    color: #03101d;

    background:
        rgba(
            7,
            15,
            34,
            0.82
        );

    transition:
        background 0.2s ease,
        border-color 0.2s ease,
        box-shadow 0.2s ease;
}

.Login-checkbox i {
    opacity: 0;

    font-size: 10px;

    font-weight: 900;

    transform:
        scale(0.5);

    transition:
        opacity 0.2s ease,
        transform 0.2s ease;
}

.Login-remember input:checked
+
.Login-checkbox {
    border-color:
        rgba(
            105,
            207,
            255,
            0.7
        );

    background:
        linear-gradient(
            135deg,
            #66e4ff,
            #7c8fff
        );

    box-shadow:
        0 0 14px
        rgba(
            88,
            173,
            255,
            0.3
        );
}

.Login-remember input:checked
+
.Login-checkbox i {
    opacity: 1;

    transform:
        scale(1);
}

.Login-options a {
    position: relative;

    color: #82bdff;

    text-decoration: none;

    font-size: 9px;

    font-weight: 800;
}

.Login-options a::after {
    content: "";

    position: absolute;

    left: 0;
    right: 100%;
    bottom: -3px;

    height: 1px;

    background:
        linear-gradient(
            90deg,
            #67c9ff,
            #a17cff
        );

    transition:
        right
        0.2s
        ease;
}

.Login-options a:hover::after {
    right: 0;
}

.Login-submit {
    position: relative;

    width: 100%;

    height: 49px;

    overflow: hidden;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 10px;

    cursor: pointer;

    border:
        1px solid
        rgba(
            129,
            201,
            255,
            0.62
        );

    border-radius: 13px;

    color: #ffffff;

    background:
        linear-gradient(
            90deg,
            #22d3ee,
            #6366f1,
            #a855f7,
            #ec4899,
            #22d3ee
        );

    background-size:
        300% 100%;

    box-shadow:
        0 10px 28px
        rgba(
            65,
            89,
            225,
            0.28
        ),
        0 0 23px
        rgba(
            79,
            151,
            255,
            0.18
        ),
        inset 0 1px 0
        rgba(
            255,
            255,
            255,
            0.3
        );

    font-size: 10px;

    font-weight: 900;

    letter-spacing: 0.12em;

    animation:
        login-3128-button-gradient
        7s
        linear
        infinite;

    transition:
        transform 0.2s ease,
        filter 0.2s ease,
        box-shadow 0.2s ease;
}

.Login-submit:hover {
    filter:
        brightness(1.1);

    transform:
        translateY(-2px);

    box-shadow:
        0 13px 33px
        rgba(
            65,
            89,
            225,
            0.34
        ),
        0 0 30px
        rgba(
            79,
            151,
            255,
            0.24
        ),
        inset 0 1px 0
        rgba(
            255,
            255,
            255,
            0.35
        );
}

.Login-submit:active {
    transform:
        translateY(0)
        scale(0.985);
}

.Login-submit-icon {
    width: 22px;
    height: 22px;

    display: grid;

    place-items: center;

    border-radius: 7px;

    background:
        rgba(
            255,
            255,
            255,
            0.1
        );

    transition:
        transform
        0.2s
        ease;
}

.Login-submit:hover
.Login-submit-icon {
    transform:
        translate(
            2px,
            -2px
        );
}

.Login-submit-shine {
    position: absolute;

    top: -90%;
    left: -42%;

    width: 28%;
    height: 280%;

    pointer-events: none;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(
                255,
                255,
                255,
                0.52
            ),
            transparent
        );

    transform:
        rotate(19deg);

    animation:
        login-3128-button-shine
        4s
        ease-in-out
        infinite;
}

.Login-divider {
    margin:
        20px
        0
        15px;

    display: grid;

    grid-template-columns:
        1fr
        auto
        1fr;

    align-items: center;

    gap: 10px;
}

.Login-divider > span {
    height: 1px;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(
                124,
                164,
                230,
                0.18
            )
        );
}

.Login-divider > span:last-child {
    transform:
        rotate(180deg);
}

.Login-divider p {
    margin: 0;

    color: #60708f;

    font-size: 7px;

    font-weight: 900;

    letter-spacing: 0.16em;
}

.Login-socials {
    display: grid;

    grid-template-columns:
        repeat(
            3,
            minmax(0, 1fr)
        );

    gap: 8px;
}

.Login-socials button {
    position: relative;

    height: 43px;

    display: grid;

    place-items: center;

    overflow: hidden;

    cursor: pointer;

    border:
        1px solid
        rgba(
            119,
            160,
            224,
            0.15
        );

    border-radius: 12px;

    color: #91a8cd;

    background:
        rgba(
            6,
            13,
            30,
            0.6
        );

    font-size: 18px;

    transition:
        color 0.2s ease,
        border-color 0.2s ease,
        background 0.2s ease,
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.Login-socials button::before {
    content: "";

    position: absolute;

    inset: 0;

    opacity: 0;

    background:
        radial-gradient(
            circle at 50% 120%,
            rgba(
                84,
                153,
                255,
                0.16
            ),
            transparent 70%
        );

    transition:
        opacity
        0.2s
        ease;
}

.Login-socials button:hover {
    color: #e7f4ff;

    border-color:
        rgba(
            113,
            187,
            255,
            0.34
        );

    background:
        rgba(
            17,
            31,
            66,
            0.74
        );

    transform:
        translateY(-2px);

    box-shadow:
        0 8px 24px
        rgba(
            0,
            0,
            0,
            0.18
        ),
        0 0 18px
        rgba(
            74,
            137,
            255,
            0.08
        );
}

.Login-socials button:hover::before {
    opacity: 1;
}

.Login-socials button i {
    position: relative;

    z-index: 1;
}

.Login-footer {
    margin-top: auto;

    padding-top: 23px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 12px;

    color: #70809f;

    font-size: 8px;
}

.Login-footer a {
    margin-left: 4px;

    color: #8fc0ff;

    font-weight: 800;

    text-decoration: none;
}

.Login-footer a:hover {
    color: #c4e4ff;
}

.Login-encrypted {
    display: inline-flex;

    align-items: center;

    gap: 5px;

    color: #60708e;

    white-space: nowrap;
}

.Login-encrypted i {
    color: #63d9af;

    font-size: 11px;
}

@keyframes login-3128-aurora {
    0% {
        transform:
            rotate(0deg)
            scale(1);
    }

    50% {
        transform:
            rotate(180deg)
            scale(1.08);
    }

    100% {
        transform:
            rotate(360deg)
            scale(1);
    }
}

@keyframes login-3128-grid {
    0% {
        background-position:
            0 0,
            0 0;
    }

    100% {
        background-position:
            26px 26px,
            26px 26px;
    }
}

@keyframes login-3128-glow-1 {
    from {
        transform:
            translate(
                -12px,
                -7px
            )
            scale(0.9);
    }

    to {
        transform:
            translate(
                32px,
                27px
            )
            scale(1.15);
    }
}

@keyframes login-3128-glow-2 {
    from {
        transform:
            translate(
                13px,
                -18px
            )
            scale(0.92);
    }

    to {
        transform:
            translate(
                -34px,
                22px
            )
            scale(1.16);
    }
}

@keyframes login-3128-glow-3 {
    from {
        transform:
            translateX(-18px)
            scale(0.88);
    }

    to {
        transform:
            translateX(26px)
            scale(1.14);
    }
}

@keyframes login-3128-star {
    0%,
    100% {
        opacity: 0.16;

        transform:
            scale(0.7);
    }

    45% {
        opacity: 1;

        transform:
            scale(1.35);
    }

    72% {
        opacity: 0.48;

        transform:
            scale(0.9);
    }
}

@keyframes login-3128-ring {
    from {
        transform:
            rotate(0deg);
    }

    to {
        transform:
            rotate(360deg);
    }
}

@keyframes login-3128-ring-reverse {
    from {
        transform:
            rotate(360deg);
    }

    to {
        transform:
            rotate(0deg);
    }
}

@keyframes login-3128-orb-float {
    0%,
    100% {
        transform:
            translateY(0);
    }

    50% {
        transform:
            translateY(-6px);
    }
}

@keyframes login-3128-orb-pulse {
    0%,
    100% {
        transform:
            scale(0.85);

        filter:
            brightness(0.9);
    }

    50% {
        transform:
            scale(1.25);

        filter:
            brightness(1.25);
    }
}

@keyframes login-3128-orb-light {
    0%,
    100% {
        opacity: 0.18;

        transform:
            scale(0.8);
    }

    50% {
        opacity: 0.8;

        transform:
            scale(1.2);
    }
}

@keyframes login-3128-scan {
    from {
        transform:
            translateY(-150px);
    }

    to {
        transform:
            translateY(780px);
    }
}

@keyframes login-3128-brand-shine {
    0%,
    34% {
        transform:
            rotate(-42deg)
            translateY(-31px);

        opacity: 0;
    }

    48% {
        opacity: 1;
    }

    66%,
    100% {
        transform:
            rotate(-42deg)
            translateY(34px);

        opacity: 0;
    }
}

@keyframes login-3128-secure {
    0%,
    100% {
        opacity: 0.48;

        transform:
            scale(0.8);
    }

    50% {
        opacity: 1;

        transform:
            scale(1.22);
    }
}

@keyframes login-3128-button-gradient {
    0% {
        background-position:
            0% 50%;
    }

    100% {
        background-position:
            300% 50%;
    }
}

@keyframes login-3128-button-shine {
    0%,
    53% {
        left: -42%;

        opacity: 0;
    }

    64% {
        opacity: 1;
    }

    83%,
    100% {
        left: 125%;

        opacity: 0;
    }
}

@media (max-width: 430px) {
    .Login {
        width: 100%;

        min-height: auto;
    }

    .Login-card {
        min-height: 540px;

        padding:
            26px
            21px
            22px;
    }

    .Login-heading h2 {
        font-size: 31px;
    }

    .Login-security {
        display: none;
    }
}

@media (prefers-reduced-motion: reduce) {
    .Login *,
    .Login *::before,
    .Login *::after {
        animation-duration:
            0.001ms
            !important;

        animation-iteration-count:
            1
            !important;

        transition-duration:
            0.001ms
            !important;
    }
}`,
},
{
  id: 3129,
  name: "Quantum Vault Login",
  preview: (
    <div className="Login login-3129">
      <div className="Login-space">
        <span className="Login-nebula Login-nebula-1"></span>
        <span className="Login-nebula Login-nebula-2"></span>
        <span className="Login-nebula Login-nebula-3"></span>
        <span className="Login-grid"></span>
        <span className="Login-scan"></span>

        <span className="Login-star Login-star-1"></span>
        <span className="Login-star Login-star-2"></span>
        <span className="Login-star Login-star-3"></span>
        <span className="Login-star Login-star-4"></span>
        <span className="Login-star Login-star-5"></span>
        <span className="Login-star Login-star-6"></span>
        <span className="Login-star Login-star-7"></span>
        <span className="Login-star Login-star-8"></span>
        <span className="Login-star Login-star-9"></span>
        <span className="Login-star Login-star-10"></span>
        <span className="Login-star Login-star-11"></span>
        <span className="Login-star Login-star-12"></span>
        <span className="Login-star Login-star-13"></span>
        <span className="Login-star Login-star-14"></span>
        <span className="Login-star Login-star-15"></span>
        <span className="Login-star Login-star-16"></span>
        <span className="Login-star Login-star-17"></span>
        <span className="Login-star Login-star-18"></span>
        <span className="Login-star Login-star-19"></span>
        <span className="Login-star Login-star-20"></span>
        <span className="Login-star Login-star-21"></span>
        <span className="Login-star Login-star-22"></span>
        <span className="Login-star Login-star-23"></span>
        <span className="Login-star Login-star-24"></span>
      </div>

      <div className="Login-orbit Login-orbit-1"></div>
      <div className="Login-orbit Login-orbit-2"></div>
      <div className="Login-orbit Login-orbit-3"></div>

      <div className="Login-core">
        <span className="Login-core-halo Login-core-halo-1"></span>
        <span className="Login-core-halo Login-core-halo-2"></span>
        <span className="Login-core-center">
          <i className="ri-fingerprint-line"></i>
        </span>
      </div>

      <span className="Login-corner Login-corner-tl"></span>
      <span className="Login-corner Login-corner-tr"></span>
      <span className="Login-corner Login-corner-bl"></span>
      <span className="Login-corner Login-corner-br"></span>

      <div className="Login-panel">
        <div className="Login-topbar">
          <div className="Login-brand">
            <span className="Login-brand-icon">
              <i className="ri-sparkling-2-fill"></i>
            </span>

            <span className="Login-brand-copy">
              <strong>QUANTUM VAULT</strong>
              <small>IDENTITY GATEWAY</small>
            </span>
          </div>

          <span className="Login-status">
            <span></span>
            ONLINE
          </span>
        </div>

        <div className="Login-heading">
          <span className="Login-kicker">SECURE SESSION // 3129</span>

          <h2>
            Enter the
            <span> vault.</span>
          </h2>

          <p>
            Authenticate your identity and restore access to your encrypted
            workspace.
          </p>
        </div>

        <div className="Login-form">
          <label className="Login-field">
            <span className="Login-field-icon">
              <i className="ri-at-line"></i>
            </span>

            <span className="Login-field-content">
              <span className="Login-label">EMAIL ADDRESS</span>
              <input type="email" placeholder="operator@nexus.io" />
            </span>

            <span className="Login-field-state">
              <i className="ri-checkbox-circle-line"></i>
            </span>

            <span className="Login-field-beam"></span>
          </label>

          <label className="Login-field">
            <span className="Login-field-icon">
              <i className="ri-key-2-line"></i>
            </span>

            <span className="Login-field-content">
              <span className="Login-label">ACCESS KEY</span>
              <input type="password" placeholder="••••••••••••" />
            </span>

            <span className="Login-field-state Login-field-eye">
              <i className="ri-eye-line"></i>
            </span>

            <span className="Login-field-beam"></span>
          </label>

          <div className="Login-options">
            <label className="Login-remember">
              <input type="checkbox" defaultChecked />

              <span className="Login-checkbox">
                <i className="ri-check-line"></i>
              </span>

              <span>Trust this device</span>
            </label>

            <a href="#" onClick={(event) => event.preventDefault()}>
              Recover key
            </a>
          </div>

          <button className="Login-submit" type="button">
            <span className="Login-submit-glow"></span>
            <span className="Login-submit-shine"></span>

            <span className="Login-submit-content">
              <span className="Login-submit-icon">
                <i className="ri-shield-keyhole-line"></i>
              </span>

              <span className="Login-submit-copy">
                <strong>UNLOCK VAULT</strong>
                <small>256-bit encrypted handshake</small>
              </span>

              <i className="ri-arrow-right-up-line Login-submit-arrow"></i>
            </span>
          </button>
        </div>

        <div className="Login-divider">
          <span></span>
          <small>ALTERNATIVE IDENTITY</small>
          <span></span>
        </div>

        <div className="Login-socials">
          <button type="button">
            <span className="Login-social-icon">
              <i className="ri-google-fill"></i>
            </span>
            <span>Google</span>
          </button>

          <button type="button">
            <span className="Login-social-icon">
              <i className="ri-github-fill"></i>
            </span>
            <span>GitHub</span>
          </button>

          <button type="button">
            <span className="Login-social-icon">
              <i className="ri-apple-fill"></i>
            </span>
            <span>Apple</span>
          </button>
        </div>

        <div className="Login-footer">
          <span className="Login-register">
            No identity?
            <a href="#" onClick={(event) => event.preventDefault()}>
              Create access
            </a>
          </span>

          <span className="Login-encryption">
            <i className="ri-lock-star-line"></i>
            AES-256
          </span>
        </div>
      </div>
    </div>
  ),
  html: `<link
  href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
  rel="stylesheet"
/>

<div class="Login login-3129">
  <div class="Login-space">
    <span class="Login-nebula Login-nebula-1"></span>
    <span class="Login-nebula Login-nebula-2"></span>
    <span class="Login-nebula Login-nebula-3"></span>
    <span class="Login-grid"></span>
    <span class="Login-scan"></span>

    <span class="Login-star Login-star-1"></span>
    <span class="Login-star Login-star-2"></span>
    <span class="Login-star Login-star-3"></span>
    <span class="Login-star Login-star-4"></span>
    <span class="Login-star Login-star-5"></span>
    <span class="Login-star Login-star-6"></span>
    <span class="Login-star Login-star-7"></span>
    <span class="Login-star Login-star-8"></span>
    <span class="Login-star Login-star-9"></span>
    <span class="Login-star Login-star-10"></span>
    <span class="Login-star Login-star-11"></span>
    <span class="Login-star Login-star-12"></span>
    <span class="Login-star Login-star-13"></span>
    <span class="Login-star Login-star-14"></span>
    <span class="Login-star Login-star-15"></span>
    <span class="Login-star Login-star-16"></span>
    <span class="Login-star Login-star-17"></span>
    <span class="Login-star Login-star-18"></span>
    <span class="Login-star Login-star-19"></span>
    <span class="Login-star Login-star-20"></span>
    <span class="Login-star Login-star-21"></span>
    <span class="Login-star Login-star-22"></span>
    <span class="Login-star Login-star-23"></span>
    <span class="Login-star Login-star-24"></span>
  </div>

  <div class="Login-orbit Login-orbit-1"></div>
  <div class="Login-orbit Login-orbit-2"></div>
  <div class="Login-orbit Login-orbit-3"></div>

  <div class="Login-core">
    <span class="Login-core-halo Login-core-halo-1"></span>
    <span class="Login-core-halo Login-core-halo-2"></span>
    <span class="Login-core-center">
      <i class="ri-fingerprint-line"></i>
    </span>
  </div>

  <span class="Login-corner Login-corner-tl"></span>
  <span class="Login-corner Login-corner-tr"></span>
  <span class="Login-corner Login-corner-bl"></span>
  <span class="Login-corner Login-corner-br"></span>

  <div class="Login-panel">
    <div class="Login-topbar">
      <div class="Login-brand">
        <span class="Login-brand-icon">
          <i class="ri-sparkling-2-fill"></i>
        </span>

        <span class="Login-brand-copy">
          <strong>QUANTUM VAULT</strong>
          <small>IDENTITY GATEWAY</small>
        </span>
      </div>

      <span class="Login-status">
        <span></span>
        ONLINE
      </span>
    </div>

    <div class="Login-heading">
      <span class="Login-kicker">SECURE SESSION // 3129</span>

      <h2>
        Enter the
        <span> vault.</span>
      </h2>

      <p>
        Authenticate your identity and restore access to your encrypted
        workspace.
      </p>
    </div>

    <div class="Login-form">
      <label class="Login-field">
        <span class="Login-field-icon">
          <i class="ri-at-line"></i>
        </span>

        <span class="Login-field-content">
          <span class="Login-label">EMAIL ADDRESS</span>
          <input type="email" placeholder="operator@nexus.io" />
        </span>

        <span class="Login-field-state">
          <i class="ri-checkbox-circle-line"></i>
        </span>

        <span class="Login-field-beam"></span>
      </label>

      <label class="Login-field">
        <span class="Login-field-icon">
          <i class="ri-key-2-line"></i>
        </span>

        <span class="Login-field-content">
          <span class="Login-label">ACCESS KEY</span>
          <input type="password" placeholder="••••••••••••" />
        </span>

        <span class="Login-field-state Login-field-eye">
          <i class="ri-eye-line"></i>
        </span>

        <span class="Login-field-beam"></span>
      </label>

      <div class="Login-options">
        <label class="Login-remember">
          <input type="checkbox" checked />

          <span class="Login-checkbox">
            <i class="ri-check-line"></i>
          </span>

          <span>Trust this device</span>
        </label>

        <a href="#">Recover key</a>
      </div>

      <button class="Login-submit" type="button">
        <span class="Login-submit-glow"></span>
        <span class="Login-submit-shine"></span>

        <span class="Login-submit-content">
          <span class="Login-submit-icon">
            <i class="ri-shield-keyhole-line"></i>
          </span>

          <span class="Login-submit-copy">
            <strong>UNLOCK VAULT</strong>
            <small>256-bit encrypted handshake</small>
          </span>

          <i class="ri-arrow-right-up-line Login-submit-arrow"></i>
        </span>
      </button>
    </div>

    <div class="Login-divider">
      <span></span>
      <small>ALTERNATIVE IDENTITY</small>
      <span></span>
    </div>

    <div class="Login-socials">
      <button type="button">
        <span class="Login-social-icon">
          <i class="ri-google-fill"></i>
        </span>
        <span>Google</span>
      </button>

      <button type="button">
        <span class="Login-social-icon">
          <i class="ri-github-fill"></i>
        </span>
        <span>GitHub</span>
      </button>

      <button type="button">
        <span class="Login-social-icon">
          <i class="ri-apple-fill"></i>
        </span>
        <span>Apple</span>
      </button>
    </div>

    <div class="Login-footer">
      <span class="Login-register">
        No identity?
        <a href="#">Create access</a>
      </span>

      <span class="Login-encryption">
        <i class="ri-lock-star-line"></i>
        AES-256
      </span>
    </div>
  </div>
</div>`,
  css: `.login-3129.Login {
  --qv-bg: #020611;
  --qv-panel: rgba(7, 13, 31, 0.9);
  --qv-panel-soft: rgba(10, 18, 42, 0.78);
  --qv-blue: #5eb6ff;
  --qv-cyan: #61e9ff;
  --qv-indigo: #6e74ff;
  --qv-violet: #a878ff;
  --qv-pink: #ec6ed0;
  --qv-text: #f8fbff;
  --qv-soft: #b9c8e5;
  --qv-muted: #71809f;
  --qv-line: rgba(115, 170, 255, 0.2);
  --qv-green: #6ce9b7;

  position: relative;
  width: min(100%, 760px);
  min-height: 470px;
  overflow: hidden;
  border: 1px solid rgba(106, 167, 255, 0.24);
  border-radius: 30px;
  color: var(--qv-text);
  background:
    radial-gradient(
      circle at 15% 8%,
      rgba(52, 132, 255, 0.2),
      transparent 25%
    ),
    radial-gradient(
      circle at 88% 13%,
      rgba(151, 87, 255, 0.16),
      transparent 28%
    ),
    linear-gradient(
      145deg,
      #07101e 0%,
      #030712 48%,
      #080818 100%
    );
  box-shadow:
    0 35px 100px rgba(0, 0, 0, 0.56),
    0 0 70px rgba(59, 130, 246, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  isolation: isolate;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

.login-3129,
.login-3129 * {
  box-sizing: border-box;
}

.login-3129 button,
.login-3129 input {
  font: inherit;
}

.login-3129 button {
  appearance: none;
}

.login-3129 .Login-space {
  position: absolute;
  inset: 0;
  z-index: -20;
  overflow: hidden;
  border-radius: inherit;
  pointer-events: none;
}

.login-3129 .Login-space::before {
  content: "";
  position: absolute;
  inset: -65%;
  background:
    conic-gradient(
      from 180deg at 50% 50%,
      rgba(58, 130, 246, 0) 0deg,
      rgba(58, 130, 246, 0.22) 42deg,
      rgba(99, 102, 241, 0.18) 90deg,
      rgba(168, 85, 247, 0.15) 142deg,
      rgba(236, 72, 153, 0.09) 190deg,
      rgba(34, 211, 238, 0.16) 240deg,
      rgba(58, 130, 246, 0) 310deg,
      rgba(58, 130, 246, 0.2) 350deg,
      rgba(58, 130, 246, 0) 360deg
    );
  filter: blur(50px);
  opacity: 0.82;
  transform-origin: center;
  animation: login-3129-aurora 20s linear infinite;
}

.login-3129 .Login-space::after {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.045;
  background-image:
    radial-gradient(circle at 20% 30%, #fff 0 0.7px, transparent 1px),
    radial-gradient(circle at 70% 46%, #fff 0 0.6px, transparent 0.9px),
    radial-gradient(circle at 42% 82%, #fff 0 0.7px, transparent 1px);
  background-size:
    10px 13px,
    15px 17px,
    9px 14px;
  mix-blend-mode: screen;
}

.login-3129 .Login-nebula {
  position: absolute;
  display: block;
  border-radius: 999px;
  filter: blur(48px);
  opacity: 0.6;
}

.login-3129 .Login-nebula-1 {
  width: 360px;
  height: 240px;
  left: -140px;
  top: -110px;
  background: rgba(43, 132, 255, 0.18);
  animation: login-3129-nebula-one 9s ease-in-out infinite alternate;
}

.login-3129 .Login-nebula-2 {
  width: 300px;
  height: 260px;
  right: -130px;
  top: 40px;
  background: rgba(142, 84, 255, 0.14);
  animation: login-3129-nebula-two 11s ease-in-out infinite alternate;
}

.login-3129 .Login-nebula-3 {
  width: 320px;
  height: 190px;
  left: 32%;
  bottom: -120px;
  background: rgba(42, 218, 255, 0.09);
  animation: login-3129-nebula-three 10s ease-in-out infinite alternate;
}

.login-3129 .Login-grid {
  position: absolute;
  inset: 0;
  opacity: 0.22;
  background-image:
    linear-gradient(
      rgba(91, 151, 255, 0.07) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(91, 151, 255, 0.07) 1px,
      transparent 1px
    );
  background-size: 28px 28px;
  mask-image: linear-gradient(to bottom, #000, transparent 95%);
  -webkit-mask-image: linear-gradient(to bottom, #000, transparent 95%);
  animation: login-3129-grid-drift 15s linear infinite;
}

.login-3129 .Login-scan {
  position: absolute;
  left: 0;
  right: 0;
  top: -180px;
  height: 150px;
  opacity: 0.75;
  background:
    linear-gradient(
      to bottom,
      transparent,
      rgba(104, 191, 255, 0.025),
      rgba(169, 216, 255, 0.1),
      rgba(104, 191, 255, 0.025),
      transparent
    );
  animation: login-3129-scan 9s linear infinite;
}

.login-3129 .Login-star {
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 999px;
  background: rgba(224, 243, 255, 0.9);
  box-shadow: 0 0 8px rgba(115, 202, 255, 0.88);
  animation: login-3129-star 4.2s ease-in-out infinite;
}

.login-3129 .Login-star-1 {
  left: 5%;
  top: 8%;
  animation-delay: -0.4s;
}

.login-3129 .Login-star-2 {
  left: 13%;
  top: 22%;
  animation-delay: -1.1s;
}

.login-3129 .Login-star-3 {
  left: 21%;
  top: 12%;
  animation-delay: -2.5s;
}

.login-3129 .Login-star-4 {
  left: 31%;
  top: 32%;
  animation-delay: -1.7s;
}

.login-3129 .Login-star-5 {
  left: 41%;
  top: 7%;
  animation-delay: -3.1s;
}

.login-3129 .Login-star-6 {
  left: 50%;
  top: 18%;
  animation-delay: -0.8s;
}

.login-3129 .Login-star-7 {
  left: 59%;
  top: 5%;
  animation-delay: -2.2s;
}

.login-3129 .Login-star-8 {
  left: 68%;
  top: 27%;
  animation-delay: -3.4s;
}

.login-3129 .Login-star-9 {
  left: 77%;
  top: 10%;
  animation-delay: -1.4s;
}

.login-3129 .Login-star-10 {
  left: 88%;
  top: 20%;
  animation-delay: -2.9s;
}

.login-3129 .Login-star-11 {
  left: 96%;
  top: 38%;
  animation-delay: -0.6s;
}

.login-3129 .Login-star-12 {
  left: 9%;
  top: 49%;
  animation-delay: -2.3s;
}

.login-3129 .Login-star-13 {
  left: 18%;
  top: 62%;
  animation-delay: -1.6s;
}

.login-3129 .Login-star-14 {
  left: 28%;
  top: 77%;
  animation-delay: -3.5s;
}

.login-3129 .Login-star-15 {
  left: 38%;
  top: 55%;
  animation-delay: -0.9s;
}

.login-3129 .Login-star-16 {
  left: 47%;
  top: 69%;
  animation-delay: -2.1s;
}

.login-3129 .Login-star-17 {
  left: 56%;
  top: 87%;
  animation-delay: -3s;
}

.login-3129 .Login-star-18 {
  left: 65%;
  top: 58%;
  animation-delay: -1.2s;
}

.login-3129 .Login-star-19 {
  left: 73%;
  top: 72%;
  animation-delay: -2.7s;
}

.login-3129 .Login-star-20 {
  left: 82%;
  top: 89%;
  animation-delay: -0.5s;
}

.login-3129 .Login-star-21 {
  left: 91%;
  top: 64%;
  animation-delay: -2s;
}

.login-3129 .Login-star-22 {
  left: 98%;
  top: 84%;
  animation-delay: -3.2s;
}

.login-3129 .Login-star-23 {
  left: 35%;
  top: 92%;
  animation-delay: -1.8s;
}

.login-3129 .Login-star-24 {
  left: 12%;
  top: 91%;
  animation-delay: -2.6s;
}

.login-3129 .Login-orbit {
  position: absolute;
  z-index: -14;
  border-radius: 999px;
  pointer-events: none;
  transform-origin: center;
}

.login-3129 .Login-orbit-1 {
  width: 330px;
  height: 330px;
  right: -190px;
  top: -180px;
  border: 1px solid rgba(100, 181, 255, 0.12);
  animation: login-3129-orbit-one 24s linear infinite;
}

.login-3129 .Login-orbit-2 {
  width: 270px;
  height: 270px;
  right: -160px;
  top: -150px;
  border: 1px dashed rgba(137, 109, 255, 0.12);
  animation: login-3129-orbit-two 18s linear infinite reverse;
}

.login-3129 .Login-orbit-3 {
  width: 205px;
  height: 205px;
  right: -128px;
  top: -117px;
  border: 1px solid rgba(83, 223, 255, 0.1);
  animation: login-3129-orbit-three 12s linear infinite;
}

.login-3129 .Login-core {
  position: absolute;
  right: 30px;
  top: 27px;
  z-index: -11;
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  pointer-events: none;
  animation: login-3129-core-float 5s ease-in-out infinite;
}

.login-3129 .Login-core-halo {
  position: absolute;
  border-radius: 999px;
}

.login-3129 .Login-core-halo-1 {
  inset: 0;
  border: 1px solid rgba(116, 210, 255, 0.15);
  animation: login-3129-halo-one 3s ease-in-out infinite;
}

.login-3129 .Login-core-halo-2 {
  inset: 9px;
  border: 1px dashed rgba(139, 119, 255, 0.18);
  animation: login-3129-halo-two 5s linear infinite;
}

.login-3129 .Login-core-center {
  width: 25px;
  height: 25px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(128, 205, 255, 0.22);
  border-radius: 999px;
  color: #a8e4ff;
  background:
    radial-gradient(
      circle,
      rgba(135, 221, 255, 0.3),
      rgba(97, 113, 255, 0.13) 48%,
      rgba(5, 9, 23, 0.7) 72%
    );
  box-shadow:
    0 0 14px rgba(103, 209, 255, 0.4),
    0 0 30px rgba(103, 117, 255, 0.24);
  animation: login-3129-core-pulse 2.4s ease-in-out infinite;
}

.login-3129 .Login-core-center i {
  font-size: 13px;
}

.login-3129 .Login-corner {
  position: absolute;
  z-index: 6;
  width: 30px;
  height: 30px;
  pointer-events: none;
}

.login-3129 .Login-corner::before,
.login-3129 .Login-corner::after {
  content: "";
  position: absolute;
  background: linear-gradient(
    90deg,
    rgba(105, 187, 255, 0.52),
    transparent
  );
}

.login-3129 .Login-corner::before {
  width: 22px;
  height: 1px;
}

.login-3129 .Login-corner::after {
  width: 1px;
  height: 22px;
  background: linear-gradient(
    180deg,
    rgba(105, 187, 255, 0.52),
    transparent
  );
}

.login-3129 .Login-corner-tl {
  left: 12px;
  top: 12px;
}

.login-3129 .Login-corner-tr {
  right: 12px;
  top: 12px;
  transform: rotate(90deg);
}

.login-3129 .Login-corner-bl {
  left: 12px;
  bottom: 12px;
  transform: rotate(-90deg);
}

.login-3129 .Login-corner-br {
  right: 12px;
  bottom: 12px;
  transform: rotate(180deg);
}

.login-3129 .Login-panel {
  position: relative;
  z-index: 5;
  min-height: 470px;
  padding: 30px 32px 26px;
  display: flex;
  flex-direction: column;
  background:
    linear-gradient(
      145deg,
      rgba(8, 14, 34, 0.91),
      rgba(4, 8, 21, 0.83)
    );
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    inset 0 0 90px rgba(67, 124, 255, 0.025);
}

.login-3129 .Login-panel::before {
  content: "";
  position: absolute;
  left: 50%;
  top: -220px;
  width: 120px;
  height: 700px;
  transform: translateX(-50%) rotate(18deg);
  border-radius: 999px;
  pointer-events: none;
  background:
    linear-gradient(
      to bottom,
      transparent,
      rgba(79, 160, 255, 0.08),
      rgba(130, 101, 255, 0.06),
      transparent
    );
  filter: blur(20px);
  animation: login-3129-panel-beam 8s ease-in-out infinite alternate;
}

.login-3129 .Login-topbar {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 34px;
}

.login-3129 .Login-brand {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 11px;
}

.login-3129 .Login-brand-icon {
  position: relative;
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border: 1px solid rgba(124, 192, 255, 0.29);
  border-radius: 13px;
  color: #c7ecff;
  background:
    radial-gradient(
      circle at 30% 24%,
      rgba(116, 213, 255, 0.24),
      transparent 42%
    ),
    linear-gradient(
      145deg,
      rgba(58, 115, 233, 0.35),
      rgba(72, 35, 143, 0.28)
    );
  box-shadow:
    0 0 24px rgba(77, 149, 255, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.09);
}

.login-3129 .Login-brand-icon::before {
  content: "";
  position: absolute;
  width: 58px;
  height: 10px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(113, 238, 255, 0.82),
    transparent
  );
  transform: rotate(-42deg) translateY(-29px);
  animation: login-3129-brand-shine 4.6s ease-in-out infinite;
}

.login-3129 .Login-brand-icon i {
  position: relative;
  z-index: 1;
  font-size: 21px;
  filter: drop-shadow(0 0 8px rgba(116, 207, 255, 0.5));
}

.login-3129 .Login-brand-copy {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.login-3129 .Login-brand-copy strong {
  color: #f6faff;
  font-size: 13px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: 0.16em;
}

.login-3129 .Login-brand-copy small {
  color: #7186ad;
  font-size: 7px;
  line-height: 1;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.login-3129 .Login-status {
  height: 30px;
  padding: 0 11px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  border: 1px solid rgba(104, 227, 185, 0.16);
  border-radius: 999px;
  color: #a3f5d4;
  background: rgba(29, 117, 84, 0.1);
  font-size: 7px;
  font-weight: 900;
  letter-spacing: 0.13em;
}

.login-3129 .Login-status > span {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: var(--qv-green);
  box-shadow: 0 0 9px rgba(108, 233, 183, 0.9);
  animation: login-3129-status-pulse 2.1s ease-in-out infinite;
}

.login-3129 .Login-heading {
  position: relative;
  z-index: 2;
  margin-bottom: 25px;
}

.login-3129 .Login-kicker {
  display: block;
  margin-bottom: 8px;
  color: #74bdff;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 0.22em;
}

.login-3129 .Login-heading h2 {
  margin: 0;
  color: #f9fbff;
  font-size: 38px;
  line-height: 0.95;
  font-weight: 900;
  letter-spacing: -0.055em;
  text-shadow: 0 0 26px rgba(72, 145, 255, 0.13);
}

.login-3129 .Login-heading h2 span {
  color: transparent;
  background: linear-gradient(
    90deg,
    #a9ddff,
    #7c9dff 50%,
    #bb82ff
  );
  background-clip: text;
  -webkit-background-clip: text;
}

.login-3129 .Login-heading p {
  max-width: 410px;
  margin: 12px 0 0;
  color: rgba(190, 209, 239, 0.65);
  font-size: 11px;
  line-height: 1.55;
}

.login-3129 .Login-form {
  position: relative;
  z-index: 2;
  display: grid;
  gap: 11px;
}

.login-3129 .Login-field {
  position: relative;
  height: 58px;
  display: flex;
  align-items: center;
  overflow: hidden;
  border: 1px solid rgba(121, 164, 235, 0.16);
  border-radius: 15px;
  background: rgba(5, 11, 28, 0.7);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.02),
    0 0 0 rgba(73, 144, 255, 0);
  transition:
    border-color 0.24s ease,
    background 0.24s ease,
    box-shadow 0.24s ease,
    transform 0.24s ease;
}

.login-3129 .Login-field:hover {
  border-color: rgba(124, 181, 255, 0.28);
  background: rgba(8, 15, 36, 0.82);
}

.login-3129 .Login-field:focus-within {
  border-color: rgba(104, 182, 255, 0.62);
  background: rgba(9, 18, 42, 0.94);
  box-shadow:
    0 0 0 3px rgba(82, 148, 255, 0.07),
    0 0 24px rgba(67, 137, 255, 0.09);
  transform: translateY(-1px);
}

.login-3129 .Login-field-icon {
  width: 52px;
  flex: 0 0 52px;
  display: grid;
  place-items: center;
  color: #7196ca;
  font-size: 18px;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.login-3129 .Login-field:focus-within .Login-field-icon {
  color: #94d0ff;
  transform: scale(1.08);
}

.login-3129 .Login-field-content {
  min-width: 0;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
}

.login-3129 .Login-label {
  color: #667c9f;
  font-size: 7px;
  font-weight: 900;
  letter-spacing: 0.13em;
}

.login-3129 .Login-field input {
  width: 100%;
  min-width: 0;
  padding: 0;
  outline: none;
  border: 0;
  color: #edf6ff;
  background: transparent;
  font-size: 11px;
  font-weight: 600;
  caret-color: #7acbff;
}

.login-3129 .Login-field input::placeholder {
  color: #566985;
  opacity: 1;
}

.login-3129 .Login-field-state {
  width: 47px;
  flex: 0 0 47px;
  display: grid;
  place-items: center;
  color: #5f7396;
  font-size: 16px;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.login-3129 .Login-field:hover .Login-field-state {
  color: #85b9e9;
}

.login-3129 .Login-field:focus-within .Login-field-state {
  color: #7ecbff;
  transform: scale(1.05);
}

.login-3129 .Login-field-beam {
  position: absolute;
  left: 13px;
  right: 13px;
  bottom: 0;
  height: 1px;
  opacity: 0;
  transform: scaleX(0.2);
  background: linear-gradient(
    90deg,
    transparent,
    #68c9ff,
    #8d7dff,
    transparent
  );
  transition:
    opacity 0.24s ease,
    transform 0.24s ease;
}

.login-3129 .Login-field:focus-within .Login-field-beam {
  opacity: 1;
  transform: scaleX(1);
}

.login-3129 .Login-options {
  margin: 1px 2px 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.login-3129 .Login-remember {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  color: #8798b9;
  font-size: 9px;
  user-select: none;
}

.login-3129 .Login-remember input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}

.login-3129 .Login-checkbox {
  width: 16px;
  height: 16px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(123, 165, 230, 0.3);
  border-radius: 5px;
  color: #03101d;
  background: rgba(7, 15, 34, 0.82);
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.login-3129 .Login-checkbox i {
  opacity: 0;
  font-size: 11px;
  font-weight: 900;
  transform: scale(0.5);
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}

.login-3129 .Login-remember:hover .Login-checkbox {
  border-color: rgba(122, 191, 255, 0.52);
  transform: translateY(-1px);
}

.login-3129 .Login-remember input:checked + .Login-checkbox {
  border-color: rgba(105, 207, 255, 0.72);
  background: linear-gradient(135deg, #68e4ff, #7e8fff);
  box-shadow: 0 0 14px rgba(88, 173, 255, 0.3);
}

.login-3129 .Login-remember input:checked + .Login-checkbox i {
  opacity: 1;
  transform: scale(1);
}

.login-3129 .Login-options a {
  position: relative;
  color: #84beff;
  text-decoration: none;
  font-size: 9px;
  font-weight: 800;
}

.login-3129 .Login-options a::after {
  content: "";
  position: absolute;
  left: 0;
  right: 100%;
  bottom: -3px;
  height: 1px;
  background: linear-gradient(90deg, #68caff, #a17cff);
  transition: right 0.2s ease;
}

.login-3129 .Login-options a:hover::after {
  right: 0;
}

.login-3129 .Login-submit {
  position: relative;
  width: 100%;
  min-height: 60px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(128, 200, 255, 0.62);
  border-radius: 15px;
  color: #fff;
  background:
    linear-gradient(
      90deg,
      #22d3ee,
      #6366f1,
      #a855f7,
      #ec4899,
      #22d3ee
    );
  background-size: 300% 100%;
  box-shadow:
    0 11px 30px rgba(65, 89, 225, 0.28),
    0 0 25px rgba(79, 151, 255, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  animation: login-3129-submit-gradient 8s linear infinite;
  transition:
    transform 0.2s ease,
    filter 0.2s ease,
    box-shadow 0.2s ease;
}

.login-3129 .Login-submit:hover {
  filter: brightness(1.09);
  transform: translateY(-2px);
  box-shadow:
    0 15px 35px rgba(65, 89, 225, 0.35),
    0 0 34px rgba(79, 151, 255, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.34);
}

.login-3129 .Login-submit:active {
  transform: translateY(0) scale(0.986);
}

.login-3129 .Login-submit-glow {
  position: absolute;
  inset: 0;
  opacity: 0.32;
  background:
    radial-gradient(
      circle at 50% 130%,
      rgba(255, 255, 255, 0.45),
      transparent 65%
    );
  transition: opacity 0.2s ease;
}

.login-3129 .Login-submit:hover .Login-submit-glow {
  opacity: 0.55;
}

.login-3129 .Login-submit-shine {
  position: absolute;
  top: -90%;
  left: -38%;
  width: 25%;
  height: 280%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.52),
    transparent
  );
  transform: rotate(18deg);
  animation: login-3129-submit-shine 4.2s ease-in-out infinite;
}

.login-3129 .Login-submit-content {
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 58px;
  padding: 0 16px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 11px;
}

.login-3129 .Login-submit-icon {
  width: 33px;
  height: 33px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.09);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.login-3129 .Login-submit-icon i {
  font-size: 16px;
}

.login-3129 .Login-submit-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
}

.login-3129 .Login-submit-copy strong {
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.12em;
}

.login-3129 .Login-submit-copy small {
  color: rgba(255, 255, 255, 0.72);
  font-size: 7px;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.login-3129 .Login-submit-arrow {
  font-size: 17px;
  transition: transform 0.2s ease;
}

.login-3129 .Login-submit:hover .Login-submit-arrow {
  transform: translate(3px, -3px);
}

.login-3129 .Login-divider {
  margin: 21px 0 15px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 11px;
}

.login-3129 .Login-divider > span {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(124, 164, 230, 0.18)
  );
}

.login-3129 .Login-divider > span:last-child {
  transform: rotate(180deg);
}

.login-3129 .Login-divider small {
  color: #60708f;
  font-size: 7px;
  font-weight: 900;
  letter-spacing: 0.15em;
}

.login-3129 .Login-socials {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 9px;
}

.login-3129 .Login-socials button {
  position: relative;
  height: 48px;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  border: 1px solid rgba(119, 160, 224, 0.15);
  border-radius: 13px;
  color: #93a9cd;
  background: rgba(6, 13, 30, 0.6);
  font-size: 9px;
  font-weight: 800;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.login-3129 .Login-socials button::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0;
  background:
    radial-gradient(
      circle at 50% 120%,
      rgba(84, 153, 255, 0.16),
      transparent 70%
    );
  transition: opacity 0.2s ease;
}

.login-3129 .Login-socials button:hover {
  color: #e7f4ff;
  border-color: rgba(113, 187, 255, 0.34);
  background: rgba(17, 31, 66, 0.74);
  transform: translateY(-2px);
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.18),
    0 0 18px rgba(74, 137, 255, 0.08);
}

.login-3129 .Login-socials button:hover::before {
  opacity: 1;
}

.login-3129 .Login-social-icon,
.login-3129 .Login-socials button > span:last-child {
  position: relative;
  z-index: 1;
}

.login-3129 .Login-social-icon {
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.035);
}

.login-3129 .Login-social-icon i {
  font-size: 14px;
}

.login-3129 .Login-footer {
  margin-top: auto;
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: #70809f;
  font-size: 8px;
}

.login-3129 .Login-register {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.login-3129 .Login-register a {
  color: #8fc0ff;
  font-weight: 800;
  text-decoration: none;
}

.login-3129 .Login-register a:hover {
  color: #c5e4ff;
}

.login-3129 .Login-encryption {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #61718f;
  white-space: nowrap;
}

.login-3129 .Login-encryption i {
  color: #64dcb1;
  font-size: 11px;
}

@keyframes login-3129-aurora {
  0% {
    transform: rotate(0deg) scale(1);
  }

  50% {
    transform: rotate(180deg) scale(1.08);
  }

  100% {
    transform: rotate(360deg) scale(1);
  }
}

@keyframes login-3129-nebula-one {
  from {
    transform: translate(-20px, -10px) scale(0.92);
  }

  to {
    transform: translate(55px, 42px) scale(1.15);
  }
}

@keyframes login-3129-nebula-two {
  from {
    transform: translate(20px, -28px) scale(0.9);
  }

  to {
    transform: translate(-58px, 36px) scale(1.16);
  }
}

@keyframes login-3129-nebula-three {
  from {
    transform: translateX(-34px) scale(0.9);
  }

  to {
    transform: translateX(42px) scale(1.14);
  }
}

@keyframes login-3129-grid-drift {
  0% {
    background-position: 0 0, 0 0;
  }

  100% {
    background-position: 28px 28px, 28px 28px;
  }
}

@keyframes login-3129-scan {
  from {
    transform: translateY(-180px);
  }

  to {
    transform: translateY(820px);
  }
}

@keyframes login-3129-star {
  0%,
  100% {
    opacity: 0.16;
    transform: scale(0.7);
  }

  44% {
    opacity: 1;
    transform: scale(1.35);
  }

  72% {
    opacity: 0.48;
    transform: scale(0.9);
  }
}

@keyframes login-3129-orbit-one {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes login-3129-orbit-two {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes login-3129-orbit-three {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes login-3129-core-float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-7px);
  }
}

@keyframes login-3129-halo-one {
  0%,
  100% {
    opacity: 0.18;
    transform: scale(0.82);
  }

  50% {
    opacity: 0.7;
    transform: scale(1.08);
  }
}

@keyframes login-3129-halo-two {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes login-3129-core-pulse {
  0%,
  100% {
    transform: scale(0.88);
    filter: brightness(0.9);
  }

  50% {
    transform: scale(1.18);
    filter: brightness(1.25);
  }
}

@keyframes login-3129-panel-beam {
  from {
    transform: translateX(-50%) rotate(10deg) scaleX(0.88);
    opacity: 0.45;
  }

  to {
    transform: translateX(-50%) rotate(26deg) scaleX(1.15);
    opacity: 0.9;
  }
}

@keyframes login-3129-brand-shine {
  0%,
  35% {
    transform: rotate(-42deg) translateY(-32px);
    opacity: 0;
  }

  48% {
    opacity: 1;
  }

  66%,
  100% {
    transform: rotate(-42deg) translateY(35px);
    opacity: 0;
  }
}

@keyframes login-3129-status-pulse {
  0%,
  100% {
    opacity: 0.48;
    transform: scale(0.8);
  }

  50% {
    opacity: 1;
    transform: scale(1.22);
  }
}

@keyframes login-3129-submit-gradient {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 300% 50%;
  }
}

@keyframes login-3129-submit-shine {
  0%,
  54% {
    left: -38%;
    opacity: 0;
  }

  65% {
    opacity: 1;
  }

  83%,
  100% {
    left: 126%;
    opacity: 0;
  }
}

@media (max-width: 760px) {
  .login-3129.Login {
    width: min(100%, 430px);
  }

  .login-3129 .Login-panel {
    padding: 27px 24px 24px;
  }

  .login-3129 .Login-heading h2 {
    font-size: 34px;
  }

  .login-3129 .Login-core {
    opacity: 0.7;
  }
}

@media (max-width: 460px) {
  .login-3129.Login {
    min-height: 540px;
    border-radius: 24px;
  }

  .login-3129 .Login-panel {
    min-height: 540px;
    padding: 24px 19px 21px;
  }

  .login-3129 .Login-topbar {
    margin-bottom: 28px;
  }

  .login-3129 .Login-status {
    display: none;
  }

  .login-3129 .Login-heading h2 {
    font-size: 31px;
  }

  .login-3129 .Login-socials button > span:last-child {
    display: none;
  }

  .login-3129 .Login-socials button {
    height: 44px;
  }

  .login-3129 .Login-footer {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (prefers-reduced-motion: reduce) {
  .login-3129 *,
  .login-3129 *::before,
  .login-3129 *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}`,
},
  {
    id: 3130,
    name: "Aurora Glass Login",
    preview: (
      <div className="login-3130">
        <div className="login-3130-orb login-3130-orb-1"></div>
        <div className="login-3130-orb login-3130-orb-2"></div>

        <div className="login-3130-card">
          <div className="login-3130-logo">
            <i className="ri-shining-2-fill"></i>
          </div>

          <div className="login-3130-heading">
            <span>WELCOME BACK</span>
            <h2>Sign in to Aurora</h2>
            <p>Continue to your workspace and manage your projects.</p>
          </div>

          <div className="login-3130-form">
            <label>
              <span>Email address</span>
              <div className="login-3130-input">
                <i className="ri-mail-line"></i>
                <input type="email" placeholder="name@company.com" />
              </div>
            </label>

            <label>
              <div className="login-3130-label-row">
                <span>Password</span>
                <a href="#" onClick={(event) => event.preventDefault()}>
                  Forgot?
                </a>
              </div>

              <div className="login-3130-input">
                <i className="ri-lock-2-line"></i>
                <input type="password" placeholder="••••••••" />
                <i className="ri-eye-line"></i>
              </div>
            </label>

            <label className="login-3130-remember">
              <input type="checkbox" defaultChecked />
              <span>Keep me signed in</span>
            </label>

            <button type="button" className="login-3130-submit">
              Sign in
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>

          <div className="login-3130-divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <div className="login-3130-socials">
            <button type="button">
              <i className="ri-google-fill"></i>
              Google
            </button>

            <button type="button">
              <i className="ri-github-fill"></i>
              GitHub
            </button>
          </div>

          <p className="login-3130-footer">
            New to Aurora?
            <a href="#" onClick={(event) => event.preventDefault()}>
              Create account
            </a>
          </p>
        </div>
      </div>
    ),
    html: `<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
    rel="stylesheet"
/>

<div class="login-3130">
    <div class="login-3130-orb login-3130-orb-1"></div>
    <div class="login-3130-orb login-3130-orb-2"></div>

    <div class="login-3130-card">
        <div class="login-3130-logo">
            <i class="ri-shining-2-fill"></i>
        </div>

        <div class="login-3130-heading">
            <span>WELCOME BACK</span>
            <h2>Sign in to Aurora</h2>
            <p>Continue to your workspace and manage your projects.</p>
        </div>

        <div class="login-3130-form">
            <label>
                <span>Email address</span>

                <div class="login-3130-input">
                    <i class="ri-mail-line"></i>
                    <input type="email" placeholder="name@company.com">
                </div>
            </label>

            <label>
                <div class="login-3130-label-row">
                    <span>Password</span>
                    <a href="#">Forgot?</a>
                </div>

                <div class="login-3130-input">
                    <i class="ri-lock-2-line"></i>
                    <input type="password" placeholder="••••••••">
                    <i class="ri-eye-line"></i>
                </div>
            </label>

            <label class="login-3130-remember">
                <input type="checkbox" checked>
                <span>Keep me signed in</span>
            </label>

            <button class="login-3130-submit" type="button">
                Sign in
                <i class="ri-arrow-right-line"></i>
            </button>
        </div>

        <div class="login-3130-divider">
            <span></span>
            <p>OR</p>
            <span></span>
        </div>

        <div class="login-3130-socials">
            <button type="button">
                <i class="ri-google-fill"></i>
                Google
            </button>

            <button type="button">
                <i class="ri-github-fill"></i>
                GitHub
            </button>
        </div>

        <p class="login-3130-footer">
            New to Aurora?
            <a href="#">Create account</a>
        </p>
    </div>
</div>`,
    css: `.login-3130 {
    position: relative;
    width: 340px;
    padding: 28px;
    overflow: hidden;
    border-radius: 26px;
    color: #f8fafc;
    background: #080d19;
    font-family: Inter, Arial, sans-serif;
    box-shadow: 0 24px 60px rgba(0, 0, 0, .45);
}

.login-3130 * {
    box-sizing: border-box;
}

.login-3130-orb {
    position: absolute;
    border-radius: 999px;
    filter: blur(45px);
    pointer-events: none;
    animation: login3130Float 7s ease-in-out infinite alternate;
}

.login-3130-orb-1 {
    width: 180px;
    height: 180px;
    left: -80px;
    top: -70px;
    background: rgba(59, 130, 246, .24);
}

.login-3130-orb-2 {
    width: 170px;
    height: 170px;
    right: -85px;
    bottom: -65px;
    background: rgba(168, 85, 247, .2);
    animation-delay: -3s;
}

.login-3130-card {
    position: relative;
    z-index: 2;
}

.login-3130-logo {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    margin-bottom: 22px;
    border: 1px solid rgba(148, 190, 255, .22);
    border-radius: 13px;
    color: #9acbff;
    background: rgba(255, 255, 255, .06);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .08);
}

.login-3130-logo i {
    font-size: 20px;
}

.login-3130-heading > span {
    color: #6faeff;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .2em;
}

.login-3130-heading h2 {
    margin: 7px 0 7px;
    font-size: 27px;
    letter-spacing: -.04em;
}

.login-3130-heading p {
    margin: 0;
    color: #8492ad;
    font-size: 11px;
    line-height: 1.55;
}

.login-3130-form {
    margin-top: 24px;
    display: grid;
    gap: 14px;
}

.login-3130-form label > span,
.login-3130-label-row span {
    color: #aab5ca;
    font-size: 9px;
    font-weight: 700;
}

.login-3130-label-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.login-3130-label-row a {
    color: #75b4ff;
    font-size: 8px;
    font-weight: 700;
    text-decoration: none;
}

.login-3130-input {
    height: 44px;
    margin-top: 6px;
    padding: 0 13px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid rgba(136, 159, 198, .17);
    border-radius: 11px;
    background: rgba(4, 9, 19, .66);
    transition: .2s ease;
}

.login-3130-input:focus-within {
    border-color: #4e9cff;
    box-shadow: 0 0 0 3px rgba(78, 156, 255, .1);
    transform: translateY(-1px);
}

.login-3130-input i {
    color: #6d7d99;
    font-size: 14px;
}

.login-3130-input input {
    width: 100%;
    outline: none;
    border: 0;
    color: #edf6ff;
    background: transparent;
    font-size: 10px;
}

.login-3130-input input::placeholder {
    color: #526078;
}

.login-3130-remember {
    display: flex;
    align-items: center;
    gap: 7px;
    cursor: pointer;
}

.login-3130-remember input {
    accent-color: #579cff;
}

.login-3130-submit {
    position: relative;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    overflow: hidden;
    cursor: pointer;
    border: 0;
    border-radius: 11px;
    color: white;
    background: linear-gradient(100deg, #3b82f6, #6366f1, #8b5cf6);
    background-size: 200% 100%;
    font-size: 10px;
    font-weight: 800;
    animation: login3130Button 5s linear infinite;
    transition: .2s ease;
}

.login-3130-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(76, 100, 255, .28);
}

.login-3130-submit i {
    transition: transform .2s ease;
}

.login-3130-submit:hover i {
    transform: translateX(4px);
}

.login-3130-divider {
    margin: 18px 0;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 10px;
}

.login-3130-divider span {
    height: 1px;
    background: rgba(148, 163, 184, .15);
}

.login-3130-divider p {
    margin: 0;
    color: #5d6b83;
    font-size: 7px;
}

.login-3130-socials {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9px;
}

.login-3130-socials button {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    cursor: pointer;
    border: 1px solid rgba(139, 160, 196, .16);
    border-radius: 10px;
    color: #b6c1d6;
    background: rgba(255, 255, 255, .035);
    font-size: 9px;
    font-weight: 700;
    transition: .2s ease;
}

.login-3130-socials button:hover {
    color: white;
    border-color: rgba(104, 167, 255, .4);
    background: rgba(80, 135, 255, .08);
    transform: translateY(-2px);
}

.login-3130-footer {
    margin: 19px 0 0;
    color: #78859c;
    font-size: 9px;
    text-align: center;
}

.login-3130-footer a {
    margin-left: 4px;
    color: #79b8ff;
    font-weight: 800;
    text-decoration: none;
}

@keyframes login3130Float {
    from {
        transform: translate(0, 0) scale(1);
    }

    to {
        transform: translate(25px, 20px) scale(1.15);
    }
}

@keyframes login3130Button {
    from {
        background-position: 0% 50%;
    }

    to {
        background-position: 200% 50%;
    }
}`,
  },

  {
    id: 3131,
    name: "Fintech Secure Login",
    preview: (
      <div className="login-3131">
        <div className="login-3131-header">
          <div className="login-3131-logo">
            <i className="ri-bank-card-line"></i>
          </div>

          <div>
            <strong>Finora</strong>
            <span>Secure banking</span>
          </div>
        </div>

        <div className="login-3131-title">
          <h2>Welcome back</h2>
          <p>Sign in securely to continue to your account.</p>
        </div>

        <div className="login-3131-notice">
          <i className="ri-shield-check-line"></i>
          Protected by bank-level encryption
        </div>

        <div className="login-3131-form">
          <label>
            Email
            <div>
              <i className="ri-user-3-line"></i>
              <input type="email" placeholder="you@example.com" />
            </div>
          </label>

          <label>
            Password
            <div>
              <i className="ri-lock-line"></i>
              <input type="password" placeholder="Enter password" />
              <i className="ri-eye-line"></i>
            </div>
          </label>

          <button type="button">
            Secure login
            <i className="ri-lock-unlock-line"></i>
          </button>
        </div>

        <div className="login-3131-help">
          <a href="#" onClick={(event) => event.preventDefault()}>
            Forgot password?
          </a>

          <span>•</span>

          <a href="#" onClick={(event) => event.preventDefault()}>
            Need help?
          </a>
        </div>
      </div>
    ),
    html: `<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
    rel="stylesheet"
/>

<div class="login-3131">
    <div class="login-3131-header">
        <div class="login-3131-logo">
            <i class="ri-bank-card-line"></i>
        </div>

        <div>
            <strong>Finora</strong>
            <span>Secure banking</span>
        </div>
    </div>

    <div class="login-3131-title">
        <h2>Welcome back</h2>
        <p>Sign in securely to continue to your account.</p>
    </div>

    <div class="login-3131-notice">
        <i class="ri-shield-check-line"></i>
        Protected by bank-level encryption
    </div>

    <div class="login-3131-form">
        <label>
            Email

            <div>
                <i class="ri-user-3-line"></i>
                <input type="email" placeholder="you@example.com">
            </div>
        </label>

        <label>
            Password

            <div>
                <i class="ri-lock-line"></i>
                <input type="password" placeholder="Enter password">
                <i class="ri-eye-line"></i>
            </div>
        </label>

        <button type="button">
            Secure login
            <i class="ri-lock-unlock-line"></i>
        </button>
    </div>

    <div class="login-3131-help">
        <a href="#">Forgot password?</a>
        <span>•</span>
        <a href="#">Need help?</a>
    </div>
</div>`,
    css: `.login-3131 {
    width: 340px;
    padding: 27px;
    border: 1px solid #dce6e1;
    border-radius: 20px;
    color: #17211d;
    background: #ffffff;
    box-shadow: 0 18px 50px rgba(30, 54, 44, .1);
    font-family: Inter, Arial, sans-serif;
}

.login-3131 * {
    box-sizing: border-box;
}

.login-3131-header {
    display: flex;
    align-items: center;
    gap: 11px;
}

.login-3131-logo {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    color: #fff;
    background: #0f7a55;
    box-shadow: 0 7px 18px rgba(15, 122, 85, .24);
    animation: login3131Logo 4s ease-in-out infinite;
}

.login-3131-logo i {
    font-size: 19px;
}

.login-3131-header > div:last-child {
    display: flex;
    flex-direction: column;
}

.login-3131-header strong {
    font-size: 13px;
}

.login-3131-header span {
    margin-top: 2px;
    color: #839189;
    font-size: 8px;
}

.login-3131-title {
    margin-top: 27px;
}

.login-3131-title h2 {
    margin: 0;
    font-size: 25px;
    letter-spacing: -.035em;
}

.login-3131-title p {
    margin: 7px 0 0;
    color: #748079;
    font-size: 10px;
    line-height: 1.5;
}

.login-3131-notice {
    margin-top: 17px;
    padding: 10px 12px;
    display: flex;
    align-items: center;
    gap: 7px;
    border: 1px solid #d8eee5;
    border-radius: 10px;
    color: #39745e;
    background: #f2faf7;
    font-size: 8px;
    font-weight: 700;
}

.login-3131-notice i {
    color: #159063;
    font-size: 13px;
}

.login-3131-form {
    margin-top: 20px;
    display: grid;
    gap: 14px;
}

.login-3131-form label {
    color: #536159;
    font-size: 9px;
    font-weight: 700;
}

.login-3131-form label > div {
    height: 44px;
    margin-top: 6px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #d9e2dd;
    border-radius: 10px;
    background: #fbfcfc;
    transition: .2s ease;
}

.login-3131-form label > div:focus-within {
    border-color: #2e9c76;
    background: #fff;
    box-shadow: 0 0 0 3px rgba(46, 156, 118, .08);
}

.login-3131-form label i {
    color: #93a19a;
    font-size: 14px;
}

.login-3131-form input {
    width: 100%;
    outline: none;
    border: 0;
    color: #18211d;
    background: transparent;
    font-size: 10px;
}

.login-3131-form input::placeholder {
    color: #a8b1ac;
}

.login-3131-form button {
    height: 44px;
    margin-top: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    border: 0;
    border-radius: 10px;
    color: white;
    background: #0f7a55;
    font-size: 10px;
    font-weight: 800;
    box-shadow: 0 8px 20px rgba(15, 122, 85, .2);
    transition: .2s ease;
}

.login-3131-form button:hover {
    background: #0b6949;
    transform: translateY(-2px);
    box-shadow: 0 12px 25px rgba(15, 122, 85, .25);
}

.login-3131-help {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 8px;
    color: #a1aaa5;
    font-size: 8px;
}

.login-3131-help a {
    color: #47816b;
    font-weight: 700;
    text-decoration: none;
}

@keyframes login3131Logo {
    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-3px);
    }
}`,
  },

  {
    id: 3132,
    name: "Minimal SaaS Login",
    preview: (
      <div className="login-3132">
        <div className="login-3132-brand">
          <span>
            <i className="ri-shape-2-fill"></i>
          </span>
          <strong>Frame</strong>
        </div>

        <div className="login-3132-heading">
          <h2>Sign in</h2>
          <p>Enter your details to access your workspace.</p>
        </div>

        <div className="login-3132-form">
          <input type="email" placeholder="Email address" />

          <input type="password" placeholder="Password" />

          <div className="login-3132-row">
            <label>
              <input type="checkbox" defaultChecked />
              Remember me
            </label>

            <a href="#" onClick={(event) => event.preventDefault()}>
              Forgot password
            </a>
          </div>

          <button type="button">Continue</button>
        </div>

        <div className="login-3132-separator">
          <span></span>
          <p>OR</p>
          <span></span>
        </div>

        <button className="login-3132-google" type="button">
          <i className="ri-google-fill"></i>
          Continue with Google
        </button>

        <p className="login-3132-register">
          Don't have an account?
          <a href="#" onClick={(event) => event.preventDefault()}>
            Sign up
          </a>
        </p>
      </div>
    ),
    html: `<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
    rel="stylesheet"
/>

<div class="login-3132">
    <div class="login-3132-brand">
        <span>
            <i class="ri-shape-2-fill"></i>
        </span>
        <strong>Frame</strong>
    </div>

    <div class="login-3132-heading">
        <h2>Sign in</h2>
        <p>Enter your details to access your workspace.</p>
    </div>

    <div class="login-3132-form">
        <input type="email" placeholder="Email address">
        <input type="password" placeholder="Password">

        <div class="login-3132-row">
            <label>
                <input type="checkbox" checked>
                Remember me
            </label>

            <a href="#">Forgot password</a>
        </div>

        <button type="button">Continue</button>
    </div>

    <div class="login-3132-separator">
        <span></span>
        <p>OR</p>
        <span></span>
    </div>

    <button class="login-3132-google" type="button">
        <i class="ri-google-fill"></i>
        Continue with Google
    </button>

    <p class="login-3132-register">
        Don't have an account?
        <a href="#">Sign up</a>
    </p>
</div>`,
    css: `.login-3132 {
    width: 330px;
    padding: 30px;
    border: 1px solid #e7e7eb;
    border-radius: 18px;
    color: #18181b;
    background: #ffffff;
    box-shadow: 0 20px 60px rgba(24, 24, 27, .08);
    font-family: Inter, Arial, sans-serif;
}

.login-3132 * {
    box-sizing: border-box;
}

.login-3132-brand {
    display: flex;
    align-items: center;
    gap: 8px;
}

.login-3132-brand span {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    color: white;
    background: #18181b;
}

.login-3132-brand strong {
    font-size: 13px;
    letter-spacing: -.02em;
}

.login-3132-heading {
    margin-top: 31px;
}

.login-3132-heading h2 {
    margin: 0;
    font-size: 26px;
    letter-spacing: -.04em;
}

.login-3132-heading p {
    margin: 7px 0 0;
    color: #71717a;
    font-size: 10px;
}

.login-3132-form {
    margin-top: 23px;
    display: grid;
    gap: 11px;
}

.login-3132-form > input {
    height: 44px;
    padding: 0 13px;
    outline: none;
    border: 1px solid #e0e0e5;
    border-radius: 9px;
    color: #18181b;
    background: #fff;
    font-size: 10px;
    transition: .2s ease;
}

.login-3132-form > input:focus {
    border-color: #18181b;
    box-shadow: 0 0 0 3px rgba(24, 24, 27, .06);
}

.login-3132-form > input::placeholder {
    color: #a1a1aa;
}

.login-3132-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
}

.login-3132-row label {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #71717a;
    font-size: 8px;
}

.login-3132-row input {
    accent-color: #18181b;
}

.login-3132-row a {
    color: #18181b;
    font-size: 8px;
    font-weight: 700;
    text-decoration: none;
}

.login-3132-form > button {
    height: 43px;
    margin-top: 4px;
    cursor: pointer;
    border: 0;
    border-radius: 9px;
    color: white;
    background: #18181b;
    font-size: 10px;
    font-weight: 700;
    transition: .2s ease;
}

.login-3132-form > button:hover {
    background: #303036;
    transform: translateY(-1px);
}

.login-3132-separator {
    margin: 20px 0 15px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 9px;
}

.login-3132-separator span {
    height: 1px;
    background: #ececf0;
}

.login-3132-separator p {
    margin: 0;
    color: #a1a1aa;
    font-size: 7px;
}

.login-3132-google {
    width: 100%;
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    cursor: pointer;
    border: 1px solid #dedee3;
    border-radius: 9px;
    color: #3f3f46;
    background: white;
    font-size: 9px;
    font-weight: 700;
    transition: .2s ease;
}

.login-3132-google:hover {
    background: #fafafa;
    border-color: #cfcfd5;
    transform: translateY(-1px);
}

.login-3132-google i {
    font-size: 14px;
}

.login-3132-register {
    margin: 22px 0 0;
    color: #71717a;
    font-size: 9px;
    text-align: center;
}

.login-3132-register a {
    margin-left: 4px;
    color: #18181b;
    font-weight: 800;
    text-decoration: none;
}`,
  },

  {
    id: 3133,
    name: "Warm Studio Login",
    preview: (
      <div className="login-3133">
        <div className="login-3133-decoration login-3133-decoration-1"></div>
        <div className="login-3133-decoration login-3133-decoration-2"></div>

        <div className="login-3133-brand">
          <div>
            <i className="ri-palette-line"></i>
          </div>

          <span>Canvas Studio</span>
        </div>

        <div className="login-3133-heading">
          <h2>Hello again.</h2>
          <p>Sign in and continue creating something wonderful.</p>
        </div>

        <div className="login-3133-form">
          <label>
            Email
            <input type="email" placeholder="hello@studio.com" />
          </label>

          <label>
            Password
            <input type="password" placeholder="Your password" />
          </label>

          <div className="login-3133-options">
            <label>
              <input type="checkbox" defaultChecked />
              Remember
            </label>

            <a href="#" onClick={(event) => event.preventDefault()}>
              Reset password
            </a>
          </div>

          <button type="button">
            Sign in
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <p className="login-3133-footer">
          No account yet?
          <a href="#" onClick={(event) => event.preventDefault()}>
            Join the studio
          </a>
        </p>
      </div>
    ),
    html: `<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
    rel="stylesheet"
/>

<div class="login-3133">
    <div class="login-3133-decoration login-3133-decoration-1"></div>
    <div class="login-3133-decoration login-3133-decoration-2"></div>

    <div class="login-3133-brand">
        <div>
            <i class="ri-palette-line"></i>
        </div>

        <span>Canvas Studio</span>
    </div>

    <div class="login-3133-heading">
        <h2>Hello again.</h2>
        <p>Sign in and continue creating something wonderful.</p>
    </div>

    <div class="login-3133-form">
        <label>
            Email
            <input type="email" placeholder="hello@studio.com">
        </label>

        <label>
            Password
            <input type="password" placeholder="Your password">
        </label>

        <div class="login-3133-options">
            <label>
                <input type="checkbox" checked>
                Remember
            </label>

            <a href="#">Reset password</a>
        </div>

        <button type="button">
            Sign in
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>

    <p class="login-3133-footer">
        No account yet?
        <a href="#">Join the studio</a>
    </p>
</div>`,
    css: `.login-3133 {
    position: relative;
    width: 335px;
    padding: 29px;
    overflow: hidden;
    border: 1px solid #f0dfd4;
    border-radius: 24px;
    color: #38271f;
    background: #fffaf6;
    box-shadow: 0 24px 60px rgba(95, 58, 39, .12);
    font-family: Inter, Arial, sans-serif;
}

.login-3133 * {
    box-sizing: border-box;
}

.login-3133-decoration {
    position: absolute;
    border-radius: 999px;
    pointer-events: none;
    animation: login3133Float 8s ease-in-out infinite alternate;
}

.login-3133-decoration-1 {
    width: 130px;
    height: 130px;
    right: -55px;
    top: -50px;
    background: #ffd8c2;
}

.login-3133-decoration-2 {
    width: 90px;
    height: 90px;
    left: -45px;
    bottom: -34px;
    background: #f6c8b6;
    animation-delay: -3s;
}

.login-3133-brand {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 9px;
}

.login-3133-brand > div {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    color: white;
    background: #d76f49;
}

.login-3133-brand span {
    font-size: 11px;
    font-weight: 800;
}

.login-3133-heading {
    position: relative;
    z-index: 2;
    margin-top: 32px;
}

.login-3133-heading h2 {
    margin: 0;
    font-family: Georgia, serif;
    font-size: 31px;
    font-weight: 500;
    letter-spacing: -.035em;
}

.login-3133-heading p {
    max-width: 245px;
    margin: 8px 0 0;
    color: #8b7468;
    font-size: 10px;
    line-height: 1.5;
}

.login-3133-form {
    position: relative;
    z-index: 2;
    margin-top: 25px;
    display: grid;
    gap: 14px;
}

.login-3133-form > label {
    color: #6f574c;
    font-size: 9px;
    font-weight: 700;
}

.login-3133-form > label input {
    width: 100%;
    height: 44px;
    margin-top: 6px;
    padding: 0 13px;
    outline: none;
    border: 1px solid #ead7cd;
    border-radius: 11px;
    color: #38271f;
    background: rgba(255, 255, 255, .8);
    font-size: 10px;
    transition: .2s ease;
}

.login-3133-form > label input:focus {
    border-color: #d76f49;
    box-shadow: 0 0 0 3px rgba(215, 111, 73, .08);
}

.login-3133-options {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.login-3133-options label {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #8b7468;
    font-size: 8px;
}

.login-3133-options input {
    accent-color: #d76f49;
}

.login-3133-options a {
    color: #bd5b39;
    font-size: 8px;
    font-weight: 700;
    text-decoration: none;
}

.login-3133-form > button {
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    border: 0;
    border-radius: 12px;
    color: white;
    background: #d76f49;
    font-size: 10px;
    font-weight: 800;
    box-shadow: 0 10px 24px rgba(190, 89, 53, .2);
    transition: .2s ease;
}

.login-3133-form > button:hover {
    background: #c85f3b;
    transform: translateY(-2px);
}

.login-3133-form > button i {
    transition: transform .2s ease;
}

.login-3133-form > button:hover i {
    transform: translateX(4px);
}

.login-3133-footer {
    position: relative;
    z-index: 2;
    margin: 22px 0 0;
    color: #907b70;
    font-size: 9px;
    text-align: center;
}

.login-3133-footer a {
    margin-left: 4px;
    color: #bd5b39;
    font-weight: 800;
    text-decoration: none;
}

@keyframes login3133Float {
    from {
        transform: translate(0, 0) scale(1);
    }

    to {
        transform: translate(-16px, 18px) scale(1.1);
    }
}`,
  },

  {
    id: 3134,
    name: "Corporate Portal Login",
    preview: (
      <div className="login-3134">
        <div className="login-3134-header">
          <div className="login-3134-company">
            <span>
              <i className="ri-building-4-line"></i>
            </span>

            <div>
              <strong>Northstar</strong>
              <p>Enterprise Portal</p>
            </div>
          </div>

          <i className="ri-shield-check-fill login-3134-shield"></i>
        </div>

        <div className="login-3134-heading">
          <h2>Employee sign in</h2>
          <p>Use your company credentials to access the portal.</p>
        </div>

        <div className="login-3134-form">
          <label>
            Work email
            <div>
              <i className="ri-mail-line"></i>
              <input type="email" placeholder="name@northstar.com" />
            </div>
          </label>

          <label>
            Password
            <div>
              <i className="ri-key-2-line"></i>
              <input type="password" placeholder="Password" />
            </div>
          </label>

          <button type="button">
            Sign in to portal
          </button>
        </div>

        <div className="login-3134-sso">
          <span></span>

          <button type="button">
            <i className="ri-microsoft-fill"></i>
            Continue with Microsoft
          </button>
        </div>

        <p className="login-3134-help">
          Trouble signing in?
          <a href="#" onClick={(event) => event.preventDefault()}>
            Contact IT support
          </a>
        </p>
      </div>
    ),
    html: `<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
    rel="stylesheet"
/>

<div class="login-3134">
    <div class="login-3134-header">
        <div class="login-3134-company">
            <span>
                <i class="ri-building-4-line"></i>
            </span>

            <div>
                <strong>Northstar</strong>
                <p>Enterprise Portal</p>
            </div>
        </div>

        <i class="ri-shield-check-fill login-3134-shield"></i>
    </div>

    <div class="login-3134-heading">
        <h2>Employee sign in</h2>
        <p>Use your company credentials to access the portal.</p>
    </div>

    <div class="login-3134-form">
        <label>
            Work email

            <div>
                <i class="ri-mail-line"></i>
                <input type="email" placeholder="name@northstar.com">
            </div>
        </label>

        <label>
            Password

            <div>
                <i class="ri-key-2-line"></i>
                <input type="password" placeholder="Password">
            </div>
        </label>

        <button type="button">
            Sign in to portal
        </button>
    </div>

    <div class="login-3134-sso">
        <span></span>

        <button type="button">
            <i class="ri-microsoft-fill"></i>
            Continue with Microsoft
        </button>
    </div>

    <p class="login-3134-help">
        Trouble signing in?
        <a href="#">Contact IT support</a>
    </p>
</div>`,
    css: `.login-3134 {
    width: 345px;
    overflow: hidden;
    border: 1px solid #dce4ef;
    border-radius: 18px;
    color: #142033;
    background: white;
    box-shadow: 0 20px 60px rgba(34, 62, 101, .11);
    font-family: Inter, Arial, sans-serif;
}

.login-3134 * {
    box-sizing: border-box;
}

.login-3134-header {
    padding: 21px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e7edf4;
    background: #f8fafc;
}

.login-3134-company {
    display: flex;
    align-items: center;
    gap: 10px;
}

.login-3134-company > span {
    width: 37px;
    height: 37px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    color: white;
    background: #1d4ed8;
}

.login-3134-company > span i {
    font-size: 17px;
}

.login-3134-company div {
    display: flex;
    flex-direction: column;
}

.login-3134-company strong {
    font-size: 12px;
}

.login-3134-company p {
    margin: 2px 0 0;
    color: #8190a5;
    font-size: 7px;
}

.login-3134-shield {
    color: #1f9b68;
    font-size: 20px;
    animation: login3134Shield 3s ease-in-out infinite;
}

.login-3134-heading {
    padding: 27px 25px 0;
}

.login-3134-heading h2 {
    margin: 0;
    font-size: 24px;
    letter-spacing: -.03em;
}

.login-3134-heading p {
    margin: 7px 0 0;
    color: #77869b;
    font-size: 10px;
    line-height: 1.5;
}

.login-3134-form {
    padding: 23px 25px 0;
    display: grid;
    gap: 14px;
}

.login-3134-form label {
    color: #56657a;
    font-size: 9px;
    font-weight: 700;
}

.login-3134-form label > div {
    height: 43px;
    margin-top: 6px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #dce4ee;
    border-radius: 9px;
    background: #fff;
    transition: .2s ease;
}

.login-3134-form label > div:focus-within {
    border-color: #3978ef;
    box-shadow: 0 0 0 3px rgba(57, 120, 239, .08);
}

.login-3134-form i {
    color: #8393aa;
}

.login-3134-form input {
    width: 100%;
    outline: none;
    border: 0;
    color: #162235;
    background: transparent;
    font-size: 10px;
}

.login-3134-form input::placeholder {
    color: #a5b0c0;
}

.login-3134-form > button {
    height: 44px;
    cursor: pointer;
    border: 0;
    border-radius: 9px;
    color: white;
    background: #1d4ed8;
    font-size: 10px;
    font-weight: 800;
    box-shadow: 0 7px 17px rgba(29, 78, 216, .2);
    transition: .2s ease;
}

.login-3134-form > button:hover {
    background: #1b44bb;
    transform: translateY(-1px);
}

.login-3134-sso {
    margin: 21px 25px 0;
}

.login-3134-sso > span {
    display: block;
    height: 1px;
    margin-bottom: 17px;
    background: #e5eaf1;
}

.login-3134-sso button {
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    border: 1px solid #dbe3ed;
    border-radius: 9px;
    color: #42516a;
    background: white;
    font-size: 9px;
    font-weight: 700;
    transition: .2s ease;
}

.login-3134-sso button:hover {
    background: #f8fafc;
    border-color: #cbd6e3;
}

.login-3134-sso i {
    color: #2563eb;
    font-size: 14px;
}

.login-3134-help {
    margin: 22px 0 0;
    padding: 16px 25px;
    color: #8896a8;
    background: #f8fafc;
    font-size: 8px;
    text-align: center;
}

.login-3134-help a {
    margin-left: 3px;
    color: #2563eb;
    font-weight: 700;
    text-decoration: none;
}

@keyframes login3134Shield {
    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.08);
    }
}`,
  },

  {
    id: 3135,
    name: "Soft Gradient Login",
    preview: (
      <div className="login-3135">
        <div className="login-3135-blob login-3135-blob-a"></div>
        <div className="login-3135-blob login-3135-blob-b"></div>

        <div className="login-3135-card">
          <div className="login-3135-icon">
            <i className="ri-cloud-line"></i>
          </div>

          <h2>Welcome to Luma</h2>
          <p>Sign in to sync your work across every device.</p>

          <div className="login-3135-form">
            <div className="login-3135-input">
              <i className="ri-mail-line"></i>
              <input type="email" placeholder="Email" />
            </div>

            <div className="login-3135-input">
              <i className="ri-lock-line"></i>
              <input type="password" placeholder="Password" />
            </div>

            <button type="button">
              Continue
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>

          <div className="login-3135-socials">
            <button type="button">
              <i className="ri-google-fill"></i>
            </button>

            <button type="button">
              <i className="ri-apple-fill"></i>
            </button>

            <button type="button">
              <i className="ri-github-fill"></i>
            </button>
          </div>

          <p className="login-3135-footer">
            Don't have an account?
            <a href="#" onClick={(event) => event.preventDefault()}>
              Get started
            </a>
          </p>
        </div>
      </div>
    ),
    html: `<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
    rel="stylesheet"
/>

<div class="login-3135">
    <div class="login-3135-blob login-3135-blob-a"></div>
    <div class="login-3135-blob login-3135-blob-b"></div>

    <div class="login-3135-card">
        <div class="login-3135-icon">
            <i class="ri-cloud-line"></i>
        </div>

        <h2>Welcome to Luma</h2>
        <p>Sign in to sync your work across every device.</p>

        <div class="login-3135-form">
            <div class="login-3135-input">
                <i class="ri-mail-line"></i>
                <input type="email" placeholder="Email">
            </div>

            <div class="login-3135-input">
                <i class="ri-lock-line"></i>
                <input type="password" placeholder="Password">
            </div>

            <button type="button">
                Continue
                <i class="ri-arrow-right-line"></i>
            </button>
        </div>

        <div class="login-3135-socials">
            <button type="button">
                <i class="ri-google-fill"></i>
            </button>

            <button type="button">
                <i class="ri-apple-fill"></i>
            </button>

            <button type="button">
                <i class="ri-github-fill"></i>
            </button>
        </div>

        <p class="login-3135-footer">
            Don't have an account?
            <a href="#">Get started</a>
        </p>
    </div>
</div>`,
    css: `.login-3135 {
    position: relative;
    width: 335px;
    padding: 10px;
    overflow: hidden;
    border-radius: 27px;
    background: linear-gradient(145deg, #eff6ff, #f5f3ff, #fff1f8);
    font-family: Inter, Arial, sans-serif;
}

.login-3135 * {
    box-sizing: border-box;
}

.login-3135-blob {
    position: absolute;
    border-radius: 999px;
    filter: blur(30px);
    animation: login3135Blob 7s ease-in-out infinite alternate;
}

.login-3135-blob-a {
    width: 120px;
    height: 120px;
    right: -30px;
    top: -30px;
    background: rgba(167, 139, 250, .35);
}

.login-3135-blob-b {
    width: 130px;
    height: 130px;
    left: -50px;
    bottom: -50px;
    background: rgba(96, 165, 250, .3);
    animation-delay: -3s;
}

.login-3135-card {
    position: relative;
    z-index: 2;
    padding: 27px;
    border: 1px solid rgba(255, 255, 255, .8);
    border-radius: 21px;
    color: #26243b;
    background: rgba(255, 255, 255, .72);
    backdrop-filter: blur(20px);
    box-shadow: 0 20px 45px rgba(85, 79, 135, .1);
}

.login-3135-icon {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    margin: 0 auto;
    border-radius: 13px;
    color: white;
    background: linear-gradient(135deg, #60a5fa, #8b5cf6);
    box-shadow: 0 8px 22px rgba(100, 100, 230, .22);
    animation: login3135Icon 4s ease-in-out infinite;
}

.login-3135-icon i {
    font-size: 19px;
}

.login-3135-card h2 {
    margin: 19px 0 0;
    font-size: 25px;
    text-align: center;
    letter-spacing: -.035em;
}

.login-3135-card > p {
    margin: 8px auto 0;
    max-width: 230px;
    color: #7b7893;
    font-size: 10px;
    line-height: 1.5;
    text-align: center;
}

.login-3135-form {
    margin-top: 22px;
    display: grid;
    gap: 10px;
}

.login-3135-input {
    height: 43px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid rgba(129, 127, 171, .15);
    border-radius: 11px;
    background: rgba(255, 255, 255, .7);
    transition: .2s ease;
}

.login-3135-input:focus-within {
    border-color: #9183f5;
    background: white;
    box-shadow: 0 0 0 3px rgba(145, 131, 245, .08);
}

.login-3135-input i {
    color: #918ca7;
}

.login-3135-input input {
    width: 100%;
    outline: none;
    border: 0;
    color: #312e4e;
    background: transparent;
    font-size: 10px;
}

.login-3135-input input::placeholder {
    color: #aaa6bb;
}

.login-3135-form > button {
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    border: 0;
    border-radius: 11px;
    color: white;
    background: linear-gradient(100deg, #60a5fa, #8b5cf6, #ec4899);
    background-size: 200% 100%;
    font-size: 10px;
    font-weight: 800;
    box-shadow: 0 9px 22px rgba(113, 92, 230, .2);
    animation: login3135Gradient 6s linear infinite;
    transition: .2s ease;
}

.login-3135-form > button:hover {
    transform: translateY(-2px);
}

.login-3135-socials {
    margin-top: 17px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
}

.login-3135-socials button {
    height: 38px;
    display: grid;
    place-items: center;
    cursor: pointer;
    border: 1px solid rgba(126, 123, 163, .15);
    border-radius: 10px;
    color: #6d6887;
    background: rgba(255, 255, 255, .6);
    transition: .2s ease;
}

.login-3135-socials button:hover {
    color: #5f55bb;
    background: white;
    transform: translateY(-2px);
}

.login-3135-footer {
    margin-top: 18px !important;
    color: #89849c !important;
    font-size: 8px !important;
}

.login-3135-footer a {
    margin-left: 3px;
    color: #7564dc;
    font-weight: 800;
    text-decoration: none;
}

@keyframes login3135Blob {
    from {
        transform: translate(0, 0) scale(1);
    }

    to {
        transform: translate(20px, 18px) scale(1.15);
    }
}

@keyframes login3135Icon {
    0%,
    100% {
        transform: translateY(0) rotate(0);
    }

    50% {
        transform: translateY(-4px) rotate(3deg);
    }
}

@keyframes login3135Gradient {
    from {
        background-position: 0% 50%;
    }

    to {
        background-position: 200% 50%;
    }
}`,
  },

  {
    id: 3136,
    name: "Developer Portal Login",
    preview: (
      <div className="login-3136">
        <div className="login-3136-grid"></div>

        <div className="login-3136-header">
          <div className="login-3136-terminal">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="login-3136-status">
            <span></span>
            API ONLINE
          </div>
        </div>

        <div className="login-3136-brand">
          <i className="ri-code-s-slash-line"></i>
          <span>DEVSTACK</span>
        </div>

        <div className="login-3136-heading">
          <span>// authentication</span>
          <h2>Developer login</h2>
          <p>Authenticate to continue to your development environment.</p>
        </div>

        <div className="login-3136-form">
          <label>
            <span>EMAIL</span>
            <div>
              <i className="ri-at-line"></i>
              <input type="email" placeholder="dev@example.com" />
            </div>
          </label>

          <label>
            <span>PASSWORD</span>
            <div>
              <i className="ri-key-2-line"></i>
              <input type="password" placeholder="••••••••" />
            </div>
          </label>

          <button type="button">
            <i className="ri-terminal-box-line"></i>
            Authenticate
          </button>
        </div>

        <div className="login-3136-footer">
          <span>v2.8.4</span>

          <a href="#" onClick={(event) => event.preventDefault()}>
            Use SSH key
          </a>
        </div>
      </div>
    ),
    html: `<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
    rel="stylesheet"
/>

<div class="login-3136">
    <div class="login-3136-grid"></div>

    <div class="login-3136-header">
        <div class="login-3136-terminal">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div class="login-3136-status">
            <span></span>
            API ONLINE
        </div>
    </div>

    <div class="login-3136-brand">
        <i class="ri-code-s-slash-line"></i>
        <span>DEVSTACK</span>
    </div>

    <div class="login-3136-heading">
        <span>// authentication</span>
        <h2>Developer login</h2>
        <p>Authenticate to continue to your development environment.</p>
    </div>

    <div class="login-3136-form">
        <label>
            <span>EMAIL</span>

            <div>
                <i class="ri-at-line"></i>
                <input type="email" placeholder="dev@example.com">
            </div>
        </label>

        <label>
            <span>PASSWORD</span>

            <div>
                <i class="ri-key-2-line"></i>
                <input type="password" placeholder="••••••••">
            </div>
        </label>

        <button type="button">
            <i class="ri-terminal-box-line"></i>
            Authenticate
        </button>
    </div>

    <div class="login-3136-footer">
        <span>v2.8.4</span>
        <a href="#">Use SSH key</a>
    </div>
</div>`,
    css: `.login-3136 {
    position: relative;
    width: 345px;
    padding: 23px;
    overflow: hidden;
    border: 1px solid #1e3a32;
    border-radius: 16px;
    color: #d7ffe9;
    background: #07100d;
    box-shadow:
        0 25px 65px rgba(0, 0, 0, .55),
        0 0 35px rgba(16, 185, 129, .05);
    font-family: "Courier New", monospace;
}

.login-3136 * {
    box-sizing: border-box;
}

.login-3136-grid {
    position: absolute;
    inset: 0;
    opacity: .11;
    background-image:
        linear-gradient(rgba(34, 197, 94, .18) 1px, transparent 1px),
        linear-gradient(90deg, rgba(34, 197, 94, .18) 1px, transparent 1px);
    background-size: 18px 18px;
    animation: login3136Grid 10s linear infinite;
}

.login-3136-header {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.login-3136-terminal {
    display: flex;
    gap: 5px;
}

.login-3136-terminal span {
    width: 7px;
    height: 7px;
    border-radius: 999px;
}

.login-3136-terminal span:nth-child(1) {
    background: #ef4444;
}

.login-3136-terminal span:nth-child(2) {
    background: #f59e0b;
}

.login-3136-terminal span:nth-child(3) {
    background: #22c55e;
}

.login-3136-status {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #55dc99;
    font-size: 6px;
    font-weight: 800;
    letter-spacing: .12em;
}

.login-3136-status span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #34d399;
    box-shadow: 0 0 8px #34d399;
    animation: login3136Pulse 2s ease-in-out infinite;
}

.login-3136-brand {
    position: relative;
    z-index: 2;
    margin-top: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #57e6a2;
}

.login-3136-brand i {
    font-size: 18px;
}

.login-3136-brand span {
    font-size: 10px;
    font-weight: 900;
    letter-spacing: .15em;
}

.login-3136-heading {
    position: relative;
    z-index: 2;
    margin-top: 23px;
}

.login-3136-heading > span {
    color: #3b9e71;
    font-size: 8px;
}

.login-3136-heading h2 {
    margin: 7px 0 7px;
    color: #ecfff5;
    font-family: Inter, Arial, sans-serif;
    font-size: 25px;
    letter-spacing: -.04em;
}

.login-3136-heading p {
    margin: 0;
    color: #719085;
    font-family: Inter, Arial, sans-serif;
    font-size: 9px;
    line-height: 1.55;
}

.login-3136-form {
    position: relative;
    z-index: 2;
    margin-top: 23px;
    display: grid;
    gap: 14px;
}

.login-3136-form label > span {
    color: #4f8b72;
    font-size: 7px;
    font-weight: 900;
    letter-spacing: .12em;
}

.login-3136-form label > div {
    height: 42px;
    margin-top: 6px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #17372c;
    border-radius: 8px;
    background: rgba(4, 14, 10, .85);
    transition: .2s ease;
}

.login-3136-form label > div:focus-within {
    border-color: #248b61;
    box-shadow: 0 0 0 3px rgba(36, 139, 97, .08);
}

.login-3136-form label i {
    color: #367859;
}

.login-3136-form input {
    width: 100%;
    outline: none;
    border: 0;
    color: #d8ffeb;
    background: transparent;
    font-family: inherit;
    font-size: 9px;
}

.login-3136-form input::placeholder {
    color: #365b4c;
}

.login-3136-form button {
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    border: 1px solid #20a36e;
    border-radius: 8px;
    color: #baffdc;
    background: rgba(21, 128, 86, .14);
    font-family: inherit;
    font-size: 9px;
    font-weight: 900;
    transition: .2s ease;
}

.login-3136-form button:hover {
    color: #06110c;
    background: #4be0a1;
    box-shadow: 0 0 24px rgba(75, 224, 161, .18);
    transform: translateY(-1px);
}

.login-3136-footer {
    position: relative;
    z-index: 2;
    margin-top: 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #38604e;
    font-size: 7px;
}

.login-3136-footer a {
    color: #4aaa7d;
    font-weight: 800;
    text-decoration: none;
}

@keyframes login3136Grid {
    from {
        background-position: 0 0, 0 0;
    }

    to {
        background-position: 18px 18px, 18px 18px;
    }
}

@keyframes login3136Pulse {
    0%,
    100% {
        opacity: .4;
        transform: scale(.8);
    }

    50% {
        opacity: 1;
        transform: scale(1.2);
    }
}`,
  },

  {
    id: 3137,
    name: "Calm Care Login",
    preview: (
      <div className="login-3137">
        <div className="login-3137-header">
          <div className="login-3137-logo">
            <i className="ri-heart-pulse-line"></i>
          </div>

          <div>
            <strong>WellCare</strong>
            <span>Your health portal</span>
          </div>
        </div>

        <div className="login-3137-heading">
          <h2>Welcome back</h2>
          <p>Sign in to securely view your appointments and health information.</p>
        </div>

        <div className="login-3137-form">
          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>

          <label>
            Password
            <input type="password" placeholder="Password" />
          </label>

          <button type="button">
            Sign in securely
          </button>
        </div>

        <div className="login-3137-security">
          <i className="ri-lock-2-line"></i>
          Your personal information is protected.
        </div>

        <p className="login-3137-footer">
          Need an account?
          <a href="#" onClick={(event) => event.preventDefault()}>
            Register here
          </a>
        </p>
      </div>
    ),
    html: `<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
    rel="stylesheet"
/>

<div class="login-3137">
    <div class="login-3137-header">
        <div class="login-3137-logo">
            <i class="ri-heart-pulse-line"></i>
        </div>

        <div>
            <strong>WellCare</strong>
            <span>Your health portal</span>
        </div>
    </div>

    <div class="login-3137-heading">
        <h2>Welcome back</h2>
        <p>Sign in to securely view your appointments and health information.</p>
    </div>

    <div class="login-3137-form">
        <label>
            Email address
            <input type="email" placeholder="you@example.com">
        </label>

        <label>
            Password
            <input type="password" placeholder="Password">
        </label>

        <button type="button">
            Sign in securely
        </button>
    </div>

    <div class="login-3137-security">
        <i class="ri-lock-2-line"></i>
        Your personal information is protected.
    </div>

    <p class="login-3137-footer">
        Need an account?
        <a href="#">Register here</a>
    </p>
</div>`,
    css: `.login-3137 {
    width: 340px;
    padding: 29px;
    border: 1px solid #dcece8;
    border-radius: 22px;
    color: #20342f;
    background: linear-gradient(145deg, #ffffff, #f7fcfa);
    box-shadow: 0 20px 55px rgba(50, 94, 82, .1);
    font-family: Inter, Arial, sans-serif;
}

.login-3137 * {
    box-sizing: border-box;
}

.login-3137-header {
    display: flex;
    align-items: center;
    gap: 11px;
}

.login-3137-logo {
    width: 41px;
    height: 41px;
    display: grid;
    place-items: center;
    border-radius: 13px;
    color: #ffffff;
    background: #3aa786;
    box-shadow: 0 8px 20px rgba(58, 167, 134, .2);
    animation: login3137Heart 3s ease-in-out infinite;
}

.login-3137-logo i {
    font-size: 19px;
}

.login-3137-header > div:last-child {
    display: flex;
    flex-direction: column;
}

.login-3137-header strong {
    font-size: 13px;
}

.login-3137-header span {
    margin-top: 2px;
    color: #839b94;
    font-size: 8px;
}

.login-3137-heading {
    margin-top: 29px;
}

.login-3137-heading h2 {
    margin: 0;
    font-size: 26px;
    letter-spacing: -.035em;
}

.login-3137-heading p {
    margin: 8px 0 0;
    color: #728983;
    font-size: 10px;
    line-height: 1.55;
}

.login-3137-form {
    margin-top: 23px;
    display: grid;
    gap: 14px;
}

.login-3137-form label {
    color: #5d726c;
    font-size: 9px;
    font-weight: 700;
}

.login-3137-form input {
    width: 100%;
    height: 43px;
    margin-top: 6px;
    padding: 0 13px;
    outline: none;
    border: 1px solid #d9e7e3;
    border-radius: 10px;
    color: #20342f;
    background: white;
    font-size: 10px;
    transition: .2s ease;
}

.login-3137-form input:focus {
    border-color: #50ad91;
    box-shadow: 0 0 0 3px rgba(80, 173, 145, .08);
}

.login-3137-form input::placeholder {
    color: #9eafaa;
}

.login-3137-form button {
    height: 44px;
    cursor: pointer;
    border: 0;
    border-radius: 10px;
    color: white;
    background: #3aa786;
    font-size: 10px;
    font-weight: 800;
    box-shadow: 0 8px 20px rgba(58, 167, 134, .18);
    transition: .2s ease;
}

.login-3137-form button:hover {
    background: #329576;
    transform: translateY(-1px);
}

.login-3137-security {
    margin-top: 18px;
    padding: 10px 11px;
    display: flex;
    align-items: center;
    gap: 7px;
    border-radius: 9px;
    color: #64827a;
    background: #eff8f5;
    font-size: 8px;
}

.login-3137-security i {
    color: #3aa786;
    font-size: 12px;
}

.login-3137-footer {
    margin: 20px 0 0;
    color: #82958f;
    font-size: 9px;
    text-align: center;
}

.login-3137-footer a {
    margin-left: 3px;
    color: #31876d;
    font-weight: 800;
    text-decoration: none;
}

@keyframes login3137Heart {
    0%,
    100% {
        transform: scale(1);
    }

    45% {
        transform: scale(1.06);
    }

    55% {
        transform: scale(.98);
    }
}`,
  },

  {
    id: 3138,
    name: "Monochrome Luxury Login",
    preview: (
      <div className="login-3138">
        <div className="login-3138-line"></div>

        <div className="login-3138-brand">
          <span>M</span>
          <p>MONARCH</p>
        </div>

        <div className="login-3138-heading">
          <span>MEMBER ACCESS</span>
          <h2>Welcome back.</h2>
          <p>Enter your credentials to access your private account.</p>
        </div>

        <div className="login-3138-form">
          <label>
            EMAIL
            <input type="email" placeholder="your@email.com" />
          </label>

          <label>
            PASSWORD
            <input type="password" placeholder="••••••••" />
          </label>

          <div className="login-3138-row">
            <label>
              <input type="checkbox" defaultChecked />
              Stay signed in
            </label>

            <a href="#" onClick={(event) => event.preventDefault()}>
              Recover
            </a>
          </div>

          <button type="button">
            ENTER
          </button>
        </div>

        <div className="login-3138-footer">
          <span>PRIVATE ACCESS</span>
          <i className="ri-lock-2-line"></i>
        </div>
      </div>
    ),
    html: `<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
    rel="stylesheet"
/>

<div class="login-3138">
    <div class="login-3138-line"></div>

    <div class="login-3138-brand">
        <span>M</span>
        <p>MONARCH</p>
    </div>

    <div class="login-3138-heading">
        <span>MEMBER ACCESS</span>
        <h2>Welcome back.</h2>
        <p>Enter your credentials to access your private account.</p>
    </div>

    <div class="login-3138-form">
        <label>
            EMAIL
            <input type="email" placeholder="your@email.com">
        </label>

        <label>
            PASSWORD
            <input type="password" placeholder="••••••••">
        </label>

        <div class="login-3138-row">
            <label>
                <input type="checkbox" checked>
                Stay signed in
            </label>

            <a href="#">Recover</a>
        </div>

        <button type="button">
            ENTER
        </button>
    </div>

    <div class="login-3138-footer">
        <span>PRIVATE ACCESS</span>
        <i class="ri-lock-2-line"></i>
    </div>
</div>`,
    css: `.login-3138 {
    position: relative;
    width: 335px;
    padding: 31px;
    overflow: hidden;
    border: 1px solid #2a2a2a;
    border-radius: 4px;
    color: #f5f5f5;
    background: #0b0b0b;
    box-shadow: 0 26px 70px rgba(0, 0, 0, .55);
    font-family: Arial, sans-serif;
}

.login-3138 * {
    box-sizing: border-box;
}

.login-3138-line {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #e5e5e5, transparent);
    animation: login3138Line 5s ease-in-out infinite;
}

.login-3138-brand {
    display: flex;
    align-items: center;
    gap: 10px;
}

.login-3138-brand span {
    width: 35px;
    height: 35px;
    display: grid;
    place-items: center;
    border: 1px solid #bdbdbd;
    font-family: Georgia, serif;
    font-size: 17px;
}

.login-3138-brand p {
    margin: 0;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: .32em;
}

.login-3138-heading {
    margin-top: 36px;
}

.login-3138-heading > span {
    color: #777;
    font-size: 7px;
    font-weight: 700;
    letter-spacing: .24em;
}

.login-3138-heading h2 {
    margin: 8px 0 8px;
    font-family: Georgia, serif;
    font-size: 30px;
    font-weight: 400;
    letter-spacing: -.025em;
}

.login-3138-heading p {
    margin: 0;
    color: #7d7d7d;
    font-size: 9px;
    line-height: 1.55;
}

.login-3138-form {
    margin-top: 27px;
    display: grid;
    gap: 17px;
}

.login-3138-form > label {
    color: #777;
    font-size: 7px;
    font-weight: 700;
    letter-spacing: .16em;
}

.login-3138-form > label input {
    width: 100%;
    height: 41px;
    margin-top: 7px;
    padding: 0;
    outline: none;
    border: 0;
    border-bottom: 1px solid #343434;
    color: #eee;
    background: transparent;
    font-size: 10px;
    transition: border-color .2s ease;
}

.login-3138-form > label input:focus {
    border-bottom-color: #bfbfbf;
}

.login-3138-form > label input::placeholder {
    color: #4d4d4d;
}

.login-3138-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.login-3138-row label {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #777;
    font-size: 8px;
}

.login-3138-row input {
    accent-color: #d4d4d4;
}

.login-3138-row a {
    color: #aaa;
    font-size: 8px;
    text-decoration: none;
}

.login-3138-form > button {
    height: 44px;
    cursor: pointer;
    border: 1px solid #d4d4d4;
    border-radius: 0;
    color: #0b0b0b;
    background: #e7e7e7;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .25em;
    transition: .25s ease;
}

.login-3138-form > button:hover {
    color: #fff;
    background: transparent;
    transform: translateY(-2px);
}

.login-3138-footer {
    margin-top: 28px;
    padding-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #1f1f1f;
    color: #525252;
}

.login-3138-footer span {
    font-size: 6px;
    letter-spacing: .18em;
}

.login-3138-footer i {
    font-size: 11px;
}

@keyframes login3138Line {
    0%,
    100% {
        opacity: .25;
        transform: scaleX(.4);
    }

    50% {
        opacity: 1;
        transform: scaleX(1);
    }
}`,
  },

  {
    id: 3139,
    name: "Friendly Workspace Login",
    preview: (
      <div className="login-3139">
        <div className="login-3139-illustration">
          <div className="login-3139-face">
            <span></span>
            <span></span>
            <div></div>
          </div>

          <div className="login-3139-spark login-3139-spark-1">
            <i className="ri-star-fill"></i>
          </div>

          <div className="login-3139-spark login-3139-spark-2">
            <i className="ri-sparkling-fill"></i>
          </div>
        </div>

        <div className="login-3139-heading">
          <span>HEY THERE 👋</span>
          <h2>Welcome back!</h2>
          <p>Your workspace missed you. Sign in to continue.</p>
        </div>

        <div className="login-3139-form">
          <div className="login-3139-input">
            <i className="ri-mail-line"></i>
            <input type="email" placeholder="Email address" />
          </div>

          <div className="login-3139-input">
            <i className="ri-lock-line"></i>
            <input type="password" placeholder="Password" />
          </div>

          <div className="login-3139-options">
            <label>
              <input type="checkbox" defaultChecked />
              Remember me
            </label>

            <a href="#" onClick={(event) => event.preventDefault()}>
              Forgot?
            </a>
          </div>

          <button type="button">
            Let's go
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <p className="login-3139-footer">
          First time here?
          <a href="#" onClick={(event) => event.preventDefault()}>
            Create an account
          </a>
        </p>
      </div>
    ),
    html: `<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
    rel="stylesheet"
/>

<div class="login-3139">
    <div class="login-3139-illustration">
        <div class="login-3139-face">
            <span></span>
            <span></span>
            <div></div>
        </div>

        <div class="login-3139-spark login-3139-spark-1">
            <i class="ri-star-fill"></i>
        </div>

        <div class="login-3139-spark login-3139-spark-2">
            <i class="ri-sparkling-fill"></i>
        </div>
    </div>

    <div class="login-3139-heading">
        <span>HEY THERE 👋</span>
        <h2>Welcome back!</h2>
        <p>Your workspace missed you. Sign in to continue.</p>
    </div>

    <div class="login-3139-form">
        <div class="login-3139-input">
            <i class="ri-mail-line"></i>
            <input type="email" placeholder="Email address">
        </div>

        <div class="login-3139-input">
            <i class="ri-lock-line"></i>
            <input type="password" placeholder="Password">
        </div>

        <div class="login-3139-options">
            <label>
                <input type="checkbox" checked>
                Remember me
            </label>

            <a href="#">Forgot?</a>
        </div>

        <button type="button">
            Let's go
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>

    <p class="login-3139-footer">
        First time here?
        <a href="#">Create an account</a>
    </p>
</div>`,
    css: `.login-3139 {
    position: relative;
    width: 335px;
    padding: 27px;
    overflow: hidden;
    border: 1px solid #e7e5f5;
    border-radius: 25px;
    color: #332f47;
    background: #fcfbff;
    box-shadow: 0 22px 55px rgba(69, 58, 117, .1);
    font-family: Inter, Arial, sans-serif;
}

.login-3139 * {
    box-sizing: border-box;
}

.login-3139-illustration {
    position: relative;
    width: 82px;
    height: 63px;
    margin: 0 auto;
}

.login-3139-face {
    position: absolute;
    left: 14px;
    top: 3px;
    width: 54px;
    height: 54px;
    border-radius: 18px;
    background: linear-gradient(145deg, #8b5cf6, #6366f1);
    box-shadow: 0 10px 24px rgba(99, 102, 241, .22);
    animation: login3139Face 4s ease-in-out infinite;
}

.login-3139-face > span {
    position: absolute;
    top: 19px;
    width: 5px;
    height: 7px;
    border-radius: 999px;
    background: white;
}

.login-3139-face > span:nth-child(1) {
    left: 15px;
}

.login-3139-face > span:nth-child(2) {
    right: 15px;
}

.login-3139-face > div {
    position: absolute;
    left: 50%;
    bottom: 12px;
    width: 18px;
    height: 8px;
    transform: translateX(-50%);
    border-bottom: 2px solid white;
    border-radius: 0 0 999px 999px;
}

.login-3139-spark {
    position: absolute;
    color: #f59e0b;
    animation: login3139Spark 2.5s ease-in-out infinite;
}

.login-3139-spark-1 {
    left: 0;
    top: 12px;
    font-size: 12px;
}

.login-3139-spark-2 {
    right: 0;
    top: 28px;
    color: #ec4899;
    font-size: 13px;
    animation-delay: -1s;
}

.login-3139-heading {
    text-align: center;
}

.login-3139-heading > span {
    color: #8b5cf6;
    font-size: 7px;
    font-weight: 900;
    letter-spacing: .14em;
}

.login-3139-heading h2 {
    margin: 6px 0 6px;
    font-size: 27px;
    letter-spacing: -.04em;
}

.login-3139-heading p {
    margin: 0 auto;
    max-width: 240px;
    color: #858098;
    font-size: 10px;
    line-height: 1.5;
}

.login-3139-form {
    margin-top: 22px;
    display: grid;
    gap: 10px;
}

.login-3139-input {
    height: 43px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #e5e2ef;
    border-radius: 11px;
    background: white;
    transition: .2s ease;
}

.login-3139-input:focus-within {
    border-color: #9983ec;
    box-shadow: 0 0 0 3px rgba(153, 131, 236, .08);
}

.login-3139-input i {
    color: #9a94ab;
    font-size: 14px;
}

.login-3139-input input {
    width: 100%;
    outline: none;
    border: 0;
    color: #3c3751;
    background: transparent;
    font-size: 10px;
}

.login-3139-input input::placeholder {
    color: #aaa6b8;
}

.login-3139-options {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.login-3139-options label {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #827d91;
    font-size: 8px;
}

.login-3139-options input {
    accent-color: #7c64db;
}

.login-3139-options a {
    color: #7c64db;
    font-size: 8px;
    font-weight: 700;
    text-decoration: none;
}

.login-3139-form > button {
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    cursor: pointer;
    border: 0;
    border-radius: 12px;
    color: white;
    background: linear-gradient(100deg, #8b5cf6, #6366f1);
    font-size: 10px;
    font-weight: 800;
    box-shadow: 0 9px 22px rgba(99, 102, 241, .2);
    transition: .2s ease;
}

.login-3139-form > button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(99, 102, 241, .27);
}

.login-3139-form > button i {
    transition: transform .2s ease;
}

.login-3139-form > button:hover i {
    transform: translateX(4px);
}

.login-3139-footer {
    margin: 20px 0 0;
    color: #8b8699;
    font-size: 9px;
    text-align: center;
}

.login-3139-footer a {
    margin-left: 4px;
    color: #765ed3;
    font-weight: 800;
    text-decoration: none;
}

@keyframes login3139Face {
    0%,
    100% {
        transform: translateY(0) rotate(0);
    }

    50% {
        transform: translateY(-4px) rotate(2deg);
    }
}

@keyframes login3139Spark {
    0%,
    100% {
        opacity: .4;
        transform: scale(.8) rotate(0);
    }

    50% {
        opacity: 1;
        transform: scale(1.2) rotate(15deg);
    }
}`,
  },

];
