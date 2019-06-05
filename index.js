document.addEventListener("scroll", () => {
  if (pageYOffset > 0) {
    document.querySelector("header").classList.add("scroll");
  } else document.querySelector("header").classList.remove("scroll");
});
