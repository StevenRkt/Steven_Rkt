window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var header = document.querySelector(".header");
  var containerRect = header.getBoundingClientRect();

  if (containerRect.bottom <= 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const title = document.querySelector(".typewriter");
const cursor = document.querySelector(".typewriter::after");

const txt = "Bienvenue sur mon portfolio.";

function typewriter(word, index) {
  if (index < word.length) {
    setTimeout(() => {
      title.innerHTML += `<span>${word[index]}</span>`;
      typewriter(txt, index + 1);
    }, 150);
  }
}

setTimeout(() => {
  typewriter(txt, 0);
}, 1700);

// Arrête l'effet d'écriture si l'utilisateur fait défiler la page avant la fin de l'animation
window.addEventListener("scroll", function () {
  clearTimeout(typewriter);
});
