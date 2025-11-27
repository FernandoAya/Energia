const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

// Abrir modal
openEls.forEach(btn => {
  btn.addEventListener("click", () => {
    const modalId = btn.dataset.open;
    const modal = document.getElementById(modalId);

    if (modal) {
      modal.classList.add(isVisible);
    }
  });
});

// Cerrar modal (botón X)
closeEls.forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    if (modal) {
      modal.classList.remove(isVisible);
    }
  });
});

// Cerrar clicando afuera del cuadro
document.addEventListener("click", e => {
  const visibleModal = document.querySelector(".modal.is-visible");
  if (visibleModal && e.target === visibleModal) {
    visibleModal.classList.remove(isVisible);
  }
});

// Cerrar con ESC
document.addEventListener("keyup", e => {
  if (e.key === "Escape") {
    const visibleModal = document.querySelector(".modal.is-visible");
    if (visibleModal) {
      visibleModal.classList.remove(isVisible);
    }
  }
});
