# Aide-mémoire – Portfolio et veille

*BTS SIO SISR 2e année – Bloc 1 – S18*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Portfolio

Accueil · tableau de synthèse (modèle officiel) · fiches · preuves · attestations. Réel · personnel · vérifiable · **anonymisé** · accessible · sauvegardé deux fois.

## Preuves

Capture datée et légendée · ticket · extrait commenté **sans secret** · schéma lisible · résultat de test commenté.

## Veille

Cibler · sources · collecter (RSS) · trier · exploiter · diffuser. **30 minutes par semaine**, à heure fixe. Pas d'action = pas de veille.

## Fiabilité

Autorité · indépendance · actualité · vérifiabilité · **recouper** avec une seconde source indépendante.

## Commandes

```bash
xmllint --noout flux.xml
xmllint --xpath 'count(//item)' flux.xml
xmllint --xpath 'count(//item[source="Nom de la source"])' flux.xml
xmllint --xpath 'string(//item[3]/title)' flux.xml
```
