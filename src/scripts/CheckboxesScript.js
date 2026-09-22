export function initCheckbox(id, element) {
  if (!element) {
    return;
  }

  if (element.dataset.checkboxInitialized === "true") {
    return;
  }

  let initialized = false;

  if (Number(id) === 3481) {
    initialized = initCheckbox3481(element);
  }

  if (Number(id) === 3482) {
    initialized = initCheckbox3482(element);
  }

  if (initialized) {
    element.dataset.checkboxInitialized = "true";
  }
}

function initCheckbox3481(checkbox) {
  const input = checkbox.querySelector(".checkbox-3481-input");

  const statusText = checkbox.querySelector(".checkbox-3481-status-text");

  const message = checkbox.querySelector(".checkbox-3481-message");

  if (!input || !statusText || !message) {
    return false;
  }

  checkbox.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  function updateCheckbox() {
    const checked = input.checked;

    checkbox.classList.toggle("is-checked", checked);

    statusText.textContent = checked ? "Active" : "Inactive";

    message.textContent = checked
      ? "Secure sync is active across 4 devices."
      : "Sync is currently disabled.";
  }

  input.addEventListener("change", updateCheckbox);

  updateCheckbox();

  return true;
}

function initCheckbox3482(component) {
  const input = component.querySelector(".checkbox-3482-input");

  const statusText = component.querySelector(".checkbox-3482-status-text");

  const phaseText = component.querySelector(".checkbox-3482-phase");

  const percentText = component.querySelector(".checkbox-3482-percent");

  const progressFill = component.querySelector(".checkbox-3482-progress-fill");

  const healthValue = component.querySelector(".checkbox-3482-health");

  const devicesValue = component.querySelector(".checkbox-3482-devices");

  const latencyValue = component.querySelector(".checkbox-3482-latency");

  const monitorTitle = component.querySelector(".checkbox-3482-monitor-title");

  const monitorBadge = component.querySelector(".checkbox-3482-monitor-badge");

  const requestsValue = component.querySelector(".checkbox-3482-requests");

  const threatsValue = component.querySelector(".checkbox-3482-threats");

  const uptimeValue = component.querySelector(".checkbox-3482-uptime");

  const diagnosticsButton = component.querySelector(
    ".checkbox-3482-diagnostics",
  );

  const pauseButton = component.querySelector(".checkbox-3482-pause");

  const resetButton = component.querySelector(".checkbox-3482-reset");

  const pauseButtonIcon = pauseButton?.querySelector("i");

  const pauseButtonText = pauseButton?.querySelector("span");

  const log = component.querySelector(".checkbox-3482-log");

  const clock = component.querySelector(".checkbox-3482-clock");

  const footerState = component.querySelector(".checkbox-3482-footer-state");

  const steps = Array.from(component.querySelectorAll(".checkbox-3482-step"));

  if (
    !input ||
    !statusText ||
    !phaseText ||
    !percentText ||
    !progressFill ||
    !healthValue ||
    !devicesValue ||
    !latencyValue ||
    !monitorTitle ||
    !monitorBadge ||
    !requestsValue ||
    !threatsValue ||
    !uptimeValue ||
    !diagnosticsButton ||
    !pauseButton ||
    !resetButton ||
    !pauseButtonIcon ||
    !pauseButtonText ||
    !log ||
    !clock ||
    !footerState ||
    steps.length !== 4
  ) {
    return false;
  }

  const state = {
    active: false,
    activating: false,
    paused: false,
    diagnostics: false,
    progress: 0,
    stepIndex: -1,
    requests: 0,
    threats: 0,
    devices: 0,
    latency: 0,
    health: 0,
    startedAt: null,
    sequenceTimer: null,
    monitorTimer: null,
    clockTimer: null,
    diagnosticsTimer: null,
    diagnosticsFinishTimer: null,
    delayedTimer: null,
  };

  function isMounted() {
    return component.isConnected;
  }

  function clearTimer(name) {
    const timer = state[name];

    if (!timer) {
      return;
    }

    clearTimeout(timer);
    clearInterval(timer);

    state[name] = null;
  }

  function clearAllTimers() {
    clearTimer("sequenceTimer");

    clearTimer("monitorTimer");

    clearTimer("clockTimer");

    clearTimer("diagnosticsTimer");

    clearTimer("diagnosticsFinishTimer");

    clearTimer("delayedTimer");
  }

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function getTimeString() {
    const now = new Date();

    return [
      pad(now.getHours()),
      pad(now.getMinutes()),
      pad(now.getSeconds()),
    ].join(":");
  }

  function formatUptime() {
    if (!state.startedAt) {
      return "00:00";
    }

    const seconds = Math.max(
      0,
      Math.floor((Date.now() - state.startedAt) / 1000),
    );

    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = seconds % 60;

    return `${pad(minutes)}:${pad(remainingSeconds)}`;
  }

  function addLog(message, type = "info") {
    if (!isMounted()) {
      clearAllTimers();
      return;
    }

    const item = document.createElement("div");

    item.className = `checkbox-3482-log-item is-${type}`;

    const time = document.createElement("span");

    time.className = "checkbox-3482-log-time";

    time.textContent = getTimeString();

    const content = document.createElement("span");

    content.textContent = message;

    item.append(time, content);

    log.prepend(item);

    while (log.children.length > 8) {
      log.removeChild(log.lastElementChild);
    }
  }

  function setComponentMode(mode) {
    component.classList.remove(
      "is-active",
      "is-processing",
      "is-paused",
      "is-diagnostics",
    );

    if (mode === "active") {
      component.classList.add("is-active");
    }

    if (mode === "processing") {
      component.classList.add("is-processing");
    }

    if (mode === "paused") {
      component.classList.add("is-active", "is-paused");
    }

    if (mode === "diagnostics") {
      component.classList.add("is-active", "is-diagnostics");
    }
  }

  function renderProgress() {
    const value = Math.max(0, Math.min(100, Math.round(state.progress)));

    percentText.textContent = `${value}%`;

    progressFill.style.width = `${value}%`;
  }

  function renderMetrics() {
    healthValue.textContent = state.health > 0 ? `${state.health}%` : "—";

    devicesValue.textContent = String(state.devices);

    latencyValue.textContent = state.latency > 0 ? `${state.latency} ms` : "—";

    requestsValue.textContent = state.requests.toLocaleString();

    threatsValue.textContent = String(state.threats);

    uptimeValue.textContent = formatUptime();
  }

  function resetSteps() {
    steps.forEach((step) => {
      step.classList.remove("is-current", "is-complete", "is-error");

      const copy = step.querySelector(".checkbox-3482-step-copy span");

      const status = step.querySelector(".checkbox-3482-step-state");

      if (copy) {
        copy.textContent = "Waiting";
      }

      if (status) {
        status.textContent = "—";
      }
    });

    state.stepIndex = -1;
  }

  function updateStep(index, mode, description) {
    const step = steps[index];

    if (!step) {
      return;
    }

    step.classList.remove("is-current", "is-complete", "is-error");

    const copy = step.querySelector(".checkbox-3482-step-copy span");

    const status = step.querySelector(".checkbox-3482-step-state");

    if (!copy || !status) {
      return;
    }

    if (mode === "current") {
      step.classList.add("is-current");

      status.textContent = "RUN";

      copy.textContent = description || "Processing";
    }

    if (mode === "complete") {
      step.classList.add("is-complete");

      status.textContent = "OK";

      copy.textContent = description || "Completed";
    }

    if (mode === "error") {
      step.classList.add("is-error");

      status.textContent = "ERR";

      copy.textContent = description || "Failed";
    }

    if (mode === "waiting") {
      status.textContent = "—";

      copy.textContent = description || "Waiting";
    }
  }

  function emitState() {
    component.dispatchEvent(
      new CustomEvent("checkbox3482:statechange", {
        bubbles: true,
        detail: {
          active: state.active,
          activating: state.activating,
          paused: state.paused,
          diagnostics: state.diagnostics,
          progress: state.progress,
          health: state.health,
          devices: state.devices,
          latency: state.latency,
          requests: state.requests,
          threats: state.threats,
        },
      }),
    );
  }

  function updateClock() {
    if (!isMounted()) {
      clearAllTimers();
      return;
    }

    clock.textContent = getTimeString();

    if (state.active) {
      uptimeValue.textContent = formatUptime();
    }
  }

  function startClock() {
    clearTimer("clockTimer");

    updateClock();

    state.clockTimer = setInterval(updateClock, 1000);
  }

  function stopMonitor() {
    clearTimer("monitorTimer");
  }

  function monitorTick() {
    if (!isMounted()) {
      clearAllTimers();
      return;
    }

    if (!state.active || state.paused || state.diagnostics) {
      return;
    }

    state.requests += randomBetween(4, 22);

    if (Math.random() > 0.76) {
      state.threats += 1;

      addLog("Suspicious request blocked automatically.", "warning");
    }

    state.latency = randomBetween(18, 46);

    state.health = randomBetween(96, 100);

    renderMetrics();
    emitState();
  }

  function startMonitor() {
    stopMonitor();

    monitorTick();

    state.monitorTimer = setInterval(monitorTick, 1500);
  }

  function setReadyState() {
    state.active = true;
    state.activating = false;
    state.paused = false;
    state.diagnostics = false;

    state.progress = 100;
    state.health = 99;
    state.devices = 4;

    state.latency = randomBetween(20, 35);

    if (!state.startedAt) {
      state.startedAt = Date.now();
    }

    setComponentMode("active");

    statusText.textContent = "Protected";

    phaseText.textContent = "All systems operational";

    monitorTitle.textContent = "Workspace protected";

    monitorBadge.textContent = "LIVE";

    footerState.textContent = "Protection active";

    diagnosticsButton.disabled = false;

    pauseButton.disabled = false;

    pauseButtonIcon.className = "ri-pause-line";

    pauseButtonText.textContent = "Pause";

    renderProgress();
    renderMetrics();

    addLog("Autopilot protection is fully active.", "success");

    startMonitor();

    emitState();
  }

  function runActivationStep0() {
    if (!state.activating || !input.checked) {
      return;
    }

    state.stepIndex = 0;
    state.progress = 8;

    phaseText.textContent = "Establishing secure handshake";

    updateStep(0, "current", "Negotiating secure connection");

    renderProgress();

    addLog("Secure handshake started.", "info");

    state.sequenceTimer = setTimeout(runActivationStep1, 650);
  }

  function runActivationStep1() {
    if (!state.activating || !input.checked) {
      return;
    }

    updateStep(0, "complete", "Connection verified");

    state.stepIndex = 1;
    state.progress = 34;

    phaseText.textContent = "Generating encryption keys";

    updateStep(1, "current", "Creating session keys");

    state.latency = 28;
    state.health = 98;

    renderProgress();
    renderMetrics();

    addLog("Secure handshake completed.", "success");

    addLog("AES session keys generated.", "info");

    state.sequenceTimer = setTimeout(runActivationStep2, 700);
  }

  function runActivationStep2() {
    if (!state.activating || !input.checked) {
      return;
    }

    updateStep(1, "complete", "Encryption enabled");

    state.stepIndex = 2;
    state.progress = 61;
    state.devices = 2;

    phaseText.textContent = "Synchronizing devices";

    updateStep(2, "current", "Discovering connected devices");

    renderProgress();
    renderMetrics();

    addLog("End-to-end encryption enabled.", "success");

    state.sequenceTimer = setTimeout(runActivationStep3, 760);
  }

  function runActivationStep3() {
    if (!state.activating || !input.checked) {
      return;
    }

    updateStep(2, "complete", "4 devices synchronized");

    state.stepIndex = 3;
    state.progress = 84;
    state.devices = 4;

    phaseText.textContent = "Starting live monitor";

    updateStep(3, "current", "Initializing monitor");

    renderProgress();
    renderMetrics();

    addLog("4 trusted devices synchronized.", "success");

    state.sequenceTimer = setTimeout(finishActivation, 720);
  }

  function finishActivation() {
    if (!state.activating || !input.checked) {
      return;
    }

    updateStep(3, "complete", "Monitoring active");

    setReadyState();
  }

  function startActivation() {
    clearAllTimers();

    state.active = false;
    state.activating = true;
    state.paused = false;
    state.diagnostics = false;

    state.progress = 0;
    state.health = 0;
    state.devices = 0;
    state.latency = 0;
    state.requests = 0;
    state.threats = 0;
    state.startedAt = null;

    resetSteps();

    setComponentMode("processing");

    statusText.textContent = "Starting";

    phaseText.textContent = "Preparing protection";

    monitorTitle.textContent = "Starting services";

    monitorBadge.textContent = "BOOT";

    footerState.textContent = "Initializing";

    diagnosticsButton.disabled = true;

    pauseButton.disabled = true;

    renderProgress();
    renderMetrics();

    addLog("Autopilot activation requested.", "info");

    emitState();

    state.delayedTimer = setTimeout(runActivationStep0, 220);

    startClock();
  }

  function disableProtection(fromReset = false) {
    clearAllTimers();

    state.active = false;
    state.activating = false;
    state.paused = false;
    state.diagnostics = false;

    state.progress = 0;
    state.stepIndex = -1;
    state.requests = 0;
    state.threats = 0;
    state.devices = 0;
    state.latency = 0;
    state.health = 0;
    state.startedAt = null;

    setComponentMode("idle");

    statusText.textContent = "Offline";

    phaseText.textContent = "Waiting for activation";

    monitorTitle.textContent = "Monitoring unavailable";

    monitorBadge.textContent = "IDLE";

    footerState.textContent = "Protection disabled";

    diagnosticsButton.disabled = true;

    pauseButton.disabled = true;

    pauseButtonIcon.className = "ri-pause-line";

    pauseButtonText.textContent = "Pause";

    resetSteps();
    renderProgress();
    renderMetrics();

    uptimeValue.textContent = "00:00";

    if (!fromReset) {
      addLog("Autopilot protection disabled.", "warning");
    }

    startClock();

    emitState();
  }

  function togglePause() {
    if (!state.active || state.diagnostics) {
      return;
    }

    state.paused = !state.paused;

    if (state.paused) {
      stopMonitor();

      setComponentMode("paused");

      statusText.textContent = "Paused";

      monitorTitle.textContent = "Monitoring paused";

      monitorBadge.textContent = "PAUSED";

      footerState.textContent = "Protection paused";

      pauseButtonIcon.className = "ri-play-line";

      pauseButtonText.textContent = "Resume";

      addLog("Live monitoring paused.", "warning");
    } else {
      setComponentMode("active");

      statusText.textContent = "Protected";

      monitorTitle.textContent = "Workspace protected";

      monitorBadge.textContent = "LIVE";

      footerState.textContent = "Protection active";

      pauseButtonIcon.className = "ri-pause-line";

      pauseButtonText.textContent = "Pause";

      addLog("Live monitoring resumed.", "success");

      startMonitor();
    }

    emitState();
  }

  function finishDiagnostics() {
    if (!state.active || !state.diagnostics) {
      return;
    }

    state.diagnostics = false;

    state.health = randomBetween(98, 100);

    state.latency = randomBetween(18, 30);

    setComponentMode(state.paused ? "paused" : "active");

    statusText.textContent = state.paused ? "Paused" : "Protected";

    phaseText.textContent = "Diagnostics complete";

    monitorTitle.textContent = state.paused
      ? "Monitoring paused"
      : "Workspace protected";

    monitorBadge.textContent = state.paused ? "PAUSED" : "LIVE";

    diagnosticsButton.disabled = false;

    pauseButton.disabled = false;

    renderMetrics();

    addLog("Diagnostics completed with no critical issues.", "success");

    if (!state.paused) {
      startMonitor();
    }

    emitState();
  }

  function runDiagnostics() {
    if (!state.active || state.diagnostics) {
      return;
    }

    stopMonitor();

    state.diagnostics = true;

    setComponentMode("diagnostics");

    statusText.textContent = "Checking";

    phaseText.textContent = "Running diagnostics";

    monitorTitle.textContent = "Inspecting workspace";

    monitorBadge.textContent = "CHECK";

    diagnosticsButton.disabled = true;

    pauseButton.disabled = true;

    addLog("Deep diagnostics started.", "info");

    let diagnosticProgress = 0;

    state.diagnosticsTimer = setInterval(() => {
      if (!isMounted()) {
        clearAllTimers();
        return;
      }

      diagnosticProgress += randomBetween(8, 18);

      if (diagnosticProgress >= 100) {
        diagnosticProgress = 100;
      }

      phaseText.textContent = `Diagnostics ${diagnosticProgress}%`;

      if (diagnosticProgress === 100) {
        clearTimer("diagnosticsTimer");

        state.diagnosticsFinishTimer = setTimeout(finishDiagnostics, 450);
      }
    }, 180);

    emitState();
  }

  function resetEverything() {
    clearAllTimers();

    input.checked = false;

    log.innerHTML = "";

    const item = document.createElement("div");

    item.className = "checkbox-3482-log-item";

    const time = document.createElement("span");

    time.className = "checkbox-3482-log-time";

    time.textContent = "SYSTEM";

    const content = document.createElement("span");

    content.textContent = "Autopilot has been reset.";

    item.append(time, content);

    log.appendChild(item);

    disableProtection(true);
  }

  input.addEventListener("change", () => {
    if (input.checked) {
      startActivation();
    } else {
      disableProtection();
    }
  });

  diagnosticsButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    runDiagnostics();
  });

  pauseButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    togglePause();
  });

  resetButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    resetEverything();
  });

  component.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  component.addEventListener("keydown", (event) => {
    const target = event.target;

    if (
      target instanceof HTMLButtonElement ||
      target instanceof HTMLInputElement
    ) {
      return;
    }

    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();

      input.checked = !input.checked;

      input.dispatchEvent(
        new Event("change", {
          bubbles: true,
        }),
      );
    }
  });

  startClock();
  resetSteps();
  renderProgress();
  renderMetrics();

  return true;
}
