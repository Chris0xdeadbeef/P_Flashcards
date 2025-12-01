// deck-actions.js
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".deck-item").forEach(item => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".deck-item").forEach(i => {
        if (i !== item) i.classList.remove("selected");
      });
      item.classList.toggle("selected");
    });
  });
});
