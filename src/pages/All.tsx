import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Header from "../components/Header";
import { allComponents } from "../data/componentsData";
import ComponentModal from "../components/ComponentModal";
import "./All.css";

const CARD_HEIGHT = 252;
const GRID_GAP = 12;
const OVERSCAN_ROWS = 4;

type ComponentItem = (typeof allComponents)[0];

const ComponentCard = memo(
  ({
    item,
    index,
    columns,
    onSelect,
  }: {
    item: ComponentItem;
    index: number;
    columns: number;
    onSelect: (item: ComponentItem) => void;
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
        <div className="all-card-preview">{item.preview as ReactNode}</div>
        <div className="all-card-footer">
          <span className="all-card-name">{item.name}</span>
        </div>
      </div>
    );
  },
);

ComponentCard.displayName = "ComponentCard";

export default function All() {
  const [selected, setSelected] = useState<ComponentItem | null>(null);
  const [columns, setColumns] = useState(1);
  const [scrollTop, setScrollTop] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800,
  );

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
      }

      frameRef.current = null;
    });
  }, []);

  useEffect(() => {
    updateLayout();

    window.addEventListener("scroll", updateLayout, { passive: true });
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

  const gridTop = useMemo(() => {
    const grid = gridRef.current;

    if (!grid) {
      return 0;
    }

    return grid.getBoundingClientRect().top + window.scrollY;
  }, [viewportHeight, columns]);

  const rowHeight = CARD_HEIGHT + GRID_GAP;
  const totalRows = Math.ceil(allComponents.length / columns);
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
  const endIndex = Math.min(allComponents.length, endRow * columns);

  const visibleComponents = useMemo(
    () => allComponents.slice(startIndex, endIndex),
    [startIndex, endIndex],
  );

  const handleSelect = useCallback((item: ComponentItem) => {
    setSelected(item);
  }, []);

  return (
    <div className="all-page">
      <Header />

      <div className="all-layout">
        <aside className="sidebar">
          <a href="/elements" className="sidebar-item sidebar-item--active">
            All
          </a>

          <a href="/elements/buttons" className="sidebar-item">
            Buttons
          </a>

          <a href="/elements/checkboxes" className="sidebar-item">
            Checkboxes
          </a>

          <a href="/elements/toggleswitches" className="sidebar-item">
            Toggleswitches
          </a>

          <a href="/elements/cards" className="sidebar-item">
            Cards
          </a>

          <a href="/elements/loaders" className="sidebar-item">
            Loaders
          </a>

          <a href="/elements/inputs" className="sidebar-item">
            Inputs
          </a>

          <a href="/elements/radio-buttons" className="sidebar-item">
            Radio-buttons
          </a>

          <a href="/elements/forms" className="sidebar-item">
            Forms
          </a>

          <a href="/elements/patterns" className="sidebar-item">
            Patterns
          </a>

          <a href="/elements/tooltips" className="sidebar-item">
            Tooltips
          </a>

          <a href="/elements/navbar" className="sidebar-item">
            Navbar
          </a>

          <a href="/elements/logins" className="sidebar-item">
            Logins
          </a>

          <a href="/elements/dropdowns" className="sidebar-item">
            Dropdowns
          </a>

          <a href="/elements/modals" className="sidebar-item">
            Modals
          </a>

          <a href="/elements/alerts" className="sidebar-item">
            Alerts
          </a>

          <a href="/elements/badges" className="sidebar-item">
            Badges
          </a>

          <a href="/elements/avatars" className="sidebar-item">
            Avatars
          </a>

          <a href="/elements/tabs" className="sidebar-item">
            Tabs
          </a>

          <a href="/elements/breadcrumbs" className="sidebar-item">
            Breadcrumbs
          </a>

          <a href="/elements/pagination" className="sidebar-item">
            Pagination
          </a>

          <a href="/elements/skeletons" className="sidebar-item">
            Skeletons
          </a>

          <a href="/elements/sidebars" className="sidebar-item">
            Sidebars
          </a>

          <a href="/elements/hero-sections" className="sidebar-item">
            Hero Sections
          </a>

          <a href="/elements/iphone" className="sidebar-item">
            Iphone
          </a>

          <a href="/elements/toasts" className="sidebar-item">
            Toasts
          </a>

          <a href="/elements/accordions" className="sidebar-item">
            Accordions
          </a>

          <a href="/elements/carousels" className="sidebar-item">
            Carousels
          </a>

          <a href="/elements/progress-bars" className="sidebar-item">
            Progress Bars
          </a>

          <a href="/elements/tables" className="sidebar-item">
            Tables
          </a>
        </aside>

        <main className="all-main">
          <div className="all-header">
            <h1>Browse all</h1>
            <p>Open-Source UI elements made with CSS or Tailwind</p>
          </div>

          <div
            ref={gridRef}
            className="all-grid"
            style={{
              position: "relative",
              height: totalHeight,
            }}
          >
            {visibleComponents.map((item, offset) => {
              const index = startIndex + offset;

              return (
                <ComponentCard
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

      <a href="/elements/navbar" className="floating-navbar-button">
        Navbar →
      </a>
    </div>
  );
}
