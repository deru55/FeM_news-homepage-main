const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navbar");

navToggle.addEventListener("click", () => {
  topFunction();
  preventScroll();

  primaryNav.toggleAttribute("data-visible");
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", true)
    : navToggle.setAttribute("aria-expanded", false);
});

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const preventScroll = () => {
  document.body.toggleAttribute("data-scroll");
};
