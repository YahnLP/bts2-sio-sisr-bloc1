# S07 – JavaScript : les bases et le DOM

| Élément | Détail |
|---|---|
| **Niveau** | BTS SIO option SISR, 2e année – bloc 1 |
| **Séance** | S07 (séance 7 sur 19) – Phase 2 |
| **Durée** | 4 heures |
| **Prérequis** | S06 |
| **Matériel** | Éditeur, navigateur avec outils de développement |
| **Compétences travaillées** | B1.3 · B1.5 (voir [le référentiel](../../ressources/referentiel.md)) |

> [!NOTE]
> **Question qui guide la séance :** *« Comment une page réagit-elle quand on tape dans un champ ou qu'on clique, sans recharger ? »*

## Objectifs

À la fin de la séance, l'étudiant est capable de :

1. **Déclarer** des variables et reconnaître les types de valeurs
2. **Lire et modifier** le contenu d'une page (DOM)
3. **Réagir** à un événement (saisie, envoi)
4. **Valider** un formulaire côté navigateur
5. **Déboguer** avec la console et distinguer confort et sécurité

## Contenu de la séance

| Document | Rôle |
|---|---|
| [Cours – JavaScript et DOM](01-cours.md) | Cours |
| [TP – Filtrer et valider](02-tp.md) | TP |
| [Fichier de départ du TP](tp/salles-a-completer.js) | Squelette |
| [Aide-mémoire – JavaScript](03-aide-memoire.md) | Aide-mémoire |

## Déroulé conseillé (4 h)

| Durée | Activité | Format |
|---|---|---|
| 0 h 00 – 0 h 15 | **Accroche** : saisir du code dans la console du navigateur | Démonstration |
| 0 h 15 – 1 h 10 | **Cours** | Cours et questions |
| 1 h 10 – 4 h 00 | **TP**, parties A à D, puis bilan | Individuel |

## Retour en entreprise

Si ta situation le permet : **observer** comment ton entreprise traite le sujet de la séance, **documenter** en une demi-page l'écart avec le TP, ou **réaliser** une partie après accord de ton tuteur. Voir [Transfert en entreprise](../../ressources/transfert-entreprise.md). Le travail réalisé peut alimenter une [fiche de réalisation](../../ressources/fiche-realisation-professionnelle.md).

## Évaluation

- Fichier `salles.js` et captures datées de la console, nommés `RENDU-B1A2-S07-NOM.zip`.
- Bilan de compétences rempli en fin de séance (individuel).

<details markdown="1">
<summary>Notes pour l'enseignant</summary>

- **Compétences :** codes relus sur le référentiel ; le choix des compétences pour cette séance est une proposition **à valider**.
- Le script de référence a été **testé** dans un DOM simulé : filtre à 50 places (trois salles restent), refus de l'envoi (champ vide, fin avant début, date passée, courriel invalide), acceptation d'une demande valide.
- Le TP s'appuie sur la page de S06 ; le champ « capacité minimale » est ajouté dans la partie A.

</details>
