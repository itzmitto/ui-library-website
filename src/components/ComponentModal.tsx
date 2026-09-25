import { useEffect, useRef, useState, type ReactNode } from "react";
import { initButton } from "../scripts/ButtonsScript.js";
import { initCarousel } from "../scripts/CarouselsScript.js";
import { initSidebar } from "../scripts/SidebarsScript.js";
import { initCheckbox } from "../scripts/CheckboxesScript.js";
import { initCard } from "../scripts/CardsScript.js";
import { initDropdown } from "../scripts/DropdownsScript.js";
import "./ComponentModal.css";

interface ComponentItem {
  id: number;
  name: string;
  preview: ReactNode;
  html?: string;
  css?: string;
  javascript?: string;
  scriptId?: number;
}

interface Props {
  item: ComponentItem | null;
  onClose: () => void;
  size?: "default" | "large" | "extra-large";
}

export default function ComponentModal({
  item,
  onClose,
  size = "default",
}: Props) {
  const [tab, setTab] = useState<"html" | "css" | "javascript">("html");
  const [copied, setCopied] = useState(false);

  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (item) {
      setTab("html");
      setCopied(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  useEffect(() => {
    if (!item || !item.scriptId) {
      return;
    }

    const preview = previewRef.current;

    if (!preview) {
      return;
    }

    const buttonElement = preview.querySelector(
      `[data-button-id="${item.scriptId}"]`,
    );

    if (buttonElement) {
      initButton(item.scriptId, buttonElement);
    }

    const checkboxElement = preview.querySelector(
      `[data-checkbox-id="${item.scriptId}"]`,
    );

    if (checkboxElement) {
      initCheckbox(item.scriptId, checkboxElement);
    }

    const carouselElement = preview.querySelector(
      `[data-carousel-id="${item.scriptId}"]`,
    );

    if (carouselElement) {
      initCarousel(item.scriptId, carouselElement);
    }

    const sidebarElement = preview.querySelector(
      `[data-sidebar-id="${item.scriptId}"]`,
    );

    if (sidebarElement) {
      initSidebar(item.scriptId, sidebarElement);
    }

    const cardElement = preview.querySelector(
      `[data-card-id="${item.scriptId}"]`,
    );

    if (cardElement) {
      initCard(item.scriptId, cardElement);
    }

    const dropdownElement = preview.querySelector(
      `[data-dropdown-id="${item.scriptId}"]`,
    );

    if (dropdownElement) {
      initDropdown(item.scriptId, dropdownElement);
    }
  }, [item]);

  if (!item) {
    return null;
  }

  const code =
    tab === "html"
      ? item.html || "<!-- geen html beschikbaar -->"
      : tab === "css"
        ? item.css || "/* geen css beschikbaar */"
        : item.javascript || "// geen javascript beschikbaar";

  const modalClassName =
    size === "large"
      ? "cm-modal cm-modal-2"
      : size === "extra-large"
        ? "cm-modal cm-modal-3"
        : "cm-modal";

  function handleCopy() {
    navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="cm-overlay" onClick={onClose}>
      <div
        className={modalClassName}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="cm-header">
          <span className="cm-title">{item.name}</span>

          <button className="cm-close" type="button" onClick={onClose}>
            ✕
          </button>
        </div>

        <div ref={previewRef} className="cm-preview">
          {item.preview}
        </div>

        <div className="cm-tabs">
          <button
            className={`cm-tab ${tab === "html" ? "cm-tab--active" : ""}`}
            type="button"
            onClick={() => setTab("html")}
          >
            HTML
          </button>

          <button
            className={`cm-tab ${tab === "css" ? "cm-tab--active" : ""}`}
            type="button"
            onClick={() => setTab("css")}
          >
            CSS
          </button>

          <button
            className={`cm-tab ${tab === "javascript" ? "cm-tab--active" : ""}`}
            type="button"
            onClick={() => setTab("javascript")}
          >
            JavaScript
          </button>

          <button className="cm-copy" type="button" onClick={handleCopy}>
            {copied ? "✓ Copied!" : "Copy"}
          </button>
        </div>

        <div className="cm-code">
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
