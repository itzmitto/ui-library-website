export function initSidebar(id, element) {
  if (!element) {
    return;
  }

  if (element.dataset.sidebarInitialized === "true") {
    return;
  }

  let initialized = false;

  if (Number(id) === 3476) {
    initialized = initSidebar3476(element);
  }

  if (Number(id) === 3477) {
    initialized = initSidebar3477(element);
  }
  if (Number(id) === 3478) {
    initialized = initSidebar3478(element);
  }

  if (initialized) {
    element.dataset.sidebarInitialized = "true";
  }
}

function stopInteractivePropagation(element) {
  const interactiveElements = element.querySelectorAll(
    "button, a, input, textarea, select",
  );

  interactiveElements.forEach((interactiveElement) => {
    interactiveElement.addEventListener("click", (event) => {
      event.stopPropagation();

      if (
        interactiveElement.tagName === "A" &&
        interactiveElement.getAttribute("href") === "#"
      ) {
        event.preventDefault();
      }
    });
  });
}

function initSidebar3476(sidebar) {
  stopInteractivePropagation(sidebar);

  const collapseButton = sidebar.querySelector(".sidebar-3476-collapse");

  const searchInput = sidebar.querySelector(".sidebar-3476-search");

  const submenu = sidebar.querySelector(".sidebar-3476-submenu");

  const submenuToggle = sidebar.querySelector(".sidebar-3476-submenu-toggle");

  const navLinks = sidebar.querySelectorAll(".sidebar-3476-nav-link");

  const searchableItems = sidebar.querySelectorAll("[data-sidebar-search]");

  const sections = sidebar.querySelectorAll(".sidebar-3476-section");

  const noResults = sidebar.querySelector(".sidebar-3476-no-results");

  if (collapseButton) {
    collapseButton.addEventListener("click", () => {
      const collapsed = sidebar.classList.toggle("is-collapsed");

      collapseButton.setAttribute("aria-expanded", String(!collapsed));
    });
  }

  if (submenu && submenuToggle) {
    submenuToggle.addEventListener("click", () => {
      const open = submenu.classList.toggle("open");

      submenuToggle.setAttribute("aria-expanded", String(open));
    });
  }

  navLinks.forEach((link) => {
    if (link.classList.contains("sidebar-3476-submenu-toggle")) {
      return;
    }

    link.addEventListener("click", () => {
      navLinks.forEach((item) => {
        item.classList.remove("active");
      });

      link.classList.add("active");
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();

      let visibleItems = 0;

      searchableItems.forEach((item) => {
        const searchValue = (
          item.getAttribute("data-sidebar-search") || ""
        ).toLowerCase();

        const textValue = (item.textContent || "").toLowerCase();

        const visible =
          query === "" ||
          searchValue.includes(query) ||
          textValue.includes(query);

        item.classList.toggle("is-hidden", !visible);

        if (visible) {
          visibleItems += 1;
        }
      });

      sections.forEach((section) => {
        const visibleChildren = section.querySelectorAll(
          "[data-sidebar-search]:not(.is-hidden)",
        );

        section.classList.toggle(
          "is-hidden",
          query !== "" && visibleChildren.length === 0,
        );
      });

      if (noResults) {
        noResults.classList.toggle(
          "visible",
          query !== "" && visibleItems === 0,
        );
      }
    });
  }

  return true;
}

function initSidebar3477(component) {
  stopInteractivePropagation(component);

  const sidebar = component.querySelector(".sidebar-3477-panel");

  const overlay = component.querySelector(".sidebar-3477-overlay");

  const openButton = component.querySelector(".sidebar-3477-open");

  const closeButton = component.querySelector(".sidebar-3477-close");

  const navLinks = component.querySelectorAll(".sidebar-3477-link");

  if (!sidebar || !overlay || !openButton || !closeButton) {
    return false;
  }

  function openSidebar() {
    sidebar.classList.add("is-open");
    overlay.classList.add("is-open");

    sidebar.setAttribute("aria-hidden", "false");

    openButton.setAttribute("aria-expanded", "true");

    requestAnimationFrame(() => {
      closeButton.focus();
    });
  }

  function closeSidebar() {
    sidebar.classList.remove("is-open");
    overlay.classList.remove("is-open");

    sidebar.setAttribute("aria-hidden", "true");

    openButton.setAttribute("aria-expanded", "false");

    requestAnimationFrame(() => {
      openButton.focus();
    });
  }

  openButton.addEventListener("click", () => {
    openSidebar();
  });

  closeButton.addEventListener("click", () => {
    closeSidebar();
  });

  overlay.addEventListener("click", () => {
    closeSidebar();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((item) => {
        item.classList.remove("active");
      });

      link.classList.add("active");
    });
  });

  component.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && sidebar.classList.contains("is-open")) {
      closeSidebar();
    }
  });

  return true;
}

function initSidebar3478(sidebar) {
  stopInteractivePropagation(sidebar);

  const toggleButton = sidebar.querySelector(".sidebar-3478-toggle");

  const navLinks = sidebar.querySelectorAll(".sidebar-3478-link");

  if (!toggleButton) {
    return false;
  }

  toggleButton.addEventListener("click", () => {
    const expanded = sidebar.classList.toggle("is-expanded");

    toggleButton.setAttribute("aria-expanded", String(expanded));

    toggleButton.setAttribute(
      "aria-label",
      expanded ? "Collapse sidebar" : "Expand sidebar",
    );
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((item) => {
        item.classList.remove("active");
      });

      link.classList.add("active");
    });
  });

  return true;
}
