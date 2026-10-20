# Cours – Portfolio et veille

*BTS SIO SISR 2e année – Bloc 1 – S18*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

Deux outils de ton développement professionnel (B1.6) : le **portfolio**, qui **prouve** ce que tu sais faire, et la **veille**, qui t'aide à **rester à jour**. L'un regarde en arrière, l'autre en avant.

> [!WARNING]
> Le **format officiel** du dossier numérique, le **modèle du tableau de synthèse** et les règles de conformité sont fixés par le texte du diplôme et la **circulaire d'organisation de la session**. Relis-les : ce cours donne la méthode, il ne remplace pas la circulaire.

---

## 1. Le portfolio, c'est quoi ?

Le **portfolio** (ou dossier numérique) rassemble tes **réalisations professionnelles** et les **preuves** qui les accompagnent, pour montrer comment tu as acquis les compétences du bloc 1. Il sert de **support à l'oral** de l'épreuve E5 (S19).

| Élément | Rôle |
|---|---|
| **Page d'accueil** | Qui tu es, ton parcours en quelques lignes, comment naviguer |
| **Tableau de synthèse** | Liste des réalisations avec les compétences couvertes (suivre le modèle officiel) |
| **Fiches de réalisation** | Une par réalisation : contexte, mission, ce que **tu** as fait, compétences, résultat, retour, preuves |
| **Preuves** | Captures datées, tickets, documents, schémas, scripts, rapports |
| **Attestations** | Documents de stage ou d'entreprise, selon ce que demande la circulaire |

**Qualité d'une réalisation** : réelle (environnement conforme à l'annexe II.E), **personnelle** (on voit ta part), **vérifiable** (preuves), **claire** (un lecteur extérieur comprend en deux minutes).

## 2. Choisir et présenter les preuves

| Preuve | Bon réflexe |
|---|---|
| **Capture d'écran** | Datée, cadrée sur ce qui prouve, légendée |
| **Ticket** | Numéro, dates, ton intervention visible |
| **Script ou configuration** | Extrait commenté, **sans secret** |
| **Schéma** | Lisible, légendé, noms d'hôtes clairs |
| **Résultat de test** | Commande, sortie, interprétation |

**Confidentialité.** Un portfolio est un document que d'autres liront. **Anonymise** : noms de personnes, adresses IP réelles, identifiants, mots de passe, noms de clients, données personnelles. **Demande l'accord** de ton tuteur avant d'utiliser un élément issu de l'entreprise. Un secret ou une donnée personnelle publiés par erreur sont une faute professionnelle (voir la protection des données, S12).

## 3. Rendre le dossier accessible et propre

- **Accessibilité** (S15) : textes alternatifs, titres hiérarchisés, contrastes, ordre de lecture ; le candidat est **responsable** de l'accessibilité de son portfolio le jour de l'épreuve.
- **Format** : le jury doit pouvoir **ouvrir** le dossier sans manipulation compliquée ; prévois un format de secours (copie locale).
- **Sauvegardes** : au moins deux copies, à deux endroits.
- **Hébergement** : si le portfolio est en ligne, il est **protégé** ou ne contient rien de confidentiel ; un site public ne doit jamais exposer de données d'organisation.
- **Cohérence** : mêmes intitulés entre le tableau de synthèse, les fiches et les preuves.

## 4. La veille

Une **veille** est une activité **organisée** de collecte, de tri et d'exploitation d'informations utiles. Elle sert à connaître les **vulnérabilités**, les **évolutions** d'outils, les **règles** (juridiques, RGPD) et les **pratiques**.

| Étape | Question | Exemple |
|---|---|---|
| **Cibler** | Sur quoi veille-t-on ? | Sécurité des accès à distance, mobiles, certificats |
| **Choisir les sources** | Où trouver de l'information fiable ? | Bulletins d'alerte officiels, sites d'éditeurs, lettres d'information, blogs spécialisés |
| **Collecter** | Comment ? | **Flux RSS**, alertes par courriel, abonnements |
| **Trier** | Qu'est-ce qui m'est utile ? | Mots-clés, catégories |
| **Exploiter** | Qu'en fait-on ? | Note de synthèse, alerte à l'équipe, mise à jour d'un document |
| **Diffuser** | À qui ? | Équipe, tuteur, portfolio |

**Un flux RSS** est un fichier XML où un site publie la liste de ses derniers articles (titre, lien, date, catégorie). Un lecteur de flux regroupe plusieurs sources au même endroit. Comme c'est du XML, on peut l'interroger avec `xmllint --xpath`.

**Fréquence réaliste** : trente minutes par semaine, à heure fixe, valent mieux qu'une heure certains jours et rien les autres.

## 5. Évaluer une source

Tout ce qui est publié n'est pas fiable. Quatre questions :

| Critère | Question |
|---|---|
| **Autorité** | Qui écrit ? A-t-il compétence et responsabilité sur le sujet ? |
| **Indépendance** | Y a-t-il un intérêt commercial ? (un éditeur parle de son produit) |
| **Actualité** | La date est-elle récente ? Le sujet évolue-t-il vite ? |
| **Vérifiabilité** | Les affirmations sont-elles sourcées et recoupées avec une autre source ? |

On **recoupe** toute information importante avec au moins une **seconde source indépendante** avant d'agir. Un article promotionnel n'est pas inutile, mais il ne sert pas de preuve.

## 6. La fiche de veille

| Date | Source | Sujet | Fiabilité | Utilité pour nous | Action | Suite |
|---|---|---|---|---|---|---|
| 05/03 | Bulletin Sécurité | Erreurs de configuration d'un profil mobile | Bonne (recoupée) | Notre politique de mobiles | Relire la procédure de S16 | Revue vendredi |

La veille ne vaut que si elle **produit une action** : mise à jour d'une procédure, information de l'équipe, correctif.

**Je vérifie.** Un article d'un éditeur annonce que son produit « est la meilleure solution du marché ». Peut-on s'en servir pour justifier le choix de ce produit dans un dossier ?

<details markdown="1">
<summary>Voir la réponse</summary>

Non, pas seul : la source n'est pas indépendante. On le recoupe avec des avis neutres, des tests, un essai en laboratoire, et on compare avec d'autres produits selon des critères écrits.
</details>

## Ce que tu dois retenir de la séance

- Le **portfolio** prouve : réalisations réelles, personnelles, vérifiables, **anonymisées**, accessibles ; modèle officiel du tableau de synthèse.
- La **veille** est organisée : cibler, sources, collecte (RSS), tri, exploitation, diffusion ; **trente minutes par semaine**, à heure fixe.
- On **évalue** une source (autorité, indépendance, actualité, vérifiabilité) et on **recoupe**.
- Une veille sans **action** est de la lecture.
