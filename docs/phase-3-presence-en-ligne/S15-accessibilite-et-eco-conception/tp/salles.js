// Filtre des salles et validation du formulaire de réservation
const champCapacite = document.getElementById("capacite-min");
const lignes = document.querySelectorAll("#tableau-salles tbody tr");
const formulaire = document.getElementById("formulaire");
const message = document.getElementById("message");

function filtrerSalles() {
  const minimum = Number(champCapacite.value);
  lignes.forEach(function (ligne) {
    const capacite = Number(ligne.cells[1].textContent);
    ligne.classList.toggle("masque", capacite < minimum);
  });
}

function heureEnMinutes(texte) {
  const [h, m] = texte.split(":").map(Number);
  return h * 60 + m;
}

function validerFormulaire() {
  const erreurs = [];
  const nom = document.getElementById("nom").value.trim();
  const courriel = document.getElementById("courriel").value.trim();
  const jour = document.getElementById("jour").value;
  const debut = document.getElementById("debut").value;
  const fin = document.getElementById("fin").value;

  if (nom === "") erreurs.push("Le nom de l'association est obligatoire.");
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(courriel)) erreurs.push("Le courriel n'est pas valide.");
  if (jour === "") {
    erreurs.push("La date est obligatoire.");
  } else if (jour < new Date().toISOString().slice(0, 10)) {
    erreurs.push("La date ne peut pas être dans le passé.");
  }
  if (debut === "" || fin === "") {
    erreurs.push("Les heures de début et de fin sont obligatoires.");
  } else if (heureEnMinutes(fin) <= heureEnMinutes(debut)) {
    erreurs.push("L'heure de fin doit être après l'heure de début.");
  }
  return erreurs;
}

champCapacite.addEventListener("input", filtrerSalles);
formulaire.addEventListener("submit", function (evenement) {
  const erreurs = validerFormulaire();
  if (erreurs.length > 0) {
    evenement.preventDefault();
    message.className = "erreur";
    message.textContent = erreurs.join(" ");
  } else {
    message.textContent = "";
  }
});
