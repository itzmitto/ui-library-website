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
  {
    id: 3572,
    name: "Neon Cyan FAQ Accordion",
    preview: (
      <div className="accordion-3572">
        <details open>
          <summary>
            <span>What is Neon UI?</span>
            <span className="accordion-3572__icon"></span>
          </summary>
          <div className="accordion-3572__content">
            Neon UI combines dark surfaces, bright cyan highlights and
            futuristic interface styling.
          </div>
        </details>

        <details>
          <summary>
            <span>Can I customize the colors?</span>
            <span className="accordion-3572__icon"></span>
          </summary>
          <div className="accordion-3572__content">
            Every color is controlled with normal CSS gradients, borders and
            shadows.
          </div>
        </details>

        <details>
          <summary>
            <span>Does it require JavaScript?</span>
            <span className="accordion-3572__icon"></span>
          </summary>
          <div className="accordion-3572__content">
            No. The component uses native details and summary elements.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3572">
    <details open>
        <summary>
            <span>What is Neon UI?</span>
            <span class="accordion-3572__icon"></span>
        </summary>
        <div class="accordion-3572__content">
            Neon UI combines dark surfaces, bright cyan highlights and futuristic interface styling.
        </div>
    </details>

    <details>
        <summary>
            <span>Can I customize the colors?</span>
            <span class="accordion-3572__icon"></span>
        </summary>
        <div class="accordion-3572__content">
            Every color is controlled with normal CSS gradients, borders and shadows.
        </div>
    </details>

    <details>
        <summary>
            <span>Does it require JavaScript?</span>
            <span class="accordion-3572__icon"></span>
        </summary>
        <div class="accordion-3572__content">
            No. The component uses native details and summary elements.
        </div>
    </details>
</div>`,
    css: `.accordion-3572 {
    width: 100%;
    max-width: 540px;
    display: grid;
    gap: 10px;
}

.accordion-3572 details {
    overflow: hidden;
    border: 1px solid rgba(34, 211, 238, .22);
    border-radius: 14px;
    background:
        radial-gradient(
            circle at 100% 0,
            rgba(34, 211, 238, .07),
            transparent 38%
        ),
        linear-gradient(
            145deg,
            #07131d,
            #030910
        );
    box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, .03);
    transition:
        border-color .25s ease,
        box-shadow .25s ease,
        transform .25s ease;
}

.accordion-3572 details:hover {
    border-color: rgba(103, 232, 249, .4);
}

.accordion-3572 details[open] {
    border-color: rgba(103, 232, 249, .68);
    box-shadow:
        0 0 17px rgba(34, 211, 238, .13),
        inset 0 0 20px rgba(34, 211, 238, .04);
}

.accordion-3572 summary {
    min-height: 56px;
    padding: 0 17px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    cursor: pointer;
    list-style: none;
    color: #cffafe;
    font-size: 13px;
    font-weight: 700;
}

.accordion-3572 summary::-webkit-details-marker {
    display: none;
}

.accordion-3572__icon {
    position: relative;
    width: 20px;
    height: 20px;
    flex: 0 0 20px;
    border: 1px solid rgba(103, 232, 249, .42);
    border-radius: 6px;
    background: rgba(34, 211, 238, .04);
    box-shadow: 0 0 8px rgba(34, 211, 238, .1);
}

.accordion-3572__icon::before,
.accordion-3572__icon::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 9px;
    height: 1px;
    background: #67e8f9;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 5px rgba(34, 211, 238, .6);
    transition: transform .25s ease;
}

.accordion-3572__icon::after {
    transform: translate(-50%, -50%) rotate(90deg);
}

.accordion-3572 details[open] .accordion-3572__icon::after {
    transform: translate(-50%, -50%);
}

