# Corrigé S08 – Créneaux libres

*Réservé à l'enseignant. Solution **testée** : `node tests.js` affiche « Tous les tests ​passent ».*

## creneaux.js de référence

```js
// Fonctions de gestion des créneaux (heures exprimées en minutes depuis minuit)
function enMinutes(texte) {
  const [h, m] = texte.split(":").map(Number);
  return h * 60 + m;
}

function enTexte(minutes) {
  const h = String(Math.floor(minutes / 60)).padStart(2, "0");
  const m = String(minutes % 60).padStart(2, "0");
  return h + ":" + m;
}

// Deux créneaux se chevauchent si chacun commence avant la fin de l'autre.
function chevauche(a, b) {
  return a.debut < b.fin && b.debut < a.fin;
}

function estLibre(creneau, reservations) {
  return !reservations.some(function (r) { return chevauche(creneau, r); });
}

// Liste les débuts de créneaux libres de durée donnée, entre ouverture et fermeture.
function creneauxLibres(reservations, ouverture, fermeture, duree) {
  const libres = [];
  for (let debut = ouverture; debut + duree <= fermeture; debut += duree) {
    const candidat = { debut: debut, fin: debut + duree };
    if (estLibre(candidat, reservations)) libres.push(enTexte(debut));
  }
  return libres;
}

// Part du temps d'ouverture occupée (les réservations ne se chevauchent pas).
function tauxOccupation(reservations, ouverture, fermeture) {
  const reserve = reservations.reduce(function (somme, r) { return somme + (r.fin - r.debut); }, 0);
  return reserve / (fermeture - ouverture);
}

if (typeof module !== "undefined") {
  module.exports = { enMinutes, enTexte, chevauche, estLibre, creneauxLibres, tauxOccupation };
}
```

## Points de contrôle

- Partie A : six créneaux libres ; 15 h–16 h chevauche 14 h–15 h 30.
- Partie C : 390 / 840 ≈ 0,464 (46,4 %).
- Partie D : défaut = `<=` à la place de `<` ; test de régression « bout à bout » ; correction minimale.
- Erreur fréquente : oublier le cas bout à bout, ou convertir `"09:30"` en 9,30 au lieu de 570.

## Bilan de compétences

Auto-évaluation ; B1.3 et B1.4 proposées, à valider.
