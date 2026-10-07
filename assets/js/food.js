document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".fade-in");

  if (faders.length > 0 && "IntersectionObserver" in window) {
    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -50px 0px",
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
  }

  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (scrollToTopBtn) {
    window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });

    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
