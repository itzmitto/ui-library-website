import "../pages/All.css";

export const alerts = [
  {
    id: 1378,
    name: "Success Alert",
    preview: (
      <div className="alert-1378">
        <div className="alert-1378__icon">
          <i className="fa-solid fa-check"></i>
        </div>
        <div>
          <strong>Changes saved</strong>
          <p>Your project was updated successfully.</p>
        </div>
        <button>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    ),
    html: `<div class="Alert">
    <div class="Alert-icon">
        <i class="fa-solid fa-check"></i>
    </div>
    <div>
        <strong>Changes saved</strong>
        <p>Your project was updated successfully.</p>
    </div>
    <button>
        <i class="fa-solid fa-xmark"></i>
    </button>
</div>`,
    css: `.Alert {
    width: 330px;
    display: flex;
    align-items: flex-start;
    gap: 11px;
    padding: 13px;
    border: 1px solid #bbf7d0;
    border-radius: 13px;
    background: #f0fdf4;
}
.Alert-icon {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #22c55e;
    color: #ffffff;
}
.Alert > div:nth-child(2) {
    flex: 1;
}
.Alert strong {
    display: block;
    color: #166534;
    font-size: 11px;
}
.Alert p {
    margin: 3px 0 0;
    color: #4d7c5a;
    font-size: 9px;
}
.Alert > button {
    border: none;
    background: transparent;
    color: #86a58e;
    cursor: pointer;
}`,
  },
  {
    id: 1379,
    name: "Warning Banner Alert",
    preview: (
      <div className="alert-1379">
        <i className="fa-solid fa-circle-exclamation"></i>
        <div>
          <strong>Action required</strong>
          <p>Your subscription expires in 3 days.</p>
        </div>
        <button>Review</button>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-circle-exclamation"></i>
    <div>
        <strong>Action required</strong>
        <p>Your subscription expires in 3 days.</p>
    </div>
    <button>Review</button>
</div>`,
    css: `.Alert {
    width: 340px;
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 12px 14px;
    border: 1px solid #fed7aa;
    border-radius: 11px;
    background: #fff7ed;
}
.Alert > i {
    color: #f97316;
    font-size: 16px;
}
.Alert > div {
    flex: 1;
}
.Alert strong {
    display: block;
    color: #9a3412;
    font-size: 10px;
}
.Alert p {
    margin: 3px 0 0;
    color: #c2410c;
    font-size: 8px;
}
.Alert button {
    height: 28px;
    padding: 0 9px;
    border: 1px solid #fdba74;
    border-radius: 7px;
    background: #ffffff;
    color: #c2410c;
    font-size: 8px;
    font-weight: 600;
    cursor: pointer;
}`,
  },
  {
    id: 1674,
    name: "Success Alert",
    preview: (
      <div className="alert-1674">
        <i className="fa-solid fa-circle-check"></i>
        <div>
          <strong>Success</strong>
          <span>Your changes were saved successfully.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-circle-check"></i>
    <div>
        <strong>Success</strong>
        <span>Your changes were saved successfully.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    width: 320px;
    padding: 13px 14px;
    border: 1px solid #bbf7d0;
    border-radius: 11px;
    background: #f0fdf4;
    color: #166534;
}
.Alert i {
    margin-top: 2px;
    color: #22c55e;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    font-size: 11px;
}
.Alert span {
    margin-top: 3px;
    color: #15803d;
    font-size: 10px;
}`,
  },
  {
    id: 1675,
    name: "Warning Alert",
    preview: (
      <div className="alert-1675">
        <i className="fa-solid fa-triangle-exclamation"></i>
        <div>
          <strong>Warning</strong>
          <span>Your trial ends in 2 days.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <div>
        <strong>Warning</strong>
        <span>Your trial ends in 2 days.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    width: 320px;
    padding: 13px 14px;
    border: 1px solid #fde68a;
    border-radius: 11px;
    background: #fffbeb;
    color: #92400e;
}
.Alert i {
    margin-top: 2px;
    color: #f59e0b;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    font-size: 11px;
}
.Alert span {
    margin-top: 3px;
    color: #a16207;
    font-size: 10px;
}`,
  },
  {
    id: 1676,
    name: "Danger Alert",
    preview: (
      <div className="alert-1676">
        <i className="fa-solid fa-circle-xmark"></i>
        <div>
          <strong>Something went wrong</strong>
          <span>We couldn't complete your request.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-circle-xmark"></i>
    <div>
        <strong>Something went wrong</strong>
        <span>We couldn't complete your request.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    gap: 10px;
    width: 320px;
    padding: 13px 14px;
    border: 1px solid #fecaca;
    border-radius: 11px;
    background: #fef2f2;
    color: #991b1b;
}
.Alert i {
    margin-top: 2px;
    color: #ef4444;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    font-size: 11px;
}
.Alert span {
    margin-top: 3px;
    color: #b91c1c;
    font-size: 10px;
}`,
  },
  {
    id: 1677,
    name: "Info Alert",
    preview: (
      <div className="alert-1677">
        <i className="fa-solid fa-circle-info"></i>
        <div>
          <strong>Heads up</strong>
          <span>You can update this setting later.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-circle-info"></i>
    <div>
        <strong>Heads up</strong>
        <span>You can update this setting later.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    gap: 10px;
    width: 320px;
    padding: 13px 14px;
    border: 1px solid #bfdbfe;
    border-radius: 11px;
    background: #eff6ff;
    color: #1e3a8a;
}
.Alert i {
    margin-top: 2px;
    color: #2563eb;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    font-size: 11px;
}
.Alert span {
    margin-top: 3px;
    color: #1d4ed8;
    font-size: 10px;
}`,
  },
  {
    id: 1678,
    name: "Dark Alert",
    preview: (
      <div className="alert-1678">
        <i className="fa-solid fa-bolt"></i>
        <div>
          <strong>System updated</strong>
          <span>Version 4.2 is now available.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-bolt"></i>
    <div>
        <strong>System updated</strong>
        <span>Version 4.2 is now available.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    gap: 10px;
    width: 320px;
    padding: 14px;
    border: 1px solid #27272a;
    border-radius: 12px;
    background: #09090b;
    color: #fff;
}
.Alert i {
    color: #facc15;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    font-size: 11px;
}
.Alert span {
    margin-top: 3px;
    color: #a1a1aa;
    font-size: 10px;
}`,
  },
  {
    id: 1679,
    name: "Neon Cyan Alert",
    preview: (
      <div className="alert-1679">
        <i className="fa-solid fa-satellite-dish"></i>
        <div>
          <strong>Connection active</strong>
          <span>Secure channel established.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-satellite-dish"></i>
    <div>
        <strong>Connection active</strong>
        <span>Secure channel established.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    gap: 10px;
    width: 320px;
    padding: 14px;
    border: 1px solid #164e63;
    border-radius: 10px;
    background: #020617;
    color: #67e8f9;
    box-shadow: 0 0 16px rgba(34,211,238,.12);
}
.Alert i {
    margin-top: 2px;
    text-shadow: 0 0 8px #22d3ee;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    font-family: monospace;
    font-size: 10px;
}
.Alert span {
    margin-top: 3px;
    color: #7dd3fc;
    font-size: 9px;
}`,
  },
  {
    id: 1680,
    name: "Neon Purple Alert",
    preview: (
      <div className="alert-1680">
        <i className="fa-solid fa-wand-magic-sparkles"></i>
        <div>
          <strong>Magic enabled</strong>
          <span>Advanced effects are now active.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-wand-magic-sparkles"></i>
    <div>
        <strong>Magic enabled</strong>
        <span>Advanced effects are now active.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    gap: 10px;
    width: 320px;
    padding: 14px;
    border: 1px solid #581c87;
    border-radius: 12px;
    background: #12051e;
    color: #d8b4fe;
    box-shadow: 0 0 18px rgba(168,85,247,.15);
}
.Alert i {
    color: #c084fc;
    text-shadow: 0 0 9px #a855f7;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    font-size: 11px;
}
.Alert span {
    margin-top: 3px;
    color: #a78bfa;
    font-size: 9px;
}`,
  },
  {
    id: 1681,
    name: "Glass Alert",
    preview: (
      <div className="alert-1681">
        <i className="fa-solid fa-sparkles"></i>
        <div>
          <strong>Welcome back</strong>
          <span>Your workspace is ready.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-sparkles"></i>
    <div>
        <strong>Welcome back</strong>
        <span>Your workspace is ready.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    gap: 10px;
    width: 320px;
    padding: 14px;
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 14px;
    background: rgba(255,255,255,.1);
    backdrop-filter: blur(15px);
    color: #fff;
}
.Alert i {
    color: #e0e7ff;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    font-size: 11px;
}
.Alert span {
    margin-top: 3px;
    color: rgba(255,255,255,.65);
    font-size: 10px;
}`,
  },
  {
    id: 1682,
    name: "Gradient Alert",
    preview: (
      <div className="alert-1682">
        <div className="alert-1682__icon">
          <i className="fa-solid fa-star"></i>
        </div>
        <div>
          <strong>You're doing great</strong>
          <span>You've completed your weekly goal.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <div class="Alert-icon">
        <i class="fa-solid fa-star"></i>
    </div>
    <div>
        <strong>You're doing great</strong>
        <span>You've completed your weekly goal.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 320px;
    padding: 13px;
    border-radius: 12px;
    background: linear-gradient(135deg,#2563eb,#7c3aed);
    color: #fff;
    box-shadow: 0 8px 22px rgba(99,102,241,.2);
}
.Alert-icon {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: rgba(255,255,255,.15);
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    font-size: 11px;
}
.Alert span {
    margin-top: 3px;
    color: rgba(255,255,255,.78);
    font-size: 9px;
}`,
  },
  {
    id: 1683,
    name: "Dismissible Alert",
    preview: (
      <div className="alert-1683">
        <i className="fa-solid fa-circle-info"></i>
        <div>
          <strong>New feature</strong>
          <span>Command palette is now available.</span>
        </div>
        <button aria-label="Close">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-circle-info"></i>
    <div>
        <strong>New feature</strong>
        <span>Command palette is now available.</span>
    </div>
    <button aria-label="Close">
        <i class="fa-solid fa-xmark"></i>
    </button>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    width: 340px;
    padding: 13px 14px;
    border: 1px solid #bfdbfe;
    border-radius: 11px;
    background: #eff6ff;
    color: #1e40af;
}
.Alert > div {
    flex: 1;
}
.Alert > div strong,
.Alert > div span {
    display: block;
}
.Alert > div strong {
    font-size: 11px;
}
.Alert > div span {
    margin-top: 3px;
    color: #2563eb;
    font-size: 10px;
}
.Alert > button {
    padding: 2px;
    border: none;
    background: transparent;
    color: #64748b;
    cursor: pointer;
}`,
  },
  {
    id: 1684,
    name: "Alert With Action",
    preview: (
      <div className="alert-1684">
        <div className="alert-1684__main">
          <i className="fa-solid fa-cloud-arrow-up"></i>
          <div>
            <strong>Update available</strong>
            <span>A new version is ready to install.</span>
          </div>
        </div>
        <button>Update</button>
      </div>
    ),
    html: `<div class="Alert">
    <div class="Alert-main">
        <i class="fa-solid fa-cloud-arrow-up"></i>
        <div>
            <strong>Update available</strong>
            <span>A new version is ready to install.</span>
        </div>
    </div>
    <button>Update</button>
</div>`,
    css: `.Alert {
    width: 340px;
    padding: 13px;
    border: 1px solid #d4d4d8;
    border-radius: 12px;
    background: #fff;
}
.Alert-main {
    display: flex;
    gap: 10px;
}
.Alert-main > i {
    color: #2563eb;
    margin-top: 2px;
}
.Alert-main strong,
.Alert-main span {
    display: block;
}
.Alert-main strong {
    font-size: 11px;
}
.Alert-main span {
    margin-top: 3px;
    color: #71717a;
    font-size: 10px;
}
.Alert > button {
    margin: 11px 0 0 28px;
    padding: 7px 11px;
    border: none;
    border-radius: 7px;
    background: #18181b;
    color: #fff;
    font-size: 9px;
    cursor: pointer;
}`,
  },
  {
    id: 1685,
    name: "Top Border Alert",
    preview: (
      <div className="alert-1685">
        <div></div>
        <div>
          <strong>Deployment complete</strong>
          <span>Your application is now live.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <div class="Alert-line"></div>
    <div>
        <strong>Deployment complete</strong>
        <span>Your application is now live.</span>
    </div>
</div>`,
    css: `.Alert {
    position: relative;
    display: flex;
    gap: 12px;
    width: 320px;
    padding: 14px;
    overflow: hidden;
    border: 1px solid #27272a;
    border-radius: 11px;
    background: #fff;
}
.Alert-line {
    width: 3px;
    border-radius: 999px;
    background: #22c55e;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    color: #18181b;
    font-size: 11px;
}
.Alert span {
    margin-top: 3px;
    color: #71717a;
    font-size: 10px;
}`,
  },
  {
    id: 1686,
    name: "Left Accent Alert",
    preview: (
      <div className="alert-1686">
        <span></span>
        <div>
          <strong>Maintenance</strong>
          <p>Scheduled maintenance begins tonight at 02:00.</p>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <span></span>
    <div>
        <strong>Maintenance</strong>
        <p>Scheduled maintenance begins tonight at 02:00.</p>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    gap: 11px;
    width: 320px;
    padding: 13px;
    border: 1px solid #e4e4e7;
    border-radius: 10px;
    background: #fff;
}
.Alert > span {
    width: 4px;
    flex-shrink: 0;
    border-radius: 999px;
    background: #f59e0b;
}
.Alert strong {
    display: block;
    color: #18181b;
    font-size: 11px;
}
.Alert p {
    margin: 3px 0 0;
    color: #71717a;
    font-size: 10px;
}`,
  },
  {
    id: 1687,
    name: "Compact Success Alert",
    preview: (
      <div className="alert-1687">
        <i className="fa-solid fa-check"></i>
        Saved successfully
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-check"></i>
    Saved successfully
</div>`,
    css: `.Alert {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    border: 1px solid #bbf7d0;
    border-radius: 999px;
    background: #f0fdf4;
    color: #15803d;
    font-size: 10px;
    font-weight: 600;
}
.Alert i {
    color: #22c55e;
}`,
  },
  {
    id: 1688,
    name: "Loading Alert",
    preview: (
      <div className="alert-1688">
        <span></span>
        <div>
          <strong>Processing request</strong>
          <span>This might take a few seconds.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <span></span>
    <div>
        <strong>Processing request</strong>
        <span>This might take a few seconds.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    width: 320px;
    padding: 13px;
    border: 1px solid #d4d4d8;
    border-radius: 11px;
    background: #fff;
}
.Alert > span {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    border: 2px solid #d4d4d8;
    border-top-color: #2563eb;
    border-radius: 50%;
    animation: spin-1688 0.8s linear infinite;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    color: #18181b;
    font-size: 11px;
}
.Alert div span {
    margin-top: 3px;
    color: #71717a;
    font-size: 9px;
}
@keyframes spin-1688 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1689,
    name: "Security Alert",
    preview: (
      <div className="alert-1689">
        <div className="alert-1689__icon">
          <i className="fa-solid fa-shield-halved"></i>
        </div>
        <div>
          <strong>Security alert</strong>
          <span>A new sign-in was detected.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <div class="Alert-icon">
        <i class="fa-solid fa-shield-halved"></i>
    </div>
    <div>
        <strong>Security alert</strong>
        <span>A new sign-in was detected.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    gap: 10px;
    width: 320px;
    padding: 13px;
    border: 1px solid #fecaca;
    border-radius: 12px;
    background: #fff;
}
.Alert-icon {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #fef2f2;
    color: #dc2626;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    color: #991b1b;
    font-size: 11px;
}
.Alert span {
    margin-top: 3px;
    color: #b91c1c;
    font-size: 9px;
}`,
  },
  {
    id: 1690,
    name: "Ecommerce Alert",
    preview: (
      <div className="alert-1690">
        <i className="fa-solid fa-cart-shopping"></i>
        <div>
          <strong>Item added to cart</strong>
          <span>MacBook Air was added successfully.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-cart-shopping"></i>
    <div>
        <strong>Item added to cart</strong>
        <span>MacBook Air was added successfully.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    gap: 10px;
    width: 330px;
    padding: 13px;
    border: 1px solid #d4d4d8;
    border-radius: 11px;
    background: #fff;
}
.Alert > i {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #f4f4f5;
    color: #18181b;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    color: #18181b;
    font-size: 11px;
}
.Alert span {
    margin-top: 3px;
    color: #71717a;
    font-size: 9px;
}`,
  },
  {
    id: 1691,
    name: "Notification Alert",
    preview: (
      <div className="alert-1691">
        <div className="alert-1691__avatar">A</div>
        <div>
          <strong>New message</strong>
          <span>Sarah sent you a new message.</span>
        </div>
        <time>2m</time>
      </div>
    ),
    html: `<div class="Alert">
    <div class="Alert-avatar">A</div>
    <div>
        <strong>New message</strong>
        <span>Sarah sent you a new message.</span>
    </div>
    <time>2m</time>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 330px;
    padding: 12px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #fff;
}
.Alert-avatar {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 50%;
    background: linear-gradient(135deg,#2563eb,#7c3aed);
    color: #fff;
    font-size: 10px;
    font-weight: 800;
}
.Alert > div:nth-child(2) {
    flex: 1;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    color: #18181b;
    font-size: 11px;
}
.Alert span {
    margin-top: 3px;
    color: #71717a;
    font-size: 9px;
}
.Alert time {
    color: #a1a1aa;
    font-size: 8px;
}`,
  },
  {
    id: 1692,
    name: "Cookie Alert",
    preview: (
      <div className="alert-1692">
        <i className="fa-solid fa-cookie-bite"></i>
        <div>
          <strong>Cookies</strong>
          <span>We use cookies to improve your experience.</span>
        </div>
        <button>Accept</button>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-cookie-bite"></i>
    <div>
        <strong>Cookies</strong>
        <span>We use cookies to improve your experience.</span>
    </div>
    <button>Accept</button>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 370px;
    padding: 13px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #fff;
}
.Alert > i {
    color: #a16207;
    font-size: 17px;
}
.Alert > div {
    flex: 1;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    color: #18181b;
    font-size: 11px;
}
.Alert span {
    margin-top: 3px;
    color: #71717a;
    font-size: 9px;
}
.Alert > button {
    padding: 7px 10px;
    border: none;
    border-radius: 7px;
    background: #18181b;
    color: #fff;
    font-size: 8px;
    cursor: pointer;
}`,
  },
  {
    id: 1693,
    name: "Upgrade Alert",
    preview: (
      <div className="alert-1693">
        <div className="alert-1693__icon">
          <i className="fa-solid fa-crown"></i>
        </div>
        <div>
          <strong>Upgrade to Pro</strong>
          <span>Unlock unlimited projects and analytics.</span>
        </div>
        <button>Upgrade</button>
      </div>
    ),
    html: `<div class="Alert">
    <div class="Alert-icon">
        <i class="fa-solid fa-crown"></i>
    </div>
    <div>
        <strong>Upgrade to Pro</strong>
        <span>Unlock unlimited projects and analytics.</span>
    </div>
    <button>Upgrade</button>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 370px;
    padding: 13px;
    border: 1px solid #fde68a;
    border-radius: 13px;
    background: linear-gradient(135deg,#fffbeb,#fff7ed);
}
.Alert-icon {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #f59e0b;
    color: #fff;
}
.Alert > div:nth-child(2) {
    flex: 1;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    color: #78350f;
    font-size: 11px;
}
.Alert span {
    margin-top: 3px;
    color: #92400e;
    font-size: 9px;
}
.Alert > button {
    padding: 7px 10px;
    border: none;
    border-radius: 7px;
    background: #92400e;
    color: #fff;
    font-size: 8px;
    font-weight: 700;
    cursor: pointer;
}`,
  },
  {
    id: 1694,
    name: "Maintenance Alert",
    preview: (
      <div className="alert-1694">
        <i className="fa-solid fa-screwdriver-wrench"></i>
        <div>
          <strong>Scheduled maintenance</strong>
          <span>Service may be unavailable from 01:00 to 02:30.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-screwdriver-wrench"></i>
    <div>
        <strong>Scheduled maintenance</strong>
        <span>Service may be unavailable from 01:00 to 02:30.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    gap: 10px;
    width: 340px;
    padding: 13px;
    border: 1px solid #ddd6fe;
    border-radius: 11px;
    background: #f5f3ff;
    color: #5b21b6;
}
.Alert > i {
    margin-top: 2px;
    color: #7c3aed;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    font-size: 11px;
}
.Alert span {
    margin-top: 3px;
    color: #6d28d9;
    font-size: 9px;
}`,
  },
  {
    id: 1695,
    name: "Dark Red Alert",
    preview: (
      <div className="alert-1695">
        <i className="fa-solid fa-skull-crossbones"></i>
        <div>
          <strong>Critical error</strong>
          <span>Database connection has failed.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-skull-crossbones"></i>
    <div>
        <strong>Critical error</strong>
        <span>Database connection has failed.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    gap: 10px;
    width: 320px;
    padding: 14px;
    border: 1px solid #7f1d1d;
    border-radius: 10px;
    background: #170606;
    color: #fca5a5;
    box-shadow: inset 0 0 18px rgba(239,68,68,.04);
}
.Alert > i {
    color: #f87171;
    text-shadow: 0 0 8px rgba(248,113,113,.55);
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    font-family: monospace;
    font-size: 10px;
}
.Alert span {
    margin-top: 3px;
    color: #fca5a5;
    font-size: 9px;
}`,
  },
  {
    id: 1696,
    name: "Rainbow Alert",
    preview: (
      <div className="alert-1696">
        <div className="alert-1696__inner">
          <i className="fa-solid fa-wand-magic-sparkles"></i>
          <div>
            <strong>Everything looks amazing</strong>
            <span>Your workspace is fully optimized.</span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <div class="Alert-inner">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
        <div>
            <strong>Everything looks amazing</strong>
            <span>Your workspace is fully optimized.</span>
        </div>
    </div>
</div>`,
    css: `.Alert {
    width: 340px;
    padding: 2px;
    border-radius: 13px;
    background: linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899);
}
.Alert-inner {
    display: flex;
    gap: 10px;
    padding: 13px;
    border-radius: 11px;
    background: #fff;
}
.Alert-inner > i {
    margin-top: 2px;
    color: #7c3aed;
}
.Alert-inner strong,
.Alert-inner span {
    display: block;
}
.Alert-inner strong {
    color: #18181b;
    font-size: 11px;
}
.Alert-inner span {
    margin-top: 3px;
    color: #71717a;
    font-size: 9px;
}`,
  },
  {
    id: 1697,
    name: "Progress Alert",
    preview: (
      <div className="alert-1697">
        <div className="alert-1697__top">
          <span>Uploading files</span>
          <b>68%</b>
        </div>
        <div className="alert-1697__bar">
          <span></span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <div class="Alert-top">
        <span>Uploading files</span>
        <b>68%</b>
    </div>
    <div class="Alert-bar">
        <span></span>
    </div>
</div>`,
    css: `.Alert {
    width: 320px;
    padding: 13px;
    border: 1px solid #dbeafe;
    border-radius: 11px;
    background: #fff;
}
.Alert-top {
    display: flex;
    justify-content: space-between;
    color: #18181b;
    font-size: 10px;
}
.Alert-top b {
    color: #2563eb;
}
.Alert-bar {
    height: 6px;
    margin-top: 10px;
    overflow: hidden;
    border-radius: 999px;
    background: #eff6ff;
}
.Alert-bar span {
    display: block;
    width: 68%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg,#2563eb,#7c3aed);
}`,
  },
  {
    id: 1698,
    name: "Action Warning Alert",
    preview: (
      <div className="alert-1698">
        <i className="fa-solid fa-triangle-exclamation"></i>
        <div>
          <strong>Unsaved changes</strong>
          <span>Your work hasn't been saved yet.</span>
        </div>
        <button>Save</button>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <div>
        <strong>Unsaved changes</strong>
        <span>Your work hasn't been saved yet.</span>
    </div>
    <button>Save</button>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: center;
    gap: 9px;
    width: 350px;
    padding: 12px;
    border: 1px solid #fde68a;
    border-radius: 10px;
    background: #fffbeb;
}
.Alert > i {
    color: #f59e0b;
}
.Alert > div {
    flex: 1;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    color: #78350f;
    font-size: 10px;
}
.Alert span {
    margin-top: 3px;
    color: #92400e;
    font-size: 8px;
}
.Alert > button {
    padding: 6px 9px;
    border: none;
    border-radius: 6px;
    background: #f59e0b;
    color: #fff;
    font-size: 8px;
    cursor: pointer;
}`,
  },
  {
    id: 1699,
    name: "Centered Alert",
    preview: (
      <div className="alert-1699">
        <div className="alert-1699__icon">
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <strong>Payment successful</strong>
        <span>Your order #4821 has been confirmed.</span>
      </div>
    ),
    html: `<div class="Alert">
    <div class="Alert-icon">
        <i class="fa-solid fa-circle-check"></i>
    </div>
    <strong>Payment successful</strong>
    <span>Your order #4821 has been confirmed.</span>
</div>`,
    css: `.Alert {
    width: 260px;
    padding: 18px;
    border: 1px solid #bbf7d0;
    border-radius: 14px;
    background: #fff;
    text-align: center;
}
.Alert-icon {
    width: 37px;
    height: 37px;
    display: grid;
    place-items: center;
    margin: 0 auto 9px;
    border-radius: 50%;
    background: #dcfce7;
    color: #16a34a;
}
.Alert strong,
.Alert > span {
    display: block;
}
.Alert strong {
    color: #18181b;
    font-size: 11px;
}
.Alert > span {
    margin-top: 4px;
    color: #71717a;
    font-size: 9px;
}`,
  },
  {
    id: 1700,
    name: "Alert With Buttons",
    preview: (
      <div className="alert-1700">
        <div>
          <strong>Delete project?</strong>
          <span>This action cannot be undone.</span>
        </div>
        <div className="alert-1700__actions">
          <button>Cancel</button>
          <button>Delete</button>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <div>
        <strong>Delete project?</strong>
        <span>This action cannot be undone.</span>
    </div>
    <div class="Alert-actions">
        <button>Cancel</button>
        <button>Delete</button>
    </div>
</div>`,
    css: `.Alert {
    width: 320px;
    padding: 14px;
    border: 1px solid #fecaca;
    border-radius: 12px;
    background: #fff;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    color: #18181b;
    font-size: 11px;
}
.Alert span {
    margin-top: 3px;
    color: #71717a;
    font-size: 9px;
}
.Alert-actions {
    display: flex;
    justify-content: flex-end;
    gap: 6px;
    margin-top: 12px;
}
.Alert-actions button {
    padding: 7px 10px;
    border: none;
    border-radius: 7px;
    font-size: 8px;
    cursor: pointer;
}
.Alert-actions button:first-child {
    background: #f4f4f5;
    color: #52525b;
}
.Alert-actions button:last-child {
    background: #dc2626;
    color: #fff;
}`,
  },
  {
    id: 1701,
    name: "System Status Alert",
    preview: (
      <div className="alert-1701">
        <span className="alert-1701__dot"></span>
        <div>
          <strong>All systems operational</strong>
          <span>API · Database · CDN · Storage</span>
        </div>
        <i className="fa-solid fa-check"></i>
      </div>
    ),
    html: `<div class="Alert">
    <span class="Alert-dot"></span>
    <div>
        <strong>All systems operational</strong>
        <span>API · Database · CDN · Storage</span>
    </div>
    <i class="fa-solid fa-check"></i>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 340px;
    padding: 12px 14px;
    border: 1px solid #bbf7d0;
    border-radius: 10px;
    background: #f0fdf4;
}
.Alert-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 9px rgba(34,197,94,.6);
}
.Alert > div {
    flex: 1;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    color: #166534;
    font-size: 10px;
}
.Alert span {
    margin-top: 3px;
    color: #15803d;
    font-size: 8px;
}
.Alert > i {
    color: #16a34a;
    font-size: 10px;
}`,
  },
  {
    id: 1702,
    name: "Announcement Alert",
    preview: (
      <div className="alert-1702">
        <span>NEW</span>
        <p>Introducing our redesigned dashboard.</p>
        <a href="#">Learn more →</a>
      </div>
    ),
    html: `<div class="Alert">
    <span>NEW</span>
    <p>Introducing our redesigned dashboard.</p>
    <a href="#">Learn more →</a>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: center;
    gap: 9px;
    width: 350px;
    padding: 11px 13px;
    border: 1px solid #dbeafe;
    border-radius: 10px;
    background: #eff6ff;
}
.Alert > span {
    padding: 3px 6px;
    border-radius: 999px;
    background: #2563eb;
    color: #fff;
    font-size: 7px;
    font-weight: 800;
}
.Alert p {
    flex: 1;
    margin: 0;
    color: #1e3a8a;
    font-size: 9px;
}
.Alert a {
    color: #2563eb;
    text-decoration: none;
    font-size: 8px;
    font-weight: 700;
}`,
  },
  {
    id: 1703,
    name: "Live Alert",
    preview: (
      <div className="alert-1703">
        <span></span>
        <strong>LIVE</strong>
        <p>Deployment in progress</p>
        <i className="fa-solid fa-circle-arrow-up"></i>
      </div>
    ),
    html: `<div class="Alert">
    <span></span>
    <strong>LIVE</strong>
    <p>Deployment in progress</p>
    <i class="fa-solid fa-circle-arrow-up"></i>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 300px;
    padding: 9px 12px;
    border: 1px solid #fecdd3;
    border-radius: 999px;
    background: #fff1f2;
}
.Alert > span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #f43f5e;
    box-shadow: 0 0 8px rgba(244,63,94,.7);
    animation: live-pulse 1.2s infinite;
}
.Alert strong {
    color: #be123c;
    font-size: 8px;
}
.Alert p {
    flex: 1;
    margin: 0;
    color: #9f1239;
    font-size: 9px;
}
.Alert > i {
    color: #e11d48;
    font-size: 10px;
}
@keyframes live-pulse {
    50% {
        transform: scale(1.5);
        opacity: .45;
    }
}`,
  },
  {
    id: 1704,
    name: "AI Alert",
    preview: (
      <div className="alert-1704">
        <div className="alert-1704__icon">
          <i className="fa-solid fa-brain"></i>
        </div>
        <div>
          <strong>AI suggestion ready</strong>
          <span>Your assistant found 3 improvements.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <div class="Alert-icon">
        <i class="fa-solid fa-brain"></i>
    </div>
    <div>
        <strong>AI suggestion ready</strong>
        <span>Your assistant found 3 improvements.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    gap: 10px;
    width: 330px;
    padding: 13px;
    border: 1px solid #ddd6fe;
    border-radius: 12px;
    background: linear-gradient(135deg,#faf5ff,#eef2ff);
}
.Alert-icon {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: linear-gradient(135deg,#7c3aed,#2563eb);
    color: #fff;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    color: #312e81;
    font-size: 10px;
}
.Alert span {
    margin-top: 3px;
    color: #6366f1;
    font-size: 9px;
}`,
  },
  {
    id: 1705,
    name: "Minimal Gray Alert",
    preview: (
      <div className="alert-1705">
        <i className="fa-solid fa-bell"></i>
        <span>You have 3 new notifications.</span>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-bell"></i>
    <span>You have 3 new notifications.</span>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: center;
    gap: 9px;
    width: 280px;
    padding: 10px 12px;
    border: 1px solid #e4e4e7;
    border-radius: 9px;
    background: #fafafa;
    color: #52525b;
    font-size: 9px;
}
.Alert i {
    color: #71717a;
}`,
  },
  {
    id: 1706,
    name: "Neon Green System Alert",
    preview: (
      <div className="alert-1706">
        <i className="fa-solid fa-terminal"></i>
        <div>
          <strong>ACCESS GRANTED</strong>
          <span>Authenticated session initialized.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-terminal"></i>
    <div>
        <strong>ACCESS GRANTED</strong>
        <span>Authenticated session initialized.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    gap: 10px;
    width: 320px;
    padding: 13px;
    border: 1px solid #14532d;
    border-radius: 8px;
    background: #020908;
    color: #4ade80;
    font-family: monospace;
    box-shadow: 0 0 15px rgba(34,197,94,.08);
}
.Alert > i {
    margin-top: 2px;
    text-shadow: 0 0 8px #22c55e;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    font-size: 9px;
    letter-spacing: 1px;
}
.Alert span {
    margin-top: 4px;
    color: #86efac;
    opacity: .7;
    font-size: 8px;
}`,
  },
  {
    id: 1707,
    name: "Purple Banner Alert",
    preview: (
      <div className="alert-1707">
        <div>
          <strong>Pro workspace</strong>
          <span>You now have access to advanced analytics.</span>
        </div>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    ),
    html: `<div class="Alert">
    <div>
        <strong>Pro workspace</strong>
        <span>You now have access to advanced analytics.</span>
    </div>
    <i class="fa-solid fa-arrow-right"></i>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 340px;
    padding: 13px 15px;
    border-radius: 12px;
    background: linear-gradient(90deg,#581c87,#7c3aed);
    color: #fff;
}
.Alert > div {
    flex: 1;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    font-size: 11px;
}
.Alert span {
    margin-top: 3px;
    color: rgba(255,255,255,.72);
    font-size: 9px;
}
.Alert > i {
    color: #ddd6fe;
}`,
  },
  {
    id: 1708,
    name: "Inline Info Alert",
    preview: (
      <div className="alert-1708">
        <i className="fa-solid fa-circle-info"></i>
        <span>
          <strong>Tip:</strong> Use keyboard shortcuts to work faster.
        </span>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-circle-info"></i>
    <span><strong>Tip:</strong> Use keyboard shortcuts to work faster.</span>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 310px;
    padding: 10px 12px;
    border: 1px solid #bfdbfe;
    border-radius: 8px;
    background: #eff6ff;
    color: #1d4ed8;
    font-size: 9px;
}
.Alert strong {
    font-weight: 800;
}`,
  },
  {
    id: 1709,
    name: "Alert With Close Badge",
    preview: (
      <div className="alert-1709">
        <div className="alert-1709__icon">
          <i className="fa-solid fa-bell"></i>
        </div>
        <div>
          <strong>Reminder</strong>
          <span>Your meeting starts in 15 minutes.</span>
        </div>
        <button>×</button>
      </div>
    ),
    html: `<div class="Alert">
    <div class="Alert-icon">
        <i class="fa-solid fa-bell"></i>
    </div>
    <div>
        <strong>Reminder</strong>
        <span>Your meeting starts in 15 minutes.</span>
    </div>
    <button>×</button>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 330px;
    padding: 11px;
    border: 1px solid #e4e4e7;
    border-radius: 11px;
    background: #fff;
}
.Alert-icon {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #fef3c7;
    color: #d97706;
}
.Alert > div:nth-child(2) {
    flex: 1;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    color: #18181b;
    font-size: 10px;
}
.Alert span {
    margin-top: 3px;
    color: #71717a;
    font-size: 9px;
}
.Alert > button {
    border: none;
    background: transparent;
    color: #a1a1aa;
    font-size: 16px;
    cursor: pointer;
}`,
  },
  {
    id: 1710,
    name: "Full Width Alert",
    preview: (
      <div className="alert-1710">
        <i className="fa-solid fa-circle-info"></i>
        <span>Scheduled deployment begins at 18:00 UTC.</span>
        <a href="#">View details</a>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-circle-info"></i>
    <span>Scheduled deployment begins at 18:00 UTC.</span>
    <a href="#">View details</a>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: center;
    gap: 9px;
    width: 100%;
    max-width: 500px;
    padding: 10px 14px;
    border-bottom: 1px solid #bfdbfe;
    border-top: 1px solid #bfdbfe;
    background: #eff6ff;
    color: #1e40af;
}
.Alert span {
    flex: 1;
    font-size: 9px;
}
.Alert a {
    color: #2563eb;
    text-decoration: none;
    font-size: 8px;
    font-weight: 700;
}`,
  },
  {
    id: 1711,
    name: "Alert With Progress",
    preview: (
      <div className="alert-1711">
        <div className="alert-1711__header">
          <strong>Backup in progress</strong>
          <span>42%</span>
        </div>
        <p>Backing up your project files.</p>
        <div className="alert-1711__progress">
          <span></span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <div class="Alert-header">
        <strong>Backup in progress</strong>
        <span>42%</span>
    </div>
    <p>Backing up your project files.</p>
    <div class="Alert-progress">
        <span></span>
    </div>
</div>`,
    css: `.Alert {
    width: 320px;
    padding: 13px;
    border: 1px solid #d4d4d8;
    border-radius: 11px;
    background: #fff;
}
.Alert-header {
    display: flex;
    justify-content: space-between;
}
.Alert-header strong {
    color: #18181b;
    font-size: 10px;
}
.Alert-header span {
    color: #2563eb;
    font-size: 9px;
    font-weight: 700;
}
.Alert p {
    margin: 5px 0 9px;
    color: #71717a;
    font-size: 8px;
}
.Alert-progress {
    height: 5px;
    overflow: hidden;
    border-radius: 999px;
    background: #f4f4f5;
}
.Alert-progress span {
    display: block;
    width: 42%;
    height: 100%;
    border-radius: inherit;
    background: #2563eb;
}`,
  },
  {
    id: 1712,
    name: "Purple Notification Alert",
    preview: (
      <div className="alert-1712">
        <i className="fa-solid fa-message"></i>
        <div>
          <strong>New comment</strong>
          <span>Someone commented on your project.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-message"></i>
    <div>
        <strong>New comment</strong>
        <span>Someone commented on your project.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    gap: 10px;
    width: 320px;
    padding: 13px;
    border: 1px solid #ddd6fe;
    border-radius: 11px;
    background: #faf5ff;
}
.Alert > i {
    color: #8b5cf6;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    color: #4c1d95;
    font-size: 10px;
}
.Alert span {
    margin-top: 3px;
    color: #6d28d9;
    font-size: 9px;
}`,
  },
  {
    id: 1713,
    name: "Orange Deployment Alert",
    preview: (
      <div className="alert-1713">
        <i className="fa-solid fa-rocket"></i>
        <div>
          <strong>Deploying</strong>
          <span>Build #184 is being deployed.</span>
        </div>
        <span className="alert-1713__status">LIVE</span>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-rocket"></i>
    <div>
        <strong>Deploying</strong>
        <span>Build #184 is being deployed.</span>
    </div>
    <span class="Alert-status">LIVE</span>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 340px;
    padding: 12px;
    border: 1px solid #fed7aa;
    border-radius: 11px;
    background: #fff7ed;
}
.Alert > i {
    color: #ea580c;
}
.Alert > div {
    flex: 1;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    color: #9a3412;
    font-size: 10px;
}
.Alert div span {
    margin-top: 3px;
    color: #c2410c;
    font-size: 8px;
}
.Alert-status {
    padding: 4px 6px;
    border-radius: 999px;
    background: #fed7aa;
    color: #9a3412;
    font-size: 7px;
    font-weight: 800;
}`,
  },
  {
    id: 1714,
    name: "Blue Gradient Alert",
    preview: (
      <div className="alert-1714">
        <div className="alert-1714__icon">
          <i className="fa-solid fa-cloud"></i>
        </div>
        <div>
          <strong>Cloud sync complete</strong>
          <span>All your files are up to date.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <div class="Alert-icon">
        <i class="fa-solid fa-cloud"></i>
    </div>
    <div>
        <strong>Cloud sync complete</strong>
        <span>All your files are up to date.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 330px;
    padding: 13px;
    border-radius: 12px;
    background: linear-gradient(135deg,#dbeafe,#e0f2fe);
    color: #0c4a6e;
}
.Alert-icon {
    width: 33px;
    height: 33px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: #2563eb;
    color: #fff;
    box-shadow: 0 5px 12px rgba(37,99,235,.18);
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    font-size: 10px;
}
.Alert span {
    margin-top: 3px;
    color: #0369a1;
    font-size: 9px;
}`,
  },
  {
    id: 1715,
    name: "Soft Red Alert",
    preview: (
      <div className="alert-1715">
        <i className="fa-solid fa-ban"></i>
        <span>You don't have permission to perform this action.</span>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-ban"></i>
    <span>You don't have permission to perform this action.</span>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 320px;
    padding: 10px 12px;
    border: 1px solid #fecaca;
    border-radius: 9px;
    background: #fef2f2;
    color: #b91c1c;
    font-size: 9px;
}
.Alert i {
    color: #ef4444;
}`,
  },
  {
    id: 1716,
    name: "Green Banner Alert",
    preview: (
      <div className="alert-1716">
        <i className="fa-solid fa-circle-check"></i>
        <div>
          <strong>Payment complete</strong>
          <span>Your subscription has been renewed.</span>
        </div>
        <a href="#">Receipt</a>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-circle-check"></i>
    <div>
        <strong>Payment complete</strong>
        <span>Your subscription has been renewed.</span>
    </div>
    <a href="#">Receipt</a>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 370px;
    padding: 12px 14px;
    border: 1px solid #bbf7d0;
    border-radius: 10px;
    background: #f0fdf4;
}
.Alert > i {
    color: #22c55e;
}
.Alert > div {
    flex: 1;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    color: #166534;
    font-size: 10px;
}
.Alert span {
    margin-top: 3px;
    color: #15803d;
    font-size: 8px;
}
.Alert a {
    color: #15803d;
    text-decoration: none;
    font-size: 8px;
    font-weight: 700;
}`,
  },
  {
    id: 1717,
    name: "Neon Pink Alert",
    preview: (
      <div className="alert-1717">
        <i className="fa-solid fa-heart"></i>
        <div>
          <strong>Favorite saved</strong>
          <span>This item was added to your favorites.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-heart"></i>
    <div>
        <strong>Favorite saved</strong>
        <span>This item was added to your favorites.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    gap: 10px;
    width: 320px;
    padding: 13px;
    border: 1px solid #831843;
    border-radius: 11px;
    background: #180711;
    color: #f9a8d4;
    box-shadow: 0 0 15px rgba(236,72,153,.1);
}
.Alert > i {
    color: #f472b6;
    text-shadow: 0 0 8px #ec4899;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    font-size: 10px;
}
.Alert span {
    margin-top: 3px;
    color: #f9a8d4;
    opacity: .7;
    font-size: 8px;
}`,
  },
  {
    id: 1718,
    name: "Stacked Alert",
    preview: (
      <div className="alert-1718">
        <div className="alert-1718__row">
          <i className="fa-solid fa-circle-info"></i>
          <strong>Important update</strong>
        </div>
        <p>Your billing information needs to be updated.</p>
        <button>Update billing</button>
      </div>
    ),
    html: `<div class="Alert">
    <div class="Alert-row">
        <i class="fa-solid fa-circle-info"></i>
        <strong>Important update</strong>
    </div>
    <p>Your billing information needs to be updated.</p>
    <button>Update billing</button>
</div>`,
    css: `.Alert {
    width: 310px;
    padding: 14px;
    border: 1px solid #bfdbfe;
    border-radius: 12px;
    background: #fff;
}
.Alert-row {
    display: flex;
    align-items: center;
    gap: 8px;
}
.Alert-row i {
    color: #2563eb;
}
.Alert-row strong {
    color: #1e3a8a;
    font-size: 10px;
}
.Alert p {
    margin: 7px 0 11px;
    color: #64748b;
    font-size: 9px;
}
.Alert > button {
    padding: 7px 10px;
    border: none;
    border-radius: 7px;
    background: #2563eb;
    color: #fff;
    font-size: 8px;
    cursor: pointer;
}`,
  },
  {
    id: 1719,
    name: "Glass Warning Alert",
    preview: (
      <div className="alert-1719">
        <i className="fa-solid fa-triangle-exclamation"></i>
        <div>
          <strong>Limited availability</strong>
          <span>Only 3 seats are left on this plan.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <div>
        <strong>Limited availability</strong>
        <span>Only 3 seats are left on this plan.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    gap: 10px;
    width: 320px;
    padding: 13px;
    border: 1px solid rgba(255,255,255,.28);
    border-radius: 13px;
    background: rgba(255,193,7,.12);
    backdrop-filter: blur(14px);
    color: #fff;
}
.Alert > i {
    color: #facc15;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    font-size: 10px;
}
.Alert span {
    margin-top: 3px;
    color: rgba(255,255,255,.68);
    font-size: 9px;
}`,
  },
  {
    id: 1720,
    name: "Command Alert",
    preview: (
      <div className="alert-1720">
        <span>&gt;</span>
        <div>
          <strong>COMMAND EXECUTED</strong>
          <p>Deployment completed with exit code 0.</p>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <span>></span>
    <div>
        <strong>COMMAND EXECUTED</strong>
        <p>Deployment completed with exit code 0.</p>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    gap: 9px;
    width: 330px;
    padding: 13px;
    border: 1px solid #27272a;
    border-radius: 8px;
    background: #050505;
    color: #22c55e;
    font-family: monospace;
}
.Alert > span {
    color: #67e8f9;
    font-weight: 900;
}
.Alert strong {
    display: block;
    font-size: 8px;
    letter-spacing: 1px;
}
.Alert p {
    margin: 4px 0 0;
    color: #86efac;
    font-size: 8px;
    opacity: .7;
}`,
  },
  {
    id: 1721,
    name: "Premium Alert",
    preview: (
      <div className="alert-1721">
        <div className="alert-1721__icon">
          <i className="fa-solid fa-gem"></i>
        </div>
        <div>
          <strong>Premium activated</strong>
          <span>All premium features are now unlocked.</span>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <div class="Alert-icon">
        <i class="fa-solid fa-gem"></i>
    </div>
    <div>
        <strong>Premium activated</strong>
        <span>All premium features are now unlocked.</span>
    </div>
</div>`,
    css: `.Alert {
    display: flex;
    align-items: center;
    gap: 11px;
    width: 330px;
    padding: 13px;
    border: 1px solid #facc15;
    border-radius: 13px;
    background: linear-gradient(135deg,#18181b,#292524);
    color: #fff;
    box-shadow: 0 8px 20px rgba(0,0,0,.18);
}
.Alert-icon {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: linear-gradient(135deg,#facc15,#f59e0b);
    color: #451a03;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    font-size: 10px;
}
.Alert span {
    margin-top: 3px;
    color: #d4d4d8;
    font-size: 9px;
}`,
  },
  {
    id: 1722,
    name: "Rainbow Glow Alert",
    preview: (
      <div className="alert-1722">
        <div className="alert-1722__glow"></div>
        <div className="alert-1722__content">
          <i className="fa-solid fa-sparkles"></i>
          <div>
            <strong>Experience upgraded</strong>
            <span>Your interface has been upgraded.</span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Alert">
    <div class="Alert-glow"></div>
    <div class="Alert-content">
        <i class="fa-solid fa-sparkles"></i>
        <div>
            <strong>Experience upgraded</strong>
            <span>Your interface has been upgraded.</span>
        </div>
    </div>
</div>`,
    css: `.Alert {
    position: relative;
    width: 340px;
    padding: 2px;
    overflow: hidden;
    border-radius: 13px;
}
.Alert-glow {
    position: absolute;
    inset: -50px;
    background: conic-gradient(#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899,#ef4444);
    animation: rainbow-rotate 4s linear infinite;
}
.Alert-content {
    position: relative;
    z-index: 1;
    display: flex;
    gap: 10px;
    padding: 13px;
    border-radius: 11px;
    background: #09090b;
    color: #fff;
}
.Alert-content > i {
    color: #67e8f9;
}
.Alert-content strong,
.Alert-content span {
    display: block;
}
.Alert-content strong {
    font-size: 10px;
}
.Alert-content span {
    margin-top: 3px;
    color: #a1a1aa;
    font-size: 8px;
}
@keyframes rainbow-rotate {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1723,
    name: "Legendary Alert",
    preview: (
      <div className="alert-1723">
        <div className="alert-1723__orb"></div>
        <div className="alert-1723__icon">
          <i className="fa-solid fa-crown"></i>
        </div>
        <div>
          <strong>Everything is ready</strong>
          <span>Your project passed every check and is ready to launch.</span>
        </div>
        <button aria-label="Close">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    ),
    html: `<div class="Alert">
    <div class="Alert-orb"></div>
    <div class="Alert-icon">
        <i class="fa-solid fa-crown"></i>
    </div>
    <div>
        <strong>Everything is ready</strong>
        <span>Your project passed every check and is ready to launch.</span>
    </div>
    <button aria-label="Close">
        <i class="fa-solid fa-xmark"></i>
    </button>
</div>`,
    css: `.Alert {
    position: relative;
    display: flex;
    align-items: center;
    gap: 11px;
    width: 380px;
    padding: 14px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.16);
    border-radius: 14px;
    background: #08080a;
    color: #fff;
    box-shadow: 0 12px 35px rgba(0,0,0,.22);
}
.Alert-orb {
    position: absolute;
    width: 120px;
    height: 120px;
    left: -35px;
    top: -45px;
    border-radius: 50%;
    background: linear-gradient(135deg,#22d3ee,#6366f1,#ec4899);
    filter: blur(35px);
    opacity: .22;
}
.Alert-icon {
    position: relative;
    z-index: 1;
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(250,204,21,.5);
    border-radius: 10px;
    background: rgba(250,204,21,.1);
    color: #facc15;
    box-shadow: 0 0 14px rgba(250,204,21,.12);
}
.Alert > div:nth-child(3) {
    position: relative;
    z-index: 1;
    flex: 1;
}
.Alert strong,
.Alert span {
    display: block;
}
.Alert strong {
    font-size: 11px;
}
.Alert span {
    margin-top: 4px;
    color: #a1a1aa;
    font-size: 8px;
    line-height: 1.5;
}
.Alert > button {
    position: relative;
    z-index: 1;
    width: 25px;
    height: 25px;
    display: grid;
    place-items: center;
    border: 1px solid #27272a;
    border-radius: 7px;
    background: #111113;
    color: #71717a;
    cursor: pointer;
}
.Alert > button:hover {
    color: #fff;
    border-color: #3f3f46;
}`,
  },
];
