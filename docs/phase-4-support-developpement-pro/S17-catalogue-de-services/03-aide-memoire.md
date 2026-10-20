# Aide-mémoire – Catalogue et indicateurs

*BTS SIO SISR 2e année – Bloc 1 – S17*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Fiche de service

Nom · bénéficiaires · type · comment l'obtenir · délai · disponibilité · prérequis · coût · propriétaire · support.

## Types

**Demande** (prévue) · **incident** (interruption) · **changement** (planifié).

## Disponibilité sur 30 jours

99 % : 432 min (7 h 12) · 99,5 % : 216 min (3 h 36) · 99,9 % : 43,2 min · services enchaînés : on **multiplie**.

## Indicateurs

Volume · délai moyen · **taux de respect** · dépassements · satisfaction. La moyenne cache les dépassements.

## Commandes

```bash
awk -F';' 'NR>1{print $3}' tickets.csv | sort | uniq -c
awk -F';' 'NR==FNR{c[$1]=$4; next} FNR>1{n[$3]++; if($5<=c[$3]) ok[$3]++} END{for(k in n) print k, n[k], ok[k]+0}' catalogue.csv tickets.csv
```

## Mise à disposition

Recette · accès · documentation · formation · support · supervision · communication · bilan à trois mois.
