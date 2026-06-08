(() => {
  const forms = document.querySelectorAll("[data-demo-form]");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const message = form.dataset.successMessage || "Your request was saved for this demo.";
      if (window.BookSwap && typeof window.BookSwap.notify === "function") {
        window.BookSwap.notify(message);
      }

      form.reset();
    });
  });
})();
