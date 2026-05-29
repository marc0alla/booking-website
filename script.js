const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

}, {
  threshold: 0.15
});

sections.forEach((section) => {
  observer.observe(section);
});


// PARALLAX HERO

const hero = document.querySelector(".hero");

document.addEventListener("mousemove", (e) => {

  const x = (window.innerWidth / 2 - e.clientX) / 40;

  const y = (window.innerHeight / 2 - e.clientY) / 40;

  hero.style.transform =
    `translate(${x}px, ${y}px)`;

});


// HEADER SCROLL EFFECT

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.style.background = "rgba(0,0,0,0.9)";
    header.style.borderBottom =
      "1px solid rgba(255,255,255,0.15)";

  } else {

    header.style.background = "rgba(0,0,0,0.7)";
    header.style.borderBottom =
      "1px solid rgba(255,255,255,0.1)";
  }

});