# Corrigé S11 – Mettre le portail en ligne

*Réservé à l'enseignant. Commandes **exécutées** : `named-checkzone`, serveur BIND de laboratoire interrogé avec `dig`, `openssl`.*

## Partie A

1. `203.0.113.30`, TTL 300 s ; autres enregistrements : 3 600 s (valeur de `$TTL`).
2. MX 10 vers `mail.bellevigne.example.` (`203.0.113.40`).
3. CNAME vers `bellevigne.example.`, soit `203.0.113.20`.
4. SPF : `v=spf1 mx -all`.
5. ​Redondance ; machines et réseaux distincts.
6. Nom inconnu : `NXDOMAIN`.

## Partie B – trois défauts

| Ligne | Message de `named-checkzone` | Correction |
|---|---|---|
| `www IN CNAME` puis `www IN A` | CNAME and other data | Supprimer le A de `www` |
| `portail … 203.0.113.300` | adresse invalide (bad dotted quad) | `203.0.113.30` |
| `MX 10 mail.bellevigne.example` | `mail.bellevigne.example.bellevigne.example` has no address records | Ajouter le point final |

L'outil s'arrête aux erreurs bloquantes (le CNAME, puis l'adresse invalide) : faire recommencer après chaque ​correction. Le MX sans point final n'est qu'un **avertissement** : la zone est chargée et l'outil répond `OK` juste après. Un lecteur pressé le manque, d'où la consigne de lire **toute** la sortie. L'outil ne contrôle pas l'**augmentation du numéro de série**.

## Partie C – observations (serveur de laboratoire, `+norecurse`)

| Question | Status | Valeur | TTL |
|---|---|---|---|
| MX de `bellevigne.example` | NOERROR | `10 mail.bellevigne.example.` | 3600 |
| A de `portail.bellevigne.example` | NOERROR | `203.0.113.30` | 300 |
| CNAME de `www.bellevigne.example` | NOERROR | `bellevigne.example.` | 3600 |
| TXT de `bellevigne.example` | NOERROR | `"v=spf1 mx -all"` | 3600 |
| A de `inconnu.bellevigne.example` | NXDOMAIN | (aucune) | – |

## Partie D

1. Au maximum **3 600 s, soit 60 minutes**.
2. Au maximum **300 s, soit 5 minutes**.
3. Plan de référence : **mercredi** (au plus tard) : abaisser le TTL de `portail` à 300 s, ​série + 1 ; **jeudi** : attendre l'expiration de l'ancien TTL (une heure suffit) et vérifier avec `dig` que le TTL affiché est 300 ; **jeudi** : installer et tester le nouveau serveur (en l'appelant par son adresse), l'ancien restant actif ; **vendredi 7 h 30** : changer l'adresse vers `203.0.113.50`, série + 1, `named-checkzone`, ​rechargement ; **vendredi 8 h** : vérifier, surveiller les journaux de l'ancien serveur ; **dans les jours suivants** : couper l'ancien serveur quand plus aucun accès n'arrive, puis remonter le TTL à 3 600 s.
4. Série + 1 à **chaque** modification ; l'**ancien serveur** reste actif jusqu'à la fin des accès.

## Partie E

**E1.** A : (72 + 36) × 3 + 12 × 3 = 324 + 36 = **360 €**. B : (15 × 12 + 20 × 40) × 3 + 36 = (180 + 800) × 3 + 36 = 2 940 + 36 = **2 976 €**. C : 1 200 × 3 + 36 = **3 636 €**. Recommandation attendue : **argumentée**, pas ​forcément la moins chère. A est économique mais sans engagement de disponibilité, sans sauvegarde incluse et sans localisation précisée ; B demande du temps d'administration ; C coûte le plus mais couvre sauvegarde, ​localisation et pénalités. Questions à l'offre A : où sont les données, quelle sauvegarde et quelle restauration, quelle réversibilité et quel délai de support.

**E2.** `-checkend 2592000` : code 0 ; `-checkend 8640000` : code **1**. Le sujet affiche `CN = portail.bellevigne.example` et les deux noms alternatifs ; ​validité de 90 jours à partir de la date de création.

## Bilan de compétences

Auto-évaluation ; B1.3 et B1.5 proposées, à valider.
