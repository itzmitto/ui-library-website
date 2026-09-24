function initCard3560(card) {
  const boostButton = card.querySelector(".card-3560__button-primary");
  const detailsButton = card.querySelector(".card-3560__button-secondary");
  const charge = card.querySelector(".card-3560__charge");
  const energyLabel = card.querySelector(".card-3560__energy-label");
  const fill = card.querySelector(".card-3560__fill");
  const output = card.querySelector(".card-3560__output");
  const coreState = card.querySelector(".card-3560__core-state");
  const status = card.querySelector(".card-3560__status");

  if (
    !boostButton ||
    !detailsButton ||
    !charge ||
    !energyLabel ||
    !fill ||
    !output ||
    !coreState ||
    !status
  ) {
    return false;
  }

  let level = 68;

  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 8;
    const rotateX = (0.5 - y) * 8;

    card.style.setProperty("--rx", `${rotateX}deg`);
    card.style.setProperty("--ry", `${rotateY}deg`);
  });

  card.addEventListener("mouseleave", () => {
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  });

  boostButton.addEventListener("click", (event) => {
    event.stopPropagation();

    level = Math.min(100, level + Math.floor(Math.random() * 10) + 6);

    charge.textContent = String(level);
    energyLabel.textContent = `${level}%`;
    fill.style.width = `${level}%`;

    const power = (level / 14.2).toFixed(1);

    output.textContent = `${power} GW`;

    if (level >= 100) {
      card.classList.add("is-overcharged");
      coreState.textContent = "Maximum";

      status.innerHTML = `
        <span class="card-3560__status-dot"></span>
        Maximum
      `;

      const buttonText = boostButton.querySelector("span");

      if (buttonText) {
        buttonText.textContent = "Fully charged";
      }

      return;
    }

    if (level >= 85) {
      coreState.textContent = "High";

      status.innerHTML = `
        <span class="card-3560__status-dot"></span>
        High output
      `;

      return;
    }

    coreState.textContent = "Stable";
  });

  detailsButton.addEventListener("click", (event) => {
    event.stopPropagation();

    const expanded = card.classList.toggle("is-expanded");

    detailsButton.setAttribute("aria-expanded", String(expanded));

    const text = detailsButton.querySelector("span");
    const icon = detailsButton.querySelector("i");

    if (text) {
      text.textContent = expanded ? "Close" : "Details";
    }

    if (icon) {
      icon.className = expanded ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line";
    }
  });

  return true;
}

function initCard3561(card) {
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const updateCard = (event) => {
    const rect = card.getBoundingClientRect();

    const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);

    const y = clamp((event.clientY - rect.top) / rect.height, 0, 1);

    const rotateY = (x - 0.5) * 22;
    const rotateX = (0.5 - y) * 18;

    card.style.setProperty("--rotate-x", `${rotateX}deg`);

    card.style.setProperty("--rotate-y", `${rotateY}deg`);

    card.style.setProperty("--glare-x", `${x * 100}%`);

    card.style.setProperty("--glare-y", `${y * 100}%`);
  };

  const resetCard = () => {
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
    card.style.setProperty("--glare-x", "50%");
    card.style.setProperty("--glare-y", "50%");
  };

  card.addEventListener("pointermove", updateCard);
  card.addEventListener("pointerleave", resetCard);

  return true;
}

export function initCard(id, element) {
  if (!element) {
    return;
  }

  if (element.dataset.cardInitialized === "true") {
    return;
  }

  let initialized = false;

  if (Number(id) === 3560) {
    initialized = initCard3560(element);
  }

  if (Number(id) === 3561) {
    initialized = initCard3561(element);
  }

  if (initialized) {
    element.dataset.cardInitialized = "true";
  }
}
