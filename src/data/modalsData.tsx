import "../pages/All.css";

export const modals = [
  {
    id: 1376,
    name: "Confirmation Modal",
    preview: (
      <div className="modal-1376">
        <div className="modal-1376__overlay"></div>
        <div className="modal-1376__card">
          <div className="modal-1376__icon">
            <i className="fa-solid fa-triangle-exclamation"></i>
          </div>
          <h3>Delete project?</h3>
          <p>
            This action cannot be undone. All project data will be permanently
            removed.
          </p>
          <div className="modal-1376__actions">
            <button className="modal-1376__cancel">Cancel</button>
            <button className="modal-1376__delete">Delete project</button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Modal">
    <div class="Modal-overlay"></div>
    <div class="Modal-card">
        <div class="Modal-icon">
            <i class="fa-solid fa-triangle-exclamation"></i>
        </div>
        <h3>Delete project?</h3>
        <p>This action cannot be undone. All project data will be permanently removed.</p>
        <div class="Modal-actions">
            <button class="Modal-cancel">Cancel</button>
            <button class="Modal-delete">Delete project</button>
        </div>
    </div>
</div>`,
    css: `.Modal {
    position: relative;
    width: 340px;
    min-height: 230px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 18px;
    background: #18181b;
}
.Modal-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,.2);
}
.Modal-card {
    position: relative;
    z-index: 2;
    width: 270px;
    padding: 22px;
    border: 1px solid #27272a;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 25px 60px rgba(0,0,0,.3);
}
.Modal-icon {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    margin-bottom: 14px;
    border-radius: 11px;
    background: #fef2f2;
    color: #dc2626;
}
.Modal-card h3 {
    margin: 0 0 7px;
    color: #18181b;
    font-size: 17px;
}
.Modal-card p {
    margin: 0;
    color: #71717a;
    font-size: 10px;
    line-height: 1.5;
}
.Modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
}
.Modal-actions button {
    height: 36px;
    padding: 0 12px;
    border-radius: 8px;
    font-size: 9px;
    font-weight: 600;
    cursor: pointer;
}
.Modal-cancel {
    border: 1px solid #d4d4d8;
    background: #ffffff;
    color: #52525b;
}
.Modal-delete {
    border: none;
    background: #dc2626;
    color: #ffffff;
}`,
  },
  {
    id: 1377,
    name: "Glass Login Modal",
    preview: (
      <div className="modal-1377">
        <div className="modal-1377__window">
          <button className="modal-1377__close">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="modal-1377__logo">
            <i className="fa-solid fa-sparkles"></i>
          </div>
          <h3>Welcome back</h3>
          <p>Sign in to continue to your workspace.</p>
          <button className="modal-1377__provider">
            <i className="fa-brands fa-google"></i>
            Continue with Google
          </button>
          <div className="modal-1377__divider">
            <span>or</span>
          </div>
          <input type="email" placeholder="Email address" />
          <button className="modal-1377__submit">Continue</button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
    <div class="Modal-window">
        <button class="Modal-close">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="Modal-logo">
            <i class="fa-solid fa-sparkles"></i>
        </div>
        <h3>Welcome back</h3>
        <p>Sign in to continue to your workspace.</p>
        <button class="Modal-provider">
            <i class="fa-brands fa-google"></i>
            Continue with Google
        </button>
        <div class="Modal-divider">
            <span>or</span>
        </div>
        <input type="email" placeholder="Email address">
        <button class="Modal-submit">Continue</button>
    </div>
</div>`,
    css: `.Modal {
    position: relative;
    width: 340px;
    min-height: 330px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
    background: radial-gradient(circle at top,#312e81,#09090b 65%);
}
.Modal-window {
    position: relative;
    width: 250px;
    padding: 22px;
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 18px;
    background: rgba(255,255,255,.08);
    backdrop-filter: blur(18px);
    color: #ffffff;
}
.Modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 28px;
    height: 28px;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 8px;
    background: rgba(255,255,255,.05);
    color: #a1a1aa;
}
.Modal-logo {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    margin-bottom: 14px;
    border-radius: 12px;
    background: linear-gradient(135deg,#6366f1,#ec4899);
}
.Modal-window h3 {
    margin: 0 0 6px;
    font-size: 20px;
}
.Modal-window p {
    margin: 0 0 18px;
    color: #a1a1aa;
    font-size: 10px;
    line-height: 1.5;
}
.Modal-provider,
.Modal-submit {
    width: 100%;
    height: 40px;
    border-radius: 9px;
    font-size: 9px;
    cursor: pointer;
}
.Modal-provider {
    border: 1px solid rgba(255,255,255,.15);
    background: rgba(255,255,255,.08);
    color: #ffffff;
}
.Modal-divider {
    margin: 15px 0;
    text-align: center;
    color: #71717a;
    font-size: 8px;
}
.Modal-window input {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    margin-bottom: 9px;
    padding: 0 11px;
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 9px;
    outline: none;
    background: rgba(0,0,0,.15);
    color: #ffffff;
}
.Modal-window input::placeholder {
    color: #52525b;
}
.Modal-submit {
    border: none;
    background: linear-gradient(135deg,#6366f1,#8b5cf6);
    color: #ffffff;
}`,
  },
];
