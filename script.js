const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

}, {
  threshold: 0,
  rootMargin: "0px 0px -5% 0px"
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
let lastScrollPosition = window.scrollY;

window.addEventListener("scroll", () => {

  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > 50) {

    header.style.background = "rgba(0,0,0,0.9)";
    header.style.borderBottom =
      "1px solid rgba(255,255,255,0.15)";

  } else {

    header.style.background = "rgba(0,0,0,0.7)";
    header.style.borderBottom =
      "1px solid rgba(255,255,255,0.1)";
  }

  if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
    header.classList.add("is-hidden");
  } else {
    header.classList.remove("is-hidden");
  }

  lastScrollPosition = currentScrollPosition;

});


// MENU MOBILE

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "Fechar" : "Menu";
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "Menu";
    });
  });
}


// COPIAR E-MAIL DE CONTATO

const copyEmailButton = document.querySelector(".contact-copy-email");
const contactFeedback = document.querySelector(".contact-feedback");

if (copyEmailButton) {
  copyEmailButton.addEventListener("click", async () => {
    const email = copyEmailButton.dataset.email;

    try {
      await navigator.clipboard.writeText(email);
      contactFeedback.textContent = "E-mail copiado: " + email;
      copyEmailButton.textContent = "E-mail copiado ✓";
    } catch (error) {
      window.prompt("Copie o e-mail abaixo:", email);
    }
  });
}
