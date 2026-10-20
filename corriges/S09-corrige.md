# Corrigé S09 – Réservations en base

*Réservé à l'enseignant. Tout le code et toutes les requêtes ont été **testés** sur MariaDB 10.11 et PHP 8.3.*

## Partie B – reservations.php de référence

```php
<?php
require 'connexion.php';
$pdo = connecter();
$jour = $_GET['jour'] ?? '2030-03-15';
$requete = $pdo->prepare(
    'SELECT s.nom AS salle, r.association, r.debut, r.fin
       FROM reservations r JOIN salles s ON s.id = r.salle_id
      WHERE r.jour = ? ORDER BY s.nom, r.debut'
);
$requete->execute([$jour]);
echo "<table>\n";
foreach ($requete as $ligne) {
    printf("<tr><td>%s</td><td>%s</td><td>%s-%s</td></tr>\n",
        htmlspecialchars($ligne['salle']), htmlspecialchars($ligne['association']),
        substr($ligne['debut'], 0, 5), substr($ligne['fin'], 0, 5));
}
echo "</table>\n";
```

## Partie B – reserver.php de référence

```php
<?php
require 'connexion.php';
$pdo = connecter();

$salle = (int) ($_POST['salle'] ?? 0);
$nom = trim($_POST['nom'] ?? '');
$courriel = trim($_POST['courriel'] ?? '');
$jour = $_POST['jour'] ?? '';
$debut = $_POST['debut'] ?? '';
$fin = $_POST['fin'] ?? '';

// Contrôle côté serveur : le navigateur n'est jamais une garantie
if ($nom === '' || !filter_var($courriel, FILTER_VALIDATE_EMAIL) || $salle < 1
    || !preg_match('/^\d{4}-\d{2}-\d{2}$/', $jour)
    || !preg_match('/^\d{2}:\d{2}$/', $debut) || !preg_match('/^\d{2}:\d{2}$/', $fin) || $fin <= $debut) {
    http_response_code(400);
    exit("Demande invalide.\n");
}

// Un créneau est pris si un autre commence avant sa fin et finit après son début
$conflit = $pdo->prepare(
    'SELECT COUNT(*) FROM reservations WHERE salle_id = ? AND jour = ? AND debut < ? AND fin > ?'
);
$conflit->execute([$salle, $jour, $fin, $debut]);
if ((int) $conflit->fetchColumn() > 0) {
    http_response_code(409);
    exit("Ce créneau est déjà réservé.\n");
}

$ajout = $pdo->prepare(
    'INSERT INTO reservations (salle_id, association, courriel, jour, debut, fin) VALUES (?, ?, ?, ?, ?, ?)'
);
$ajout->execute([$salle, $nom, $courriel, $jour, $debut, $fin]);
echo "Réservation enregistrée.\n";
```

## Résultats attendus

| Demande | Code | Message |
|---|---|---|
| 10:00 → 12:00 (salle 1, 15 mars 2030) | 409 | Ce créneau est déjà ​réservé. |
| 11:00 → 12:00 | 200 | Réservation enregistrée. |
| Saisie invalide | 400 | Demande invalide. |

## Partie C – page corrigée

```php
<?php
require 'connexion.php';
$pdo = connecter();
$association = $_GET['association'] ?? '';
$requete = $pdo->prepare('SELECT association, courriel FROM reservations WHERE association = ?');
$requete->execute([$association]);
foreach ($requete as $ligne) {
    echo htmlspecialchars($ligne['association']) . ' : ' . htmlspecialchars($ligne['courriel']) . "\n";
}
```

Erreurs de la base attendues : `ERROR 1142 (42000) : DELETE command denied to user 'portail'@'localhost'` ; `ERROR 4025 (23000) : CONSTRAINT failed`. La saisie `x' OR '1'='1` ne renvoie plus rien avec la requête préparée.

## Partie D

Fiche de revue : au moins cinq points parmi requêtes préparées, contrôle serveur, `htmlspecialchars`, droits minimaux, ​erreurs sobres, secrets hors dépôt, données minimales ; chaque point accompagné d'un moyen de vérification.

## Bilan de compétences

Auto-évaluation ; B1.3 et B1.5 proposées, à valider.
