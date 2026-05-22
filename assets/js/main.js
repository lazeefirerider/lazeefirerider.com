const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const pathName = window.location.pathname;
const currentPage = pathName.split("/").pop() || "index.html";

document.querySelectorAll(".site-nav a").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href) return;

  const linkPage = href.split("/").pop();
  const isProjectDetail = pathName.includes("/projects/") && linkPage === "projects.html";

  if (linkPage === currentPage || isProjectDetail) {
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll("[data-current-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});
