import "../pages/All.css";

export const toasts = [
  {
    id: 2797,
    name: "Success Toast",
    preview: (
      <div className="toast-2797">
        <div className="toast-content">
          <i className="ri-check-line"></i>
          <div>
            <strong>Success</strong>
            <span>Operation completed successfully.</span>
          </div>
        </div>
      </div>
    ),
    css: `
.toast-2797 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.toast-2797 .toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border: 1px solid #bbf7d0;
  border-radius: 10px;
  background: #f0fdf4;
  color: #166534;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}
.toast-2797 i {
  font-size: 22px;
}
.toast-2797 strong,
.toast-2797 span {
  display: block;
}
.toast-2797 strong {
  margin-bottom: 3px;
  font-size: 14px;
}
.toast-2797 span {
  font-size: 12px;
}
`,
  },
  {
    id: 2798,
    name: "Error Toast",
    preview: (
      <div className="toast-2798">
        <div className="toast-content">
          <i className="ri-close-circle-line"></i>
          <div>
            <strong>Error</strong>
            <span>Something went wrong.</span>
          </div>
        </div>
      </div>
    ),
    css: `
.toast-2798 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.toast-2798 .toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border: 1px solid #fecaca;
  border-radius: 10px;
  background: #fef2f2;
  color: #991b1b;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}
.toast-2798 i {
  font-size: 22px;
}
.toast-2798 strong,
.toast-2798 span {
  display: block;
}
.toast-2798 strong {
  margin-bottom: 3px;
  font-size: 14px;
}
.toast-2798 span {
  font-size: 12px;
}
`,
  },
  {
    id: 2799,
    name: "Warning Toast",
    preview: (
      <div className="toast-2799">
        <div className="toast-content">
          <i className="ri-alert-line"></i>
          <div>
            <strong>Warning</strong>
            <span>Please check your information.</span>
          </div>
        </div>
      </div>
    ),
    css: `
.toast-2799 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.toast-2799 .toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border: 1px solid #fde68a;
  border-radius: 10px;
  background: #fffbeb;
  color: #92400e;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}
.toast-2799 i {
  font-size: 22px;
}
.toast-2799 strong,
.toast-2799 span {
  display: block;
}
.toast-2799 strong {
  margin-bottom: 3px;
  font-size: 14px;
}
.toast-2799 span {
  font-size: 12px;
}
`,
  },
  {
    id: 2800,
    name: "Info Toast",
    preview: (
      <div className="toast-2800">
        <div className="toast-content">
          <i className="ri-information-line"></i>
          <div>
            <strong>Information</strong>
            <span>Your profile was updated.</span>
          </div>
        </div>
      </div>
    ),
    css: `
.toast-2800 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.toast-2800 .toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border: 1px solid #bfdbfe;
  border-radius: 10px;
  background: #eff6ff;
  color: #1d4ed8;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}
.toast-2800 i {
  font-size: 22px;
}
.toast-2800 strong,
.toast-2800 span {
  display: block;
}
.toast-2800 strong {
  margin-bottom: 3px;
  font-size: 14px;
}
.toast-2800 span {
  font-size: 12px;
}
`,
  },
  {
    id: 2801,
    name: "Dark Toast",
    preview: (
      <div className="toast-2801">
        <div className="toast-content">
          <i className="ri-notification-3-line"></i>
          <div>
            <strong>Notification</strong>
            <span>You have a new message.</span>
          </div>
        </div>
      </div>
    ),
    css: `
.toast-2801 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.toast-2801 .toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border-radius: 10px;
  background: #111827;
  color: #ffffff;
  box-shadow: 0 10px 26px rgba(0,0,0,0.2);
}
.toast-2801 i {
  font-size: 22px;
}
.toast-2801 strong,
.toast-2801 span {
  display: block;
}
.toast-2801 strong {
  margin-bottom: 3px;
  font-size: 14px;
}
.toast-2801 span {
  font-size: 12px;
  color: #d1d5db;
}
`,
  },
  {
    id: 2802,
    name: "Minimal Toast",
    preview: (
      <div className="toast-2802">
        <div className="toast-content">
          <span className="dot"></span>
          <span>Saved successfully</span>
        </div>
      </div>
    ),
    css: `
.toast-2802 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.toast-2802 .toast-content {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 15px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #ffffff;
  color: #374151;
  font-size: 13px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
}
.toast-2802 .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
}
`,
  },
  {
    id: 2803,
    name: "Closeable Toast",
    preview: (
      <div className="toast-2803">
        <div className="toast-content">
          <i className="ri-check-line"></i>
          <span>Changes saved</span>
          <button type="button">
            <i className="ri-close-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.toast-2803 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.toast-2803 .toast-content {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 9px;
  background: #ffffff;
  color: #374151;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}
.toast-2803 .toast-content > i {
  color: #16a34a;
  font-size: 20px;
}
.toast-2803 span {
  font-size: 13px;
}
.toast-2803 button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 6px;
  padding: 3px;
  border: 0;
  background: transparent;
  color: #9ca3af;
  cursor: pointer;
}
.toast-2803 button:hover {
  color: #374151;
}
`,
  },
  {
    id: 2804,
    name: "Loading Toast",
    preview: (
      <div className="toast-2804">
        <div className="toast-content">
          <span className="spinner"></span>
          <span>Loading...</span>
        </div>
      </div>
    ),
    css: `
.toast-2804 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.toast-2804 .toast-content {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 9px;
  background: #111827;
  color: #ffffff;
  font-size: 13px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
}
.toast-2804 .spinner {
  width: 16px;
  height: 16px;
  border: 2px solid #4b5563;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: toast-2804-spin 0.8s linear infinite;
}
@keyframes toast-2804-spin {
  to {
    transform: rotate(360deg);
  }
}
`,
  },
  {
    id: 2805,
    name: "Top Toast",
    preview: (
      <div className="toast-2805">
        <div className="toast-content">
          <i className="ri-checkbox-circle-line"></i>
          <span>Welcome back!</span>
        </div>
      </div>
    ),
    css: `
.toast-2805 {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.toast-2805 .toast-content {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 85%;
  margin-top: 20px;
  padding: 12px 16px;
  border-radius: 9px;
  background: #16a34a;
  color: #ffffff;
  font-size: 13px;
  box-shadow: 0 10px 24px rgba(22,163,74,0.25);
}
.toast-2805 i {
  font-size: 20px;
}
`,
  },
  {
    id: 2806,
    name: "Bottom Toast",
    preview: (
      <div className="toast-2806">
        <div className="toast-content">
          <span>New update available</span>
          <button type="button">Update</button>
        </div>
      </div>
    ),
    css: `
.toast-2806 {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.toast-2806 .toast-content {
  display: flex;
  align-items: center;
  gap: 15px;
  width: 85%;
  margin-bottom: 20px;
  padding: 12px 14px;
  border-radius: 9px;
  background: #ffffff;
  color: #374151;
  font-size: 13px;
  box-shadow: 0 10px 26px rgba(0,0,0,0.12);
}
.toast-2806 button {
  margin-left: auto;
  padding: 6px 10px;
  border: 0;
  border-radius: 6px;
  background: #2563eb;
  color: #ffffff;
  font-size: 12px;
  cursor: pointer;
}
`,
  },
  {
    id: 2807,
    name: "Glass Toast",
    preview: (
      <div className="toast-2807">
        <div className="toast-content">
          <i className="ri-sparkling-2-line"></i>
          <span>Beautiful glass notification</span>
        </div>
      </div>
    ),
    css: `
.toast-2807 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #dbeafe, #f5d0fe);
}
.toast-2807 .toast-content {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 17px;
  border: 1px solid rgba(255,255,255,0.6);
  border-radius: 12px;
  background: rgba(255,255,255,0.45);
  color: #1f2937;
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 30px rgba(31,41,55,0.12);
  font-size: 13px;
}
.toast-2807 i {
  font-size: 20px;
}
`,
  },
  {
    id: 2808,
    name: "Outlined Toast",
    preview: (
      <div className="toast-2808">
        <div className="toast-content">
          <i className="ri-information-line"></i>
          <span>Information message</span>
        </div>
      </div>
    ),
    css: `
.toast-2808 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.toast-2808 .toast-content {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 17px;
  border: 2px solid #2563eb;
  border-radius: 8px;
  background: #ffffff;
  color: #2563eb;
  font-size: 13px;
}
.toast-2808 i {
  font-size: 20px;
}
`,
  },
  {
    id: 2809,
    name: "Pill Toast",
    preview: (
      <div className="toast-2809">
        <div className="toast-content">
          <i className="ri-check-line"></i>
          <span>Copied to clipboard</span>
        </div>
      </div>
    ),
    css: `
.toast-2809 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.toast-2809 .toast-content {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px 17px;
  border-radius: 999px;
  background: #111827;
  color: #ffffff;
  font-size: 13px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.18);
}
.toast-2809 i {
  color: #4ade80;
  font-size: 18px;
}
`,
  },
  {
    id: 2810,
    name: "Action Toast",
    preview: (
      <div className="toast-2810">
        <div className="toast-content">
          <span>Message deleted</span>
          <button type="button">Undo</button>
        </div>
      </div>
    ),
    css: `
.toast-2810 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.toast-2810 .toast-content {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px 15px;
  border-radius: 9px;
  background: #1f2937;
  color: #ffffff;
  font-size: 13px;
}
.toast-2810 button {
  padding: 5px 9px;
  border: 0;
  border-radius: 5px;
  background: #ffffff;
  color: #1f2937;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}
`,
  },
  {
    id: 2811,
    name: "Progress Toast",
    preview: (
      <div className="toast-2811">
        <div className="toast-content">
          <div className="top">
            <span>Uploading file</span>
            <span>65%</span>
          </div>
          <div className="bar">
            <div></div>
          </div>
        </div>
      </div>
    ),
    css: `
.toast-2811 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.toast-2811 .toast-content {
  width: 210px;
  padding: 14px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}
.toast-2811 .top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
  color: #374151;
  font-size: 12px;
}
.toast-2811 .bar {
  width: 100%;
  height: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: #e5e7eb;
}
.toast-2811 .bar div {
  width: 65%;
  height: 100%;
  border-radius: inherit;
  background: #2563eb;
}
`,
  },
  {
    id: 2812,
    name: "Avatar Toast",
    preview: (
      <div className="toast-2812">
        <div className="toast-content">
          <div className="avatar">A</div>
          <div>
            <strong>André</strong>
            <span>sent you a message.</span>
          </div>
        </div>
      </div>
    ),
    css: `
.toast-2812 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.toast-2812 .toast-content {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 15px;
  border-radius: 10px;
  background: #ffffff;
  color: #374151;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}
.toast-2812 .avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #2563eb;
  color: #ffffff;
  font-weight: 700;
}
.toast-2812 strong,
.toast-2812 span {
  display: block;
}
.toast-2812 strong {
  margin-bottom: 2px;
  font-size: 13px;
}
.toast-2812 span {
  color: #6b7280;
  font-size: 11px;
}
`,
  },
  {
    id: 2813,
    name: "Compact Toast",
    preview: (
      <div className="toast-2813">
        <div className="toast-content">
          <i className="ri-check-line"></i>
          <span>Done</span>
        </div>
      </div>
    ),
    css: `
.toast-2813 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.toast-2813 .toast-content {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 11px;
  border-radius: 6px;
  background: #111827;
  color: #ffffff;
  font-size: 11px;
}
.toast-2813 i {
  color: #4ade80;
  font-size: 15px;
}
`,
  },
  {
    id: 2814,
    name: "Notification Toast",
    preview: (
      <div className="toast-2814">
        <div className="toast-content">
          <div className="icon">
            <i className="ri-notification-3-line"></i>
          </div>
          <div>
            <strong>New notification</strong>
            <span>You have 3 new notifications.</span>
          </div>
        </div>
      </div>
    ),
    css: `
.toast-2814 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.toast-2814 .toast-content {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 13px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: #ffffff;
  color: #374151;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}
.toast-2814 .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: #eff6ff;
  color: #2563eb;
}
.toast-2814 strong,
.toast-2814 span {
  display: block;
}
.toast-2814 strong {
  margin-bottom: 3px;
  font-size: 13px;
}
.toast-2814 span {
  color: #6b7280;
  font-size: 11px;
}
`,
  },
  {
    id: 2815,
    name: "Centered Toast",
    preview: (
      <div className="toast-2815">
        <div className="toast-content">
          <i className="ri-check-double-line"></i>
          <span>Everything is up to date.</span>
        </div>
      </div>
    ),
    css: `
.toast-2815 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.toast-2815 .toast-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-width: 190px;
  padding: 12px 16px;
  border-radius: 8px;
  background: #22c55e;
  color: #ffffff;
  font-size: 12px;
  box-shadow: 0 8px 22px rgba(34,197,94,0.22);
}
.toast-2815 i {
  font-size: 18px;
}
`,
  },
  {
    id: 2816,
    name: "Soft Toast",
    preview: (
      <div className="toast-2816">
        <div className="toast-content">
          <i className="ri-heart-line"></i>
          <span>Added to favorites</span>
        </div>
      </div>
    ),
    css: `
.toast-2816 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.toast-2816 .toast-content {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 12px 16px;
  border-radius: 9px;
  background: #fff1f2;
  color: #be123c;
  font-size: 13px;
  box-shadow: 0 8px 20px rgba(190,24,93,0.08);
}
.toast-2816 i {
  font-size: 19px;
}
`,
  },
];
