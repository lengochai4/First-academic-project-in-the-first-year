document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider .list");
  const items = document.querySelectorAll(".slider .list .item");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const dotsContainer = document.querySelector(".slider .dots");
  const sliderWrapper = document.querySelector(".slider");

  if (!slider || items.length === 0) return;

  const total = items.length;
  let active = 0;
  let timer = null;

  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    items.forEach((_, idx) => {
      const li = document.createElement("li");
      if (idx === 0) li.classList.add("active");
      li.addEventListener("click", () => {
        active = idx;
        render();
        resetTimer();
      });
      dotsContainer.appendChild(li);
    });
  }

  const dots = document.querySelectorAll(".slider .dots li");

  function render() {
    slider.style.transform = `translateX(-${active * 100}vw)`;
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === active);
    });
  }

  function nextSlide() {
    active = (active + 1) % total;
    render();
  }

  function prevSlide() {
    active = (active - 1 + total) % total;
    render();
  }

  function startTimer() {
    stopTimer();
    timer = setInterval(nextSlide, 3800);
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function resetTimer() {
    stopTimer();
    startTimer();
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetTimer();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetTimer();
    });
  }

  if (sliderWrapper) {
    sliderWrapper.addEventListener("mouseenter", stopTimer);
    sliderWrapper.addEventListener("mouseleave", startTimer);
    sliderWrapper.addEventListener("touchstart", stopTimer, { passive: true });
    sliderWrapper.addEventListener("touchend", startTimer, { passive: true });
  }

  render();
  startTimer();

  window.addEventListener("resize", render);
});
