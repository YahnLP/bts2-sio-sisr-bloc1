# Corrigé S10 – Trois demandes sur un site

*Réservé à l'enseignant. Enchaînement complet **exécuté** avec Git et Node.js.*

## Partie A

`prixLocation(20, 2.5)` = 50 ; `prixLocation(20, -1)` = −20 (défaut).

## Partie B – prix.js de référence (après les deux tickets)

```js
// Tarif de location d'une salle : prix horaire par salle, réduction éventuelle (0 à 1)
function prixLocation(tarifHoraire, heures, reduction = 0) {
  if (heures < 0) throw new RangeError("La durée ne peut pas être négative");
  if (reduction < 0 || reduction > 1) throw new RangeError("La réduction doit être comprise entre 0 et 1");
  return tarifHoraire * heures * (1 - reduction);
}
module.exports = { prixLocation };
```

Tests ajoutés : ​durée négative → `RangeError` ; `prixLocation(20, 3, 0.25) === 45` ; réduction hors intervalle → `RangeError`.

```js
const assert = require("assert");
const { prixLocation } = require("./prix.js");
assert.strictEqual(prixLocation(20, 3), 60);
assert.strictEqual(prixLocation(20, 0), 0);
assert.strictEqual(prixLocation(20, 2.5), 50);
console.log("Tests OK");
assert.strictEqual(prixLocation(20, 3, 0.25), 45);
assert.throws(() => prixLocation(20, -1), RangeError);
assert.throws(() => prixLocation(20, 1, 1.5), RangeError);
console.log("Tests complémentaires OK");
```

## Partie C

Conflit attendu sur la ligne `id="horaires"` de `index.html` à la seconde fusion. Résolution de référence : garder « de 9 h à 16 h (été) » et supprimer les marqueurs. ​Journal après `git revert` : un commit « Revert "…" » au-dessus du commit annulé.

## Partie D

`git push` rejeté (« rejected … fetch first ») ; `git pull --no-rebase origin main` → conflit sur la ligne du contact ; résolution **concertée**. Point d'attention : `git init --bare -b main` pour que la branche par défaut du dépôt central soit `main`.

## Bilan de compétences

Auto-évaluation ; B1.3 et B1.4 proposées, à valider.
