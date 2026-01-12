// script.js - interactions futures pour UrbanGoal

// ===== Confirmer clic sur un bouton WhatsApp =====
const whatsappButtons = document.querySelectorAll('.btn');

whatsappButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Vous allez être redirigé vers WhatsApp pour commander !");
    });
});

// ===== Menu responsive (optionnel pour plus tard) =====
// const menuToggle = document.querySelector('.menu-toggle');
// const nav = document.querySelector('nav ul');
// menuToggle.addEventListener('click', () => {
//     nav.classList.toggle('active');
// });

// ===== Fonctionnalités futures =====
// - Gestion du panier simple
// - Filtrage des produits
// - Animation des cartes produits

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Charger le thème sauvegardé
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
}); 

// Mode sombre avec mémorisation
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Charger le thème sauvegardé
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      toggleBtn.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });
});


