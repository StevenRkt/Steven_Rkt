window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var header = document.querySelector(".header");
  var containerRect = header.getBoundingClientRect();

  if (containerRect.bottom <= 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Texte de bienvenue à afficher
const welcomeText =
  "Bienvenue sur mon portfolio !\nJe suis passionné par le développement web et la création d'expériences utilisateur exceptionnelles.";

// Attend que tout le contenu soit chargé
window.onload = function () {
  const welcomeContainer = document.getElementById("welcome-text");
  let i = 0;
  let typingEffect;

  function typeWriter() {
    if (i < welcomeText.length) {
      welcomeContainer.innerHTML += welcomeText.charAt(i);
      i++;
      typingEffect = setTimeout(typeWriter, 50); // Délai entre chaque caractère (en millisecondes)
    } else {
      welcomeContainer.innerHTML += '<span class="cursor"></span>'; // Ajoute le curseur à la fin du texte
    }
  }

  typeWriter(); // Lancement de la fonction pour afficher le texte caractère par caractère
};

// Arrête l'effet d'écriture si l'utilisateur fait défiler la page avant la fin de l'animation
window.addEventListener("scroll", function () {
  clearTimeout(typingEffect);
});
