const navLinks = document.querySelectorAll(
  ".navbar-nav .nav-link, .navbar-brand"
);

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

const sectionTitles = document.querySelectorAll(".section-title");

sectionTitles.forEach((sectionTitle) => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      sectionTitle.classList.add("center");
    } else {
      sectionTitle.classList.remove("center");
    }
  });
  observer.observe(sectionTitle);
});

const elements = document.querySelectorAll(".element");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
      entry.target.style.transform = "translateY(0)";
      entry.target.style.opacity = "1";

    } else {
      entry.target.style.animationPlayState = "paused";
    }
  });
});

elements.forEach((element) => {
  observer.observe(element);
});
