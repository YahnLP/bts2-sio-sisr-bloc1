# Corrigé S19 – Couverture, répétition et plan d'action

*Réservé à l'enseignant. Couverture **recalculée** avec `awk` sur `realisations.csv`. Format de l'épreuve à confirmer avec la circulaire.*

## Partie A

| Compétence | Réalisations | Preuves ​complètes |
|---|---|---|
| B1.1 | 1 (R1) | 1 |
| B1.2 | 2 (R2, R7) | 1 (R2) |
| B1.3 | 2 (R3, R8) | 2 |
| B1.4 | 2 (R3, R4) | 1 (R3) |
| B1.5 | 2 (R5, R7) | 1 (R5) |
| B1.6 | 1 (R6) | 1 |

Règle de prudence : sont fragiles **B1.1** et **B1.6** (une seule réalisation chacune). Les compétences B1.2, B1.4 et B1.5 dépendent chacune d'une réalisation aux preuves incomplètes ou absentes : **R7** (preuves : non) et **R4** (preuves partielles) sont à compléter, sinon on ne peut pas s'appuyer dessus. B1.3 est la mieux ​couverte. Origine : 6 réalisations en entreprise, 2 en formation (R3, R6) ; les deux de formation doivent avoir été conduites dans un environnement conforme au référentiel (à vérifier). Un total de huit réalisations n'est pas un objectif : la qualité et la couverture priment.

Commande de contrôle : `awk -F';' 'NR>1{n=split($4,c,","); for(i=1;i<=n;i++){tot[c[i]]++; if($5=="oui") ok[c[i]]++}} END{for(k in tot) printf "%s %d %d\n", k, tot[k], ok[k]+0}' realisations.csv | sort` donne les six lignes du tableau ci-dessus.

## Partie B

Choix possible : **R3** (portail, B1.3 et B1.4, preuves ​complètes) et **R5** (catalogue de services, B1.5, preuves complètes), ou **R2** si le jury doit voir le support. Argument : deux compétences et trois codes avec des preuves complètes ; B1.1 et B1.6 sont montrées par le tableau de synthèse et abordées dans le recul. À écarter ou à compléter : R7 et R4 tant que leurs preuves manquent.

## Partie C

Contrôler : total de dix ​minutes (1 + 2 + 5 + 1 + 1), « ma part » identifiable dans chaque réalisation, une preuve par réalisation, couverture montrée, recul concret (un choix refait autrement).

## Partie D

Contrôler : durée constatée proche de dix ​minutes ; au moins deux questions de chaque type (vérification, compréhension) et une de recul ; observations factuelles ; retour avec un point fort et un point à travailler.

## Partie E

Plan d'action : actions petites et vérifiables (par exemple S − 4 compléter les preuves de R4 avec captures datées, S − 3 rédiger la fiche de la ​réalisation manquante pour B1.1, S − 2 répétition chronométrée avec un tuteur, S − 1 contrôle de conformité du dossier et test de la copie de secours). Check-list du jour J : dossier conforme, ​copie de secours, matériel, aucune donnée réelle, plan des dix minutes, trois questions anticipées.

## Bilan de compétences

Auto-évaluation ; les six compétences sont proposées, à valider.
