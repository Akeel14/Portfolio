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
      sectionTitle.targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      sectionTitle.classList.remove("center");
    }
  });
  observer.observe(sectionTitle);
});
