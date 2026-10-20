// À compléter : filtre des salles et validation du formulaire
const champCapacite = document.getElementById("capacite-min");
const lignes = document.querySelectorAll("#tableau-salles tbody tr");
const formulaire = document.getElementById("formulaire");
const message = document.getElementById("message");

function filtrerSalles() {
  // 1. lire la capacité minimale saisie (un nombre)
  // 2. pour chaque ligne du tableau : lire sa capacité (2e cellule)
  // 3. masquer la ligne (classe "masque") si sa capacité est inférieure au minimum
}

function validerFormulaire() {
  const erreurs = [];
  // Contrôler : nom non vide, courriel au bon format, date renseignée et pas dans le passé,
  // heures renseignées, fin après début. Ajouter un texte à erreurs pour chaque problème.
  return erreurs;
}

// 4. appeler filtrerSalles à chaque saisie dans le champ de capacité
// 5. à l'envoi du formulaire : si erreurs, bloquer l'envoi et afficher les messages
