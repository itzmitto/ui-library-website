import { useEffect, useRef, useState } from "react";
import { initButton } from "../scripts/ButtonsScript.js";
import { initCarousel } from "../scripts/CarouselsScript.js";
import { initSidebar } from "../scripts/SidebarsScript.js";
import "./ComponentModal.css";

interface ComponentItem {
  id: number;
  name: string;
  preview: React.ReactNode;
  html?: string;
  css?: string;
  javascript?: string;
  scriptId?: number;
}

interface Props {
  item: ComponentItem | null;
  onClose: () => void;
}

export default function ComponentModal({ item, onClose }: Props) {
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

  function handleCopy() {
    navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="cm-overlay" onClick={onClose}>
      <div className="cm-modal" onClick={(event) => event.stopPropagation()}>
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
