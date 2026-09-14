import { StrictMode, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

function CardAnimationController() {
  const activeCardsRef = useRef<HTMLElement[]>([]);
  const leaveTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    function clearLeaveTimeout() {
      if (leaveTimeoutRef.current !== null) {
        window.clearTimeout(leaveTimeoutRef.current);
        leaveTimeoutRef.current = null;
      }
    }

    function clearActiveCards() {
      activeCardsRef.current.forEach((card) => {
        card.classList.remove("all-card--animation-active");
      });

      activeCardsRef.current = [];
    }

    function activateCardsAround(hoveredCard: HTMLElement) {
      clearLeaveTimeout();
      clearActiveCards();

      const grid = hoveredCard.closest(".all-grid");

      if (!grid) {
        hoveredCard.classList.add("all-card--animation-active");
        activeCardsRef.current = [hoveredCard];
        return;
      }

      const cards = Array.from(grid.querySelectorAll<HTMLElement>(".all-card"));

      const hoveredRect = hoveredCard.getBoundingClientRect();

      const hoveredCenterX = hoveredRect.left + hoveredRect.width / 2;

      const hoveredCenterY = hoveredRect.top + hoveredRect.height / 2;

      const horizontalLimit = hoveredRect.width + 30;
      const verticalLimit = hoveredRect.height + 30;

      const nearbyCards = cards.filter((card) => {
        const rect = card.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const horizontalDistance = Math.abs(centerX - hoveredCenterX);

        const verticalDistance = Math.abs(centerY - hoveredCenterY);

        return (
          horizontalDistance <= horizontalLimit &&
          verticalDistance <= verticalLimit
        );
      });

      nearbyCards.forEach((card) => {
        card.classList.add("all-card--animation-active");
      });

      activeCardsRef.current = nearbyCards;
    }

    function scheduleClearActiveCards() {
      clearLeaveTimeout();

      leaveTimeoutRef.current = window.setTimeout(() => {
        clearActiveCards();
        leaveTimeoutRef.current = null;
      }, 100);
    }

    function handlePointerOver(event: PointerEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const card = target.closest(".all-card") as HTMLElement | null;

      if (!card) {
        return;
      }

      const relatedTarget = event.relatedTarget;

      if (relatedTarget instanceof Element) {
        const previousCard = relatedTarget.closest(".all-card");

        if (previousCard === card) {
          return;
        }
      }

      activateCardsAround(card);
    }

    function handlePointerOut(event: PointerEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const card = target.closest(".all-card") as HTMLElement | null;

      if (!card) {
        return;
      }

      const relatedTarget = event.relatedTarget;

      if (relatedTarget instanceof Element) {
        const nextCard = relatedTarget.closest(".all-card");

        if (nextCard === card) {
          return;
        }

        if (nextCard) {
          return;
        }
      }

      scheduleClearActiveCards();
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const card = target.closest(".all-card");

      if (card) {
        clearLeaveTimeout();

        requestAnimationFrame(() => {
          clearActiveCards();
        });
      }
    }

    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      document.removeEventListener("pointerdown", handlePointerDown);

      clearLeaveTimeout();
      clearActiveCards();
    };
  }, []);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CardAnimationController />
    <App />
  </StrictMode>,
);
