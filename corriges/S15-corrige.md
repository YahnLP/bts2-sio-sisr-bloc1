# Corrigé S15 – Auditer et alléger le portail

*Réservé à l'enseignant. `audit.js` **exécuté** avec jsdom ; contrastes, tailles et volumes **recalculés**. Cadre légal à vérifier.*

## Partie A

1. Non : le « ​bouton » est un `div` avec `onclick`, il n'est pas dans l'ordre de tabulation. 2. À 200 %, la page est simple et reste lisible (page courte) : l'observer quand même. 3. Défauts : pas de `lang` ; titre de page « Contact » peu précis ; saut de titre h1 vers h4 ; image sans `alt` ; deux champs sans `label` (placeholder seul) ; ​champ courriel sans type adapté ; `div` en guise de bouton (et sans type d'envoi) ; texte « Réponse sous deux jours ouvrés » en gris clair ; lien « cliquez ici ». 4. `#999999` sur blanc : **2,85:1**, **insuffisant** (minimum 4,5:1).

## Partie B

1. **7 ​problèmes** : langue absente ; image `facade.jpg` sans `alt` ; champs `nom` et `courriel` sans étiquette ; saut de titre h1 puis h4 ; lien « cliquez ici » ; `<div>` cliquable non utilisable au clavier.
2. Principes : langue = **compréhensible** ; alt = **perceptible** ; étiquettes = **compréhensible** (et robuste) ; saut de titre = **robuste** / compréhensible ; lien vague = **compréhensible** ; div cliquable = **utilisable**.
3. Non vu : le **contraste**, car il ​demande de résoudre les styles et les couleurs ; l'outil ne contrôle pas non plus la pertinence du texte alternatif, ni le `title` trop vague.
4. Page corrigée de référence (l'outil répond « Aucun problème ​détecté ») :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Contact – Mairie de Bellevigne</title>
  <style>
    body { font-family: sans-serif; margin: 2rem; }
    .discret { color: #595959; }
    .bouton { background: #1f4e79; color: #ffffff; padding: 0.5rem 1rem; }
  </style>
</head>
<body>
  <h1>Mairie de Bellevigne</h1>
  <h2>Contacter l'accueil</h2>
  <img src="facade.jpg" alt="Façade de la mairie de Bellevigne">
  <p class="discret">Réponse sous deux jours ouvrés.</p>
  <form>
    <label for="nom">Votre nom</label>
    <input type="text" id="nom" name="nom">
    <label for="courriel">Votre courriel</label>
    <input type="email" id="courriel" name="courriel" autocomplete="email">
    <button type="submit" class="bouton">Envoyer</button>
  </form>
  <p>Consultez les <a href="horaires.html">horaires d'ouverture de la mairie</a>.</p>
</body>
</html>
```
5. `salles.html` : aucun problème détecté par ces cinq contrôles. Insuffisant pour affirmer la conformité (clavier, zoom, lecteur d'écran restent à tester).

## Partie C

Valeurs : `#999999` / blanc = **2,85:1** (non) ; `#595959` / blanc = **7,0:1** (oui) ; `#767676` / blanc = **4,54:1** (oui, de justesse) ; blanc / `#1f4e79` = **8,66:1** (oui). `#767676` est ​limite : une petite taille, un écran peu lumineux ou un reflet font perdre le confort ; on garde une marge.

```python
def lum(h):
    c = [int(h[i:i+2], 16) / 255 for i in (0, 2, 4)]
    c = [x / 12.92 if x <= 0.03928 else ((x + 0.055) / 1.055) ** 2.4 for x in c]
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]

def contraste(a, b):
    la, lb = sorted((lum(a), lum(b)), reverse=True)
    return (la + 0.05) / (lb + 0.05)
```

## Partie D

1. `salles.html` 2 980 / 1 051 ; `style.css` 1 310 / 601 ; `salles.js` 1 971 / 786 ; **total 6 261 / 2 438** (compression `gzip -9 -n`).
2. Économie : (6 261 − 2 438) / 6 261 = **61,1 %** (plus de la moitié).
3. **3 requêtes** (page, feuille de style, script).
4. 381 × 52 = **19 812** vues par an. Compressé : 19 812 × 2 438 = 48 301 656 octets, soit environ **48 Mo**. Avec une image de 1,5 Mo : 19 812 × 1 500 000 = 29 718 000 000 octets, soit environ **29,7 Go** (hors page, qui s'y ajoute). Rapport ≈ **615**. Extrapolation grossière (pas de ​cache, trafic constant).
5. Exemples : regrouper ou intégrer la feuille de style pour supprimer une requête ; ajouter l'en-tête de cache sur le CSS et le JS ; ne pas ​ajouter de bibliothèque ni de police externe ; créer un `favicon` pour supprimer les 404 ; minifier le code.

## Partie E

Tableau RGESN : contrôler des mesures **concrètes et vérifiables** (par exemple Stratégie : besoin validé par la direction ; Frontend : budget de poids par page et ​mesure à chaque évolution ; Hébergement : offre dimensionnée et localisée ; Contenus : images dimensionnées ; UX/UI : pas de lecture automatique). Brouillon de déclaration : état **non évalué**, adresse de signalement, plan d'amélioration daté ; **aucun taux** ​inventé.

## Bilan de compétences

Auto-évaluation ; B1.3 proposée, à valider.
