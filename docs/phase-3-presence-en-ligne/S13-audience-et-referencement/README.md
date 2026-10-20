# S13 – Mesurer l'audience et améliorer le référencement

| Élément | Détail |
|---|---|
| **Niveau** | BTS SIO option SISR, 2e année – bloc 1 |
| **Séance** | S13 (séance 13 sur 19) – Phase 3 |
| **Durée** | 4 heures |
| **Prérequis** | S11 et S12, commandes Linux de première année (`grep`, `awk`, `sort`, `uniq`) |
| **Matériel** | Un poste Linux avec les outils de base, `xmllint` (paquet libxml2-utils) |
| **Compétences travaillées** | B1.3 (voir [le référentiel](../../ressources/referentiel.md)) |

> [!NOTE]
> **Question qui guide la séance :** *« Le portail est en ligne depuis une semaine : combien de personnes l'utilisent, pour quoi faire, et comment être trouvé sans espionner personne ? »*

## Objectifs

À la fin de la séance, l'étudiant est capable de :

1. **Extraire** des indicateurs d'un journal d'accès avec `awk`, `sort` et `uniq`
2. **Distinguer** visiteurs, robots et scanners dans un journal
3. **Choisir** un mode de mesure d'audience compatible avec les règles de la CNIL
4. **Interpréter** les codes de réponse (404, 304, 409, 500) pour agir
5. **Auditer** les éléments de référencement d'une page (titre, description, titres, URL)
6. **Contrôler** un fichier `robots.txt` et un plan de site `sitemap.xml`

## Contenu de la séance

| Document | Rôle |
|---|---|
| [Cours – Audience et référencement](01-cours.md) | Cours |
| [TP – Lire une semaine de journal](02-tp.md) | TP |
| [Journal d'accès de la semaine](tp/access.log) | Fichier |
| [Fichier robots.txt](tp/robots.txt) | Fichier |
| [Plan de site](tp/sitemap.xml) | Fichier |
| [Aide-mémoire – Journaux et référencement](03-aide-memoire.md) | Aide-mémoire |

## Déroulé conseillé (4 h)

| Durée | Activité | Format |
|---|---|---|
| 0 h 00 – 0 h 15 | **Accroche** : « 954 lignes dans le journal : combien de personnes derrière ? » | Oral |
| 0 h 15 – 1 h 00 | **Cours** | Cours et questions |
| 1 h 00 – 4 h 00 | **TP**, parties A à E, puis bilan | Binôme |

## Retour en entreprise

Si ta situation le permet : **observer** comment ton entreprise traite le sujet de la séance, **documenter** en une demi-page l'écart avec le TP, ou **réaliser** une partie après accord de ton tuteur. Voir [Transfert en entreprise](../../ressources/transfert-entreprise.md). Le travail réalisé peut alimenter une [fiche de réalisation](../../ressources/fiche-realisation-professionnelle.md).

## Évaluation

- Compte rendu du TP (commandes et résultats, décisions, audit de référencement), nommé `RENDU-B1A2-S13-NOM.pdf`.
- Bilan de compétences rempli en fin de séance (individuel).

<details markdown="1">
<summary>Notes pour l'enseignant</summary>

- **Compétences :** codes relus sur le référentiel.
- Le journal est **synthétique** (généré par un script avec une graine fixe) au format combiné d'un serveur web ; adresses de documentation (`203.0.113.x`, `198.51.100.x`, `192.0.2.x`). Tous les chiffres des réponses attendues ont été **recalculés** avec `awk`, `sort` et `uniq` : 954 requêtes, 70 adresses distinctes dont 1 robot et 2 scanners, 67 visiteurs.
- **Mesure d'audience : à vérifier.** Les conditions d'exemption de consentement citées (finalité strictement statistique du site, données anonymes, pas de recoupement ni de transmission à des tiers, pas de suivi entre sites) sont celles de la page de la CNIL consultée lors de la rédaction ; les durées recommandées (13 mois pour le traceur, 25 mois pour la conservation) sont des **recommandations**, pas des textes. À revérifier sur cnil.fr avant la séance.
- Les consignes de référencement (longueurs de titre et de description) sont des **ordres de grandeur** d'usage, non des règles normées.
- Une adresse IP n'est pas une personne : plusieurs personnes derrière une même adresse, une personne avec plusieurs adresses. Les « visiteurs » comptés sont donc des **estimations**.

</details>
