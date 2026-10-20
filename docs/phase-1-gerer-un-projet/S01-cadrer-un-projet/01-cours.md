# Cours – Cadrer un projet

*BTS SIO SISR 2e année – Bloc 1 – S01*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

Un administrateur ne reçoit presque jamais « un serveur à installer » : on lui confie un **besoin**, avec des contraintes, des interlocuteurs qui ne pensent pas tous la même chose et des risques qu'il faut voir **avant** de commencer. Le **cadrage** est l'étape qui transforme cette demande en projet réalisable.

---

## 1. Qu'est-ce qu'un projet ?

Un **projet** est un ensemble d'activités **uniques**, **temporaires** (début et fin), orientées vers un **résultat précis**. Une tâche répétitive (appliquer les mises à jour chaque mois) n'est pas un projet ; déployer un nouveau service l'est.

Trois contraintes se tiennent mutuellement :

| Contrainte | Question | Exemple |
|---|---|---|
| **Coût** | Quel budget, quelle charge de travail ? | 9 000 €, 35 jours de travail |
| **Délai** | Pour quand ? | Ouverture dans quatre mois |
| **Qualité** | Quel résultat, avec quel niveau d'exigence ? | Zéro doublon, accessible à tous |

> [!NOTE]
> Si l'on veut plus de qualité sans changer le budget, il faut du temps ; si l'on réduit le délai, il faut du budget ou moins de fonctions. **On ne peut pas tout garder.** Le cadrage consiste à dire lesquelles de ces contraintes sont fixes et lesquelles sont négociables.

---

## 2. Les parties prenantes

Une **partie prenante** est une personne ou un groupe concerné par le projet ou capable de l'influencer : commanditaire (qui finance et décide), utilisateurs, direction, prestataires, service informatique, parfois des tiers (associations, usagers).

On les classe selon leur **pouvoir** (capacité à décider ou bloquer) et leur **intérêt** (à quel point le projet les concerne).

| | Intérêt faible | Intérêt fort |
|---|---|---|
| **Pouvoir fort** | À tenir informé | **À associer étroitement** |
| **Pouvoir faible** | À surveiller | À informer et écouter |

Oublier une partie prenante est une cause fréquente d'échec : l'agent d'accueil, qui utilisera l'outil tous les jours, est rarement consulté, alors que c'est lui qui le fera réussir ou non.

---

## 3. Le cadrage

Le cadrage répond à six questions :

| Rubrique | Question | Qualité attendue |
|---|---|---|
| **Contexte et besoin** | Pourquoi ce projet ? | Un problème constaté, chiffré si possible |
| **Objectifs** | Qu'est-ce qui sera vrai à la fin ? | **SMART** (voir ci-dessous) |
| **Périmètre** | Ce qui est inclus, ce qui ne l'est pas | Une liste « dans » et une liste « hors » |
| **Livrables** | Que remet-on ? | Un document, un service, une formation |
| **Contraintes** | Budget, délai, droit, technique | Chiffrées |
| **Hypothèses** | Qu'avons-nous supposé vrai ? | Écrites, donc vérifiables |

Un objectif est **SMART** s'il est **S**pécifique, **M**esurable, **A**tteignable, **R**éaliste et situé dans le **T**emps. « Améliorer les réservations » n'est pas un objectif ; « supprimer les doublons de réservation (aujourd'hui deux à trois par mois) dans les trois mois suivant l'ouverture » l'est.

**Je vérifie.** « Rendre le site plus rapide » est-il un objectif SMART ? Comment le reformuler ?

<details markdown="1">
<summary>Voir la réponse</summary>

Non : ni mesurable ni daté. Exemple : « Afficher la page d'accueil en moins de 2 secondes pour 95 % des visites, mesuré sur le mois suivant la mise en service. »
</details>

### Le périmètre

Écrire ce qui est **hors périmètre** protège autant que d'écrire ce qui est inclus : « le paiement en ligne des locations n'est pas dans ce projet » évite qu'il s'ajoute en cours de route (c'est la **dérive du périmètre**).

---

## 4. Les risques du projet

Un **risque** est un événement incertain qui, s'il se produit, a un effet sur le coût, le délai ou la qualité. On le décrit par sa **cause**, l'**événement** et la **conséquence**, puis on le cote :

*Criticité = probabilité × gravité* (chacune notée de 1 à 3, soit une criticité de 1 à 9).

| Criticité | Réaction |
|---|---|
| 1 à 2 | On **accepte** et on surveille |
| 3 à 4 | On **réduit** : une action préventive |
| 6 à 9 | On **traite en priorité** : éviter, réduire fortement, ou transférer (contrat, assurance) |

Pour chaque risque important, on prévoit une **action préventive** (avant) et un **plan B** (si le risque arrive).

**Exemple.** « Le prestataire d'hébergement n'est pas prêt à la date prévue (cause) : le portail ne peut pas ouvrir (événement) ; l'ouverture est repoussée (conséquence). » Probabilité 2, gravité 3, criticité **6**. Action : réserver l'hébergement dès la signature ; plan B : héberger temporairement sur le serveur de test.

---

## 5. La fiche de cadrage

Les six rubriques du paragraphe 3, plus les parties prenantes et les risques principaux, tiennent sur **une page**. Elle est relue et **validée par le commanditaire** : c'est le document auquel on se réfère quand une demande en cours de route sort du périmètre.

## Ce que tu dois retenir de la séance

- Un projet est **unique, limité dans le temps et orienté résultat** ; coût, délai et qualité se compensent.
- Identifier les **parties prenantes** (pouvoir, intérêt), y compris les utilisateurs de terrain.
- Un objectif est **SMART** ; le **hors périmètre** est écrit.
- **Criticité = probabilité × gravité** ; action préventive et plan B pour les risques élevés.
- La **fiche de cadrage** d'une page est validée par le commanditaire.
