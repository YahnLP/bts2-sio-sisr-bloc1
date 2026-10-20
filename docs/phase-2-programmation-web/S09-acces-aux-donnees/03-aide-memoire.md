# Aide-mémoire – SQL, PHP et sécurité

*BTS SIO SISR 2e année – Bloc 1 – S09*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## SQL

`SELECT … FROM … WHERE … ORDER BY` · `JOIN … ON` · `GROUP BY` + `COUNT`, `SUM` · `INSERT INTO … VALUES` · `UPDATE … SET … WHERE` · `DELETE … WHERE` (**toujours** `WHERE`).

## Chevauchement

`debut < fin_demandee AND fin > debut_demande`.

## PDO

`$r = $pdo->prepare('… ?'); $r->execute([$valeur]);` · mode d'erreur : exceptions.

## Sécurité

Requêtes **préparées** · contrôle **serveur** · `htmlspecialchars` · **moindre privilège** (`SELECT`, `INSERT`) · secrets hors dépôt public · erreurs non affichées · données minimales.
