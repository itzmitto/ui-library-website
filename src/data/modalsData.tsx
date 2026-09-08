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
  {
    id: 2603,
    name: "Glass Modal",
    preview: (
      <div className="modal-preview-2603">
        <div className="modal-box-2603">
          <button className="modal-close-2603">×</button>
          <div className="modal-icon-2603">✦</div>
          <h3>Welcome back</h3>
          <p>Continue where you left off and keep building something great.</p>
          <div className="modal-actions-2603">
            <button className="modal-secondary-2603">Cancel</button>
            <button className="modal-primary-2603">Continue</button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2603">
  <div class="modal-box-2603">
    <button class="modal-close-2603">×</button>
    <div class="modal-icon-2603">✦</div>
    <h3>Welcome back</h3>
    <p>Continue where you left off and keep building something great.</p>
    <div class="modal-actions-2603">
      <button class="modal-secondary-2603">Cancel</button>
      <button class="modal-primary-2603">Continue</button>
    </div>
  </div>
</div>`,
    css: `.modal-overlay-2603{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,.45);backdrop-filter:blur(10px);z-index:999}.modal-box-2603{position:relative;width:420px;padding:32px;border-radius:24px;background:rgba(255,255,255,.9);border:1px solid rgba(255,255,255,.7);box-shadow:0 30px 80px rgba(15,23,42,.25);backdrop-filter:blur(25px);font-family:Arial,sans-serif}.modal-box-2603 h3{margin:0 0 10px;color:#0f172a;font-size:25px}.modal-box-2603 p{margin:0;color:#64748b;line-height:1.6}.modal-close-2603{position:absolute;right:18px;top:14px;border:0;background:transparent;color:#64748b;font-size:26px;cursor:pointer}.modal-icon-2603{width:48px;height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:18px;background:linear-gradient(135deg,#8b5cf6,#6366f1);color:white;font-size:21px;box-shadow:0 12px 25px rgba(99,102,241,.3)}.modal-actions-2603{display:flex;justify-content:flex-end;gap:10px;margin-top:25px}.modal-secondary-2603,.modal-primary-2603{border:0;padding:11px 18px;border-radius:11px;font-size:14px;font-weight:600;cursor:pointer}.modal-secondary-2603{background:#f1f5f9;color:#475569}.modal-primary-2603{background:#4f46e5;color:white}`,
  },
  {
    id: 2604,
    name: "Danger Confirmation Modal",
    preview: (
      <div className="modal-preview-2604">
        <div className="modal-box-2604">
          <button className="modal-close-2604">×</button>
          <div className="modal-danger-icon-2604">!</div>
          <h3>Delete project?</h3>
          <p>
            This action cannot be undone. All project data will be permanently
            removed.
          </p>
          <div className="modal-actions-2604">
            <button className="modal-cancel-2604">Cancel</button>
            <button className="modal-danger-2604">Delete project</button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2604">
  <div class="modal-box-2604">
    <button class="modal-close-2604">×</button>
    <div class="modal-danger-icon-2604">!</div>
    <h3>Delete project?</h3>
    <p>This action cannot be undone. All project data will be permanently removed.</p>
    <div class="modal-actions-2604">
      <button class="modal-cancel-2604">Cancel</button>
      <button class="modal-danger-2604">Delete project</button>
    </div>
  </div>
</div>`,
    css: `.modal-overlay-2604{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,.62);backdrop-filter:blur(8px);z-index:999}.modal-box-2604{position:relative;width:410px;padding:32px;border-radius:20px;background:#ffffff;box-shadow:0 35px 90px rgba(15,23,42,.35);font-family:Arial,sans-serif}.modal-box-2604 h3{margin:0 0 10px;color:#0f172a;font-size:24px}.modal-box-2604 p{margin:0;color:#64748b;line-height:1.6}.modal-close-2604{position:absolute;top:14px;right:17px;border:0;background:none;color:#94a3b8;font-size:25px;cursor:pointer}.modal-danger-icon-2604{width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:18px;background:#fee2e2;color:#dc2626;font-weight:800;font-size:24px;border:7px solid #fff1f2;box-shadow:0 0 0 1px #fecaca}.modal-actions-2604{display:flex;justify-content:flex-end;gap:10px;margin-top:26px}.modal-cancel-2604,.modal-danger-2604{border:0;padding:11px 18px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer}.modal-cancel-2604{background:#f1f5f9;color:#475569}.modal-danger-2604{background:#dc2626;color:#fff}`,
  },
  {
    id: 2605,
    name: "Dark Command Modal",
    preview: (
      <div className="modal-preview-2605">
        <div className="modal-box-2605">
          <div className="modal-top-2605">
            <span>Command Palette</span>
            <kbd>ESC</kbd>
          </div>
          <div className="modal-search-2605">
            <span>⌕</span>
            <span>Search commands...</span>
          </div>
          <div className="modal-command-2605 active">
            <span>⌘</span>
            <strong>Open dashboard</strong>
            <kbd>⌘ K</kbd>
          </div>
          <div className="modal-command-2605">
            <span>＋</span>
            <strong>Create project</strong>
            <kbd>⌘ N</kbd>
          </div>
          <div className="modal-command-2605">
            <span>⚙</span>
            <strong>Open settings</strong>
            <kbd>⌘ ,</kbd>
          </div>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2605">
  <div class="modal-box-2605">
    <div class="modal-top-2605">
      <span>Command Palette</span>
      <kbd>ESC</kbd>
    </div>
    <div class="modal-search-2605">
      <span>⌕</span>
      <span>Search commands...</span>
    </div>
    <div class="modal-command-2605 active">
      <span>⌘</span>
      <strong>Open dashboard</strong>
      <kbd>⌘ K</kbd>
    </div>
    <div class="modal-command-2605">
      <span>＋</span>
      <strong>Create project</strong>
      <kbd>⌘ N</kbd>
    </div>
    <div class="modal-command-2605">
      <span>⚙</span>
      <strong>Open settings</strong>
      <kbd>⌘ ,</kbd>
    </div>
  </div>
</div>`,
    css: `.modal-overlay-2605{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(2,6,23,.75);backdrop-filter:blur(9px);z-index:999}.modal-box-2605{width:560px;padding:14px;border-radius:18px;background:#0f172a;border:1px solid #334155;box-shadow:0 35px 100px rgba(0,0,0,.55);font-family:Arial,sans-serif}.modal-top-2605{display:flex;align-items:center;justify-content:space-between;padding:8px 10px 13px;color:#cbd5e1;font-size:13px;font-weight:700}.modal-top-2605 kbd,.modal-command-2605 kbd{padding:4px 7px;border-radius:6px;background:#1e293b;border:1px solid #334155;color:#94a3b8;font-size:11px}.modal-search-2605{height:46px;display:flex;align-items:center;gap:12px;padding:0 14px;margin-bottom:9px;border-radius:10px;background:#111c2f;border:1px solid #334155;color:#64748b}.modal-search-2605 span:first-child{font-size:23px;color:#94a3b8}.modal-command-2605{display:flex;align-items:center;gap:12px;padding:12px 13px;border-radius:10px;color:#94a3b8}.modal-command-2605 span{width:28px;color:#64748b}.modal-command-2605 strong{flex:1;font-size:13px;color:#cbd5e1}.modal-command-2605.active{background:#1e293b;box-shadow:inset 0 0 0 1px #334155}`,
  },
  {
    id: 2606,
    name: "Success Modal",
    preview: (
      <div className="modal-preview-2606">
        <div className="modal-box-2606">
          <div className="modal-success-circle-2606">✓</div>
          <h3>Payment successful</h3>
          <p>
            Your payment has been processed successfully. Your order is now
            being prepared.
          </p>
          <div className="modal-order-2606">
            <span>Order #10428</span>
            <strong>€129.00</strong>
          </div>
          <button className="modal-success-button-2606">View order</button>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2606">
  <div class="modal-box-2606">
    <div class="modal-success-circle-2606">✓</div>
    <h3>Payment successful</h3>
    <p>Your payment has been processed successfully. Your order is now being prepared.</p>
    <div class="modal-order-2606">
      <span>Order #10428</span>
      <strong>€129.00</strong>
    </div>
    <button class="modal-success-button-2606">View order</button>
  </div>
</div>`,
    css: `.modal-overlay-2606{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,.5);backdrop-filter:blur(7px);z-index:999}.modal-box-2606{width:410px;padding:34px;border-radius:24px;background:#fff;text-align:center;box-shadow:0 30px 80px rgba(15,23,42,.3);font-family:Arial,sans-serif}.modal-success-circle-2606{width:68px;height:68px;margin:0 auto 20px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#dcfce7;color:#16a34a;border:8px solid #f0fdf4;font-size:30px;font-weight:800;animation:modal2606Pop .5s ease}.modal-box-2606 h3{margin:0 0 10px;font-size:24px;color:#0f172a}.modal-box-2606 p{margin:0;line-height:1.6;color:#64748b}.modal-order-2606{display:flex;align-items:center;justify-content:space-between;margin:24px 0;padding:14px;border-radius:12px;background:#f8fafc;color:#64748b;font-size:13px}.modal-order-2606 strong{color:#0f172a}.modal-success-button-2606{width:100%;border:0;padding:12px;border-radius:11px;background:#16a34a;color:#fff;font-weight:700;cursor:pointer}@keyframes modal2606Pop{0%{transform:scale(.5);opacity:0}70%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}`,
  },
  {
    id: 2607,
    name: "Slide Up Modal",
    preview: (
      <div className="modal-preview-2607">
        <div className="modal-box-2607">
          <div className="modal-handle-2607"></div>
          <h3>Share your project</h3>
          <p>Choose how you want to share this project with your team.</p>
          <div className="modal-share-2607">
            <button>Copy link</button>
            <button>Email</button>
            <button>Invite</button>
          </div>
          <button className="modal-close-button-2607">Done</button>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2607">
  <div class="modal-box-2607">
    <div class="modal-handle-2607"></div>
    <h3>Share your project</h3>
    <p>Choose how you want to share this project with your team.</p>
    <div class="modal-share-2607">
      <button>Copy link</button>
      <button>Email</button>
      <button>Invite</button>
    </div>
    <button class="modal-close-button-2607">Done</button>
  </div>
</div>`,
    css: `.modal-overlay-2607{position:fixed;inset:0;display:flex;align-items:flex-end;justify-content:center;background:rgba(15,23,42,.42);backdrop-filter:blur(7px);z-index:999}.modal-box-2607{width:100%;max-width:560px;padding:18px 25px 26px;border-radius:28px 28px 0 0;background:#fff;box-shadow:0 -18px 60px rgba(15,23,42,.24);font-family:Arial,sans-serif;animation:modal2607Slide .45s cubic-bezier(.22,1,.36,1)}.modal-handle-2607{width:42px;height:5px;margin:0 auto 23px;border-radius:999px;background:#cbd5e1}.modal-box-2607 h3{margin:0 0 8px;color:#0f172a;font-size:22px}.modal-box-2607 p{margin:0;color:#64748b;line-height:1.5}.modal-share-2607{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:22px 0}.modal-share-2607 button{border:1px solid #e2e8f0;background:#f8fafc;padding:13px 8px;border-radius:12px;color:#334155;font-weight:600}.modal-close-button-2607{width:100%;border:0;padding:13px;border-radius:12px;background:#0f172a;color:#fff;font-weight:700}@keyframes modal2607Slide{from{transform:translateY(100%)}to{transform:translateY(0)}}`,
  },
  {
    id: 2608,
    name: "Notification Modal",
    preview: (
      <div className="modal-preview-2608">
        <div className="modal-box-2608">
          <div className="modal-notification-top-2608">
            <span className="modal-notification-icon-2608">●</span>
            <span>New notification</span>
            <button>×</button>
          </div>
          <div className="modal-notification-content-2608">
            <strong>Alex mentioned you</strong>
            <p>“Can you review the latest dashboard changes?”</p>
          </div>
          <div className="modal-notification-actions-2608">
            <button>Dismiss</button>
            <button>Open message</button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2608">
  <div class="modal-box-2608">
    <div class="modal-notification-top-2608">
      <span class="modal-notification-icon-2608">●</span>
      <span>New notification</span>
      <button>×</button>
    </div>
    <div class="modal-notification-content-2608">
      <strong>Alex mentioned you</strong>
      <p>“Can you review the latest dashboard changes?”</p>
    </div>
    <div class="modal-notification-actions-2608">
      <button>Dismiss</button>
      <button>Open message</button>
    </div>
  </div>
</div>`,
    css: `.modal-overlay-2608{position:fixed;inset:0;display:flex;align-items:flex-start;justify-content:center;padding-top:70px;background:rgba(15,23,42,.18);backdrop-filter:blur(4px);z-index:999}.modal-box-2608{width:440px;border-radius:16px;background:#fff;border:1px solid #e2e8f0;box-shadow:0 20px 55px rgba(15,23,42,.18);font-family:Arial,sans-serif;overflow:hidden;animation:modal2608Drop .4s ease}.modal-notification-top-2608{display:flex;align-items:center;gap:10px;padding:15px 17px;border-bottom:1px solid #e2e8f0;font-size:13px;font-weight:700;color:#334155}.modal-notification-top-2608 button{margin-left:auto;border:0;background:none;color:#94a3b8;font-size:20px}.modal-notification-icon-2608{font-size:10px;color:#3b82f6}.modal-notification-content-2608{padding:20px 17px}.modal-notification-content-2608 strong{font-size:15px;color:#0f172a}.modal-notification-content-2608 p{margin:7px 0 0;color:#64748b;line-height:1.5;font-size:13px}.modal-notification-actions-2608{display:flex;justify-content:flex-end;gap:8px;padding:13px 17px;background:#f8fafc}.modal-notification-actions-2608 button{border:0;padding:9px 13px;border-radius:8px;font-size:12px;font-weight:600}.modal-notification-actions-2608 button:first-child{background:#e2e8f0;color:#475569}.modal-notification-actions-2608 button:last-child{background:#2563eb;color:#fff}@keyframes modal2608Drop{from{opacity:0;transform:translateY(-15px)}to{opacity:1;transform:translateY(0)}}`,
  },
  {
    id: 2609,
    name: "Pricing Modal",
    preview: (
      <div className="modal-preview-2609">
        <div className="modal-box-2609">
          <span className="modal-badge-2609">PRO PLAN</span>
          <h3>Upgrade your workspace</h3>
          <p>Unlock advanced tools and unlimited collaboration.</p>
          <div className="modal-price-2609">
            <strong>€19</strong>
            <span>/month</span>
          </div>
          <div className="modal-features-2609">
            <span>✓ Unlimited projects</span>
            <span>✓ Advanced analytics</span>
            <span>✓ Priority support</span>
          </div>
          <button className="modal-upgrade-2609">Upgrade now</button>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2609">
  <div class="modal-box-2609">
    <span class="modal-badge-2609">PRO PLAN</span>
    <h3>Upgrade your workspace</h3>
    <p>Unlock advanced tools and unlimited collaboration.</p>
    <div class="modal-price-2609">
      <strong>€19</strong>
      <span>/month</span>
    </div>
    <div class="modal-features-2609">
      <span>✓ Unlimited projects</span>
      <span>✓ Advanced analytics</span>
      <span>✓ Priority support</span>
    </div>
    <button class="modal-upgrade-2609">Upgrade now</button>
  </div>
</div>`,
    css: `.modal-overlay-2609{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,.55);backdrop-filter:blur(8px);z-index:999}.modal-box-2609{width:420px;padding:32px;border-radius:24px;background:linear-gradient(145deg,#111827,#1e293b);border:1px solid #475569;box-shadow:0 35px 90px rgba(0,0,0,.5);color:white;font-family:Arial,sans-serif}.modal-badge-2609{display:inline-flex;padding:6px 9px;border-radius:999px;background:rgba(139,92,246,.18);border:1px solid rgba(167,139,250,.3);color:#c4b5fd;font-size:10px;font-weight:800;letter-spacing:.12em}.modal-box-2609 h3{margin:18px 0 8px;font-size:24px}.modal-box-2609 p{margin:0;color:#94a3b8;line-height:1.5}.modal-price-2609{display:flex;align-items:flex-end;gap:5px;margin:24px 0 18px}.modal-price-2609 strong{font-size:40px}.modal-price-2609 span{padding-bottom:6px;color:#94a3b8}.modal-features-2609{display:flex;flex-direction:column;gap:11px;color:#cbd5e1;font-size:13px}.modal-features-2609 span:first-letter{color:#a78bfa}.modal-upgrade-2609{width:100%;margin-top:25px;border:0;padding:13px;border-radius:12px;background:linear-gradient(135deg,#8b5cf6,#6366f1);color:white;font-weight:800;cursor:pointer;box-shadow:0 10px 25px rgba(99,102,241,.3)}`,
  },
  {
    id: 2610,
    name: "Profile Modal",
    preview: (
      <div className="modal-preview-2610">
        <div className="modal-box-2610">
          <button className="modal-profile-close-2610">×</button>
          <div className="modal-profile-cover-2610"></div>
          <div className="modal-profile-avatar-2610">AB</div>
          <div className="modal-profile-info-2610">
            <h3>Alex Brown</h3>
            <span>Senior Product Designer</span>
            <p>Building clean digital experiences and design systems.</p>
          </div>
          <div className="modal-profile-stats-2610">
            <div>
              <strong>128</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>24K</strong>
              <span>Followers</span>
            </div>
            <div>
              <strong>4.9</strong>
              <span>Rating</span>
            </div>
          </div>
          <button className="modal-profile-button-2610">View profile</button>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2610">
  <div class="modal-box-2610">
    <button class="modal-profile-close-2610">×</button>
    <div class="modal-profile-cover-2610"></div>
    <div class="modal-profile-avatar-2610">AB</div>
    <div class="modal-profile-info-2610">
      <h3>Alex Brown</h3>
      <span>Senior Product Designer</span>
      <p>Building clean digital experiences and design systems.</p>
    </div>
    <div class="modal-profile-stats-2610">
      <div><strong>128</strong><span>Projects</span></div>
      <div><strong>24K</strong><span>Followers</span></div>
      <div><strong>4.9</strong><span>Rating</span></div>
    </div>
    <button class="modal-profile-button-2610">View profile</button>
  </div>
</div>`,
    css: `.modal-overlay-2610{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,.5);backdrop-filter:blur(8px);z-index:999}.modal-box-2610{position:relative;width:420px;overflow:hidden;border-radius:22px;background:#fff;box-shadow:0 30px 80px rgba(15,23,42,.3);font-family:Arial,sans-serif}.modal-profile-close-2610{position:absolute;right:16px;top:13px;z-index:5;border:0;background:rgba(15,23,42,.2);color:#fff;width:30px;height:30px;border-radius:50%;font-size:20px}.modal-profile-cover-2610{height:120px;background:linear-gradient(135deg,#1e3a8a,#7c3aed,#ec4899)}.modal-profile-avatar-2610{width:86px;height:86px;margin:-43px auto 0;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#0f172a;color:#fff;border:5px solid #fff;font-size:22px;font-weight:800;position:relative}.modal-profile-info-2610{text-align:center;padding:15px 28px 0}.modal-profile-info-2610 h3{margin:0;color:#0f172a;font-size:22px}.modal-profile-info-2610 span{display:block;margin-top:5px;color:#6366f1;font-size:12px;font-weight:700}.modal-profile-info-2610 p{margin:10px 0 0;color:#64748b;font-size:13px;line-height:1.5}.modal-profile-stats-2610{display:grid;grid-template-columns:repeat(3,1fr);margin:22px 25px;padding:14px 0;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;text-align:center}.modal-profile-stats-2610 div{display:flex;flex-direction:column;gap:4px}.modal-profile-stats-2610 strong{color:#0f172a}.modal-profile-stats-2610 span{color:#94a3b8;font-size:11px}.modal-profile-button-2610{display:block;width:calc(100% - 50px);margin:0 25px 25px;border:0;padding:12px;border-radius:11px;background:#0f172a;color:#fff;font-weight:700}`,
  },
  {
    id: 2611,
    name: "Image Preview Modal",
    preview: (
      <div className="modal-preview-2611">
        <div className="modal-box-2611">
          <button className="modal-image-close-2611">×</button>
          <div className="modal-image-2611">
            <div className="modal-image-art-2611">
              <span>UI</span>
            </div>
          </div>
          <div className="modal-image-footer-2611">
            <div>
              <strong>Design System</strong>
              <span>Updated 2 minutes ago</span>
            </div>
            <button>Download</button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2611">
  <div class="modal-box-2611">
    <button class="modal-image-close-2611">×</button>
    <div class="modal-image-2611">
      <div class="modal-image-art-2611">
        <span>UI</span>
      </div>
    </div>
    <div class="modal-image-footer-2611">
      <div>
        <strong>Design System</strong>
        <span>Updated 2 minutes ago</span>
      </div>
      <button>Download</button>
    </div>
  </div>
</div>`,
    css: `.modal-overlay-2611{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(2,6,23,.8);backdrop-filter:blur(5px);z-index:999}.modal-box-2611{width:650px;border-radius:20px;overflow:hidden;background:#0f172a;box-shadow:0 40px 100px rgba(0,0,0,.6);font-family:Arial,sans-serif}.modal-image-close-2611{position:absolute;right:24px;top:20px;width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.2);background:rgba(15,23,42,.55);color:#fff;font-size:21px;z-index:3}.modal-image-2611{height:390px;padding:25px;background:linear-gradient(135deg,#111827,#1e1b4b);display:flex;align-items:center;justify-content:center}.modal-image-art-2611{width:78%;height:78%;border-radius:18px;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 30% 25%,#67e8f9,transparent 15%),radial-gradient(circle at 70% 70%,#8b5cf6,transparent 23%),linear-gradient(145deg,#312e81,#0f172a);box-shadow:0 25px 60px rgba(0,0,0,.4),inset 0 0 30px rgba(255,255,255,.08)}.modal-image-art-2611 span{font-size:80px;font-weight:900;color:#fff;text-shadow:0 0 20px rgba(255,255,255,.4)}.modal-image-footer-2611{display:flex;align-items:center;justify-content:space-between;padding:18px 20px;color:#fff}.modal-image-footer-2611 div{display:flex;flex-direction:column;gap:4px}.modal-image-footer-2611 strong{font-size:15px}.modal-image-footer-2611 span{font-size:11px;color:#94a3b8}.modal-image-footer-2611 button{border:0;padding:10px 15px;border-radius:9px;background:#fff;color:#0f172a;font-weight:700}`,
  },
  {
    id: 2612,
    name: "Neon Energy Modal",
    preview: (
      <div className="modal-preview-2612">
        <div className="modal-box-2612">
          <div className="modal-energy-ring-2612"></div>
          <div className="modal-energy-orb-2612">
            <span>✦</span>
          </div>
          <h3>System overload</h3>
          <p>
            Energy levels are reaching critical capacity. Stabilize the system
            before continuing.
          </p>
          <div className="modal-progress-2612">
            <span></span>
          </div>
          <div className="modal-energy-actions-2612">
            <button>Stabilize</button>
            <button>Ignore</button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2612">
  <div class="modal-box-2612">
    <div class="modal-energy-ring-2612"></div>
    <div class="modal-energy-orb-2612">
      <span>✦</span>
    </div>
    <h3>System overload</h3>
    <p>Energy levels are reaching critical capacity. Stabilize the system before continuing.</p>
    <div class="modal-progress-2612">
      <span></span>
    </div>
    <div class="modal-energy-actions-2612">
      <button>Stabilize</button>
      <button>Ignore</button>
    </div>
  </div>
</div>`,
    css: `.modal-overlay-2612{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(2,6,23,.78);backdrop-filter:blur(10px);z-index:999}.modal-box-2612{position:relative;width:430px;padding:38px;border-radius:26px;background:#070b18;border:1px solid rgba(34,211,238,.25);box-shadow:0 0 25px rgba(34,211,238,.12),0 35px 100px rgba(0,0,0,.65);overflow:hidden;color:#fff;font-family:Arial,sans-serif;text-align:center}.modal-box-2612::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 18%,rgba(34,211,238,.13),transparent 35%);pointer-events:none}.modal-energy-ring-2612{position:absolute;top:31px;left:50%;width:92px;height:92px;transform:translateX(-50%);border:1px dashed rgba(34,211,238,.35);border-radius:50%;animation:modal2612Spin 7s linear infinite}.modal-energy-orb-2612{position:relative;width:72px;height:72px;margin:0 auto 25px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle,#ecfeff 0 8%,#67e8f9 17%,#06b6d4 35%,#164e63 58%,#082f49 78%);border:2px solid rgba(103,232,249,.7);box-shadow:0 0 12px rgba(34,211,238,.8),0 0 30px rgba(6,182,212,.4);animation:modal2612Pulse 2.1s ease-in-out infinite}.modal-energy-orb-2612 span{font-size:25px;color:#fff;text-shadow:0 0 10px #fff,0 0 20px #67e8f9}.modal-box-2612 h3{position:relative;margin:0 0 10px;font-size:25px}.modal-box-2612 p{position:relative;margin:0;color:#94a3b8;line-height:1.6;font-size:13px}.modal-progress-2612{position:relative;height:7px;margin:25px 0;border-radius:999px;background:#172033;overflow:hidden}.modal-progress-2612 span{display:block;width:82%;height:100%;border-radius:999px;background:linear-gradient(90deg,#06b6d4,#67e8f9);box-shadow:0 0 12px rgba(34,211,238,.8);animation:modal2612Progress 2.5s ease-in-out infinite alternate}.modal-energy-actions-2612{position:relative;display:flex;gap:10px}.modal-energy-actions-2612 button{flex:1;padding:12px;border-radius:11px;font-weight:700;cursor:pointer}.modal-energy-actions-2612 button:first-child{border:1px solid #22d3ee;background:rgba(34,211,238,.1);color:#67e8f9}.modal-energy-actions-2612 button:last-child{border:1px solid #334155;background:#111827;color:#94a3b8}@keyframes modal2612Spin{from{transform:translateX(-50%) rotate(0deg)}to{transform:translateX(-50%) rotate(360deg)}}@keyframes modal2612Pulse{0%,100%{transform:scale(.94);box-shadow:0 0 10px rgba(34,211,238,.55),0 0 22px rgba(6,182,212,.3)}50%{transform:scale(1.08);box-shadow:0 0 16px rgba(34,211,238,.95),0 0 38px rgba(6,182,212,.55)}}@keyframes modal2612Progress{from{width:76%}to{width:88%}}`,
  },
  {
    id: 2613,
    name: "Modern Account Modal",
    preview: (
      <div className="modal-preview-2613">
        <div className="modal-box-2613">
          <button className="modal-close-2613">
            <i className="ri-close-line"></i>
          </button>
          <div className="modal-icon-2613">
            <i className="ri-user-line"></i>
          </div>
          <h3>Account settings</h3>
          <p>Manage your profile information and account preferences.</p>
          <div className="modal-field-2613">
            <label>Username</label>
            <div className="modal-input-2613">
              <i className="ri-user-line"></i>
              <span>andre_dev</span>
            </div>
          </div>
          <div className="modal-field-2613">
            <label>Email</label>
            <div className="modal-input-2613">
              <i className="ri-mail-line"></i>
              <span>andre@example.com</span>
            </div>
          </div>
          <button className="modal-save-2613">Save changes</button>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2613">
  <div class="modal-box-2613">
    <button class="modal-close-2613">
      <i class="ri-close-line"></i>
    </button>
    <div class="modal-icon-2613">
      <i class="ri-user-line"></i>
    </div>
    <h3>Account settings</h3>
    <p>Manage your profile information and account preferences.</p>
    <div class="modal-field-2613">
      <label>Username</label>
      <div class="modal-input-2613">
        <i class="ri-user-line"></i>
        <span>andre_dev</span>
      </div>
    </div>
    <div class="modal-field-2613">
      <label>Email</label>
      <div class="modal-input-2613">
        <i class="ri-mail-line"></i>
        <span>andre@example.com</span>
      </div>
    </div>
    <button class="modal-save-2613">
      Save changes
    </button>
  </div>
</div>`,
    css: `.modal-overlay-2613 {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(8px);
  z-index: 999;
}
.modal-box-2613 {
  width: 400px;
  padding: 30px;
  position: relative;
  border-radius: 22px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.2);
  font-family: Arial, sans-serif;
  animation: modal2613Enter 0.45s cubic-bezier(.22,1,.36,1);
}
.modal-close-2613 {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 50%;
  background: #f1f5f9;
  color: #64748b;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.25s ease;
}
.modal-close-2613:hover {
  transform: rotate(90deg);
}
.modal-icon-2613 {
  width: 50px;
  height: 50px;
  margin-bottom: 17px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eef2ff;
  color: #4f46e5;
  font-size: 22px;
}
.modal-box-2613 h3 {
  margin: 0 0 8px;
  color: #0f172a;
  font-size: 23px;
}
.modal-box-2613 p {
  margin: 0 0 22px;
  color: #64748b;
  font-size: 13px;
  line-height: 1.55;
}
.modal-field-2613 {
  margin-bottom: 14px;
}
.modal-field-2613 label {
  display: block;
  margin-bottom: 6px;
  color: #475569;
  font-size: 11px;
  font-weight: 700;
}
.modal-input-2613 {
  height: 42px;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 0 12px;
  border-radius: 10px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #334155;
  font-size: 12px;
}
.modal-input-2613 i {
  color: #94a3b8;
  font-size: 16px;
}
.modal-save-2613 {
  width: 100%;
  margin-top: 7px;
  padding: 12px;
  border: 0;
  border-radius: 10px;
  background: #4f46e5;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.2);
}
.modal-save-2613:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(79, 70, 229, 0.3);
}
@keyframes modal2613Enter {
  from {
    opacity: 0;
    transform: translateY(15px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}`,
  },
  {
    id: 2614,
    name: "Delete Confirmation Modal",
    preview: (
      <div className="modal-preview-2614">
        <div className="modal-box-2614">
          <div className="modal-danger-2614">
            <i className="ri-delete-bin-6-line"></i>
          </div>
          <button className="modal-close-2614">
            <i className="ri-close-line"></i>
          </button>
          <h3>Delete this file?</h3>
          <p>
            This file will be permanently deleted. You cannot undo this action.
          </p>
          <div className="modal-file-2614">
            <i className="ri-file-3-line"></i>
            <div>
              <strong>design-system.fig</strong>
              <span>24.8 MB</span>
            </div>
          </div>
          <div className="modal-actions-2614">
            <button className="modal-cancel-2614">Cancel</button>
            <button className="modal-delete-2614">
              <i className="ri-delete-bin-6-line"></i>
              Delete
            </button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2614">
  <div class="modal-box-2614">
    <div class="modal-danger-2614">
      <i class="ri-delete-bin-6-line"></i>
    </div>
    <button class="modal-close-2614">
      <i class="ri-close-line"></i>
    </button>
    <h3>Delete this file?</h3>
    <p>
      This file will be permanently deleted. You cannot undo this action.
    </p>
    <div class="modal-file-2614">
      <i class="ri-file-3-line"></i>
      <div>
        <strong>design-system.fig</strong>
        <span>24.8 MB</span>
      </div>
    </div>
    <div class="modal-actions-2614">
      <button class="modal-cancel-2614">Cancel</button>
      <button class="modal-delete-2614">
        <i class="ri-delete-bin-6-line"></i>
        Delete
      </button>
    </div>
  </div>
</div>`,
    css: `.modal-overlay-2614 {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.58);
  backdrop-filter: blur(9px);
  z-index: 999;
}
.modal-box-2614 {
  width: 400px;
  padding: 28px;
  position: relative;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.25);
  font-family: Arial, sans-serif;
  animation: modal2614Enter 0.4s ease;
}
.modal-close-2614 {
  position: absolute;
  right: 15px;
  top: 14px;
  border: 0;
  background: transparent;
  color: #94a3b8;
  font-size: 19px;
  cursor: pointer;
}
.modal-danger-2614 {
  width: 52px;
  height: 52px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background: #fee2e2;
  color: #dc2626;
  font-size: 22px;
  animation: modal2614Pulse 2s ease-in-out infinite;
}
.modal-box-2614 h3 {
  margin: 0 0 8px;
  color: #0f172a;
  font-size: 23px;
}
.modal-box-2614 p {
  margin: 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.55;
}
.modal-file-2614 {
  display: flex;
  align-items: center;
  gap: 11px;
  margin: 20px 0;
  padding: 12px;
  border-radius: 11px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}
.modal-file-2614 > i {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  background: #eef2ff;
  color: #6366f1;
}
.modal-file-2614 div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.modal-file-2614 strong {
  color: #334155;
  font-size: 12px;
}
.modal-file-2614 span {
  color: #94a3b8;
  font-size: 10px;
}
.modal-actions-2614 {
  display: flex;
  justify-content: flex-end;
  gap: 9px;
}
.modal-cancel-2614,
.modal-delete-2614 {
  border: 0;
  padding: 10px 15px;
  border-radius: 9px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}
.modal-cancel-2614 {
  background: #f1f5f9;
  color: #475569;
}
.modal-delete-2614 {
  display: flex;
  align-items: center;
  gap: 7px;
  background: #dc2626;
  color: #ffffff;
  box-shadow: 0 7px 18px rgba(220, 38, 38, 0.2);
}
@keyframes modal2614Enter {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes modal2614Pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.06);
  }
}`,
  },
  {
    id: 2615,
    name: "Search Modal",
    preview: (
      <div className="modal-preview-2615">
        <div className="modal-box-2615">
          <div className="modal-search-head-2615">
            <i className="ri-search-line"></i>
            <span>Search anything...</span>
            <kbd>ESC</kbd>
          </div>
          <div className="modal-search-section-2615">
            <span>Recent searches</span>
          </div>
          <div className="modal-result-2615">
            <i className="ri-layout-grid-line"></i>
            <div>
              <strong>Dashboard components</strong>
              <span>Components</span>
            </div>
            <i className="ri-arrow-right-line"></i>
          </div>
          <div className="modal-result-2615">
            <i className="ri-code-s-slash-line"></i>
            <div>
              <strong>React animation</strong>
              <span>Documentation</span>
            </div>
            <i className="ri-arrow-right-line"></i>
          </div>
          <div className="modal-result-2615">
            <i className="ri-palette-line"></i>
            <div>
              <strong>Design tokens</strong>
              <span>Resources</span>
            </div>
            <i className="ri-arrow-right-line"></i>
          </div>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2615">
  <div class="modal-box-2615">
    <div class="modal-search-head-2615">
      <i class="ri-search-line"></i>
      <span>Search anything...</span>
      <kbd>ESC</kbd>
    </div>
    <div class="modal-search-section-2615">
      <span>Recent searches</span>
    </div>
    <div class="modal-result-2615">
      <i class="ri-layout-grid-line"></i>
      <div>
        <strong>Dashboard components</strong>
        <span>Components</span>
      </div>
      <i class="ri-arrow-right-line"></i>
    </div>
    <div class="modal-result-2615">
      <i class="ri-code-s-slash-line"></i>
      <div>
        <strong>React animation</strong>
        <span>Documentation</span>
      </div>
      <i class="ri-arrow-right-line"></i>
    </div>
    <div class="modal-result-2615">
      <i class="ri-palette-line"></i>
      <div>
        <strong>Design tokens</strong>
        <span>Resources</span>
      </div>
      <i class="ri-arrow-right-line"></i>
    </div>
  </div>
</div>`,
    css: `.modal-overlay-2615 {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 80px;
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(8px);
  z-index: 999;
}
.modal-box-2615 {
  width: 470px;
  padding: 10px;
  border-radius: 17px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 25px 70px rgba(15, 23, 42, 0.22);
  font-family: Arial, sans-serif;
  animation: modal2615Drop 0.45s cubic-bezier(.22,1,.36,1);
}
.modal-search-head-2615 {
  height: 46px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 11px;
  border-bottom: 1px solid #e2e8f0;
}
.modal-search-head-2615 > i {
  color: #6366f1;
  font-size: 19px;
}
.modal-search-head-2615 span {
  flex: 1;
  color: #94a3b8;
  font-size: 12px;
}
.modal-search-head-2615 kbd {
  padding: 4px 7px;
  border-radius: 6px;
  background: #f1f5f9;
  color: #94a3b8;
  font-size: 9px;
}
.modal-search-section-2615 {
  padding: 14px 9px 8px;
  color: #94a3b8;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .08em;
}
.modal-result-2615 {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 11px;
  margin-bottom: 3px;
  border-radius: 10px;
  cursor: pointer;
  transition: background .25s ease, transform .25s ease;
}
.modal-result-2615:hover {
  background: #f8fafc;
  transform: translateX(3px);
}
.modal-result-2615 > i:first-child {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #eef2ff;
  color: #6366f1;
}
.modal-result-2615 div {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.modal-result-2615 strong {
  color: #334155;
  font-size: 12px;
}
.modal-result-2615 span {
  color: #94a3b8;
  font-size: 10px;
}
.modal-result-2615 > i:last-child {
  color: #cbd5e1;
  font-size: 16px;
}
@keyframes modal2615Drop {
  from {
    opacity: 0;
    transform: translateY(-18px) scale(.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}`,
  },
  {
    id: 2616,
    name: "Success Checkout Modal",
    preview: (
      <div className="modal-preview-2616">
        <div className="modal-box-2616">
          <div className="modal-check-2616">
            <i className="ri-check-line"></i>
          </div>
          <span className="modal-label-2616">ORDER COMPLETE</span>
          <h3>Thank you!</h3>
          <p>Your order has been placed successfully.</p>
          <div className="modal-summary-2616">
            <div>
              <i className="ri-shopping-bag-line"></i>
              <span>Order number</span>
              <strong>#48291</strong>
            </div>
            <div>
              <i className="ri-time-line"></i>
              <span>Estimated delivery</span>
              <strong>Tomorrow</strong>
            </div>
          </div>
          <button className="modal-track-2616">
            Track order
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2616">
  <div class="modal-box-2616">
    <div class="modal-check-2616">
      <i class="ri-check-line"></i>
    </div>
    <span class="modal-label-2616">ORDER COMPLETE</span>
    <h3>Thank you!</h3>
    <p>Your order has been placed successfully.</p>
    <div class="modal-summary-2616">
      <div>
        <i class="ri-shopping-bag-line"></i>
        <span>Order number</span>
        <strong>#48291</strong>
      </div>
      <div>
        <i class="ri-time-line"></i>
        <span>Estimated delivery</span>
        <strong>Tomorrow</strong>
      </div>
    </div>
    <button class="modal-track-2616">
      Track order
      <i class="ri-arrow-right-line"></i>
    </button>
  </div>
</div>`,
    css: `.modal-overlay-2616 {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, .48);
  backdrop-filter: blur(8px);
  z-index: 999;
}
.modal-box-2616 {
  width: 390px;
  padding: 30px;
  text-align: center;
  border-radius: 23px;
  background: #ffffff;
  box-shadow: 0 30px 75px rgba(15,23,42,.22);
  font-family: Arial,sans-serif;
  animation: modal2616Appear .6s cubic-bezier(.22,1,.36,1);
}
.modal-check-2616 {
  width: 66px;
  height: 66px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #dcfce7;
  color: #16a34a;
  border: 8px solid #f0fdf4;
  font-size: 29px;
  box-shadow: 0 0 0 1px #bbf7d0;
  animation: modal2616Check .65s cubic-bezier(.22,1,.36,1);
}
.modal-label-2616 {
  color: #16a34a;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .14em;
}
.modal-box-2616 h3 {
  margin: 8px 0 7px;
  color: #0f172a;
  font-size: 25px;
}
.modal-box-2616 p {
  margin: 0;
  color: #64748b;
  font-size: 12px;
}
.modal-summary-2616 {
  margin: 21px 0;
  border: 1px solid #e2e8f0;
  border-radius: 13px;
  overflow: hidden;
  text-align: left;
}
.modal-summary-2616 div {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 12px;
}
.modal-summary-2616 div + div {
  border-top: 1px solid #e2e8f0;
}
.modal-summary-2616 div > i {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #f0fdf4;
  color: #16a34a;
}
.modal-summary-2616 span {
  flex: 1;
  color: #94a3b8;
  font-size: 10px;
}
.modal-summary-2616 strong {
  color: #334155;
  font-size: 11px;
}
.modal-track-2616 {
  width: 100%;
  padding: 12px;
  border: 0;
  border-radius: 10px;
  background: #0f172a;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
}
@keyframes modal2616Appear {
  from {
    opacity: 0;
    transform: scale(.9) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes modal2616Check {
  0% {
    transform: scale(.3) rotate(-25deg);
    opacity: 0;
  }
  70% {
    transform: scale(1.12) rotate(5deg);
  }
  100% {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
}`,
  },
  {
    id: 2617,
    name: "Settings Modal",
    preview: (
      <div className="modal-preview-2617">
        <div className="modal-box-2617">
          <div className="modal-sidebar-2617">
            <button className="active">
              <i className="ri-user-settings-line"></i>
              Account
            </button>
            <button>
              <i className="ri-notification-3-line"></i>
              Notifications
            </button>
            <button>
              <i className="ri-shield-check-line"></i>
              Security
            </button>
          </div>
          <div className="modal-settings-content-2617">
            <button className="modal-settings-close-2617">
              <i className="ri-close-line"></i>
            </button>
            <span className="modal-settings-label-2617">SETTINGS</span>
            <h3>Preferences</h3>
            <p>Customize your workspace experience.</p>
            <div className="modal-setting-row-2617">
              <div>
                <strong>Dark mode</strong>
                <span>Use a darker interface.</span>
              </div>
              <div className="modal-switch-2617 active">
                <span></span>
              </div>
            </div>
            <div className="modal-setting-row-2617">
              <div>
                <strong>Animations</strong>
                <span>Enable interface animations.</span>
              </div>
              <div className="modal-switch-2617">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2617">
  <div class="modal-box-2617">
    <div class="modal-sidebar-2617">
      <button class="active">
        <i class="ri-user-settings-line"></i>
        Account
      </button>
      <button>
        <i class="ri-notification-3-line"></i>
        Notifications
      </button>
      <button>
        <i class="ri-shield-check-line"></i>
        Security
      </button>
    </div>
    <div class="modal-settings-content-2617">
      <button class="modal-settings-close-2617">
        <i class="ri-close-line"></i>
      </button>
      <span class="modal-settings-label-2617">SETTINGS</span>
      <h3>Preferences</h3>
      <p>Customize your workspace experience.</p>
      <div class="modal-setting-row-2617">
        <div>
          <strong>Dark mode</strong>
          <span>Use a darker interface.</span>
        </div>
        <div class="modal-switch-2617 active">
          <span></span>
        </div>
      </div>
      <div class="modal-setting-row-2617">
        <div>
          <strong>Animations</strong>
          <span>Enable interface animations.</span>
        </div>
        <div class="modal-switch-2617">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</div>`,
    css: `.modal-overlay-2617 {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15,23,42,.55);
  backdrop-filter: blur(9px);
  z-index: 999;
}
.modal-box-2617 {
  width: 540px;
  min-height: 300px;
  display: flex;
  overflow: hidden;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 30px 80px rgba(15,23,42,.25);
  font-family: Arial,sans-serif;
  animation: modal2617Enter .45s ease;
}
.modal-sidebar-2617 {
  width: 150px;
  padding: 18px 10px;
  background: #f8fafc;
  border-right: 1px solid #e2e8f0;
}
.modal-sidebar-2617 button {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 0;
  padding: 10px;
  margin-bottom: 4px;
  border-radius: 9px;
  background: transparent;
  color: #64748b;
  font-size: 10px;
  font-weight: 600;
  text-align: left;
}
.modal-sidebar-2617 button.active {
  background: #eef2ff;
  color: #4f46e5;
}
.modal-settings-content-2617 {
  flex: 1;
  padding: 28px;
  position: relative;
}
.modal-settings-close-2617 {
  position: absolute;
  right: 15px;
  top: 13px;
  border: 0;
  background: none;
  color: #94a3b8;
  font-size: 18px;
}
.modal-settings-label-2617 {
  color: #6366f1;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .13em;
}
.modal-settings-content-2617 h3 {
  margin: 7px 0 6px;
  color: #0f172a;
  font-size: 23px;
}
.modal-settings-content-2617 > p {
  margin: 0 0 23px;
  color: #64748b;
  font-size: 12px;
}
.modal-setting-row-2617 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  border-top: 1px solid #e2e8f0;
}
.modal-setting-row-2617 div:first-child {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.modal-setting-row-2617 strong {
  color: #334155;
  font-size: 11px;
}
.modal-setting-row-2617 span {
  color: #94a3b8;
  font-size: 9px;
}
.modal-switch-2617 {
  width: 36px;
  height: 20px;
  padding: 2px;
  border-radius: 999px;
  background: #cbd5e1;
}
.modal-switch-2617 span {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(15,23,42,.2);
  transition: transform .25s ease;
}
.modal-switch-2617.active {
  background: #4f46e5;
}
.modal-switch-2617.active span {
  transform: translateX(16px);
}
@keyframes modal2617Enter {
  from {
    opacity: 0;
    transform: scale(.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}`,
  },
  {
    id: 2618,
    name: "Download Modal",
    preview: (
      <div className="modal-preview-2618">
        <div className="modal-box-2618">
          <button className="modal-close-2618">
            <i className="ri-close-line"></i>
          </button>
          <div className="modal-download-icon-2618">
            <i className="ri-download-cloud-2-line"></i>
          </div>
          <h3>Download project</h3>
          <p>Select a format to download your project files.</p>
          <div className="modal-download-option-2618 active">
            <i className="ri-file-zip-line"></i>
            <div>
              <strong>ZIP archive</strong>
              <span>All project files · 12.4 MB</span>
            </div>
            <i className="ri-check-line"></i>
          </div>
          <div className="modal-download-option-2618">
            <i className="ri-file-code-line"></i>
            <div>
              <strong>Source files</strong>
              <span>Raw project files · 8.2 MB</span>
            </div>
          </div>
          <button className="modal-download-button-2618">
            <i className="ri-download-2-line"></i>
            Download
          </button>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2618">
  <div class="modal-box-2618">
    <button class="modal-close-2618">
      <i class="ri-close-line"></i>
    </button>
    <div class="modal-download-icon-2618">
      <i class="ri-download-cloud-2-line"></i>
    </div>
    <h3>Download project</h3>
    <p>Select a format to download your project files.</p>
    <div class="modal-download-option-2618 active">
      <i class="ri-file-zip-line"></i>
      <div>
        <strong>ZIP archive</strong>
        <span>All project files · 12.4 MB</span>
      </div>
      <i class="ri-check-line"></i>
    </div>
    <div class="modal-download-option-2618">
      <i class="ri-file-code-line"></i>
      <div>
        <strong>Source files</strong>
        <span>Raw project files · 8.2 MB</span>
      </div>
    </div>
    <button class="modal-download-button-2618">
      <i class="ri-download-2-line"></i>
      Download
    </button>
  </div>
</div>`,
    css: `.modal-overlay-2618 {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15,23,42,.55);
  backdrop-filter: blur(8px);
  z-index: 999;
}
.modal-box-2618 {
  width: 410px;
  padding: 28px;
  position: relative;
  border-radius: 21px;
  background: #ffffff;
  box-shadow: 0 30px 80px rgba(15,23,42,.24);
  font-family: Arial,sans-serif;
  animation: modal2618Enter .5s cubic-bezier(.22,1,.36,1);
}
.modal-close-2618 {
  position: absolute;
  right: 14px;
  top: 13px;
  border: 0;
  background: transparent;
  color: #94a3b8;
  font-size: 19px;
}
.modal-download-icon-2618 {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  border-radius: 14px;
  background: #dbeafe;
  color: #2563eb;
  font-size: 22px;
  animation: modal2618DownloadPulse 2.5s ease-in-out infinite;
}
.modal-box-2618 h3 {
  margin: 0 0 7px;
  color: #0f172a;
  font-size: 22px;
}
.modal-box-2618 p {
  margin: 0 0 20px;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
}
.modal-download-option-2618 {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 11px;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  transition: border .25s ease, background .25s ease;
}
.modal-download-option-2618.active {
  background: #eff6ff;
  border-color: #93c5fd;
}
.modal-download-option-2618 > i:first-child {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #f1f5f9;
  color: #2563eb;
}
.modal-download-option-2618 div {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.modal-download-option-2618 strong {
  color: #334155;
  font-size: 11px;
}
.modal-download-option-2618 span {
  color: #94a3b8;
  font-size: 9px;
}
.modal-download-option-2618 > i:last-child {
  color: #2563eb;
}
.modal-download-button-2618 {
  width: 100%;
  margin-top: 12px;
  padding: 11px;
  border: 0;
  border-radius: 10px;
  background: #2563eb;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
}
@keyframes modal2618Enter {
  from {
    opacity: 0;
    transform: translateY(12px) scale(.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@keyframes modal2618DownloadPulse {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}`,
  },
  {
    id: 2619,
    name: "Warning Modal",
    preview: (
      <div className="modal-preview-2619">
        <div className="modal-box-2619">
          <div className="modal-warning-icon-2619">
            <i className="ri-error-warning-line"></i>
          </div>
          <span className="modal-warning-label-2619">WARNING</span>
          <h3>Unsaved changes</h3>
          <p>
            You have changes that haven't been saved yet. What would you like to
            do?
          </p>
          <div className="modal-warning-actions-2619">
            <button className="modal-discard-2619">Discard</button>
            <button className="modal-save-warning-2619">
              <i className="ri-save-line"></i>
              Save changes
            </button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2619">
  <div class="modal-box-2619">
    <div class="modal-warning-icon-2619">
      <i class="ri-error-warning-line"></i>
    </div>
    <span class="modal-warning-label-2619">WARNING</span>
    <h3>Unsaved changes</h3>
    <p>You have changes that haven't been saved yet. What would you like to do?</p>
    <div class="modal-warning-actions-2619">
      <button class="modal-discard-2619">Discard</button>
      <button class="modal-save-warning-2619">
        <i class="ri-save-line"></i>
        Save changes
      </button>
    </div>
  </div>
</div>`,
    css: `.modal-overlay-2619 {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15,23,42,.54);
  backdrop-filter: blur(8px);
  z-index: 999;
}
.modal-box-2619 {
  width: 390px;
  padding: 30px;
  border-radius: 21px;
  background: #ffffff;
  text-align: center;
  box-shadow: 0 30px 80px rgba(15,23,42,.24);
  font-family: Arial,sans-serif;
  animation: modal2619WarningEnter .5s ease;
}
.modal-warning-icon-2619 {
  width: 60px;
  height: 60px;
  margin: 0 auto 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #fef3c7;
  color: #d97706;
  font-size: 28px;
  border: 7px solid #fffbeb;
  box-shadow: 0 0 0 1px #fde68a;
  animation: modal2619WarningPulse 2s ease-in-out infinite;
}
.modal-warning-label-2619 {
  color: #d97706;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .15em;
}
.modal-box-2619 h3 {
  margin: 8px 0;
  color: #0f172a;
  font-size: 23px;
}
.modal-box-2619 p {
  margin: 0;
  color: #64748b;
  font-size: 12px;
  line-height: 1.55;
}
.modal-warning-actions-2619 {
  display: flex;
  gap: 9px;
  margin-top: 23px;
}
.modal-discard-2619,
.modal-save-warning-2619 {
  flex: 1;
  border: 0;
  padding: 11px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
}
.modal-discard-2619 {
  background: #f1f5f9;
  color: #475569;
}
.modal-save-warning-2619 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: #d97706;
  color: #ffffff;
  box-shadow: 0 8px 18px rgba(217,119,6,.2);
}
@keyframes modal2619WarningEnter {
  from {
    opacity: 0;
    transform: scale(.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes modal2619WarningPulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.07);
  }
}`,
  },
  {
    id: 2620,
    name: "Invite Team Modal",
    preview: (
      <div className="modal-preview-2620">
        <div className="modal-box-2620">
          <div className="modal-invite-header-2620">
            <div>
              <span>TEAM</span>
              <h3>Invite members</h3>
            </div>
            <button>
              <i className="ri-close-line"></i>
            </button>
          </div>
          <p>Add people to collaborate on this project.</p>
          <div className="modal-email-input-2620">
            <i className="ri-mail-send-line"></i>
            <span>name@example.com</span>
          </div>
          <button className="modal-invite-button-2620">
            <i className="ri-user-add-line"></i>
            Send invitation
          </button>
          <div className="modal-invite-divider-2620">
            <span>or share invite link</span>
          </div>
          <div className="modal-link-2620">
            <span>app.dev/invite/8K2X</span>
            <button>
              <i className="ri-file-copy-line"></i>
            </button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2620">
  <div class="modal-box-2620">
    <div class="modal-invite-header-2620">
      <div>
        <span>TEAM</span>
        <h3>Invite members</h3>
      </div>
      <button>
        <i class="ri-close-line"></i>
      </button>
    </div>
    <p>Add people to collaborate on this project.</p>
    <div class="modal-email-input-2620">
      <i class="ri-mail-send-line"></i>
      <span>name@example.com</span>
    </div>
    <button class="modal-invite-button-2620">
      <i class="ri-user-add-line"></i>
      Send invitation
    </button>
    <div class="modal-invite-divider-2620">
      <span>or share invite link</span>
    </div>
    <div class="modal-link-2620">
      <span>app.dev/invite/8K2X</span>
      <button>
        <i class="ri-file-copy-line"></i>
      </button>
    </div>
  </div>
</div>`,
    css: `.modal-overlay-2620 {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15,23,42,.5);
  backdrop-filter: blur(8px);
  z-index: 999;
}
.modal-box-2620 {
  width: 400px;
  padding: 27px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 30px 75px rgba(15,23,42,.22);
  font-family: Arial,sans-serif;
  animation: modal2620Enter .45s ease;
}
.modal-invite-header-2620 {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.modal-invite-header-2620 > div {
  display: flex;
  flex-direction: column;
}
.modal-invite-header-2620 span {
  color: #6366f1;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .14em;
}
.modal-invite-header-2620 h3 {
  margin: 5px 0 0;
  color: #0f172a;
  font-size: 23px;
}
.modal-invite-header-2620 button {
  width: 29px;
  height: 29px;
  border: 0;
  border-radius: 50%;
  background: #f1f5f9;
  color: #64748b;
  font-size: 17px;
}
.modal-box-2620 > p {
  margin: 9px 0 19px;
  color: #64748b;
  font-size: 12px;
}
.modal-email-input-2620 {
  height: 43px;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 0 11px;
  border-radius: 10px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}
.modal-email-input-2620 i {
  color: #6366f1;
}
.modal-email-input-2620 span {
  color: #94a3b8;
  font-size: 11px;
}
.modal-invite-button-2620 {
  width: 100%;
  margin-top: 9px;
  padding: 11px;
  border: 0;
  border-radius: 10px;
  background: #4f46e5;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  box-shadow: 0 8px 20px rgba(79,70,229,.2);
}
.modal-invite-divider-2620 {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0 13px;
}
.modal-invite-divider-2620::before,
.modal-invite-divider-2620::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #e2e8f0;
}
.modal-invite-divider-2620 span {
  color: #94a3b8;
  font-size: 9px;
}
.modal-link-2620 {
  height: 39px;
  display: flex;
  align-items: center;
  padding-left: 11px;
  border-radius: 9px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}
.modal-link-2620 > span {
  flex: 1;
  color: #64748b;
  font-size: 10px;
}
.modal-link-2620 button {
  width: 39px;
  height: 39px;
  border: 0;
  border-left: 1px solid #e2e8f0;
  background: transparent;
  color: #6366f1;
}
@keyframes modal2620Enter {
  from {
    opacity: 0;
    transform: translateY(14px) scale(.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}`,
  },
  {
    id: 2621,
    name: "AI Assistant Modal",
    preview: (
      <div className="modal-preview-2621">
        <div className="modal-box-2621">
          <div className="modal-ai-top-2621">
            <div className="modal-ai-logo-2621">
              <i className="ri-sparkling-2-line"></i>
            </div>
            <div>
              <strong>AI Assistant</strong>
              <span>Online and ready</span>
            </div>
            <button>
              <i className="ri-close-line"></i>
            </button>
          </div>
          <div className="modal-ai-message-2621">
            <div className="modal-ai-small-2621">
              <i className="ri-sparkling-2-line"></i>
            </div>
            <p>
              I found 3 improvements that could make your interface faster and
              more accessible.
            </p>
          </div>
          <div className="modal-ai-suggestion-2621">
            <i className="ri-speed-up-line"></i>
            <div>
              <strong>Optimize animations</strong>
              <span>Reduce layout calculations by 24%</span>
            </div>
          </div>
          <div className="modal-ai-suggestion-2621">
            <i className="ri-eye-line"></i>
            <div>
              <strong>Improve contrast</strong>
              <span>Increase readability for users</span>
            </div>
          </div>
          <button className="modal-ai-action-2621">
            Apply suggestions
            <i className="ri-magic-line"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2621">
  <div class="modal-box-2621">
    <div class="modal-ai-top-2621">
      <div class="modal-ai-logo-2621">
        <i class="ri-sparkling-2-line"></i>
      </div>
      <div>
        <strong>AI Assistant</strong>
        <span>Online and ready</span>
      </div>
      <button>
        <i class="ri-close-line"></i>
      </button>
    </div>
    <div class="modal-ai-message-2621">
      <div class="modal-ai-small-2621">
        <i class="ri-sparkling-2-line"></i>
      </div>
      <p>
        I found 3 improvements that could make your interface faster and more accessible.
      </p>
    </div>
    <div class="modal-ai-suggestion-2621">
      <i class="ri-speed-up-line"></i>
      <div>
        <strong>Optimize animations</strong>
        <span>Reduce layout calculations by 24%</span>
      </div>
    </div>
    <div class="modal-ai-suggestion-2621">
      <i class="ri-eye-line"></i>
      <div>
        <strong>Improve contrast</strong>
        <span>Increase readability for users</span>
      </div>
    </div>
    <button class="modal-ai-action-2621">
      Apply suggestions
      <i class="ri-magic-line"></i>
    </button>
  </div>
</div>`,
    css: `.modal-overlay-2621 {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15,23,42,.62);
  backdrop-filter: blur(10px);
  z-index: 999;
}
.modal-box-2621 {
  width: 430px;
  padding: 23px;
  border-radius: 21px;
  background:
    radial-gradient(circle at 85% 10%, rgba(139,92,246,.13), transparent 30%),
    #0f172a;
  border: 1px solid #334155;
  color: #ffffff;
  box-shadow: 0 35px 90px rgba(0,0,0,.5);
  font-family: Arial,sans-serif;
  animation: modal2621AIEnter .5s cubic-bezier(.22,1,.36,1);
}
.modal-ai-top-2621 {
  display: flex;
  align-items: center;
  gap: 10px;
}
.modal-ai-logo-2621 {
  width: 39px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: linear-gradient(135deg,#8b5cf6,#6366f1);
  box-shadow: 0 0 20px rgba(139,92,246,.25);
  animation: modal2621Logo 2.5s ease-in-out infinite;
}
.modal-ai-logo-2621 i {
  font-size: 18px;
}
.modal-ai-top-2621 > div:nth-child(2) {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.modal-ai-top-2621 strong {
  font-size: 12px;
}
.modal-ai-top-2621 span {
  color: #64748b;
  font-size: 9px;
}
.modal-ai-top-2621 > button {
  border: 0;
  background: transparent;
  color: #64748b;
  font-size: 17px;
}
.modal-ai-message-2621 {
  display: flex;
  gap: 10px;
  margin: 23px 0 14px;
  padding: 13px;
  border-radius: 12px;
  background: rgba(139,92,246,.08);
  border: 1px solid rgba(139,92,246,.15);
}
.modal-ai-small-2621 {
  width: 27px;
  height: 27px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: rgba(139,92,246,.15);
  color: #c4b5fd;
}
.modal-ai-message-2621 p {
  margin: 0;
  color: #cbd5e1;
  font-size: 11px;
  line-height: 1.55;
}
.modal-ai-suggestion-2621 {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px;
  margin-bottom: 7px;
  border-radius: 10px;
  background: #111c2f;
  border: 1px solid #1e293b;
}
.modal-ai-suggestion-2621 > i {
  width: 29px;
  height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: rgba(59,130,246,.1);
  color: #60a5fa;
}
.modal-ai-suggestion-2621 div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.modal-ai-suggestion-2621 strong {
  color: #e2e8f0;
  font-size: 10px;
}
.modal-ai-suggestion-2621 span {
  color: #64748b;
  font-size: 9px;
}
.modal-ai-action-2621 {
  width: 100%;
  margin-top: 12px;
  padding: 11px;
  border: 0;
  border-radius: 10px;
  background: linear-gradient(135deg,#8b5cf6,#6366f1);
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  box-shadow: 0 9px 22px rgba(99,102,241,.24);
}
@keyframes modal2621AIEnter {
  from {
    opacity: 0;
    transform: scale(.94) translateY(12px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes modal2621Logo {
  0%,
  100% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(6deg) scale(1.06);
  }
}`,
  },
  {
    id: 2622,
    name: "Neon Cyber Modal",
    preview: (
      <div className="modal-preview-2622">
        <div className="modal-box-2622">
          <div className="modal-grid-2622"></div>
          <div className="modal-neon-corner-2622"></div>
          <button className="modal-neon-close-2622">
            <i className="ri-close-line"></i>
          </button>
          <div className="modal-neon-icon-2622">
            <i className="ri-shield-flash-line"></i>
          </div>
          <span className="modal-neon-label-2622">SECURITY PROTOCOL</span>
          <h3>Access granted</h3>
          <p>
            Your identity has been verified. The secure workspace is now
            available.
          </p>
          <div className="modal-security-bar-2622">
            <span></span>
          </div>
          <div className="modal-security-status-2622">
            <i className="ri-checkbox-circle-fill"></i>
            <span>Secure connection established</span>
          </div>
          <button className="modal-neon-button-2622">
            Enter workspace
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2622">
  <div class="modal-box-2622">
    <div class="modal-grid-2622"></div>
    <div class="modal-neon-corner-2622"></div>
    <button class="modal-neon-close-2622">
      <i class="ri-close-line"></i>
    </button>
    <div class="modal-neon-icon-2622">
      <i class="ri-shield-flash-line"></i>
    </div>
    <span class="modal-neon-label-2622">SECURITY PROTOCOL</span>
    <h3>Access granted</h3>
    <p>
      Your identity has been verified. The secure workspace is now available.
    </p>
    <div class="modal-security-bar-2622">
      <span></span>
    </div>
    <div class="modal-security-status-2622">
      <i class="ri-checkbox-circle-fill"></i>
      <span>Secure connection established</span>
    </div>
    <button class="modal-neon-button-2622">
      Enter workspace
      <i class="ri-arrow-right-line"></i>
    </button>
  </div>
</div>`,
    css: `.modal-overlay-2622 {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(2,6,23,.82);
  backdrop-filter: blur(9px);
  z-index: 999;
}
.modal-box-2622 {
  width: 410px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  background: #020617;
  border: 1px solid rgba(34,211,238,.35);
  color: #ffffff;
  box-shadow:
    0 0 20px rgba(34,211,238,.08),
    0 35px 100px rgba(0,0,0,.65);
  font-family: Arial,sans-serif;
  animation: modal2622CyberEnter .55s cubic-bezier(.22,1,.36,1);
}
.modal-box-2622::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(120deg, rgba(34,211,238,.07), transparent 30%),
    linear-gradient(300deg, rgba(99,102,241,.06), transparent 35%);
  pointer-events: none;
}
.modal-box-2622::after {
  content: "";
  position: absolute;
  width: 180px;
  height: 180px;
  right: -90px;
  bottom: -90px;
  border-radius: 50%;
  background: rgba(34,211,238,.08);
  filter: blur(30px);
  animation: modal2622Glow 3s ease-in-out infinite;
}
.modal-grid-2622 {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(34,211,238,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(34,211,238,.04) 1px, transparent 1px);
  background-size: 24px 24px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,.6), transparent);
  pointer-events: none;
}
.modal-neon-corner-2622 {
  position: absolute;
  top: 0;
  left: 0;
  width: 65px;
  height: 2px;
  background: #22d3ee;
  box-shadow: 0 0 12px #22d3ee;
  animation: modal2622Corner 3s ease-in-out infinite;
}
.modal-neon-close-2622 {
  position: absolute;
  right: 14px;
  top: 13px;
  width: 29px;
  height: 29px;
  border: 1px solid #1e3a4a;
  border-radius: 8px;
  background: #07111d;
  color: #64748b;
  font-size: 17px;
}
.modal-neon-icon-2622 {
  width: 55px;
  height: 55px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background: rgba(34,211,238,.08);
  border: 1px solid rgba(34,211,238,.3);
  color: #67e8f9;
  font-size: 23px;
  box-shadow:
    0 0 18px rgba(34,211,238,.15),
    inset 0 0 18px rgba(34,211,238,.05);
  animation: modal2622Icon 2s ease-in-out infinite;
}
.modal-neon-label-2622 {
  display: block;
  margin-top: 19px;
  color: #22d3ee;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .17em;
}
.modal-box-2622 h3 {
  position: relative;
  margin: 7px 0;
  font-size: 24px;
}
.modal-box-2622 p {
  position: relative;
  margin: 0;
  color: #64748b;
  font-size: 12px;
  line-height: 1.6;
}
.modal-security-bar-2622 {
  position: relative;
  width: 100%;
  height: 5px;
  margin: 21px 0 13px;
  border-radius: 999px;
  background: #0f1e2c;
  overflow: hidden;
}
.modal-security-bar-2622 span {
  display: block;
  width: 92%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg,#0891b2,#67e8f9);
  box-shadow: 0 0 12px rgba(34,211,238,.8);
  animation: modal2622Bar 2.5s ease-in-out infinite alternate;
}
.modal-security-status-2622 {
  position: relative;
  display: flex;
  align-items: center;
  gap: 7px;
  color: #64748b;
  font-size: 9px;
}
.modal-security-status-2622 i {
  color: #22d3ee;
  font-size: 13px;
}
.modal-neon-button-2622 {
  position: relative;
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  border: 1px solid rgba(34,211,238,.45);
  border-radius: 10px;
  background: rgba(34,211,238,.08);
  color: #67e8f9;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  box-shadow:
    inset 0 0 15px rgba(34,211,238,.03),
    0 0 15px rgba(34,211,238,.06);
  transition:
    background .25s ease,
    box-shadow .25s ease,
    transform .25s ease;
}
.modal-neon-button-2622:hover {
  transform: translateY(-2px);
  background: rgba(34,211,238,.14);
  box-shadow:
    inset 0 0 18px rgba(34,211,238,.06),
    0 0 22px rgba(34,211,238,.13);
}
@keyframes modal2622CyberEnter {
  from {
    opacity: 0;
    transform: scale(.94) translateY(12px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes modal2622Glow {
  0%,
  100% {
    transform: scale(.8);
    opacity: .4;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}
@keyframes modal2622Corner {
  0%,
  100% {
    width: 35px;
    opacity: .5;
  }
  50% {
    width: 130px;
    opacity: 1;
  }
}
@keyframes modal2622Icon {
  0%,
  100% {
    transform: scale(1);
    box-shadow:
      0 0 18px rgba(34,211,238,.15),
      inset 0 0 18px rgba(34,211,238,.05);
  }
  50% {
    transform: scale(1.05);
    box-shadow:
      0 0 28px rgba(34,211,238,.3),
      inset 0 0 25px rgba(34,211,238,.1);
  }
}
@keyframes modal2622Bar {
  from {
    width: 86%;
  }
  to {
    width: 96%;
  }
}`,
  },
  {
    id: 2623,
    name: "Nexus Command Center Modal",
    preview: (
      <div className="modal-preview-2623">
        <div className="modal-nexus-2623">
          <div className="modal-nexus-grid-2623"></div>
          <div className="modal-nexus-noise-2623"></div>
          <div className="modal-nexus-scanline-2623"></div>
          <div className="modal-nexus-border-2623"></div>
          <div className="modal-nexus-orbit modal-nexus-orbit-a-2623"></div>
          <div className="modal-nexus-orbit modal-nexus-orbit-b-2623"></div>
          <div className="modal-nexus-orbit modal-nexus-orbit-c-2623"></div>

          <div className="modal-nexus-header-2623">
            <div className="modal-nexus-brand-2623">
              <div className="modal-nexus-logo-2623">
                <i className="ri-command-line"></i>
                <span></span>
              </div>
              <div className="modal-nexus-title-2623">
                <span className="modal-nexus-overline-2623">NEXUS SYSTEM</span>
                <strong>Command Center</strong>
              </div>
            </div>
            <div className="modal-nexus-controls-2623">
              <button>
                <i className="ri-subtract-line"></i>
              </button>
              <button>
                <i className="ri-more-2-fill"></i>
              </button>
              <button className="modal-nexus-close-2623">
                <i className="ri-close-line"></i>
              </button>
            </div>
          </div>

          <div className="modal-nexus-divider-2623"></div>

          <div className="modal-nexus-body-2623">
            <div className="modal-nexus-main-2623">
              <div className="modal-nexus-status-row-2623">
                <div className="modal-nexus-live-2623">
                  <span></span>
                  LIVE SYSTEM
                </div>
                <div className="modal-nexus-clock-2623">
                  <i className="ri-time-line"></i>
                  08:42:16
                </div>
              </div>

              <div className="modal-nexus-heading-2623">
                <div className="modal-nexus-heading-icon-2623">
                  <i className="ri-pulse-line"></i>
                </div>
                <div>
                  <h3>System intelligence</h3>
                  <p>Everything is operating within optimal parameters.</p>
                </div>
              </div>

              <div className="modal-nexus-core-visual-2623">
                <div className="modal-nexus-core-ring-2623"></div>
                <div className="modal-nexus-core-ring-inner-2623"></div>
                <div className="modal-nexus-core-wave-2623"></div>
                <div className="modal-nexus-core-blob-2623"></div>
                <div className="modal-nexus-core-icon-2623">
                  <i className="ri-cpu-line"></i>
                </div>
                <div className="modal-nexus-core-center-2623">
                  <strong>98.7%</strong>
                  <span>EFFICIENCY</span>
                </div>
                <div className="modal-nexus-core-dot modal-nexus-core-dot-1-2623"></div>
                <div className="modal-nexus-core-dot modal-nexus-core-dot-2-2623"></div>
                <div className="modal-nexus-core-dot modal-nexus-core-dot-3-2623"></div>
                <div className="modal-nexus-core-dot modal-nexus-core-dot-4-2623"></div>
              </div>

              <div className="modal-nexus-metrics-2623">
                <div className="modal-nexus-metric-2623">
                  <div className="modal-nexus-metric-top-2623">
                    <span>
                      <i className="ri-cpu-line"></i>
                      CPU
                    </span>
                    <strong>34%</strong>
                  </div>
                  <div className="modal-nexus-bar-2623">
                    <span></span>
                  </div>
                </div>

                <div className="modal-nexus-metric-2623">
                  <div className="modal-nexus-metric-top-2623">
                    <span>
                      <i className="ri-database-2-line"></i>
                      MEMORY
                    </span>
                    <strong>62%</strong>
                  </div>
                  <div className="modal-nexus-bar modal-nexus-bar-purple-2623">
                    <span></span>
                  </div>
                </div>

                <div className="modal-nexus-metric-2623">
                  <div className="modal-nexus-metric-top-2623">
                    <span>
                      <i className="ri-global-line"></i>
                      NETWORK
                    </span>
                    <strong>91%</strong>
                  </div>
                  <div className="modal-nexus-bar modal-nexus-bar-blue-2623">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>

            <aside className="modal-nexus-sidebar-2623">
              <div className="modal-nexus-sidebar-heading-2623">
                <span>ACTIVITY</span>
                <button>
                  <i className="ri-refresh-line"></i>
                </button>
              </div>

              <div className="modal-nexus-event-2623">
                <div className="modal-nexus-event-icon modal-nexus-event-green-2623">
                  <i className="ri-check-line"></i>
                </div>
                <div>
                  <strong>Deployment finished</strong>
                  <span>Production · 2 min ago</span>
                </div>
                <i className="ri-arrow-right-up-line"></i>
              </div>

              <div className="modal-nexus-event-2623">
                <div className="modal-nexus-event-icon modal-nexus-event-blue-2623">
                  <i className="ri-upload-cloud-2-line"></i>
                </div>
                <div>
                  <strong>Backup synchronized</strong>
                  <span>Cloud · 8 min ago</span>
                </div>
                <i className="ri-arrow-right-up-line"></i>
              </div>

              <div className="modal-nexus-event-2623">
                <div className="modal-nexus-event-icon modal-nexus-event-purple-2623">
                  <i className="ri-shield-check-line"></i>
                </div>
                <div>
                  <strong>Security scan passed</strong>
                  <span>Threat engine · 14 min ago</span>
                </div>
                <i className="ri-arrow-right-up-line"></i>
              </div>

              <div className="modal-nexus-event-2623">
                <div className="modal-nexus-event-icon modal-nexus-event-orange-2623">
                  <i className="ri-speed-up-line"></i>
                </div>
                <div>
                  <strong>Optimization applied</strong>
                  <span>Runtime · 21 min ago</span>
                </div>
                <i className="ri-arrow-right-up-line"></i>
              </div>

              <div className="modal-nexus-side-card-2623">
                <div className="modal-nexus-side-card-top-2623">
                  <i className="ri-radar-line"></i>
                  <span>THREAT LEVEL</span>
                </div>
                <strong>LOW</strong>
                <div className="modal-nexus-threat-bars-2623">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <small>No active threats detected</small>
              </div>
            </aside>
          </div>

          <div className="modal-nexus-footer-2623">
            <div className="modal-nexus-footer-status-2623">
              <span></span>
              All systems operational
            </div>
            <div className="modal-nexus-footer-actions-2623">
              <button>
                <i className="ri-settings-4-line"></i>
              </button>
              <button className="modal-nexus-secondary-2623">Close</button>
              <button className="modal-nexus-primary-2623">
                Open dashboard
                <i className="ri-arrow-right-up-line"></i>
              </button>
            </div>
          </div>

          <div className="modal-nexus-particle modal-nexus-particle-1-2623"></div>
          <div className="modal-nexus-particle modal-nexus-particle-2-2623"></div>
          <div className="modal-nexus-particle modal-nexus-particle-3-2623"></div>
          <div className="modal-nexus-particle modal-nexus-particle-4-2623"></div>
          <div className="modal-nexus-particle modal-nexus-particle-5-2623"></div>
          <div className="modal-nexus-particle modal-nexus-particle-6-2623"></div>
          <div className="modal-nexus-particle modal-nexus-particle-7-2623"></div>
          <div className="modal-nexus-particle modal-nexus-particle-8-2623"></div>
          <div className="modal-nexus-particle modal-nexus-particle-9-2623"></div>
          <div className="modal-nexus-particle modal-nexus-particle-10-2623"></div>
        </div>
      </div>
    ),
    html: `<div class="modal-overlay-2623">
  <div class="modal-nexus-2623">
    <div class="modal-nexus-grid-2623"></div>
    <div class="modal-nexus-noise-2623"></div>
    <div class="modal-nexus-scanline-2623"></div>
    <div class="modal-nexus-border-2623"></div>
    <div class="modal-nexus-orbit modal-nexus-orbit-a-2623"></div>
    <div class="modal-nexus-orbit modal-nexus-orbit-b-2623"></div>
    <div class="modal-nexus-orbit modal-nexus-orbit-c-2623"></div>
    <div class="modal-nexus-header-2623">
      <div class="modal-nexus-brand-2623">
        <div class="modal-nexus-logo-2623">
          <i class="ri-command-line"></i>
          <span></span>
        </div>
        <div class="modal-nexus-title-2623">
          <span class="modal-nexus-overline-2623">NEXUS SYSTEM</span>
          <strong>Command Center</strong>
        </div>
      </div>
      <div class="modal-nexus-controls-2623">
        <button>
          <i class="ri-subtract-line"></i>
        </button>
        <button>
          <i class="ri-more-2-fill"></i>
        </button>
        <button class="modal-nexus-close-2623">
          <i class="ri-close-line"></i>
        </button>
      </div>
    </div>
    <div class="modal-nexus-divider-2623"></div>
    <div class="modal-nexus-body-2623">
      <div class="modal-nexus-main-2623">
        <div class="modal-nexus-status-row-2623">
          <div class="modal-nexus-live-2623">
            <span></span>
            LIVE SYSTEM
          </div>
          <div class="modal-nexus-clock-2623">
            <i class="ri-time-line"></i>
            08:42:16
          </div>
        </div>
        <div class="modal-nexus-heading-2623">
          <div class="modal-nexus-heading-icon-2623">
            <i class="ri-pulse-line"></i>
          </div>
          <div>
            <h3>System intelligence</h3>
            <p>Everything is operating within optimal parameters.</p>
          </div>
        </div>
        <div class="modal-nexus-core-visual-2623">
          <div class="modal-nexus-core-ring-2623"></div>
          <div class="modal-nexus-core-ring-inner-2623"></div>
          <div class="modal-nexus-core-wave-2623"></div>
          <div class="modal-nexus-core-blob-2623"></div>
          <div class="modal-nexus-core-icon-2623">
            <i class="ri-cpu-line"></i>
          </div>
          <div class="modal-nexus-core-center-2623">
            <strong>98.7%</strong>
            <span>EFFICIENCY</span>
          </div>
          <div class="modal-nexus-core-dot modal-nexus-core-dot-1-2623"></div>
          <div class="modal-nexus-core-dot modal-nexus-core-dot-2-2623"></div>
          <div class="modal-nexus-core-dot modal-nexus-core-dot-3-2623"></div>
          <div class="modal-nexus-core-dot modal-nexus-core-dot-4-2623"></div>
        </div>
        <div class="modal-nexus-metrics-2623">
          <div class="modal-nexus-metric-2623">
            <div class="modal-nexus-metric-top-2623">
              <span>
                <i class="ri-cpu-line"></i>
                CPU
              </span>
              <strong>34%</strong>
            </div>
            <div class="modal-nexus-bar-2623">
              <span></span>
            </div>
          </div>
          <div class="modal-nexus-metric-2623">
            <div class="modal-nexus-metric-top-2623">
              <span>
                <i class="ri-database-2-line"></i>
                MEMORY
              </span>
              <strong>62%</strong>
            </div>
            <div class="modal-nexus-bar modal-nexus-bar-purple-2623">
              <span></span>
            </div>
          </div>
          <div class="modal-nexus-metric-2623">
            <div class="modal-nexus-metric-top-2623">
              <span>
                <i class="ri-global-line"></i>
                NETWORK
              </span>
              <strong>91%</strong>
            </div>
            <div class="modal-nexus-bar modal-nexus-bar-blue-2623">
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <aside class="modal-nexus-sidebar-2623">
        <div class="modal-nexus-sidebar-heading-2623">
          <span>ACTIVITY</span>
          <button>
            <i class="ri-refresh-line"></i>
          </button>
        </div>
        <div class="modal-nexus-event-2623">
          <div class="modal-nexus-event-icon modal-nexus-event-green-2623">
            <i class="ri-check-line"></i>
          </div>
          <div>
            <strong>Deployment finished</strong>
            <span>Production · 2 min ago</span>
          </div>
          <i class="ri-arrow-right-up-line"></i>
        </div>
        <div class="modal-nexus-event-2623">
          <div class="modal-nexus-event-icon modal-nexus-event-blue-2623">
            <i class="ri-upload-cloud-2-line"></i>
          </div>
          <div>
            <strong>Backup synchronized</strong>
            <span>Cloud · 8 min ago</span>
          </div>
          <i class="ri-arrow-right-up-line"></i>
        </div>
        <div class="modal-nexus-event-2623">
          <div class="modal-nexus-event-icon modal-nexus-event-purple-2623">
            <i class="ri-shield-check-line"></i>
          </div>
          <div>
            <strong>Security scan passed</strong>
            <span>Threat engine · 14 min ago</span>
          </div>
          <i class="ri-arrow-right-up-line"></i>
        </div>
        <div class="modal-nexus-event-2623">
          <div class="modal-nexus-event-icon modal-nexus-event-orange-2623">
            <i class="ri-speed-up-line"></i>
          </div>
          <div>
            <strong>Optimization applied</strong>
            <span>Runtime · 21 min ago</span>
          </div>
          <i class="ri-arrow-right-up-line"></i>
        </div>
        <div class="modal-nexus-side-card-2623">
          <div class="modal-nexus-side-card-top-2623">
            <i class="ri-radar-line"></i>
            <span>THREAT LEVEL</span>
          </div>
          <strong>LOW</strong>
          <div class="modal-nexus-threat-bars-2623">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <small>No active threats detected</small>
        </div>
      </aside>
    </div>
    <div class="modal-nexus-footer-2623">
      <div class="modal-nexus-footer-status-2623">
        <span></span>
        All systems operational
      </div>
      <div class="modal-nexus-footer-actions-2623">
        <button>
          <i class="ri-settings-4-line"></i>
        </button>
        <button class="modal-nexus-secondary-2623">
          Close
        </button>
        <button class="modal-nexus-primary-2623">
          Open dashboard
          <i class="ri-arrow-right-up-line"></i>
        </button>
      </div>
    </div>
    <div class="modal-nexus-particle modal-nexus-particle-1-2623"></div>
    <div class="modal-nexus-particle modal-nexus-particle-2-2623"></div>
    <div class="modal-nexus-particle modal-nexus-particle-3-2623"></div>
    <div class="modal-nexus-particle modal-nexus-particle-4-2623"></div>
    <div class="modal-nexus-particle modal-nexus-particle-5-2623"></div>
    <div class="modal-nexus-particle modal-nexus-particle-6-2623"></div>
    <div class="modal-nexus-particle modal-nexus-particle-7-2623"></div>
    <div class="modal-nexus-particle modal-nexus-particle-8-2623"></div>
    <div class="modal-nexus-particle modal-nexus-particle-9-2623"></div>
    <div class="modal-nexus-particle modal-nexus-particle-10-2623"></div>
  </div>
</div>`,
    css: `.modal-overlay-2623 {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(2, 6, 23, 0.84);
  backdrop-filter: blur(16px);
  z-index: 9999;
  padding: 24px;
}
.modal-nexus-2623 {
  width: min(980px, 100%);
  min-height: 620px;
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  background:
    radial-gradient(circle at 16% 18%, rgba(56, 189, 248, 0.09), transparent 26%),
    radial-gradient(circle at 82% 28%, rgba(139, 92, 246, 0.1), transparent 30%),
    radial-gradient(circle at 55% 94%, rgba(37, 99, 235, 0.06), transparent 28%),
    #050816;
  border: 1px solid rgba(148, 163, 184, 0.2);
  box-shadow:
    0 40px 100px rgba(0, 0, 0, 0.65),
    0 0 80px rgba(59, 130, 246, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  color: #ffffff;
  font-family: Arial, sans-serif;
  isolation: isolate;
  animation: nexus2623Enter 0.65s cubic-bezier(.22,1,.36,1);
  transform-style: preserve-3d;
}
.modal-nexus-2623::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background:
    linear-gradient(120deg, rgba(255, 255, 255, 0.03), transparent 30%),
    linear-gradient(320deg, rgba(56, 189, 248, 0.025), transparent 32%);
  z-index: 0;
}
.modal-nexus-2623::after {
  content: "";
  position: absolute;
  top: -150px;
  left: 35%;
  width: 260px;
  height: 360px;
  transform: rotate(28deg);
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.045),
    transparent
  );
  filter: blur(18px);
  pointer-events: none;
  animation: nexus2623Reflection 8s ease-in-out infinite;
  z-index: 2;
}
.modal-nexus-grid-2623 {
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    linear-gradient(rgba(56, 189, 248, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(56, 189, 248, 0.045) 1px, transparent 1px);
  background-size: 38px 38px;
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.18)
  );
  animation: nexus2623Grid 14s linear infinite;
  pointer-events: none;
}
.modal-nexus-noise-2623 {
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: 0.25;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(255,255,255,.06) 0 1px, transparent 1px),
    radial-gradient(circle at 75% 15%, rgba(255,255,255,.05) 0 1px, transparent 1px),
    radial-gradient(circle at 45% 70%, rgba(255,255,255,.04) 0 1px, transparent 1px);
  background-size: 17px 17px, 23px 23px, 31px 31px;
  animation: nexus2623Noise 5s steps(3) infinite;
}
.modal-nexus-scanline-2623 {
  position: absolute;
  left: 0;
  right: 0;
  top: -10%;
  height: 120px;
  z-index: 6;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(56, 189, 248, 0.045),
    transparent
  );
  filter: blur(1px);
  animation: nexus2623Scan 7s linear infinite;
}
.modal-nexus-border-2623 {
  position: absolute;
  inset: 8px;
  z-index: 7;
  border-radius: 22px;
  border: 1px solid rgba(148, 163, 184, 0.06);
  pointer-events: none;
}
.modal-nexus-border-2623::before {
  content: "";
  position: absolute;
  left: 8%;
  right: 8%;
  top: -1px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(56, 189, 248, 0.65),
    transparent
  );
  box-shadow: 0 0 14px rgba(56, 189, 248, 0.45);
  animation: nexus2623TopLine 4s ease-in-out infinite;
}
.modal-nexus-orbit {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  transform-style: preserve-3d;
}
.modal-nexus-orbit-a-2623 {
  width: 540px;
  height: 160px;
  left: -145px;
  top: 90px;
  border: 1px solid rgba(56, 189, 248, 0.1);
  transform: rotate(-19deg);
  animation: nexus2623OrbitA 15s linear infinite;
}
.modal-nexus-orbit-b-2623 {
  width: 440px;
  height: 130px;
  right: -120px;
  bottom: 40px;
  border: 1px solid rgba(139, 92, 246, 0.11);
  transform: rotate(26deg);
  animation: nexus2623OrbitB 12s linear infinite reverse;
}
.modal-nexus-orbit-c-2623 {
  width: 260px;
  height: 260px;
  right: 100px;
  top: 160px;
  border: 1px dashed rgba(59, 130, 246, 0.07);
  animation: nexus2623OrbitC 18s linear infinite;
}
.modal-nexus-orbit-a-2623::before,
.modal-nexus-orbit-b-2623::before,
.modal-nexus-orbit-c-2623::before {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
.modal-nexus-orbit-a-2623::before {
  top: -3px;
  left: 35%;
  background: #38bdf8;
  box-shadow:
    0 0 6px #38bdf8,
    0 0 16px #0ea5e9;
}
.modal-nexus-orbit-b-2623::before {
  bottom: -3px;
  right: 25%;
  background: #a78bfa;
  box-shadow:
    0 0 6px #a78bfa,
    0 0 16px #8b5cf6;
}
.modal-nexus-orbit-c-2623::before {
  top: 14%;
  right: 3%;
  background: #60a5fa;
  box-shadow:
    0 0 6px #60a5fa,
    0 0 15px #3b82f6;
}
.modal-nexus-header-2623 {
  height: 82px;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 29px;
}
.modal-nexus-brand-2623 {
  display: flex;
  align-items: center;
  gap: 13px;
}
.modal-nexus-logo-2623 {
  width: 43px;
  height: 43px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  background:
    linear-gradient(145deg, rgba(56,189,248,.2), rgba(37,99,235,.07));
  border: 1px solid rgba(56,189,248,.24);
  color: #7dd3fc;
  font-size: 19px;
  box-shadow:
    0 0 20px rgba(56,189,248,.09),
    inset 0 0 14px rgba(56,189,248,.04);
  animation: nexus2623LogoPulse 3s ease-in-out infinite;
}
.modal-nexus-logo-2623::before {
  content: "";
  position: absolute;
  inset: -5px;
  border-radius: 16px;
  border: 1px solid rgba(56,189,248,.08);
  animation: nexus2623LogoRing 3s ease-out infinite;
}
.modal-nexus-logo-2623 span {
  position: absolute;
  width: 5px;
  height: 5px;
  right: 3px;
  bottom: 4px;
  border-radius: 50%;
  background: #22d3ee;
  box-shadow:
    0 0 5px #22d3ee,
    0 0 12px #06b6d4;
}
.modal-nexus-title-2623 {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.modal-nexus-overline-2623 {
  color: #38bdf8;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .19em;
}
.modal-nexus-title-2623 strong {
  color: #f8fafc;
  font-size: 16px;
  font-weight: 700;
}
.modal-nexus-controls-2623 {
  display: flex;
  align-items: center;
  gap: 6px;
}
.modal-nexus-controls-2623 button {
  width: 31px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(148,163,184,.12);
  border-radius: 9px;
  background: rgba(15,23,42,.5);
  color: #64748b;
  font-size: 14px;
  cursor: pointer;
  transition:
    transform .25s ease,
    color .25s ease,
    background .25s ease,
    border-color .25s ease;
}
.modal-nexus-controls-2623 button:hover {
  transform: translateY(-2px);
  color: #cbd5e1;
  border-color: rgba(148,163,184,.25);
  background: rgba(30,41,59,.75);
}
.modal-nexus-controls-2623 .modal-nexus-close-2623:hover {
  color: #fda4af;
  border-color: rgba(244,63,94,.3);
}
.modal-nexus-divider-2623 {
  position: relative;
  z-index: 10;
  height: 1px;
  margin: 0 29px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(148,163,184,.14) 15%,
    rgba(148,163,184,.08) 85%,
    transparent
  );
}
.modal-nexus-body-2623 {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: minmax(0,1.65fr) minmax(250px,.82fr);
  gap: 22px;
  padding: 25px 29px 21px;
}
.modal-nexus-main-2623 {
  min-width: 0;
}
.modal-nexus-status-row-2623 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 19px;
}
.modal-nexus-live-2623 {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 9px;
  border-radius: 999px;
  background: rgba(34,197,94,.06);
  border: 1px solid rgba(34,197,94,.14);
  color: #86efac;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .1em;
}
.modal-nexus-live-2623 span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow:
    0 0 5px #22c55e,
    0 0 12px rgba(34,197,94,.8);
  animation: nexus2623Live 1.6s ease-in-out infinite;
}
.modal-nexus-clock-2623 {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #64748b;
  font-size: 9px;
  font-variant-numeric: tabular-nums;
}
.modal-nexus-clock-2623 i {
  color: #38bdf8;
  font-size: 13px;
}
.modal-nexus-heading-2623 {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}
.modal-nexus-heading-icon-2623 {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(59,130,246,.08);
  border: 1px solid rgba(59,130,246,.15);
  color: #60a5fa;
  font-size: 18px;
  animation: nexus2623HeadingIcon 2.8s ease-in-out infinite;
}
.modal-nexus-heading-2623 h3 {
  margin: 0 0 4px;
  color: #f8fafc;
  font-size: 18px;
}
.modal-nexus-heading-2623 p {
  margin: 0;
  color: #64748b;
  font-size: 10px;
  line-height: 1.5;
}
.modal-nexus-core-visual-2623 {
  width: min(100%, 520px);
  height: 265px;
  position: relative;
  margin: 0 auto 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 21px;
  background:
    radial-gradient(circle at 50% 50%, rgba(56,189,248,.06), transparent 36%),
    linear-gradient(
      145deg,
      rgba(15,23,42,.75),
      rgba(2,6,23,.85)
    );
  border: 1px solid rgba(148,163,184,.1);
  overflow: hidden;
  box-shadow:
    inset 0 0 30px rgba(56,189,248,.02),
    0 15px 40px rgba(0,0,0,.15);
}
.modal-nexus-core-visual-2623::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 12% 30%, rgba(56,189,248,.04), transparent 15%),
    radial-gradient(circle at 87% 72%, rgba(139,92,246,.04), transparent 17%);
}
.modal-nexus-core-visual-2623::after {
  content: "";
  position: absolute;
  left: 7%;
  right: 7%;
  bottom: 18px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(56,189,248,.18),
    transparent
  );
}
.modal-nexus-core-ring-2623 {
  width: 190px;
  height: 190px;
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(56,189,248,.3);
  box-shadow:
    0 0 15px rgba(56,189,248,.07),
    inset 0 0 15px rgba(56,189,248,.04);
  animation: nexus2623CoreRing 10s linear infinite;
}
.modal-nexus-core-ring-2623::before {
  content: "";
  position: absolute;
  width: 9px;
  height: 9px;
  left: 50%;
  top: -5px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: #7dd3fc;
  box-shadow:
    0 0 7px #7dd3fc,
    0 0 17px #38bdf8,
    0 0 30px rgba(14,165,233,.7);
}
.modal-nexus-core-ring-2623::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  right: 12%;
  bottom: 15%;
  border-radius: 50%;
  background: #60a5fa;
  box-shadow:
    0 0 6px #60a5fa,
    0 0 14px #3b82f6;
}
.modal-nexus-core-ring-inner-2623 {
  width: 153px;
  height: 153px;
  position: absolute;
  border-radius: 50%;
  border: 1px dashed rgba(167,139,250,.35);
  box-shadow:
    0 0 14px rgba(139,92,246,.08),
    inset 0 0 14px rgba(139,92,246,.04);
  animation: nexus2623CoreRingInner 7s linear infinite reverse;
}
.modal-nexus-core-ring-inner-2623::before {
  content: "";
  position: absolute;
  width: 7px;
  height: 7px;
  left: 9%;
  top: 39%;
  border-radius: 50%;
  background: #c4b5fd;
  box-shadow:
    0 0 6px #c4b5fd,
    0 0 14px #a78bfa;
}
.modal-nexus-core-wave-2623 {
  position: absolute;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: rgba(34,211,238,.65);
  border-right-color: rgba(96,165,250,.45);
  border-bottom-color: rgba(139,92,246,.3);
  box-shadow:
    0 0 20px rgba(34,211,238,.09);
  animation:
    nexus2623Wave 4s linear infinite,
    nexus2623WavePulse 2.5s ease-in-out infinite;
}
.modal-nexus-core-blob-2623 {
  width: 112px;
  height: 112px;
  position: absolute;
  border-radius: 50%;
  background:
    radial-gradient(
      circle at 35% 27%,
      #bae6fd 0%,
      #38bdf8 14%,
      #2563eb 34%,
      #312e81 62%,
      #0f172a 86%
    );
  box-shadow:
    0 0 20px rgba(56,189,248,.4),
    0 0 45px rgba(37,99,235,.2),
    inset 0 0 20px rgba(191,219,254,.13);
  animation: nexus2623Blob 3.5s ease-in-out infinite;
}
.modal-nexus-core-blob-2623::before {
  content: "";
  position: absolute;
  inset: -14px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(56,189,248,.14),
    transparent 69%
  );
  filter: blur(7px);
  animation: nexus2623BlobAura 2.6s ease-in-out infinite;
}
.modal-nexus-core-icon-2623 {
  width: 64px;
  height: 64px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #e0f2fe;
  font-size: 24px;
  background: rgba(15,23,42,.28);
  border: 1px solid rgba(186,230,253,.16);
  box-shadow:
    inset 0 0 14px rgba(255,255,255,.04),
    0 0 10px rgba(56,189,248,.1);
  z-index: 3;
  animation: nexus2623CoreIcon 2.2s ease-in-out infinite;
}
.modal-nexus-core-center-2623 {
  position: absolute;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  margin-top: 115px;
  padding: 6px 11px;
  border-radius: 999px;
  background: rgba(2,6,23,.6);
  border: 1px solid rgba(148,163,184,.09);
  backdrop-filter: blur(8px);
}
.modal-nexus-core-center-2623 strong {
  color: #e0f2fe;
  font-size: 14px;
  font-weight: 800;
}
.modal-nexus-core-center-2623 span {
  color: #64748b;
  font-size: 6px;
  font-weight: 800;
  letter-spacing: .18em;
}
.modal-nexus-core-dot {
  position: absolute;
  z-index: 5;
  border-radius: 50%;
  background: #67e8f9;
  box-shadow:
    0 0 5px #67e8f9,
    0 0 13px #22d3ee,
    0 0 25px rgba(34,211,238,.7);
}
.modal-nexus-core-dot-1-2623 {
  width: 5px;
  height: 5px;
  left: 24%;
  top: 36%;
  animation: nexus2623Dot1 3.5s ease-in-out infinite;
}
.modal-nexus-core-dot-2-2623 {
  width: 4px;
  height: 4px;
  right: 22%;
  top: 29%;
  animation: nexus2623Dot2 4.1s ease-in-out infinite;
}
.modal-nexus-core-dot-3-2623 {
  width: 6px;
  height: 6px;
  right: 28%;
  bottom: 31%;
  animation: nexus2623Dot3 3.2s ease-in-out infinite;
}
.modal-nexus-core-dot-4-2623 {
  width: 4px;
  height: 4px;
  left: 29%;
  bottom: 27%;
  animation: nexus2623Dot4 4.4s ease-in-out infinite;
}
.modal-nexus-metrics-2623 {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 10px;
}
.modal-nexus-metric-2623 {
  padding: 11px;
  border-radius: 12px;
  background: rgba(15,23,42,.5);
  border: 1px solid rgba(148,163,184,.08);
  transition:
    transform .3s ease,
    border-color .3s ease,
    box-shadow .3s ease;
}
.modal-nexus-metric-2623:hover {
  transform: translateY(-3px);
  border-color: rgba(56,189,248,.18);
  box-shadow: 0 10px 25px rgba(0,0,0,.14);
}
.modal-nexus-metric-top-2623 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 9px;
}
.modal-nexus-metric-top-2623 span {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #64748b;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .08em;
}
.modal-nexus-metric-top-2623 span i {
  color: #38bdf8;
  font-size: 12px;
}
.modal-nexus-metric-top-2623 strong {
  color: #cbd5e1;
  font-size: 9px;
}
.modal-nexus-bar {
  height: 4px;
  border-radius: 999px;
  background: #0f172a;
  overflow: hidden;
}
.modal-nexus-bar span {
  display: block;
  width: 34%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg,#0891b2,#67e8f9);
  box-shadow: 0 0 10px rgba(34,211,238,.55);
  animation: nexus2623CpuBar 3s ease-in-out infinite alternate;
}
.modal-nexus-bar-purple-2623 span {
  width: 62%;
  background: linear-gradient(90deg,#7c3aed,#c4b5fd);
  box-shadow: 0 0 10px rgba(139,92,246,.55);
  animation: nexus2623MemoryBar 3.4s ease-in-out infinite alternate;
}
.modal-nexus-bar-blue-2623 span {
  width: 91%;
  background: linear-gradient(90deg,#2563eb,#60a5fa);
  box-shadow: 0 0 10px rgba(59,130,246,.55);
  animation: nexus2623NetworkBar 2.8s ease-in-out infinite alternate;
}
.modal-nexus-sidebar-2623 {
  min-width: 0;
  padding: 15px;
  border-radius: 17px;
  background: rgba(15,23,42,.42);
  border: 1px solid rgba(148,163,184,.08);
  backdrop-filter: blur(8px);
}
.modal-nexus-sidebar-heading-2623 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 13px;
}
.modal-nexus-sidebar-heading-2623 > span {
  color: #64748b;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .14em;
}
.modal-nexus-sidebar-heading-2623 button {
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(148,163,184,.1);
  border-radius: 7px;
  background: transparent;
  color: #64748b;
  cursor: pointer;
}
.modal-nexus-sidebar-heading-2623 button i {
  animation: nexus2623Refresh 4s linear infinite;
}
.modal-nexus-event-2623 {
  display: grid;
  grid-template-columns: 27px minmax(0,1fr) 13px;
  align-items: center;
  gap: 8px;
  padding: 9px 0;
  border-bottom: 1px solid rgba(148,163,184,.06);
  transition: transform .25s ease;
}
.modal-nexus-event-2623:hover {
  transform: translateX(3px);
}
.modal-nexus-event-icon {
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 12px;
}
.modal-nexus-event-green-2623 {
  background: rgba(34,197,94,.08);
  color: #4ade80;
}
.modal-nexus-event-blue-2623 {
  background: rgba(59,130,246,.08);
  color: #60a5fa;
}
.modal-nexus-event-purple-2623 {
  background: rgba(139,92,246,.09);
  color: #a78bfa;
}
.modal-nexus-event-orange-2623 {
  background: rgba(245,158,11,.09);
  color: #fbbf24;
}
.modal-nexus-event-2623 > div:nth-child(2) {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.modal-nexus-event-2623 strong {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #cbd5e1;
  font-size: 8px;
}
.modal-nexus-event-2623 span {
  color: #475569;
  font-size: 7px;
}
.modal-nexus-event-2623 > i:last-child {
  color: #334155;
  font-size: 11px;
}
.modal-nexus-side-card-2623 {
  margin-top: 14px;
  padding: 12px;
  border-radius: 12px;
  background:
    radial-gradient(circle at 80% 15%, rgba(34,197,94,.06), transparent 35%),
    rgba(2,6,23,.45);
  border: 1px solid rgba(34,197,94,.09);
}
.modal-nexus-side-card-top-2623 {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 7px;
}
.modal-nexus-side-card-top-2623 i {
  color: #4ade80;
  font-size: 13px;
}
.modal-nexus-side-card-top-2623 span {
  color: #64748b;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .12em;
}
.modal-nexus-side-card-2623 > strong {
  display: block;
  color: #86efac;
  font-size: 17px;
  letter-spacing: .05em;
}
.modal-nexus-threat-bars-2623 {
  display: grid;
  grid-template-columns: repeat(8,1fr);
  gap: 3px;
  margin: 9px 0 7px;
}
.modal-nexus-threat-bars-2623 span {
  height: 4px;
  border-radius: 999px;
  background: rgba(34,197,94,.5);
  box-shadow: 0 0 5px rgba(34,197,94,.15);
}
.modal-nexus-threat-bars-2623 span:nth-child(7),
.modal-nexus-threat-bars-2623 span:nth-child(8) {
  opacity: .28;
}
.modal-nexus-side-card-2623 small {
  color: #475569;
  font-size: 7px;
}
.modal-nexus-footer-2623 {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 17px 29px 19px;
  border-top: 1px solid rgba(148,163,184,.08);
  background: rgba(2,6,23,.22);
}
.modal-nexus-footer-status-2623 {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #64748b;
  font-size: 8px;
}
.modal-nexus-footer-status-2623 span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow:
    0 0 6px #22c55e,
    0 0 14px rgba(34,197,94,.5);
  animation: nexus2623FooterStatus 2s ease-in-out infinite;
}
.modal-nexus-footer-actions-2623 {
  display: flex;
  align-items: center;
  gap: 7px;
}
.modal-nexus-footer-actions-2623 > button {
  border: 1px solid rgba(148,163,184,.11);
  border-radius: 9px;
  cursor: pointer;
  transition:
    transform .25s ease,
    border-color .25s ease,
    background .25s ease,
    box-shadow .25s ease;
}
.modal-nexus-footer-actions-2623 > button:first-child {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15,23,42,.55);
  color: #64748b;
}
.modal-nexus-footer-actions-2623 > button:first-child:hover {
  transform: rotate(20deg);
  color: #cbd5e1;
}
.modal-nexus-secondary-2623 {
  padding: 9px 14px;
  background: rgba(15,23,42,.55);
  color: #94a3b8;
  font-size: 9px;
  font-weight: 700;
}
.modal-nexus-primary-2623 {
  min-height: 34px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  gap: 7px;
  background: linear-gradient(135deg,#0ea5e9,#2563eb);
  border-color: rgba(125,211,252,.24) !important;
  color: #fff;
  font-size: 9px;
  font-weight: 800;
  box-shadow: 0 8px 22px rgba(37,99,235,.2);
}
.modal-nexus-footer-actions-2623 > button:hover {
  transform: translateY(-2px);
  border-color: rgba(148,163,184,.25);
}
.modal-nexus-primary-2623:hover {
  box-shadow:
    0 12px 30px rgba(37,99,235,.32),
    0 0 20px rgba(56,189,248,.1);
}
.modal-nexus-particle {
  position: absolute;
  border-radius: 50%;
  background: #7dd3fc;
  box-shadow:
    0 0 5px #7dd3fc,
    0 0 12px #38bdf8,
    0 0 20px rgba(14,165,233,.7);
  pointer-events: none;
  z-index: 8;
}
.modal-nexus-particle-1-2623 {
  width: 4px;
  height: 4px;
  top: 20%;
  left: 8%;
  animation: nexus2623Particle1 4s ease-in-out infinite;
}
.modal-nexus-particle-2-2623 {
  width: 3px;
  height: 3px;
  top: 33%;
  right: 5%;
  animation: nexus2623Particle2 4.7s ease-in-out infinite;
}
.modal-nexus-particle-3-2623 {
  width: 5px;
  height: 5px;
  top: 53%;
  left: 4%;
  animation: nexus2623Particle3 5.2s ease-in-out infinite;
}
.modal-nexus-particle-4-2623 {
  width: 3px;
  height: 3px;
  top: 76%;
  right: 10%;
  animation: nexus2623Particle4 4.3s ease-in-out infinite;
}
.modal-nexus-particle-5-2623 {
  width: 4px;
  height: 4px;
  top: 11%;
  right: 29%;
  animation: nexus2623Particle5 5.4s ease-in-out infinite;
}
.modal-nexus-particle-6-2623 {
  width: 3px;
  height: 3px;
  bottom: 14%;
  left: 26%;
  animation: nexus2623Particle6 4.6s ease-in-out infinite;
}
.modal-nexus-particle-7-2623 {
  width: 5px;
  height: 5px;
  bottom: 21%;
  right: 34%;
  animation: nexus2623Particle7 5.7s ease-in-out infinite;
}
.modal-nexus-particle-8-2623 {
  width: 3px;
  height: 3px;
  top: 45%;
  right: 30%;
  animation: nexus2623Particle8 3.8s ease-in-out infinite;
}
.modal-nexus-particle-9-2623 {
  width: 4px;
  height: 4px;
  bottom: 7%;
  right: 20%;
  animation: nexus2623Particle9 4.9s ease-in-out infinite;
}
.modal-nexus-particle-10-2623 {
  width: 3px;
  height: 3px;
  top: 65%;
  left: 34%;
  animation: nexus2623Particle10 5.1s ease-in-out infinite;
}
@keyframes nexus2623Enter {
  0% {
    opacity: 0;
    transform: translateY(25px) scale(.94) rotateX(4deg);
  }
  65% {
    opacity: 1;
    transform: translateY(-3px) scale(1.015) rotateX(-1deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0);
  }
}
@keyframes nexus2623Reflection {
  0% {
    left: 25%;
    opacity: 0;
  }
  15% {
    opacity: .35;
  }
  35% {
    opacity: .7;
  }
  55% {
    opacity: .15;
  }
  100% {
    left: 80%;
    opacity: 0;
  }
}
@keyframes nexus2623Grid {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(38px);
  }
}
@keyframes nexus2623Noise {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .18;
  }
  25% {
    transform: translate(1px,-1px);
    opacity: .28;
  }
  50% {
    transform: translate(-1px,1px);
    opacity: .21;
  }
  75% {
    transform: translate(1px,1px);
    opacity: .26;
  }
}
@keyframes nexus2623Scan {
  0% {
    top: -20%;
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  48% {
    opacity: .75;
  }
  65% {
    opacity: .1;
  }
  100% {
    top: 120%;
    opacity: 0;
  }
}
@keyframes nexus2623TopLine {
  0%,
  100% {
    width: 20%;
    left: 40%;
    opacity: .4;
  }
  50% {
    width: 55%;
    left: 22.5%;
    opacity: 1;
  }
}
@keyframes nexus2623OrbitA {
  0% {
    transform: rotate(-19deg) rotateZ(0deg) scale(1);
  }
  50% {
    transform: rotate(-19deg) rotateZ(180deg) scale(1.03);
  }
  100% {
    transform: rotate(-19deg) rotateZ(360deg) scale(1);
  }
}
@keyframes nexus2623OrbitB {
  0% {
    transform: rotate(26deg) rotateZ(0deg);
  }
  100% {
    transform: rotate(26deg) rotateZ(360deg);
  }
}
@keyframes nexus2623OrbitC {
  0% {
    transform: rotate(0deg) scale(.96);
  }
  50% {
    transform: rotate(180deg) scale(1.04);
  }
  100% {
    transform: rotate(360deg) scale(.96);
  }
}
@keyframes nexus2623LogoPulse {
  0%,
  100% {
    transform: scale(1);
    box-shadow:
      0 0 20px rgba(56,189,248,.09),
      inset 0 0 14px rgba(56,189,248,.04);
  }
  50% {
    transform: scale(1.05);
    box-shadow:
      0 0 30px rgba(56,189,248,.2),
      inset 0 0 18px rgba(56,189,248,.08);
  }
}
@keyframes nexus2623LogoRing {
  0% {
    transform: scale(.82);
    opacity: .6;
  }
  70% {
    transform: scale(1.28);
    opacity: 0;
  }
  100% {
    transform: scale(1.28);
    opacity: 0;
  }
}
@keyframes nexus2623Live {
  0%,
  100% {
    transform: scale(.7);
    opacity: .55;
  }
  50% {
    transform: scale(1.15);
    opacity: 1;
  }
}
@keyframes nexus2623HeadingIcon {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(59,130,246,0);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 22px rgba(59,130,246,.13);
  }
}
@keyframes nexus2623CoreRing {
  0% {
    transform: rotate(0deg) scale(.98);
  }
  50% {
    transform: rotate(180deg) scale(1.03);
  }
  100% {
    transform: rotate(360deg) scale(.98);
  }
}
@keyframes nexus2623CoreRingInner {
  0% {
    transform: rotate(0deg) scale(.98);
  }
  50% {
    transform: rotate(180deg) scale(1.05);
  }
  100% {
    transform: rotate(360deg) scale(.98);
  }
}
@keyframes nexus2623Wave {
  0% {
    transform: rotate(0deg) scale(.95);
  }
  50% {
    transform: rotate(180deg) scale(1.08);
  }
  100% {
    transform: rotate(360deg) scale(.95);
  }
}
@keyframes nexus2623WavePulse {
  0%,
  100% {
    opacity: .45;
  }
  50% {
    opacity: 1;
  }
}
@keyframes nexus2623Blob {
  0%,
  100% {
    transform: scale(.94) translateY(0);
  }
  25% {
    transform: scale(1.02) translateY(-2px);
  }
  50% {
    transform: scale(1.08) translateY(-4px);
  }
  75% {
    transform: scale(1.01) translateY(-2px);
  }
}
@keyframes nexus2623BlobAura {
  0%,
  100% {
    transform: scale(.88);
    opacity: .4;
  }
  50% {
    transform: scale(1.18);
    opacity: 1;
  }
}
@keyframes nexus2623CoreIcon {
  0%,
  100% {
    transform: scale(.95);
    text-shadow: 0 0 5px rgba(186,230,253,.3);
  }
  50% {
    transform: scale(1.1);
    text-shadow:
      0 0 8px rgba(255,255,255,.7),
      0 0 20px rgba(56,189,248,.6);
  }
}
@keyframes nexus2623Dot1 {
  0%,
  100% {
    transform: translate(0,0) scale(.7);
    opacity: .25;
  }
  25% {
    transform: translate(16px,-11px) scale(1.2);
    opacity: 1;
  }
  50% {
    transform: translate(-5px,18px) scale(.8);
    opacity: .4;
  }
  75% {
    transform: translate(18px,5px) scale(1.05);
    opacity: .9;
  }
}
@keyframes nexus2623Dot2 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .2;
  }
  35% {
    transform: translate(-17px,13px);
    opacity: 1;
  }
  70% {
    transform: translate(5px,-15px);
    opacity: .4;
  }
}
@keyframes nexus2623Dot3 {
  0%,
  100% {
    transform: translate(0,0) scale(.7);
    opacity: .25;
  }
  40% {
    transform: translate(-18px,-15px) scale(1.2);
    opacity: 1;
  }
  80% {
    transform: translate(9px,12px) scale(.65);
    opacity: .35;
  }
}
@keyframes nexus2623Dot4 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .2;
  }
  50% {
    transform: translate(15px,-16px);
    opacity: 1;
  }
}
@keyframes nexus2623CpuBar {
  from {
    width: 29%;
  }
  to {
    width: 41%;
  }
}
@keyframes nexus2623MemoryBar {
  from {
    width: 57%;
  }
  to {
    width: 67%;
  }
}
@keyframes nexus2623NetworkBar {
  from {
    width: 87%;
  }
  to {
    width: 95%;
  }
}
@keyframes nexus2623Refresh {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes nexus2623FooterStatus {
  0%,
  100% {
    transform: scale(.8);
    opacity: .65;
  }
  50% {
    transform: scale(1.15);
    opacity: 1;
  }
}
@keyframes nexus2623Particle1 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .2;
  }
  50% {
    transform: translate(22px,-18px);
    opacity: 1;
  }
}
@keyframes nexus2623Particle2 {
  0%,
  100% {
    transform: translate(0,0) scale(.7);
    opacity: .15;
  }
  40% {
    transform: translate(-18px,19px) scale(1.2);
    opacity: 1;
  }
  80% {
    transform: translate(-9px,-14px) scale(.8);
    opacity: .3;
  }
}
@keyframes nexus2623Particle3 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .15;
  }
  50% {
    transform: translate(21px,14px);
    opacity: .9;
  }
}
@keyframes nexus2623Particle4 {
  0%,
  100% {
    transform: translate(0,0) scale(.7);
    opacity: .2;
  }
  50% {
    transform: translate(-18px,-22px) scale(1.25);
    opacity: 1;
  }
}
@keyframes nexus2623Particle5 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .25;
  }
  35% {
    transform: translate(20px,13px);
    opacity: 1;
  }
  70% {
    transform: translate(-8px,25px);
    opacity: .3;
  }
}
@keyframes nexus2623Particle6 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .2;
  }
  50% {
    transform: translate(17px,-17px);
    opacity: .9;
  }
}
@keyframes nexus2623Particle7 {
  0%,
  100% {
    transform: translate(0,0) scale(.7);
    opacity: .2;
  }
  45% {
    transform: translate(-21px,-13px) scale(1.15);
    opacity: 1;
  }
  80% {
    transform: translate(12px,17px) scale(.8);
    opacity: .3;
  }
}
@keyframes nexus2623Particle8 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .15;
  }
  50% {
    transform: translate(-17px,18px);
    opacity: 1;
  }
}
@keyframes nexus2623Particle9 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .2;
  }
  30% {
    transform: translate(-14px,-20px);
    opacity: 1;
  }
  70% {
    transform: translate(17px,-5px);
    opacity: .35;
  }
}
@keyframes nexus2623Particle10 {
  0%,
  100% {
    transform: translate(0,0) scale(.6);
    opacity: .2;
  }
  50% {
    transform: translate(23px,-14px) scale(1.2);
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .modal-nexus-2623 *,
  .modal-nexus-2623::before,
  .modal-nexus-2623::after {
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
  }
}
@media (max-width: 900px) {
  .modal-nexus-2623 {
    min-height: auto;
  }
  .modal-nexus-body-2623 {
    grid-template-columns: 1fr;
  }
  .modal-nexus-sidebar-2623 {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 8px;
  }
  .modal-nexus-sidebar-heading-2623 {
    grid-column: 1/-1;
  }
  .modal-nexus-side-card-2623 {
    grid-column: 1/-1;
  }
}
@media (max-width: 650px) {
  .modal-nexus-header-2623 {
    height: auto;
    padding: 20px;
    gap: 15px;
  }
  .modal-nexus-divider-2623 {
    margin: 0 20px;
  }
  .modal-nexus-body-2623 {
    padding: 20px;
  }
  .modal-nexus-footer-2623 {
    padding: 15px 20px 18px;
    flex-direction: column;
    align-items: stretch;
  }
  .modal-nexus-footer-actions-2623 {
    justify-content: stretch;
  }
  .modal-nexus-footer-actions-2623 > button {
    flex: 1;
  }
  .modal-nexus-metrics-2623 {
    grid-template-columns: 1fr;
  }
  .modal-nexus-core-visual-2623 {
    height: 235px;
  }
}
@media (max-width: 480px) {
  .modal-nexus-2623 {
    border-radius: 19px;
  }
  .modal-nexus-controls-2623 button:nth-child(1),
  .modal-nexus-controls-2623 button:nth-child(2) {
    display: none;
  }
  .modal-nexus-sidebar-2623 {
    display: block;
  }
  .modal-nexus-event-2623 {
    padding: 8px 0;
  }
  .modal-nexus-core-ring-2623 {
    width: 165px;
    height: 165px;
  }
  .modal-nexus-core-ring-inner-2623 {
    width: 135px;
    height: 135px;
  }
  .modal-nexus-core-wave-2623 {
    width: 112px;
    height: 112px;
  }
  .modal-nexus-core-blob-2623 {
    width: 100px;
    height: 100px;
  }
  .modal-nexus-core-icon-2623 {
    width: 58px;
    height: 58px;
  }
  .modal-nexus-core-center-2623 {
    margin-top: 105px;
  }
}
`,
  },
  {
    id: 2624,
    name: "Gravity Core Command Modal",
    preview: (
      <div className="modal-preview-2624">
        <div className="gravity-modal-2624">
          <div className="gravity-stars-2624"></div>
          <div className="gravity-noise-2624"></div>
          <div className="gravity-scanline-2624"></div>
          <div className="gravity-border-2624"></div>
          <div className="gravity-header-2624">
            <div className="gravity-brand-2624">
              <div className="gravity-logo-2624">
                <i className="ri-focus-3-line"></i>
                <span></span>
              </div>
              <div className="gravity-title-wrap-2624">
                <span className="gravity-overline-2624">
                  ASTROPHYSICS CONTROL SYSTEM
                </span>
                <strong>GRAVITY CORE</strong>
              </div>
            </div>
            <div className="gravity-header-right-2624">
              <div className="gravity-live-2624">
                <span></span>
                FIELD STABLE
              </div>
              <div className="gravity-controls-2624">
                <button type="button">
                  <i className="ri-subtract-line"></i>
                </button>
                <button type="button">
                  <i className="ri-expand-diagonal-line"></i>
                </button>
                <button type="button" className="gravity-close-2624">
                  <i className="ri-close-line"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="gravity-divider-2624"></div>
          <div className="gravity-body-2624">
            <section className="gravity-main-2624">
              <div className="gravity-intro-2624">
                <div className="gravity-intro-icon-2624">
                  <i className="ri-earth-line"></i>
                </div>
                <div>
                  <h2>Singularity Monitoring</h2>
                  <p>
                    Real-time gravitational field visualization and energy
                    telemetry.
                  </p>
                </div>
              </div>
              <div className="gravity-core-stage-2624">
                <div className="gravity-outer-field-2624"></div>
                <div className="gravity-field-ring-2624 gravity-field-ring-1-2624"></div>
                <div className="gravity-field-ring-2624 gravity-field-ring-2-2624"></div>
                <div className="gravity-field-ring-2624 gravity-field-ring-3-2624"></div>
                <div className="gravity-field-ring-2624 gravity-field-ring-4-2624"></div>
                <div className="gravity-orbit-2624 gravity-orbit-a-2624"></div>
                <div className="gravity-orbit-2624 gravity-orbit-b-2624"></div>
                <div className="gravity-orbit-2624 gravity-orbit-c-2624"></div>
                <div className="gravity-orbit-2624 gravity-orbit-d-2624"></div>
                <div className="gravity-particle gravity-particle-1-2624"></div>
                <div className="gravity-particle gravity-particle-2-2624"></div>
                <div className="gravity-particle gravity-particle-3-2624"></div>
                <div className="gravity-particle gravity-particle-4-2624"></div>
                <div className="gravity-particle gravity-particle-5-2624"></div>
                <div className="gravity-particle gravity-particle-6-2624"></div>
                <div className="gravity-particle gravity-particle-7-2624"></div>
                <div className="gravity-particle gravity-particle-8-2624"></div>
                <div className="gravity-particle gravity-particle-9-2624"></div>
                <div className="gravity-particle gravity-particle-10-2624"></div>
                <div className="gravity-particle gravity-particle-11-2624"></div>
                <div className="gravity-particle gravity-particle-12-2624"></div>
                <div className="gravity-wave gravity-wave-1-2624"></div>
                <div className="gravity-wave gravity-wave-2-2624"></div>
                <div className="gravity-wave gravity-wave-3-2624"></div>
                <div className="gravity-lensing-2624"></div>
                <div className="gravity-black-hole-2624">
                  <div className="gravity-accretion-2624">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="gravity-event-horizon-2624"></div>
                  <div className="gravity-singularity-2624">
                    <i className="ri-asterisk"></i>
                  </div>
                </div>
                <div className="gravity-core-label-2624">
                  <span>CORE MASS</span>
                  <strong>98.42 M☉</strong>
                  <small>CRITICAL DENSITY</small>
                </div>
                <div className="gravity-axis gravity-axis-x-2624"></div>
                <div className="gravity-axis gravity-axis-y-2624"></div>
                <div className="gravity-axis gravity-axis-z-2624"></div>
                <div className="gravity-coordinate gravity-coordinate-top-2624">
                  X 04.882
                </div>
                <div className="gravity-coordinate gravity-coordinate-right-2624">
                  Y 18.204
                </div>
                <div className="gravity-coordinate gravity-coordinate-bottom-2624">
                  Z 09.731
                </div>
                <div className="gravity-coordinate gravity-coordinate-left-2624">
                  R 02.417
                </div>
                <div className="gravity-field-readout-2624">
                  <span className="gravity-readout-dot-2624"></span>
                  FIELD INTENSITY
                  <strong>8.71 × 10⁹ N</strong>
                </div>
                <div className="gravity-stage-corner gravity-stage-corner-tl-2624"></div>
                <div className="gravity-stage-corner gravity-stage-corner-tr-2624"></div>
                <div className="gravity-stage-corner gravity-stage-corner-bl-2624"></div>
                <div className="gravity-stage-corner gravity-stage-corner-br-2624"></div>
              </div>
              <div className="gravity-metrics-2624">
                <div className="gravity-metric-2624">
                  <div className="gravity-metric-head-2624">
                    <span>
                      <i className="ri-radar-line"></i>
                      FIELD STRENGTH
                    </span>
                    <strong>87.2%</strong>
                  </div>
                  <div className="gravity-progress-2624">
                    <span></span>
                  </div>
                  <small>Nominal gravitational pressure</small>
                </div>
                <div className="gravity-metric-2624 gravity-metric-violet-2624">
                  <div className="gravity-metric-head-2624">
                    <span>
                      <i className="ri-flashlight-line"></i>
                      ENERGY OUTPUT
                    </span>
                    <strong>64.8%</strong>
                  </div>
                  <div className="gravity-progress-2624">
                    <span></span>
                  </div>
                  <small>Available extraction capacity</small>
                </div>
                <div className="gravity-metric-2624 gravity-metric-blue-2624">
                  <div className="gravity-metric-head-2624">
                    <span>
                      <i className="ri-pulse-line"></i>
                      OSCILLATION
                    </span>
                    <strong>12.4 Hz</strong>
                  </div>
                  <div className="gravity-progress-2624">
                    <span></span>
                  </div>
                  <small>Stable field frequency</small>
                </div>
              </div>
            </section>
            <aside className="gravity-sidebar-2624">
              <div className="gravity-sidebar-heading-2624">
                <div>
                  <span>FIELD TELEMETRY</span>
                  <strong>Live Sensors</strong>
                </div>
                <button type="button">
                  <i className="ri-refresh-line"></i>
                </button>
              </div>
              <div className="gravity-sensor-2624">
                <div className="gravity-sensor-icon gravity-sensor-cyan-2624">
                  <i className="ri-temp-hot-line"></i>
                </div>
                <div className="gravity-sensor-copy-2624">
                  <span>CORE TEMPERATURE</span>
                  <strong>4.72 × 10⁶ K</strong>
                  <small>+0.04% / 10s</small>
                </div>
                <i className="ri-arrow-up-line"></i>
              </div>
              <div className="gravity-sensor-2624">
                <div className="gravity-sensor-icon gravity-sensor-purple-2624">
                  <i className="ri-speed-up-line"></i>
                </div>
                <div className="gravity-sensor-copy-2624">
                  <span>ESCAPE VELOCITY</span>
                  <strong>1.48 × 10⁸ m/s</strong>
                  <small>+0.01% / 10s</small>
                </div>
                <i className="ri-arrow-up-line"></i>
              </div>
              <div className="gravity-sensor-2624">
                <div className="gravity-sensor-icon gravity-sensor-blue-2624">
                  <i className="ri-shield-flash-line"></i>
                </div>
                <div className="gravity-sensor-copy-2624">
                  <span>CONTAINMENT</span>
                  <strong>99.94%</strong>
                  <small>Nominal stability</small>
                </div>
                <i className="ri-checkbox-circle-line"></i>
              </div>
              <div className="gravity-sensor-2624">
                <div className="gravity-sensor-icon gravity-sensor-green-2624">
                  <i className="ri-signal-wifi-3-line"></i>
                </div>
                <div className="gravity-sensor-copy-2624">
                  <span>SENSOR LINK</span>
                  <strong>ONLINE</strong>
                  <small>Latency 1.8 ms</small>
                </div>
                <i className="ri-checkbox-circle-line"></i>
              </div>
              <div className="gravity-chart-card-2624">
                <div className="gravity-chart-top-2624">
                  <div>
                    <span>GRAVITY WAVE</span>
                    <strong>+18.42%</strong>
                  </div>
                  <i className="ri-line-chart-line"></i>
                </div>
                <div className="gravity-chart-2624">
                  <div className="gravity-chart-grid-2624"></div>
                  <div className="gravity-chart-line-2624">
                    <span></span>
                  </div>
                  <div className="gravity-chart-bars-2624">
                    <span></span>
                    <span></span>
                    <span></span>
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
                </div>
                <div className="gravity-chart-labels-2624">
                  <span>08:40</span>
                  <span>09:10</span>
                  <span>09:40</span>
                  <span>10:10</span>
                </div>
              </div>
              <div className="gravity-alert-2624">
                <div className="gravity-alert-icon-2624">
                  <i className="ri-error-warning-line"></i>
                </div>
                <div>
                  <strong>Minor distortion detected</strong>
                  <span>Localized lensing at sector 03.</span>
                </div>
                <button type="button">
                  <i className="ri-arrow-right-up-line"></i>
                </button>
              </div>
              <div className="gravity-sidebar-footer-2624">
                <div className="gravity-mini-status-2624">
                  <span></span>
                  ALL SYSTEMS NOMINAL
                </div>
                <div className="gravity-signal-2624">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </aside>
          </div>
          <div className="gravity-footer-2624">
            <div className="gravity-footer-info-2624">
              <div className="gravity-footer-status-2624">
                <span></span>
                GRAVITY FIELD LOCKED
              </div>
              <div className="gravity-footer-meta-2624">
                <span>
                  <i className="ri-time-line"></i>
                  LAST SYNC 10:42:18
                </span>
                <span>
                  <i className="ri-global-line"></i>
                  SECTOR 04-A
                </span>
                <span>
                  <i className="ri-node-tree"></i>
                  NODE 7F2C
                </span>
              </div>
            </div>
            <div className="gravity-footer-actions-2624">
              <button type="button" className="gravity-icon-button-2624">
                <i className="ri-settings-4-line"></i>
              </button>
              <button type="button" className="gravity-secondary-button-2624">
                <i className="ri-pause-circle-line"></i>
                Pause Field
              </button>
              <button type="button" className="gravity-primary-button-2624">
                <i className="ri-dashboard-3-line"></i>
                Open Observatory
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
    html: `
<div class="gravity-modal-2624">
  <div class="gravity-stars-2624"></div>
  <div class="gravity-noise-2624"></div>
  <div class="gravity-scanline-2624"></div>
  <div class="gravity-border-2624"></div>
  <div class="gravity-header-2624">
    <div class="gravity-brand-2624">
      <div class="gravity-logo-2624">
        <i class="ri-focus-3-line"></i>
        <span></span>
      </div>
      <div class="gravity-title-wrap-2624">
        <span class="gravity-overline-2624">ASTROPHYSICS CONTROL SYSTEM</span>
        <strong>GRAVITY CORE</strong>
      </div>
    </div>
    <div class="gravity-header-right-2624">
      <div class="gravity-live-2624">
        <span></span>
        FIELD STABLE
      </div>
      <div class="gravity-controls-2624">
        <button type="button">
          <i class="ri-subtract-line"></i>
        </button>
        <button type="button">
          <i class="ri-expand-diagonal-line"></i>
        </button>
        <button type="button" class="gravity-close-2624">
          <i class="ri-close-line"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="gravity-divider-2624"></div>
  <div class="gravity-body-2624">
    <section class="gravity-main-2624">
      <div class="gravity-intro-2624">
        <div class="gravity-intro-icon-2624">
          <i class="ri-earth-line"></i>
        </div>
        <div>
          <h2>Singularity Monitoring</h2>
          <p>Real-time gravitational field visualization and energy telemetry.</p>
        </div>
      </div>
      <div class="gravity-core-stage-2624">
        <div class="gravity-outer-field-2624"></div>
        <div class="gravity-field-ring-2624 gravity-field-ring-1-2624"></div>
        <div class="gravity-field-ring-2624 gravity-field-ring-2-2624"></div>
        <div class="gravity-field-ring-2624 gravity-field-ring-3-2624"></div>
        <div class="gravity-field-ring-2624 gravity-field-ring-4-2624"></div>
        <div class="gravity-orbit-2624 gravity-orbit-a-2624"></div>
        <div class="gravity-orbit-2624 gravity-orbit-b-2624"></div>
        <div class="gravity-orbit-2624 gravity-orbit-c-2624"></div>
        <div class="gravity-orbit-2624 gravity-orbit-d-2624"></div>
        <div class="gravity-particle gravity-particle-1-2624"></div>
        <div class="gravity-particle gravity-particle-2-2624"></div>
        <div class="gravity-particle gravity-particle-3-2624"></div>
        <div class="gravity-particle gravity-particle-4-2624"></div>
        <div class="gravity-particle gravity-particle-5-2624"></div>
        <div class="gravity-particle gravity-particle-6-2624"></div>
        <div class="gravity-particle gravity-particle-7-2624"></div>
        <div class="gravity-particle gravity-particle-8-2624"></div>
        <div class="gravity-particle gravity-particle-9-2624"></div>
        <div class="gravity-particle gravity-particle-10-2624"></div>
        <div class="gravity-particle gravity-particle-11-2624"></div>
        <div class="gravity-particle gravity-particle-12-2624"></div>
        <div class="gravity-wave gravity-wave-1-2624"></div>
        <div class="gravity-wave gravity-wave-2-2624"></div>
        <div class="gravity-wave gravity-wave-3-2624"></div>
        <div class="gravity-lensing-2624"></div>
        <div class="gravity-black-hole-2624">
          <div class="gravity-accretion-2624">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="gravity-event-horizon-2624"></div>
          <div class="gravity-singularity-2624">
            <i class="ri-asterisk"></i>
          </div>
        </div>
        <div class="gravity-core-label-2624">
          <span>CORE MASS</span>
          <strong>98.42 M☉</strong>
          <small>CRITICAL DENSITY</small>
        </div>
        <div class="gravity-axis gravity-axis-x-2624"></div>
        <div class="gravity-axis gravity-axis-y-2624"></div>
        <div class="gravity-axis gravity-axis-z-2624"></div>
        <div class="gravity-coordinate gravity-coordinate-top-2624">X 04.882</div>
        <div class="gravity-coordinate gravity-coordinate-right-2624">Y 18.204</div>
        <div class="gravity-coordinate gravity-coordinate-bottom-2624">Z 09.731</div>
        <div class="gravity-coordinate gravity-coordinate-left-2624">R 02.417</div>
        <div class="gravity-field-readout-2624">
          <span class="gravity-readout-dot-2624"></span>
          FIELD INTENSITY
          <strong>8.71 × 10⁹ N</strong>
        </div>
        <div class="gravity-stage-corner gravity-stage-corner-tl-2624"></div>
        <div class="gravity-stage-corner gravity-stage-corner-tr-2624"></div>
        <div class="gravity-stage-corner gravity-stage-corner-bl-2624"></div>
        <div class="gravity-stage-corner gravity-stage-corner-br-2624"></div>
      </div>
      <div class="gravity-metrics-2624">
        <div class="gravity-metric-2624">
          <div class="gravity-metric-head-2624">
            <span>
              <i class="ri-radar-line"></i>
              FIELD STRENGTH
            </span>
            <strong>87.2%</strong>
          </div>
          <div class="gravity-progress-2624">
            <span></span>
          </div>
          <small>Nominal gravitational pressure</small>
        </div>
        <div class="gravity-metric-2624 gravity-metric-violet-2624">
          <div class="gravity-metric-head-2624">
            <span>
              <i class="ri-flashlight-line"></i>
              ENERGY OUTPUT
            </span>
            <strong>64.8%</strong>
          </div>
          <div class="gravity-progress-2624">
            <span></span>
          </div>
          <small>Available extraction capacity</small>
        </div>
        <div class="gravity-metric-2624 gravity-metric-blue-2624">
          <div class="gravity-metric-head-2624">
            <span>
              <i class="ri-pulse-line"></i>
              OSCILLATION
            </span>
            <strong>12.4 Hz</strong>
          </div>
          <div class="gravity-progress-2624">
            <span></span>
          </div>
          <small>Stable field frequency</small>
        </div>
      </div>
    </section>
    <aside class="gravity-sidebar-2624">
      <div class="gravity-sidebar-heading-2624">
        <div>
          <span>FIELD TELEMETRY</span>
          <strong>Live Sensors</strong>
        </div>
        <button type="button">
          <i class="ri-refresh-line"></i>
        </button>
      </div>
      <div class="gravity-sensor-2624">
        <div class="gravity-sensor-icon gravity-sensor-cyan-2624">
          <i class="ri-temp-hot-line"></i>
        </div>
        <div class="gravity-sensor-copy-2624">
          <span>CORE TEMPERATURE</span>
          <strong>4.72 × 10⁶ K</strong>
          <small>+0.04% / 10s</small>
        </div>
        <i class="ri-arrow-up-line"></i>
      </div>
      <div class="gravity-sensor-2624">
        <div class="gravity-sensor-icon gravity-sensor-purple-2624">
          <i class="ri-speed-up-line"></i>
        </div>
        <div class="gravity-sensor-copy-2624">
          <span>ESCAPE VELOCITY</span>
          <strong>1.48 × 10⁸ m/s</strong>
          <small>+0.01% / 10s</small>
        </div>
        <i class="ri-arrow-up-line"></i>
      </div>
      <div class="gravity-sensor-2624">
        <div class="gravity-sensor-icon gravity-sensor-blue-2624">
          <i class="ri-shield-flash-line"></i>
        </div>
        <div class="gravity-sensor-copy-2624">
          <span>CONTAINMENT</span>
          <strong>99.94%</strong>
          <small>Nominal stability</small>
        </div>
        <i class="ri-checkbox-circle-line"></i>
      </div>
      <div class="gravity-sensor-2624">
        <div class="gravity-sensor-icon gravity-sensor-green-2624">
          <i class="ri-signal-wifi-3-line"></i>
        </div>
        <div class="gravity-sensor-copy-2624">
          <span>SENSOR LINK</span>
          <strong>ONLINE</strong>
          <small>Latency 1.8 ms</small>
        </div>
        <i class="ri-checkbox-circle-line"></i>
      </div>
      <div class="gravity-chart-card-2624">
        <div class="gravity-chart-top-2624">
          <div>
            <span>GRAVITY WAVE</span>
            <strong>+18.42%</strong>
          </div>
          <i class="ri-line-chart-line"></i>
        </div>
        <div class="gravity-chart-2624">
          <div class="gravity-chart-grid-2624"></div>
          <div class="gravity-chart-line-2624">
            <span></span>
          </div>
          <div class="gravity-chart-bars-2624">
            <span></span>
            <span></span>
            <span></span>
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
        </div>
        <div class="gravity-chart-labels-2624">
          <span>08:40</span>
          <span>09:10</span>
          <span>09:40</span>
          <span>10:10</span>
        </div>
      </div>
      <div class="gravity-alert-2624">
        <div class="gravity-alert-icon-2624">
          <i class="ri-error-warning-line"></i>
        </div>
        <div>
          <strong>Minor distortion detected</strong>
          <span>Localized lensing at sector 03.</span>
        </div>
        <button type="button">
          <i class="ri-arrow-right-up-line"></i>
        </button>
      </div>
      <div class="gravity-sidebar-footer-2624">
        <div class="gravity-mini-status-2624">
          <span></span>
          ALL SYSTEMS NOMINAL
        </div>
        <div class="gravity-signal-2624">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </aside>
  </div>
  <div class="gravity-footer-2624">
    <div class="gravity-footer-info-2624">
      <div class="gravity-footer-status-2624">
        <span></span>
        GRAVITY FIELD LOCKED
      </div>
      <div class="gravity-footer-meta-2624">
        <span>
          <i class="ri-time-line"></i>
          LAST SYNC 10:42:18
        </span>
        <span>
          <i class="ri-global-line"></i>
          SECTOR 04-A
        </span>
        <span>
          <i class="ri-node-tree"></i>
          NODE 7F2C
        </span>
      </div>
    </div>
    <div class="gravity-footer-actions-2624">
      <button type="button" class="gravity-icon-button-2624">
        <i class="ri-settings-4-line"></i>
      </button>
      <button type="button" class="gravity-secondary-button-2624">
        <i class="ri-pause-circle-line"></i>
        Pause Field
      </button>
      <button type="button" class="gravity-primary-button-2624">
        <i class="ri-dashboard-3-line"></i>
        Open Observatory
      </button>
    </div>
  </div>
</div>
  `,
    css: `
.gravity-modal-2624 {
  width: min(1180px, 94vw);
  min-height: 720px;
  position: relative;
  overflow: hidden;
  margin: 40px auto;
  border-radius: 28px;
  background:
    radial-gradient(circle at 50% 42%, rgba(56,189,248,.065), transparent 25%),
    radial-gradient(circle at 83% 22%, rgba(139,92,246,.08), transparent 27%),
    radial-gradient(circle at 17% 78%, rgba(14,165,233,.06), transparent 25%),
    #020617;
  border: 1px solid rgba(148,163,184,.18);
  color: #f8fafc;
  font-family: Arial,sans-serif;
  box-shadow:
    0 40px 120px rgba(0,0,0,.65),
    0 0 100px rgba(14,165,233,.06),
    inset 0 1px 0 rgba(255,255,255,.05);
  isolation: isolate;
}
.gravity-stars-2624 {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 12% 18%,rgba(255,255,255,.7) 0 1px,transparent 1.5px),
    radial-gradient(circle at 21% 64%,rgba(125,211,252,.5) 0 1px,transparent 1.5px),
    radial-gradient(circle at 36% 11%,rgba(255,255,255,.4) 0 1px,transparent 1.4px),
    radial-gradient(circle at 46% 84%,rgba(167,139,250,.45) 0 1px,transparent 1.5px),
    radial-gradient(circle at 62% 17%,rgba(255,255,255,.6) 0 1px,transparent 1.5px),
    radial-gradient(circle at 73% 69%,rgba(96,165,250,.45) 0 1px,transparent 1.5px),
    radial-gradient(circle at 87% 13%,rgba(255,255,255,.5) 0 1px,transparent 1.4px),
    radial-gradient(circle at 92% 78%,rgba(125,211,252,.55) 0 1px,transparent 1.4px);
  animation: gravityStars2624 8s ease-in-out infinite alternate;
  opacity: .45;
  pointer-events: none;
  z-index: 0;
}
.gravity-noise-2624 {
  position: absolute;
  inset: 0;
  opacity: .22;
  background-image:
    radial-gradient(circle at 20% 30%,rgba(255,255,255,.06) 0 1px,transparent 1px),
    radial-gradient(circle at 70% 70%,rgba(255,255,255,.04) 0 1px,transparent 1px),
    radial-gradient(circle at 45% 55%,rgba(255,255,255,.03) 0 1px,transparent 1px);
  background-size: 17px 17px,23px 23px,31px 31px;
  animation: gravityNoise2624 3s steps(3) infinite;
  z-index: 1;
  pointer-events: none;
}
.gravity-scanline-2624 {
  position: absolute;
  left: 0;
  right: 0;
  top: -15%;
  height: 180px;
  background: linear-gradient(to bottom,transparent,rgba(56,189,248,.025),rgba(56,189,248,.05),transparent);
  animation: gravityScan2624 9s linear infinite;
  z-index: 5;
  pointer-events: none;
}
.gravity-border-2624 {
  position: absolute;
  inset: 8px;
  border-radius: 22px;
  border: 1px solid rgba(148,163,184,.05);
  pointer-events: none;
  z-index: 20;
}
.gravity-border-2624::before {
  content: "";
  position: absolute;
  width: 34%;
  height: 1px;
  left: 33%;
  top: -1px;
  background: linear-gradient(90deg,transparent,#38bdf8,transparent);
  box-shadow: 0 0 16px rgba(56,189,248,.5);
  animation: gravityBorderLine2624 5s ease-in-out infinite;
}
.gravity-header-2624 {
  height: 86px;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
}
.gravity-brand-2624 {
  display: flex;
  align-items: center;
  gap: 14px;
}
.gravity-logo-2624 {
  width: 44px;
  height: 44px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  background:
    radial-gradient(circle,rgba(56,189,248,.16),rgba(15,23,42,.7));
  border: 1px solid rgba(56,189,248,.28);
  color: #7dd3fc;
  font-size: 19px;
  box-shadow:
    0 0 30px rgba(56,189,248,.1),
    inset 0 0 20px rgba(56,189,248,.06);
  animation: gravityLogo2624 3.4s ease-in-out infinite;
}
.gravity-logo-2624::before {
  content: "";
  position: absolute;
  inset: -5px;
  border-radius: 16px;
  border: 1px solid rgba(56,189,248,.08);
  animation: gravityLogoRing2624 3.4s ease-out infinite;
}
.gravity-logo-2624 span {
  position: absolute;
  right: 3px;
  bottom: 3px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #22d3ee;
  box-shadow: 0 0 7px #22d3ee,0 0 18px #06b6d4;
}
.gravity-title-wrap-2624 {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.gravity-overline-2624 {
  color: #38bdf8;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .22em;
}
.gravity-title-wrap-2624 strong {
  font-size: 16px;
  letter-spacing: .06em;
}
.gravity-header-right-2624 {
  display: flex;
  align-items: center;
  gap: 18px;
}
.gravity-live-2624 {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(34,197,94,.06);
  border: 1px solid rgba(34,197,94,.16);
  color: #86efac;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .12em;
}
.gravity-live-2624 span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 7px #22c55e,0 0 15px rgba(34,197,94,.7);
  animation: gravityLive2624 1.6s ease-in-out infinite;
}
.gravity-controls-2624 {
  display: flex;
  gap: 5px;
}
.gravity-controls-2624 button {
  width: 31px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(148,163,184,.12);
  border-radius: 8px;
  background: rgba(15,23,42,.65);
  color: #64748b;
  cursor: pointer;
  transition:
    transform .25s ease,
    color .25s ease,
    background .25s ease,
    border-color .25s ease;
}
.gravity-controls-2624 button:hover {
  transform: translateY(-2px);
  color: #cbd5e1;
  border-color: rgba(148,163,184,.25);
  background: rgba(30,41,59,.75);
}
.gravity-controls-2624 .gravity-close-2624:hover {
  color: #fda4af;
  border-color: rgba(244,63,94,.3);
}
.gravity-divider-2624 {
  position: relative;
  z-index: 10;
  height: 1px;
  margin: 0 30px;
  background: linear-gradient(90deg,transparent,rgba(148,163,184,.14) 12%,rgba(148,163,184,.08) 88%,transparent);
}
.gravity-body-2624 {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: minmax(0,1.7fr) 300px;
  gap: 18px;
  padding: 23px 30px 20px;
}
.gravity-main-2624 {
  min-width: 0;
}
.gravity-intro-2624 {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 15px;
}
.gravity-intro-icon-2624 {
  width: 37px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: rgba(56,189,248,.07);
  border: 1px solid rgba(56,189,248,.14);
  color: #67e8f9;
  font-size: 17px;
  box-shadow: inset 0 0 15px rgba(56,189,248,.04);
  animation: gravityIntro2624 2.8s ease-in-out infinite;
}
.gravity-intro-2624 h2 {
  margin: 0 0 3px;
  color: #f8fafc;
  font-size: 15px;
}
.gravity-intro-2624 p {
  margin: 0;
  color: #64748b;
  font-size: 8px;
}
.gravity-core-stage-2624 {
  height: 410px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  background:
    radial-gradient(circle at 50% 50%,rgba(14,165,233,.065),transparent 32%),
    radial-gradient(circle at 50% 50%,rgba(124,58,237,.035),transparent 49%),
    linear-gradient(145deg,rgba(15,23,42,.67),rgba(2,6,23,.92));
  border: 1px solid rgba(148,163,184,.1);
  box-shadow:
    inset 0 0 55px rgba(14,165,233,.025),
    0 20px 50px rgba(0,0,0,.2);
}
.gravity-core-stage-2624::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(56,189,248,.025) 1px,transparent 1px),
    linear-gradient(90deg,rgba(56,189,248,.025) 1px,transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(circle at 50% 50%,black,transparent 75%);
}
.gravity-core-stage-2624::after {
  content: "";
  position: absolute;
  inset: 8%;
  border: 1px solid rgba(56,189,248,.035);
  border-radius: 50%;
  animation: gravityStagePulse2624 4s ease-in-out infinite;
}
.gravity-outer-field-2624 {
  position: absolute;
  width: 470px;
  height: 470px;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  border: 1px solid rgba(56,189,248,.035);
  box-shadow:
    0 0 60px rgba(56,189,248,.025),
    inset 0 0 60px rgba(56,189,248,.015);
}
.gravity-field-ring-2624 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  pointer-events: none;
}
.gravity-field-ring-1-2624 {
  width: 340px;
  height: 340px;
  border: 1px solid rgba(56,189,248,.09);
  animation: gravityFieldRingA2624 13s linear infinite;
}
.gravity-field-ring-2-2624 {
  width: 278px;
  height: 278px;
  border: 1px dashed rgba(167,139,250,.12);
  animation: gravityFieldRingB2624 10s linear infinite reverse;
}
.gravity-field-ring-3-2624 {
  width: 220px;
  height: 220px;
  border: 1px solid rgba(59,130,246,.14);
  animation: gravityFieldRingC2624 7s linear infinite;
}
.gravity-field-ring-4-2624 {
  width: 170px;
  height: 170px;
  border: 1px dashed rgba(34,211,238,.16);
  animation: gravityFieldRingD2624 5s linear infinite reverse;
}
.gravity-orbit-2624 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: center;
  border-radius: 50%;
  border: 1px solid transparent;
  pointer-events: none;
}
.gravity-orbit-a-2624 {
  width: 390px;
  height: 120px;
  border-top-color: rgba(56,189,248,.22);
  border-bottom-color: rgba(56,189,248,.08);
  transform: translate(-50%,-50%) rotate(18deg);
  animation: gravityOrbitA2624 9s linear infinite;
}
.gravity-orbit-b-2624 {
  width: 330px;
  height: 100px;
  border-left-color: rgba(167,139,250,.2);
  border-right-color: rgba(167,139,250,.07);
  transform: translate(-50%,-50%) rotate(-28deg);
  animation: gravityOrbitB2624 11s linear infinite reverse;
}
.gravity-orbit-c-2624 {
  width: 285px;
  height: 82px;
  border-top-color: rgba(34,211,238,.2);
  border-bottom-color: rgba(34,211,238,.05);
  transform: translate(-50%,-50%) rotate(62deg);
  animation: gravityOrbitC2624 8s linear infinite;
}
.gravity-orbit-d-2624 {
  width: 235px;
  height: 74px;
  border-left-color: rgba(96,165,250,.2);
  border-right-color: rgba(96,165,250,.05);
  transform: translate(-50%,-50%) rotate(-62deg);
  animation: gravityOrbitD2624 7s linear infinite reverse;
}
.gravity-particle {
  position: absolute;
  border-radius: 50%;
  background: #7dd3fc;
  box-shadow:
    0 0 5px #7dd3fc,
    0 0 15px #38bdf8,
    0 0 30px rgba(14,165,233,.5);
  z-index: 9;
}
.gravity-particle-1-2624 {
  width: 4px;
  height: 4px;
  left: 21%;
  top: 28%;
  animation: gravityParticle1 5s ease-in-out infinite;
}
.gravity-particle-2-2624 {
  width: 3px;
  height: 3px;
  right: 18%;
  top: 22%;
  animation: gravityParticle2 4s ease-in-out infinite;
}
.gravity-particle-3-2624 {
  width: 5px;
  height: 5px;
  left: 13%;
  bottom: 29%;
  animation: gravityParticle3 6s ease-in-out infinite;
}
.gravity-particle-4-2624 {
  width: 3px;
  height: 3px;
  right: 10%;
  bottom: 25%;
  animation: gravityParticle4 4.7s ease-in-out infinite;
}
.gravity-particle-5-2624 {
  width: 2px;
  height: 2px;
  left: 34%;
  top: 15%;
  animation: gravityParticle5 3.8s ease-in-out infinite;
}
.gravity-particle-6-2624 {
  width: 3px;
  height: 3px;
  right: 34%;
  top: 72%;
  animation: gravityParticle6 4.5s ease-in-out infinite;
}
.gravity-particle-7-2624 {
  width: 2px;
  height: 2px;
  left: 42%;
  bottom: 12%;
  animation: gravityParticle7 5.4s ease-in-out infinite;
}
.gravity-particle-8-2624 {
  width: 4px;
  height: 4px;
  right: 28%;
  bottom: 37%;
  animation: gravityParticle8 4.1s ease-in-out infinite;
}
.gravity-particle-9-2624 {
  width: 2px;
  height: 2px;
  left: 29%;
  bottom: 43%;
  animation: gravityParticle9 5.8s ease-in-out infinite;
}
.gravity-particle-10-2624 {
  width: 3px;
  height: 3px;
  right: 40%;
  top: 13%;
  animation: gravityParticle10 4.4s ease-in-out infinite;
}
.gravity-particle-11-2624 {
  width: 2px;
  height: 2px;
  left: 17%;
  top: 51%;
  animation: gravityParticle11 3.9s ease-in-out infinite;
}
.gravity-particle-12-2624 {
  width: 3px;
  height: 3px;
  right: 14%;
  top: 48%;
  animation: gravityParticle12 4.8s ease-in-out infinite;
}
.gravity-wave {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  border: 1px solid rgba(56,189,248,.11);
  pointer-events: none;
}
.gravity-wave-1-2624 {
  width: 120px;
  height: 120px;
  animation: gravityWave2624 4.5s ease-out infinite;
}
.gravity-wave-2-2624 {
  width: 120px;
  height: 120px;
  animation: gravityWave2624 4.5s ease-out 1.5s infinite;
}
.gravity-wave-3-2624 {
  width: 120px;
  height: 120px;
  animation: gravityWave2624 4.5s ease-out 3s infinite;
}
.gravity-lensing-2624 {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 215px;
  height: 215px;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background:
    radial-gradient(circle,transparent 0 31%,rgba(56,189,248,.035) 32%,transparent 40%),
    radial-gradient(circle,transparent 0 48%,rgba(139,92,246,.03) 49%,transparent 54%);
  filter: blur(1px);
  animation: gravityLensing2624 4s ease-in-out infinite;
}
.gravity-black-hole-2624 {
  width: 108px;
  height: 108px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 7;
}
.gravity-accretion-2624 {
  position: absolute;
  inset: -17px;
  border-radius: 50%;
  transform: rotate(-18deg);
  animation: gravityAccretion2624 5s linear infinite;
  background:
    radial-gradient(
      ellipse at center,
      transparent 0 38%,
      rgba(14,165,233,.06) 39%,
      rgba(56,189,248,.24) 43%,
      rgba(167,139,250,.22) 47%,
      rgba(59,130,246,.1) 51%,
      transparent 58%
    );
  filter: blur(1px);
}
.gravity-accretion-2624 span {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #bae6fd;
  box-shadow:
    0 0 8px #bae6fd,
    0 0 18px #38bdf8,
    0 0 30px rgba(56,189,248,.5);
}
.gravity-accretion-2624 span:nth-child(1) {
  left: 10%;
  top: 29%;
  animation: gravityAccParticle12624 2.8s linear infinite;
}
.gravity-accretion-2624 span:nth-child(2) {
  right: 8%;
  top: 35%;
  animation: gravityAccParticle22624 3.2s linear infinite;
}
.gravity-accretion-2624 span:nth-child(3) {
  left: 23%;
  bottom: 8%;
  animation: gravityAccParticle32624 2.6s linear infinite;
}
.gravity-accretion-2624 span:nth-child(4) {
  right: 22%;
  bottom: 15%;
  animation: gravityAccParticle42624 3.5s linear infinite;
}
.gravity-accretion-2624 span:nth-child(5) {
  left: 48%;
  top: -2%;
  animation: gravityAccParticle52624 2.9s linear infinite;
}
.gravity-accretion-2624 span:nth-child(6) {
  left: 70%;
  bottom: 2%;
  animation: gravityAccParticle62624 3.1s linear infinite;
}
.gravity-event-horizon-2624 {
  width: 88px;
  height: 88px;
  position: absolute;
  border-radius: 50%;
  background:
    radial-gradient(circle at 45% 40%,#020617 0 40%,#000 55%,#020617 69%,transparent 70%);
  box-shadow:
    0 0 20px rgba(0,0,0,.95),
    0 0 35px rgba(15,23,42,.9),
    inset 0 0 18px rgba(0,0,0,1);
  z-index: 3;
}
.gravity-singularity-2624 {
  width: 48px;
  height: 48px;
  position: relative;
  z-index: 8;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: radial-gradient(circle,#020617 20%,#000 75%);
  box-shadow:
    0 0 35px rgba(0,0,0,1),
    0 0 13px rgba(56,189,248,.1);
}
.gravity-singularity-2624 i {
  color: rgba(186,230,253,.72);
  font-size: 13px;
  text-shadow:
    0 0 7px rgba(186,230,253,.6),
    0 0 18px rgba(56,189,248,.4);
  animation: gravitySingularity2624 2s ease-in-out infinite;
}
.gravity-core-label-2624 {
  position: absolute;
  left: 50%;
  bottom: 43px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 7px 13px;
  border-radius: 999px;
  background: rgba(2,6,23,.68);
  border: 1px solid rgba(148,163,184,.11);
  backdrop-filter: blur(10px);
  z-index: 11;
}
.gravity-core-label-2624 span {
  color: #475569;
  font-size: 6px;
  font-weight: 800;
  letter-spacing: .17em;
}
.gravity-core-label-2624 strong {
  color: #dbeafe;
  font-size: 12px;
  letter-spacing: .04em;
}
.gravity-core-label-2624 small {
  color: #38bdf8;
  font-size: 5px;
  font-weight: 800;
  letter-spacing: .12em;
}
.gravity-axis {
  position: absolute;
  background: linear-gradient(90deg,transparent,rgba(125,211,252,.15),transparent);
  opacity: .45;
}
.gravity-axis-x-2624 {
  left: 15%;
  right: 15%;
  top: 50%;
  height: 1px;
}
.gravity-axis-y-2624 {
  top: 13%;
  bottom: 13%;
  left: 50%;
  width: 1px;
  background: linear-gradient(180deg,transparent,rgba(125,211,252,.12),transparent);
}
.gravity-axis-z-2624 {
  left: 27%;
  right: 27%;
  top: 50%;
  height: 1px;
  transform: rotate(34deg);
  opacity: .18;
}
.gravity-coordinate {
  position: absolute;
  color: #334155;
  font-size: 6px;
  font-family: monospace;
  letter-spacing: .08em;
  z-index: 10;
}
.gravity-coordinate-top-2624 {
  top: 16%;
  left: 50%;
  transform: translateX(-50%);
}
.gravity-coordinate-right-2624 {
  top: 50%;
  right: 12%;
  transform: translateY(-50%);
}
.gravity-coordinate-bottom-2624 {
  bottom: 16%;
  left: 50%;
  transform: translateX(-50%);
}
.gravity-coordinate-left-2624 {
  top: 50%;
  left: 12%;
  transform: translateY(-50%);
}
.gravity-field-readout-2624 {
  position: absolute;
  top: 19px;
  left: 19px;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 7px 10px;
  border-radius: 8px;
  color: #64748b;
  background: rgba(2,6,23,.48);
  border: 1px solid rgba(148,163,184,.08);
  font-size: 6px;
  font-weight: 800;
  letter-spacing: .1em;
  z-index: 12;
}
.gravity-field-readout-2624 strong {
  color: #67e8f9;
  font-size: 8px;
  letter-spacing: 0;
}
.gravity-readout-dot-2624 {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #22d3ee;
  box-shadow: 0 0 6px #22d3ee;
  animation: gravityLive2624 1.7s ease-in-out infinite;
}
.gravity-stage-corner {
  position: absolute;
  width: 18px;
  height: 18px;
  border-color: rgba(56,189,248,.2);
  z-index: 12;
}
.gravity-stage-corner-tl-2624 {
  top: 14px;
  left: 14px;
  border-top: 1px solid;
  border-left: 1px solid;
}
.gravity-stage-corner-tr-2624 {
  top: 14px;
  right: 14px;
  border-top: 1px solid;
  border-right: 1px solid;
}
.gravity-stage-corner-bl-2624 {
  bottom: 14px;
  left: 14px;
  border-bottom: 1px solid;
  border-left: 1px solid;
}
.gravity-stage-corner-br-2624 {
  bottom: 14px;
  right: 14px;
  border-bottom: 1px solid;
  border-right: 1px solid;
}
.gravity-metrics-2624 {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 8px;
  margin-top: 10px;
}
.gravity-metric-2624 {
  padding: 11px;
  border-radius: 10px;
  background: rgba(15,23,42,.5);
  border: 1px solid rgba(56,189,248,.08);
  transition:
    transform .3s ease,
    border-color .3s ease,
    box-shadow .3s ease;
}
.gravity-metric-2624:hover {
  transform: translateY(-3px);
  border-color: rgba(56,189,248,.2);
  box-shadow: 0 15px 30px rgba(0,0,0,.16);
}
.gravity-metric-head-2624 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.gravity-metric-head-2624 span {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #64748b;
  font-size: 6px;
  font-weight: 800;
  letter-spacing: .09em;
}
.gravity-metric-head-2624 span i {
  color: #38bdf8;
  font-size: 9px;
}
.gravity-metric-head-2624 strong {
  color: #cbd5e1;
  font-size: 7px;
}
.gravity-progress-2624 {
  height: 4px;
  border-radius: 999px;
  overflow: hidden;
  background: #0f172a;
}
.gravity-progress-2624 span {
  display: block;
  width: 86%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg,#0284c7,#67e8f9);
  box-shadow: 0 0 10px rgba(34,211,238,.5);
  animation: gravityProgressA2624 3.2s ease-in-out infinite alternate;
}
.gravity-metric-violet-2624 .gravity-progress-2624 span {
  width: 65%;
  background: linear-gradient(90deg,#7c3aed,#c4b5fd);
  box-shadow: 0 0 10px rgba(139,92,246,.5);
  animation: gravityProgressB2624 3.6s ease-in-out infinite alternate;
}
.gravity-metric-blue-2624 .gravity-progress-2624 span {
  width: 71%;
  background: linear-gradient(90deg,#2563eb,#60a5fa);
  box-shadow: 0 0 10px rgba(59,130,246,.5);
  animation: gravityProgressC2624 3s ease-in-out infinite alternate;
}
.gravity-metric-2624 small {
  display: block;
  margin-top: 6px;
  color: #334155;
  font-size: 6px;
}
.gravity-sidebar-2624 {
  min-width: 0;
  padding: 14px;
  border-radius: 17px;
  background: rgba(15,23,42,.38);
  border: 1px solid rgba(148,163,184,.09);
  backdrop-filter: blur(10px);
}
.gravity-sidebar-heading-2624 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.gravity-sidebar-heading-2624 > div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.gravity-sidebar-heading-2624 span {
  color: #475569;
  font-size: 6px;
  font-weight: 800;
  letter-spacing: .16em;
}
.gravity-sidebar-heading-2624 strong {
  color: #cbd5e1;
  font-size: 10px;
}
.gravity-sidebar-heading-2624 button {
  width: 23px;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(148,163,184,.1);
  border-radius: 7px;
  background: rgba(2,6,23,.4);
  color: #64748b;
  cursor: pointer;
}
.gravity-sidebar-heading-2624 button i {
  animation: gravityRefresh2624 5s linear infinite;
}
.gravity-sensor-2624 {
  display: grid;
  grid-template-columns: 31px minmax(0,1fr) 12px;
  align-items: center;
  gap: 8px;
  padding: 9px 0;
  border-bottom: 1px solid rgba(148,163,184,.055);
}
.gravity-sensor-icon {
  width: 31px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  font-size: 12px;
}
.gravity-sensor-cyan-2624 {
  background: rgba(34,211,238,.07);
  color: #67e8f9;
}
.gravity-sensor-purple-2624 {
  background: rgba(139,92,246,.08);
  color: #c4b5fd;
}
.gravity-sensor-blue-2624 {
  background: rgba(59,130,246,.08);
  color: #93c5fd;
}
.gravity-sensor-green-2624 {
  background: rgba(34,197,94,.07);
  color: #86efac;
}
.gravity-sensor-copy-2624 {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.gravity-sensor-copy-2624 span {
  color: #475569;
  font-size: 5px;
  font-weight: 800;
  letter-spacing: .11em;
}
.gravity-sensor-copy-2624 strong {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #cbd5e1;
  font-size: 8px;
}
.gravity-sensor-copy-2624 small {
  color: #334155;
  font-size: 5px;
}
.gravity-sensor-2624 > i {
  color: #4ade80;
  font-size: 11px;
}
.gravity-chart-card-2624 {
  margin-top: 9px;
  padding: 10px;
  border-radius: 10px;
  background: rgba(2,6,23,.42);
  border: 1px solid rgba(148,163,184,.07);
}
.gravity-chart-top-2624 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.gravity-chart-top-2624 div {
  display: flex;
  align-items: baseline;
  gap: 7px;
}
.gravity-chart-top-2624 span {
  color: #475569;
  font-size: 5px;
  font-weight: 800;
  letter-spacing: .12em;
}
.gravity-chart-top-2624 strong {
  color: #67e8f9;
  font-size: 8px;
}
.gravity-chart-top-2624 > i {
  color: #38bdf8;
  font-size: 10px;
}
.gravity-chart-2624 {
  height: 78px;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
}
.gravity-chart-grid-2624 {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(56,189,248,.045) 1px,transparent 1px),
    linear-gradient(90deg,rgba(56,189,248,.045) 1px,transparent 1px);
  background-size: 18px 18px;
}
.gravity-chart-bars-2624 {
  position: absolute;
  left: 7px;
  right: 7px;
  bottom: 7px;
  height: 64%;
  display: flex;
  align-items: end;
  gap: 4px;
}
.gravity-chart-bars-2624 span {
  flex: 1;
  min-width: 2px;
  border-radius: 3px 3px 0 0;
  background: linear-gradient(180deg,rgba(56,189,248,.24),rgba(56,189,248,.02));
  animation: gravityChartBar2624 2.7s ease-in-out infinite alternate;
}
.gravity-chart-bars-2624 span:nth-child(1) { height: 28%; }
.gravity-chart-bars-2624 span:nth-child(2) { height: 41%; animation-delay: .1s; }
.gravity-chart-bars-2624 span:nth-child(3) { height: 33%; animation-delay: .2s; }
.gravity-chart-bars-2624 span:nth-child(4) { height: 52%; animation-delay: .3s; }
.gravity-chart-bars-2624 span:nth-child(5) { height: 45%; animation-delay: .4s; }
.gravity-chart-bars-2624 span:nth-child(6) { height: 63%; animation-delay: .5s; }
.gravity-chart-bars-2624 span:nth-child(7) { height: 58%; animation-delay: .6s; }
.gravity-chart-bars-2624 span:nth-child(8) { height: 74%; animation-delay: .7s; }
.gravity-chart-bars-2624 span:nth-child(9) { height: 61%; animation-delay: .8s; }
.gravity-chart-bars-2624 span:nth-child(10) { height: 81%; animation-delay: .9s; }
.gravity-chart-bars-2624 span:nth-child(11) { height: 73%; animation-delay: 1s; }
.gravity-chart-bars-2624 span:nth-child(12) { height: 91%; animation-delay: 1.1s; }
.gravity-chart-line-2624 {
  position: absolute;
  inset: 0;
  z-index: 2;
  clip-path: polygon(0 79%,9% 69%,18% 74%,27% 57%,36% 63%,45% 44%,54% 51%,63% 28%,72% 37%,81% 21%,90% 27%,100% 9%,100% 100%,0 100%);
  background: linear-gradient(180deg,rgba(103,232,249,.16),rgba(103,232,249,0));
  border-top: 1px solid rgba(103,232,249,.55);
  animation: gravityChartLine2624 3s ease-in-out infinite alternate;
}
.gravity-chart-line-2624 span {
  position: absolute;
  width: 4px;
  height: 4px;
  right: 1%;
  top: 7%;
  border-radius: 50%;
  background: #67e8f9;
  box-shadow: 0 0 7px #67e8f9,0 0 17px #22d3ee;
}
.gravity-chart-labels-2624 {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}
.gravity-chart-labels-2624 span {
  color: #334155;
  font-family: monospace;
  font-size: 5px;
}
.gravity-alert-2624 {
  display: grid;
  grid-template-columns: 28px minmax(0,1fr) 16px;
  align-items: center;
  gap: 7px;
  margin-top: 9px;
  padding: 9px;
  border-radius: 10px;
  background:
    radial-gradient(circle at 10% 50%,rgba(245,158,11,.055),transparent 45%),
    rgba(15,23,42,.42);
  border: 1px solid rgba(245,158,11,.1);
}
.gravity-alert-icon-2624 {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: rgba(245,158,11,.08);
  color: #fbbf24;
  font-size: 11px;
}
.gravity-alert-2624 > div:nth-child(2) {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.gravity-alert-2624 strong {
  color: #d6d3d1;
  font-size: 6px;
}
.gravity-alert-2624 span {
  color: #57534e;
  font-size: 5px;
}
.gravity-alert-2624 button {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
  color: #f59e0b;
  font-size: 9px;
  cursor: pointer;
  transition: transform .25s ease;
}
.gravity-alert-2624 button:hover {
  transform: translate(2px,-2px);
}
.gravity-sidebar-footer-2624 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 11px;
}
.gravity-mini-status-2624 {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #475569;
  font-size: 5px;
  font-weight: 800;
  letter-spacing: .08em;
}
.gravity-mini-status-2624 span {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 6px #22c55e;
}
.gravity-signal-2624 {
  display: flex;
  align-items: end;
  gap: 2px;
  height: 13px;
}
.gravity-signal-2624 span {
  width: 3px;
  border-radius: 2px;
  background: #38bdf8;
  box-shadow: 0 0 5px rgba(56,189,248,.35);
  animation: gravitySignal2624 1.8s ease-in-out infinite alternate;
}
.gravity-signal-2624 span:nth-child(1) { height: 4px; }
.gravity-signal-2624 span:nth-child(2) { height: 7px; animation-delay: .1s; }
.gravity-signal-2624 span:nth-child(3) { height: 10px; animation-delay: .2s; }
.gravity-signal-2624 span:nth-child(4) { height: 12px; animation-delay: .3s; }
.gravity-signal-2624 span:nth-child(5) { height: 8px; animation-delay: .4s; }
.gravity-footer-2624 {
  position: relative;
  z-index: 10;
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 15px 30px;
  border-top: 1px solid rgba(148,163,184,.08);
  background: rgba(2,6,23,.3);
}
.gravity-footer-info-2624 {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.gravity-footer-status-2624 {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #86efac;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .12em;
}
.gravity-footer-status-2624 span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 6px #22c55e,0 0 14px rgba(34,197,94,.55);
  animation: gravityLive2624 1.7s ease-in-out infinite;
}
.gravity-footer-meta-2624 {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.gravity-footer-meta-2624 span {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #334155;
  font-family: monospace;
  font-size: 5px;
  letter-spacing: .05em;
}
.gravity-footer-meta-2624 i {
  color: #475569;
  font-size: 8px;
}
.gravity-footer-actions-2624 {
  display: flex;
  align-items: center;
  gap: 6px;
}
.gravity-footer-actions-2624 button {
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 8px;
  cursor: pointer;
  transition:
    transform .25s ease,
    border-color .25s ease,
    background .25s ease,
    box-shadow .25s ease;
}
.gravity-icon-button-2624 {
  width: 32px;
  border: 1px solid rgba(148,163,184,.11);
  background: rgba(15,23,42,.6);
  color: #64748b;
}
.gravity-icon-button-2624:hover {
  transform: rotate(18deg);
  color: #cbd5e1;
}
.gravity-secondary-button-2624 {
  padding: 0 12px;
  border: 1px solid rgba(148,163,184,.11);
  background: rgba(15,23,42,.6);
  color: #94a3b8;
  font-size: 7px;
  font-weight: 700;
}
.gravity-secondary-button-2624:hover {
  transform: translateY(-2px);
  border-color: rgba(148,163,184,.24);
}
.gravity-primary-button-2624 {
  padding: 0 14px;
  border: 1px solid rgba(103,232,249,.2);
  background: linear-gradient(135deg,#0891b2,#2563eb);
  color: #fff;
  font-size: 7px;
  font-weight: 800;
  box-shadow: 0 10px 28px rgba(37,99,235,.18);
}
.gravity-primary-button-2624:hover {
  transform: translateY(-2px);
  box-shadow:
    0 14px 32px rgba(37,99,235,.28),
    0 0 24px rgba(56,189,248,.12);
}
@keyframes gravityStars2624 {
  from {
    transform: scale(1);
    opacity: .3;
  }
  to {
    transform: scale(1.035);
    opacity: .58;
  }
}
@keyframes gravityNoise2624 {
  0%,
  100% {
    transform: translate(0,0);
  }
  25% {
    transform: translate(1px,-1px);
  }
  50% {
    transform: translate(-1px,1px);
  }
  75% {
    transform: translate(1px,1px);
  }
}
@keyframes gravityScan2624 {
  0% {
    top: -15%;
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  50% {
    opacity: .6;
  }
  100% {
    top: 120%;
    opacity: 0;
  }
}
@keyframes gravityBorderLine2624 {
  0%,
  100% {
    width: 20%;
    left: 40%;
    opacity: .35;
  }
  50% {
    width: 60%;
    left: 20%;
    opacity: 1;
  }
}
@keyframes gravityLogo2624 {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.06);
  }
}
@keyframes gravityLogoRing2624 {
  0% {
    transform: scale(.8);
    opacity: .7;
  }
  70% {
    transform: scale(1.3);
    opacity: 0;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}
@keyframes gravityLive2624 {
  0%,
  100% {
    transform: scale(.75);
    opacity: .55;
  }
  50% {
    transform: scale(1.15);
    opacity: 1;
  }
}
@keyframes gravityIntro2624 {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 22px rgba(56,189,248,.1);
  }
}
@keyframes gravityStagePulse2624 {
  0%,
  100% {
    transform: scale(.96);
    opacity: .45;
  }
  50% {
    transform: scale(1.03);
    opacity: .85;
  }
}
@keyframes gravityFieldRingA2624 {
  from {
    transform: translate(-50%,-50%) rotate(0deg) scale(.98);
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg) scale(.98);
  }
}
@keyframes gravityFieldRingB2624 {
  from {
    transform: translate(-50%,-50%) rotate(0deg) scale(1);
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg) scale(1.03);
  }
}
@keyframes gravityFieldRingC2624 {
  from {
    transform: translate(-50%,-50%) rotate(0deg) scale(.96);
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg) scale(1.04);
  }
}
@keyframes gravityFieldRingD2624 {
  from {
    transform: translate(-50%,-50%) rotate(0deg) scale(1);
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg) scale(.96);
  }
}
@keyframes gravityOrbitA2624 {
  from {
    transform: translate(-50%,-50%) rotate(18deg) rotateZ(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(18deg) rotateZ(360deg);
  }
}
@keyframes gravityOrbitB2624 {
  from {
    transform: translate(-50%,-50%) rotate(-28deg) rotateZ(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(-28deg) rotateZ(360deg);
  }
}
@keyframes gravityOrbitC2624 {
  from {
    transform: translate(-50%,-50%) rotate(62deg) rotateZ(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(62deg) rotateZ(360deg);
  }
}
@keyframes gravityOrbitD2624 {
  from {
    transform: translate(-50%,-50%) rotate(-62deg) rotateZ(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(-62deg) rotateZ(360deg);
  }
}
@keyframes gravityWave2624 {
  0% {
    width: 90px;
    height: 90px;
    opacity: .75;
  }
  100% {
    width: 400px;
    height: 400px;
    opacity: 0;
  }
}
@keyframes gravityLensing2624 {
  0%,
  100% {
    transform: translate(-50%,-50%) scale(.94);
    opacity: .55;
  }
  50% {
    transform: translate(-50%,-50%) scale(1.08);
    opacity: 1;
  }
}
@keyframes gravityAccretion2624 {
  from {
    transform: rotate(-18deg);
  }
  to {
    transform: rotate(342deg);
  }
}
@keyframes gravitySingularity2624 {
  0%,
  100% {
    transform: scale(.82);
    opacity: .6;
  }
  50% {
    transform: scale(1.14);
    opacity: 1;
  }
}
@keyframes gravityAccParticle12624 {
  from {
    transform: rotate(0deg) translateX(0);
  }
  to {
    transform: rotate(360deg) translateX(6px);
  }
}
@keyframes gravityAccParticle22624 {
  from {
    transform: rotate(0deg) translateX(0);
  }
  to {
    transform: rotate(-360deg) translateX(8px);
  }
}
@keyframes gravityAccParticle32624 {
  from {
    transform: rotate(0deg) translateX(0);
  }
  to {
    transform: rotate(360deg) translateX(5px);
  }
}
@keyframes gravityAccParticle42624 {
  from {
    transform: rotate(0deg) translateX(0);
  }
  to {
    transform: rotate(-360deg) translateX(7px);
  }
}
@keyframes gravityAccParticle52624 {
  from {
    transform: rotate(0deg) translateX(0);
  }
  to {
    transform: rotate(360deg) translateX(7px);
  }
}
@keyframes gravityAccParticle62624 {
  from {
    transform: rotate(0deg) translateX(0);
  }
  to {
    transform: rotate(-360deg) translateX(6px);
  }
}
@keyframes gravityParticle1 {
  0%,
  100% {
    transform: translate(0,0) scale(.7);
    opacity: .2;
  }
  50% {
    transform: translate(30px,-18px) scale(1.3);
    opacity: 1;
  }
}
@keyframes gravityParticle2 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .2;
  }
  50% {
    transform: translate(-26px,18px);
    opacity: 1;
  }
}
@keyframes gravityParticle3 {
  0%,
  100% {
    transform: translate(0,0) scale(.7);
    opacity: .2;
  }
  50% {
    transform: translate(24px,-24px) scale(1.2);
    opacity: 1;
  }
}
@keyframes gravityParticle4 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .25;
  }
  50% {
    transform: translate(-19px,-20px);
    opacity: 1;
  }
}
@keyframes gravityParticle5 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .15;
  }
  50% {
    transform: translate(18px,21px);
    opacity: 1;
  }
}
@keyframes gravityParticle6 {
  0%,
  100% {
    transform: translate(0,0) scale(.8);
    opacity: .2;
  }
  50% {
    transform: translate(-21px,-13px) scale(1.15);
    opacity: 1;
  }
}
@keyframes gravityParticle7 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .2;
  }
  50% {
    transform: translate(21px,-16px);
    opacity: 1;
  }
}
@keyframes gravityParticle8 {
  0%,
  100% {
    transform: translate(0,0) scale(.7);
    opacity: .15;
  }
  50% {
    transform: translate(-24px,19px) scale(1.25);
    opacity: 1;
  }
}
@keyframes gravityParticle9 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .2;
  }
  50% {
    transform: translate(20px,-19px);
    opacity: .95;
  }
}
@keyframes gravityParticle10 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .15;
  }
  50% {
    transform: translate(-18px,17px);
    opacity: 1;
  }
}
@keyframes gravityParticle11 {
  0%,
  100% {
    transform: translate(0,0) scale(.7);
    opacity: .2;
  }
  50% {
    transform: translate(22px,13px) scale(1.2);
    opacity: 1;
  }
}
@keyframes gravityParticle12 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .2;
  }
  50% {
    transform: translate(-25px,-15px);
    opacity: 1;
  }
}
@keyframes gravityProgressA2624 {
  from {
    width: 81%;
  }
  to {
    width: 92%;
  }
}
@keyframes gravityProgressB2624 {
  from {
    width: 58%;
  }
  to {
    width: 71%;
  }
}
@keyframes gravityProgressC2624 {
  from {
    width: 66%;
  }
  to {
    width: 77%;
  }
}
@keyframes gravityRefresh2624 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes gravityChartBar2624 {
  from {
    opacity: .45;
    transform: scaleY(.85);
    transform-origin: bottom;
  }
  to {
    opacity: .95;
    transform: scaleY(1.08);
    transform-origin: bottom;
  }
}
@keyframes gravityChartLine2624 {
  from {
    transform: translateY(2px);
  }
  to {
    transform: translateY(-2px);
  }
}
@keyframes gravitySignal2624 {
  from {
    opacity: .3;
  }
  to {
    opacity: 1;
  }
}
@media (max-width: 1100px) {
  .gravity-modal-2624 {
    width: 94vw;
  }
  .gravity-body-2624 {
    grid-template-columns: minmax(0,1.5fr) 270px;
  }
  .gravity-core-stage-2624 {
    height: 370px;
  }
}
@media (max-width: 900px) {
  .gravity-body-2624 {
    grid-template-columns: 1fr;
  }
  .gravity-sidebar-2624 {
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    gap: 7px;
  }
  .gravity-sidebar-heading-2624 {
    grid-column: 1 / -1;
  }
  .gravity-chart-card-2624,
  .gravity-alert-2624,
  .gravity-sidebar-footer-2624 {
    grid-column: 1 / -1;
  }
}
@media (max-width: 700px) {
  .gravity-header-2624 {
    padding: 0 18px;
  }
  .gravity-divider-2624 {
    margin: 0 18px;
  }
  .gravity-body-2624 {
    padding: 18px;
  }
  .gravity-footer-2624 {
    padding: 13px 18px;
    flex-direction: column;
    align-items: flex-start;
  }
  .gravity-core-stage-2624 {
    height: 330px;
  }
  .gravity-footer-actions-2624 {
    width: 100%;
    justify-content: flex-end;
  }
  .gravity-live-2624 {
    display: none;
  }
}
@media (max-width: 540px) {
  .gravity-modal-2624 {
    width: 96vw;
    min-height: auto;
    border-radius: 20px;
  }
  .gravity-header-2624 {
    height: 72px;
  }
  .gravity-title-wrap-2624 strong {
    font-size: 13px;
  }
  .gravity-overline-2624 {
    font-size: 6px;
  }
  .gravity-header-right-2624 {
    gap: 7px;
  }
  .gravity-controls-2624 button {
    width: 27px;
    height: 27px;
  }
  .gravity-body-2624 {
    padding: 14px;
  }
  .gravity-core-stage-2624 {
    height: 295px;
  }
  .gravity-outer-field-2624 {
    width: 340px;
    height: 340px;
  }
  .gravity-field-ring-1-2624 {
    width: 275px;
    height: 275px;
  }
  .gravity-field-ring-2-2624 {
    width: 220px;
    height: 220px;
  }
  .gravity-field-ring-3-2624 {
    width: 174px;
    height: 174px;
  }
  .gravity-field-ring-4-2624 {
    width: 137px;
    height: 137px;
  }
  .gravity-orbit-a-2624 {
    width: 310px;
    height: 96px;
  }
  .gravity-orbit-b-2624 {
    width: 265px;
    height: 83px;
  }
  .gravity-orbit-c-2624 {
    width: 225px;
    height: 68px;
  }
  .gravity-orbit-d-2624 {
    width: 195px;
    height: 58px;
  }
  .gravity-metrics-2624 {
    grid-template-columns: 1fr;
  }
  .gravity-sidebar-2624 {
    display: block;
  }
  .gravity-sensor-2624 {
    grid-template-columns: 31px minmax(0,1fr) 12px;
  }
  .gravity-footer-2624 {
    padding: 14px;
  }
  .gravity-footer-actions-2624 {
    flex-wrap: wrap;
  }
}
@media (prefers-reduced-motion: reduce) {
  .gravity-modal-2624 *,
  .gravity-modal-2624::before,
  .gravity-modal-2624::after {
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
  }
}
  `,
  },
];
