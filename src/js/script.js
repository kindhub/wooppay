import VSwiper from "./modules/VSwiper";
import Anchor from "./modules/Anchor";
import Nav from "./modules/Nav";
import Countup from "./custom_modules/Countup";
import VacancyBtn from "./modules/VacancyBtn";

/*
	--------------------------------------------
	--------------------------------------------
					SLIDERS
	--------------------------------------------
	--------------------------------------------
 */

function initPartnersSlider() {
  swiper.init(".tmpl-hh__partners-slider", {
    spaceBetween: 15,
    loop: true,
    speed: 4000,
    autoplay: {
      delay: 1,
    },
    slidesPerView: 10,
    disableOnInteraction: true,
    breakpoints: {
      1019: {
        slidesPerView: 7,
      },
      529: {
        spaceBetween: 10,
        slidesPerView: 5,
      },
    },
  });
}

function initTrainSlider() {
  swiper.init(".tmpl-hh__train-slider", {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    autoplay: {
      delay: 3000,
    },
    bulletActiveClass: ".tmpl-hh__swiper-pagination-bullet-active",
    pagination: {
      el: ".tmpl-hh__slider__pagination--train",
      clickable: true,
    },
  });
}

function initParticipateSlider() {
  swiper.init(".tmpl-hh__participate-slider", {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    autoplay: {
      delay: 3000,
    },
    bulletActiveClass: ".tmpl-hh__swiper-pagination-bullet-active",
    pagination: {
      el: ".tmpl-hh__slider__pagination--participate",
      clickable: true,
    },
  });
}

function initEmployeeSlider() {
  swiper.init(".tmpl-hh__employee-slider", {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    autoplay: {
      delay: 3000,
    },
    bulletActiveClass: ".tmpl-hh__swiper-pagination-bullet-active",
    pagination: {
      el: ".tmpl-hh__slider__pagination--employee",
      clickable: true,
    },
  });
}

function initRelaxSlider() {
  swiper.init(".tmpl-hh__relax-slider", {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    autoplay: {
      delay: 3000,
    },
    bulletActiveClass: ".tmpl-hh__swiper-pagination-bullet-active",
    pagination: {
      el: ".tmpl-hh__slider__pagination--relax",
      clickable: true,
    },
  });
}

const scrollElements = document.querySelectorAll(".tmpl-hh__s-stats");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      new Countup(".tmpl-hh__s-stats");
    }
  });
};

if (window.innerWidth < 529) {
  new Countup(".tmpl-hh__s-stats");
} else {
  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });
}
/*
	--------------------------------------------
	--------------------------------------------
						COMMON
	--------------------------------------------
	--------------------------------------------
 */

const tabs = document.querySelectorAll(".tmpl-hh__tab");
tabs.forEach((tab) => {
  const tabContent = tab.querySelector(".tmpl-hh__tab-content");
  const tabBtn = tab.querySelector(".tmpl-hh__tab-btn");

  tab.addEventListener("click", () => {
    tabs.forEach((otherTab) => {
      const otherTabContent = otherTab.querySelector(".tmpl-hh__tab-content");
      const otherTabBtn = otherTab.querySelector(".tmpl-hh__tab-btn");

      if (otherTabContent !== tabContent) {
        otherTabContent.style.maxHeight = null;
        otherTab.classList.remove("tmpl-hh__tab--active");
        otherTabBtn.classList.remove("tmpl-hh__active");
      }
    });

    if (tabContent.style.maxHeight) {
      tabContent.style.maxHeight = null;
      tab.classList.remove("tmpl-hh__tab--active");
      tabBtn.classList.remove("tmpl-hh__active");
    } else {
      tabContent.style.maxHeight = tabContent.scrollHeight + "px";
      tab.classList.add("tmpl-hh__tab--active");
      tabBtn.classList.add("tmpl-hh__active");
    }
  });
});

const swiper = new VSwiper();
new Anchor();
new VacancyBtn();
new Nav();

initPartnersSlider();
initTrainSlider();
initParticipateSlider();
initEmployeeSlider();
initRelaxSlider();