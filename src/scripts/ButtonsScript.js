export function initButton(id, element) {
  if (!element) {
    return;
  }

  if (element.dataset.buttonInitialized === "true") {
    return;
  }

  let initialized = false;

  if (Number(id) === 3479) {
    initialized = initButton3479(element);
  }
  if (Number(id) === 3480) {
    initialized = initButton3480(element);
  }

  if (initialized) {
    element.dataset.buttonInitialized = "true";
  }
}

function initButton3479(button) {
  let busy = false;
  let loadingTimeout = null;
  let resetTimeout = null;

  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (busy) {
      return;
    }

    busy = true;
    button.disabled = true;

    button.classList.remove("is-success");
    button.classList.add("is-loading");

    loadingTimeout = setTimeout(() => {
      button.classList.remove("is-loading");
      button.classList.add("is-success");

      resetTimeout = setTimeout(() => {
        button.classList.remove("is-success");

        button.disabled = false;
        busy = false;
      }, 1600);
    }, 1100);
  });

  return true;
}
function initButton3480(button) {
  const percent = button.querySelector(".button-3480-percent");

  const progress = button.querySelector(".button-3480-progress-fill");

  if (!percent || !progress) {
    return false;
  }

  let running = false;
  let progressTimer = null;
  let finishTimer = null;
  let resetTimer = null;

  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (running) {
      return;
    }

    running = true;
    button.disabled = true;

    button.classList.remove("is-success");
    button.classList.add("is-deploying");

    let value = 0;

    percent.textContent = "0%";
    progress.style.width = "0%";

    progressTimer = setInterval(() => {
      value += Math.floor(Math.random() * 9) + 3;

      if (value >= 100) {
        value = 100;
      }

      percent.textContent = `${value}%`;
      progress.style.width = `${value}%`;

      if (value === 100) {
        clearInterval(progressTimer);
        progressTimer = null;

        finishTimer = setTimeout(() => {
          button.classList.remove("is-deploying");

          button.classList.add("is-success");

          resetTimer = setTimeout(() => {
            button.classList.remove("is-success");

            percent.textContent = "0%";
            progress.style.width = "0%";

            button.disabled = false;
            running = false;
          }, 1800);
        }, 350);
      }
    }, 120);
  });

  return true;
}
