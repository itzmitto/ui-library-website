const initializedDropdowns = new WeakSet();

let globalEventsInitialized = false;

function getDropdownRoot(element) {
  if (!(element instanceof HTMLElement)) {
    return null;
  }

  return element;
}

function closeSubmenus(root) {
  root.querySelectorAll("[data-dropdown-submenu]").forEach((submenu) => {
    submenu.classList.remove("is-open");
  });

  root
    .querySelectorAll("[data-dropdown-submenu-trigger]")
    .forEach((trigger) => {
      trigger.setAttribute("aria-expanded", "false");
    });
}

function closeDropdown(root) {
  root.classList.remove("is-open");

  const trigger = root.querySelector("[data-dropdown-trigger]");

  if (trigger) {
    trigger.setAttribute("aria-expanded", "false");
  }

  closeSubmenus(root);
}

function closeOtherDropdowns(currentRoot) {
  document
    .querySelectorAll("[data-dropdown-root].is-open")
    .forEach((dropdown) => {
      if (dropdown !== currentRoot && dropdown instanceof HTMLElement) {
        closeDropdown(dropdown);
      }
    });
}

function openDropdown(root) {
  closeOtherDropdowns(root);

  root.classList.add("is-open");

  const trigger = root.querySelector("[data-dropdown-trigger]");

  if (trigger) {
    trigger.setAttribute("aria-expanded", "true");
  }
}

function toggleDropdown(root) {
  if (root.classList.contains("is-open")) {
    closeDropdown(root);
    return;
  }

  openDropdown(root);
}

function updateMultiCount(root) {
  const counter = root.querySelector("[data-dropdown-count]");

  if (!counter) {
    return;
  }

  const selectedOptions = root.querySelectorAll(
    "[data-dropdown-option].is-selected",
  );

  counter.textContent = String(selectedOptions.length);
}

function updateCheckbox(option) {
  const checkbox = option.querySelector('input[type="checkbox"]');

  if (!(checkbox instanceof HTMLInputElement)) {
    return;
  }

  checkbox.checked = option.classList.contains("is-selected");
}

function selectSingleOption(root, option) {
  root.querySelectorAll("[data-dropdown-option]").forEach((item) => {
    item.classList.remove("is-selected");
  });

  option.classList.add("is-selected");

  const label = root.querySelector("[data-dropdown-label]");

  if (!label) {
    return;
  }

  const value =
    option.getAttribute("data-label") || option.textContent?.trim() || "";

  label.textContent = value;
}

function selectMultiOption(root, option) {
  option.classList.toggle("is-selected");

  updateCheckbox(option);
  updateMultiCount(root);
}

function setupSearch(root) {
  const search = root.querySelector("[data-dropdown-search]");

  if (!(search instanceof HTMLInputElement)) {
    return;
  }

  search.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  search.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
  });

  search.addEventListener("input", () => {
    const value = search.value.trim().toLowerCase();

    root.querySelectorAll("[data-dropdown-option]").forEach((option) => {
      if (!(option instanceof HTMLElement)) {
        return;
      }

      const searchText = (
        option.getAttribute("data-search-text") ||
        option.textContent ||
        ""
      ).toLowerCase();

      option.hidden = value.length > 0 && !searchText.includes(value);
    });
  });
}

function setupSubmenus(root) {
  root
    .querySelectorAll("[data-dropdown-submenu-trigger]")
    .forEach((trigger) => {
      trigger.setAttribute("aria-expanded", "false");

      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        const option = trigger.closest("[data-dropdown-option]");

        if (!option) {
          return;
        }

        const submenu = option.querySelector("[data-dropdown-submenu]");

        if (!(submenu instanceof HTMLElement)) {
          return;
        }

        const wasOpen = submenu.classList.contains("is-open");

        root
          .querySelectorAll("[data-dropdown-submenu]")
          .forEach((otherSubmenu) => {
            if (otherSubmenu !== submenu) {
              otherSubmenu.classList.remove("is-open");
            }
          });

        root
          .querySelectorAll("[data-dropdown-submenu-trigger]")
          .forEach((otherTrigger) => {
            if (otherTrigger !== trigger) {
              otherTrigger.setAttribute("aria-expanded", "false");
            }
          });

        if (wasOpen) {
          submenu.classList.remove("is-open");
          trigger.setAttribute("aria-expanded", "false");
        } else {
          submenu.classList.add("is-open");
          trigger.setAttribute("aria-expanded", "true");
        }
      });
    });
}

