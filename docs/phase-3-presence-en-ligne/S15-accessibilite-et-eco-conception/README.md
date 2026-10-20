# S15 – Accessibilité et éco-conception du portail

| Élément | Détail |
|---|---|
| **Niveau** | BTS SIO option SISR, 2e année – bloc 1 |
| **Séance** | S15 (séance 15 sur 19) – Phase 3 |
| **Durée** | 4 heures |
| **Prérequis** | S06 (HTML, CSS, contraste), S13 |
| **Matériel** | Node.js avec `jsdom`, un navigateur, `gzip` |
| **Compétences travaillées** | B1.3 (voir [le référentiel](../../ressources/referentiel.md)) |

> [!NOTE]
> **Question qui guide la séance :** *« Le portail est-il utilisable par tous, y compris au clavier ou avec un lecteur d'écran, et pèse-t-il aussi peu que possible sur les réseaux et les terminaux ? »*

## Objectifs

À la fin de la séance, l'étudiant est capable de :

1. **Expliquer** les quatre principes de l'accessibilité et les critères courants (alternative textuelle, contraste, clavier, étiquettes, structure)
2. **Auditer** une page : contrôles automatiques et contrôles manuels
3. **Corriger** les défauts d'une page
4. **Calculer** le rapport de contraste de deux couleurs
5. **Mesurer** le poids d'une page et l'effet de la compression
6. **Appliquer** des critères d'éco-conception à un site

## Contenu de la séance

| Document | Rôle |
|---|---|
| [Cours – Accessibilité et éco-conception](01-cours.md) | Cours |
| [TP – Auditer et alléger le portail](02-tp.md) | TP |
| [Page à auditer](tp/accessibilite_defauts.html) | Fichier |
| [Outil d'audit simplifié](tp/audit.js) | Fichier |
| [Pages du portail à peser](tp/salles.html) | Fichier |
| [Aide-mémoire – Accessibilité et sobriété](03-aide-memoire.md) | Aide-mémoire |

## Déroulé conseillé (4 h)

| Durée | Activité | Format |
|---|---|---|
| 0 h 00 – 0 h 15 | **Accroche** : naviguer sur une page de la mairie avec le seul clavier | Démonstration |
| 0 h 15 – 1 h 00 | **Cours** | Cours et questions |
| 1 h 00 – 4 h 00 | **TP**, parties A à E, puis bilan | Binôme |

## Retour en entreprise

Si ta situation le permet : **observer** comment ton entreprise traite le sujet de la séance, **documenter** en une demi-page l'écart avec le TP, ou **réaliser** une partie après accord de ton tuteur. Voir [Transfert en entreprise](../../ressources/transfert-entreprise.md). Le travail réalisé peut alimenter une [fiche de réalisation](../../ressources/fiche-realisation-professionnelle.md).

## Évaluation

- Compte rendu du TP (audit, corrections, calculs, plan d'amélioration), nommé `RENDU-B1A2-S15-NOM.pdf`.
- Bilan de compétences rempli en fin de séance (individuel).

<details markdown="1">
<summary>Notes pour l'enseignant</summary>

- **Compétences :** codes relus sur le référentiel.
- L'outil `audit.js` (cinq contrôles) a été **exécuté** avec `jsdom` : sur la page à défauts il en détecte **7** (langue absente, image sans alternative, deux champs sans étiquette, saut de titre h1 vers h4, lien « cliquez ici », élément `div` cliquable non utilisable au clavier) ; sur la version corrigée et sur la page du portail, aucun. Il **ne détecte pas** le contraste insuffisant : c'est volontaire, pour montrer qu'un audit automatique est partiel.
- Contrastes recalculés : `#999999` sur blanc = **2,85:1** (insuffisant), `#595959` sur blanc = **7,0:1**, `#767676` sur blanc = 4,54:1 (minimum courant), blanc sur `#1f4e79` = **8,66:1**.
- Poids du portail : `salles.html` 2 980 octets (1 051 compressés), `style.css` 1 310 (601), `salles.js` 1 971 (786), compression `gzip -9 -n` : total 6 261 octets bruts, 2 438 compressés, soit **61,1 %** d'économie.
- **Obligations légales (RGAA, déclaration d'accessibilité) : à vérifier.** Le cours évoque le cadre sans citer d'article ni de montant de sanction, qui sont à relire sur Légifrance et sur le site officiel de l'accessibilité. Le **RGESN** (référentiel général d'écoconception de services numériques, 2024) est présenté d'après sa structure en neuf familles ; la liste précise des critères est à consulter sur le site officiel.
- L'audit complet d'un site (grille RGAA, tests avec lecteur d'écran) dépasse une séance : celle-ci en donne la **démarche** et les contrôles de base.

</details>
