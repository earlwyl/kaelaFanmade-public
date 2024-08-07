// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;

  if (window.scrollY > fixednav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// navbar logo
function toggleHiddenClass() {
  const logoCenter = document.getElementById("center-logo");
  if (window.innerWidth >= 1024) {
    // Remove the 'hidden' class on large screens
    logoCenter.classList.remove("hidden");
  } else {
    // Add the 'hidden' class on small screens
    logoCenter.classList.add("hidden");
  }
}

// Initial check
toggleHiddenClass();

// Add event listener for window resize
window.addEventListener("resize", toggleHiddenClass);

// figure
const figureSelect1 = document.querySelector("#figure-select1");
const figureSelect2 = document.querySelector("#figure-select2");
const figureSelect3 = document.querySelector("#figure-select3");

const kaelaFigure1 = document.querySelector("#kaelaFigure1");
const kaelaFigure2 = document.querySelector("#kaelaFigure2");
const kaelaFigure3 = document.querySelector("#kaelaFigure3");

figureSelect2.addEventListener("click", function () {
  if (!kaelaFigure1.classList.contains("hidden")) {
    kaelaFigure1.classList.add("hidden");
  }
  if (!kaelaFigure3.classList.contains("hidden")) {
    kaelaFigure3.classList.add("hidden");
  }
  if (kaelaFigure2.classList.contains("hidden")) {
    kaelaFigure2.classList.remove("hidden");
  }
});

figureSelect3.addEventListener("click", function () {
  if (!kaelaFigure1.classList.contains("hidden")) {
    kaelaFigure1.classList.add("hidden");
  }
  if (!kaelaFigure2.classList.contains("hidden")) {
    kaelaFigure2.classList.add("hidden");
  }
  if (kaelaFigure3.classList.contains("hidden")) {
    kaelaFigure3.classList.remove("hidden");
  }
});

figureSelect1.addEventListener("click", function () {
  if (!kaelaFigure2.classList.contains("hidden")) {
    kaelaFigure2.classList.add("hidden");
  }
  if (!kaelaFigure3.classList.contains("hidden")) {
    kaelaFigure3.classList.add("hidden");
  }
  if (kaelaFigure1.classList.contains("hidden")) {
    kaelaFigure1.classList.remove("hidden");
  }
});

// twitter post lg

function twitterLgToggle() {
  const twitterLg = document.querySelector("#post-twitter-lg");
  const twitterSm = document.querySelector("#post-twitter-sm");

  if (window.innerWidth >= 1024) {
    twitterLg.classList.remove("hidden");
    twitterSm.classList.add("hidden");
  } else {
    twitterSm.classList.remove("hidden");
    twitterLg.classList.add("hidden");
  }
}

twitterLgToggle();

// Add event listener for window resize
window.addEventListener("resize", twitterLgToggle);
