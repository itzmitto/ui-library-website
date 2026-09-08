import { memo, useCallback, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { navbar } from "../data/navbarData";
import ComponentModal from "../components/ComponentModal";
import "../styling/AllNavbar.css";
import "../styling/Navbar.css";

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
  { label: "Navbar", path: "/elements/navbar", active: true },
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
];

const CARD_HEIGHT = 252;
const GRID_GAP = 12;
const OVERSCAN_ROWS = 4;

type NavbarItem = (typeof navbar)[0];

const NavbarCard = memo(
  ({
    item,
    index,
    columns,
    onSelect,
  }: {
    item: NavbarItem;
    index: number;
    columns: number;
    onSelect: (item: NavbarItem) => void;
  }) => {
    const row = Math.floor(index / columns);
    const column = index % columns;

    return (
      <div
        className="navbar-card"
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
        <div className="navbar-card-preview">{item.preview}</div>
        <div className="navbar-card-footer">
          <span className="navbar-card-name">{item.name}</span>
        </div>
      </div>
    );
  },
);

NavbarCard.displayName = "NavbarCard";

export default function Navbar() {
  const [selected, setSelected] = useState<NavbarItem | null>(null);
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

  const handleSelect = useCallback((item: NavbarItem) => {
    setSelected(item);
  }, []);

  const rowHeight = CARD_HEIGHT + GRID_GAP;
  const totalRows = Math.ceil(navbar.length / columns);
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
  const endIndex = Math.min(navbar.length, endRow * columns);

  const visibleNavbar = navbar.slice(startIndex, endIndex);

  return (
    <div className="navbar-page">
      <Header />

      <div className="navbar-layout">
        <aside className="navbar-sidebar">
          {sidebarItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`navbar-sidebar-item ${
                item.active ? "navbar-sidebar-item--active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </aside>

        <main className="navbar-main">
          <div className="navbar-header">
            <h1>Navbar</h1>
            <p>Open-Source Navbar made with CSS or Tailwind</p>
          </div>

          <div
            ref={gridRef}
            className="navbar-grid"
            style={{
              position: "relative",
              height: totalHeight,
            }}
          >
            {visibleNavbar.map((item, offset) => {
              const index = startIndex + offset;

              return (
                <NavbarCard
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