// Gestion du consentement pour les contenus tiers (carte intégrée)
const CLE = "consentement-carte";
const zoneCarte = document.getElementById("zone-carte");
const bandeau = document.getElementById("bandeau-consentement");

function lireChoix() {
  try { return localStorage.getItem(CLE); } catch (e) { return null; }
}

function ecrireChoix(valeur) {
  try { localStorage.setItem(CLE, valeur); } catch (e) { /* stockage indisponible : le choix vaut pour la page */ }
}

function afficherCarte() {
  if (zoneCarte.querySelector("iframe")) return;
  const cadre = document.createElement("iframe");
  cadre.src = "https://carte.example/embed?lieu=bellevigne";
  cadre.title = "Plan d'accès aux salles";
  cadre.loading = "lazy";
  zoneCarte.appendChild(cadre);
}

function retirerCarte() {
  zoneCarte.querySelectorAll("iframe").forEach(function (c) { c.remove(); });
}

function appliquer(choix) {
  bandeau.hidden = choix !== null;
  if (choix === "accepte") afficherCarte(); else retirerCarte();
}

document.getElementById("accepter").addEventListener("click", function () { ecrireChoix("accepte"); appliquer("accepte"); });
document.getElementById("refuser").addEventListener("click", function () { ecrireChoix("refuse"); appliquer("refuse"); });
document.getElementById("gerer-cookies").addEventListener("click", function () {
  try { localStorage.removeItem(CLE); } catch (e) { /* rien */ }
  appliquer(null);
});

appliquer(lireChoix());
