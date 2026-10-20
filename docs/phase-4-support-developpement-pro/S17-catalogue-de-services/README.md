# S17 – Catalogue de services et mise à disposition

| Élément | Détail |
|---|---|
| **Niveau** | BTS SIO option SISR, 2e année – bloc 1 |
| **Séance** | S17 (séance 17 sur 19) – Phase 4 |
| **Durée** | 4 heures |
| **Prérequis** | S04 et S05 (suivi et recette), S13 (lecture de données avec `awk`) |
| **Matériel** | Un poste Linux avec `awk`, `sort`, `uniq`, un éditeur de texte |
| **Compétences travaillées** | B1.5 · B1.2 (voir [le référentiel](../../ressources/referentiel.md)) |

> [!NOTE]
> **Question qui guide la séance :** *« Que promet exactement le service informatique aux agents, et comment sait-on qu'il tient ses promesses ? »*

## Objectifs

À la fin de la séance, l'étudiant est capable de :

1. **Décrire** un service dans une fiche de catalogue (bénéficiaires, délai, disponibilité, propriétaire)
2. **Distinguer** demande, incident et changement
3. **Calculer** l'indisponibilité tolérée par un taux de disponibilité
4. **Mesurer** le respect d'un engagement de délai avec un fichier de tickets
5. **Repérer** les services à améliorer en priorité
6. **Dérouler** la mise à disposition d'un service (accès, documentation, formation, supervision)

## Contenu de la séance

| Document | Rôle |
|---|---|
| [Cours – Catalogue de services et mise à disposition](01-cours.md) | Cours |
| [TP – Décrire, mesurer, améliorer](02-tp.md) | TP |
| [Catalogue de services](tp/catalogue.csv) | Fichier |
| [Tickets d'un mois](tp/tickets.csv) | Fichier |
| [Aide-mémoire – Catalogue et indicateurs](03-aide-memoire.md) | Aide-mémoire |

## Déroulé conseillé (4 h)

| Durée | Activité | Format |
|---|---|---|
| 0 h 00 – 0 h 15 | **Accroche** : « combien de temps pour obtenir un compte ? Personne ne sait » | Oral |
| 0 h 15 – 1 h 00 | **Cours** | Cours et questions |
| 1 h 00 – 4 h 00 | **TP**, parties A à E, puis bilan | Binôme |

## Retour en entreprise

Si ta situation le permet : **observer** comment ton entreprise traite le sujet de la séance, **documenter** en une demi-page l'écart avec le TP, ou **réaliser** une partie après accord de ton tuteur. Voir [Transfert en entreprise](../../ressources/transfert-entreprise.md). Le travail réalisé peut alimenter une [fiche de réalisation](../../ressources/fiche-realisation-professionnelle.md).

## Évaluation

- Compte rendu du TP (fiches, calculs, commandes et résultats, plan d'amélioration), nommé `RENDU-B1A2-S17-NOM.pdf`.
- Bilan de compétences rempli en fin de séance (individuel).

<details markdown="1">
<summary>Notes pour l'enseignant</summary>

- **Compétences :** codes relus sur le référentiel ; le choix des compétences pour cette séance est une proposition **à valider**.
- Les tickets sont **synthétiques** (120 tickets sur quatre semaines, générés avec une graine fixe) ; toutes les statistiques attendues ont été **recalculées** avec `awk` et recoupées avec un second calcul en Python : 75 tickets sur 120 dans les délais (62,5 %), délai moyen 9,21 h, 45 dépassements dont 29 pour l'impression et le réseau (64,4 %), 52 tickets ouverts un lundi (43,3 %).
- Les dates tombant un week-end sont reportées au lundi dans le jeu de données : le pic du lundi est une **conséquence de la génération** mais sert de point de discussion (que fait-on d'un pic de demandes ?).
- Les heures de traitement sont des **heures écoulées**, pas des heures ouvrées : le TP le signale, c'est une limite de la mesure à discuter.
- Les taux de disponibilité sont calculés sur un mois de 30 jours (43 200 minutes).

</details>
