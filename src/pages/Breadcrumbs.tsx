import { memo, useCallback, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { breadcrumbs } from "../data/breadcrumbsData";
import ComponentModal from "../components/ComponentModal";
import "./All.css";
import "../styling/Breadcrumbs.css";

const sidebarItems = [
  { label: "All", path: "/elements" },
  { label: "Buttons", path: "/elements/buttons" },
  { label: "Checkboxes", path: "/elements/checkboxes" },
  { label: "Toggleswitches", path: "/elements/toggleswitches" },
  { label: "Cards", path: "/elements/cards" },
  { label: "Loaders", path: "/elements/loaders" },
  { label: "Inputs", path: "/elements/inputs" },
  { label: "Radio-buttons", path: "/elements/radio-buttons" },
  { label: "Forms", path: "/elements/forms" },
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
  { label: "Breadcrumbs", path: "/elements/breadcrumbs", active: true },
  { label: "Pagination", path: "/elements/pagination" },
  { label: "Skeletons", path: "/elements/skeletons" },
  { label: "Sidebars", path: "/elements/sidebars" },
  { label: "Hero Sections", path: "/elements/hero-sections" },
  { label: "Iphone", path: "/elements/iphone" },
];

const CARD_HEIGHT = 252;
const GRID_GAP = 12;
const OVERSCAN_ROWS = 4;

type BreadcrumbItem = (typeof breadcrumbs)[0];

const BreadcrumbCard = memo(
  ({
    item,
    index,
    columns,
    onSelect,
  }: {
    item: BreadcrumbItem;
    index: number;
    columns: number;
    onSelect: (item: BreadcrumbItem) => void;
  }) => {
    const row = Math.floor(index / columns);
    const column = index % columns;

    return (
      <div
        className="all-card"
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
        <div className="all-card-preview">{item.preview}</div>
        <div className="all-card-footer">
          <span className="all-card-name">{item.name}</span>
        </div>
      </div>
    );
  },
);

BreadcrumbCard.displayName = "BreadcrumbCard";

export default function Breadcrumbs() {
  const [selected, setSelected] = useState<BreadcrumbItem | null>(null);
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
  const totalRows = Math.ceil(breadcrumbs.length / columns);

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
  const endIndex = Math.min(breadcrumbs.length, endRow * columns);

  const visibleBreadcrumbs = breadcrumbs.slice(startIndex, endIndex);

  const handleSelect = useCallback((item: BreadcrumbItem) => {
    setSelected(item);
  }, []);

  return (
    <div className="all-page">
      <Header />
      <div className="all-layout">
        <aside className="sidebar">
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

        <main className="all-main">
          <div className="all-header">
            <h1>Breadcrumbs</h1>
            <p>Open-Source breadcrumbs made with CSS or Tailwind</p>
          </div>

          <div
            ref={gridRef}
            className="all-grid"
            style={{
              position: "relative",
              height: totalHeight,
            }}
          >
            {visibleBreadcrumbs.map((item, offset) => {
              const index = startIndex + offset;

              return (
                <BreadcrumbCard
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
