export function initSidebar(id, element) {
  if (!element) {
    return;
  }

  if (element.dataset.sidebarInitialized === "true") {
    return;
  }

  element.dataset.sidebarInitialized = "true";

  if (id === 3476) {
    initSidebar3476(element);
  }
}

function initSidebar3476(sidebar) {
  const collapseButton = sidebar.querySelector(".sidebar-3476-collapse");
  const searchInput = sidebar.querySelector(".sidebar-3476-search");
  const submenu = sidebar.querySelector(".sidebar-3476-submenu");
  const submenuToggle = sidebar.querySelector(
    ".sidebar-3476-submenu-toggle"
  );

  const navLinks = sidebar.querySelectorAll(".sidebar-3476-nav-link");

  const searchableItems = sidebar.querySelectorAll(
    "[data-sidebar-search]"
  );

  const sections = sidebar.querySelectorAll(
    ".sidebar-3476-section"
  );

  const noResults = sidebar.querySelector(
    ".sidebar-3476-no-results"
  );

  if (collapseButton) {
    collapseButton.addEventListener("click", (event) => {
      event.stopPropagation();

      const collapsed = sidebar.classList.toggle(
        "is-collapsed"
      );

      collapseButton.setAttribute(
        "aria-expanded",
        String(!collapsed)
      );
    });
  }

  if (submenu && submenuToggle) {
    submenuToggle.addEventListener("click", (event) => {
      event.stopPropagation();

      const open = submenu.classList.toggle("open");

      submenuToggle.setAttribute(
        "aria-expanded",
        String(open)
      );
    });
  }

  navLinks.forEach((link) => {
    if (
      link.classList.contains(
        "sidebar-3476-submenu-toggle"
      )
    ) {
      return;
    }

    link.addEventListener("click", (event) => {
      event.stopPropagation();

      navLinks.forEach((item) => {
        item.classList.remove("active");
      });

      link.classList.add("active");
    });
  });

  if (searchInput) {
    searchInput.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    searchInput.addEventListener("input", () => {
      const query = searchInput.value
        .trim()
        .toLowerCase();

      let visibleItems = 0;

      searchableItems.forEach((item) => {
        const searchValue = (
          item.getAttribute("data-sidebar-search") || ""
        ).toLowerCase();

        const textValue = (
          item.textContent || ""
        ).toLowerCase();

        const visible =
          query === "" ||
          searchValue.includes(query) ||
          textValue.includes(query);

        item.classList.toggle(
          "is-hidden",
          !visible
        );

        if (visible) {
          visibleItems += 1;
        }
      });

      sections.forEach((section) => {
        const visibleChildren =
          section.querySelectorAll(
            "[data-sidebar-search]:not(.is-hidden)"
          );

        section.classList.toggle(
          "is-hidden",
          query !== "" &&
            visibleChildren.length === 0
        );
      });

      if (noResults) {
        noResults.classList.toggle(
          "visible",
          query !== "" &&
            visibleItems === 0
        );
      }
    });
  }
}