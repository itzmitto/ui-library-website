import { memo, useCallback, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { forms } from "../data/formsData";
import ComponentModal from "../components/ComponentModal";
import "../styling/AllForms.css";
import "../styling/Forms.css";

const sidebarItems = [
  { label: "All", path: "/elements" },
  { label: "Buttons", path: "/elements/buttons" },
  { label: "Checkboxes", path: "/elements/checkboxes" },
  { label: "Toggleswitches", path: "/elements/toggleswitches" },
  { label: "Cards", path: "/elements/cards" },
  { label: "Loaders", path: "/elements/loaders" },
  { label: "Inputs", path: "/elements/inputs" },
  { label: "Radio-buttons", path: "/elements/radio-buttons" },
  { label: "Forms", path: "/elements/forms", active: true },
  { label: "Patterns", path: "/elements/patterns" },
  { label: "Tooltips", path: "/elements/tooltips" },
  { label: "Navbar", path: "/elements/navbar" },
  { label: "Logins", path: "/elements/logins" },
  { label: "Dropdowns", path: "/elements/dropdowns" },
  { label: "Modals", path: "/elements/modals" },
  { label: "Alerts", path: "/elements/alerts" },
  { label: "Badges", path: "/elements/badges" },
  { label: "Avatars", path: "/elements/avatars" },
  { label: "Tabs", path: "/elements/tabs" },
  { label: "Breadcrumbs", path: "/elements/breadcrumbs" },
  { label: "Pagination", path: "/elements/pagination" },
  { label: "Skeletons", path: "/elements/skeletons" },
  { label: "Sidebars", path: "/elements/sidebars" },
  { label: "Hero Sections", path: "/elements/hero-sections" },
  { label: "Iphone", path: "/elements/iphone" },
  { label: "Toasts", path: "/elements/toasts" },
  { label: "Accordions", path: "/elements/accordions" },
  { label: "Carousels", path: "/elements/carousels" },
  { label: "Progress Bars", path: "/elements/progress-bars" },
  { label: "Tables", path: "/elements/tables" },
];

const CARD_HEIGHT = 252;
const GRID_GAP = 12;
const OVERSCAN_ROWS = 4;

type FormItem = (typeof forms)[0];

const FormCard = memo(
  ({
    item,
    index,
    columns,
    onSelect,
  }: {
    item: FormItem;
    index: number;
    columns: number;
    onSelect: (item: FormItem) => void;
  }) => {
    const row = Math.floor(index / columns);
    const column = index % columns;

    return (
      <div
        className="allcard"
        onClick={() => onSelect(item)}
        style={{
          position: "absolute",
          top: row * (CARD_HEIGHT + GRID_GAP),
          left: `calc(${(column * 100) / columns}% + ${
            column > 0 ? (GRID_GAP * column) / columns : 0
          }px)`,
          width: `calc(${100 / columns}% - ${
            (GRID_GAP * (columns - 1)) / columns
          }px)`,
          height: CARD_HEIGHT,
          cursor: "pointer",
        }}
      >
        <div className="allcard-preview">{item.preview}</div>
        <div className="allcard-footer">
          <span className="allcard-name">{item.name}</span>
        </div>
      </div>
    );
  },
);

FormCard.displayName = "FormCard";

export default function Forms() {
  const [selected, setSelected] = useState<FormItem | null>(null);
  const [columns, setColumns] = useState(1);
  const [scrollTop, setScrollTop] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800,
  );
  const [gridTop, setGridTop] = useState(0);

  const gridRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  const updateLayout = useCallback(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      setScrollTop(window.scrollY);
      setViewportHeight(window.innerHeight);

      const grid = gridRef.current;

      if (grid) {
        const width = grid.clientWidth;

        const nextColumns = Math.max(
          1,
          Math.floor((width + GRID_GAP) / (240 + GRID_GAP)),
        );

        setColumns(nextColumns);
        setGridTop(grid.getBoundingClientRect().top + window.scrollY);
      }

      frameRef.current = null;
    });
  }, []);

  useEffect(() => {
    updateLayout();

    window.addEventListener("scroll", updateLayout, {
      passive: true,
    });

    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("scroll", updateLayout);
      window.removeEventListener("resize", updateLayout);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [updateLayout]);

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid || typeof ResizeObserver === "undefined") {
      return;
    }

    const observer = new ResizeObserver(() => {
      updateLayout();
    });

    observer.observe(grid);

    return () => observer.disconnect();
  }, [updateLayout]);

  const rowHeight = CARD_HEIGHT + GRID_GAP;
  const totalRows = Math.ceil(forms.length / columns);

  const totalHeight = totalRows > 0 ? totalRows * rowHeight - GRID_GAP : 0;

  const relativeScrollTop = Math.max(0, scrollTop - gridTop);

  const startRow = Math.max(
    0,
    Math.floor(relativeScrollTop / rowHeight) - OVERSCAN_ROWS,
  );

  const endRow = Math.min(
    totalRows,
    Math.ceil((relativeScrollTop + viewportHeight) / rowHeight) + OVERSCAN_ROWS,
  );

  const startIndex = startRow * columns;
  const endIndex = Math.min(forms.length, endRow * columns);

  const visibleForms = forms.slice(startIndex, endIndex);

  const handleSelect = useCallback((item: FormItem) => {
    setSelected(item);
  }, []);

  return (
    <div className="allpage">
      <Header />

      <div className="alllayout">
        <aside className="side-bar">
          {sidebarItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`sidebar-item ${
                item.active ? "sidebar-item--active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </aside>

        <main className="allmain">
          <div className="allheader">
            <h1>Forms</h1>
            <p>Open-Source forms made with CSS or Tailwind</p>
          </div>

          <div
            ref={gridRef}
            className="allgrid"
            style={{
              position: "relative",
              height: totalHeight,
            }}
          >
            {visibleForms.map((item, offset) => {
              const index = startIndex + offset;

              return (
                <FormCard
                  key={item.id}
                  item={item}
                  index={index}
                  columns={columns}
                  onSelect={handleSelect}
                />
              );
            })}
          </div>
        </main>
      </div>

      <ComponentModal item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
