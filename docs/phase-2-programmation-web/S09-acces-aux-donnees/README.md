# S09 – Accès aux données : base MariaDB, PHP et requêtes préparées

| Élément | Détail |
|---|---|
| **Niveau** | BTS SIO option SISR, 2e année – bloc 1 |
| **Séance** | S09 (séance 9 sur 19) – Phase 2 |
| **Durée** | 4 heures |
| **Prérequis** | S06 à S08 |
| **Matériel** | Machine virtuelle Debian ou Ubuntu avec Apache, PHP et MariaDB (installation guidée dans le TP) |
| **Compétences travaillées** | B1.3 · B1.5 (voir [le référentiel](../../ressources/referentiel.md)) |

> [!NOTE]
> **Question qui guide la séance :** *« Où sont enregistrées les réservations, et comment empêcher qu'une saisie malveillante lise ou détruise la base ? »*

## Objectifs

À la fin de la séance, l'étudiant est capable de :

1. **Concevoir** deux tables reliées (clés primaire et étrangère) et poser des contraintes
2. **Interroger** une base avec SQL (sélection, jointure, regroupement)
3. **Écrire** une page PHP qui lit et écrit avec des **requêtes préparées**
4. **Démontrer** et **corriger** une injection SQL
5. **Appliquer** le moindre privilège et le contrôle côté serveur

## Contenu de la séance

| Document | Rôle |
|---|---|
| [Cours – Données et sécurité](01-cours.md) | Cours |
| [TP – Réservations en base](02-tp.md) | TP |
| [Schéma et jeu d'essai](tp/schema.sql) | Fichier |
| [Connexion PHP](tp/connexion.php) | Fichier |
| [Page vulnérable (démonstration)](tp/injection-vulnerable.php) | Fichier |
| [Aide-mémoire – SQL et PDO](03-aide-memoire.md) | Aide-mémoire |

## Déroulé conseillé (4 h)

| Durée | Activité | Format |
|---|---|---|
| 0 h 00 – 0 h 15 | **Accroche** : un champ de recherche et la phrase `' OR '1'='1` | Démonstration |
| 0 h 15 – 1 h 10 | **Cours** | Cours et questions |
| 1 h 10 – 4 h 00 | **TP**, parties A à D, puis bilan | Binôme |

## Retour en entreprise

Si ta situation le permet : **observer** comment ton entreprise traite le sujet de la séance, **documenter** en une demi-page l'écart avec le TP, ou **réaliser** une partie après accord de ton tuteur. Voir [Transfert en entreprise](../../ressources/transfert-entreprise.md). Le travail réalisé peut alimenter une [fiche de réalisation](../../ressources/fiche-realisation-professionnelle.md).

## Évaluation

- Fichiers SQL et PHP, résultats de requêtes et captures datées, nommés `RENDU-B1A2-S09-NOM.zip`.
- Bilan de compétences rempli en fin de séance (individuel).

<details markdown="1">
<summary>Notes pour l'enseignant</summary>

- **Compétences :** codes relus sur le référentiel ; le choix des compétences pour cette séance est une proposition **à valider**.
- Schéma, requêtes et pages PHP ont été **testés** sur MariaDB 10.11 avec PHP 8.3 : liste des réservations, refus d'un chevauchement (code 409), acceptation d'un bout à bout, refus d'une saisie invalide (400), injection démontrée sur la page vulnérable, `DELETE` refusé au compte limité, contrainte `fin > debut` refusée par la base.
- Le mot de passe du compte `portail` est un identifiant de **laboratoire** : il ne doit jamais être repris en production.
- L'infrastructure du TP (VM Debian, Apache, PHP, MariaDB) est celle d'un TP de la première année ; la page de test vulnérable ne doit jamais être exposée en dehors du laboratoire.

</details>
