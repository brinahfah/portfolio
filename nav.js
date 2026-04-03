// Scrollspy pour barre verticale
const sectionLinks = document.querySelectorAll('.section-bar a');
const pageSections = [
  { id: 'accueil', offset: 0 },
  { id: 'presentation', offset: 0 },
  { id: 'profil', offset: 0 },
  { id: 'projet', offset: 0 },
  { id: 'veille_tech', offset: 0 },
  { id: 'contact', offset: 0 },
];

// Calcul des offsets si besoin (optionnel selon la page)
window.addEventListener('load', () => {
  pageSections.forEach(s => {
    const el = document.getElementById(s.id);
    if(el) s.offset = el.offsetTop;
  });
});

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + window.innerHeight / 3;

  let currentId = pageSections[0].id;
  pageSections.forEach(section => {
    if(scrollPos >= section.offset) {
      currentId = section.id;
    }
  });

  sectionLinks.forEach(link => {
    link.classList.remove('active');
    if(link.dataset.section === currentId) {
      link.classList.add('active');
    }
  });
});