function setupCloseButtons(root) {
  root.querySelectorAll("[data-dropdown-close]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      closeDropdown(root);
    });
  });
}

async function copyDropdownValue(root, option) {
  const value = option.getAttribute("data-copy-value");

  if (!value) {
    return;
  }

  if (!navigator.clipboard) {
    return;
  }

  try {
    await navigator.clipboard.writeText(value);

    const status = root.querySelector("[data-copy-status]");

    if (!status) {
      return;
    }

    const previousText = status.textContent;

    status.textContent = "Copied";

    window.setTimeout(() => {
      status.textContent = previousText;
    }, 1200);
  } catch {
    return;
  }
}

function setupOptions(root) {
  root.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    if (!(option instanceof HTMLElement)) {
      return;
    }

    if (option.closest("[data-dropdown-submenu]")) {
      option.addEventListener("click", async (event) => {
        event.preventDefault();
        event.stopPropagation();

        await copyDropdownValue(root, option);

        if (root.hasAttribute("data-dropdown-select")) {
          selectSingleOption(root, option);
        }

        closeDropdown(root);
      });

      return;
    }

    if (option.hasAttribute("data-dropdown-submenu-trigger")) {
      return;
    }

    option.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (root.hasAttribute("data-dropdown-multi")) {
        selectMultiOption(root, option);
        return;
      }

      if (root.hasAttribute("data-dropdown-select")) {
        selectSingleOption(root, option);
      }

      await copyDropdownValue(root, option);

      closeDropdown(root);
    });
  });
}

function setupGlobalEvents() {
  if (globalEventsInitialized) {
    return;
  }

  globalEventsInitialized = true;

  document.addEventListener("pointerdown", (event) => {
    const target = event.target;

    if (!(target instanceof Node)) {
      return;
    }

    document
      .querySelectorAll("[data-dropdown-root].is-open")
      .forEach((dropdown) => {
        if (!(dropdown instanceof HTMLElement)) {
          return;
        }

        if (!dropdown.contains(target)) {
          closeDropdown(dropdown);
        }
      });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    document
      .querySelectorAll("[data-dropdown-root].is-open")
      .forEach((dropdown) => {
        if (dropdown instanceof HTMLElement) {
          closeDropdown(dropdown);
        }
      });
  });
}

export function initDropdown(id, element) {
  const root = getDropdownRoot(element);

  if (!root) {
    return;
  }

  if (initializedDropdowns.has(root)) {
    return;
  }

  const dropdownId = Number(root.dataset.dropdownId);

  if (dropdownId !== id) {
    return;
  }

  const trigger = root.querySelector("[data-dropdown-trigger]");
  const menu = root.querySelector("[data-dropdown-menu]");

  if (!(trigger instanceof HTMLElement)) {
    return;
  }

  if (!(menu instanceof HTMLElement)) {
    return;
  }

  initializedDropdowns.add(root);

  root.setAttribute("data-dropdown-root", "");

  trigger.setAttribute("aria-expanded", "false");

  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    toggleDropdown(root);
  });

  trigger.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
  });

  menu.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  menu.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
  });

  setupSearch(root);
  setupSubmenus(root);
  setupCloseButtons(root);
  setupOptions(root);
  setupGlobalEvents();

  root
    .querySelectorAll("[data-dropdown-option].is-selected")
    .forEach((option) => {
      if (option instanceof HTMLElement) {
        updateCheckbox(option);
      }
    });

  updateMultiCount(root);
}
