# S18 – Portfolio et veille

| Élément | Détail |
|---|---|
| **Niveau** | BTS SIO option SISR, 2e année – bloc 1 |
| **Séance** | S18 (séance 18 sur 19) – Phase 4 |
| **Durée** | 4 heures |
| **Prérequis** | S10 de première année (portfolio et fiche de réalisation), S15 (accessibilité), S12 (confidentialité) |
| **Matériel** | Un poste Linux avec `xmllint` (paquet libxml2-utils), `awk`, un éditeur de texte |
| **Compétences travaillées** | B1.6 · B1.3 (voir [le référentiel](../../ressources/referentiel.md)) |

> [!NOTE]
> **Question qui guide la séance :** *« Que montre mon dossier de ce que j'ai appris, et comment je reste à jour sans y passer mes soirées ? »*

## Objectifs

À la fin de la séance, l'étudiant est capable de :

1. **Structurer** un portfolio numérique (accueil, tableau de synthèse, fiches, preuves)
2. **Choisir et anonymiser** des preuves sans trahir la confidentialité d'une organisation
3. **Contrôler** la conformité et l'accessibilité de son dossier
4. **Organiser** une veille : sources, fréquence, outils, fiche de veille
5. **Évaluer** la fiabilité d'une source
6. **Exploiter** un flux de veille avec `xmllint` et produire une note de synthèse

## Contenu de la séance

| Document | Rôle |
|---|---|
| [Cours – Portfolio et veille](01-cours.md) | Cours |
| [TP – Un dossier et une veille qui tiennent](02-tp.md) | TP |
| [Flux de veille fictif](tp/veille.xml) | Fichier |
| [Aide-mémoire – Portfolio et veille](03-aide-memoire.md) | Aide-mémoire |

## Déroulé conseillé (4 h)

| Durée | Activité | Format |
|---|---|---|
| 0 h 00 – 0 h 15 | **Accroche** : « si le jury n'avait que ton portfolio, que saurait-il de toi ? » | Oral |
| 0 h 15 – 1 h 00 | **Cours** | Cours et questions |
| 1 h 00 – 4 h 00 | **TP**, parties A à E, puis bilan | Individuel puis binôme |

## Retour en entreprise

Si ta situation le permet : **observer** comment ton entreprise traite le sujet de la séance, **documenter** en une demi-page l'écart avec le TP, ou **réaliser** une partie après accord de ton tuteur. Voir [Transfert en entreprise](../../ressources/transfert-entreprise.md). Le travail réalisé peut alimenter une [fiche de réalisation](../../ressources/fiche-realisation-professionnelle.md).

## Évaluation

- Compte rendu du TP (plan du portfolio, fiche de réalisation, grille de fiabilité, note de veille), nommé `RENDU-B1A2-S18-NOM.pdf`.
- Bilan de compétences rempli en fin de séance (individuel).

<details markdown="1">
<summary>Notes pour l'enseignant</summary>

- **Compétences :** codes relus sur le référentiel.
- Le flux de veille est **fictif** : 14 articles, trois sources (Bulletin Sécurité 5, Gazette Réseau 6, Blog d'un éditeur 3), dont trois articles promotionnels du blog de l'éditeur. Les commandes `xmllint --xpath` du TP ont été **exécutées** : 14 articles, 2 sur les mobiles, 4 dans la catégorie sécurité.
- Cette séance prépare l'épreuve E5 ; les règles officielles (dossier, tableau de synthèse, conformité) sont celles du texte et de la **circulaire en vigueur** : à relire avant la séance. Ce support ne remplace pas le modèle officiel du tableau de synthèse.
- Le travail sur le portfolio est **individuel et personnel** : ne pas exiger de remettre des preuves réelles contenant des informations d'organisation. Les exercices utilisent des **exemples fictifs**.
- Les critères de fiabilité sont une grille de formation, pas une norme.

</details>
