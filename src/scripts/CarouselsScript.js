export function initCarousel(id, element) {
  if (!element) {
    return;
  }

  if (element.dataset.carouselInitialized === "true") {
    return;
  }

  element.dataset.carouselInitialized = "true";

  if (id === 2837) {
    initCarousel2837(element);
  }

  if (id === 2838) {
    initCarousel2838(element);
  }
}

function initCarousel2837(carousel) {
  const slides = carousel.querySelectorAll(".carousel-slide");
  const dots = carousel.querySelectorAll(".carousel-dots span");
  const previousButton = carousel.querySelector(".carousel-arrow-left");
  const nextButton = carousel.querySelector(".carousel-arrow-right");

  if (!slides.length || !previousButton || !nextButton) {
    return;
  }

  let currentSlide = 0;

  function showSlide(index) {
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("active", slideIndex === currentSlide);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === currentSlide);
    });
  }

  nextButton.addEventListener("click", (event) => {
    event.stopPropagation();
    showSlide(currentSlide + 1);
  });

  previousButton.addEventListener("click", (event) => {
    event.stopPropagation();
    showSlide(currentSlide - 1);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", (event) => {
      event.stopPropagation();
      showSlide(index);
    });
  });

  showSlide(0);
}

function initCarousel2838(carousel) {
  const cards = carousel.querySelectorAll(".carousel-2838-card");
  const dots = carousel.querySelectorAll(".carousel-2838-dots span");
  const previousButton = carousel.querySelector(".carousel-2838-arrow-left");
  const nextButton = carousel.querySelector(".carousel-2838-arrow-right");

  if (!cards.length || !previousButton || !nextButton) {
    return;
  }

  let currentSlide = 0;

  function updateCarousel(index) {
    if (index >= cards.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = cards.length - 1;
    } else {
      currentSlide = index;
    }

    cards.forEach((card, cardIndex) => {
      const previousIndex =
        currentSlide === 0 ? cards.length - 1 : currentSlide - 1;

      const nextIndex =
        currentSlide === cards.length - 1 ? 0 : currentSlide + 1;

      card.classList.remove("active", "prev", "next");

      if (cardIndex === currentSlide) {
        card.classList.add("active");
      }

      if (cardIndex === previousIndex) {
        card.classList.add("prev");
      }

      if (cardIndex === nextIndex) {
        card.classList.add("next");
      }
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === currentSlide);
    });
  }

  nextButton.addEventListener("click", (event) => {
    event.stopPropagation();
    updateCarousel(currentSlide + 1);
  });

  previousButton.addEventListener("click", (event) => {
    event.stopPropagation();
    updateCarousel(currentSlide - 1);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", (event) => {
      event.stopPropagation();
      updateCarousel(index);
    });
  });

  updateCarousel(0);
}
