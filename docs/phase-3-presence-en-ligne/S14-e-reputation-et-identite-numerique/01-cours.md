# Cours – E-réputation et identité numérique professionnelle

*BTS SIO SISR 2e année – Bloc 1 – S14*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

Un site public n'est qu'une partie de la présence en ligne : les habitants lisent aussi des **avis**, des **commentaires**, des **publications**. L'**e-réputation** est l'image qu'une organisation ou une personne a **sur Internet**. Elle se construit en partie **sans nous**.

---

## 1. D'où vient l'e-réputation ?

| Source | Exemples | Maîtrise |
|---|---|---|
| **Ce qu'on publie** | Site officiel, comptes officiels, communiqués | Totale |
| **Ce que d'autres publient sur nous** | Avis sur les cartes et moteurs de recherche, commentaires, articles, groupes de quartier | Faible : on ne supprime pas, on **répond** |
| **Ce que la machine déduit** | Résultats d'une recherche sur le nom, suggestions de recherche | Indirecte : on agit sur ce qu'on publie |

Un avis négatif n'est pas une attaque : c'est une **information** sur un défaut du service. La réponse compte autant que l'avis.

## 2. Analyser des avis

Quelques indicateurs simples, à suivre dans le temps :

| Indicateur | Calcul | Intérêt |
|---|---|---|
| **Note moyenne** | Somme des notes / nombre d'avis | Image globale |
| **Répartition** | Nombre d'avis par note | Une moyenne de 3,7 peut cacher beaucoup de 5 et quelques 1 |
| **Part d'avis négatifs** | Avis notés 1 ou 2 / total | Signal d'alerte |
| **Thèmes** | Sujets récurrents dans les commentaires | Ce qu'il faut **corriger** |
| **Délai de réponse** | Temps entre l'avis et la réponse | Engagement |

Avec `awk` sur un fichier CSV séparé par des points-virgules : `awk -F';' 'NR>1{s+=$2;n++} END{print s/n}' avis.csv` donne la note moyenne (`NR>1` saute la ligne d'en-tête).

> [!NOTE]
> **Petit échantillon, prudence.** Avec 12 avis, un seul avis change beaucoup la moyenne. On donne toujours le **nombre d'avis** à côté de la note, et on ne tire pas de conclusion forte d'un échantillon réduit.

## 3. Répondre à un avis négatif

Protocole en six étapes :

1. **Lire** et **qualifier** : critique du service, erreur de fait, propos injurieux ?
2. **Vérifier** les faits en interne avant de répondre (journaux, planning, ticket).
3. **Répondre vite** (objectif d'équipe : 2 jours ouvrés) et **poliment**, avec le nom du service, pas celui d'une personne.
4. **Reconnaître** ce qui est fondé, sans se justifier à l'excès ni accuser.
5. **Ne rien divulguer** sur la personne ou sa réservation : une réponse publique est lue par tous. Proposer un **canal privé** (adresse fonctionnelle, téléphone du service).
6. **Corriger** la cause et **suivre** : si le défaut est réel, l'avis est un ticket.

**Ne pas faire :** supprimer ou faire supprimer des avis fondés, répondre à chaud, contre-attaquer, publier sous un faux nom, demander des avis flatteurs à des proches (cela peut constituer une pratique trompeuse, **à vérifier**).

**Propos illicites** (injure, diffamation, données personnelles diffusées) : on **signale** à la plateforme et on **transmet à la direction** ou au service juridique, qui décide des suites. L'informaticien ne qualifie pas juridiquement. Les droits de réponse et d'effacement existent selon les cas (**à vérifier**).

## 4. Une charte pour les comptes officiels

Si la commune publie sur des réseaux sociaux, une **charte** évite les dérives. Elle fixe :

- **Qui** publie (rôles nommés), **qui** valide, **quand** ;
- **Quel ton** (courtois, neutre, vouvoiement) et quels sujets ;
- **Comptes officiels distincts des comptes personnels** ; accès par **mots de passe uniques** et **double authentification**, jamais partagés dans un message ;
- **Données personnelles** : ni nom ni photo d'habitants sans accord écrit ; **images de personnes** avec autorisation ; pas de document interne ;
- **Gestion de crise** : qui est prévenu, qui répond, qui coupe ;
- **Comportement des agents** sur leurs comptes personnels : le devoir de réserve et d'image du service peut s'appliquer (**à vérifier** auprès de la direction).

## 5. La veille de réputation

Une **veille** repose sur des **alertes** (notifications sur le nom de la commune, de la mairie, des salles), consultées à **fréquence fixe** par une personne désignée, avec un **tableau de suivi** (date, source, nature, action, suite). Elle s'inscrit dans la démarche de veille de première année (technologique, juridique, concurrentielle).

## 6. Ton identité numérique professionnelle

Un futur employeur ou client cherche ton nom. Ce qu'il trouve est ton **identité numérique**. Pour un technicien, elle compte dans la **confiance** qu'on lui accorde (accès aux systèmes) :

| Action | Pourquoi |
|---|---|
| **Rechercher son propre nom** régulièrement | Savoir ce qui est visible |
| **Séparer** comptes personnels et professionnels | Éviter les mélanges |
| **Régler la confidentialité** des comptes personnels | Maîtriser l'audience |
| **Soigner** un profil professionnel (formation, compétences, réalisations non confidentielles) | Être trouvé pour de bonnes raisons |
| **Ne jamais publier** de données internes d'une entreprise ou de ses clients | Secret professionnel, charte, confiance |
| **Avoir un portfolio** qui montre le travail (S18) | Preuve de compétence |
| **Protéger** ses comptes (mot de passe unique, double authentification) | Un compte piraté parle à ta place |

**Je vérifie.** Un avis annonce qu'une association « s'est fait voler sa réservation par la mairie ». En vérifiant, tu constates que l'association a annulé elle-même sa réservation. Peux-tu répondre en public en le précisant ?

<details markdown="1">
<summary>Voir la réponse</summary>

Non : donner ces détails publiquement divulgue des informations sur une personne et ressemble à une accusation. On répond **poliment**, on reconnaît la gêne, et on propose un échange **privé** pour regarder ensemble l'historique. On peut aussi en tirer une amélioration (confirmation d'annulation envoyée par courriel).
</details>

## Ce que tu dois retenir de la séance

- L'e-réputation vient de **ce qu'on publie** et de **ce que les autres publient** ; on **répond**, on ne supprime pas.
- Indicateurs : **note moyenne** (avec le nombre d'avis), **répartition**, **part de négatifs**, **thèmes**, **délai de réponse**.
- **Protocole de réponse** : qualifier, vérifier, répondre vite et poliment, **ne rien divulguer**, canal privé, corriger.
- **Charte** des comptes officiels : rôles, ton, mots de passe et double authentification, données personnelles.
- **Identité numérique professionnelle** : se chercher, séparer, protéger, ne jamais publier de données internes.
