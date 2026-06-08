(() => {
  const cards = Array.from(document.querySelectorAll("[data-book-card]"));
  if (!cards.length) {
    return;
  }

  const searchInput = document.querySelector("[data-book-search]");
  const categoryFilter = document.querySelector("[data-category-filter]");
  const conditionFilter = document.querySelector("[data-condition-filter]");
  const countLabel = document.querySelector("[data-results-count]");
  const emptyState = document.querySelector("[data-empty-state]");
  const params = new URLSearchParams(window.location.search);

  const initialCategory = params.get("category");
  const initialSearch = params.get("search");

  if (initialCategory && categoryFilter) {
    categoryFilter.value = initialCategory;
  }

  if (initialSearch && searchInput) {
    searchInput.value = initialSearch;
  }

  function normalize(value) {
    return (value || "").trim().toLowerCase();
  }

  function applyFilters() {
    const query = normalize(searchInput && searchInput.value);
    const category = normalize(categoryFilter && categoryFilter.value);
    const condition = normalize(conditionFilter && conditionFilter.value);
    let visibleCount = 0;

    cards.forEach((card) => {
      const title = normalize(card.dataset.title);
      const author = normalize(card.dataset.author);
      const subject = normalize(card.dataset.category);
      const cardCondition = normalize(card.dataset.condition);
      const textMatch = !query || title.includes(query) || author.includes(query) || subject.includes(query);
      const categoryMatch = !category || subject === category;
      const conditionMatch = !condition || cardCondition === condition;
      const isVisible = textMatch && categoryMatch && conditionMatch;

      card.hidden = !isVisible;
      if (isVisible) {
        visibleCount += 1;
      }
    });

    if (countLabel) {
      countLabel.textContent = `${visibleCount} listing${visibleCount === 1 ? "" : "s"} found`;
    }

    if (emptyState) {
      emptyState.classList.toggle("show", visibleCount === 0);
    }
  }

  [searchInput, categoryFilter, conditionFilter].forEach((control) => {
    if (control) {
      control.addEventListener("input", applyFilters);
      control.addEventListener("change", applyFilters);
    }
  });

  applyFilters();
})();
