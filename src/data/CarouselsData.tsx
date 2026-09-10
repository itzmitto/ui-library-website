import "../pages/All.css";

export const carousels = [
  {
    id: 2837,
    name: "Basic Arrow Carousel",
    scriptId: 2837,
    preview: (
      <div className="carousel-2837" data-carousel-id="2837">
        <div className="carousel-slide active">
          <span>Slide 1</span>
        </div>
        <div className="carousel-slide">
          <span>Slide 2</span>
        </div>
        <div className="carousel-slide">
          <span>Slide 3</span>
        </div>
        <button className="carousel-arrow carousel-arrow-left" type="button">
          <i className="ri-arrow-left-line"></i>
        </button>
        <button className="carousel-arrow carousel-arrow-right" type="button">
          <i className="ri-arrow-right-line"></i>
        </button>
        <div className="carousel-dots">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
      </div>
    ),
    html: `<div class="Carousel" data-carousel-id="2837">
    <div class="Carousel__slide active">
        <span>Slide 1</span>
    </div>
    <div class="Carousel__slide">
        <span>Slide 2</span>
    </div>
    <div class="Carousel__slide">
        <span>Slide 3</span>
    </div>
    <button class="Carousel__arrow Carousel__arrow--left" type="button" aria-label="Previous slide">
        <i class="ri-arrow-left-line"></i>
    </button>
    <button class="Carousel__arrow Carousel__arrow--right" type="button" aria-label="Next slide">
        <i class="ri-arrow-right-line"></i>
    </button>
    <div class="Carousel__dots">
        <button class="Carousel__dot active" type="button" aria-label="Go to slide 1"></button>
        <button class="Carousel__dot" type="button" aria-label="Go to slide 2"></button>
        <button class="Carousel__dot" type="button" aria-label="Go to slide 3"></button>
    </div>
</div>`,
    css: `.Carousel {
    position: relative;
    width: 100%;
    max-width: 600px;
    height: 300px;
    overflow: hidden;
    border-radius: 12px;
    background: #111827;
}
.Carousel__slide {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    background: #2563eb;
    color: #ffffff;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}
.Carousel__slide:nth-child(2) {
    background: #7c3aed;
}
.Carousel__slide:nth-child(3) {
    background: #db2777;
}
.Carousel__slide.active {
    opacity: 1;
    visibility: visible;
}
.Carousel__slide span {
    font-size: 28px;
    font-weight: 700;
}
.Carousel__arrow {
    position: absolute;
    top: 50%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: #ffffff;
    color: #111827;
    cursor: pointer;
    transform: translateY(-50%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s ease, background 0.2s ease;
}
.Carousel__arrow:hover {
    background: #f3f4f6;
    transform: translateY(-50%) scale(1.06);
}
.Carousel__arrow i {
    font-size: 19px;
}
.Carousel__arrow--left {
    left: 15px;
}
.Carousel__arrow--right {
    right: 15px;
}
.Carousel__dots {
    position: absolute;
    left: 50%;
    bottom: 15px;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 6px;
    transform: translateX(-50%);
}
.Carousel__dot {
    width: 8px;
    height: 8px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.45);
    cursor: pointer;
}
.Carousel__dot.active {
    width: 22px;
    border-radius: 999px;
    background: #ffffff;
}`,
    javascript: `const carousel = document.querySelector('[data-carousel-id="2837"]');
const slides = carousel.querySelectorAll(".Carousel__slide");
const dots = carousel.querySelectorAll(".Carousel__dot");
const previousButton = carousel.querySelector(".Carousel__arrow--left");
const nextButton = carousel.querySelector(".Carousel__arrow--right");

let currentSlide = 0;

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentSlide);
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
});

previousButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
    });
});

showSlide(0);`,
  },
  {
    id: 2838,
    name: "3D Glass Card Carousel",
    scriptId: 2838,
    preview: (
      <div className="carousel-2838" data-carousel-id="2838">
        <div className="carousel-2838-track">
          <div className="carousel-2838-card active">
            <span className="carousel-2838-number">01</span>
            <strong>Neon Future</strong>
            <small>Creative Design</small>
          </div>
          <div className="carousel-2838-card">
            <span className="carousel-2838-number">02</span>
            <strong>Cyber Space</strong>
            <small>Digital Experience</small>
          </div>
          <div className="carousel-2838-card">
            <span className="carousel-2838-number">03</span>
            <strong>Dark Energy</strong>
            <small>Modern Interface</small>
          </div>
          <div className="carousel-2838-card">
            <span className="carousel-2838-number">04</span>
            <strong>Future Wave</strong>
            <small>Next Generation</small>
          </div>
        </div>

        <button
          className="carousel-2838-arrow carousel-2838-arrow-left"
          type="button"
        >
          <i className="ri-arrow-left-line"></i>
        </button>

        <button
          className="carousel-2838-arrow carousel-2838-arrow-right"
          type="button"
        >
          <i className="ri-arrow-right-line"></i>
        </button>

        <div className="carousel-2838-dots">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    ),
    html: `<div class="Carousel2838" data-carousel-id="2838">
    <div class="Carousel2838__track">
        <div class="Carousel2838__card active">
            <span class="Carousel2838__number">01</span>
            <strong>Neon Future</strong>
            <small>Creative Design</small>
        </div>
        <div class="Carousel2838__card">
            <span class="Carousel2838__number">02</span>
            <strong>Cyber Space</strong>
            <small>Digital Experience</small>
        </div>
        <div class="Carousel2838__card">
            <span class="Carousel2838__number">03</span>
            <strong>Dark Energy</strong>
            <small>Modern Interface</small>
        </div>
        <div class="Carousel2838__card">
            <span class="Carousel2838__number">04</span>
            <strong>Future Wave</strong>
            <small>Next Generation</small>
        </div>
    </div>

    <button class="Carousel2838__arrow Carousel2838__arrow--left" type="button" aria-label="Previous slide">
        <i class="ri-arrow-left-line"></i>
    </button>

    <button class="Carousel2838__arrow Carousel2838__arrow--right" type="button" aria-label="Next slide">
        <i class="ri-arrow-right-line"></i>
    </button>

    <div class="Carousel2838__dots">
        <button class="Carousel2838__dot active" type="button" aria-label="Go to slide 1"></button>
        <button class="Carousel2838__dot" type="button" aria-label="Go to slide 2"></button>
        <button class="Carousel2838__dot" type="button" aria-label="Go to slide 3"></button>
        <button class="Carousel2838__dot" type="button" aria-label="Go to slide 4"></button>
    </div>
</div>`,
    css: `.Carousel2838 {
    position: relative;
    width: 100%;
    max-width: 720px;
    height: 360px;
    overflow: hidden;
    border-radius: 24px;
    background: radial-gradient(circle at top, #1d1d35 0%, #09090f 60%, #050507 100%);
    isolation: isolate;
}
.Carousel2838::before {
    content: "";
    position: absolute;
    width: 180px;
    height: 180px;
    top: -60px;
    left: 50%;
    border-radius: 50%;
    background: rgba(99, 102, 241, 0.25);
    filter: blur(50px);
    transform: translateX(-50%);
}
.Carousel2838__track {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Carousel2838__card {
    position: absolute;
    width: 270px;
    height: 185px;
    padding: 24px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 22px;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.04));
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(18px);
    color: #ffffff;
    transform: translateX(0) scale(0.72);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.45s ease, opacity 0.45s ease, filter 0.45s ease;
}
.Carousel2838__card.active {
    opacity: 1;
    visibility: visible;
    transform: translateX(0) scale(1);
    z-index: 3;
}
.Carousel2838__card.prev {
    opacity: 0.45;
    visibility: visible;
    transform: translateX(-145px) scale(0.78);
    z-index: 2;
}
.Carousel2838__card.next {
    opacity: 0.45;
    visibility: visible;
    transform: translateX(145px) scale(0.78);
    z-index: 2;
}
.Carousel2838__number {
    display: block;
    margin-bottom: 36px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.18em;
    opacity: 0.55;
}
.Carousel2838__card strong {
    display: block;
    font-size: 24px;
    line-height: 1.1;
}
.Carousel2838__card small {
    display: block;
    margin-top: 8px;
    font-size: 12px;
    opacity: 0.6;
}
.Carousel2838__arrow {
    position: absolute;
    top: 50%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
    cursor: pointer;
    transform: translateY(-50%);
    backdrop-filter: blur(12px);
    transition: background 0.2s ease, transform 0.2s ease;
}
.Carousel2838__arrow:hover {
    background: rgba(255, 255, 255, 0.16);
    transform: translateY(-50%) scale(1.08);
}
.Carousel2838__arrow i {
    font-size: 18px;
}
.Carousel2838__arrow--left {
    left: 18px;
}
.Carousel2838__arrow--right {
    right: 18px;
}
.Carousel2838__dots {
    position: absolute;
    left: 50%;
    bottom: 18px;
    z-index: 10;
    display: flex;
    gap: 6px;
    transform: translateX(-50%);
}
.Carousel2838__dot {
    width: 7px;
    height: 7px;
    padding: 0;
    border: none;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.28);
    cursor: pointer;
    transition: width 0.25s ease, background 0.25s ease;
}
.Carousel2838__dot.active {
    width: 24px;
    background: #ffffff;
}`,
    javascript: `const carousel = document.querySelector('[data-carousel-id="2838"]');
const cards = carousel.querySelectorAll(".Carousel2838__card");
const dots = carousel.querySelectorAll(".Carousel2838__dot");
const previousButton = carousel.querySelector(".Carousel2838__arrow--left");
const nextButton = carousel.querySelector(".Carousel2838__arrow--right");

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
        const previousIndex = currentSlide === 0 ? cards.length - 1 : currentSlide - 1;
        const nextIndex = currentSlide === cards.length - 1 ? 0 : currentSlide + 1;

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

nextButton.addEventListener("click", () => {
    updateCarousel(currentSlide + 1);
});

previousButton.addEventListener("click", () => {
    updateCarousel(currentSlide - 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        updateCarousel(index);
    });
});

updateCarousel(0);`,
  },
];
