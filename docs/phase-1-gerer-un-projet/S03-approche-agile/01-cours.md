# Cours – L'approche agile et Scrum

*BTS SIO SISR 2e année – Bloc 1 – S03*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

L'approche prédictive (S02) suppose que le besoin est connu et stable. Quand il est **flou ou changeant** (un site, un nouvel outil dont les utilisateurs découvriront l'usage), planifier tout dès le départ conduit souvent à livrer **tard** quelque chose qui ne convient plus. L'**approche agile** livre **par petites étapes** utilisables et s'adapte aux retours.

---

## 1. Les principes

Les valeurs agiles privilégient : les **personnes et les échanges** plutôt que les procédures ; un **produit qui fonctionne** plutôt qu'une documentation exhaustive ; la **collaboration avec le client** plutôt que la négociation contractuelle ; l'**adaptation au changement** plutôt que le suivi d'un plan. Les éléments de droite comptent, ceux de gauche comptent **davantage**.

| | Prédictif | Agile |
|---|---|---|
| Besoin | Fixé au départ | Précisé au fil des livraisons |
| Plan | Complet, suivi | Revu à chaque cycle |
| Livraison | À la fin | Régulière (tous les sprints) |
| Changement | Coûteux, géré par exception | Attendu, intégré |
| Client | Au début et à la recette | Présent tout au long |
| Adapté à | Besoin stable, date imposée | Besoin évolutif, résultat à découvrir |

> [!NOTE]
> Ce n'est pas un choix idéologique : un projet réel **mêle** souvent les deux (un cadre prédictif de budget et de date, une réalisation agile).

---

## 2. Scrum

**Scrum** est le cadre agile le plus répandu. Le travail est découpé en **sprints** : périodes **courtes et de durée fixe** (une à quatre semaines) à la fin desquelles on livre un **incrément** utilisable.

### Les rôles

| Rôle | Mission |
|---|---|
| **Responsable du produit** (*product owner*) | Représente le client ; décide de l'ordre des priorités ; tient le carnet de produit |
| **Équipe de développement** | Réalise l'incrément ; s'organise elle-même |
| **Animateur Scrum** (*scrum master*) | Veille au respect du cadre ; lève les obstacles |

### Les événements

| Événement | Quand | Contenu |
|---|---|---|
| **Planification du sprint** | Début du sprint | Choisir ce qu'on s'engage à livrer |
| **Mêlée quotidienne** | Chaque jour, 15 minutes | Fait hier, prévu aujourd'hui, obstacles |
| **Revue de sprint** | Fin du sprint | Montrer l'incrément, recueillir les retours |
| **Rétrospective** | Après la revue | Ce qui marche, ce qui bloque, une amélioration |

### Les documents

- **Carnet de produit** : liste **ordonnée** de tout ce qu'on veut (fonctions, corrections), qui évolue.
- **Carnet de sprint** : ce qui est retenu pour le sprint en cours.
- **Incrément** : le résultat utilisable à la fin du sprint.

---

## 3. Écrire les besoins : récits utilisateurs

Un **récit utilisateur** décrit un besoin du point de vue de celui qui s'en sert :

> *En tant que* **présidente d'association**, *je veux* **voir les créneaux libres d'une salle**, *afin de* **réserver sans téléphoner**.

On lui ajoute des **critères d'acceptation** : des conditions vérifiables, qui disent quand le récit est terminé.

> - la liste affiche pour chaque salle les créneaux des 30 prochains jours ;
> - un créneau déjà réservé n'est pas proposé ;
> - la page s'affiche en moins de 3 secondes.

## 4. Estimer, prioriser, planifier

- **Estimation en points** : on évalue l'**effort relatif** (suite 1, 2, 3, 5, 8, 13) plutôt qu'une durée. Un récit à 5 points demande environ deux fois et demie l'effort d'un récit à 2.
- **Priorisation** : méthode **MoSCoW** : *Must* (indispensable), *Should* (important), *Could* (souhaitable), *Won't* (pas cette fois).
- **Vélocité** : nombre moyen de points terminés **par sprint**. Elle se mesure, elle ne se décrète pas. Nombre de sprints ≈ points restants / vélocité, arrondi **à l'entier supérieur**.

**Je vérifie.** Un carnet de 34 points, une vélocité de 10 : combien de sprints ? Et si chaque sprint dure 3 semaines ?

<details markdown="1">
<summary>Voir la réponse</summary>

34 / 10 = 3,4 donc **4 sprints**, soit 4 × 3 = **12 semaines**.
</details>

### Le tableau Kanban

Le **Kanban** affiche les tâches en colonnes : *À faire*, *En cours*, *À valider*, *Terminé*. Il rend le travail visible et on limite le nombre de tâches **en cours** pour éviter de tout commencer sans rien finir. Il est utilisé seul ou avec Scrum, notamment pour le **support et l'exploitation**, où les demandes arrivent en continu.

## 5. Les limites

L'agile demande un client **disponible**, une équipe **stable** et un budget qui accepte que le périmètre précis ne soit connu qu'en cours de route. Sans cela, on obtient du désordre au lieu de la souplesse.

## Ce que tu dois retenir de la séance

- **Agile** : livrer par **sprints**, adapter le besoin aux retours ; **prédictif** : tout planifier au départ.
- **Scrum** : trois rôles, quatre événements, un carnet de produit ordonné.
- **Récit utilisateur** + **critères d'acceptation** ; **points**, **MoSCoW**, **vélocité**.
- Nombre de sprints = points / vélocité, arrondi **au-dessus**.
- **Kanban** : visualiser et limiter le travail en cours.
