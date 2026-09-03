/* controlador de pestañas */
document.addEventListener("DOMContentLoaded", function () {
  
  // pestanas cv (educacion, experiencia, skills)
  const cvButtons = document.querySelectorAll(".folders-section .top-tab");
  const cvContents = document.querySelectorAll(".cv-tab-content");

  cvButtons.forEach(button => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-tab");

      cvButtons.forEach(btn => btn.classList.remove("active"));
      cvContents.forEach(content => content.classList.remove("active"));

      this.classList.add("active");
      const activeContent = document.getElementById(targetId);
      if (activeContent) {
        activeContent.classList.add("active");
      }
    });
  });

  // pestanas marcas (rhode, leiza, bloom, porcini)
  const brandButtons = document.querySelectorAll(".brand-folder-section .b-tab");
  const brandContents = document.querySelectorAll(".brand-tab-content");

  brandButtons.forEach(button => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-brand");

      brandButtons.forEach(btn => btn.classList.remove("active"));
      brandContents.forEach(content => content.classList.remove("active"));

      this.classList.add("active");
      const activeContent = document.getElementById(targetId);
      if (activeContent) {
        activeContent.classList.add("active");
      }
    });
  });

});