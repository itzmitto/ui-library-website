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
  {
    id: 3065,
    name: "Neon Glass Modal",
    preview: (
      <div className="modal-3065">
        <div className="modal-3065-box">
          <div className="modal-3065-glow"></div>
          <span className="modal-3065-label">WELCOME</span>
          <h3>Neon Experience</h3>
          <p>Step into a futuristic interface.</p>
          <button>Continue</button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <span class="Modal__label">WELCOME</span>
    <h3>Neon Experience</h3>
    <p>Step into a futuristic interface.</p>
    <button>Continue</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(2, 6, 23, 0.72);
  backdrop-filter: blur(10px);
}
.Modal__box {
  position: relative;
  width: 360px;
  padding: 28px;
  border: 1px solid rgba(34, 211, 238, 0.5);
  border-radius: 20px;
  background: rgba(7, 15, 28, 0.92);
  color: #ffffff;
  box-shadow: 0 0 45px rgba(34, 211, 238, 0.25);
  overflow: hidden;
  animation: modalIn 0.5s ease;
}
.Modal__label {
  color: #22d3ee;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box h3 {
  margin: 10px 0 8px;
  font-size: 25px;
}
.Modal__box p {
  margin: 0 0 22px;
  color: #94a3b8;
}
.Modal__box button {
  padding: 10px 18px;
  border: 0;
  border-radius: 10px;
  background: #06b6d4;
  color: #ffffff;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 0 18px rgba(6, 182, 212, 0.5);
}
.Modal__glow {
  position: absolute;
  width: 180px;
  height: 180px;
  top: -100px;
  right: -80px;
  border-radius: 50%;
  background: #06b6d4;
  filter: blur(80px);
  opacity: 0.25;
}
@keyframes modalIn {
  from {
    opacity: 0;
    transform: translateY(25px) scale(0.94);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}`,
  },
  {
    id: 3066,
    name: "Cyber Command Modal",
    preview: (
      <div className="modal-3066">
        <div className="modal-3066-box">
          <span>SYSTEM ONLINE</span>
          <h3>Command Center</h3>
          <p>All systems are operating normally.</p>
          <div className="modal-3066-actions">
            <button>Deploy</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <span>SYSTEM ONLINE</span>
    <h3>Command Center</h3>
    <p>All systems are operating normally.</p>
    <div class="Modal__actions">
      <button>Deploy</button>
      <button>Cancel</button>
    </div>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.82);
}
.Modal__box {
  position: relative;
  width: 370px;
  padding: 26px;
  border: 1px solid #22c55e;
  border-radius: 14px;
  background:
    linear-gradient(145deg, #030712, #07140a);
  color: #ffffff;
  box-shadow:
    0 0 25px rgba(34, 197, 94, 0.25),
    inset 0 0 25px rgba(34, 197, 94, 0.04);
  animation: commandIn 0.4s ease;
}
.Modal__box::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 5px,
    rgba(34, 197, 94, 0.04) 6px
  );
  pointer-events: none;
}
.Modal__box > span {
  color: #4ade80;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box h3 {
  margin: 10px 0;
  font-size: 24px;
}
.Modal__box p {
  color: #86efac;
}
.Modal__actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
.Modal__actions button {
  padding: 9px 16px;
  border: 1px solid #22c55e;
  border-radius: 8px;
  background: transparent;
  color: #4ade80;
  font-weight: 800;
}
@keyframes commandIn {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}`,
  },
  {
    id: 3067,
    name: "Holographic Modal",
    preview: (
      <div className="modal-3067">
        <div className="modal-3067-box">
          <div className="modal-3067-icon">✦</div>
          <h3>Holographic Access</h3>
          <p>A new dimension of interface design.</p>
          <button>Enter</button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__icon">✦</div>
    <h3>Holographic Access</h3>
    <p>A new dimension of interface design.</p>
    <button>Enter</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.78);
  backdrop-filter: blur(12px);
}
.Modal__box {
  position: relative;
  width: 350px;
  padding: 30px;
  border: 1px solid transparent;
  border-radius: 24px;
  background:
    linear-gradient(#0f172a, #0f172a) padding-box,
    linear-gradient(
      90deg,
      #ec4899,
      #8b5cf6,
      #22d3ee,
      #34d399,
      #ec4899
    ) border-box;
  background-size: auto, 300% 100%;
  color: #ffffff;
  text-align: center;
  box-shadow: 0 0 45px rgba(139, 92, 246, 0.3);
  animation: holo 4s linear infinite;
}
.Modal__icon {
  font-size: 35px;
  color: #c4b5fd;
  text-shadow:
    0 0 10px #ec4899,
    0 0 20px #22d3ee;
  animation: sparkle 1.5s ease-in-out infinite;
}
.Modal__box h3 {
  margin: 14px 0 8px;
  font-size: 24px;
}
.Modal__box p {
  color: #cbd5e1;
}
.Modal__box button {
  margin-top: 15px;
  padding: 10px 22px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(90deg, #ec4899, #8b5cf6, #22d3ee);
  color: #ffffff;
  font-weight: 900;
}
@keyframes holo {
  to {
    background-position: 0 0, 300% 0;
  }
}
@keyframes sparkle {
  0%,100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15) rotate(8deg);
  }
}`,
  },
  {
    id: 3068,
    name: "Warning Energy Modal",
    preview: (
      <div className="modal-3068">
        <div className="modal-3068-box">
          <div className="modal-3068-icon">!</div>
          <h3>Warning Detected</h3>
          <p>Something requires your attention.</p>
          <button>Review</button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__icon">!</div>
    <h3>Warning Detected</h3>
    <p>Something requires your attention.</p>
    <button>Review</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(23, 10, 0, 0.82);
}
.Modal__box {
  width: 340px;
  padding: 28px;
  border: 1px solid #f59e0b;
  border-radius: 18px;
  background: linear-gradient(145deg, #170d00, #281600);
  color: #ffffff;
  text-align: center;
  box-shadow: 0 0 35px rgba(245, 158, 11, 0.3);
  animation: warning 1.3s ease-in-out infinite alternate;
}
.Modal__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  margin: 0 auto;
  border: 2px solid #fbbf24;
  border-radius: 50%;
  color: #fbbf24;
  font-size: 30px;
  font-weight: 900;
  box-shadow: 0 0 22px rgba(251, 191, 36, 0.5);
}
.Modal__box h3 {
  margin: 16px 0 8px;
}
.Modal__box p {
  color: #fde68a;
}
.Modal__box button {
  margin-top: 15px;
  padding: 10px 20px;
  border: 0;
  border-radius: 9px;
  background: #f59e0b;
  color: #18181b;
  font-weight: 900;
}
@keyframes warning {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.02);
    box-shadow: 0 0 45px rgba(245, 158, 11, 0.5);
  }
}`,
  },
  {
    id: 3069,
    name: "Rainbow Portal Modal",
    preview: (
      <div className="modal-3069">
        <div className="modal-3069-box">
          <div className="modal-3069-ring"></div>
          <h3>Rainbow Portal</h3>
          <p>Choose your next destination.</p>
          <button>Open Portal</button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__ring"></div>
    <h3>Rainbow Portal</h3>
    <p>Choose your next destination.</p>
    <button>Open Portal</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(3, 7, 18, 0.82);
}
.Modal__box {
  position: relative;
  width: 355px;
  padding: 32px;
  border: 1px solid transparent;
  border-radius: 22px;
  background:
    linear-gradient(145deg, #09090b, #18181b) padding-box,
    linear-gradient(
      90deg,
      #ff0055,
      #ff9900,
      #ffee00,
      #00ff77,
      #00ddff,
      #7c3aed,
      #ff0055
    ) border-box;
  color: #ffffff;
  text-align: center;
  box-shadow: 0 0 45px rgba(124, 58, 237, 0.3);
  overflow: hidden;
}
.Modal__ring {
  width: 70px;
  height: 70px;
  margin: 0 auto 18px;
  border: 5px solid transparent;
  border-top-color: #ff0055;
  border-right-color: #ff9900;
  border-bottom-color: #00ddff;
  border-left-color: #7c3aed;
  border-radius: 50%;
  animation: portal 1.5s linear infinite;
}
.Modal__box h3 {
  font-size: 25px;
}
.Modal__box p {
  color: #a1a1aa;
}
.Modal__box button {
  margin-top: 14px;
  padding: 10px 20px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(90deg, #ff0055, #7c3aed, #00ddff);
  color: #ffffff;
  font-weight: 900;
}
@keyframes portal {
  to {
    transform: rotate(360deg);
  }
}`,
  },
  {
    id: 3070,
    name: "Glass Success Modal",
    preview: (
      <div className="modal-3070">
        <div className="modal-3070-box">
          <div className="modal-3070-check">✓</div>
          <h3>Successfully Complete</h3>
          <p>Your operation was completed.</p>
          <button>Done</button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__check">✓</div>
    <h3>Successfully Complete</h3>
    <p>Your operation was completed.</p>
    <button>Done</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(2, 6, 23, 0.7);
  backdrop-filter: blur(14px);
}
.Modal__box {
  width: 350px;
  padding: 30px;
  border: 1px solid rgba(52, 211, 153, 0.45);
  border-radius: 22px;
  background: rgba(6, 27, 21, 0.8);
  color: #ffffff;
  text-align: center;
  box-shadow: 0 0 40px rgba(52, 211, 153, 0.2);
  animation: successIn 0.6s cubic-bezier(.2,.8,.2,1);
}
.Modal__check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  margin: 0 auto;
  border-radius: 50%;
  background: #10b981;
  color: #ffffff;
  font-size: 30px;
  font-weight: 900;
  box-shadow: 0 0 25px rgba(16, 185, 129, 0.55);
  animation: checkPop 0.7s ease;
}
.Modal__box h3 {
  margin: 17px 0 8px;
}
.Modal__box p {
  color: #a7f3d0;
}
.Modal__box button {
  margin-top: 15px;
  padding: 10px 22px;
  border: 0;
  border-radius: 10px;
  background: #10b981;
  color: #022c22;
  font-weight: 900;
}
@keyframes successIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes checkPop {
  0% {
    transform: scale(0);
  }
  70% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}`,
  },
  {
    id: 3071,
    name: "Purple Energy Modal",
    preview: (
      <div className="modal-3071">
        <div className="modal-3071-box">
          <div className="modal-3071-energy"></div>
          <h3>Energy Unlocked</h3>
          <p>A powerful new feature is available.</p>
          <button>Activate</button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__energy"></div>
    <h3>Energy Unlocked</h3>
    <p>A powerful new feature is available.</p>
    <button>Activate</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(7, 3, 16, 0.85);
}
.Modal__box {
  position: relative;
  width: 360px;
  padding: 30px;
  border: 1px solid #8b5cf6;
  border-radius: 20px;
  background: #0d0718;
  color: #ffffff;
  overflow: hidden;
  box-shadow: 0 0 45px rgba(139, 92, 246, 0.3);
}
.Modal__energy {
  position: absolute;
  width: 150px;
  height: 150px;
  left: -50px;
  top: -50px;
  border-radius: 50%;
  background: #a855f7;
  filter: blur(65px);
  opacity: 0.25;
  animation: energy 2s ease-in-out infinite alternate;
}
.Modal__box h3 {
  position: relative;
  font-size: 25px;
}
.Modal__box p {
  position: relative;
  color: #c4b5fd;
}
.Modal__box button {
  position: relative;
  margin-top: 15px;
  padding: 10px 21px;
  border: 0;
  border-radius: 10px;
  background: linear-gradient(135deg, #7c3aed, #c026d3);
  color: #ffffff;
  font-weight: 900;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
}
@keyframes energy {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1.25);
  }
}`,
  },
  {
    id: 3072,
    name: "Cyber Scan Modal",
    preview: (
      <div className="modal-3072">
        <div className="modal-3072-box">
          <div className="modal-3072-scan"></div>
          <span>SECURITY CHECK</span>
          <h3>Identity Verified</h3>
          <p>Access has been granted successfully.</p>
          <button>Enter System</button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__scan"></div>
    <span>SECURITY CHECK</span>
    <h3>Identity Verified</h3>
    <p>Access has been granted successfully.</p>
    <button>Enter System</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(2, 6, 23, 0.85);
}
.Modal__box {
  position: relative;
  width: 370px;
  padding: 28px;
  border: 1px solid #00e5ff;
  border-radius: 12px;
  background: #020b12;
  color: #ffffff;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 229, 255, 0.22);
}
.Modal__box::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 6px,
    rgba(0, 229, 255, 0.04) 7px
  );
}
.Modal__scan {
  position: absolute;
  left: 0;
  top: -2px;
  width: 100%;
  height: 2px;
  background: #22d3ee;
  box-shadow: 0 0 15px #22d3ee;
  animation: scan 2s linear infinite;
}
.Modal__box > span,
.Modal__box h3,
.Modal__box p,
.Modal__box button {
  position: relative;
}
.Modal__box > span {
  color: #22d3ee;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box h3 {
  margin: 10px 0 8px;
}
.Modal__box p {
  color: #94a3b8;
}
.Modal__box button {
  margin-top: 15px;
  padding: 10px 18px;
  border: 1px solid #22d3ee;
  border-radius: 8px;
  background: transparent;
  color: #22d3ee;
  font-weight: 900;
}
@keyframes scan {
  from {
    top: 0;
  }
  to {
    top: 100%;
  }
}`,
  },
  {
    id: 3073,
    name: "Rainbow Glass Modal",
    preview: (
      <div className="modal-3073">
        <div className="modal-3073-box">
          <h3>Color Universe</h3>
          <p>Explore a world of animated components.</p>
          <div className="modal-3073-line"></div>
          <button>Explore</button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <h3>Color Universe</h3>
    <p>Explore a world of animated components.</p>
    <div class="Modal__line"></div>
    <button>Explore</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.72);
  backdrop-filter: blur(14px);
}
.Modal__box {
  position: relative;
  width: 360px;
  padding: 30px;
  border: 1px solid transparent;
  border-radius: 24px;
  background:
    linear-gradient(145deg, rgba(15,23,42,.92), rgba(24,24,27,.92)) padding-box,
    linear-gradient(90deg,#ff0055,#ff9900,#00ff77,#00ddff,#7c3aed,#ff0055) border-box;
  color: #ffffff;
  box-shadow: 0 0 45px rgba(168,85,247,.25);
  animation: rainbowModal 4s linear infinite;
  background-size: auto, 500% 100%;
}
.Modal__box h3 {
  font-size: 26px;
}
.Modal__box p {
  color: #cbd5e1;
}
.Modal__line {
  width: 100%;
  height: 2px;
  margin: 20px 0;
  background: linear-gradient(90deg,#ff0055,#ff9900,#00ff77,#00ddff,#7c3aed);
  background-size: 300% 100%;
  animation: line 3s linear infinite;
}
.Modal__box button {
  padding: 10px 20px;
  border: 0;
  border-radius: 999px;
  background: #ffffff;
  color: #111827;
  font-weight: 900;
}
@keyframes rainbowModal {
  to {
    background-position: 0 0, 500% 0;
  }
}
@keyframes line {
  to {
    background-position: 300% 0;
  }
}`,
  },
  {
    id: 3074,
    name: "Ultimate Cosmic Modal",
    preview: (
      <div className="modal-3074">
        <div className="modal-3074-box">
          <div className="modal-3074-orb"></div>
          <div className="modal-3074-stars"></div>
          <span>ULTIMATE MODE</span>
          <h3>Cosmic Gateway</h3>
          <p>Enter the next generation of UI.</p>
          <button>Launch</button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__orb"></div>
    <div class="Modal__stars"></div>
    <span>ULTIMATE MODE</span>
    <h3>Cosmic Gateway</h3>
    <p>Enter the next generation of UI.</p>
    <button>Launch</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(1, 3, 10, 0.88);
  backdrop-filter: blur(12px);
}
.Modal__box {
  position: relative;
  width: 380px;
  padding: 32px;
  border: 1px solid transparent;
  border-radius: 24px;
  background:
    linear-gradient(145deg,#050510,#0d1024) padding-box,
    linear-gradient(90deg,#00e5ff,#7c3aed,#ec4899,#00e5ff) border-box;
  color: #ffffff;
  overflow: hidden;
  box-shadow:
    0 0 35px rgba(124,58,237,.35),
    0 0 70px rgba(0,229,255,.12);
  animation: cosmicModal 3s ease-in-out infinite;
}
.Modal__orb {
  position: absolute;
  width: 190px;
  height: 190px;
  top: -110px;
  right: -80px;
  border-radius: 50%;
  background: conic-gradient(
    #00e5ff,
    #7c3aed,
    #ec4899,
    #00e5ff
  );
  filter: blur(30px);
  opacity: .22;
  animation: orb 4s linear infinite;
}
.Modal__stars {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle,
    rgba(255,255,255,.65) 1px,
    transparent 1px
  );
  background-size: 22px 22px;
  opacity: .22;
  animation: stars 5s linear infinite;
}
.Modal__box > * {
  position: relative;
}
.Modal__box > span {
  color: #67e8f9;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box h3 {
  margin: 10px 0 8px;
  font-size: 27px;
}
.Modal__box p {
  color: #c4b5fd;
}
.Modal__box button {
  margin-top: 18px;
  padding: 11px 24px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(90deg,#00e5ff,#7c3aed,#ec4899);
  color: #ffffff;
  font-weight: 900;
  box-shadow: 0 0 22px rgba(124,58,237,.4);
}
@keyframes cosmicModal {
  0%,100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}
@keyframes orb {
  to {
    transform: rotate(360deg) scale(1.15);
  }
}
@keyframes stars {
  to {
    background-position: 44px 44px;
  }
}`,
  },
  {
    id: 3075,
    name: "Neon Profile Modal",
    preview: (
      <div className="modal-3075">
        <div className="modal-3075-box">
          <button className="modal-3075-close">
            <i className="ri-close-line"></i>
          </button>
          <div className="modal-3075-avatar">
            <i className="ri-user-3-fill"></i>
          </div>
          <span className="modal-3075-status">
            <i className="ri-checkbox-circle-fill"></i> ONLINE
          </span>
          <h3>Welcome Back</h3>
          <p>Your profile is ready for another adventure.</p>
          <div className="modal-3075-stats">
            <div>
              <i className="ri-fire-fill"></i>
              <strong>284</strong>
              <span>Streak</span>
            </div>
            <div>
              <i className="ri-star-fill"></i>
              <strong>9.8K</strong>
              <span>Points</span>
            </div>
            <div>
              <i className="ri-trophy-fill"></i>
              <strong>42</strong>
              <span>Awards</span>
            </div>
          </div>
          <button className="modal-3075-action">
            <i className="ri-arrow-right-line"></i> Continue
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <button class="Modal__close"><i class="ri-close-line"></i></button>
    <div class="Modal__avatar"><i class="ri-user-3-fill"></i></div>
    <span class="Modal__status"><i class="ri-checkbox-circle-fill"></i> ONLINE</span>
    <h3>Welcome Back</h3>
    <p>Your profile is ready for another adventure.</p>
    <div class="Modal__stats">
      <div><i class="ri-fire-fill"></i><strong>284</strong><span>Streak</span></div>
      <div><i class="ri-star-fill"></i><strong>9.8K</strong><span>Points</span></div>
      <div><i class="ri-trophy-fill"></i><strong>42</strong><span>Awards</span></div>
    </div>
    <button class="Modal__action"><i class="ri-arrow-right-line"></i> Continue</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(2, 6, 23, 0.82);
  backdrop-filter: blur(12px);
}
.Modal__box {
  position: relative;
  width: 390px;
  padding: 30px;
  border: 1px solid rgba(56, 189, 248, 0.45);
  border-radius: 24px;
  background: linear-gradient(145deg, #06121f, #0c1728);
  color: #ffffff;
  text-align: center;
  box-shadow: 0 0 45px rgba(14, 165, 233, 0.25);
  animation: profileIn 0.55s ease;
}
.Modal__close {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 50%;
  background: rgba(255,255,255,.04);
  color: #94a3b8;
  cursor: pointer;
}
.Modal__avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 76px;
  margin: 0 auto 12px;
  border: 2px solid #22d3ee;
  border-radius: 50%;
  background: linear-gradient(135deg, #083344, #172554);
  color: #67e8f9;
  font-size: 30px;
  box-shadow: 0 0 28px rgba(34,211,238,.45);
  animation: profilePulse 1.8s ease-in-out infinite;
}
.Modal__status {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #4ade80;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box h3 {
  margin: 10px 0 6px;
  font-size: 26px;
}
.Modal__box p {
  color: #94a3b8;
}
.Modal__stats {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 8px;
  margin: 22px 0;
}
.Modal__stats div {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 12px 5px;
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 12px;
  background: rgba(255,255,255,.03);
}
.Modal__stats i {
  color: #22d3ee;
  font-size: 17px;
}
.Modal__stats strong {
  font-size: 15px;
}
.Modal__stats span {
  color: #64748b;
  font-size: 8px;
}
.Modal__action {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 11px 22px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(90deg,#06b6d4,#3b82f6);
  color: #ffffff;
  font-weight: 900;
  box-shadow: 0 0 22px rgba(6,182,212,.35);
  cursor: pointer;
}
@keyframes profileIn {
  from { opacity: 0; transform: translateY(25px) scale(.94); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes profilePulse {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.07); }
}`,
  },
  {
    id: 3076,
    name: "Cyber Security Modal",
    preview: (
      <div className="modal-3076">
        <div className="modal-3076-box">
          <div className="modal-3076-grid"></div>
          <div className="modal-3076-icon">
            <i className="ri-shield-keyhole-fill"></i>
          </div>
          <span className="modal-3076-tag">
            <i className="ri-radar-line"></i> SECURITY PROTOCOL
          </span>
          <h3>Protected Access</h3>
          <p>Your connection has been encrypted and verified.</p>
          <div className="modal-3076-checks">
            <span>
              <i className="ri-check-line"></i> Identity verified
            </span>
            <span>
              <i className="ri-check-line"></i> Connection secure
            </span>
            <span>
              <i className="ri-check-line"></i> Encryption active
            </span>
          </div>
          <button>
            <i className="ri-lock-unlock-line"></i> Enter Secure Area
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__grid"></div>
    <div class="Modal__icon"><i class="ri-shield-keyhole-fill"></i></div>
    <span class="Modal__tag"><i class="ri-radar-line"></i> SECURITY PROTOCOL</span>
    <h3>Protected Access</h3>
    <p>Your connection has been encrypted and verified.</p>
    <div class="Modal__checks">
      <span><i class="ri-check-line"></i> Identity verified</span>
      <span><i class="ri-check-line"></i> Connection secure</span>
      <span><i class="ri-check-line"></i> Encryption active</span>
    </div>
    <button><i class="ri-lock-unlock-line"></i> Enter Secure Area</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,.88);
}
.Modal__box {
  position: relative;
  width: 390px;
  padding: 30px;
  border: 1px solid #22c55e;
  border-radius: 18px;
  background: #020b06;
  color: #ffffff;
  overflow: hidden;
  box-shadow: 0 0 40px rgba(34,197,94,.22);
  animation: securityIn .45s ease;
}
.Modal__grid {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(34,197,94,.06) 1px,transparent 1px),
    linear-gradient(90deg,rgba(34,197,94,.06) 1px,transparent 1px);
  background-size: 20px 20px;
  animation: gridMove 4s linear infinite;
}
.Modal__icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border: 1px solid #4ade80;
  border-radius: 16px;
  background: rgba(34,197,94,.08);
  color: #4ade80;
  font-size: 28px;
  box-shadow: 0 0 22px rgba(34,197,94,.25);
}
.Modal__tag,
.Modal__box h3,
.Modal__box p,
.Modal__checks,
.Modal__box button {
  position: relative;
}
.Modal__tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 18px;
  color: #4ade80;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box h3 {
  margin: 10px 0 7px;
  font-size: 25px;
}
.Modal__box p {
  color: #86efac;
}
.Modal__checks {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 20px 0;
}
.Modal__checks span {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #bbf7d0;
  font-size: 11px;
}
.Modal__checks i {
  color: #4ade80;
}
.Modal__box button {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 11px 18px;
  border: 1px solid #22c55e;
  border-radius: 10px;
  background: rgba(34,197,94,.1);
  color: #4ade80;
  font-weight: 900;
  cursor: pointer;
}
@keyframes securityIn {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes gridMove {
  to { background-position: 20px 20px; }
}`,
  },
  {
    id: 3077,
    name: "AI Core Modal",
    preview: (
      <div className="modal-3077">
        <div className="modal-3077-box">
          <div className="modal-3077-core">
            <i className="ri-brain-line"></i>
          </div>
          <span>AI CORE ACTIVE</span>
          <h3>Neural Interface</h3>
          <p>Artificial intelligence is ready for your command.</p>
          <div className="modal-3077-wave">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <button>
            <i className="ri-magic-line"></i> Initialize
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__core"><i class="ri-brain-line"></i></div>
    <span>AI CORE ACTIVE</span>
    <h3>Neural Interface</h3>
    <p>Artificial intelligence is ready for your command.</p>
    <div class="Modal__wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
    <button><i class="ri-magic-line"></i> Initialize</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(3,0,15,.88);
}
.Modal__box {
  position: relative;
  width: 350px;
  padding: 30px;
  border: 1px solid #a855f7;
  border-radius: 22px;
  background: linear-gradient(145deg,#0b0317,#18052c);
  color: #ffffff;
  text-align: center;
  box-shadow: 0 0 45px rgba(168,85,247,.28);
  animation: aiIn .6s ease;
}
.Modal__core {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 78px;
  height: 78px;
  margin: 0 auto 15px;
  border-radius: 50%;
  background: radial-gradient(circle,#d8b4fe 0%,#8b5cf6 35%,#2e1065 100%);
  color: #ffffff;
  font-size: 31px;
  box-shadow: 0 0 35px rgba(139,92,246,.7);
  animation: core 2s ease-in-out infinite;
}
.Modal__box > span {
  color: #c4b5fd;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box h3 {
  margin: 10px 0 7px;
  font-size: 25px;
}
.Modal__box p {
  color: #c4b5fd;
}
.Modal__wave {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 40px;
  margin: 18px 0;
}
.Modal__wave i {
  width: 4px;
  height: 15px;
  border-radius: 999px;
  background: #a855f7;
  box-shadow: 0 0 8px #a855f7;
  animation: wave 1s ease-in-out infinite;
}
.Modal__wave i:nth-child(2) { animation-delay: .1s; }
.Modal__wave i:nth-child(3) { animation-delay: .2s; }
.Modal__wave i:nth-child(4) { animation-delay: .3s; }
.Modal__wave i:nth-child(5) { animation-delay: .4s; }
.Modal__wave i:nth-child(6) { animation-delay: .5s; }
.Modal__wave i:nth-child(7) { animation-delay: .6s; }
.Modal__box button {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 22px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(90deg,#7c3aed,#c026d3);
  color: #ffffff;
  font-weight: 900;
  box-shadow: 0 0 22px rgba(168,85,247,.4);
}
@keyframes aiIn {
  from { opacity: 0; transform: scale(.8); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes core {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}
@keyframes wave {
  0%,100% { height: 12px; }
  50% { height: 32px; }
}`,
  },
  {
    id: 3078,
    name: "Premium Payment Modal",
    preview: (
      <div className="modal-3078">
        <div className="modal-3078-box">
          <button className="modal-3078-close">
            <i className="ri-close-line"></i>
          </button>
          <div className="modal-3078-icon">
            <i className="ri-bank-card-fill"></i>
          </div>
          <span>
            <i className="ri-shield-check-fill"></i> SECURE PAYMENT
          </span>
          <h3>Upgrade Premium</h3>
          <p>Unlock all premium features and elevate your experience.</p>
          <div className="modal-3078-price">
            <small>€</small>19<small>.99 / month</small>
          </div>
          <div className="modal-3078-feature">
            <i className="ri-check-double-line"></i> Unlimited components
          </div>
          <div className="modal-3078-feature">
            <i className="ri-check-double-line"></i> Premium animations
          </div>
          <div className="modal-3078-feature">
            <i className="ri-check-double-line"></i> Priority updates
          </div>
          <button className="modal-3078-pay">
            <i className="ri-secure-payment-line"></i> Upgrade Now
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <button class="Modal__close"><i class="ri-close-line"></i></button>
    <div class="Modal__icon"><i class="ri-bank-card-fill"></i></div>
    <span><i class="ri-shield-check-fill"></i> SECURE PAYMENT</span>
    <h3>Upgrade Premium</h3>
    <p>Unlock all premium features and elevate your experience.</p>
    <div class="Modal__price"><small>€</small>19<small>.99 / month</small></div>
    <div class="Modal__feature"><i class="ri-check-double-line"></i> Unlimited components</div>
    <div class="Modal__feature"><i class="ri-check-double-line"></i> Premium animations</div>
    <div class="Modal__feature"><i class="ri-check-double-line"></i> Priority updates</div>
    <button class="Modal__pay"><i class="ri-secure-payment-line"></i> Upgrade Now</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(2,6,23,.82);
  backdrop-filter: blur(10px);
}
.Modal__box {
  position: relative;
  width: 370px;
  padding: 28px;
  border: 1px solid transparent;
  border-radius: 22px;
  background:
    linear-gradient(145deg,#0b0b10,#18131f) padding-box,
    linear-gradient(90deg,#f59e0b,#facc15,#ffffff,#f59e0b) border-box;
  color: #ffffff;
  box-shadow: 0 0 45px rgba(245,158,11,.2);
  overflow: hidden;
  animation: paymentIn .55s ease;
}
.Modal__close {
  position: absolute;
  top: 14px;
  right: 14px;
  border: 0;
  background: transparent;
  color: #71717a;
  font-size: 18px;
}
.Modal__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin-bottom: 14px;
  border-radius: 16px;
  background: linear-gradient(135deg,#854d0e,#f59e0b);
  color: #fff7ed;
  font-size: 28px;
  box-shadow: 0 0 24px rgba(245,158,11,.35);
}
.Modal__box > span {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #facc15;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box h3 {
  margin: 10px 0 7px;
  font-size: 25px;
}
.Modal__box p {
  color: #a1a1aa;
}
.Modal__price {
  margin: 18px 0;
  font-size: 45px;
  font-weight: 900;
  color: #facc15;
  text-shadow: 0 0 15px rgba(250,204,21,.3);
}
.Modal__price small {
  font-size: 13px;
  color: #a1a1aa;
}
.Modal__feature {
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 9px 0;
  color: #d4d4d8;
  font-size: 11px;
}
.Modal__feature i {
  color: #facc15;
}
.Modal__pay {
  width: 100%;
  margin-top: 17px;
  padding: 11px;
  border: 0;
  border-radius: 10px;
  background: linear-gradient(90deg,#d97706,#facc15);
  color: #111827;
  font-weight: 900;
  box-shadow: 0 0 20px rgba(245,158,11,.3);
}
@keyframes paymentIn {
  from { opacity: 0; transform: translateY(20px) scale(.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}`,
  },
  {
    id: 3079,
    name: "Mission Control Modal",
    preview: (
      <div className="modal-3079">
        <div className="modal-3079-box">
          <div className="modal-3079-header">
            <span>
              <i className="ri-radar-fill"></i> MISSION CONTROL
            </span>
            <i className="ri-more-2-fill"></i>
          </div>
          <div className="modal-3079-orbit">
            <i className="ri-rocket-2-fill"></i>
          </div>
          <h3>Launch Sequence</h3>
          <p>Everything is prepared for launch.</p>
          <div className="modal-3079-progress">
            <span></span>
          </div>
          <div className="modal-3079-info">
            <span>
              <i className="ri-checkbox-circle-line"></i> Systems Ready
            </span>
            <strong>98%</strong>
          </div>
          <button>
            <i className="ri-rocket-2-line"></i> Launch Mission
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__header">
      <span><i class="ri-radar-fill"></i> MISSION CONTROL</span>
      <i class="ri-more-2-fill"></i>
    </div>
    <div class="Modal__orbit"><i class="ri-rocket-2-fill"></i></div>
    <h3>Launch Sequence</h3>
    <p>Everything is prepared for launch.</p>
    <div class="Modal__progress"><span></span></div>
    <div class="Modal__info">
      <span><i class="ri-checkbox-circle-line"></i> Systems Ready</span>
      <strong>98%</strong>
    </div>
    <button><i class="ri-rocket-2-line"></i> Launch Mission</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(2,6,23,.88);
}
.Modal__box {
  position: relative;
  width: 370px;
  padding: 25px;
  border: 1px solid #334155;
  border-radius: 20px;
  background: radial-gradient(circle at 50% 0%,#18233d,#070b14 70%);
  color: #ffffff;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 0 45px rgba(59,130,246,.18);
}
.Modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #60a5fa;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__orbit {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  margin: 20px auto;
  border: 2px dashed #3b82f6;
  border-radius: 50%;
  color: #60a5fa;
  font-size: 30px;
  box-shadow: 0 0 25px rgba(59,130,246,.25);
  animation: orbit 4s linear infinite;
}
.Modal__box h3 {
  font-size: 25px;
}
.Modal__box p {
  color: #94a3b8;
}
.Modal__progress {
  height: 7px;
  margin: 20px 0 12px;
  border-radius: 999px;
  background: #172033;
  overflow: hidden;
}
.Modal__progress span {
  display: block;
  width: 98%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg,#2563eb,#22d3ee);
  box-shadow: 0 0 12px #22d3ee;
  animation: progress 2s ease-in-out infinite alternate;
}
.Modal__info {
  display: flex;
  justify-content: space-between;
  color: #64748b;
  font-size: 10px;
}
.Modal__info span {
  display: flex;
  gap: 5px;
}
.Modal__info i,
.Modal__info strong {
  color: #22d3ee;
}
.Modal__box button {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 20px;
  padding: 11px 20px;
  border: 0;
  border-radius: 10px;
  background: linear-gradient(90deg,#2563eb,#06b6d4);
  color: #ffffff;
  font-weight: 900;
}
@keyframes orbit {
  to { transform: rotate(360deg); }
}
@keyframes progress {
  from { width: 94%; }
  to { width: 99%; }
}`,
  },
  {
    id: 3080,
    name: "Magic Portal Modal",
    preview: (
      <div className="modal-3080">
        <div className="modal-3080-box">
          <div className="modal-3080-portal">
            <i className="ri-magic-fill"></i>
          </div>
          <span>
            <i className="ri-sparkling-fill"></i> MYSTIC GATEWAY
          </span>
          <h3>Enter The Portal</h3>
          <p>A mysterious new destination awaits you.</p>
          <div className="modal-3080-options">
            <button>
              <i className="ri-map-pin-2-fill"></i> Explore
            </button>
            <button>
              <i className="ri-close-line"></i> Close
            </button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__portal">
      <i class="ri-magic-fill"></i>
    </div>
    <span><i class="ri-sparkling-fill"></i> MYSTIC GATEWAY</span>
    <h3>Enter The Portal</h3>
    <p>A mysterious new destination awaits you.</p>
    <div class="Modal__options">
      <button><i class="ri-map-pin-2-fill"></i> Explore</button>
      <button><i class="ri-close-line"></i> Close</button>
    </div>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(8,2,20,.86);
  backdrop-filter: blur(10px);
}
.Modal__box {
  position: relative;
  width: 360px;
  padding: 30px;
  border: 1px solid #a855f7;
  border-radius: 24px;
  background: linear-gradient(145deg,#0f0620,#1b0b33);
  color: #ffffff;
  text-align: center;
  box-shadow: 0 0 50px rgba(168,85,247,.32);
  overflow: hidden;
}
.Modal__portal {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 88px;
  margin: 0 auto 16px;
  border: 3px solid transparent;
  border-top-color: #ec4899;
  border-right-color: #a855f7;
  border-bottom-color: #22d3ee;
  border-left-color: #8b5cf6;
  border-radius: 50%;
  color: #ffffff;
  font-size: 30px;
  box-shadow: 0 0 28px rgba(168,85,247,.4);
  animation: portal 2s linear infinite;
}
.Modal__box > span {
  color: #e9d5ff;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box h3 {
  margin: 10px 0 8px;
  font-size: 26px;
}
.Modal__box p {
  color: #c4b5fd;
}
.Modal__options {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}
.Modal__options button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: 900;
  cursor: pointer;
}
.Modal__options button:first-child {
  border: 0;
  background: linear-gradient(90deg,#7c3aed,#ec4899);
  color: #ffffff;
  box-shadow: 0 0 18px rgba(168,85,247,.35);
}
.Modal__options button:last-child {
  border: 1px solid #475569;
  background: transparent;
  color: #94a3b8;
}
@keyframes portal {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: 3081,
    name: "Music Player Modal",
    preview: (
      <div className="modal-3081">
        <div className="modal-3081-box">
          <div className="modal-3081-cover">
            <i className="ri-music-2-fill"></i>
          </div>
          <span>
            <i className="ri-headphone-fill"></i> NOW PLAYING
          </span>
          <h3>Neon Dreams</h3>
          <p>Future Sounds • 03:42</p>
          <div className="modal-3081-bars">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div className="modal-3081-controls">
            <button>
              <i className="ri-skip-back-fill"></i>
            </button>
            <button>
              <i className="ri-pause-fill"></i>
            </button>
            <button>
              <i className="ri-skip-forward-fill"></i>
            </button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__cover"><i class="ri-music-2-fill"></i></div>
    <span><i class="ri-headphone-fill"></i> NOW PLAYING</span>
    <h3>Neon Dreams</h3>
    <p>Future Sounds • 03:42</p>
    <div class="Modal__bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
    <div class="Modal__controls">
      <button><i class="ri-skip-back-fill"></i></button>
      <button><i class="ri-pause-fill"></i></button>
      <button><i class="ri-skip-forward-fill"></i></button>
    </div>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(2,6,23,.82);
  backdrop-filter: blur(12px);
}
.Modal__box {
  width: 340px;
  padding: 28px;
  border: 1px solid #ec4899;
  border-radius: 22px;
  background: linear-gradient(145deg,#16000d,#10051c);
  color: #ffffff;
  text-align: center;
  box-shadow: 0 0 40px rgba(236,72,153,.25);
}
.Modal__cover {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  margin: 0 auto 17px;
  border-radius: 18px;
  background: linear-gradient(135deg,#ec4899,#7c3aed,#06b6d4);
  color: #ffffff;
  font-size: 35px;
  box-shadow: 0 0 28px rgba(236,72,153,.35);
  animation: cover 2s linear infinite;
}
.Modal__box > span {
  color: #f9a8d4;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box h3 {
  margin: 9px 0 4px;
  font-size: 25px;
}
.Modal__box p {
  color: #a1a1aa;
}
.Modal__bars {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 45px;
  margin: 20px 0;
}
.Modal__bars i {
  width: 4px;
  height: 15px;
  border-radius: 999px;
  background: linear-gradient(#ec4899,#22d3ee);
  animation: music 1s ease-in-out infinite;
}
.Modal__bars i:nth-child(2) { animation-delay: .1s; }
.Modal__bars i:nth-child(3) { animation-delay: .2s; }
.Modal__bars i:nth-child(4) { animation-delay: .3s; }
.Modal__bars i:nth-child(5) { animation-delay: .4s; }
.Modal__bars i:nth-child(6) { animation-delay: .5s; }
.Modal__bars i:nth-child(7) { animation-delay: .6s; }
.Modal__bars i:nth-child(8) { animation-delay: .7s; }
.Modal__bars i:nth-child(9) { animation-delay: .8s; }
.Modal__bars i:nth-child(10) { animation-delay: .9s; }
.Modal__controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
.Modal__controls button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 1px solid #3f1d46;
  border-radius: 50%;
  background: #170b1d;
  color: #f9a8d4;
}
.Modal__controls button:nth-child(2) {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg,#ec4899,#7c3aed);
  color: #ffffff;
  box-shadow: 0 0 20px rgba(236,72,153,.35);
}
@keyframes cover {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.04); }
}
@keyframes music {
  0%,100% { height: 10px; }
  50% { height: 38px; }
}`,
  },
  {
    id: 3082,
    name: "Achievement Modal",
    preview: (
      <div className="modal-3082">
        <div className="modal-3082-box">
          <div className="modal-3082-burst">
            <i className="ri-trophy-fill"></i>
          </div>
          <span>
            <i className="ri-medal-fill"></i> ACHIEVEMENT UNLOCKED
          </span>
          <h3>Legendary Status</h3>
          <p>You've reached a new milestone.</p>
          <div className="modal-3082-reward">
            <i className="ri-star-fill"></i>
            <strong>+5,000 XP</strong>
          </div>
          <button>
            <i className="ri-share-forward-fill"></i> Share Achievement
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__burst"><i class="ri-trophy-fill"></i></div>
    <span><i class="ri-medal-fill"></i> ACHIEVEMENT UNLOCKED</span>
    <h3>Legendary Status</h3>
    <p>You've reached a new milestone.</p>
    <div class="Modal__reward">
      <i class="ri-star-fill"></i>
      <strong>+5,000 XP</strong>
    </div>
    <button><i class="ri-share-forward-fill"></i> Share Achievement</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(7,4,0,.84);
}
.Modal__box {
  position: relative;
  width: 350px;
  padding: 30px;
  border: 1px solid #facc15;
  border-radius: 22px;
  background: linear-gradient(145deg,#171000,#2a1a00);
  color: #ffffff;
  text-align: center;
  box-shadow: 0 0 45px rgba(250,204,21,.28);
  overflow: hidden;
  animation: achievementIn .6s cubic-bezier(.2,.8,.2,1);
}
.Modal__burst {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 85px;
  margin: 0 auto 17px;
  border: 3px solid #facc15;
  border-radius: 50%;
  background: radial-gradient(circle,#fef3c7,#f59e0b,#713f12);
  color: #ffffff;
  font-size: 34px;
  box-shadow: 0 0 32px rgba(250,204,21,.65);
  animation: trophy 1.5s ease-in-out infinite;
}
.Modal__box > span {
  color: #fde68a;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box h3 {
  margin: 10px 0 7px;
  font-size: 25px;
}
.Modal__box p {
  color: #d6d3d1;
}
.Modal__reward {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin: 19px 0;
  color: #facc15;
  font-size: 20px;
}
.Modal__reward i {
  text-shadow: 0 0 12px #facc15;
}
.Modal__box button {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 19px;
  border: 0;
  border-radius: 10px;
  background: #facc15;
  color: #422006;
  font-weight: 900;
  box-shadow: 0 0 20px rgba(250,204,21,.35);
}
@keyframes achievementIn {
  from { opacity: 0; transform: scale(.7) rotate(-5deg); }
  to { opacity: 1; transform: scale(1) rotate(0); }
}
@keyframes trophy {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-5px) scale(1.06); }
}`,
  },
  {
    id: 3083,
    name: "Rainbow Settings Modal",
    preview: (
      <div className="modal-3083">
        <div className="modal-3083-box">
          <div className="modal-3083-top">
            <div>
              <i className="ri-settings-5-fill"></i>
              <span>SETTINGS</span>
            </div>
            <i className="ri-close-line"></i>
          </div>
          <h3>Customize Experience</h3>
          <p>Make the interface feel like yours.</p>
          <div className="modal-3083-setting">
            <span>
              <i className="ri-moon-fill"></i> Dark Mode
            </span>
            <b></b>
          </div>
          <div className="modal-3083-setting">
            <span>
              <i className="ri-notification-3-fill"></i> Notifications
            </span>
            <b className="active"></b>
          </div>
          <div className="modal-3083-setting">
            <span>
              <i className="ri-flashlight-fill"></i> Animations
            </span>
            <b className="active"></b>
          </div>
          <button>
            <i className="ri-check-line"></i> Save Changes
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__top">
      <div><i class="ri-settings-5-fill"></i><span>SETTINGS</span></div>
      <i class="ri-close-line"></i>
    </div>
    <h3>Customize Experience</h3>
    <p>Make the interface feel like yours.</p>
    <div class="Modal__setting"><span><i class="ri-moon-fill"></i> Dark Mode</span><b></b></div>
    <div class="Modal__setting"><span><i class="ri-notification-3-fill"></i> Notifications</span><b class="active"></b></div>
    <div class="Modal__setting"><span><i class="ri-flashlight-fill"></i> Animations</span><b class="active"></b></div>
    <button><i class="ri-check-line"></i> Save Changes</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(5,7,18,.82);
  backdrop-filter: blur(12px);
}
.Modal__box {
  position: relative;
  width: 370px;
  padding: 26px;
  border: 1px solid transparent;
  border-radius: 22px;
  background:
    linear-gradient(145deg,#0b0b12,#151522) padding-box,
    linear-gradient(90deg,#ff0055,#ff9900,#00ff77,#00ddff,#7c3aed,#ff0055) border-box;
  background-size: auto,500% 100%;
  color: #ffffff;
  box-shadow: 0 0 45px rgba(124,58,237,.25);
  animation: settingsRainbow 5s linear infinite;
}
.Modal__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.Modal__top > div {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #c4b5fd;
}
.Modal__top > div i {
  color: #22d3ee;
  text-shadow: 0 0 10px #22d3ee;
}
.Modal__top > div span {
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__top > i {
  color: #71717a;
}
.Modal__box h3 {
  margin: 18px 0 6px;
  font-size: 25px;
}
.Modal__box p {
  color: #94a3b8;
}
.Modal__setting {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 0;
  border-bottom: 1px solid rgba(255,255,255,.06);
}
.Modal__setting span {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #d4d4d8;
  font-size: 11px;
}
.Modal__setting span i {
  color: #a855f7;
}
.Modal__setting b {
  display: block;
  width: 34px;
  height: 18px;
  border-radius: 999px;
  background: #27272a;
  position: relative;
}
.Modal__setting b::after {
  content: "";
  position: absolute;
  left: 2px;
  top: 2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #71717a;
  transition: .3s ease;
}
.Modal__setting b.active {
  background: linear-gradient(90deg,#ec4899,#7c3aed,#22d3ee);
}
.Modal__setting b.active::after {
  left: 18px;
  background: #ffffff;
}
.Modal__box > button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  padding: 10px 19px;
  border: 0;
  border-radius: 10px;
  background: linear-gradient(90deg,#ec4899,#7c3aed,#22d3ee);
  color: #ffffff;
  font-weight: 900;
  box-shadow: 0 0 20px rgba(168,85,247,.3);
}
@keyframes settingsRainbow {
  to {
    background-position: 0 0,500% 0;
  }
}`,
  },
  {
    id: 3084,
    name: "Ultimate Command Modal",
    preview: (
      <div className="modal-3084">
        <div className="modal-3084-box">
          <div className="modal-3084-header">
            <div>
              <i className="ri-command-fill"></i>
              <span>ULTIMATE COMMAND</span>
            </div>
            <i className="ri-more-fill"></i>
          </div>
          <div className="modal-3084-icon">
            <i className="ri-cpu-fill"></i>
          </div>
          <h3>System Override</h3>
          <p>You are about to activate an advanced system mode.</p>
          <div className="modal-3084-warning">
            <i className="ri-error-warning-fill"></i>
            <span>Advanced permissions required</span>
          </div>
          <div className="modal-3084-buttons">
            <button>
              <i className="ri-flashlight-fill"></i> Activate
            </button>
            <button>
              <i className="ri-arrow-left-line"></i> Cancel
            </button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__header">
      <div><i class="ri-command-fill"></i><span>ULTIMATE COMMAND</span></div>
      <i class="ri-more-fill"></i>
    </div>
    <div class="Modal__icon"><i class="ri-cpu-fill"></i></div>
    <h3>System Override</h3>
    <p>You are about to activate an advanced system mode.</p>
    <div class="Modal__warning"><i class="ri-error-warning-fill"></i><span>Advanced permissions required</span></div>
    <div class="Modal__buttons">
      <button><i class="ri-flashlight-fill"></i> Activate</button>
      <button><i class="ri-arrow-left-line"></i> Cancel</button>
    </div>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,.9);
}
.Modal__box {
  position: relative;
  width: 390px;
  padding: 28px;
  border: 1px solid transparent;
  border-radius: 18px;
  background:
    linear-gradient(145deg,#06070b,#10131c) padding-box,
    linear-gradient(90deg,#00e5ff,#7c3aed,#ec4899,#facc15,#00e5ff) border-box;
  background-size: auto,400% 100%;
  color: #ffffff;
  box-shadow:
    0 0 35px rgba(0,229,255,.22),
    0 0 55px rgba(124,58,237,.18);
  overflow: hidden;
  animation: commandRainbow 4s linear infinite;
}
.Modal__box::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(0,229,255,.04) 1px,transparent 1px),
    linear-gradient(90deg,rgba(0,229,255,.04) 1px,transparent 1px);
  background-size: 18px 18px;
  animation: commandGrid 3s linear infinite;
}
.Modal__header,
.Modal__icon,
.Modal__box h3,
.Modal__box p,
.Modal__warning,
.Modal__buttons {
  position: relative;
}
.Modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.Modal__header > div {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #67e8f9;
}
.Modal__header > div i {
  font-size: 16px;
  text-shadow: 0 0 10px #22d3ee;
}
.Modal__header span {
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__header > i {
  color: #64748b;
}
.Modal__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 76px;
  margin: 25px auto 15px;
  border: 2px solid transparent;
  border-radius: 20px;
  background:
    linear-gradient(#090d16,#090d16) padding-box,
    linear-gradient(135deg,#00e5ff,#7c3aed,#ec4899) border-box;
  color: #67e8f9;
  font-size: 30px;
  box-shadow: 0 0 28px rgba(0,229,255,.28);
  animation: commandCore 2s ease-in-out infinite;
}
.Modal__box h3 {
  text-align: center;
  font-size: 27px;
  margin: 0 0 7px;
}
.Modal__box p {
  text-align: center;
  color: #94a3b8;
}
.Modal__warning {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  padding: 11px;
  border: 1px solid rgba(250,204,21,.2);
  border-radius: 10px;
  background: rgba(250,204,21,.05);
  color: #fde68a;
  font-size: 10px;
}
.Modal__warning i {
  color: #facc15;
  font-size: 17px;
  text-shadow: 0 0 8px #facc15;
}
.Modal__buttons {
  display: flex;
  gap: 9px;
  margin-top: 18px;
}
.Modal__buttons button {
  flex: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 10px;
  border-radius: 9px;
  font-weight: 900;
  cursor: pointer;
}
.Modal__buttons button:first-child {
  border: 0;
  background: linear-gradient(90deg,#00bcd4,#7c3aed,#ec4899);
  color: #ffffff;
  box-shadow: 0 0 20px rgba(124,58,237,.35);
}
.Modal__buttons button:last-child {
  border: 1px solid #334155;
  background: rgba(255,255,255,.03);
  color: #94a3b8;
}
@keyframes commandRainbow {
  to {
    background-position: 0 0,400% 0;
  }
}
@keyframes commandGrid {
  to {
    background-position: 18px 18px;
  }
}
@keyframes commandCore {
  0%,100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08) rotate(2deg);
  }
}`,
  },
  {
    id: 3085,
    name: "Frost Guardian",
    preview: (
      <div className="modal-3085">
        <div className="modal-3085-box">
          <button className="modal-3085-close">
            <i className="ri-close-line"></i>
          </button>
          <div className="modal-3085-crystal">
            <i className="ri-shield-star-fill"></i>
          </div>
          <span>
            <i className="ri-snowflake-fill"></i> FROST PROTOCOL
          </span>
          <h3>Frost Guardian</h3>
          <p>
            The frozen core is protecting your system from incoming threats.
          </p>
          <div className="modal-3085-status">
            <i className="ri-checkbox-circle-fill"></i>
            <span>ICE SHIELD ACTIVE</span>
          </div>
          <button className="modal-3085-action">
            <i className="ri-shield-check-fill"></i>
            Activate Shield
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <button class="Modal__close"><i class="ri-close-line"></i></button>
    <div class="Modal__crystal">
      <i class="ri-shield-star-fill"></i>
    </div>
    <span><i class="ri-snowflake-fill"></i> FROST PROTOCOL</span>
    <h3>Frost Guardian</h3>
    <p>The frozen core is protecting your system from incoming threats.</p>
    <div class="Modal__status">
      <i class="ri-checkbox-circle-fill"></i>
      <span>ICE SHIELD ACTIVE</span>
    </div>
    <button class="Modal__action">
      <i class="ri-shield-check-fill"></i>
      Activate Shield
    </button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(2, 10, 20, 0.86);
  backdrop-filter: blur(12px);
}
.Modal__box {
  position: relative;
  width: 360px;
  padding: 30px;
  border: 1px solid transparent;
  border-radius: 22px;
  background:
    linear-gradient(145deg,#02101d,#082b43) padding-box,
    linear-gradient(90deg,#0ea5e9,#67e8f9,#ffffff,#38bdf8,#0ea5e9) border-box;
  color: #ffffff;
  text-align: center;
  box-shadow: 0 0 42px rgba(56,189,248,.28);
  overflow: hidden;
}
.Modal__box::before {
  content: "";
  position: absolute;
  inset: -40%;
  background: radial-gradient(circle,rgba(186,230,253,.12),transparent 55%);
  animation: guardianGlow 4s ease-in-out infinite;
}
.Modal__close {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(186,230,253,.18);
  border-radius: 50%;
  background: rgba(2,15,28,.65);
  color: #bae6fd;
}
.Modal__crystal {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 78px;
  height: 78px;
  margin: 0 auto 16px;
  border: 2px solid #67e8f9;
  border-radius: 20px;
  background: linear-gradient(145deg,#0c4a6e,#082f49);
  color: #e0f2fe;
  font-size: 31px;
  box-shadow:
    0 0 20px rgba(56,189,248,.4),
    inset 0 0 20px rgba(186,230,253,.08);
  animation: guardianCrystal 2s ease-in-out infinite;
}
.Modal__box > span {
  position: relative;
  color: #bae6fd;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box > span i {
  color: #67e8f9;
  text-shadow: 0 0 10px #38bdf8;
}
.Modal__box h3 {
  position: relative;
  margin: 10px 0 8px;
  font-size: 26px;
}
.Modal__box p {
  position: relative;
  color: #a5cfe5;
}
.Modal__status {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin: 18px 0;
  color: #67e8f9;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 1px;
}
.Modal__status i {
  text-shadow: 0 0 9px #22d3ee;
}
.Modal__action {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 11px 20px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(90deg,#0284c7,#22d3ee);
  color: #ffffff;
  font-weight: 900;
  box-shadow: 0 0 22px rgba(34,211,238,.35);
}
@keyframes guardianGlow {
  0%,100% {
    transform: scale(1);
    opacity: .5;
  }
  50% {
    transform: scale(1.15);
    opacity: .9;
  }
}
@keyframes guardianCrystal {
  0%,100% {
    transform: scale(1) rotate(0);
  }
  50% {
    transform: scale(1.07) rotate(2deg);
  }
}`,
  },
  {
    id: 3086,
    name: "Glacial Portal",
    preview: (
      <div className="modal-3086">
        <div className="modal-3086-box">
          <div className="modal-3086-ring">
            <div>
              <i className="ri-snowflake-line"></i>
            </div>
          </div>
          <span>
            <i className="ri-temp-cold-fill"></i> GLACIAL GATEWAY
          </span>
          <h3>Enter The Frozen Realm</h3>
          <p>A portal has opened inside the eternal ice.</p>
          <div className="modal-3086-actions">
            <button>
              <i className="ri-door-open-fill"></i> Enter
            </button>
            <button>
              <i className="ri-close-line"></i> Close
            </button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__ring">
      <div><i class="ri-snowflake-line"></i></div>
    </div>
    <span><i class="ri-temp-cold-fill"></i> GLACIAL GATEWAY</span>
    <h3>Enter The Frozen Realm</h3>
    <p>A portal has opened inside the eternal ice.</p>
    <div class="Modal__actions">
      <button><i class="ri-door-open-fill"></i> Enter</button>
      <button><i class="ri-close-line"></i> Close</button>
    </div>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(1,12,24,.88);
}
.Modal__box {
  position: relative;
  width: 370px;
  padding: 28px;
  border: 1px solid #38bdf8;
  border-radius: 24px;
  background: radial-gradient(circle at 50% 35%,#0c4a6e,#020617 68%);
  color: #ffffff;
  text-align: center;
  overflow: hidden;
  box-shadow:
    0 0 35px rgba(56,189,248,.3),
    inset 0 0 30px rgba(125,211,252,.05);
}
.Modal__ring {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 105px;
  height: 105px;
  margin: 0 auto 17px;
  border: 2px dashed #7dd3fc;
  border-radius: 50%;
  box-shadow:
    0 0 18px rgba(56,189,248,.25),
    inset 0 0 18px rgba(56,189,248,.1);
  animation: portalRing 5s linear infinite;
}
.Modal__ring div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border: 2px solid #bae6fd;
  border-radius: 50%;
  background: rgba(14,116,144,.25);
  color: #e0f2fe;
  font-size: 29px;
  box-shadow: 0 0 25px rgba(34,211,238,.4);
  animation: portalCore 2s ease-in-out infinite;
}
.Modal__box > span {
  color: #bae6fd;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box > span i {
  color: #67e8f9;
  text-shadow: 0 0 10px #38bdf8;
}
.Modal__box h3 {
  margin: 11px 0 8px;
  font-size: 25px;
}
.Modal__box p {
  color: #9cc7dc;
}
.Modal__actions {
  display: flex;
  justify-content: center;
  gap: 9px;
  margin-top: 20px;
}
.Modal__actions button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: 900;
}
.Modal__actions button:first-child {
  border: 0;
  background: linear-gradient(90deg,#0284c7,#22d3ee);
  color: #ffffff;
  box-shadow: 0 0 20px rgba(34,211,238,.35);
}
.Modal__actions button:last-child {
  border: 1px solid #164e63;
  background: rgba(2,15,28,.6);
  color: #7dd3fc;
}
@keyframes portalRing {
  to {
    transform: rotate(360deg);
  }
}
@keyframes portalCore {
  0%,100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 38px rgba(34,211,238,.65);
  }
}`,
  },
  {
    id: 3087,
    name: "Ice Crystal Vault",
    preview: (
      <div className="modal-3087">
        <div className="modal-3087-box">
          <div className="modal-3087-crystals">
            <i className="ri-gem-fill"></i>
            <i className="ri-gem-fill"></i>
            <i className="ri-gem-fill"></i>
          </div>
          <div className="modal-3087-icon">
            <i className="ri-lock-star-fill"></i>
          </div>
          <span>
            <i className="ri-key-2-fill"></i> FROZEN VAULT
          </span>
          <h3>Crystal Chamber</h3>
          <p>An ancient frozen vault has been discovered.</p>
          <div className="modal-3087-code">
            <span>ICE</span>
            <strong>7 4 9</strong>
            <span>Ω</span>
          </div>
          <button>
            <i className="ri-lock-unlock-fill"></i> Unlock Vault
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__crystals">
      <i class="ri-gem-fill"></i>
      <i class="ri-gem-fill"></i>
      <i class="ri-gem-fill"></i>
    </div>
    <div class="Modal__icon"><i class="ri-lock-star-fill"></i></div>
    <span><i class="ri-key-2-fill"></i> FROZEN VAULT</span>
    <h3>Crystal Chamber</h3>
    <p>An ancient frozen vault has been discovered.</p>
    <div class="Modal__code">
      <span>ICE</span>
      <strong>7 4 9</strong>
      <span>Ω</span>
    </div>
    <button><i class="ri-lock-unlock-fill"></i> Unlock Vault</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(2,8,18,.9);
}
.Modal__box {
  position: relative;
  width: 360px;
  padding: 30px;
  border: 1px solid transparent;
  border-radius: 20px;
  background:
    linear-gradient(145deg,#06121d,#0b2435) padding-box,
    linear-gradient(135deg,#38bdf8,#bae6fd,#ffffff,#0ea5e9) border-box;
  color: #ffffff;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 0 40px rgba(14,165,233,.27);
}
.Modal__crystals {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.Modal__crystals i {
  position: absolute;
  color: #bae6fd;
  text-shadow: 0 0 12px #38bdf8;
  opacity: .35;
  animation: crystalFloat 4s ease-in-out infinite;
}
.Modal__crystals i:nth-child(1) {
  top: 25px;
  left: 30px;
  font-size: 15px;
}
.Modal__crystals i:nth-child(2) {
  top: 80px;
  right: 28px;
  font-size: 11px;
  animation-delay: .8s;
}
.Modal__crystals i:nth-child(3) {
  bottom: 30px;
  left: 22px;
  font-size: 9px;
  animation-delay: 1.5s;
}
.Modal__icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  margin: 0 auto 15px;
  border: 1px solid #7dd3fc;
  border-radius: 18px;
  background: linear-gradient(145deg,#0c4a6e,#082f49);
  color: #e0f2fe;
  font-size: 29px;
  box-shadow: 0 0 25px rgba(56,189,248,.38);
  animation: vaultPulse 2s ease-in-out infinite;
}
.Modal__box > span {
  color: #bae6fd;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box > span i {
  color: #67e8f9;
  text-shadow: 0 0 9px #38bdf8;
}
.Modal__box h3 {
  margin: 10px 0 7px;
  font-size: 25px;
}
.Modal__box p {
  color: #9cc7dc;
}
.Modal__code {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 20px 0;
  padding: 13px;
  border: 1px solid rgba(125,211,252,.18);
  border-radius: 12px;
  background: rgba(2,15,28,.6);
}
.Modal__code span {
  color: #67e8f9;
  font-size: 9px;
  font-weight: 900;
  text-shadow: 0 0 8px #22d3ee;
}
.Modal__code strong {
  color: #e0f2fe;
  font-size: 18px;
  letter-spacing: 5px;
}
.Modal__box > button {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 20px;
  border: 1px solid #38bdf8;
  border-radius: 10px;
  background: rgba(14,165,233,.12);
  color: #bae6fd;
  font-weight: 900;
  box-shadow: 0 0 18px rgba(56,189,248,.22);
}
@keyframes crystalFloat {
  0%,100% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-8px) rotate(15deg);
  }
}
@keyframes vaultPulse {
  0%,100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.06);
  }
}`,
  },
  {
    id: 3088,
    name: "Frozen Storm",
    preview: (
      <div className="modal-3088">
        <div className="modal-3088-box">
          <div className="modal-3088-storm"></div>
          <div className="modal-3088-icon">
            <i className="ri-temp-cold-fill"></i>
          </div>
          <span>
            <i className="ri-windy-fill"></i> EXTREME WEATHER
          </span>
          <h3>Frozen Storm</h3>
          <p>A powerful arctic storm is approaching your current location.</p>
          <div className="modal-3088-data">
            <div>
              <i className="ri-temp-cold-line"></i>
              <strong>-24°C</strong>
              <span>TEMPERATURE</span>
            </div>
            <div>
              <i className="ri-windy-line"></i>
              <strong>91 km/h</strong>
              <span>WIND</span>
            </div>
          </div>
          <button>
            <i className="ri-map-pin-line"></i> Track Storm
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__storm"></div>
    <div class="Modal__icon"><i class="ri-temp-cold-fill"></i></div>
    <span><i class="ri-windy-fill"></i> EXTREME WEATHER</span>
    <h3>Frozen Storm</h3>
    <p>A powerful arctic storm is approaching your current location.</p>
    <div class="Modal__data">
      <div><i class="ri-temp-cold-line"></i><strong>-24°C</strong><span>TEMPERATURE</span></div>
      <div><i class="ri-windy-line"></i><strong>91 km/h</strong><span>WIND</span></div>
    </div>
    <button><i class="ri-map-pin-line"></i> Track Storm</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(1,7,15,.88);
}
.Modal__box {
  position: relative;
  width: 380px;
  padding: 30px;
  border: 1px solid #7dd3fc;
  border-radius: 22px;
  background: linear-gradient(145deg,#02101c,#07263c);
  color: #ffffff;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 0 45px rgba(56,189,248,.25);
}
.Modal__storm {
  position: absolute;
  inset: -50%;
  background: conic-gradient(
    from 0deg,
    rgba(14,165,233,.0),
    rgba(125,211,252,.15),
    rgba(255,255,255,.06),
    rgba(14,165,233,.0)
  );
  animation: stormSpin 6s linear infinite;
}
.Modal__icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  margin: 0 auto 15px;
  border-radius: 50%;
  background: radial-gradient(circle,#e0f2fe,#38bdf8,#075985);
  color: #ffffff;
  font-size: 30px;
  box-shadow: 0 0 30px rgba(56,189,248,.55);
  animation: stormPulse 1.8s ease-in-out infinite;
}
.Modal__box > span,
.Modal__box h3,
.Modal__box p,
.Modal__data,
.Modal__box > button {
  position: relative;
}
.Modal__box > span {
  color: #bae6fd;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box > span i {
  color: #67e8f9;
  text-shadow: 0 0 10px #38bdf8;
}
.Modal__box h3 {
  margin: 10px 0 7px;
  font-size: 26px;
}
.Modal__box p {
  color: #a5cfe5;
}
.Modal__data {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px;
  margin: 20px 0;
}
.Modal__data div {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 13px 8px;
  border: 1px solid rgba(125,211,252,.16);
  border-radius: 12px;
  background: rgba(2,15,28,.5);
}
.Modal__data i {
  color: #67e8f9;
  font-size: 18px;
}
.Modal__data strong {
  color: #e0f2fe;
  font-size: 16px;
}
.Modal__data span {
  color: #647b8c;
  font-size: 7px;
  font-weight: 900;
  letter-spacing: 1px;
}
.Modal__box > button {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 21px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(90deg,#0284c7,#38bdf8);
  color: #ffffff;
  font-weight: 900;
  box-shadow: 0 0 20px rgba(56,189,248,.35);
}
@keyframes stormSpin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes stormPulse {
  0%,100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
    box-shadow: 0 0 42px rgba(56,189,248,.7);
  }
}`,
  },
  {
    id: 3089,
    name: "Absolute Zero",
    preview: (
      <div className="modal-3089">
        <div className="modal-3089-box">
          <div className="modal-3089-rays"></div>
          <div className="modal-3089-core">
            <i className="ri-snowflake-fill"></i>
          </div>
          <span>
            <i className="ri-flashlight-fill"></i> ABSOLUTE ZERO
          </span>
          <h3>Frozen Core Online</h3>
          <p>The temperature has reached a critical freezing state.</p>
          <div className="modal-3089-meter">
            <div className="modal-3089-meter-fill"></div>
          </div>
          <div className="modal-3089-reading">
            <span>CORE TEMPERATURE</span>
            <strong>-273.15°C</strong>
          </div>
          <div className="modal-3089-actions">
            <button>
              <i className="ri-snowflake-fill"></i> Stabilize
            </button>
            <button>
              <i className="ri-close-line"></i>
            </button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__rays"></div>
    <div class="Modal__core">
      <i class="ri-snowflake-fill"></i>
    </div>
    <span><i class="ri-flashlight-fill"></i> ABSOLUTE ZERO</span>
    <h3>Frozen Core Online</h3>
    <p>The temperature has reached a critical freezing state.</p>
    <div class="Modal__meter">
      <div class="Modal__meter-fill"></div>
    </div>
    <div class="Modal__reading">
      <span>CORE TEMPERATURE</span>
      <strong>-273.15°C</strong>
    </div>
    <div class="Modal__actions">
      <button><i class="ri-snowflake-fill"></i> Stabilize</button>
      <button><i class="ri-close-line"></i></button>
    </div>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,5,15,.92);
  backdrop-filter: blur(14px);
}
.Modal__box {
  position: relative;
  width: 370px;
  padding: 30px;
  border: 1px solid transparent;
  border-radius: 24px;
  background:
    linear-gradient(145deg,#020617,#061b30) padding-box,
    linear-gradient(90deg,#0284c7,#67e8f9,#ffffff,#22d3ee,#0284c7) border-box;
  color: #ffffff;
  text-align: center;
  overflow: hidden;
  box-shadow:
    0 0 40px rgba(34,211,238,.3),
    inset 0 0 30px rgba(125,211,252,.05);
}
.Modal__rays {
  position: absolute;
  width: 260px;
  height: 260px;
  top: -110px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background:
    repeating-conic-gradient(
      from 0deg,
      rgba(125,211,252,.12) 0deg 8deg,
      transparent 8deg 18deg
    );
  animation: zeroRays 8s linear infinite;
}
.Modal__core {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 86px;
  height: 86px;
  margin: 0 auto 16px;
  border: 2px solid #e0f2fe;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    #ffffff 0%,
    #bae6fd 25%,
    #38bdf8 50%,
    #075985 100%
  );
  color: #082f49;
  font-size: 34px;
  box-shadow:
    0 0 20px rgba(224,242,254,.7),
    0 0 50px rgba(56,189,248,.4);
  animation: zeroCore 1.8s ease-in-out infinite;
}
.Modal__box > span {
  position: relative;
  color: #bae6fd;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box > span i {
  color: #67e8f9;
  text-shadow: 0 0 9px #22d3ee;
}
.Modal__box h3 {
  position: relative;
  margin: 10px 0 7px;
  font-size: 25px;
}
.Modal__box p {
  position: relative;
  color: #9cc7dc;
}
.Modal__meter {
  position: relative;
  height: 7px;
  margin: 20px 0 13px;
  border-radius: 999px;
  background: #082f49;
  overflow: hidden;
}
.Modal__meter-fill {
  width: 92%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg,#0284c7,#67e8f9,#ffffff);
  box-shadow: 0 0 12px #67e8f9;
  animation: zeroMeter 1.8s ease-in-out infinite alternate;
}
.Modal__reading {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #647b8c;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
}
.Modal__reading strong {
  color: #e0f2fe;
  font-size: 13px;
  text-shadow: 0 0 9px #38bdf8;
}
.Modal__actions {
  position: relative;
  display: flex;
  gap: 9px;
  margin-top: 20px;
}
.Modal__actions button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: 900;
}
.Modal__actions button:first-child {
  flex: 1;
  border: 0;
  background: linear-gradient(90deg,#0369a1,#22d3ee);
  color: #ffffff;
  box-shadow: 0 0 20px rgba(34,211,238,.35);
}
.Modal__actions button:last-child {
  width: 42px;
  border: 1px solid #164e63;
  background: rgba(2,15,28,.6);
  color: #7dd3fc;
}
@keyframes zeroRays {
  to {
    transform: translateX(-50%) rotate(360deg);
  }
}
@keyframes zeroCore {
  0%,100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
    box-shadow:
      0 0 30px rgba(224,242,254,.85),
      0 0 65px rgba(56,189,248,.55);
  }
}
@keyframes zeroMeter {
  from {
    width: 88%;
  }
  to {
    width: 97%;
  }
}`,
  },
  {
    id: 3090,
    name: "Verdant Guardian",
    preview: (
      <div className="modal-3090">
        <div className="modal-3090-box">
          <button className="modal-3090-close">
            <i className="ri-close-line"></i>
          </button>
          <div className="modal-3090-orb">
            <i className="ri-plant-fill"></i>
          </div>
          <span>
            <i className="ri-leaf-fill"></i> VERDANT CORE
          </span>
          <h3>Verdant Guardian</h3>
          <p>
            The ancient forest has awakened and is protecting the living world.
          </p>
          <div className="modal-3090-status">
            <i className="ri-checkbox-circle-fill"></i>
            <span>NATURE SHIELD ACTIVE</span>
          </div>
          <button className="modal-3090-action">
            <i className="ri-seedling-fill"></i>
            Awaken Guardian
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <button class="Modal__close"><i class="ri-close-line"></i></button>
    <div class="Modal__orb"><i class="ri-plant-fill"></i></div>
    <span><i class="ri-leaf-fill"></i> VERDANT CORE</span>
    <h3>Verdant Guardian</h3>
    <p>The ancient forest has awakened and is protecting the living world.</p>
    <div class="Modal__status">
      <i class="ri-checkbox-circle-fill"></i>
      <span>NATURE SHIELD ACTIVE</span>
    </div>
    <button class="Modal__action">
      <i class="ri-seedling-fill"></i>
      Awaken Guardian
    </button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(1, 12, 6, 0.86);
  backdrop-filter: blur(12px);
}
.Modal__box {
  position: relative;
  width: 365px;
  padding: 30px;
  border: 1px solid transparent;
  border-radius: 24px;
  background:
    linear-gradient(145deg, #03130a, #092e18) padding-box,
    linear-gradient(90deg, #16a34a, #4ade80, #bbf7d0, #22c55e, #16a34a) border-box;
  color: #ffffff;
  text-align: center;
  box-shadow:
    0 0 40px rgba(34, 197, 94, 0.28),
    inset 0 0 25px rgba(74, 222, 128, 0.05);
  overflow: hidden;
}
.Modal__box::before {
  content: "";
  position: absolute;
  inset: -50%;
  background: radial-gradient(circle, rgba(74, 222, 128, 0.14), transparent 55%);
  animation: guardianGlow 4s ease-in-out infinite;
}
.Modal__box::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(74, 222, 128, 0.15) 1px, transparent 2px),
    radial-gradient(circle at 80% 70%, rgba(187, 247, 208, 0.12) 1px, transparent 2px);
  background-size: 38px 38px, 52px 52px;
  animation: leafParticles 7s linear infinite;
}
.Modal__close {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 3;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(74, 222, 128, 0.2);
  border-radius: 50%;
  background: rgba(2, 15, 8, 0.7);
  color: #86efac;
}
.Modal__orb {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82px;
  height: 82px;
  margin: 0 auto 16px;
  border: 2px solid #4ade80;
  border-radius: 50%;
  background: radial-gradient(circle, #86efac, #16a34a 45%, #052e16);
  color: #ecfdf5;
  font-size: 32px;
  box-shadow:
    0 0 22px rgba(74, 222, 128, 0.6),
    inset 0 0 20px rgba(187, 247, 208, 0.15);
  animation: guardianOrb 2.3s ease-in-out infinite;
}
.Modal__box > span,
.Modal__box h3,
.Modal__box p,
.Modal__status,
.Modal__action {
  position: relative;
  z-index: 2;
}
.Modal__box > span {
  color: #bbf7d0;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box > span i {
  color: #4ade80;
  text-shadow: 0 0 10px #22c55e;
}
.Modal__box h3 {
  margin: 10px 0 8px;
  font-size: 26px;
}
.Modal__box p {
  color: #a7d6b4;
}
.Modal__status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin: 18px 0;
  color: #4ade80;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 1px;
}
.Modal__status i {
  text-shadow: 0 0 9px #22c55e;
}
.Modal__action {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 11px 21px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(90deg, #15803d, #22c55e, #4ade80);
  color: #ffffff;
  font-weight: 900;
  box-shadow: 0 0 22px rgba(34, 197, 94, 0.4);
}
@keyframes guardianGlow {
  0%, 100% {
    transform: scale(0.9);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.15);
    opacity: 1;
  }
}
@keyframes guardianOrb {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
    box-shadow:
      0 0 38px rgba(74, 222, 128, 0.75),
      inset 0 0 25px rgba(187, 247, 208, 0.2);
  }
}
@keyframes leafParticles {
  to {
    background-position: 38px 38px, -52px 52px;
  }
}`,
  },
  {
    id: 3091,
    name: "Nature Awakening",
    preview: (
      <div className="modal-3091">
        <div className="modal-3091-box">
          <div className="modal-3091-vines">
            <i className="ri-leaf-line"></i>
            <i className="ri-leaf-2-fill"></i>
            <i className="ri-leaf-fill"></i>
            <i className="ri-seedling-fill"></i>
          </div>
          <div className="modal-3091-icon">
            <i className="ri-seedling-fill"></i>
          </div>
          <span>
            <i className="ri-sparkling-fill"></i> NATURE AWAKENING
          </span>
          <h3>Life Force Rising</h3>
          <p>The earth energy is spreading through the entire ecosystem.</p>
          <div className="modal-3091-energy">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <button>
            <i className="ri-sun-foggy-fill"></i> Restore Nature
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__vines">
      <i class="ri-leaf-line"></i>
      <i class="ri-leaf-2-fill"></i>
      <i class="ri-leaf-fill"></i>
      <i class="ri-seedling-fill"></i>
    </div>
    <div class="Modal__icon"><i class="ri-seedling-fill"></i></div>
    <span><i class="ri-sparkling-fill"></i> NATURE AWAKENING</span>
    <h3>Life Force Rising</h3>
    <p>The earth energy is spreading through the entire ecosystem.</p>
    <div class="Modal__energy">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <button><i class="ri-sun-foggy-fill"></i> Restore Nature</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(2, 15, 7, 0.9);
}
.Modal__box {
  position: relative;
  width: 370px;
  padding: 30px;
  border: 1px solid #22c55e;
  border-radius: 22px;
  background:
    radial-gradient(circle at 50% 0%, #14532d, #03130a 65%);
  color: #ffffff;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 0 42px rgba(34, 197, 94, 0.26);
}
.Modal__vines {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.Modal__vines i {
  position: absolute;
  color: #4ade80;
  opacity: 0.35;
  text-shadow: 0 0 10px #22c55e;
  animation: vineFloat 4s ease-in-out infinite;
}
.Modal__vines i:nth-child(1) {
  top: 20px;
  left: 22px;
  font-size: 19px;
  transform: rotate(-25deg);
}
.Modal__vines i:nth-child(2) {
  top: 70px;
  right: 26px;
  font-size: 13px;
  animation-delay: 0.8s;
}
.Modal__vines i:nth-child(3) {
  bottom: 45px;
  left: 25px;
  font-size: 15px;
  animation-delay: 1.4s;
}
.Modal__vines i:nth-child(4) {
  bottom: 25px;
  right: 28px;
  font-size: 11px;
  animation-delay: 2s;
}
.Modal__icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 78px;
  height: 78px;
  margin: 0 auto 16px;
  border: 2px solid #86efac;
  border-radius: 24px 24px 24px 6px;
  background: linear-gradient(145deg, #166534, #052e16);
  color: #bbf7d0;
  font-size: 30px;
  box-shadow:
    0 0 25px rgba(74, 222, 128, 0.4),
    inset 0 0 20px rgba(134, 239, 172, 0.08);
  animation: seedling 2.2s ease-in-out infinite;
}
.Modal__box > span {
  color: #86efac;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box h3 {
  margin: 10px 0 7px;
  font-size: 25px;
}
.Modal__box p {
  color: #a7d6b4;
}
.Modal__energy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 45px;
  margin: 20px 0;
}
.Modal__energy div {
  width: 6px;
  height: 15px;
  border-radius: 999px;
  background: linear-gradient(#22c55e, #86efac);
  box-shadow: 0 0 10px #22c55e;
  animation: lifeWave 1.1s ease-in-out infinite;
}
.Modal__energy div:nth-child(2) {
  animation-delay: .15s;
}
.Modal__energy div:nth-child(3) {
  animation-delay: .3s;
}
.Modal__energy div:nth-child(4) {
  animation-delay: .45s;
}
.Modal__energy div:nth-child(5) {
  animation-delay: .6s;
}
.Modal__box > button {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 21px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(90deg, #15803d, #22c55e);
  color: #ffffff;
  font-weight: 900;
  box-shadow: 0 0 22px rgba(34, 197, 94, 0.32);
}
@keyframes vineFloat {
  0%, 100% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-7px) rotate(8deg);
  }
}
@keyframes seedling {
  0%, 100% {
    transform: scale(1) rotate(0);
  }
  50% {
    transform: scale(1.07) rotate(-2deg);
  }
}
@keyframes lifeWave {
  0%, 100% {
    height: 10px;
  }
  50% {
    height: 36px;
  }
}`,
  },
  {
    id: 3092,
    name: "Emerald Grove",
    preview: (
      <div className="modal-3092">
        <div className="modal-3092-box">
          <div className="modal-3092-sun">
            <i className="ri-sun-fill"></i>
          </div>
          <div className="modal-3092-tree">
            <i className="ri-tree-fill"></i>
          </div>
          <span>
            <i className="ri-leaf-4-fill"></i> EMERALD GROVE
          </span>
          <h3>Forest Sanctuary</h3>
          <p>A hidden sanctuary surrounded by ancient emerald energy.</p>
          <div className="modal-3092-info">
            <div>
              <i className="ri-temp-hot-line"></i>
              <strong>24°C</strong>
              <span>CLIMATE</span>
            </div>
            <div>
              <i className="ri-drop-fill"></i>
              <strong>82%</strong>
              <span>MOISTURE</span>
            </div>
            <div>
              <i className="ri-windy-fill"></i>
              <strong>12 km/h</strong>
              <span>WIND</span>
            </div>
          </div>
          <button>
            <i className="ri-map-pin-2-fill"></i> Enter Grove
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__sun"><i class="ri-sun-fill"></i></div>
    <div class="Modal__tree"><i class="ri-tree-fill"></i></div>
    <span><i class="ri-leaf-4-fill"></i> EMERALD GROVE</span>
    <h3>Forest Sanctuary</h3>
    <p>A hidden sanctuary surrounded by ancient emerald energy.</p>
    <div class="Modal__info">
      <div><i class="ri-temp-hot-line"></i><strong>24°C</strong><span>CLIMATE</span></div>
      <div><i class="ri-drop-fill"></i><strong>82%</strong><span>MOISTURE</span></div>
      <div><i class="ri-windy-fill"></i><strong>12 km/h</strong><span>WIND</span></div>
    </div>
    <button><i class="ri-map-pin-2-fill"></i> Enter Grove</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(1, 10, 4, 0.9);
}
.Modal__box {
  position: relative;
  width: 385px;
  padding: 30px;
  border: 1px solid #34d399;
  border-radius: 25px;
  background:
    radial-gradient(circle at 50% 0%, #14532d, #03140a 62%),
    #03140a;
  color: #ffffff;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 0 48px rgba(52, 211, 153, 0.26);
}
.Modal__box::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 25%, rgba(74, 222, 128, 0.14) 1px, transparent 2px),
    radial-gradient(circle at 70% 60%, rgba(187, 247, 208, 0.12) 1px, transparent 2px);
  background-size: 30px 30px, 45px 45px;
  animation: groveParticles 6s linear infinite;
}
.Modal__sun {
  position: absolute;
  top: -45px;
  right: -25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle, #fef08a, #facc15, transparent 68%);
  color: #fef9c3;
  font-size: 32px;
  opacity: 0.5;
  animation: groveSun 4s ease-in-out infinite;
}
.Modal__tree {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 84px;
  margin: 5px auto 15px;
  border: 2px solid #4ade80;
  border-radius: 50%;
  background: radial-gradient(circle, #166534, #052e16);
  color: #86efac;
  font-size: 35px;
  box-shadow:
    0 0 25px rgba(34, 197, 94, 0.45),
    inset 0 0 20px rgba(134, 239, 172, 0.08);
  animation: treePulse 2.5s ease-in-out infinite;
}
.Modal__box > span {
  color: #a7f3d0;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box > span i {
  color: #4ade80;
  text-shadow: 0 0 10px #22c55e;
}
.Modal__box h3 {
  position: relative;
  margin: 10px 0 7px;
  font-size: 26px;
}
.Modal__box p {
  position: relative;
  color: #a7d6b4;
}
.Modal__info {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin: 20px 0;
}
.Modal__info div {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 11px 5px;
  border: 1px solid rgba(134, 239, 172, 0.12);
  border-radius: 12px;
  background: rgba(2, 20, 9, 0.55);
}
.Modal__info i {
  color: #4ade80;
  font-size: 17px;
}
.Modal__info strong {
  color: #dcfce7;
  font-size: 13px;
}
.Modal__info span {
  color: #5d8067;
  font-size: 7px;
  font-weight: 900;
}
.Modal__box > button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 11px 22px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(90deg, #15803d, #34d399);
  color: #ffffff;
  font-weight: 900;
  box-shadow: 0 0 22px rgba(52, 211, 153, 0.35);
}
@keyframes groveParticles {
  to {
    background-position: 30px 30px, -45px 45px;
  }
}
@keyframes groveSun {
  0%, 100% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.1);
  }
}
@keyframes treePulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
}`,
  },
  {
    id: 3093,
    name: "Poison Bloom",
    preview: (
      <div className="modal-3093">
        <div className="modal-3093-box">
          <div className="modal-3093-bloom">
            <i className="ri-flower-fill"></i>
          </div>
          <span>
            <i className="ri-skull-2-fill"></i> TOXIC BOTANICA
          </span>
          <h3>Poison Bloom</h3>
          <p>A rare flower has released a powerful natural toxin.</p>
          <div className="modal-3093-warning">
            <i className="ri-error-warning-fill"></i>
            <span>TOXICITY LEVEL: CRITICAL</span>
          </div>
          <div className="modal-3093-meter">
            <span></span>
          </div>
          <button>
            <i className="ri-shield-cross-fill"></i> Contain Poison
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__bloom">
      <i class="ri-flower-fill"></i>
    </div>
    <span><i class="ri-skull-2-fill"></i> TOXIC BOTANICA</span>
    <h3>Poison Bloom</h3>
    <p>A rare flower has released a powerful natural toxin.</p>
    <div class="Modal__warning">
      <i class="ri-error-warning-fill"></i>
      <span>TOXICITY LEVEL: CRITICAL</span>
    </div>
    <div class="Modal__meter">
      <span></span>
    </div>
    <button><i class="ri-shield-cross-fill"></i> Contain Poison</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(4, 10, 1, 0.9);
}
.Modal__box {
  position: relative;
  width: 355px;
  padding: 30px;
  border: 1px solid #84cc16;
  border-radius: 22px;
  background: linear-gradient(145deg, #081300, #192900);
  color: #ffffff;
  text-align: center;
  box-shadow: 0 0 42px rgba(132, 204, 22, 0.25);
  overflow: hidden;
}
.Modal__box::before {
  content: "";
  position: absolute;
  width: 180px;
  height: 180px;
  top: -80px;
  right: -70px;
  border-radius: 50%;
  background: #84cc16;
  filter: blur(70px);
  opacity: 0.18;
  animation: poisonGlow 2s ease-in-out infinite alternate;
}
.Modal__bloom {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82px;
  height: 82px;
  margin: 0 auto 16px;
  border: 2px solid #a3e635;
  border-radius: 50%;
  background: radial-gradient(circle, #bef264, #65a30d 45%, #1a2e05);
  color: #f7fee7;
  font-size: 34px;
  box-shadow:
    0 0 25px rgba(132, 204, 22, 0.55),
    inset 0 0 20px rgba(217, 249, 157, 0.15);
  animation: poisonBloom 1.8s ease-in-out infinite;
}
.Modal__box > span {
  color: #bef264;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box > span i {
  color: #a3e635;
  text-shadow: 0 0 10px #84cc16;
}
.Modal__box h3 {
  margin: 10px 0 7px;
  font-size: 26px;
}
.Modal__box p {
  color: #b7c99a;
}
.Modal__warning {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin: 19px 0 12px;
  padding: 10px;
  border: 1px solid rgba(190, 242, 100, 0.2);
  border-radius: 10px;
  background: rgba(132, 204, 22, 0.06);
  color: #d9f99d;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 1px;
}
.Modal__warning i {
  color: #bef264;
  font-size: 17px;
  text-shadow: 0 0 9px #84cc16;
}
.Modal__meter {
  height: 8px;
  margin: 0 0 20px;
  border-radius: 999px;
  background: #172305;
  overflow: hidden;
}
.Modal__meter span {
  display: block;
  width: 91%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #65a30d, #bef264, #facc15);
  box-shadow: 0 0 12px #a3e635;
  animation: poisonMeter 1.5s ease-in-out infinite alternate;
}
.Modal__box > button {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 20px;
  border: 1px solid #84cc16;
  border-radius: 999px;
  background: rgba(132, 204, 22, 0.1);
  color: #d9f99d;
  font-weight: 900;
  box-shadow: 0 0 18px rgba(132, 204, 22, 0.22);
}
@keyframes poisonGlow {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1.25);
  }
}
@keyframes poisonBloom {
  0%, 100% {
    transform: scale(1) rotate(0);
  }
  50% {
    transform: scale(1.08) rotate(4deg);
  }
}
@keyframes poisonMeter {
  from {
    width: 86%;
  }
  to {
    width: 96%;
  }
}`,
  },
  {
    id: 3094,
    name: "Earthheart Nexus",
    preview: (
      <div className="modal-3094">
        <div className="modal-3094-box">
          <div className="modal-3094-orbit orbit-one"></div>
          <div className="modal-3094-orbit orbit-two"></div>
          <div className="modal-3094-core">
            <i className="ri-earth-fill"></i>
          </div>
          <span>
            <i className="ri-earth-fill"></i> EARTHHEART NEXUS
          </span>
          <h3>Nature's Core</h3>
          <p>
            The planet's living energy is synchronized with the ancient
            earthheart.
          </p>
          <div className="modal-3094-energy">
            <span>
              <i className="ri-leaf-fill"></i> FOREST
            </span>
            <span>
              <i className="ri-drop-fill"></i> WATER
            </span>
            <span>
              <i className="ri-sun-fill"></i> SUN
            </span>
            <span>
              <i className="ri-plant-fill"></i> LIFE
            </span>
          </div>
          <button>
            <i className="ri-links-fill"></i> Synchronize
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <div class="Modal__box">
    <div class="Modal__orbit orbit-one"></div>
    <div class="Modal__orbit orbit-two"></div>
    <div class="Modal__core">
      <i class="ri-earth-fill"></i>
    </div>
    <span><i class="ri-earth-fill"></i> EARTHHEART NEXUS</span>
    <h3>Nature's Core</h3>
    <p>The planet's living energy is synchronized with the ancient earthheart.</p>
    <div class="Modal__energy">
      <span><i class="ri-leaf-fill"></i> FOREST</span>
      <span><i class="ri-drop-fill"></i> WATER</span>
      <span><i class="ri-sun-fill"></i> SUN</span>
      <span><i class="ri-plant-fill"></i> LIFE</span>
    </div>
    <button><i class="ri-links-fill"></i> Synchronize</button>
  </div>
</div>`,
    css: `.Modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(1, 8, 4, 0.92);
  backdrop-filter: blur(14px);
}
.Modal__box {
  position: relative;
  width: 390px;
  padding: 32px;
  border: 1px solid transparent;
  border-radius: 26px;
  background:
    linear-gradient(145deg, #03130a, #092a18) padding-box,
    linear-gradient(90deg, #166534, #22c55e, #86efac, #4ade80, #166534) border-box;
  color: #ffffff;
  text-align: center;
  overflow: hidden;
  box-shadow:
    0 0 45px rgba(34, 197, 94, 0.3),
    inset 0 0 30px rgba(74, 222, 128, 0.05);
}
.Modal__orbit {
  position: absolute;
  left: 50%;
  top: 105px;
  border: 1px solid rgba(134, 239, 172, 0.35);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.orbit-one {
  width: 180px;
  height: 70px;
  animation: earthOrbitOne 4s linear infinite;
}
.orbit-two {
  width: 130px;
  height: 50px;
  border-color: rgba(74, 222, 128, 0.25);
  animation: earthOrbitTwo 3s linear infinite reverse;
}
.Modal__core {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 88px;
  margin: 10px auto 18px;
  border: 2px solid #4ade80;
  border-radius: 50%;
  background: radial-gradient(circle, #bbf7d0 0%, #22c55e 35%, #14532d 70%, #022c14 100%);
  color: #ecfdf5;
  font-size: 34px;
  box-shadow:
    0 0 25px rgba(74, 222, 128, 0.65),
    0 0 55px rgba(34, 197, 94, 0.3);
  animation: earthCore 2.4s ease-in-out infinite;
}
.Modal__box > span,
.Modal__box h3,
.Modal__box p,
.Modal__energy,
.Modal__box > button {
  position: relative;
}
.Modal__box > span {
  color: #86efac;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 2px;
}
.Modal__box > span i {
  color: #4ade80;
  text-shadow: 0 0 10px #22c55e;
}
.Modal__box h3 {
  margin: 10px 0 7px;
  font-size: 27px;
}
.Modal__box p {
  color: #a7d6b4;
}
.Modal__energy {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin: 21px 0;
}
.Modal__energy span {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 9px 5px;
  border: 1px solid rgba(134, 239, 172, 0.12);
  border-radius: 10px;
  background: rgba(2, 20, 9, 0.5);
  color: #a7f3d0;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
}
.Modal__energy i {
  color: #4ade80;
  font-size: 14px;
  text-shadow: 0 0 8px #22c55e;
}
.Modal__box > button {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 11px 23px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(90deg, #166534, #22c55e, #4ade80);
  color: #ffffff;
  font-weight: 900;
  box-shadow: 0 0 24px rgba(34, 197, 94, 0.4);
}
@keyframes earthOrbitOne {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes earthOrbitTwo {
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
@keyframes earthCore {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
    box-shadow:
      0 0 35px rgba(74, 222, 128, 0.8),
      0 0 70px rgba(34, 197, 94, 0.4);
  }
}`,
  },
  {
    id: 3095,
    name: "Void Emperor",
    preview: (
      <div className="modal-3095">
        <div className="modal-3095-box">
          <button className="modal-3095-close">
            <i className="ri-close-line"></i>
          </button>
          <div className="modal-3095-aura"></div>
          <div className="modal-3095-crown">
            <i className="ri-vip-crown-fill"></i>
          </div>
          <span>
            <i className="ri-skull-2-fill"></i> BLACK AURA
          </span>
          <h3>Void Emperor</h3>
          <p>The darkness has chosen its ruler.</p>
          <div className="modal-3095-power">
            <span>VOID POWER</span>
            <strong>99.8%</strong>
          </div>
          <button className="modal-3095-action">
            <i className="ri-flashlight-fill"></i>
            Awaken
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <button class="Modal-close"><i class="ri-close-line"></i></button>
  <div class="Modal-aura"></div>
  <div class="Modal-icon"><i class="ri-vip-crown-fill"></i></div>
  <span><i class="ri-skull-2-fill"></i> BLACK AURA</span>
  <h3>Void Emperor</h3>
  <p>The darkness has chosen its ruler.</p>
  <div class="Modal-power">
    <span>VOID POWER</span>
    <strong>99.8%</strong>
  </div>
  <button class="Modal-action"><i class="ri-flashlight-fill"></i>Awaken</button>
</div>`,
    css: `.Modal {
  position: relative;
  width: 380px;
  padding: 30px;
  border: 1px solid #3f3f46;
  border-radius: 24px;
  background: linear-gradient(145deg, #030303, #111113);
  color: #ffffff;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.9);
}
.Modal-aura {
  position: absolute;
  inset: -80px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.22), transparent 62%);
  animation: voidAura 3s ease-in-out infinite;
}
@keyframes voidAura {
  0%, 100% { transform: scale(0.85); opacity: 0.45; }
  50% { transform: scale(1.15); opacity: 1; }
}`,
    javascript: `const button = document.querySelector(".Modal-action");
button.addEventListener("click", () => {
  button.innerHTML = '<i class="ri-loader-4-line"></i> Awakening...';
});`,
  },
  {
    id: 3096,
    name: "Shadow Singularity",
    preview: (
      <div className="modal-3096">
        <div className="modal-3096-box">
          <button className="modal-3096-close">
            <i className="ri-close-line"></i>
          </button>
          <div className="modal-3096-singularity">
            <i className="ri-planet-fill"></i>
          </div>
          <span>
            <i className="ri-radar-fill"></i> SINGULARITY DETECTED
          </span>
          <h3>Shadow Singularity</h3>
          <p>A collapsed core consuming every trace of light.</p>
          <div className="modal-3096-stats">
            <div>
              <i className="ri-flashlight-fill"></i>
              <strong>0%</strong>
              <span>LIGHT</span>
            </div>
            <div>
              <i className="ri-timer-flash-fill"></i>
              <strong>∞</strong>
              <span>TIME</span>
            </div>
            <div>
              <i className="ri-infinity-line"></i>
              <strong>MAX</strong>
              <span>GRAVITY</span>
            </div>
          </div>
          <button className="modal-3096-action">
            <i className="ri-search-eye-line"></i>
            Enter Void
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <button class="Modal-close"><i class="ri-close-line"></i></button>
  <div class="Modal-singularity"><i class="ri-planet-fill"></i></div>
  <span><i class="ri-radar-fill"></i> SINGULARITY DETECTED</span>
  <h3>Shadow Singularity</h3>
  <p>A collapsed core consuming every trace of light.</p>
  <div class="Modal-stats">
    <div><i class="ri-flashlight-fill"></i><strong>0%</strong><span>LIGHT</span></div>
    <div><i class="ri-timer-flash-line"></i><strong>∞</strong><span>TIME</span></div>
    <div><i class="ri-infinity-line"></i><strong>MAX</strong><span>GRAVITY</span></div>
  </div>
  <button class="Modal-action"><i class="ri-search-eye-line"></i>Enter Void</button>
</div>`,
    css: `.Modal {
  width: 390px;
  padding: 32px;
  border: 1px solid #27272a;
  border-radius: 26px;
  background: radial-gradient(circle at 50% 30%, #18181b, #000000 72%);
  color: #ffffff;
  text-align: center;
  box-shadow: 0 0 55px rgba(0, 0, 0, 1);
}
.Modal-singularity {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95px;
  height: 95px;
  margin: 0 auto 18px;
  border: 2px solid #71717a;
  border-radius: 50%;
  background: radial-gradient(circle, #ffffff 0%, #52525b 8%, #18181b 34%, #000000 70%);
  color: #ffffff;
  font-size: 34px;
  box-shadow: 0 0 35px rgba(139, 92, 246, 0.4);
  animation: singularityPulse 2s ease-in-out infinite;
}
.Modal-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin: 20px 0;
}
.Modal-stats div {
  padding: 12px 5px;
  border: 1px solid #27272a;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
}
.Modal-stats i {
  display: block;
  margin-bottom: 5px;
  color: #a78bfa;
}
.Modal-stats strong {
  display: block;
  font-size: 15px;
}
.Modal-stats span {
  color: #71717a;
  font-size: 7px;
  font-weight: 900;
}
@keyframes singularityPulse {
  0%, 100% { transform: scale(1) rotate(0); }
  50% { transform: scale(1.1) rotate(180deg); }
}`,
    javascript: `const button = document.querySelector(".Modal-action");
button.addEventListener("click", () => {
  document.querySelector(".Modal-singularity").style.transform = "scale(1.5)";
});`,
  },
  {
    id: 3097,
    name: "Dark Phantom",
    preview: (
      <div className="modal-3097">
        <div className="modal-3097-box">
          <div className="modal-3097-smoke"></div>
          <button className="modal-3097-close">
            <i className="ri-close-line"></i>
          </button>
          <div className="modal-3097-mask">
            <i className="ri-ghost-2-fill"></i>
          </div>
          <span>
            <i className="ri-eye-close-fill"></i> PHANTOM ENTITY
          </span>
          <h3>Dark Phantom</h3>
          <p>Something is watching from beyond the shadows.</p>
          <div className="modal-3097-scan">
            <span>ENTITY SIGNAL</span>
            <div>
              <i></i>
            </div>
            <strong>UNSTABLE</strong>
          </div>
          <button className="modal-3097-action">
            <i className="ri-scan-2-line"></i>
            Scan Entity
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <button class="Modal-close"><i class="ri-close-line"></i></button>
  <div class="Modal-mask"><i class="ri-ghost-2-fill"></i></div>
  <span><i class="ri-eye-close-fill"></i> PHANTOM ENTITY</span>
  <h3>Dark Phantom</h3>
  <p>Something is watching from beyond the shadows.</p>
  <div class="Modal-scan">
    <span>ENTITY SIGNAL</span>
    <div><i></i></div>
    <strong>UNSTABLE</strong>
  </div>
  <button class="Modal-action"><i class="ri-scan-2-line"></i>Scan Entity</button>
</div>`,
    css: `.Modal {
  position: relative;
  width: 370px;
  padding: 30px;
  border: 1px solid #312e81;
  border-radius: 24px;
  background: linear-gradient(160deg, #050505, #09090b);
  color: #ffffff;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 0 50px rgba(49, 46, 129, 0.35);
}
.Modal-mask {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82px;
  height: 82px;
  margin: 0 auto 17px;
  border-radius: 24px;
  background: #09090b;
  color: #c4b5fd;
  font-size: 34px;
  box-shadow: 0 0 30px rgba(124, 58, 237, 0.35);
  animation: phantomFloat 2.5s ease-in-out infinite;
}
.Modal-scan {
  margin: 20px 0;
  text-align: left;
}
.Modal-scan > span {
  color: #71717a;
  font-size: 8px;
  font-weight: 900;
}
.Modal-scan div {
  height: 7px;
  margin: 7px 0;
  border-radius: 999px;
  background: #18181b;
  overflow: hidden;
}
.Modal-scan i {
  display: block;
  width: 72%;
  height: 100%;
  background: linear-gradient(90deg, #4c1d95, #a78bfa);
  animation: phantomScan 1.6s ease-in-out infinite alternate;
}
.Modal-scan strong {
  color: #a78bfa;
  font-size: 8px;
}
@keyframes phantomFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes phantomScan {
  from { width: 45%; }
  to { width: 90%; }
}`,
    javascript: `const button = document.querySelector(".Modal-action");
button.addEventListener("click", () => {
  button.textContent = "Scanning...";
});`,
  },
  {
    id: 3098,
    name: "Abyss Reactor",
    preview: (
      <div className="modal-3098">
        <div className="modal-3098-box">
          <button className="modal-3098-close">
            <i className="ri-close-line"></i>
          </button>
          <div className="modal-3098-reactor">
            <div className="modal-3098-ring ring-one"></div>
            <div className="modal-3098-ring ring-two"></div>
            <i className="ri-cpu-fill"></i>
          </div>
          <span>
            <i className="ri-battery-charge-fill"></i> DARK ENERGY CORE
          </span>
          <h3>Abyss Reactor</h3>
          <p>Forbidden energy source operating beyond safe limits.</p>
          <div className="modal-3098-energy">
            <div>
              <span>OUTPUT</span>
              <strong>847%</strong>
            </div>
            <div>
              <span>CORE</span>
              <strong>OVERLOAD</strong>
            </div>
          </div>
          <button className="modal-3098-action">
            <i className="ri-flashlight-fill"></i>
            Stabilize
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <button class="Modal-close"><i class="ri-close-line"></i></button>
  <div class="Modal-reactor">
    <i class="ri-cpu-fill"></i>
  </div>
  <span><i class="ri-battery-charge-fill"></i> DARK ENERGY CORE</span>
  <h3>Abyss Reactor</h3>
  <p>Forbidden energy source operating beyond safe limits.</p>
  <div class="Modal-energy">
    <div><span>OUTPUT</span><strong>847%</strong></div>
    <div><span>CORE</span><strong>OVERLOAD</strong></div>
  </div>
  <button class="Modal-action"><i class="ri-flashlight-fill"></i>Stabilize</button>
</div>`,
    css: `.Modal {
  width: 390px;
  padding: 30px;
  border: 1px solid #3f3f46;
  border-radius: 24px;
  background: linear-gradient(145deg, #050505, #141414);
  color: #ffffff;
  text-align: center;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.95);
}
.Modal-reactor {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin: 0 auto 18px;
  border: 2px solid #71717a;
  border-radius: 50%;
  background: radial-gradient(circle, #ffffff 0%, #52525b 7%, #18181b 35%, #020202 70%);
  color: #e4e4e7;
  font-size: 30px;
  box-shadow: 0 0 35px rgba(168, 85, 247, 0.4);
  animation: reactorSpin 4s linear infinite;
}
.Modal-energy {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin: 20px 0;
}
.Modal-energy div {
  padding: 12px;
  border: 1px solid #27272a;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
}
.Modal-energy span {
  display: block;
  color: #71717a;
  font-size: 7px;
  font-weight: 900;
}
.Modal-energy strong {
  color: #c4b5fd;
  font-size: 14px;
}
@keyframes reactorSpin {
  to { transform: rotate(360deg); }
}`,
    javascript: `const button = document.querySelector(".Modal-action");
button.addEventListener("click", () => {
  button.innerHTML = '<i class="ri-loader-4-line"></i> Stabilizing...';
});`,
  },
  {
    id: 3099,
    name: "Eclipse Throne",
    preview: (
      <div className="modal-3099">
        <div className="modal-3099-box">
          <button className="modal-3099-close">
            <i className="ri-close-line"></i>
          </button>
          <div className="modal-3099-eclipse">
            <div className="modal-3099-core">
              <i className="ri-moon-fill"></i>
            </div>
          </div>
          <span>
            <i className="ri-moon-clear-fill"></i> ETERNAL ECLIPSE
          </span>
          <h3>Eclipse Throne</h3>
          <p>Where light disappears and the black aura becomes infinite.</p>
          <div className="modal-3099-status">
            <i className="ri-radio-button-line"></i>
            AURA ASCENSION
          </div>
          <button className="modal-3099-action">
            <i className="ri-sword-fill"></i>
            Claim Throne
          </button>
        </div>
      </div>
    ),
    html: `<div class="Modal">
  <button class="Modal-close"><i class="ri-close-line"></i></button>
  <div class="Modal-eclipse">
    <div class="Modal-core"><i class="ri-moon-fill"></i></div>
  </div>
  <span><i class="ri-moon-clear-fill"></i> ETERNAL ECLIPSE</span>
  <h3>Eclipse Throne</h3>
  <p>Where light disappears and the black aura becomes infinite.</p>
  <div class="Modal-status"><i class="ri-radio-button-line"></i>AURA ASCENSION</div>
  <button class="Modal-action"><i class="ri-sword-fill"></i>Claim Throne</button>
</div>`,
    css: `.Modal {
  width: 385px;
  padding: 32px;
  border: 1px solid #52525b;
  border-radius: 26px;
  background: radial-gradient(circle at 50% 35%, #18181b, #000000 75%);
  color: #ffffff;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 0 60px rgba(88, 28, 135, 0.35);
}
.Modal-eclipse {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
  margin: 0 auto 18px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #000000, #7e22ce, #000000, #a855f7, #000000);
  animation: eclipseRotate 6s linear infinite;
}
.Modal-core {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: radial-gradient(circle, #27272a, #000000 70%);
  color: #c084fc;
  font-size: 29px;
  box-shadow: 0 0 25px rgba(168, 85, 247, 0.6);
}
.Modal-status {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin: 20px 0;
  color: #c084fc;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 1px;
}
.Modal-status i {
  text-shadow: 0 0 10px #a855f7;
  animation: statusPulse 1s ease-in-out infinite;
}
@keyframes eclipseRotate {
  to { transform: rotate(360deg); }
}
@keyframes statusPulse {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 1; }
}`,
    javascript: `const button = document.querySelector(".Modal-action");
button.addEventListener("click", () => {
  button.innerHTML = '<i class="ri-flashlight-fill"></i> Throne Claimed';
});`,
  },
];
