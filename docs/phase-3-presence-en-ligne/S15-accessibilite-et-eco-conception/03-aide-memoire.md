# Aide-mémoire – Accessibilité et sobriété

*BTS SIO SISR 2e année – Bloc 1 – S15*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Accessibilité : les réflexes

`lang` déclaré · `alt` utile (`alt=""` si décoratif) · contraste **≥ 4,5:1** (grand texte 3:1) · **tout au clavier**, focus visible · `label` pour chaque champ · un `h1`, pas de saut de niveau · liens explicites · composants natifs.

## Audit

Automatique **partiel** + clavier + zoom 200 % + lecteur d'écran. **Ne pas déclarer** une conformité non mesurée. Cadre légal à vérifier.

## Contraste

Rapport = (L1 + 0,05) / (L2 + 0,05) · `#999999` sur blanc = 2,85:1 (insuffisant) · `#595959` = 7,0:1.

## Éco-conception

Besoin avant tout · peser (`wc -c`, `gzip -9 -n -c < f | wc -c`) · compresser · cache (`304`) · peu de requêtes · images optimisées · pas de tiers inutile · RGESN : neuf familles.

## Commandes

`node audit.js page.html` · `wc -c < fichier` · `gzip -9 -n -c < fichier | wc -c`.
