# Corrigé S06 – La page des salles

*Réservé à l'enseignant. Page de référence **testée** : document bien formé, contrastes mesurés.*

## Partie B – salles.html de référence

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Salles communales – Mairie de Bellevigne</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Salles communales</h1>
    <nav aria-label="Navigation principale">
      <ul>
        <li><a href="salles.html">Les salles</a></li>
        <li><a href="#reservation">Réserver</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section aria-labelledby="titre-salles">
      <h2 id="titre-salles">Les salles disponibles</h2>
      <table id="tableau-salles">
        <caption>Capacité et équipements de chaque salle</caption>
        <thead>
          <tr><th scope="col">Salle</th><th scope="col">Capacité</th><th scope="col">Équipements</th></tr>
        </thead>
        <tbody>
          <tr><td>Salle des fêtes</td><td>200</td><td>Scène, sonorisation, cuisine</td></tr>
          <tr><td>Salle du conseil</td><td>40</td><td>Vidéoprojecteur</td></tr>
          <tr><td>Salle des associations A</td><td>25</td><td>Tables modulables</td></tr>
          <tr><td>Salle des associations B</td><td>15</td><td>Tableau blanc</td></tr>
          <tr><td>Gymnase</td><td>120</td><td>Vestiaires</td></tr>
          <tr><td>Salle d'exposition</td><td>60</td><td>Cimaises, éclairage</td></tr>
        </tbody>
      </table>
    </section>

    <section aria-labelledby="titre-reservation" id="reservation">
      <h2 id="titre-reservation">Demander une réservation</h2>
      <form id="formulaire" action="reserver.php" method="post" novalidate>
        <p><label for="nom">Nom de l'association</label>
           <input type="text" id="nom" name="nom" required></p>
        <p><label for="courriel">Courriel</label>
           <input type="email" id="courriel" name="courriel" required></p>
        <p><label for="salle">Salle</label>
           <select id="salle" name="salle">
             <option value="1">Salle des fêtes</option>
             <option value="2">Salle du conseil</option>
             <option value="3">Salle des associations A</option>
             <option value="4">Salle des associations B</option>
             <option value="5">Gymnase</option>
             <option value="6">Salle d'exposition</option>
           </select></p>
        <p><label for="jour">Date</label>
           <input type="date" id="jour" name="jour" required></p>
        <p><label for="debut">Début</label>
           <input type="time" id="debut" name="debut" required></p>
        <p><label for="fin">Fin</label>
           <input type="time" id="fin" name="fin" required></p>
        <p><button type="submit">Envoyer la demande</button></p>
        <p id="message" role="status" aria-live="polite"></p>
      </form>
    </section>
  </main>

  <footer>
    <p>Mairie de Bellevigne (commune fictive) – exemple pédagogique</p>
  </footer>
  <script src="salles.js"></script>
</body>
</html>
```

## Partie C – style.css de référence

```css
:root {
  --fond: #ffffff;
  --texte: #1a1a1a;
  --bandeau: #1f3a5f;
  --bandeau-texte: #ffffff;
  --accent: #0b5cad;
  --erreur: #b00020;
}
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  line-height: 1.5;
  color: var(--texte);
  background: var(--fond);
}
header {
  background: var(--bandeau);
  color: var(--bandeau-texte);
  padding: 1rem;
}
header a { color: var(--bandeau-texte); }
nav ul { display: flex; gap: 1rem; list-style: none; margin: 0; padding: 0; }
main { max-width: 60rem; margin: 0 auto; padding: 1rem; }
table { border-collapse: collapse; width: 100%; }
th, td { border: 1px solid #767676; padding: 0.5rem; text-align: left; }
th { background: #e8eef5; }
label { display: block; font-weight: 600; }
input, select, button { font: inherit; padding: 0.4rem; min-width: 14rem; }
button { background: var(--accent); color: #ffffff; border: 0; border-radius: 4px; cursor: pointer; }
:focus-visible { outline: 3px solid #ffbf47; outline-offset: 2px; }
.erreur { color: var(--erreur); font-weight: 600; }
.masque { display: none; }
footer { text-align: center; padding: 1rem; font-size: 0.9rem; }
@media (max-width: 600px) {
  nav ul { flex-direction: column; }
  th, td { padding: 0.3rem; font-size: 0.9rem; }
  input, select, button { width: 100%; }
}
```

## Partie D

Contrastes : texte courant 17,4:1 ; ​bandeau 11,48:1 ; bouton 6,67:1 ; message d'erreur 7,33:1. Défauts classiques à relever : focus supprimé, `label` oubliés, plusieurs `h1`, tableau sans `caption`, champ sans `name`. Accepter toute mise en forme **tant que** la structure sémantique, les libellés et les contrastes sont respectés.

## Bilan de compétences

Auto-évaluation ; B1.3 et B1.5 ​proposées, à valider.
