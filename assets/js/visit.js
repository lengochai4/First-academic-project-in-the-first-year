document.addEventListener("DOMContentLoaded", function () {
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
    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].classList.add("active");
    }
    setTimeout(showSlides, 3500);
  };

  if (slides.length > 0) {
    showSlides();
  }

  const districtLinks = document.querySelectorAll(".district-link");
  districtLinks.forEach((link) => {
    const handleSelect = (e) => {
      if (e) e.preventDefault();
      const targetId = link.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      document.querySelectorAll(".content-section").forEach((section) => {
        section.classList.remove("show");
      });
      if (targetSection) {
        targetSection.classList.add("show");
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    link.addEventListener("click", handleSelect);
  });
});
