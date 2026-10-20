#!/bin/sh
# Crée un dépôt Git d'exercice : un petit site avec un défaut et deux demandes d'évolution.
set -e
DEPOT="${1:-site-bellevigne}"
rm -rf "$DEPOT" && mkdir "$DEPOT" && cd "$DEPOT"
git init -q -b main
git config user.name "Étudiant Test"
git config user.email "etudiant@example.org"

cat > index.html <<'HTML'
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"><title>Mairie de Bellevigne</title></head>
<body>
  <h1>Mairie de Bellevigne</h1>
  <p id="horaires">Ouverture : du lundi au vendredi, de 9 h à 17 h.</p>
  <p id="contact">Contact : accueil@example.org</p>
</body>
</html>
HTML

cat > prix.js <<'JS'
// Tarif de location d'une salle : prix horaire par salle
function prixLocation(tarifHoraire, heures) {
  return tarifHoraire * heures;
}
module.exports = { prixLocation };
JS

cat > tests.js <<'JS'
const assert = require("assert");
const { prixLocation } = require("./prix.js");
assert.strictEqual(prixLocation(20, 3), 60);
assert.strictEqual(prixLocation(20, 0), 0);
assert.strictEqual(prixLocation(20, 2.5), 50);
console.log("Tests OK");
JS

printf 'node_modules/\n*.log\n' > .gitignore
git add . && git commit -q -m "Version initiale du site"
echo "Dépôt créé dans $(pwd)"
