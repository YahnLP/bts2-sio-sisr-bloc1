# Cours – JavaScript et le DOM

*BTS SIO SISR 2e année – Bloc 1 – S07*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

Le HTML décrit, le CSS met en forme ; **JavaScript** fait **réagir** la page. Il s'exécute **dans le navigateur** de l'utilisateur : filtrer un tableau, vérifier un formulaire, afficher un message sans recharger la page.

---

## 1. Intégrer un script

```html
<script src="salles.js"></script>
```

placé **à la fin du `body`** : la page est alors construite quand le script s'exécute. Le fichier est séparé du HTML (même principe que le CSS). La **console** des outils de développement (F12) permet de tester une ligne et affiche les **erreurs**.

## 2. Variables et types

| Notion | Exemple | Remarque |
|---|---|---|
| Constante | `const nom = "Club photo";` | Ne peut pas être réaffectée : **à privilégier** |
| Variable | `let compteur = 0;` | Peut changer |
| Nombre | `42`, `2.5` | Pas de distinction entier / décimal |
| Texte | `"Gymnase"` | Entre guillemets |
| Booléen | `true`, `false` | Résultat d'une comparaison |
| Tableau | `[200, 40, 25]` | Liste ordonnée |
| Objet | `{ nom: "Gymnase", capacite: 120 }` | Couples clé / valeur |

> [!WARNING]
> Ce qui vient d'un champ de formulaire est **toujours du texte**. `"50" < "6"` est **vrai** (comparaison de textes). Pour comparer des nombres, on convertit : `Number("50")`.

**Opérateurs de comparaison :** utiliser `===` et `!==` (égalité stricte), pas `==`.

## 3. Le DOM

Le navigateur construit en mémoire un **arbre** de la page : le **DOM** (*Document Object Model*). JavaScript le lit et le modifie.

| Besoin | Instruction |
|---|---|
| Trouver un élément par son `id` | `document.getElementById("message")` |
| Trouver plusieurs éléments | `document.querySelectorAll("#tableau-salles tbody tr")` |
| Lire la valeur d'un champ | `champ.value` |
| Lire ou changer un texte | `element.textContent` |
| Ajouter ou retirer une classe CSS | `element.classList.toggle("masque", condition)` |

Modifier le DOM change **immédiatement** l'affichage ; ne pas modifier le HTML d'origine sur le serveur.

## 4. Les événements

Un **événement** est ce qui se passe dans la page : saisie (`input`), clic (`click`), envoi de formulaire (`submit`). On associe une **fonction** à un événement :

```js
champCapacite.addEventListener("input", filtrerSalles);
formulaire.addEventListener("submit", function (evenement) {
  if (erreurs.length > 0) evenement.preventDefault();   // bloque l'envoi
});
```

`preventDefault()` empêche le comportement par défaut (ici, l'envoi du formulaire).

## 5. Valider un formulaire

Contrôler côté navigateur : champs remplis, **format** du courriel, date non passée, fin après début. Message **clair**, écrit en toutes lettres, placé dans la zone `role="status"` (annoncée par les lecteurs d'écran).

```js
if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(courriel)) { erreurs.push("Le courriel n'est pas valide."); }
```

Une **expression régulière** (entre `/…/`) décrit un format de texte. Celle-ci vérifie : du texte, un `@`, du texte, un point, du texte (un contrôle **simple**, pas une preuve que l'adresse existe).

> [!WARNING]
> **La validation dans le navigateur est un confort, pas une sécurité.** L'utilisateur peut désactiver JavaScript, modifier la page ou envoyer une requête sans passer par elle. **Le serveur doit toujours refaire les contrôles** (S09).

## 6. Déboguer

1. Ouvrir la **console** : une erreur indique le fichier, la ligne et la nature du problème (`undefined`, `is not a function`…).
2. Afficher une valeur : `console.log(typeof champ.value, champ.value)`.
3. Utiliser le **débogueur** (points d'arrêt) pour suivre l'exécution pas à pas.
4. **Réduire** le problème : isoler la plus petite portion de code qui échoue.

**Je vérifie.** Pourquoi `Number(ligne.cells[1].textContent)` plutôt que `ligne.cells[1].textContent` seul dans la comparaison de capacités ?

<details markdown="1">
<summary>Voir la réponse</summary>

Le contenu d'une cellule est un **texte** : sans conversion, la comparaison est alphabétique (`"120" < "25"` est vrai). Avec `Number`, elle est numérique.
</details>

## Ce que tu dois retenir de la séance

- Script en fin de `body`, fichier séparé ; **console** et **F12** pour déboguer.
- `const` par défaut, `let` si la valeur change ; **tout ce qui sort d'un champ est du texte**.
- **DOM** : `getElementById`, `querySelectorAll`, `value`, `textContent`, `classList`.
- **Événements** : `addEventListener`, `preventDefault`.
- **La validation côté navigateur n'est pas une sécurité** : le serveur contrôle toujours.
