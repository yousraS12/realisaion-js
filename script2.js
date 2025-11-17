const form = document.getElementById('form-ajout');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // récupérer les valeurs
  const code = parseInt(document.getElementById('code').value);
  const titre = document.getElementById('titre').value;
  const auteur = document.getElementById('auteur').value;
  const annee = parseInt(document.getElementById('annee').value);
  const prix = parseFloat(document.getElementById('prix').value);
  const Image = document.getElementById('img').value;
  const disponible = document.getElementById('disponible').value === "true";

  const nouveauLivre = {
    code,
    titre,
    auteur,
    annee,
    prix,
    Image,
    disponible
  };

  // récupérer les livres existants dans localStorage
  let livresLS = JSON.parse(localStorage.getItem('livres')) || [];

  // ajouter le nouveau livre
  livresLS.push(nouveauLivre);

  // sauvegarder dans localStorage
  localStorage.setItem('livres', JSON.stringify(livresLS));

  alert('✅ Livre ajouté avec succès !');

  // reset du formulaire
  form.reset();

  // retour à la page index
  window.location.href = 'index.html';
});
