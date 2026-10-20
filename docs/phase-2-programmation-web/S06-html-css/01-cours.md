# Cours – HTML et CSS

*BTS SIO SISR 2e année – Bloc 1 – S06*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

Dans la phase 1, le portail de réservation a été **cadré**. La phase 2 le **construit**. Un administrateur n'est pas toujours développeur, mais il doit pouvoir **lire**, **corriger** et **faire évoluer** un site (référentiel : « participer à l'évolution d'un site web »), et comprendre ce que le serveur lui envoie.

---

## 1. Ce que reçoit le navigateur

Une page web est un ensemble de **fichiers texte** envoyés par un serveur web (HTTP, déjà vu) : un fichier **HTML** (le contenu et sa structure), un fichier **CSS** (la présentation), éventuellement un fichier **JavaScript** (le comportement, S07). Le navigateur les lit et construit la page.

| Langage | Rôle | Exemple |
|---|---|---|
| **HTML** | Dire **ce que c'est** : titre, tableau, formulaire | `<h1>Salles communales</h1>` |
| **CSS** | Dire **à quoi cela ressemble** | `h1 { color: #1f3a5f; }` |
| **JavaScript** | Dire **ce que cela fait** | Filtrer, valider, réagir |

> [!NOTE]
> Séparer **contenu**, **forme** et **comportement** permet de changer l'un sans casser les autres : refaire le graphisme sans toucher au texte, par exemple.

## 2. HTML : structurer

Un document HTML est un arbre de **balises** (éléments) qui s'imbriquent :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Titre dans l'onglet</title>
</head>
<body>
  <h1>Titre principal</h1>
  <p>Un paragraphe avec un <a href="salles.html">lien</a>.</p>
</body>
</html>
```

- `lang="fr"` indique la langue (lecteurs d'écran, correcteur) ; `charset="utf-8"` évite les accents illisibles.
- **Un seul `h1`** par page ; les titres suivent une **hiérarchie** (h2 sous h1, h3 sous h2) sans saut.

### Les balises sémantiques

Une balise **sémantique** décrit le **rôle** d'un bloc, pas seulement son aspect :

| Balise | Rôle |
|---|---|
| `header`, `footer` | En-tête, pied de page |
| `nav` | Navigation principale |
| `main` | Contenu principal (un seul par page) |
| `section`, `article` | Partie thématique, contenu autonome |
| `ul`, `ol`, `li` | Listes |

Les moteurs de recherche et les **lecteurs d'écran** s'appuient sur cette structure : une page faite de `div` anonymes est difficile à parcourir pour un utilisateur aveugle.

### Tableaux et formulaires

Un **tableau** sert aux données (pas à la mise en page) : `caption` (titre), `thead`/`tbody`, et `th scope="col"` pour les en-têtes.

Un **formulaire** envoie des données au serveur : `form` (avec `action` et `method`), des champs `input` de **types** adaptés (`text`, `email`, `date`, `time`, `number`), `select`, `button`. **Chaque champ a un `label`** relié par `for` et `id` : le clic sur le libellé active le champ et le lecteur d'écran l'annonce.

```html
<p><label for="courriel">Courriel</label>
   <input type="email" id="courriel" name="courriel" required></p>
```

`name` est ce qui part au serveur ; `id` sert à relier le libellé et à cibler le champ en CSS ou JavaScript. `required` demande au navigateur de vérifier que le champ est rempli, **mais ne protège pas le serveur** (S09).

## 3. CSS : mettre en forme

Une règle CSS associe un **sélecteur** à des **déclarations** :

```css
th { background: #e8eef5; }       /* toutes les cellules d'en-tête */
.erreur { color: #b00020; }       /* éléments de classe « erreur » */
#message { margin-top: 1rem; }    /* l'élément d'id « message » */
```

- **Modèle de boîte** : chaque élément est une boîte (contenu, `padding`, `border`, `margin`). `box-sizing: border-box` fait compter marge intérieure et bordure dans la largeur.
- **Mise en page** : `display: flex` aligne des éléments sur une ligne ou une colonne ; `display: grid` fait des grilles.
- **Variables** : `:root { --accent: #0b5cad; }` puis `color: var(--accent);` : on change une couleur à un seul endroit.
- **Unités relatives** (`rem`) : respectent la taille de texte choisie par l'utilisateur.

### S'adapter à l'écran

La balise `<meta name="viewport" content="width=device-width, initial-scale=1">` fait utiliser la largeur réelle de l'écran. Une **media query** change la mise en forme sous une largeur donnée :

```css
@media (max-width: 600px) {
  nav ul { flex-direction: column; }
}
```

## 4. L'accessibilité de base

Un site doit être utilisable par tous : personnes aveugles, malvoyantes, ne pouvant pas se servir d'une souris. Cinq réflexes :

1. **Structure** sémantique et titres ordonnés ;
2. **Libellés** reliés aux champs ; **texte alternatif** (`alt`) sur les images porteuses de sens ;
3. **Contraste** suffisant : au moins **4,5:1** pour le texte courant (valeur des règles d'accessibilité courantes, WCAG niveau AA) ;
4. **Navigation au clavier** : tout est atteignable avec Tab, le **focus** est visible ;
5. **Ne pas transmettre l'information par la seule couleur** (une erreur est aussi écrite).

Le **contraste** se calcule à partir de la luminance des deux couleurs ; on l'obtient avec les outils de développement ou un vérificateur. Exemple : texte blanc sur fond `#1f3a5f` : rapport **11,48:1** (conforme) ; gris clair `#aaaaaa` sur blanc : environ 2,3:1 (insuffisant).

**Je vérifie.** Un bouton blanc sur fond jaune pâle est-il acceptable parce qu'on le lit bien sur son écran ?

<details markdown="1">
<summary>Voir la réponse</summary>

Non : la lisibilité dépend de l'écran, de la luminosité et de la vue de chacun. On **mesure** le contraste ; sous 4,5:1 pour du texte courant, on change les couleurs.
</details>

## 5. Les outils de développement

Dans le navigateur (touche F12) : l'**inspecteur** affiche l'arbre HTML et les règles CSS appliquées (et permet de les modifier à chaud) ; le **mode adaptatif** simule un écran de téléphone ; la **console** affiche les erreurs ; l'**onglet Réseau** montre ce que le serveur envoie. C'est l'outil de diagnostic de base : *« la page est cassée »* se transforme en *« telle règle ne s'applique pas »*.

## Ce que tu dois retenir de la séance

- **HTML** = structure et sens ; **CSS** = présentation ; **JavaScript** = comportement.
- Balises **sémantiques**, **un `h1`**, titres hiérarchisés, `lang` et `charset`.
- **Tableau** pour les données, **formulaire** avec `label`/`for`, types de champs adaptés.
- CSS : sélecteurs, boîte, `flex`, **variables**, **media query**.
- Accessibilité : contraste **≥ 4,5:1**, clavier, focus visible, pas de couleur seule.
- Les **outils de développement** (F12) servent à comprendre et déboguer.
