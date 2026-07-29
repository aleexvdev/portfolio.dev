(function () {
  const config = document.getElementById("turnstile-config");
  const siteKey = config?.dataset.siteKey;
  if (!siteKey) return;

  window.__portfolioTurnstileToken = "";

  window.onPortfolioTurnstileSuccess = function (token) {
    window.__portfolioTurnstileToken = token;
    window.dispatchEvent(
      new CustomEvent("portfolio-turnstile-token", { detail: token }),
    );
  };

  window.onPortfolioTurnstileExpired = function () {
    window.__portfolioTurnstileToken = "";
    window.dispatchEvent(
      new CustomEvent("portfolio-turnstile-token", { detail: "" }),
    );
  };

  window.onPortfolioTurnstileError = function (errorCode) {
    console.error("[Turnstile] error:", errorCode);
    window.__portfolioTurnstileToken = "";
    window.__portfolioTurnstileError = errorCode;
    window.dispatchEvent(
      new CustomEvent("portfolio-turnstile-token", { detail: "" }),
    );
    window.dispatchEvent(
      new CustomEvent("portfolio-turnstile-error", { detail: errorCode }),
    );
  };

  function mountTurnstile() {
    const turnstileMount = document.getElementById("turnstile-mount");
    if (
      !turnstileMount ||
      turnstileMount.dataset.mounted === "1" ||
      !window.turnstile
    ) {
      return false;
    }

    turnstileMount.dataset.mounted = "1";
    const container = document.createElement("div");
    turnstileMount.appendChild(container);

    window.turnstile.render(container, {
      sitekey: siteKey,
      theme: "dark",
      appearance: "always",
      callback: window.onPortfolioTurnstileSuccess,
      "error-callback": window.onPortfolioTurnstileError,
      "expired-callback": window.onPortfolioTurnstileExpired,
      retry: "auto",
      "refresh-expired": "auto",
    });

    return true;
  }

  function waitForMount() {
    const intervalId = window.setInterval(() => {
      if (mountTurnstile()) {
        window.clearInterval(intervalId);
      }
    }, 100);

    window.setTimeout(() => window.clearInterval(intervalId), 20_000);
  }

  function loadTurnstileScript() {
    if (window.turnstile) {
      window.turnstile.ready(waitForMount);
      return;
    }

    const existing = document.getElementById("cf-turnstile-script");
    if (existing) {
      existing.addEventListener(
        "load",
        () => window.turnstile?.ready(waitForMount),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.id = "cf-turnstile-script";
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => window.turnstile?.ready(waitForMount);
    script.onerror = () => {
      const turnstileMount = document.getElementById("turnstile-mount");
      if (turnstileMount) {
        turnstileMount.innerHTML =
          '<p class="text-center text-sm text-red-400">No se pudo cargar la verificación de Cloudflare.</p>';
      }
    };
    document.head.appendChild(script);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadTurnstileScript, {
      once: true,
    });
  } else {
    loadTurnstileScript();
  }

  const observer = new MutationObserver(() => {
    if (document.getElementById("turnstile-mount")?.dataset.mounted !== "1") {
      waitForMount();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
