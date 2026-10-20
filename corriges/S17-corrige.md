# Corrigé S17 – Décrire, mesurer, améliorer

*Réservé à l'enseignant. Chiffres **recalculés** avec `awk` et recoupés par un second ​calcul indépendant en Python.*

## Partie A

Contrôler les dix rubriques. Exemple pour le portail : bénéficiaires = agents et associations déclarées ; type = service en production ; accès = formulaire en ligne, compte ​validé par l'accueil ; délai de validation d'un compte d'association à valider avec la direction ; disponibilité à fixer d'après la partie B ; coût = gratuit pour les associations (à confirmer) ; propriétaire = secrétaire ​générale (à confirmer) ; support = adresse fonctionnelle du service. Rubriques « à demander » : coût, propriétaire, délai de validation.

## Partie B

1. 99 % : 432 min = 7 h 12 ; 99,5 % : 216 min = 3 h 36 ; 99,9 % : 43,2 min (43 min 12 s).
2. 0,999 × 0,995 = 0,994005, soit **99,40 %** ; indisponibilité tolérée 0,5995 % × 43 200 ≈ **259 minutes** (4 h 19). Taux global inférieur au plus faible.
3. ​Réponse : impossible tant que le serveur applicatif est à 99,5 % et dépend d'un hébergeur à 99,9 % (le global est plafonné à 99,40 %). Leviers techniques : redondance (deux serveurs, répartition de charge), supervision avec alerte rapide, ​sauvegarde restaurable. Levier d'organisation : astreinte ou délai d'intervention garanti, maintenance annoncée hors des heures d'ouverture.
4. Une maintenance **annoncée à l'avance** est exclue du calcul ; non annoncée, elle compte.

## Partie C

1. 120 tickets ; par service : `S-COMPTE` 20, `S-IMPR` 34, `S-MAIL` 14, `S-PORTAIL` 14, `S-POSTE` 16, `S-RESEAU` 22.
2 et 3.

| Code | Cible (h) | Tickets | Délai moyen (h) | Dans le délai | Taux |
|---|---|---|---|---|---|
| `S-COMPTE` | 8 | 20 | 4,75 | 19 | 95,0 % |
| `S-IMPR` | 4 | 34 | 3,58 | 19 | 55,9 % |
| `S-MAIL` | 16 | 14 | 14,16 | 8 | 57,1 % |
| `S-PORTAIL` | 8 | 14 | 6,35 | 10 | 71,4 % |
| `S-POSTE` | 40 | 16 | 30,81 | 11 | 68,8 % |
| `S-RESEAU` | 4 | 22 | 4,93 | 8 | 36,4 % |

4. Global : 75 / 120 = **62,5 %** ; délai ​moyen global 9,21 h (1 105,2 h / 120). Par type : incidents 70 tickets, moyenne 4,56 h ; demandes 50 tickets, moyenne 15,72 h.
5. `S-POSTE` : moyenne 30,81 h, **sous** la cible de 40 h, mais **5 tickets sur 16** la dépassent (taux 68,8 %) : la moyenne cache des ​dépassements.
6. Par jour : lundi **52** tickets (43,3 %), mardi 12, mercredi 20, jeudi 20, vendredi 16. Pic du lundi : hypothèse = demandes accumulées pendant le week-end (ici, ​effet du jeu de données qui reporte les dates de week-end au lundi) ; décision à discuter : renfort ou permanence le lundi.

## Partie D

1. Dépassements : `S-IMPR` 15, `S-RESEAU` 14, `S-MAIL` 6, `S-POSTE` 5, `S-PORTAIL` 4, `S-COMPTE` 1 ; total **45**.
2. Impression et réseau : 15 + 14 = 29, soit 29 / 45 = **64,4 %** des dépassements.
3. Exemples : ​impression : contrat de maintenance avec délai, stock de consommables et de pièces, imprimante de remplacement ; réseau : supervision des commutateurs, procédure de premier diagnostic, ​schéma à jour. Indicateurs : taux de respect par service, nombre de récidives.
4. 80 % de 120 = 96 tickets ; il y en a 75 ; il en manque **21**.

## Partie E

Contrôler la cohérence des échéances : recette (J − 15), accès et droits (J − 10, comptes des associations validés), ​documentation et formation (J − 7), fiche de catalogue et communication (J − 7 à J), supervision et sauvegarde **avant** l'ouverture (J − 5), revue à trois mois (J + 90). Refuser une mise en service sans supervision ni sauvegarde.

## Bilan de compétences

Auto-évaluation ; B1.5 et B1.2 proposées, à valider.
