import "../pages/All.css";

export const accordions = [
  {
    id: 2817,
    name: "Basic Accordion",
    preview: (
      <div className="accordion-2817">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>What is an accordion?</span>
            <i className="ri-add-line"></i>
          </button>
          <div className="accordion-content">
            <span>An accordion reveals additional content when opened.</span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>How does it work?</span>
            <i className="ri-add-line"></i>
          </button>
          <div className="accordion-content">
            <span>Click a section to reveal its hidden content.</span>
          </div>
        </div>
      </div>
    ),
    css: `
.accordion-2817 {
  width: 100%;
  max-width: 360px;
  margin: auto;
}
.accordion-2817 .accordion-item {
  border-bottom: 1px solid #e5e7eb;
}
.accordion-2817 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 14px;
  border: 0;
  background: #ffffff;
  color: #111827;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}
.accordion-2817 .accordion-trigger i {
  font-size: 18px;
  color: #6b7280;
}
.accordion-2817 .accordion-content {
  padding: 0 14px 13px;
  color: #6b7280;
  font-size: 12px;
}
`,
  },
  {
    id: 2818,
    name: "Dark Accordion",
    preview: (
      <div className="accordion-2818">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Account settings</span>
            <i className="ri-arrow-down-s-line"></i>
          </button>
          <div className="accordion-content">
            <span>Manage your profile and account preferences.</span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Notifications</span>
            <i className="ri-arrow-down-s-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.accordion-2818 {
  width: 100%;
  max-width: 360px;
  margin: auto;
  padding: 10px;
  border-radius: 12px;
  background: #111827;
}
.accordion-2818 .accordion-item {
  border-bottom: 1px solid #374151;
}
.accordion-2818 .accordion-item:last-child {
  border-bottom: 0;
}
.accordion-2818 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 12px;
  border: 0;
  background: transparent;
  color: #ffffff;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}
.accordion-2818 .accordion-trigger i {
  color: #9ca3af;
  font-size: 18px;
}
.accordion-2818 .accordion-content {
  padding: 0 12px 13px;
  color: #9ca3af;
  font-size: 12px;
}
`,
  },
  {
    id: 2819,
    name: "Bordered Accordion",
    preview: (
      <div className="accordion-2819">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Shipping information</span>
            <i className="ri-arrow-right-s-line"></i>
          </button>
          <div className="accordion-content">
            <span>Shipping usually takes 2–5 business days.</span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Return policy</span>
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.accordion-2819 {
  width: 100%;
  max-width: 360px;
  margin: auto;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  overflow: hidden;
  background: #ffffff;
}
.accordion-2819 .accordion-item {
  border-bottom: 1px solid #e5e7eb;
}
.accordion-2819 .accordion-item:last-child {
  border-bottom: 0;
}
.accordion-2819 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  border: 0;
  background: #ffffff;
  color: #374151;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}
.accordion-2819 .accordion-trigger i {
  color: #6b7280;
  font-size: 18px;
}
.accordion-2819 .accordion-content {
  padding: 0 14px 14px;
  color: #6b7280;
  font-size: 12px;
}
`,
  },
  {
    id: 2820,
    name: "Blue Accordion",
    preview: (
      <div className="accordion-2820">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Getting started</span>
            <i className="ri-add-line"></i>
          </button>
          <div className="accordion-content">
            <span>Start by creating your account and choosing a plan.</span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Documentation</span>
            <i className="ri-add-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.accordion-2820 {
  width: 100%;
  max-width: 360px;
  margin: auto;
}
.accordion-2820 .accordion-item {
  margin-bottom: 8px;
  border-radius: 9px;
  overflow: hidden;
  background: #eff6ff;
}
.accordion-2820 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 14px;
  border: 0;
  background: #dbeafe;
  color: #1d4ed8;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}
.accordion-2820 .accordion-trigger i {
  font-size: 18px;
}
.accordion-2820 .accordion-content {
  padding: 11px 14px 13px;
  color: #1e40af;
  font-size: 12px;
}
`,
  },
  {
    id: 2821,
    name: "Minimal Accordion",
    preview: (
      <div className="accordion-2821">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Overview</span>
            <i className="ri-chevron-down-line"></i>
          </button>
          <div className="accordion-content">
            <span>A clean and simple accordion layout.</span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Details</span>
            <i className="ri-chevron-down-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.accordion-2821 {
  width: 100%;
  max-width: 360px;
  margin: auto;
}
.accordion-2821 .accordion-item {
  border-bottom: 1px solid #f3f4f6;
}
.accordion-2821 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 4px;
  border: 0;
  background: transparent;
  color: #374151;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}
.accordion-2821 .accordion-trigger i {
  color: #9ca3af;
  font-size: 16px;
}
.accordion-2821 .accordion-content {
  padding: 0 4px 12px;
  color: #6b7280;
  font-size: 12px;
}
`,
  },
  {
    id: 2822,
    name: "Rounded Accordion",
    preview: (
      <div className="accordion-2822">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Premium features</span>
            <i className="ri-add-line"></i>
          </button>
          <div className="accordion-content">
            <span>Unlock advanced features with the premium plan.</span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Billing</span>
            <i className="ri-add-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.accordion-2822 {
  width: 100%;
  max-width: 360px;
  margin: auto;
}
.accordion-2822 .accordion-item {
  margin-bottom: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  overflow: hidden;
  background: #ffffff;
}
.accordion-2822 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  border: 0;
  background: #ffffff;
  color: #111827;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}
.accordion-2822 .accordion-trigger i {
  color: #6b7280;
  font-size: 18px;
}
.accordion-2822 .accordion-content {
  padding: 0 14px 14px;
  color: #6b7280;
  font-size: 12px;
}
`,
  },
  {
    id: 2823,
    name: "Success Accordion",
    preview: (
      <div className="accordion-2823">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Payment completed</span>
            <i className="ri-check-line"></i>
          </button>
          <div className="accordion-content">
            <span>Your payment was successfully processed.</span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Order status</span>
            <i className="ri-check-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.accordion-2823 {
  width: 100%;
  max-width: 360px;
  margin: auto;
}
.accordion-2823 .accordion-item {
  margin-bottom: 7px;
  border: 1px solid #bbf7d0;
  border-radius: 9px;
  background: #f0fdf4;
  overflow: hidden;
}
.accordion-2823 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 14px;
  border: 0;
  background: transparent;
  color: #166534;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}
.accordion-2823 .accordion-trigger i {
  font-size: 18px;
}
.accordion-2823 .accordion-content {
  padding: 0 14px 13px;
  color: #15803d;
  font-size: 12px;
}
`,
  },
  {
    id: 2824,
    name: "Warning Accordion",
    preview: (
      <div className="accordion-2824">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Important notice</span>
            <i className="ri-error-warning-line"></i>
          </button>
          <div className="accordion-content">
            <span>Please review this information before continuing.</span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>More details</span>
            <i className="ri-arrow-down-s-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.accordion-2824 {
  width: 100%;
  max-width: 360px;
  margin: auto;
}
.accordion-2824 .accordion-item {
  margin-bottom: 7px;
  border: 1px solid #fde68a;
  border-radius: 9px;
  background: #fffbeb;
  overflow: hidden;
}
.accordion-2824 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 14px;
  border: 0;
  background: transparent;
  color: #92400e;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}
.accordion-2824 .accordion-trigger i {
  font-size: 18px;
}
.accordion-2824 .accordion-content {
  padding: 0 14px 13px;
  color: #a16207;
  font-size: 12px;
}
`,
  },
  {
    id: 2825,
    name: "Error Accordion",
    preview: (
      <div className="accordion-2825">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Something went wrong</span>
            <i className="ri-close-circle-line"></i>
          </button>
          <div className="accordion-content">
            <span>Please check your settings and try again.</span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Error details</span>
            <i className="ri-add-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.accordion-2825 {
  width: 100%;
  max-width: 360px;
  margin: auto;
}
.accordion-2825 .accordion-item {
  margin-bottom: 7px;
  border: 1px solid #fecaca;
  border-radius: 9px;
  background: #fef2f2;
  overflow: hidden;
}
.accordion-2825 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 14px;
  border: 0;
  background: transparent;
  color: #991b1b;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}
.accordion-2825 .accordion-trigger i {
  font-size: 18px;
}
.accordion-2825 .accordion-content {
  padding: 0 14px 13px;
  color: #b91c1c;
  font-size: 12px;
}
`,
  },
  {
    id: 2826,
    name: "Icon Accordion",
    preview: (
      <div className="accordion-2826">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span className="left">
              <i className="ri-user-line"></i>
              Profile
            </span>
            <i className="ri-add-line"></i>
          </button>
          <div className="accordion-content">
            <span>Manage your public profile information.</span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span className="left">
              <i className="ri-settings-3-line"></i>
              Settings
            </span>
            <i className="ri-add-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.accordion-2826 {
  width: 100%;
  max-width: 360px;
  margin: auto;
}
.accordion-2826 .accordion-item {
  border-bottom: 1px solid #e5e7eb;
}
.accordion-2826 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 12px;
  border: 0;
  background: #ffffff;
  color: #374151;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}
.accordion-2826 .accordion-trigger .left {
  display: flex;
  align-items: center;
  gap: 9px;
}
.accordion-2826 .accordion-trigger .left i {
  color: #2563eb;
  font-size: 18px;
}
.accordion-2826 .accordion-trigger > i {
  color: #9ca3af;
}
.accordion-2826 .accordion-content {
  padding: 0 12px 13px 39px;
  color: #6b7280;
  font-size: 12px;
}
`,
  },
  {
    id: 2827,
    name: "Glass Accordion",
    preview: (
      <div className="accordion-2827">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Glass design</span>
            <i className="ri-add-line"></i>
          </button>
          <div className="accordion-content">
            <span>A soft glassmorphism inspired accordion.</span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Modern interface</span>
            <i className="ri-add-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.accordion-2827 {
  width: 100%;
  max-width: 360px;
  margin: auto;
  padding: 10px;
  border-radius: 14px;
  background: linear-gradient(135deg, #dbeafe, #f5d0fe);
}
.accordion-2827 .accordion-item {
  margin-bottom: 8px;
  border: 1px solid rgba(255,255,255,0.65);
  border-radius: 10px;
  background: rgba(255,255,255,0.42);
  backdrop-filter: blur(10px);
  overflow: hidden;
}
.accordion-2827 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 14px;
  border: 0;
  background: transparent;
  color: #1f2937;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}
.accordion-2827 .accordion-trigger i {
  color: #4b5563;
  font-size: 18px;
}
.accordion-2827 .accordion-content {
  padding: 0 14px 13px;
  color: #4b5563;
  font-size: 12px;
}
`,
  },
  {
    id: 2828,
    name: "Shadow Accordion",
    preview: (
      <div className="accordion-2828">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Frequently asked question</span>
            <i className="ri-add-line"></i>
          </button>
          <div className="accordion-content">
            <span>This accordion uses a soft elevated card style.</span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Another question</span>
            <i className="ri-add-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.accordion-2828 {
  width: 100%;
  max-width: 360px;
  margin: auto;
}
.accordion-2828 .accordion-item {
  margin-bottom: 9px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 7px 22px rgba(0,0,0,0.1);
  overflow: hidden;
}
.accordion-2828 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  border: 0;
  background: #ffffff;
  color: #111827;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}
.accordion-2828 .accordion-trigger i {
  color: #6b7280;
  font-size: 18px;
}
.accordion-2828 .accordion-content {
  padding: 0 14px 14px;
  color: #6b7280;
  font-size: 12px;
}
`,
  },
  {
    id: 2829,
    name: "Pill Accordion",
    preview: (
      <div className="accordion-2829">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>What's new?</span>
            <i className="ri-arrow-down-s-line"></i>
          </button>
          <div className="accordion-content">
            <span>Explore the latest updates and improvements.</span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Release notes</span>
            <i className="ri-arrow-down-s-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.accordion-2829 {
  width: 100%;
  max-width: 360px;
  margin: auto;
}
.accordion-2829 .accordion-item {
  margin-bottom: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 999px;
  background: #ffffff;
  overflow: hidden;
}
.accordion-2829 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 15px;
  border: 0;
  background: #ffffff;
  color: #374151;
  font-size: 12px;
  cursor: pointer;
  text-align: left;
}
.accordion-2829 .accordion-trigger i {
  color: #6b7280;
  font-size: 16px;
}
.accordion-2829 .accordion-content {
  padding: 0 15px 11px;
  color: #6b7280;
  font-size: 11px;
}
`,
  },
  {
    id: 2830,
    name: "Purple Accordion",
    preview: (
      <div className="accordion-2830">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Design system</span>
            <i className="ri-add-line"></i>
          </button>
          <div className="accordion-content">
            <span>Reusable components for consistent interfaces.</span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Components</span>
            <i className="ri-add-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.accordion-2830 {
  width: 100%;
  max-width: 360px;
  margin: auto;
}
.accordion-2830 .accordion-item {
  margin-bottom: 7px;
  border: 1px solid #ddd6fe;
  border-radius: 10px;
  background: #faf5ff;
  overflow: hidden;
}
.accordion-2830 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 14px;
  border: 0;
  background: transparent;
  color: #6d28d9;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}
.accordion-2830 .accordion-trigger i {
  font-size: 18px;
}
.accordion-2830 .accordion-content {
  padding: 0 14px 13px;
  color: #7c3aed;
  font-size: 12px;
}
`,
  },
  {
    id: 2831,
    name: "FAQ Accordion",
    preview: (
      <div className="accordion-2831">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>How do I get started?</span>
            <i className="ri-add-line"></i>
          </button>
          <div className="accordion-content">
            <span>Create an account and begin exploring the library.</span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Can I use these components?</span>
            <i className="ri-add-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.accordion-2831 {
  width: 100%;
  max-width: 360px;
  margin: auto;
}
.accordion-2831 .accordion-item {
  border-bottom: 1px solid #e5e7eb;
}
.accordion-2831 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 6px;
  border: 0;
  background: transparent;
  color: #111827;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
}
.accordion-2831 .accordion-trigger i {
  color: #6b7280;
  font-size: 17px;
}
.accordion-2831 .accordion-content {
  padding: 0 6px 13px;
  color: #6b7280;
  font-size: 12px;
}
`,
  },
  {
    id: 2832,
    name: "Soft Gray Accordion",
    preview: (
      <div className="accordion-2832">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>General information</span>
            <i className="ri-chevron-down-line"></i>
          </button>
          <div className="accordion-content">
            <span>Simple expandable information for your users.</span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Account</span>
            <i className="ri-chevron-down-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.accordion-2832 {
  width: 100%;
  max-width: 360px;
  margin: auto;
}
.accordion-2832 .accordion-item {
  margin-bottom: 6px;
  border-radius: 8px;
  background: #f3f4f6;
  overflow: hidden;
}
.accordion-2832 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 14px;
  border: 0;
  background: transparent;
  color: #374151;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}
.accordion-2832 .accordion-trigger i {
  color: #6b7280;
  font-size: 17px;
}
.accordion-2832 .accordion-content {
  padding: 0 14px 13px;
  color: #6b7280;
  font-size: 12px;
}
`,
  },
  {
    id: 2833,
    name: "Gradient Accordion",
    preview: (
      <div className="accordion-2833">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Creative section</span>
            <i className="ri-arrow-down-s-line"></i>
          </button>
          <div className="accordion-content">
            <span>A colorful gradient accordion for modern interfaces.</span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>More content</span>
            <i className="ri-arrow-down-s-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.accordion-2833 {
  width: 100%;
  max-width: 360px;
  margin: auto;
  padding: 2px;
  border-radius: 12px;
  background: linear-gradient(135deg, #2563eb, #9333ea, #ec4899);
}
.accordion-2833 .accordion-item {
  background: #ffffff;
  overflow: hidden;
}
.accordion-2833 .accordion-item:first-child {
  border-radius: 10px 10px 0 0;
}
.accordion-2833 .accordion-item:last-child {
  border-radius: 0 0 10px 10px;
}
.accordion-2833 .accordion-item + .accordion-item {
  border-top: 1px solid #e5e7eb;
}
.accordion-2833 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 14px;
  border: 0;
  background: #ffffff;
  color: #111827;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}
.accordion-2833 .accordion-trigger i {
  color: #7c3aed;
  font-size: 18px;
}
.accordion-2833 .accordion-content {
  padding: 0 14px 13px;
  color: #6b7280;
  font-size: 12px;
}
`,
  },
  {
    id: 2834,
    name: "Compact Accordion",
    preview: (
      <div className="accordion-2834">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Quick settings</span>
            <i className="ri-add-line"></i>
          </button>
          <div className="accordion-content">
            <span>Compact layout for smaller interfaces.</span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Preferences</span>
            <i className="ri-add-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.accordion-2834 {
  width: 100%;
  max-width: 360px;
  margin: auto;
}
.accordion-2834 .accordion-item {
  border-bottom: 1px solid #e5e7eb;
}
.accordion-2834 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 10px;
  border: 0;
  background: #ffffff;
  color: #374151;
  font-size: 11px;
  cursor: pointer;
  text-align: left;
}
.accordion-2834 .accordion-trigger i {
  color: #9ca3af;
  font-size: 15px;
}
.accordion-2834 .accordion-content {
  padding: 0 10px 9px;
  color: #6b7280;
  font-size: 10px;
}
`,
  },
  {
    id: 2835,
    name: "Large Accordion",
    preview: (
      <div className="accordion-2835">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Product information</span>
            <i className="ri-arrow-down-s-line"></i>
          </button>
          <div className="accordion-content">
            <span>
              Large typography and generous spacing for prominent content
              sections.
            </span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Specifications</span>
            <i className="ri-arrow-down-s-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.accordion-2835 {
  width: 100%;
  max-width: 360px;
  margin: auto;
}
.accordion-2835 .accordion-item {
  margin-bottom: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 11px;
  background: #ffffff;
  overflow: hidden;
}
.accordion-2835 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 16px;
  border: 0;
  background: #ffffff;
  color: #111827;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
}
.accordion-2835 .accordion-trigger i {
  color: #6b7280;
  font-size: 19px;
}
.accordion-2835 .accordion-content {
  padding: 0 16px 15px;
  color: #6b7280;
  font-size: 12px;
  line-height: 1.5;
}
`,
  },
  {
    id: 2836,
    name: "Modern Accordion",
    preview: (
      <div className="accordion-2836">
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Modern interface</span>
            <i className="ri-add-line"></i>
          </button>
          <div className="accordion-content">
            <span>A polished accordion with a clean modern appearance.</span>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-trigger">
            <span>Responsive design</span>
            <i className="ri-add-line"></i>
          </button>
        </div>
      </div>
    ),
    css: `
.accordion-2836 {
  width: 100%;
  max-width: 360px;
  margin: auto;
}
.accordion-2836 .accordion-item {
  margin-bottom: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: #ffffff;
  overflow: hidden;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.accordion-2836 .accordion-item:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 22px rgba(0,0,0,0.08);
}
.accordion-2836 .accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  border: 0;
  background: #ffffff;
  color: #111827;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
}
.accordion-2836 .accordion-trigger i {
  color: #2563eb;
  font-size: 18px;
}
.accordion-2836 .accordion-content {
  padding: 0 14px 14px;
  color: #6b7280;
  font-size: 12px;
}
`,
  },
];
