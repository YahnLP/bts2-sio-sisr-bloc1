# Cours – Mesurer l'audience et améliorer le référencement

*BTS SIO SISR 2e année – Bloc 1 – S13*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

Le portail est en ligne. La direction demande : **est-il utilisé ? par combien de personnes ? les habitants le trouvent-ils ?** Ces questions appellent des **mesures** et des **améliorations**, sans pour autant surveiller les personnes.

---

## 1. Le journal d'accès, une source de mesure

Le serveur web écrit une ligne par requête. Format « combiné » courant :

```
203.0.113.58 - - [10/Mar/2030:07:31:30 +0100] "GET / HTTP/1.1" 200 3286 "-" "Mozilla/5.0 …"
```

| Champ | Exemple | Sens |
|---|---|---|
| 1 | `203.0.113.58` | Adresse IP du client |
| 4 | `[10/Mar/2030:07:31:30 +0100]` | Date et heure |
| 6 et 7 | `"GET` et `/` | Méthode et ressource demandée |
| 9 | `200` | Code de réponse |
| 10 | `3286` | Taille envoyée, en octets |
| dernier | `"Mozilla/5.0 …"` | Identification du navigateur (*user-agent*) |

Avec `awk`, le champ 9 se désigne par `$9`. Avec `-F'"'`, le découpage se fait sur les guillemets.

**Codes de réponse à savoir lire :**

| Code | Sens | Action |
|---|---|---|
| **200** | Succès | – |
| **304** | Non modifié : le navigateur a utilisé son cache | Bon signe (cache efficace) |
| **301 / 302** | Redirection | Vérifier qu'elle est voulue |
| **400** | Requête invalide | Souvent une saisie refusée par le formulaire |
| **404** | Ressource introuvable | Lien cassé ? fichier manquant ? sondage de scanner ? |
| **409** | Conflit | Ici : créneau déjà réservé |
| **500** | Erreur du serveur | **À traiter** : consulter le journal d'erreurs |

## 2. Visiteurs, robots, scanners

Un journal mélange :

- des **visiteurs** (navigateurs) ;
- des **robots d'indexation**, souvent honnêtes : ils se déclarent dans le *user-agent* (« Robot-Exemple ») et demandent `robots.txt` ;
- des **scanners** malveillants ou automatiques, qui sondent des adresses classiques (`/wp-login.php`, `/xmlrpc.php`, `/phpmyadmin/`, `/.env`, `/admin`) même si le site n'utilise pas ces outils.

Pour compter des visiteurs, on **retire** les robots et scanners. Une adresse IP n'est **pas** une personne : plusieurs personnes peuvent partager une adresse (réseau d'entreprise, téléphonie mobile) et une personne peut changer d'adresse. Le nombre d'adresses distinctes est donc une **estimation**.

Les scanners ne sont pas un incident en soi : ils sont **permanents**. On vérifie que ces pages **n'existent pas**, que les logiciels sont à jour, et on peut **bloquer** les adresses qui insistent (filtre automatique comme `fail2ban`, règles du pare-feu applicatif, voir le bloc 3).

> [!NOTE]
> **Les visiteurs d'un jour ne s'additionnent pas.** Si 20 personnes viennent chaque jour pendant sept jours, ce sont rarement 140 personnes différentes : les mêmes reviennent. Le **nombre de visiteurs distincts sur la semaine** est inférieur à la somme des visiteurs de chaque jour.

## 3. Mesurer l'audience sans traceur

Il existe trois façons de mesurer :

| Méthode | Principe | Traceur sur le terminal | Remarques |
|---|---|---|---|
| **Journaux du serveur** | Analyse de ce que le serveur enregistre déjà | Non | Gratuit, maîtrisé, mais mélange robots et visiteurs |
| **Outil de mesure hébergé par la commune** | Script maison ou logiciel libre installé sur son serveur | Selon configuration | Maîtrise des données, travail d'exploitation |
| **Service tiers de mesure** | Un script externe envoie les données au fournisseur | Souvent oui | Risque de recoupement, de transfert, de consentement requis |

**Règle de la CNIL (à vérifier sur cnil.fr)** : la mesure d'audience peut être **dispensée de consentement** si elle sert **uniquement** aux **statistiques propres au site**, avec des données **anonymes** (ou rendues anonymes), **sans recoupement** avec d'autres traitements, **sans transmission** de données non anonymes à des tiers et **sans suivi de l'utilisateur sur plusieurs sites**. Elle reste soumise à l'**information** des utilisateurs. La CNIL recommande aussi une durée de vie limitée du traceur (13 mois) et une conservation limitée (25 mois), avec réexamen régulier.

Pour la commune, la voie la plus simple est d'abord l'**analyse des journaux** : aucun script ajouté, aucun traceur, aucune dépendance.

## 4. Le référencement : être trouvé honnêtement

Le **référencement naturel** (*SEO*) consiste à rendre le site **compréhensible** pour les moteurs de recherche, sans acheter de place. Ce qui pèse le plus se trouve dans les bases du site :

| Élément | Bonne pratique (ordres de grandeur) |
|---|---|
| **Titre de page** (`<title>`) | Unique par page, descriptif, souvent 50 à 60 caractères ; le nom de l'organisation à la fin |
| **Description** (`<meta name="description">`) | Une à deux phrases utiles, souvent 120 à 160 caractères ; elle apparaît dans les résultats |
| **Titres** `h1`, `h2`… | Un seul `h1` ; hiérarchie sans saut ; reflète le contenu |
| **Adresse (URL)** | Lisible (`/salles.html`), stable |
| **Contenus** | Textes utiles aux habitants, mis à jour ; images avec texte alternatif |
| **Vitesse et mobile** | Page légère, lisible sur téléphone (S15) |
| **Maillage** | Liens entre pages, intitulés explicites (pas « cliquez ici ») |

Deux fichiers à la racine aident les robots :

- **`robots.txt`** : indique aux robots **honnêtes** ce qu'ils peuvent explorer. **Ce n'est pas une protection** : il est public et les robots malveillants l'ignorent. On n'y « cache » jamais une page sensible ; on protège par authentification.
- **`sitemap.xml`** : liste des pages à explorer, au format XML. On le vérifie avec `xmllint --noout sitemap.xml`.

**Ce qu'on ne fait pas** : acheter des liens, répéter des mots-clés à outrance, cacher du texte : les moteurs pénalisent ces pratiques. Un portail public doit surtout être **exact et à jour**.

**Je vérifie.** Le journal montre `GET /robots.txt` en 404, 7 fois en une semaine. Est-ce grave ? Que faire ?

<details markdown="1">
<summary>Voir la réponse</summary>

Pas grave : ce sont des robots qui cherchent le fichier. Mais en publier un évite l'erreur et permet d'**indiquer le plan de site** et d'exclure les pages inutiles à explorer (résultats de formulaire). Ne pas y lister de pages sensibles.
</details>

## Ce que tu dois retenir de la séance

- Le **journal d'accès** donne beaucoup d'indicateurs sans aucun traceur ; on **retire** robots et scanners avant de compter.
- Une IP n'est **pas une personne** ; les visiteurs quotidiens **ne s'additionnent pas**.
- **404** nombreux : lien cassé ou scanner ; **500** : à corriger ; **409** et **400** : à lire avec le contexte.
- Mesure d'audience **sans consentement** seulement sous conditions strictes (**à vérifier**).
- Référencement : **titre**, **description**, **titres** hiérarchisés, URL lisibles, `sitemap.xml` ; `robots.txt` n'est **pas** une protection.
