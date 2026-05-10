/* =========================================
   UNIQUE PERSPECTIVE 8 — SCRIPT.JS
   Smooth luxury interactions
========================================= */

/* NAVBAR SCROLL EFFECT */

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(5,5,5,0.95)";
    header.style.borderBottom = "1px solid rgba(212,175,55,0.25)";
  } else {
    header.style.background = "rgba(5,5,5,0.82)";
    header.style.borderBottom = "1px solid rgba(212,175,55,0.12)";
  }
});

/* SMOOTH FADE-IN ON SCROLL */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".feature-card, .collection-card, .about-content")
  .forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "0.8s ease";
    observer.observe(el);
  });

/* HERO TEXT GLOW PULSE */

setInterval(() => {
  const title = document.querySelector(".hero h1");
  if (title) {
    title.style.textShadow = `
      0 0 20px rgba(212,175,55,0.25),
      0 0 40px rgba(212,175,55,0.15)
    `;
    setTimeout(() => {
      title.style.textShadow = "none";
    }, 1200);
  }
}, 4000);

/* SMOOTH SCROLL FOR NAV LINKS */

document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});