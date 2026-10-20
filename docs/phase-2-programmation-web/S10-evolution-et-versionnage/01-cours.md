# Cours – Faire évoluer un site : lire, corriger, versionner

*BTS SIO SISR 2e année – Bloc 1 – S10*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

Un site vit : on corrige des défauts, on ajoute des fonctions, on change des textes. Souvent, l'administrateur ne l'a **pas écrit** : il doit le comprendre, le modifier **sans casser l'existant** et pouvoir **revenir en arrière**. C'est l'objet de cette séance ; la démarche est celle de la **gestion des changements** vue en première année.

---

## 1. Lire un code qui n'est pas le sien

1. **Regarder la structure** : quels fichiers, quel point d'entrée (page d'accueil, script principal) ?
2. **Lire les tests** quand ils existent : ils disent ce que le code **doit** faire.
3. **Suivre l'historique** : `git log` montre qui a changé quoi et pourquoi.
4. **Exécuter** avant de modifier : lancer les tests, afficher la page.
5. **Modifier peu, vérifier souvent** : un changement à la fois.

> [!NOTE]
> Avant de toucher à un site **en production**, on travaille sur une **copie** (environnement de test) et on prévoit le **retour arrière**. Une modification directement sur le serveur de production, sans trace, est une cause fréquente d'incident.

## 2. Pourquoi versionner

Un **système de gestion de versions** (ici **Git**) enregistre l'historique d'un ensemble de fichiers :

| Besoin | Ce que fait Git |
|---|---|
| Savoir qui a changé quoi, quand, pourquoi | Un **commit** = une photo des fichiers + un message + un auteur + une date |
| Revenir à une version qui marchait | Retrouver ou **annuler** un commit |
| Travailler à plusieurs sans s'écraser | **Branches** et **fusions** |
| Tester sans risque | Une branche pour chaque demande |

Un **dépôt** (*repository*) contient les fichiers et tout l'historique.

## 3. Les opérations de base

| Action | Commande |
|---|---|
| Créer un dépôt | `git init` |
| Voir l'état | `git status` |
| Voir les modifications | `git diff` |
| Préparer puis enregistrer | `git add fichier` puis `git commit -m "message"` |
| Voir l'historique | `git log --oneline --graph --all` |
| Créer et changer de branche | `git switch -c nom` ; `git switch nom` |
| Fusionner | `git merge nom` |
| Étiqueter une version | `git tag v1.1` |
| Annuler un commit (en gardant l'historique) | `git revert commit` |

**Un bon message de commit** dit **ce qui change et pourquoi**, au présent ou à l'infinitif : « Refuser une durée négative », pas « modifs » ni « fix ».

**Ce qu'on ne met pas dans un dépôt :** mots de passe, clés, fichiers générés, données personnelles. Le fichier `.gitignore` liste les fichiers exclus. Un secret **déjà** commité reste dans l'historique : il faut le **changer**, pas seulement le supprimer.

## 4. Les branches : une demande, une branche

```
main ──●────●──────────●── (version stable)
        \          /
         ●── ● ── ●   branche « reduction-association »
```

On crée une branche par **demande** (défaut, évolution), on y fait ses commits, on **teste**, puis on **fusionne** dans `main`. Si la demande est abandonnée, on supprime la branche sans avoir rien cassé.

Règle d'équipe : **`main` contient toujours une version qui marche** (les tests passent).

## 5. Les conflits

Deux branches modifient **la même ligne** : Git ne sait pas laquelle garder. Il écrit **les deux versions** dans le fichier avec des marqueurs :

```
<<<<<<< HEAD
  Ouverture : de 8 h 30 à 17 h 30.
=======
  Ouverture : de 9 h à 16 h (été).
>>>>>>> ete
```

Résoudre un conflit, c'est **choisir ou combiner** les deux versions à la main, **supprimer les marqueurs**, vérifier que le résultat est correct, puis faire `git add` et un commit. Un conflit n'est pas une erreur : c'est Git qui demande **un avis humain**. En parler avec l'auteur de l'autre modification évite de supprimer son travail.

## 6. Collaborer : le dépôt central

Plusieurs personnes travaillent chacune sur **un clone** du dépôt, et échangent par un **dépôt distant** (`origin`), hébergé sur un serveur ou une forge :

- `git clone adresse` : copier le dépôt ;
- `git pull` : récupérer et fusionner le travail des autres ;
- `git push` : publier ses commits.

Si quelqu'un a publié avant vous, `git push` est **refusé** (« rejected, fetch first ») : on fait d'abord `git pull`, on résout les éventuels conflits, puis on republie. Sur une forge, on passe souvent par une **demande de fusion** (*pull request*, *merge request*) relue par un collègue.

## 7. Versions, déploiement et retour arrière

- Une **étiquette** (`v1.1`) marque la version mise en production.
- **Déployer** : récupérer exactement l'étiquette sur le serveur.
- **Revenir en arrière** : `git revert` annule une modification **en créant un nouveau commit** (l'historique est conservé) ; c'est la méthode à employer pour un code déjà publié. On évite de réécrire l'historique partagé.
- On **documente** : un journal des modifications (« 1.1 : correction de la durée négative, tarif d'association »).

**Je vérifie.** Un collègue a publié un commit qui casse le site. Tu dois rétablir le service rapidement et sans effacer l'historique. Quelle commande, et pourquoi pas une suppression ?

<details markdown="1">
<summary>Voir la réponse</summary>

`git revert <commit>` : annule l'effet du commit en créant un **nouveau** commit ; le travail reste retrouvable et le dépôt de chacun reste cohérent. Supprimer le commit réécrirait l'historique que les autres ont déjà récupéré.
</details>

## Ce que tu dois retenir de la séance

- **Lire** avant de modifier : structure, tests, historique ; on **exécute** d'abord.
- **Git** : commit (message utile), **une branche par demande**, **`main` toujours stable**, tests avant fusion.
- **Conflit** : deux modifications de la même ligne ; on résout à la main, on vérifie, on valide.
- **Dépôt central** : `clone`, `pull`, `push` ; `push` refusé ⇒ `pull` d'abord.
- **Étiquettes** pour les versions ; **`git revert`** pour revenir en arrière sans casser l'historique.
- **Pas de secrets** dans un dépôt.
