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

  const dropdown = document.querySelector(".dropdown");
  const dropbtn = document.querySelector(".dropbtn");
  const districtLinks = document.querySelectorAll(".district-link");

  if (dropbtn && dropdown) {
    dropbtn.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdown.classList.toggle("open");
    });

    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });
  }

  districtLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      document.querySelectorAll(".content-section").forEach((section) => {
        section.classList.remove("show");
      });

      if (targetSection) {
        targetSection.classList.add("show");
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (dropdown) {
        dropdown.classList.remove("open");
      }
    });
  });
});
