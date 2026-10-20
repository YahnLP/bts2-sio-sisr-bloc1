# Aide-mémoire – Le jour de l'épreuve

*BTS SIO SISR 2e année – Bloc 1 – S19*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

> Format à confirmer avec la **circulaire** en vigueur.

## Avant

Dossier conforme · copie de secours · matériel · aucune donnée réelle · plan de dix minutes chronométré.

## Les dix minutes

1 min qui es-tu · 2 min parcours · 5 min deux réalisations (besoin, **ma part**, preuve) · 1 min couverture · 1 min recul.

## Pendant l'échange

Écouter la question en entier · répondre par un **fait** puis un **raisonnement** · montrer la **preuve** · dire « je ne sais pas, voici comment je chercherais » plutôt que deviner · « je » pour ma part, « nous » pour l'équipe.

## Questions types

Vérification : qu'as-tu fait, quelle commande, montre-le. Compréhension : pourquoi ce choix, comment ça marche, que se passe-t-il si ça tombe. Recul : que ferais-tu autrement, quelles limites.

## Couverture

Six compétences · deux réalisations par compétence dont une avec preuves complètes (règle de prudence).

## Commande

```bash
awk -F';' 'NR>1{n=split($4,c,","); for(i=1;i<=n;i++){tot[c[i]]++; if($5=="oui") ok[c[i]]++}} END{for(k in tot) print k, tot[k], ok[k]+0}' realisations.csv | sort
```