.accordion-3572__content {
    padding: 0 17px 17px;
    color: #8294a3;
    font-size: 11px;
    line-height: 1.75;
}`,
  },
  {
    id: 3573,
    name: "Magenta Pulse Accordion",
    preview: (
      <div className="accordion-3573">
        <details open>
          <summary>
            <span className="accordion-3573__number">01</span>
            <span className="accordion-3573__title">Creative Systems</span>
            <span className="accordion-3573__plus"></span>
          </summary>
          <div className="accordion-3573__content">
            Build expressive interfaces using deep surfaces, vivid magenta
            borders and controlled neon lighting.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3573__number">02</span>
            <span className="accordion-3573__title">Interactive Design</span>
            <span className="accordion-3573__plus"></span>
          </summary>
          <div className="accordion-3573__content">
            Native open states provide immediate interaction without additional
            scripts.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3573__number">03</span>
            <span className="accordion-3573__title">Responsive Layout</span>
            <span className="accordion-3573__plus"></span>
          </summary>
          <div className="accordion-3573__content">
            The component automatically scales to the available parent width.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3573">
    <details open>
        <summary>
            <span class="accordion-3573__number">01</span>
            <span class="accordion-3573__title">Creative Systems</span>
            <span class="accordion-3573__plus"></span>
        </summary>
        <div class="accordion-3573__content">
            Build expressive interfaces using deep surfaces, vivid magenta borders and controlled neon lighting.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3573__number">02</span>
            <span class="accordion-3573__title">Interactive Design</span>
            <span class="accordion-3573__plus"></span>
        </summary>
        <div class="accordion-3573__content">
            Native open states provide immediate interaction without additional scripts.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3573__number">03</span>
            <span class="accordion-3573__title">Responsive Layout</span>
            <span class="accordion-3573__plus"></span>
        </summary>
        <div class="accordion-3573__content">
            The component automatically scales to the available parent width.
        </div>
    </details>
</div>`,
    css: `.accordion-3573 {
    width: 100%;
    max-width: 540px;
    display: grid;
    gap: 11px;
}

.accordion-3573 details {
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(244, 114, 182, .18);
    border-radius: 16px;
    background:
        radial-gradient(
            circle at 100% 0,
            rgba(236, 72, 153, .1),
            transparent 42%
        ),
        #100711;
    transition:
        border-color .25s ease,
        box-shadow .25s ease;
}

.accordion-3573 details::before {
    content: "";
    position: absolute;
    left: 0;
    top: 12px;
    bottom: 12px;
    width: 2px;
    border-radius: 999px;
    background: #ec4899;
    opacity: .25;
    box-shadow:
        0 0 5px #ec4899,
        0 0 12px rgba(236, 72, 153, .6);
    transition: opacity .25s ease;
}

.accordion-3573 details[open] {
    border-color: rgba(244, 114, 182, .52);
    box-shadow: 0 0 20px rgba(236, 72, 153, .1);
}

.accordion-3573 details[open]::before {
    opacity: 1;
}

.accordion-3573 summary {
    min-height: 59px;
    padding: 0 18px;
    display: grid;
    grid-template-columns: 35px 1fr 21px;
    align-items: center;
    gap: 11px;
    list-style: none;
    cursor: pointer;
}

.accordion-3573 summary::-webkit-details-marker {
    display: none;
}

.accordion-3573__number {
    color: #f472b6;
    font-family: monospace;
    font-size: 9px;
    letter-spacing: .1em;
}

.accordion-3573__title {
    color: #fdf2f8;
    font-size: 13px;
    font-weight: 700;
}

.accordion-3573__plus {
    position: relative;
    width: 20px;
    height: 20px;
}

.accordion-3573__plus::before,
.accordion-3573__plus::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10px;
    height: 1px;
    background: #f472b6;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 5px #ec4899;
    transition: transform .25s ease;
}

.accordion-3573__plus::after {
    transform: translate(-50%, -50%) rotate(90deg);
}

.accordion-3573 details[open] .accordion-3573__plus::after {
    transform: translate(-50%, -50%);
}

.accordion-3573__content {
    padding: 0 18px 18px 64px;
    color: #a78b9e;
    font-size: 11px;
    line-height: 1.75;
}`,
  },
  {
    id: 3574,
    name: "Terminal Neon Accordion",
    preview: (
      <div className="accordion-3574">
        <div className="accordion-3574__header">
          <span></span>
          <span></span>
          <span></span>
          <strong>system.config</strong>
        </div>

        <details open>
          <summary>
            <span className="accordion-3574__prompt">$</span>
            <span>network_status</span>
            <span className="accordion-3574__state">ONLINE</span>
          </summary>
          <div className="accordion-3574__content">
            Connection established. Latency is stable and all required nodes are
            responding.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3574__prompt">$</span>
            <span>security_layer</span>
            <span className="accordion-3574__state">ACTIVE</span>
          </summary>
          <div className="accordion-3574__content">
            Encryption and verification layers are enabled.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3574__prompt">$</span>
            <span>deployment</span>
            <span className="accordion-3574__state">READY</span>
          </summary>
          <div className="accordion-3574__content">
            The current application build is ready for production deployment.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3574">
    <div class="accordion-3574__header">
        <span></span>
        <span></span>
        <span></span>
        <strong>system.config</strong>
    </div>

    <details open>
        <summary>
            <span class="accordion-3574__prompt">$</span>
            <span>network_status</span>
            <span class="accordion-3574__state">ONLINE</span>
        </summary>
        <div class="accordion-3574__content">
            Connection established. Latency is stable and all required nodes are responding.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3574__prompt">$</span>
            <span>security_layer</span>
            <span class="accordion-3574__state">ACTIVE</span>
        </summary>
        <div class="accordion-3574__content">
            Encryption and verification layers are enabled.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3574__prompt">$</span>
            <span>deployment</span>
            <span class="accordion-3574__state">READY</span>
        </summary>
        <div class="accordion-3574__content">
            The current application build is ready for production deployment.
        </div>
    </details>
</div>`,
    css: `.accordion-3574 {
    width: 100%;
    max-width: 540px;
    overflow: hidden;
    border: 1px solid rgba(74, 222, 128, .28);
    border-radius: 14px;
    background: #020906;
    box-shadow:
        0 0 20px rgba(34, 197, 94, .08),
        inset 0 0 25px rgba(34, 197, 94, .025);
    font-family: monospace;
}

.accordion-3574__header {
    height: 39px;
    padding: 0 13px;
    display: flex;
    align-items: center;
    gap: 6px;
    border-bottom: 1px solid rgba(74, 222, 128, .14);
    background: rgba(34, 197, 94, .04);
}

.accordion-3574__header > span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #166534;
}

.accordion-3574__header > span:first-child {
    background: #4ade80;
    box-shadow: 0 0 5px #22c55e;
}

.accordion-3574__header strong {
    margin-left: 6px;
    color: #86efac;
    font-size: 9px;
    font-weight: 500;
}

.accordion-3574 details {
    border-bottom: 1px solid rgba(74, 222, 128, .09);
}

.accordion-3574 details:last-child {
    border-bottom: 0;
}

.accordion-3574 summary {
    min-height: 51px;
    padding: 0 14px;
    display: grid;
    grid-template-columns: 18px 1fr auto;
    align-items: center;
    gap: 8px;
    list-style: none;
    cursor: pointer;
    color: #bbf7d0;
    font-size: 11px;
}

.accordion-3574 summary::-webkit-details-marker {
    display: none;
}

.accordion-3574__prompt {
    color: #22c55e;
    text-shadow: 0 0 6px #22c55e;
}

.accordion-3574__state {
    padding: 4px 7px;
    border: 1px solid rgba(74, 222, 128, .2);
    border-radius: 5px;
    color: #4ade80;
    font-size: 7px;
    letter-spacing: .08em;
}

.accordion-3574 details[open] summary {
    background:
        linear-gradient(
            90deg,
            rgba(34, 197, 94, .08),
            transparent
        );
}

.accordion-3574__content {
    padding: 0 16px 16px 40px;
    color: #5f8b6b;
    font-size: 10px;
    line-height: 1.75;
}`,
  },
  {
    id: 3575,
    name: "Electric Blue Accordion",
    preview: (
      <div className="accordion-3575">
        <details open>
          <summary>
            <span className="accordion-3575__marker"></span>
            <span>Power Distribution</span>
            <span className="accordion-3575__arrow">⌄</span>
          </summary>
          <div className="accordion-3575__content">
            Energy is automatically distributed between active interface modules
            based on current demand.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3575__marker"></span>
            <span>Core Monitoring</span>
            <span className="accordion-3575__arrow">⌄</span>
          </summary>
          <div className="accordion-3575__content">
            Live monitoring detects unusual performance spikes and unstable
            processes.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3575__marker"></span>
            <span>Backup Protocol</span>
            <span className="accordion-3575__arrow">⌄</span>
          </summary>
          <div className="accordion-3575__content">
            Redundant systems remain ready when the primary node becomes
            unavailable.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3575">
    <details open>
        <summary>
            <span class="accordion-3575__marker"></span>
            <span>Power Distribution</span>
            <span class="accordion-3575__arrow">⌄</span>
        </summary>
        <div class="accordion-3575__content">
            Energy is automatically distributed between active interface modules based on current demand.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3575__marker"></span>
            <span>Core Monitoring</span>
            <span class="accordion-3575__arrow">⌄</span>
        </summary>
        <div class="accordion-3575__content">
            Live monitoring detects unusual performance spikes and unstable processes.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3575__marker"></span>
            <span>Backup Protocol</span>
            <span class="accordion-3575__arrow">⌄</span>
        </summary>
        <div class="accordion-3575__content">
            Redundant systems remain ready when the primary node becomes unavailable.
        </div>
    </details>
</div>`,
    css: `.accordion-3575 {
    width: 100%;
    max-width: 540px;
    display: grid;
    gap: 9px;
}

.accordion-3575 details {
    overflow: hidden;
    border: 1px solid rgba(59, 130, 246, .2);
    border-radius: 13px;
    background:
        linear-gradient(
            110deg,
            #050a18,
            #07152d
        );
    transition:
        border-color .2s ease,
        box-shadow .2s ease;
}

.accordion-3575 details:hover {
    border-color: rgba(96, 165, 250, .38);
}

.accordion-3575 details[open] {
    border-color: rgba(96, 165, 250, .62);
    box-shadow:
        0 0 16px rgba(59, 130, 246, .14),
        inset 0 0 18px rgba(37, 99, 235, .05);
}

.accordion-3575 summary {
    min-height: 53px;
    padding: 0 15px;
    display: grid;
    grid-template-columns: 14px 1fr 22px;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    list-style: none;
    color: #dbeafe;
    font-size: 12px;
    font-weight: 700;
}

.accordion-3575 summary::-webkit-details-marker {
    display: none;
}

.accordion-3575__marker {
    width: 7px;
    height: 23px;
    border-radius: 999px;
    background: #3b82f6;
    box-shadow:
        0 0 5px #3b82f6,
        0 0 12px rgba(59, 130, 246, .5);
}

.accordion-3575__arrow {
    color: #60a5fa;
    font-size: 18px;
    text-align: center;
    transition: transform .25s ease;
}

.accordion-3575 details[open] .accordion-3575__arrow {
    transform: rotate(180deg);
}

.accordion-3575__content {
    padding: 0 15px 16px 39px;
    color: #8295b5;
    font-size: 11px;
    line-height: 1.75;
}`,
  },
  {
    id: 3576,
    name: "Cyber Violet Accordion",
    preview: (
      <div className="accordion-3576">
        <details open>
          <summary>
            <div className="accordion-3576__label">
              <span>01</span>
              <strong>Interface Architecture</strong>
            </div>
            <span className="accordion-3576__toggle"></span>
          </summary>
          <div className="accordion-3576__content">
            Modular architecture keeps complex interface systems maintainable
            and easy to extend.
          </div>
        </details>

        <details>
          <summary>
            <div className="accordion-3576__label">
              <span>02</span>
              <strong>Design Tokens</strong>
            </div>
            <span className="accordion-3576__toggle"></span>
          </summary>
          <div className="accordion-3576__content">
            Reusable spacing, radius and typography values maintain visual
            consistency.
          </div>
        </details>

        <details>
          <summary>
            <div className="accordion-3576__label">
              <span>03</span>
              <strong>System Scaling</strong>
            </div>
            <span className="accordion-3576__toggle"></span>
          </summary>
          <div className="accordion-3576__content">
            Components scale into larger applications without requiring a
            complete redesign.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3576">
    <details open>
        <summary>
            <div class="accordion-3576__label">
                <span>01</span>
                <strong>Interface Architecture</strong>
            </div>
            <span class="accordion-3576__toggle"></span>
        </summary>
        <div class="accordion-3576__content">
            Modular architecture keeps complex interface systems maintainable and easy to extend.
        </div>
    </details>

    <details>
        <summary>
            <div class="accordion-3576__label">
                <span>02</span>
                <strong>Design Tokens</strong>
            </div>
            <span class="accordion-3576__toggle"></span>
        </summary>
        <div class="accordion-3576__content">
            Reusable spacing, radius and typography values maintain visual consistency.
        </div>
    </details>

    <details>
        <summary>
            <div class="accordion-3576__label">
                <span>03</span>
                <strong>System Scaling</strong>
            </div>
            <span class="accordion-3576__toggle"></span>
        </summary>
        <div class="accordion-3576__content">
            Components scale into larger applications without requiring a complete redesign.
        </div>
    </details>
</div>`,
    css: `.accordion-3576 {
    width: 100%;
    max-width: 540px;
    display: grid;
    gap: 10px;
}

.accordion-3576 details {
    overflow: hidden;
    border: 1px solid rgba(168, 85, 247, .18);
    border-radius: 5px 16px 5px 16px;
    background:
        linear-gradient(
            135deg,
            rgba(30, 10, 50, .96),
            rgba(8, 5, 18, .98)
        );
    transition:
        border-color .25s ease,
        box-shadow .25s ease;
}

.accordion-3576 details[open] {
    border-color: rgba(192, 132, 252, .6);
    box-shadow: 0 0 18px rgba(168, 85, 247, .13);
}

.accordion-3576 summary {
    min-height: 57px;
    padding: 0 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    cursor: pointer;
    list-style: none;
}

.accordion-3576 summary::-webkit-details-marker {
    display: none;
}

.accordion-3576__label {
    display: flex;
    align-items: center;
    gap: 13px;
}

.accordion-3576__label span {
    color: #a855f7;
    font-family: monospace;
    font-size: 9px;
    text-shadow: 0 0 6px #9333ea;
}

.accordion-3576__label strong {
    color: #f3e8ff;
    font-size: 12px;
}

.accordion-3576__toggle {
    position: relative;
    width: 25px;
    height: 25px;
    border: 1px solid rgba(192, 132, 252, .28);
    border-radius: 50%;
    background: rgba(168, 85, 247, .04);
}

.accordion-3576__toggle::before,
.accordion-3576__toggle::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 9px;
    height: 1px;
    background: #c084fc;
    transform: translate(-50%, -50%);
    transition: transform .25s ease;
}

.accordion-3576__toggle::after {
    transform: translate(-50%, -50%) rotate(90deg);
}

.accordion-3576 details[open] .accordion-3576__toggle::after {
    transform: translate(-50%, -50%);
}

.accordion-3576__content {
    padding: 0 18px 18px 48px;
    color: #9d8eac;
    font-size: 11px;
    line-height: 1.75;
}`,
  },
  {
    id: 3577,
    name: "Neon Sunset Accordion",
    preview: (
      <div className="accordion-3577">
        <details open>
          <summary>
            <span>Visual Direction</span>
            <span className="accordion-3577__button">+</span>
          </summary>
          <div className="accordion-3577__content">
            Orange and vivid pink lighting create a warm neon interface over a
            dark background.
          </div>
        </details>

        <details>
          <summary>
            <span>Gradient System</span>
            <span className="accordion-3577__button">+</span>
          </summary>
          <div className="accordion-3577__content">
            Layered gradients create visual depth while remaining lightweight.
          </div>
        </details>

        <details>
          <summary>
            <span>Component Behavior</span>
            <span className="accordion-3577__button">+</span>
          </summary>
          <div className="accordion-3577__content">
            Each panel receives additional lighting when its content is opened.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3577">
    <details open>
        <summary>
            <span>Visual Direction</span>
            <span class="accordion-3577__button">+</span>
        </summary>
        <div class="accordion-3577__content">
            Orange and vivid pink lighting create a warm neon interface over a dark background.
        </div>
    </details>

    <details>
        <summary>
            <span>Gradient System</span>
            <span class="accordion-3577__button">+</span>
        </summary>
        <div class="accordion-3577__content">
            Layered gradients create visual depth while remaining lightweight.
        </div>
    </details>

    <details>
        <summary>
            <span>Component Behavior</span>
            <span class="accordion-3577__button">+</span>
        </summary>
        <div class="accordion-3577__content">
            Each panel receives additional lighting when its content is opened.
        </div>
    </details>
</div>`,
    css: `.accordion-3577 {
    width: 100%;
    max-width: 540px;
    display: grid;
    gap: 10px;
}

.accordion-3577 details {
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(251, 113, 133, .18);
    border-radius: 15px;
    background:
        radial-gradient(
            circle at 100% 0,
            rgba(249, 115, 22, .06),
            transparent 38%
        ),
        linear-gradient(
            120deg,
            #12080b,
            #170912
        );
}

.accordion-3577 details::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 3px;
    background:
        linear-gradient(
            #fb7185,
            #f97316
        );
    opacity: .25;
}

.accordion-3577 details[open] {
    border-color: rgba(251, 113, 133, .52);
    box-shadow: 0 0 19px rgba(244, 63, 94, .09);
}

.accordion-3577 details[open]::before {
    opacity: 1;
    box-shadow: 0 0 8px rgba(251, 113, 133, .65);
}

.accordion-3577 summary {
    min-height: 55px;
    padding: 0 16px 0 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    cursor: pointer;
    color: #fff1f2;
    font-size: 12px;
    font-weight: 700;
}

.accordion-3577 summary::-webkit-details-marker {
    display: none;
}

.accordion-3577__button {
    width: 24px;
    height: 24px;
    display: grid;
    place-items: center;
    border-radius: 7px;
    background:
        linear-gradient(
            135deg,
            rgba(251, 113, 133, .14),
            rgba(249, 115, 22, .14)
        );
    color: #fb7185;
    font-size: 15px;
    transition: transform .25s ease;
}

.accordion-3577 details[open] .accordion-3577__button {
    transform: rotate(45deg);
}

.accordion-3577__content {
    padding: 0 18px 18px;
    color: #a68b91;
    font-size: 11px;
    line-height: 1.75;
}`,
  },
  {
    id: 3578,
    name: "Toxic Neon Accordion",
    preview: (
      <div className="accordion-3578">
        <details open>
          <summary>
            <span className="accordion-3578__indicator"></span>
            <span>System Integrity</span>
            <span className="accordion-3578__symbol">+</span>
          </summary>
          <div className="accordion-3578__content">
            Integrity checks are continuously running across all active
            services.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3578__indicator"></span>
            <span>Resource Allocation</span>
            <span className="accordion-3578__symbol">+</span>
          </summary>
          <div className="accordion-3578__content">
            Resources are dynamically reassigned whenever workloads change.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3578__indicator"></span>
            <span>Environment Control</span>
            <span className="accordion-3578__symbol">+</span>
          </summary>
          <div className="accordion-3578__content">
            Runtime conditions remain inside defined operational ranges.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3578">
    <details open>
        <summary>
            <span class="accordion-3578__indicator"></span>
            <span>System Integrity</span>
            <span class="accordion-3578__symbol">+</span>
        </summary>
        <div class="accordion-3578__content">
            Integrity checks are continuously running across all active services.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3578__indicator"></span>
            <span>Resource Allocation</span>
            <span class="accordion-3578__symbol">+</span>
        </summary>
        <div class="accordion-3578__content">
            Resources are dynamically reassigned whenever workloads change.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3578__indicator"></span>
            <span>Environment Control</span>
            <span class="accordion-3578__symbol">+</span>
        </summary>
        <div class="accordion-3578__content">
            Runtime conditions remain inside defined operational ranges.
        </div>
    </details>
</div>`,
    css: `.accordion-3578 {
    width: 100%;
    max-width: 540px;
    padding: 10px;
    display: grid;
    gap: 8px;
    border: 1px solid rgba(163, 230, 53, .15);
    border-radius: 17px;
    background:
        repeating-linear-gradient(
            0deg,
            rgba(163, 230, 53, .018) 0,
            rgba(163, 230, 53, .018) 1px,
            transparent 1px,
            transparent 5px
        ),
        #060a03;
}

.accordion-3578 details {
    overflow: hidden;
    border: 1px solid rgba(163, 230, 53, .13);
    border-radius: 10px;
    background: rgba(9, 16, 5, .94);
}

.accordion-3578 details[open] {
    border-color: rgba(190, 242, 100, .52);
    box-shadow: 0 0 14px rgba(163, 230, 53, .1);
}

.accordion-3578 summary {
    min-height: 49px;
    padding: 0 13px;
    display: grid;
    grid-template-columns: 9px 1fr 20px;
    align-items: center;
    gap: 10px;
    list-style: none;
    cursor: pointer;
    color: #ecfccb;
    font-size: 11px;
    font-weight: 700;
}

.accordion-3578 summary::-webkit-details-marker {
    display: none;
}

.accordion-3578__indicator {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #84cc16;
    box-shadow:
        0 0 4px #a3e635,
        0 0 9px rgba(163, 230, 53, .6);
}

.accordion-3578__symbol {
    color: #a3e635;
    font-size: 15px;
    transition: transform .25s ease;
}

.accordion-3578 details[open] .accordion-3578__symbol {
    transform: rotate(45deg);
}

.accordion-3578__content {
    padding: 0 13px 15px 32px;
    color: #829566;
    font-size: 10px;
    line-height: 1.75;
}`,
  },
  {
    id: 3579,
    name: "Laser Red Accordion",
    preview: (
      <div className="accordion-3579">
        <details open>
          <summary>
            <span className="accordion-3579__code">A-01</span>
            <strong>Access Protocol</strong>
            <span className="accordion-3579__line"></span>
          </summary>
          <div className="accordion-3579__content">
            Authorized credentials are required before protected resources can
            be accessed.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3579__code">A-02</span>
            <strong>Threat Response</strong>
            <span className="accordion-3579__line"></span>
          </summary>
          <div className="accordion-3579__content">
            Suspicious operations are isolated immediately from active systems.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3579__code">A-03</span>
            <strong>Audit Logs</strong>
            <span className="accordion-3579__line"></span>
          </summary>
          <div className="accordion-3579__content">
            Important security events remain available for later review.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3579">
    <details open>
        <summary>
            <span class="accordion-3579__code">A-01</span>
            <strong>Access Protocol</strong>
            <span class="accordion-3579__line"></span>
        </summary>
        <div class="accordion-3579__content">
            Authorized credentials are required before protected resources can be accessed.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3579__code">A-02</span>
            <strong>Threat Response</strong>
            <span class="accordion-3579__line"></span>
        </summary>
        <div class="accordion-3579__content">
            Suspicious operations are isolated immediately from active systems.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3579__code">A-03</span>
            <strong>Audit Logs</strong>
            <span class="accordion-3579__line"></span>
        </summary>
        <div class="accordion-3579__content">
            Important security events remain available for later review.
        </div>
    </details>
</div>`,
    css: `.accordion-3579 {
    width: 100%;
    max-width: 540px;
    display: grid;
    gap: 8px;
}

.accordion-3579 details {
    overflow: hidden;
    border: 1px solid rgba(248, 113, 113, .16);
    border-radius: 9px;
    background:
        linear-gradient(
            90deg,
            rgba(127, 29, 29, .08),
            #090404 34%
        );
}

.accordion-3579 details[open] {
    border-color: rgba(248, 113, 113, .47);
    box-shadow: 0 0 17px rgba(239, 68, 68, .09);
}

.accordion-3579 summary {
    min-height: 54px;
    padding: 0 15px;
    display: grid;
    grid-template-columns: 44px 1fr 28px;
    align-items: center;
    gap: 10px;
    list-style: none;
    cursor: pointer;
}

.accordion-3579 summary::-webkit-details-marker {
    display: none;
}

.accordion-3579__code {
    color: #ef4444;
    font-family: monospace;
    font-size: 8px;
    letter-spacing: .08em;
}

.accordion-3579 summary strong {
    color: #fee2e2;
    font-size: 12px;
}

.accordion-3579__line {
    position: relative;
    width: 25px;
    height: 8px;
}

.accordion-3579__line::before,
.accordion-3579__line::after {
    content: "";
    position: absolute;
    right: 0;
    height: 1px;
    background: #ef4444;
    box-shadow: 0 0 5px #dc2626;
    transition: width .25s ease;
}

.accordion-3579__line::before {
    top: 1px;
    width: 25px;
}

.accordion-3579__line::after {
    bottom: 1px;
    width: 15px;
}

.accordion-3579 details[open] .accordion-3579__line::after {
    width: 25px;
}

.accordion-3579__content {
    padding: 0 16px 16px 69px;
    color: #977373;
    font-size: 10px;
    line-height: 1.75;
}`,
  },
  {
    id: 3580,
    name: "Aqua Glass Neon Accordion",
    preview: (
      <div className="accordion-3580">
        <details open>
          <summary>
            <span>Realtime Analytics</span>
            <span className="accordion-3580__chevron">⌄</span>
          </summary>
          <div className="accordion-3580__content">
            Visualize incoming activity and performance data with lightweight
            dashboard components.
          </div>
        </details>

        <details>
          <summary>
            <span>Cloud Storage</span>
            <span className="accordion-3580__chevron">⌄</span>
          </summary>
          <div className="accordion-3580__content">
            Store synchronized application data across multiple environments.
          </div>
        </details>

        <details>
          <summary>
            <span>Team Workspace</span>
            <span className="accordion-3580__chevron">⌄</span>
          </summary>
          <div className="accordion-3580__content">
            Share reusable resources with the entire development team.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3580">
    <details open>
        <summary>
            <span>Realtime Analytics</span>
            <span class="accordion-3580__chevron">⌄</span>
        </summary>
        <div class="accordion-3580__content">
            Visualize incoming activity and performance data with lightweight dashboard components.
        </div>
    </details>

    <details>
        <summary>
            <span>Cloud Storage</span>
            <span class="accordion-3580__chevron">⌄</span>
        </summary>
        <div class="accordion-3580__content">
            Store synchronized application data across multiple environments.
        </div>
    </details>

    <details>
        <summary>
            <span>Team Workspace</span>
            <span class="accordion-3580__chevron">⌄</span>
        </summary>
        <div class="accordion-3580__content">
            Share reusable resources with the entire development team.
        </div>
    </details>
</div>`,
    css: `.accordion-3580 {
    width: 100%;
    max-width: 540px;
    padding: 12px;
    display: grid;
    gap: 9px;
    border: 1px solid rgba(103, 232, 249, .14);
    border-radius: 19px;
    background:
        radial-gradient(
            circle at 100% 0,
            rgba(6, 182, 212, .13),
            transparent 38%
        ),
        rgba(5, 18, 27, .94);
    backdrop-filter: blur(14px);
}

.accordion-3580 details {
    overflow: hidden;
    border: 1px solid rgba(165, 243, 252, .11);
    border-radius: 13px;
    background: rgba(255, 255, 255, .025);
    backdrop-filter: blur(10px);
}

.accordion-3580 details[open] {
    border-color: rgba(103, 232, 249, .36);
    background: rgba(6, 182, 212, .05);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .04);
}

.accordion-3580 summary {
    min-height: 52px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    cursor: pointer;
    color: #cffafe;
    font-size: 12px;
    font-weight: 600;
}

.accordion-3580 summary::-webkit-details-marker {
    display: none;
}

.accordion-3580__chevron {
    width: 25px;
    height: 25px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: #67e8f9;
    background: rgba(34, 211, 238, .08);
    transition: transform .25s ease;
}

.accordion-3580 details[open] .accordion-3580__chevron {
    transform: rotate(180deg);
}

.accordion-3580__content {
    padding: 0 15px 16px;
    color: #7c9aa5;
    font-size: 10px;
    line-height: 1.75;
}`,
  },
  {
    id: 3581,
    name: "Pink Grid Accordion",
    preview: (
      <div className="accordion-3581">
        <details open>
          <summary>
            <span className="accordion-3581__index">001</span>
            <span>Grid Navigation</span>
            <span className="accordion-3581__open">+</span>
          </summary>
          <div className="accordion-3581__content">
            Grid based navigation keeps large interfaces structured and
            predictable.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3581__index">002</span>
            <span>Visual Hierarchy</span>
            <span className="accordion-3581__open">+</span>
          </summary>
          <div className="accordion-3581__content">
            Strong typography and spacing make important information easier to
            scan.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3581__index">003</span>
            <span>Motion Layer</span>
            <span className="accordion-3581__open">+</span>
          </summary>
          <div className="accordion-3581__content">
            Motion is used only where it improves interaction and feedback.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3581">
    <details open>
        <summary>
            <span class="accordion-3581__index">001</span>
            <span>Grid Navigation</span>
            <span class="accordion-3581__open">+</span>
        </summary>
        <div class="accordion-3581__content">
            Grid based navigation keeps large interfaces structured and predictable.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3581__index">002</span>
            <span>Visual Hierarchy</span>
            <span class="accordion-3581__open">+</span>
        </summary>
        <div class="accordion-3581__content">
            Strong typography and spacing make important information easier to scan.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3581__index">003</span>
            <span>Motion Layer</span>
            <span class="accordion-3581__open">+</span>
        </summary>
        <div class="accordion-3581__content">
            Motion is used only where it improves interaction and feedback.
        </div>
    </details>
</div>`,
    css: `.accordion-3581 {
    width: 100%;
    max-width: 540px;
    padding: 10px;
    display: grid;
    gap: 8px;
    border: 1px solid rgba(236, 72, 153, .15);
    border-radius: 13px;
    background:
        linear-gradient(
            rgba(236, 72, 153, .03) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(236, 72, 153, .03) 1px,
            transparent 1px
        ),
        #0c050b;
    background-size: 18px 18px;
}

.accordion-3581 details {
    overflow: hidden;
    border: 1px solid rgba(244, 114, 182, .13);
    background: rgba(17, 7, 16, .94);
}

.accordion-3581 details[open] {
    border-color: rgba(244, 114, 182, .46);
    box-shadow: 0 0 16px rgba(236, 72, 153, .1);
}

.accordion-3581 summary {
    min-height: 51px;
    padding: 0 13px;
    display: grid;
    grid-template-columns: 36px 1fr 20px;
    align-items: center;
    gap: 9px;
    list-style: none;
    cursor: pointer;
    color: #fce7f3;
    font-size: 11px;
    font-weight: 700;
}

.accordion-3581 summary::-webkit-details-marker {
    display: none;
}

.accordion-3581__index {
    color: #ec4899;
    font-family: monospace;
    font-size: 8px;
}

.accordion-3581__open {
    color: #f472b6;
    font-size: 16px;
    transition: transform .25s ease;
}

.accordion-3581 details[open] .accordion-3581__open {
    transform: rotate(45deg);
}

.accordion-3581__content {
    padding: 0 13px 15px 58px;
    color: #977689;
    font-size: 10px;
    line-height: 1.75;
}`,
  },
  {
    id: 3582,
    name: "Indigo Tech Accordion",
    preview: (
      <div className="accordion-3582">
        <details open>
          <summary>
            <div>
              <span>MODULE</span>
              <strong>Frontend Runtime</strong>
            </div>
            <span className="accordion-3582__indicator"></span>
          </summary>
          <div className="accordion-3582__content">
            Handles rendering, interactions and state updates inside the client
            application.
          </div>
        </details>

        <details>
          <summary>
            <div>
              <span>MODULE</span>
              <strong>API Gateway</strong>
            </div>
            <span className="accordion-3582__indicator"></span>
          </summary>
          <div className="accordion-3582__content">
            Routes application requests through a centralized network layer.
          </div>
        </details>

        <details>
          <summary>
            <div>
              <span>MODULE</span>
              <strong>Data Service</strong>
            </div>
            <span className="accordion-3582__indicator"></span>
          </summary>
          <div className="accordion-3582__content">
            Provides normalized data to the rest of the interface.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3582">
    <details open>
        <summary>
            <div>
                <span>MODULE</span>
                <strong>Frontend Runtime</strong>
            </div>
            <span class="accordion-3582__indicator"></span>
        </summary>
        <div class="accordion-3582__content">
            Handles rendering, interactions and state updates inside the client application.
        </div>
    </details>

    <details>
        <summary>
            <div>
                <span>MODULE</span>
                <strong>API Gateway</strong>
            </div>
            <span class="accordion-3582__indicator"></span>
        </summary>
        <div class="accordion-3582__content">
            Routes application requests through a centralized network layer.
        </div>
    </details>

    <details>
        <summary>
            <div>
                <span>MODULE</span>
                <strong>Data Service</strong>
            </div>
            <span class="accordion-3582__indicator"></span>
        </summary>
        <div class="accordion-3582__content">
            Provides normalized data to the rest of the interface.
        </div>
    </details>
</div>`,
    css: `.accordion-3582 {
    width: 100%;
    max-width: 540px;
    display: grid;
    gap: 10px;
}

.accordion-3582 details {
    overflow: hidden;
    border: 1px solid rgba(99, 102, 241, .17);
    border-radius: 14px;
    background:
        linear-gradient(
            135deg,
            #080a1d,
            #0b0e28
        );
}

.accordion-3582 details[open] {
    border-color: rgba(129, 140, 248, .52);
    box-shadow:
        0 0 19px rgba(99, 102, 241, .11),
        inset 0 0 18px rgba(99, 102, 241, .03);
}

.accordion-3582 summary {
    min-height: 61px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    cursor: pointer;
}

.accordion-3582 summary::-webkit-details-marker {
    display: none;
}

.accordion-3582 summary div {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.accordion-3582 summary div span {
    color: #6366f1;
    font-size: 7px;
    font-weight: 800;
    letter-spacing: .18em;
}

.accordion-3582 summary strong {
    color: #e0e7ff;
    font-size: 12px;
}

.accordion-3582__indicator {
    position: relative;
    width: 25px;
    height: 25px;
    border-radius: 7px;
    background: rgba(99, 102, 241, .08);
}

.accordion-3582__indicator::before,
.accordion-3582__indicator::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 9px;
    height: 1px;
    background: #818cf8;
    transform: translate(-50%, -50%);
    transition: transform .25s ease;
}

.accordion-3582__indicator::after {
    transform: translate(-50%, -50%) rotate(90deg);
}

.accordion-3582 details[open] .accordion-3582__indicator::after {
    transform: translate(-50%, -50%);
}

.accordion-3582__content {
    padding: 0 16px 18px;
    color: #8186a4;
    font-size: 10px;
    line-height: 1.75;
}`,
  },
  {
    id: 3583,
    name: "Yellow Circuit Accordion",
    preview: (
      <div className="accordion-3583">
        <details open>
          <summary>
            <span className="accordion-3583__chip">01</span>
            <span>Processing Unit</span>
            <span className="accordion-3583__cross"></span>
          </summary>
          <div className="accordion-3583__content">
            Processing resources are divided between tasks according to
            priority.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3583__chip">02</span>
            <span>Memory Bus</span>
            <span className="accordion-3583__cross"></span>
          </summary>
          <div className="accordion-3583__content">
            Shared memory channels allow multiple services to communicate
            quickly.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3583__chip">03</span>
            <span>Output Controller</span>
            <span className="accordion-3583__cross"></span>
          </summary>
          <div className="accordion-3583__content">
            Output signals are validated before being sent to connected modules.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3583">
    <details open>
        <summary>
            <span class="accordion-3583__chip">01</span>
            <span>Processing Unit</span>
            <span class="accordion-3583__cross"></span>
        </summary>
        <div class="accordion-3583__content">
            Processing resources are divided between tasks according to priority.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3583__chip">02</span>
            <span>Memory Bus</span>
            <span class="accordion-3583__cross"></span>
        </summary>
        <div class="accordion-3583__content">
            Shared memory channels allow multiple services to communicate quickly.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3583__chip">03</span>
            <span>Output Controller</span>
            <span class="accordion-3583__cross"></span>
        </summary>
        <div class="accordion-3583__content">
            Output signals are validated before being sent to connected modules.
        </div>
    </details>
</div>`,
    css: `.accordion-3583 {
    width: 100%;
    max-width: 540px;
    padding: 9px;
    display: grid;
    gap: 8px;
    border: 1px solid rgba(250, 204, 21, .12);
    border-radius: 12px;
    background: #090805;
}

.accordion-3583 details {
    overflow: hidden;
    border: 1px solid rgba(250, 204, 21, .12);
    background:
        linear-gradient(
            90deg,
            rgba(250, 204, 21, .035),
            transparent 35%
        );
}

.accordion-3583 details[open] {
    border-color: rgba(253, 224, 71, .5);
    box-shadow: 0 0 14px rgba(250, 204, 21, .08);
}

.accordion-3583 summary {
    min-height: 50px;
    padding: 0 13px;
    display: grid;
    grid-template-columns: 30px 1fr 20px;
    align-items: center;
    gap: 10px;
    list-style: none;
    cursor: pointer;
    color: #fef9c3;
    font-size: 11px;
    font-weight: 700;
}

.accordion-3583 summary::-webkit-details-marker {
    display: none;
}

.accordion-3583__chip {
    width: 26px;
    height: 26px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(250, 204, 21, .24);
    color: #facc15;
    font-family: monospace;
    font-size: 7px;
}

.accordion-3583__cross {
    position: relative;
    width: 18px;
    height: 18px;
}

.accordion-3583__cross::before,
.accordion-3583__cross::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 1px;
    background: #fde047;
    transform: translate(-50%, -50%);
    transition: transform .25s ease;
}

.accordion-3583__cross::after {
    transform: translate(-50%, -50%) rotate(90deg);
}

.accordion-3583 details[open] .accordion-3583__cross::after {
    transform: translate(-50%, -50%);
}

.accordion-3583__content {
    padding: 0 14px 15px 54px;
    color: #8e865d;
    font-size: 10px;
    line-height: 1.75;
}`,
  },
  {
    id: 3584,
    name: "Dual Neon Accordion",
    preview: (
      <div className="accordion-3584">
        <details open>
          <summary>
            <span>Design System</span>
            <span className="accordion-3584__switch"></span>
          </summary>
          <div className="accordion-3584__content">
            A consistent system reduces duplicated work across large interfaces.
          </div>
        </details>

        <details>
          <summary>
            <span>Component Library</span>
            <span className="accordion-3584__switch"></span>
          </summary>
          <div className="accordion-3584__content">
            Reusable components improve development speed and visual
            consistency.
          </div>
        </details>

        <details>
          <summary>
            <span>Documentation</span>
            <span className="accordion-3584__switch"></span>
          </summary>
          <div className="accordion-3584__content">
            Clear documentation explains intended usage and component behavior.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3584">
    <details open>
        <summary>
            <span>Design System</span>
            <span class="accordion-3584__switch"></span>
        </summary>
        <div class="accordion-3584__content">
            A consistent system reduces duplicated work across large interfaces.
        </div>
    </details>

    <details>
        <summary>
            <span>Component Library</span>
            <span class="accordion-3584__switch"></span>
        </summary>
        <div class="accordion-3584__content">
            Reusable components improve development speed and visual consistency.
        </div>
    </details>

    <details>
        <summary>
            <span>Documentation</span>
            <span class="accordion-3584__switch"></span>
        </summary>
        <div class="accordion-3584__content">
            Clear documentation explains intended usage and component behavior.
        </div>
    </details>
</div>`,
    css: `.accordion-3584 {
    width: 100%;
    max-width: 540px;
    display: grid;
    gap: 10px;
}

.accordion-3584 details {
    overflow: hidden;
    border: 1px solid rgba(96, 165, 250, .14);
    border-radius: 15px;
    background:
        linear-gradient(
            115deg,
            rgba(59, 130, 246, .05),
            rgba(236, 72, 153, .04)
        ),
        #070812;
}

.accordion-3584 details[open] {
    border-color: rgba(192, 132, 252, .4);
    box-shadow:
        -5px 0 14px rgba(59, 130, 246, .07),
        5px 0 14px rgba(236, 72, 153, .07);
}

.accordion-3584 summary {
    min-height: 56px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    cursor: pointer;
    color: #f8fafc;
    font-size: 12px;
    font-weight: 700;
}

.accordion-3584 summary::-webkit-details-marker {
    display: none;
}

.accordion-3584__switch {
    position: relative;
    width: 32px;
    height: 18px;
    border-radius: 999px;
    border: 1px solid rgba(192, 132, 252, .22);
    background:
        linear-gradient(
            90deg,
            rgba(59, 130, 246, .25),
            rgba(236, 72, 153, .25)
        );
}

.accordion-3584__switch::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    background: #60a5fa;
    box-shadow: 0 0 6px #3b82f6;
    transition:
        left .25s ease,
        background .25s ease,
        box-shadow .25s ease;
}

.accordion-3584 details[open] .accordion-3584__switch::before {
    left: 16px;
    background: #f472b6;
    box-shadow: 0 0 6px #ec4899;
}

.accordion-3584__content {
    padding: 0 16px 17px;
    color: #888aa4;
    font-size: 10px;
    line-height: 1.75;
}`,
  },
  {
    id: 3585,
    name: "White Neon Accordion",
    preview: (
      <div className="accordion-3585">
        <details open>
          <summary>
            <span>Minimal Structure</span>
            <span className="accordion-3585__circle"></span>
          </summary>
          <div className="accordion-3585__content">
            A reduced visual system can still feel futuristic when contrast and
            lighting are carefully controlled.
          </div>
        </details>

        <details>
          <summary>
            <span>Neutral Palette</span>
            <span className="accordion-3585__circle"></span>
          </summary>
          <div className="accordion-3585__content">
            White highlights create a clean neon effect without relying on
            bright colors.
          </div>
        </details>

        <details>
          <summary>
            <span>Focused Content</span>
            <span className="accordion-3585__circle"></span>
          </summary>
          <div className="accordion-3585__content">
            Typography remains the most important visual element of the
            component.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3585">
    <details open>
        <summary>
            <span>Minimal Structure</span>
            <span class="accordion-3585__circle"></span>
        </summary>
        <div class="accordion-3585__content">
            A reduced visual system can still feel futuristic when contrast and lighting are carefully controlled.
        </div>
    </details>

    <details>
        <summary>
            <span>Neutral Palette</span>
            <span class="accordion-3585__circle"></span>
        </summary>
        <div class="accordion-3585__content">
            White highlights create a clean neon effect without relying on bright colors.
        </div>
    </details>

    <details>
        <summary>
            <span>Focused Content</span>
            <span class="accordion-3585__circle"></span>
        </summary>
        <div class="accordion-3585__content">
            Typography remains the most important visual element of the component.
        </div>
    </details>
</div>`,
    css: `.accordion-3585 {
    width: 100%;
    max-width: 540px;
    display: grid;
    gap: 10px;
}

.accordion-3585 details {
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, .1);
    border-radius: 13px;
    background:
        linear-gradient(
            145deg,
            #0b0b0c,
            #050505
        );
}

.accordion-3585 details[open] {
    border-color: rgba(255, 255, 255, .31);
    box-shadow: 0 0 17px rgba(255, 255, 255, .05);
}

.accordion-3585 summary {
    min-height: 55px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    cursor: pointer;
    color: #fafafa;
    font-size: 12px;
    font-weight: 600;
}

.accordion-3585 summary::-webkit-details-marker {
    display: none;
}

.accordion-3585__circle {
    position: relative;
    width: 21px;
    height: 21px;
    border: 1px solid rgba(255, 255, 255, .23);
    border-radius: 50%;
}

.accordion-3585__circle::before,
.accordion-3585__circle::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 7px;
    height: 1px;
    background: #ffffff;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 5px rgba(255, 255, 255, .45);
}

.accordion-3585__circle::after {
    transform: translate(-50%, -50%) rotate(90deg);
    transition: transform .25s ease;
}

.accordion-3585 details[open] .accordion-3585__circle::after {
    transform: translate(-50%, -50%);
}

.accordion-3585__content {
    padding: 0 15px 17px;
    color: #737373;
    font-size: 10px;
    line-height: 1.75;
}`,
  },
  {
    id: 3586,
    name: "Matrix Neon Accordion",
    preview: (
      <div className="accordion-3586">
        <details open>
          <summary>
            <span className="accordion-3586__prefix">&gt;</span>
            <span>Initialize Sequence</span>
            <span className="accordion-3586__value">RUN</span>
          </summary>
          <div className="accordion-3586__content">
            Initialization loads environment configuration and starts required
            services.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3586__prefix">&gt;</span>
            <span>Verify Identity</span>
            <span className="accordion-3586__value">AUTH</span>
          </summary>
          <div className="accordion-3586__content">
            Identity verification confirms that protected actions are
            authorized.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3586__prefix">&gt;</span>
            <span>Open Session</span>
            <span className="accordion-3586__value">LIVE</span>
          </summary>
          <div className="accordion-3586__content">
            A secured application session remains active until it is closed.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3586">
    <details open>
        <summary>
            <span class="accordion-3586__prefix">&gt;</span>
            <span>Initialize Sequence</span>
            <span class="accordion-3586__value">RUN</span>
        </summary>
        <div class="accordion-3586__content">
            Initialization loads environment configuration and starts required services.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3586__prefix">&gt;</span>
            <span>Verify Identity</span>
            <span class="accordion-3586__value">AUTH</span>
        </summary>
        <div class="accordion-3586__content">
            Identity verification confirms that protected actions are authorized.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3586__prefix">&gt;</span>
            <span>Open Session</span>
            <span class="accordion-3586__value">LIVE</span>
        </summary>
        <div class="accordion-3586__content">
            A secured application session remains active until it is closed.
        </div>
    </details>
</div>`,
    css: `.accordion-3586 {
    width: 100%;
    max-width: 540px;
    padding: 11px;
    display: grid;
    gap: 6px;
    border: 1px solid rgba(34, 197, 94, .15);
    background:
        linear-gradient(
            rgba(34, 197, 94, .02) 1px,
            transparent 1px
        ),
        #020603;
    background-size: 100% 5px;
    font-family: monospace;
}

.accordion-3586 details {
    border: 1px solid transparent;
}

.accordion-3586 details[open] {
    border-color: rgba(34, 197, 94, .2);
    background: rgba(34, 197, 94, .025);
}

.accordion-3586 summary {
    min-height: 46px;
    padding: 0 11px;
    display: grid;
    grid-template-columns: 18px 1fr auto;
    align-items: center;
    gap: 8px;
    list-style: none;
    cursor: pointer;
    color: #86efac;
    font-size: 10px;
}

.accordion-3586 summary::-webkit-details-marker {
    display: none;
}

.accordion-3586__prefix {
    color: #22c55e;
    font-weight: 800;
    text-shadow: 0 0 5px #16a34a;
}

.accordion-3586__value {
    padding: 3px 5px;
    border: 1px solid rgba(34, 197, 94, .18);
    color: #4ade80;
    font-size: 7px;
}

.accordion-3586__content {
    padding: 0 11px 14px 37px;
    color: #477153;
    font-size: 9px;
    line-height: 1.8;
}`,
  },
  {
    id: 3587,
    name: "Violet Capsule Accordion",
    preview: (
      <div className="accordion-3587">
        <details open>
          <summary>
            <span>Account Settings</span>
            <span className="accordion-3587__pill">
              <span></span>
            </span>
          </summary>
          <div className="accordion-3587__content">
            Configure profile information, security preferences and notification
            behavior.
          </div>
        </details>

        <details>
          <summary>
            <span>Workspace Settings</span>
            <span className="accordion-3587__pill">
              <span></span>
            </span>
          </summary>
          <div className="accordion-3587__content">
            Control workspace appearance, permissions and collaboration options.
          </div>
        </details>

        <details>
          <summary>
            <span>Developer Settings</span>
            <span className="accordion-3587__pill">
              <span></span>
            </span>
          </summary>
          <div className="accordion-3587__content">
            Manage API access, debugging tools and development integrations.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3587">
    <details open>
        <summary>
            <span>Account Settings</span>
            <span class="accordion-3587__pill">
                <span></span>
            </span>
        </summary>
        <div class="accordion-3587__content">
            Configure profile information, security preferences and notification behavior.
        </div>
    </details>

    <details>
        <summary>
            <span>Workspace Settings</span>
            <span class="accordion-3587__pill">
                <span></span>
            </span>
        </summary>
        <div class="accordion-3587__content">
            Control workspace appearance, permissions and collaboration options.
        </div>
    </details>

    <details>
        <summary>
            <span>Developer Settings</span>
            <span class="accordion-3587__pill">
                <span></span>
            </span>
        </summary>
        <div class="accordion-3587__content">
            Manage API access, debugging tools and development integrations.
        </div>
    </details>
</div>`,
    css: `.accordion-3587 {
    width: 100%;
    max-width: 540px;
    display: grid;
    gap: 9px;
}

.accordion-3587 details {
    overflow: hidden;
    border: 1px solid rgba(139, 92, 246, .14);
    border-radius: 999px;
    background:
        linear-gradient(
            90deg,
            #0c0716,
            #110a21
        );
    transition:
        border-radius .25s ease,
        border-color .25s ease,
        box-shadow .25s ease;
}

.accordion-3587 details[open] {
    border-radius: 24px;
    border-color: rgba(167, 139, 250, .44);
    box-shadow: 0 0 17px rgba(139, 92, 246, .09);
}

.accordion-3587 summary {
    min-height: 53px;
    padding: 0 15px 0 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    cursor: pointer;
    color: #ede9fe;
    font-size: 11px;
    font-weight: 700;
}

.accordion-3587 summary::-webkit-details-marker {
    display: none;
}

.accordion-3587__pill {
    width: 32px;
    height: 18px;
    padding: 2px;
    border-radius: 999px;
    background: rgba(139, 92, 246, .14);
}

.accordion-3587__pill span {
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #8b5cf6;
    box-shadow: 0 0 7px rgba(139, 92, 246, .55);
    transition:
        transform .25s ease,
        background .25s ease;
}

.accordion-3587 details[open] .accordion-3587__pill span {
    transform: translateX(14px);
    background: #c4b5fd;
}

.accordion-3587__content {
    padding: 0 18px 18px;
    color: #807592;
    font-size: 10px;
    line-height: 1.75;
}`,
  },
  {
    id: 3588,
    name: "Cyan Outline Accordion",
    preview: (
      <div className="accordion-3588">
        <details open>
          <summary>
            <span className="accordion-3588__square"></span>
            <span>Documentation</span>
            <span className="accordion-3588__arrow">→</span>
          </summary>
          <div className="accordion-3588__content">
            Detailed documentation explains component usage and customization.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3588__square"></span>
            <span>Examples</span>
            <span className="accordion-3588__arrow">→</span>
          </summary>
          <div className="accordion-3588__content">
            Practical examples show how the component behaves inside real
            layouts.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3588__square"></span>
            <span>Accessibility</span>
            <span className="accordion-3588__arrow">→</span>
          </summary>
          <div className="accordion-3588__content">
            Native semantic details elements preserve keyboard accessibility.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3588">
    <details open>
        <summary>
            <span class="accordion-3588__square"></span>
            <span>Documentation</span>
            <span class="accordion-3588__arrow">→</span>
        </summary>
        <div class="accordion-3588__content">
            Detailed documentation explains component usage and customization.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3588__square"></span>
            <span>Examples</span>
            <span class="accordion-3588__arrow">→</span>
        </summary>
        <div class="accordion-3588__content">
            Practical examples show how the component behaves inside real layouts.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3588__square"></span>
            <span>Accessibility</span>
            <span class="accordion-3588__arrow">→</span>
        </summary>
        <div class="accordion-3588__content">
            Native semantic details elements preserve keyboard accessibility.
        </div>
    </details>
</div>`,
    css: `.accordion-3588 {
    width: 100%;
    max-width: 540px;
    display: grid;
    gap: 8px;
}

.accordion-3588 details {
    overflow: hidden;
    border: 1px solid rgba(34, 211, 238, .18);
    background: #050c10;
}

.accordion-3588 details[open] {
    border-color: #22d3ee;
    box-shadow:
        inset 0 0 18px rgba(34, 211, 238, .04),
        0 0 11px rgba(34, 211, 238, .08);
}

.accordion-3588 summary {
    min-height: 51px;
    padding: 0 14px;
    display: grid;
    grid-template-columns: 18px 1fr 22px;
    align-items: center;
    gap: 10px;
    list-style: none;
    cursor: pointer;
    color: #cffafe;
    font-size: 11px;
    font-weight: 600;
}

.accordion-3588 summary::-webkit-details-marker {
    display: none;
}

.accordion-3588__square {
    width: 10px;
    height: 10px;
    border: 1px solid #22d3ee;
    box-shadow: inset 0 0 5px rgba(34, 211, 238, .3);
}

.accordion-3588__arrow {
    color: #22d3ee;
    font-size: 14px;
    transition: transform .25s ease;
}

.accordion-3588 details[open] .accordion-3588__arrow {
    transform: rotate(90deg);
}

.accordion-3588__content {
    padding: 0 14px 15px 42px;
    color: #62818b;
    font-size: 10px;
    line-height: 1.75;
}`,
  },
  {
    id: 3589,
    name: "Retro Arcade Accordion",
    preview: (
      <div className="accordion-3589">
        <div className="accordion-3589__title">SYSTEM MENU</div>

        <details open>
          <summary>
            <span>PLAYER PROFILE</span>
            <span className="accordion-3589__pixel">+</span>
          </summary>
          <div className="accordion-3589__content">
            View player information, achievements and current progression.
          </div>
        </details>

        <details>
          <summary>
            <span>GAME SETTINGS</span>
            <span className="accordion-3589__pixel">+</span>
          </summary>
          <div className="accordion-3589__content">
            Configure graphics, sound and gameplay preferences.
          </div>
        </details>

        <details>
          <summary>
            <span>ONLINE MODE</span>
            <span className="accordion-3589__pixel">+</span>
          </summary>
          <div className="accordion-3589__content">
            Connect to online services and multiplayer sessions.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3589">
    <div class="accordion-3589__title">SYSTEM MENU</div>

    <details open>
        <summary>
            <span>PLAYER PROFILE</span>
            <span class="accordion-3589__pixel">+</span>
        </summary>
        <div class="accordion-3589__content">
            View player information, achievements and current progression.
        </div>
    </details>

    <details>
        <summary>
            <span>GAME SETTINGS</span>
            <span class="accordion-3589__pixel">+</span>
        </summary>
        <div class="accordion-3589__content">
            Configure graphics, sound and gameplay preferences.
        </div>
    </details>

    <details>
        <summary>
            <span>ONLINE MODE</span>
            <span class="accordion-3589__pixel">+</span>
        </summary>
        <div class="accordion-3589__content">
            Connect to online services and multiplayer sessions.
        </div>
    </details>
</div>`,
    css: `.accordion-3589 {
    width: 100%;
    max-width: 540px;
    padding: 10px;
    border: 2px solid #22d3ee;
    background: #070716;
    box-shadow:
        4px 4px 0 #ec4899,
        -4px -4px 0 #312e81;
    font-family: monospace;
}

.accordion-3589__title {
    padding: 8px 10px 11px;
    color: #facc15;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: .16em;
    text-align: center;
    text-shadow: 2px 2px 0 #ec4899;
}

.accordion-3589 details {
    border-top: 1px solid rgba(34, 211, 238, .18);
}

.accordion-3589 details[open] {
    background:
        linear-gradient(
            90deg,
            rgba(34, 211, 238, .06),
            rgba(236, 72, 153, .04)
        );
}

.accordion-3589 summary {
    min-height: 46px;
    padding: 0 11px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    cursor: pointer;
    color: #e0f2fe;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: .07em;
}

.accordion-3589 summary::-webkit-details-marker {
    display: none;
}

.accordion-3589__pixel {
    color: #ec4899;
    font-size: 14px;
    transition: transform .2s steps(2);
}

.accordion-3589 details[open] .accordion-3589__pixel {
    transform: rotate(45deg);
}

.accordion-3589__content {
    padding: 0 11px 14px;
    color: #787896;
    font-size: 9px;
    line-height: 1.65;
}`,
  },
  {
    id: 3590,
    name: "Neon Dashboard Accordion",
    preview: (
      <div className="accordion-3590">
        <div className="accordion-3590__top">
          <span>CONTROL CENTER</span>
          <span className="accordion-3590__online">ONLINE</span>
        </div>

        <details open>
          <summary>
            <div>
              <span className="accordion-3590__label">SERVICE</span>
              <strong>Application Server</strong>
            </div>
            <span className="accordion-3590__status"></span>
          </summary>
          <div className="accordion-3590__content">
            Application server is operational and responding normally.
          </div>
        </details>

        <details>
          <summary>
            <div>
              <span className="accordion-3590__label">DATABASE</span>
              <strong>Primary Cluster</strong>
            </div>
            <span className="accordion-3590__status"></span>
          </summary>
          <div className="accordion-3590__content">
            Database replication and backups are running correctly.
          </div>
        </details>

        <details>
          <summary>
            <div>
              <span className="accordion-3590__label">NETWORK</span>
              <strong>Edge Gateway</strong>
            </div>
            <span className="accordion-3590__status"></span>
          </summary>
          <div className="accordion-3590__content">
            Edge traffic is being routed through all available regions.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3590">
    <div class="accordion-3590__top">
        <span>CONTROL CENTER</span>
        <span class="accordion-3590__online">ONLINE</span>
    </div>

    <details open>
        <summary>
            <div>
                <span class="accordion-3590__label">SERVICE</span>
                <strong>Application Server</strong>
            </div>
            <span class="accordion-3590__status"></span>
        </summary>
        <div class="accordion-3590__content">
            Application server is operational and responding normally.
        </div>
    </details>

    <details>
        <summary>
            <div>
                <span class="accordion-3590__label">DATABASE</span>
                <strong>Primary Cluster</strong>
            </div>
            <span class="accordion-3590__status"></span>
        </summary>
        <div class="accordion-3590__content">
            Database replication and backups are running correctly.
        </div>
    </details>

    <details>
        <summary>
            <div>
                <span class="accordion-3590__label">NETWORK</span>
                <strong>Edge Gateway</strong>
            </div>
            <span class="accordion-3590__status"></span>
        </summary>
        <div class="accordion-3590__content">
            Edge traffic is being routed through all available regions.
        </div>
    </details>
</div>`,
    css: `.accordion-3590 {
    width: 100%;
    max-width: 540px;
    overflow: hidden;
    border: 1px solid rgba(56, 189, 248, .18);
    border-radius: 17px;
    background:
        radial-gradient(
            circle at 0 0,
            rgba(14, 165, 233, .09),
            transparent 35%
        ),
        #050b12;
}

.accordion-3590__top {
    height: 43px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(56, 189, 248, .1);
    color: #7dd3fc;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .12em;
}

.accordion-3590__online {
    padding: 4px 6px;
    border: 1px solid rgba(74, 222, 128, .2);
    border-radius: 5px;
    color: #4ade80;
    font-size: 6px;
}

.accordion-3590 details {
    border-bottom: 1px solid rgba(56, 189, 248, .08);
}

.accordion-3590 details:last-child {
    border-bottom: 0;
}

.accordion-3590 details[open] {
    background: rgba(14, 165, 233, .03);
}

.accordion-3590 summary {
    min-height: 59px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    cursor: pointer;
}

.accordion-3590 summary::-webkit-details-marker {
    display: none;
}

.accordion-3590 summary div {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.accordion-3590__label {
    color: #3b82f6;
    font-size: 6px;
    font-weight: 800;
    letter-spacing: .15em;
}

.accordion-3590 summary strong {
    color: #dbeafe;
    font-size: 11px;
}

.accordion-3590__status {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow:
        0 0 5px #38bdf8,
        0 0 10px rgba(56, 189, 248, .55);
}

.accordion-3590__content {
    padding: 0 15px 16px;
    color: #687f91;
    font-size: 10px;
    line-height: 1.75;
}`,
  },
  {
    id: 3591,
    name: "Spectrum Neon Accordion",
    preview: (
      <div className="accordion-3591">
        <details open>
          <summary>
            <span className="accordion-3591__number">01</span>
            <span>Color Engine</span>
            <span className="accordion-3591__plus"></span>
          </summary>
          <div className="accordion-3591__content">
            A multicolor neon spectrum creates a vivid interface while the
            surface remains dark and readable.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3591__number">02</span>
            <span>Adaptive Components</span>
            <span className="accordion-3591__plus"></span>
          </summary>
          <div className="accordion-3591__content">
            Components automatically adapt to the width of their parent
            container.
          </div>
        </details>

        <details>
          <summary>
            <span className="accordion-3591__number">03</span>
            <span>Native Interaction</span>
            <span className="accordion-3591__plus"></span>
          </summary>
          <div className="accordion-3591__content">
            Native details elements provide reliable accordion behavior without
            extra scripts.
          </div>
        </details>
      </div>
    ),
    html: `<div class="accordion-3591">
    <details open>
        <summary>
            <span class="accordion-3591__number">01</span>
            <span>Color Engine</span>
            <span class="accordion-3591__plus"></span>
        </summary>
        <div class="accordion-3591__content">
            A multicolor neon spectrum creates a vivid interface while the surface remains dark and readable.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3591__number">02</span>
            <span>Adaptive Components</span>
            <span class="accordion-3591__plus"></span>
        </summary>
        <div class="accordion-3591__content">
            Components automatically adapt to the width of their parent container.
        </div>
    </details>

    <details>
        <summary>
            <span class="accordion-3591__number">03</span>
            <span>Native Interaction</span>
            <span class="accordion-3591__plus"></span>
        </summary>
        <div class="accordion-3591__content">
            Native details elements provide reliable accordion behavior without extra scripts.
        </div>
    </details>
</div>`,
    css: `.accordion-3591 {
    width: 100%;
    max-width: 540px;
    padding: 1px;
    display: grid;
    gap: 9px;
    border-radius: 18px;
    background:
        linear-gradient(
            135deg,
            rgba(34, 211, 238, .32),
            rgba(99, 102, 241, .28),
            rgba(236, 72, 153, .28),
            rgba(250, 204, 21, .2)
        );
}

.accordion-3591 details {
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, .08);
    border-radius: 14px;
    background: #080912;
    transition:
        border-color .25s ease,
        box-shadow .25s ease;
}

.accordion-3591 details[open] {
    border-color: rgba(255, 255, 255, .19);
    box-shadow: 0 0 19px rgba(99, 102, 241, .08);
}

.accordion-3591 summary {
    position: relative;
    min-height: 56px;
    padding: 0 16px;
    display: grid;
    grid-template-columns: 31px 1fr 20px;
    align-items: center;
    gap: 10px;
    list-style: none;
    cursor: pointer;
    color: #f8fafc;
    font-size: 12px;
    font-weight: 700;
}

.accordion-3591 summary::-webkit-details-marker {
    display: none;
}

.accordion-3591__number {
    color: #67e8f9;
    font-family: monospace;
    font-size: 8px;
}

.accordion-3591 details:nth-child(2) .accordion-3591__number {
    color: #c084fc;
}

.accordion-3591 details:nth-child(3) .accordion-3591__number {
    color: #f472b6;
}

.accordion-3591__plus {
    position: relative;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background:
        linear-gradient(
            135deg,
            rgba(34, 211, 238, .18),
            rgba(236, 72, 153, .18)
        );
}

.accordion-3591__plus::before,
.accordion-3591__plus::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 7px;
    height: 1px;
    background: #ffffff;
    transform: translate(-50%, -50%);
    transition: transform .25s ease;
}

.accordion-3591__plus::after {
    transform: translate(-50%, -50%) rotate(90deg);
}

.accordion-3591 details[open] .accordion-3591__plus::after {
    transform: translate(-50%, -50%);
}

.accordion-3591__content {
    padding: 0 16px 17px 57px;
    color: #81849a;
    font-size: 10px;
    line-height: 1.75;
}`,
  },
];
