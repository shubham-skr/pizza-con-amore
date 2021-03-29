/****** Collapse Navigation Menu When nav link is clicked ******/
document.querySelectorAll(".nav-link").forEach((l) => {
  l.addEventListener("click", () => {
    document.querySelector(".navbar-collapse").classList.remove("show");
  });
});
