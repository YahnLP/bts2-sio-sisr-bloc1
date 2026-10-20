# Aide-mémoire – JavaScript et DOM

*BTS SIO SISR 2e année – Bloc 1 – S07*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Bases

`const` (par défaut) · `let` · types : nombre, texte, booléen, tableau, objet · `===` (égalité stricte) · **un champ donne du texte** : `Number(...)`.

## DOM

`document.getElementById("id")` · `document.querySelectorAll("sélecteur")` · `.value` · `.textContent` · `.classList.toggle("classe", condition)`.

## Événements

`element.addEventListener("input" | "click" | "submit", fonction)` · `evenement.preventDefault()`.

## Débogage

Console (F12) · `console.log(...)` · points d'arrêt · isoler le problème.

## Règle d'or

Validation côté navigateur = **confort**. Le **serveur** contrôle toujours.
