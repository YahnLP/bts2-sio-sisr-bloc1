<?php
// Connexion à la base avec un compte à droits limités
function connecter(): PDO {
    $dsn = getenv('PORTAIL_DSN') ?: 'mysql:host=localhost;dbname=portail;charset=utf8mb4';
    $pdo = new PDO($dsn, getenv('PORTAIL_USER') ?: 'portail', getenv('PORTAIL_PASS') ?: 'motdepasse-de-labo', [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
    return $pdo;
}
