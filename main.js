(() => {
  const pagePath = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("[data-nav], .auth-buttons a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === pagePath || (pagePath === "" && href === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  function notify(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    window.setTimeout(() => notification.classList.add("show"), 20);
    window.setTimeout(() => {
      notification.classList.remove("show");
      window.setTimeout(() => notification.remove(), 400);
    }, 3000);
  }

  window.BookSwap = window.BookSwap || {};
  window.BookSwap.notify = notify;

  document.querySelectorAll("[data-notify]").forEach((button) => {
    button.addEventListener("click", () => notify(button.dataset.notify));
  });

  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  document.querySelectorAll("[data-hero-search]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector("input");
      const query = input.value.trim();
      window.location.href = query
        ? `books.html?search=${encodeURIComponent(query)}`
        : "books.html";
    });
  });

  const copyright = document.querySelector("[data-year]");
  if (copyright) {
    copyright.textContent = new Date().getFullYear();
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
})();
