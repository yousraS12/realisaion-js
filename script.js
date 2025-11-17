// 1️⃣ livres initiaux
const livresInitiaux = [
  {code: 1, titre:"أنت أيضًا صحابية", auteur:"أدهم الشرقاوي", année:2022, prix:50, Image:"images/image3.jpg", disponible:true}, 
  {code: 2, titre:"رسائل من القرآن", auteur:"أدهم الشرقاوي", année:2022, prix:70, Image:"images/image1.jpg", disponible:true},
  {code: 3, titre:"أنوثة طاغية", auteur:"هالة محمد غبان", année:2017, prix:40, Image:"images/image2.jpg", disponible:true},
  {code: 4, titre:"في قلبي أنثى عبرية", auteur:"خولة حمدي", année:2012, prix:45, Image:"images/image6.jpg", disponible:true},
  {code: 5, titre:"البسي واسع", auteur:"ابتسام القاضي", année:2022, prix:30, Image:"images/image4.jpg", disponible:true},
  {code: 6, titre:"علمتني أية", auteur:"علي العبيدلي", année:2019, prix:40, Image:"images/image5.jpg", disponible:true},
  {code: 7, titre:"ولنا فى الحلال لقاء", auteur:"أحمد عطا عبدالراضي", année:2024, prix:50, Image:"images/image8.jpg", disponible:true},
  {code: 8, titre:"لعلهم يتفكرون", auteur:"عبدالله بن مرزوق القرشي", année:2022, prix:30, Image:"images/image7.jpg", disponible:true}
];

// 2️⃣ récupérer les livres ajoutés par l'utilisateur
const livresLS = JSON.parse(localStorage.getItem('livres')) || [];

// 3️⃣ fusionner les deux tableaux
let livres = [...livresInitiaux, ...livresLS];

// 🔹 Afficher les livres
function showBooks(filterBooks = livres) {
  const container = document.getElementById('liste-livres');
  container.innerHTML = '';

  filterBooks.forEach(livre => {
    const carte = document.createElement('article');
    carte.className = 'carte';
    carte.innerHTML = `
      <img src="${livre.Image}" alt="${livre.titre}" class="livre-img">
      <h2>${livre.titre}</h2>
      <p class="auteur">Auteur: ${livre.auteur}</p>
      <p class="annee">Année: ${livre.année}</p>
      <p class="prix">Prix: ${livre.prix} DH</p>
      <p class="disponible">Disponible: ${livre.disponible ? '✅ Oui' : '❌ Non'}</p>
      <button class="btn" onclick="supprimerLivre(${livre.code})">🗑️ Supprimer</button>
    `;
    container.appendChild(carte);
  });

  afficherStats();
}

// 🔹 Supprimer un livre
function supprimerLivre(code) {
  const index = livres.findIndex(livre => livre.code == code);
  if (index !== -1 && confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) {
    livres.splice(index, 1);
    // mettre à jour localStorage
    localStorage.setItem('livres', JSON.stringify(livres.filter(l => l.code > 8))); // ne garder que les livres ajoutés par l'utilisateur
    showBooks();
  }
}

// 🔹 Statistiques
function afficherStats() {
  const total = livres.length;
  const disponibles = livres.filter(livre => livre.disponible).length;
  document.getElementById("total-livre").textContent = total;
  document.getElementById("livres-disponible").textContent = disponibles;
}

// 🔹 Filtrer les livres
function filtrerLivres() {
  const recherche = document.getElementById("recherche").value.toLowerCase();
  const livresFiltres = livres.filter(livre => livre.titre.toLowerCase().includes(recherche));
  showBooks(livresFiltres);
}

// 🔹 initialisation
showBooks();
