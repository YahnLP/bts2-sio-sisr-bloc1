// À compléter : fonctions de gestion des créneaux (heures en minutes depuis minuit)
function enMinutes(texte) {
  // "09:30" -> 570
}

function enTexte(minutes) {
  // 570 -> "09:30" (deux chiffres pour les heures et les minutes)
}

function chevauche(a, b) {
  // vrai si les créneaux a et b ({ debut, fin }) se chevauchent ; faux s'ils sont bout à bout
}

function estLibre(creneau, reservations) {
  // vrai si le créneau ne chevauche aucune réservation
}

function creneauxLibres(reservations, ouverture, fermeture, duree) {
  // liste (en texte "HH:MM") des débuts de créneaux libres de durée donnée
}

function tauxOccupation(reservations, ouverture, fermeture) {
  // part du temps d'ouverture occupée, entre 0 et 1
}

if (typeof module !== "undefined") {
  module.exports = { enMinutes, enTexte, chevauche, estLibre, creneauxLibres, tauxOccupation };
}
