# Cours – Les outils de gestion de projet

*BTS SIO SISR 2e année – Bloc 1 – S04*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

Un planning dans un fichier que chacun modifie dans son coin devient vite faux. Un **outil de gestion de projet** centralise le **qui fait quoi, pour quand, où en est-on**, rend l'information visible à tous les intéressés et garde la trace des décisions.

---

## 1. Ce que fait un outil de projet

| Fonction | Intérêt |
|---|---|
| **Projets et tâches** | Découpage hiérarchique (projet, lots, tâches) |
| **Dates et dépendances** | Diagramme de Gantt, chemin critique |
| **Équipe et rôles** | Qui est responsable, qui contribue |
| **États et avancement** | Où en est chaque tâche (à faire, en cours, terminé), pourcentage |
| **Jalons** | Dates clés visibles |
| **Suivi et journal** | Commentaires, décisions, documents joints |
| **Liens avec les demandes** | Rattacher un ticket ou une évolution à un projet |
| **Droits d'accès** | Qui voit, qui modifie |
| **Notifications** | Alerte sur échéance, changement d'état |
| **Tableaux de bord** | Avancement, retards, charge |

Des outils très différents existent (outils libres ou en ligne, intégrés à un outil de support). **Le choix** dépend du besoin : taille de l'équipe, lien avec le support, budget, hébergement des données.

## 2. Le module Projets de GLPI

**GLPI** est un outil de gestion des services informatiques (support, parc). Son module **Projets** permet de créer un projet, de le découper en **tâches**, de les **dater**, de leur affecter des **personnes** et de suivre un **pourcentage d'avancement**. L'intérêt pour l'administrateur est de relier le projet aux **tickets** et au **parc** déjà gérés dans le même outil.

> [!NOTE]
> Les intitulés exacts des menus et des champs **dépendent de la version installée** : repère-les sur ton instance. Les notions (projet, tâche, état, équipe, avancement) sont les mêmes d'un outil à l'autre.

## 3. Paramétrer avant d'utiliser

Un outil bien paramétré évite le désordre. On décide :

| Réglage | Question |
|---|---|
| **États** de projet et de tâche | Quels états utilise-t-on (à planifier, en cours, en attente, terminé) ? |
| **Types** | Projet interne, évolution, déploiement ? |
| **Équipe et rôles** | Qui est chef de projet, qui contribue, qui consulte ? |
| **Droits par profil** | Qui peut créer, modifier, clôturer, supprimer ? |
| **Notifications** | Qui est prévenu, de quoi, à quel moment ? |
| **Conventions de saisie** | Nom des tâches, format des dates, quand mettre à jour |

**Moindre privilège** : un contributeur modifie **ses** tâches ; seul le chef de projet change le périmètre ; la direction **consulte**.

## 4. Mesurer l'avancement

Compter les tâches terminées trompe : une tâche de 6 jours pèse plus qu'une de 1 jour. On pondère par la **charge** :

*Avancement du projet = Σ (charge de la tâche × % réalisé) / Σ charges*

**Exemple.** Trois tâches : 10 jours terminée (100 %), 20 jours à 50 %, 10 jours à 0 %. Avancement = (10 × 1 + 20 × 0,5 + 10 × 0) / 40 = 20 / 40 = **50 %**. Compter les tâches donnerait 1 sur 3, soit 33 %.

> [!WARNING]
> Un pourcentage saisi par chacun sans règle donne des chiffres faux (« 90 % depuis trois semaines »). Convention utile : une tâche passe de 0 à 100 % par paliers (0, 25, 50, 75, 100) et **« terminé » signifie livrable validé**.

## 5. Relier le support et le projet

Un projet produit des **demandes** (installer, former, corriger) et reçoit des **incidents** (le serveur de test est tombé). Rattacher ces tickets au projet permet de **voir le coût réel** du projet, de repérer les incidents qui le retardent et de ne rien perdre au passage en exploitation.

## 6. Utiliser les données

Le tableau de bord répond à trois questions : **sommes-nous dans les temps** (écart sur le chemin critique) ? **dans le budget** (charge consommée / prévue) ? **la qualité suit-elle** (anomalies ouvertes) ? Il sert à la **réunion de suivi** : on regarde les écarts, on décide, on note la décision.

## Ce que tu dois retenir de la séance

- Un outil de projet centralise **tâches, dates, équipe, états, avancement et décisions**.
- On **paramètre d'abord** : états, équipe, droits par profil, notifications, conventions.
- Avancement = **Σ (charge × % réalisé) / Σ charges**, pas le nombre de tâches terminées.
- On **relie** tickets et projet ; on regarde délai, budget et qualité.
