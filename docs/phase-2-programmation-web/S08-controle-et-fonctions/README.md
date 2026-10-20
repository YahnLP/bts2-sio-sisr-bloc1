# S08 – Structures de contrôle et fonctions : le calcul des créneaux libres

| Élément | Détail |
|---|---|
| **Niveau** | BTS SIO option SISR, 2e année – bloc 1 |
| **Séance** | S08 (séance 8 sur 19) – Phase 2 |
| **Durée** | 4 heures |
| **Prérequis** | S07 |
| **Matériel** | Éditeur, Node.js (ou la console du navigateur) |
| **Compétences travaillées** | B1.3 · B1.4 (voir [le référentiel](../../ressources/referentiel.md)) |

> [!NOTE]
> **Question qui guide la séance :** *« Deux réservations se chevauchent-elles ? Quels créneaux restent libres ? Comment être sûr que le code répond juste ? »*

## Objectifs

À la fin de la séance, l'étudiant est capable de :

1. **Utiliser** conditions, boucles, tableaux et objets
2. **Écrire** des fonctions courtes à entrée et sortie claires
3. **Traduire** une règle métier (chevauchement) en code
4. **Exécuter** des tests automatiques et lire un échec
5. **Corriger** un défaut à partir d'un test qui échoue

## Contenu de la séance

| Document | Rôle |
|---|---|
| [Cours – Contrôle et fonctions](01-cours.md) | Cours |
| [TP – Créneaux libres](02-tp.md) | TP |
| [Squelette des fonctions](tp/creneaux.js) | Squelette |
| [Tests fournis](tp/tests.js) | Tests |
| [Version défectueuse (partie D)](tp/creneaux-bugge.js) | Exercice |
| [Aide-mémoire – Fonctions](03-aide-memoire.md) | Aide-mémoire |

## Déroulé conseillé (4 h)

| Durée | Activité | Format |
|---|---|---|
| 0 h 00 – 0 h 15 | **Accroche** : « 11 h – 12 h et 12 h – 13 h : se chevauchent-elles ? » | Oral |
| 0 h 15 – 1 h 05 | **Cours** | Cours et questions |
| 1 h 05 – 4 h 00 | **TP**, parties A à D, puis bilan | Individuel |

## Retour en entreprise

Si ta situation le permet : **observer** comment ton entreprise traite le sujet de la séance, **documenter** en une demi-page l'écart avec le TP, ou **réaliser** une partie après accord de ton tuteur. Voir [Transfert en entreprise](../../ressources/transfert-entreprise.md). Le travail réalisé peut alimenter une [fiche de réalisation](../../ressources/fiche-realisation-professionnelle.md).

## Évaluation

- Fichier `creneaux.js` qui passe tous les tests et note d'analyse du défaut (partie D), nommés `RENDU-B1A2-S08-NOM.zip`.
- Bilan de compétences rempli en fin de séance (individuel).

<details markdown="1">
<summary>Notes pour l'enseignant</summary>

- **Compétences :** codes relus sur le référentiel ; le choix des compétences pour cette séance est une proposition **à valider**.
- Solution **testée** avec `node tests.js` (6 créneaux libres ; taux d'occupation 0,35). La version défectueuse est bien détectée par les tests.
- Node.js est requis pour `node tests.js` ; à défaut, coller les fonctions et les tests dans la console du navigateur (le test final utilise `require`, à retirer).

</details>
