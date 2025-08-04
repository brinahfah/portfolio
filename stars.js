document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('starContainer');

  const createStar = () => {
    const star = document.createElement('img');
    star.src = 'images/stars.png';
    star.classList.add('beautifullstars');

    // Position de départ aléatoire sur toute la largeur
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    // Ajoute l'étoile dans le conteneur
    container.appendChild(star);

    // Animation
    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;

    const duration = Math.random() * 3000 + 3000; // 3s à 6s

    star.animate([
      { transform: `translateY(0px)`, opacity: 1 },
      { transform: `translateY(30px)`, opacity: 0.8 },
      { transform: `translateY(60px)`, opacity: 0 }
    ], {
      duration: duration,
      iterations: 1,
      easing: 'ease-in'
    });

    // Supprimer l'étoile une fois l'animation terminée
    setTimeout(() => {
      star.remove();
    }, duration);
  };

  // Crée des étoiles en boucle (effet pluie continue)
  setInterval(() => {
    for (let i = 0; i < 3; i++) {
      createStar();
    }
  }, 300); // une étoile toutes les 300 ms
});
