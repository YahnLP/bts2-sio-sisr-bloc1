# S10 – Faire évoluer un site existant : lire, corriger, versionner

| Élément | Détail |
|---|---|
| **Niveau** | BTS SIO option SISR, 2e année – bloc 1 |
| **Séance** | S10 (séance 10 sur 19) – Phase 2 |
| **Durée** | 4 heures |
| **Prérequis** | S06 à S09 |
| **Matériel** | Git, Node.js (pour les tests), un éditeur |
| **Compétences travaillées** | B1.3 · B1.4 (voir [le référentiel](../../ressources/referentiel.md)) |

> [!NOTE]
> **Question qui guide la séance :** *« Quelqu'un d'autre a écrit ce site : comment le modifier sans le casser, et comment revenir en arrière si cela tourne mal ? »*

## Objectifs

À la fin de la séance, l'étudiant est capable de :

1. **Lire** un code existant et s'appuyer sur ses tests
2. **Travailler** avec des branches : une branche par demande
3. **Fusionner** et **résoudre** un conflit
4. **Étiqueter** une version et **annuler** une modification
5. **Collaborer** avec un dépôt central

## Contenu de la séance

| Document | Rôle |
|---|---|
| [Cours – Évolution et versionnage](01-cours.md) | Cours |
| [TP – Trois demandes sur un site](02-tp.md) | TP |
| [Script de création du dépôt d'exercice](tp/init-depot.sh) | Script |
| [Aide-mémoire – Git au quotidien](03-aide-memoire.md) | Aide-mémoire |

## Déroulé conseillé (4 h)

| Durée | Activité | Format |
|---|---|---|
| 0 h 00 – 0 h 15 | **Accroche** : « qui a modifié ce fichier, quand, et pourquoi ? » | Oral |
| 0 h 15 – 1 h 05 | **Cours** | Cours et questions |
| 1 h 05 – 4 h 00 | **TP**, parties A à D, puis bilan | Binôme |

## Retour en entreprise

Si ta situation le permet : **observer** comment ton entreprise traite le sujet de la séance, **documenter** en une demi-page l'écart avec le TP, ou **réaliser** une partie après accord de ton tuteur. Voir [Transfert en entreprise](../../ressources/transfert-entreprise.md). Le travail réalisé peut alimenter une [fiche de réalisation](../../ressources/fiche-realisation-professionnelle.md).

## Évaluation

- Historique du dépôt (`git log --oneline --graph --all`), captures datées et notes de correction, nommés `RENDU-B1A2-S10-NOM.pdf`.
- Bilan de compétences rempli en fin de séance (individuel).

<details markdown="1">
<summary>Notes pour l'enseignant</summary>

- **Compétences :** codes relus sur le référentiel ; le choix des compétences pour cette séance est une proposition **à valider**.
- Le script de création et l'enchaînement complet du TP (correctif, évolution, conflit d'horaires, étiquette, `git revert`, dépôt central, rejet de `push`, `pull` avec conflit) ont été **exécutés** avec Git ; les tests passent à chaque étape.
- Aucune forge en ligne n'est nécessaire : le dépôt « central » est un dépôt nu local. Sur une forge (GitHub, GitLab, serveur interne), la même démarche passe par une demande de fusion.
- Git doit être installé et configuré (`user.name`, `user.email`) sur les postes ; le script configure l'identité localement dans le dépôt d'exercice.

</details>
