# Aide-mémoire – DNS, hébergement, HTTPS

*BTS SIO SISR 2e année – Bloc 1 – S11*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Enregistrements

A (nom vers IPv4) · AAAA (IPv6) · CNAME (alias, **seul** sur son nom) · MX (courrier, priorité) · TXT (texte, SPF) · NS (serveurs de noms) · SOA (série, durées).

## Pièges de zone

**Point final** sur les noms complets · série **+ 1** à chaque modification · MX et NS = **noms**, jamais des IP · IPv4 = quatre nombres de 0 à 255.

## Commandes

`named-checkzone domaine fichier` · `dig @serveur -p port +norecurse nom TYPE` · `dig +short nom TYPE`.

## Migration

TTL bas **avant** · attendre l'ancien TTL · tester le nouveau · changer l'adresse · garder l'ancien actif · remonter le TTL.

## Hébergement

Coût sur 3 ans **et** disponibilité, localisation des données, sauvegarde (testée), sécurité, **réversibilité**, support, contrat.

## Certificat

`openssl x509 -in c.pem -noout -subject -dates -ext subjectAltName` · `-checkend secondes` (code 0 = valide, 1 = expire) · tous les noms utilisés dans la liste · renouvellement **automatisé** et supervisé.
