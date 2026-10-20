# Cours – Données, SQL, PHP et sécurité

*BTS SIO SISR 2e année – Bloc 1 – S09*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

Jusqu'ici, le portail affiche des salles écrites **dans la page**. Une vraie réservation doit être **enregistrée** quelque part, retrouvée, protégée. Les données vivent dans une **base de données** gérée par un **SGBD** (ici MariaDB) ; une page **PHP**, exécutée **sur le serveur**, fait le lien entre le navigateur et la base.

---

## 1. Le modèle relationnel

Une base contient des **tables** (colonnes = champs, lignes = enregistrements). Deux tables sont reliées par une **clé** :

| Table `salles` | | Table `reservations` | |
|---|---|---|---|
| **id** (clé primaire) | identifie une salle | **id** (clé primaire) | identifie une réservation |
| nom, capacite | | **salle_id** (clé étrangère) | renvoie vers `salles.id` |
| | | association, courriel, jour, debut, fin | |

- **Clé primaire** : identifiant unique de chaque ligne.
- **Clé étrangère** : valeur qui renvoie à la clé primaire d'une autre table ; le SGBD **refuse** une réservation pour une salle qui n'existe pas (intégrité).
- **Contraintes** (`NOT NULL`, `UNIQUE`, `CHECK (fin > debut)`) : la base **refuse** les données incohérentes, quelle que soit la page qui les envoie.

> [!NOTE]
> On range chaque information **une seule fois** : le nom de la salle est dans `salles`, pas répété dans chaque réservation. Renommer la salle se fait en un seul endroit.

## 2. SQL, l'essentiel

| Besoin | Requête |
|---|---|
| Lire | `SELECT nom, capacite FROM salles WHERE capacite >= 50 ORDER BY capacite DESC;` |
| Joindre deux tables | `SELECT s.nom, r.debut FROM reservations r JOIN salles s ON s.id = r.salle_id;` |
| Compter / regrouper | `SELECT s.nom, COUNT(*) FROM reservations r JOIN salles s ON s.id = r.salle_id GROUP BY s.nom;` |
| Ajouter | `INSERT INTO reservations (salle_id, association, ...) VALUES (1, 'Club', ...);` |
| Modifier | `UPDATE salles SET capacite = 180 WHERE id = 1;` |
| Supprimer | `DELETE FROM reservations WHERE id = 3;` |

> [!WARNING]
> Un `UPDATE` ou un `DELETE` **sans `WHERE`** touche **toutes** les lignes. On vérifie d'abord avec un `SELECT` de même condition, et on dispose d'une **sauvegarde** (S11 de première année).

### Le chevauchement en SQL

La règle de S08 devient une condition : une réservation **existante** gêne un créneau demandé (`debut_demande`, `fin_demande`) si elle commence **avant** la fin demandée et finit **après** le début demandé :

```sql
SELECT COUNT(*) FROM reservations
 WHERE salle_id = 1 AND jour = '2030-03-15'
   AND debut < '12:00' AND fin > '10:00';
```

Résultat 0 : créneau libre ; supérieur à 0 : refus.

## 3. PHP et PDO

**PHP** s'exécute sur le serveur : le navigateur ne reçoit que le HTML produit. **PDO** est l'interface standard pour parler à la base.

```php
$pdo = new PDO($dsn, $utilisateur, $motdepasse, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
$requete = $pdo->prepare('SELECT nom FROM salles WHERE capacite >= ?');
$requete->execute([50]);
foreach ($requete as $ligne) { echo htmlspecialchars($ligne['nom']); }
```

## 4. L'injection SQL

Si l'on **colle** la saisie de l'utilisateur dans la requête :

```php
$sql = "SELECT * FROM reservations WHERE association = '$association'";
```

et que l'utilisateur saisit `x' OR '1'='1`, la requête devient `... WHERE association = 'x' OR '1'='1'` : **toutes** les lignes sont renvoyées. Avec d'autres saisies, on peut lire d'autres tables, modifier ou détruire des données. C'est l'**injection SQL**, l'une des attaques les plus courantes sur les sites web.

**Remède : la requête préparée.** On envoie d'abord la **requête avec des marqueurs** (`?`), puis les **valeurs** à part : le SGBD ne les interprète **jamais** comme du code.

```php
$requete = $pdo->prepare('SELECT association, courriel FROM reservations WHERE association = ?');
$requete->execute([$association]);
```

## 5. Les bonnes pratiques de sécurité

| Principe | Application |
|---|---|
| **Requêtes préparées** | Toujours, pour toute valeur venue de l'extérieur |
| **Contrôle côté serveur** | Refaire les validations de S07 : format, longueur, cohérence (fin après début) |
| **Échappement de l'affichage** | `htmlspecialchars` avant d'écrire dans la page : empêche l'injection de script (XSS) |
| **Moindre privilège** | Le compte de la base utilisé par le site n'a que `SELECT` et `INSERT` sur sa base, pas `DELETE`, pas `DROP`, pas de droits sur les autres bases |
| **Secrets hors du code public** | Identifiants dans la configuration du serveur, jamais dans un dépôt public |
| **Messages d'erreur sobres** | Ne pas afficher les erreurs SQL à l'utilisateur ; les consigner dans un journal |
| **Données personnelles** | Collecter le minimum (RGPD) : un courriel de contact suffit ; durée de conservation définie |

**Je vérifie.** Le compte `portail` a seulement `SELECT` et `INSERT`. Un attaquant réussit une injection : que peut-il faire, que ne peut-il pas faire ?

<details markdown="1">
<summary>Voir la réponse</summary>

Il peut **lire** les tables auxquelles le compte a accès (y compris des données personnelles) et **ajouter** des lignes : l'injection reste grave. Il ne peut pas supprimer ni modifier les données ni détruire les tables, et ne touche pas aux autres bases. Le moindre privilège **limite les dégâts** ; il ne remplace pas les requêtes préparées.
</details>

## Ce que tu dois retenir de la séance

- Deux tables reliées par une **clé étrangère** ; les **contraintes** protègent la cohérence.
- `SELECT … WHERE … ORDER BY`, `JOIN`, `GROUP BY`, `INSERT` ; **`UPDATE` / `DELETE` toujours avec `WHERE`**.
- **Injection SQL** : saisie collée dans la requête. **Requêtes préparées** : saisie envoyée à part.
- **Le serveur contrôle** ; **moindre privilège** ; `htmlspecialchars` à l'affichage ; erreurs non affichées.
