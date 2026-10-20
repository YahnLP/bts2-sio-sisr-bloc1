# Corrigé S13 – Lire une semaine de journal d'accès

*Réservé à l'enseignant. Tous les chiffres ont été **recalculés** avec `awk`, `sort`, `uniq` et `grep` sur le fichier fourni.*

## Partie A

1. **954** requêtes.
2. **70** adresses ​distinctes.
3. 2xx : **592** ; 3xx : **165** ; 4xx : **195** ; 5xx : **2** (total 954). Les 165 réponses 3xx sont toutes des **304** (cache).
4. Volume total : **2 818 417 octets** (≈ 2,8 Mo) ; moyenne : 2 818 417 / 954 ≈ **2 954 octets** par requête.

## Partie B

1. Robot : `192.0.2.99`, *user-agent* `Robot-Exemple/1.0 (+http://robot.example/info)`, **28** lignes ; il demande `/robots.txt` (404).
2. Scanners : `192.0.2.66` et `192.0.2.77`, **6** requêtes chacune, toutes en 404 (`/wp-login.php`, `/xmlrpc.php`, `/phpmyadmin/`, `/admin`, `/.env`).
3. 70 − 1 − 2 = **67** visiteurs.
4. `grep -v -e Robot-Exemple -e '^192.0.2.66' -e '^192.0.2.77' access.log | awk '{split($4,a,":"); print substr(a[1],2), $1}' | sort -u | awk '{print $1}' | uniq -c` :

| Date | ​Visiteurs |
|---|---|
| 10/03 | 21 |
| 11/03 | 23 |
| 12/03 | 28 |
| 13/03 | 23 |
| 14/03 | 23 |
| 15/03 | 11 |
| 16/03 | 9 |

5. Somme : 21 + 23 + 28 + 23 + 23 + 11 + 9 = **138**, supérieure aux **67** visiteurs distincts : les mêmes adresses reviennent d'un jour à l'autre. Le nombre de visiteurs distincts d'une période n'est pas la somme de ceux de ses sous-périodes. (Rappel : une adresse n'est pas une personne.)

## Partie C

1. Pages (visiteurs, GET, 200, sans `.css`/`.js`, sans paramètres) : `/salles.html` **182** ; `/` **98** ; `/reservations.php` **65** ; `/contact.html` **19** ; `/mentions-legales.html` **17**. Total de pages vues : **381**.
2. Heures les plus ​chargées (toutes requêtes de visiteurs) : 10 h (**93**), 7 h (**80**), 21 h (**79**), 12 h (**78**). Hypothèses : consultation au bureau, avant le travail, à la pause, en soirée.
3. `POST /reserver.php` : 200 × **37**, 400 × **6**, 409 × **11**, 500 × **2** ; total **56** ; taux de réussite 37 / 56 = **66,1 %**. Les 409 sont des **conflits de créneau** : les usagers choisissent un créneau déjà pris ; on propose d'**afficher les créneaux libres** ​avant la saisie (S08) et de mesurer l'évolution du taux.
4. Les 500 : consulter le **journal d'erreurs** du serveur à l'heure des deux requêtes (adresses `203.0.113.82` et `198.51.100.12`), reproduire, corriger, tester.

## Partie D

| Proposition | Traceur | Consentement | Risques |
|---|---|---|---|
| 1. Journaux | Non | Non | Données personnelles (IP) : durée et accès à maîtriser ; robots à filtrer |
| 2. ​Service tiers avec suivi entre sites | Oui | **Oui**, hors conditions d'exemption | Recoupement, transfert, dépendance |
| 3. Outil libre sur serveur communal, sans recoupement | Selon configuration | Non, **si** les ​conditions d'exemption sont respectées (**à vérifier**) | Travail d'exploitation, paramétrage rigoureux |

Recommandation attendue : **1 d'abord** (suffisant pour un tableau de bord communal), éventuellement **3** si un suivi plus fin est utile. À vérifier sur cnil.fr : conditions d'exemption, durées recommandées, information des utilisateurs.

## Partie E

1. Exemple : `<title>Contacter la mairie de Bellevigne – accueil et horaires</title>` (≈ 55 ​caractères) ; `<meta name="description" content="Coordonnées, horaires d'ouverture et formulaire pour joindre l'accueil de la mairie de Bellevigne.">` (≈ 100 caractères, on peut l'étoffer jusqu'à 150).
2. Un seul `h1` ; sous-titres en `h2` ; lien « Consultez les horaires d'ouverture de la mairie ».
3. `robots.txt` : tout robot (`User-agent: *`) ne doit pas explorer `/reserver.php` ni `/reservations.php` (résultats dynamiques, sans intérêt à indexer, nombreuses combinaisons) ; la ligne `Sitemap` donne l'adresse du plan. `xmllint --noout sitemap.xml` ne renvoie rien (fichier bien formé). Le plan couvre les quatre pages ​publiques (accueil, salles, contact, mentions légales) : rien ne manque aujourd'hui, mais il faut le **mettre à jour** à chaque nouvelle page. Rappel : `robots.txt` n'est pas une protection.
4. Créer un fichier `favicon.ico` (ou déclarer une icône dans la page) : cela supprime 159 erreurs inutiles et améliore la lecture des journaux.

## Bilan de compétences

Auto-évaluation ; B1.3 ​proposée, à valider.
