<?php
// À NE JAMAIS FAIRE : la saisie est collée dans la requête
require 'connexion.php';
$pdo = connecter();
$association = $_GET['association'] ?? '';
$sql = "SELECT association, courriel FROM reservations WHERE association = '$association'";
foreach ($pdo->query($sql) as $ligne) {
    echo $ligne['association'] . ' : ' . $ligne['courriel'] . "\n";
}
