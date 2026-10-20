# Corrigé S14 – Gérer ce qui se dit en ligne

*Réservé à l'enseignant. Chiffres **recalculés** avec `awk` sur `avis.csv`. Aspects juridiques à vérifier.*

## Partie A

1. 12 avis ; somme des notes = 5 + 4 + 5 + 1 + 4 + 5 + 3 + 2 + 5 + 4 + 1 + 5 = **44** ; note ​moyenne = 44 / 12 ≈ **3,67**.
2. 5 étoiles : **5** ; 4 étoiles : **3** ; 3 étoiles : **1** ; 2 étoiles : **1** ; 1 étoile : **2** (total 12 ; 25 + 12 + 3 + 2 + 2 = 44).
3. 3 avis sur 12 : **25 %**.
4. Thèmes des négatifs : chauffage en panne le jour d'une réunion (panne matérielle, **sans réponse du service**) ; courriel resté une semaine sans réponse ; doublon de réservation. **Deux avis sur trois** concernent l'absence de réponse : la réputation souffre du **silence** plus que de l'incident lui-même.
5. ​Échantillon de 12 avis : peu fiable ; la moyenne bouge beaucoup à chaque avis ; donner le nombre d'avis et éviter les conclusions fortes.

Commandes : `awk -F';' 'NR>1{s+=$2;n++; if($2<=2)neg++} END{printf "%d avis, moyenne %.2f, négatifs %d\n",n,s/n,neg}' avis.csv` et `awk -F';' 'NR>1{c[$2]++} END{for(k in c)print k,c[k]}' avis.csv | sort -rn`.

## Partie B

Exemple de réponse à l'avis « chauffage » : « Bonjour, nous sommes désolés pour cette gêne pendant votre réunion. Nous vérifions ce qui s'est passé et nous mettons en ​place un contact d'urgence pour les jours de réservation. Pouvez-vous écrire à l'adresse du service (adresse fonctionnelle) afin que nous reprenions le dossier avec vous ? Le service des salles. »

Défauts de la réponse du collègue : **divulgue** le nom d'une association et d'une personne ; **accuse** l'usager ; **suppose** qu'il n'a pas lu le règlement ; **se défausse** (« pas responsables ») sans proposer de suite ; **aucun canal privé** ; ton sec. Le plus grave : la **divulgation de données ​personnelles** en public.

Version correcte : « Bonjour, nous sommes désolés que votre événement ait été touché par un doublon. Nous recherchons ce qui s'est passé et nous améliorons l'affichage des créneaux libres pour éviter ce cas. Pouvez-vous nous écrire à l'adresse du service afin d'examiner votre dossier ? Le service des salles. »

## Partie C

Contrôler : rôles ​nommés (rédacteur, validateur, suppléant), ton, comptes officiels séparés, mots de passe uniques gérés dans un coffre, **double authentification**, aucune donnée ni image de personne sans accord, gestion de crise (alerte, point de contact, décision de couper), agents : **à ​vérifier** avec la direction.

## Partie D

1. Sources : cartes et moteurs de recherche, réseaux sociaux officiels, presse locale, groupes publics de quartier. Alertes : nom de la commune, de la mairie, des salles. Responsable désigné, consultation hebdomadaire. ​Indicateurs : note moyenne et nombre d'avis, part de négatifs, délai de réponse, thèmes. Seuil : tout avis noté 1 ou 2, ou plus de deux négatifs dans la semaine. Alerte : secrétaire générale et délégué à la protection des données si des données ​personnelles sont publiées.
2. Avec *k* avis à 5 étoiles : (44 + 5k) / (12 + k) ≥ 4 ⇒ 44 + 5k ≥ 48 + 4k ⇒ **k ≥ 4**. Vérification : (44 + 20) / 16 = 4,0. Avec 8 avis à 5 : (44 + 40) / 20 = **4,2**.

## Partie E

Pas de correction chiffrée : contrôler la **cohérence** du plan (actions concrètes, délais, séparation pro et perso, double authentification, préparation du portfolio) sans exiger de preuve de comptes personnels.

## Bilan de compétences

Auto-évaluation ; B1.3 et B1.6 proposées, à valider.
