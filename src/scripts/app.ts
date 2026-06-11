import "material-dynamic-colors";
import "beercss/dist/cdn/beer.min.js";

const storageKey = "theme-mode";
const query = window.matchMedia("(prefers-color-scheme: dark)");
const choices = document.querySelectorAll<HTMLElement>("[data-theme-choice]");
const themeLabel = document.querySelector<HTMLElement>("[data-theme-label]");

function getStoredMode() {
    const value = localStorage.getItem(storageKey);
    return value === "light" || value === "dark" || value === "auto" ? value : "auto";
}

function getResolvedMode(mode: string) {
    return mode === "auto" ? (query.matches ? "dark" : "light") : mode;
}

function applyMode(mode: string) {
    const resolved = getResolvedMode(mode);

    document.documentElement.dataset.themeMode = mode;
    document.documentElement.classList.toggle("theme-dark", resolved === "dark");
    document.body.classList.remove("light", "dark");
    document.body.classList.add(resolved);

    const ui = (window as Window & { ui?: (selector: string, options?: string) => unknown }).ui;
    ui?.("mode", resolved);

    choices.forEach((choice) => {
        const active = choice.dataset.themeChoice === mode;
        choice.classList.toggle("active", active);
        choice.setAttribute("aria-checked", String(active));

        if (active && themeLabel) {
            themeLabel.textContent = choice.dataset.themeChoiceLabel || choice.textContent?.trim() || mode;
        }
    });
}

function selectMode(choice: HTMLElement) {
    const mode = choice.dataset.themeChoice || "auto";

    localStorage.setItem(storageKey, mode);
    applyMode(mode);
    choice.closest(".menu-control")?.querySelector<HTMLButtonElement>("button")?.focus();
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        selectMode(choice);
    });

    choice.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            selectMode(choice);
        }
    });
});

query.addEventListener("change", () => {
    if (getStoredMode() === "auto") {
        applyMode("auto");
    }
});

applyMode(getStoredMode());
