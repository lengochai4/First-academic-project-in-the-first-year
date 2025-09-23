document.addEventListener("DOMContentLoaded", function () {
  // Slideshow for header
  let slideIndex = 0;
  const slides = document.querySelectorAll(".mySlides");
  const showSlides = () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  };
  showSlides();

  // Dropdown and content display
  const districtLinks = document.querySelectorAll(".district-link");
  districtLinks.forEach((link) => {
    link.addEventListener("mouseover", function () {
      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      document.querySelectorAll(".content-section").forEach((section) => {
        section.classList.remove("show");
      });
      if (targetSection) {
        targetSection.classList.add("show");
      }
    });
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      document.querySelectorAll(".content-section").forEach((section) => {
        section.classList.remove("show");
      });
      if (targetSection) {
        targetSection.classList.add("show");
      }
    });
  });
});
