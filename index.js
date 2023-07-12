const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    if (panel.classList.contains("active")) {
      const activePanels = document.querySelectorAll(".panel.active");
      if (activePanels.length === 1) {
        panel.classList.remove("active");
        return;
      }
    }
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
