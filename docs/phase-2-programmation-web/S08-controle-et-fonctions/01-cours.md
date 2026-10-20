# Cours – Structures de contrôle et fonctions

*BTS SIO SISR 2e année – Bloc 1 – S08*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

Un site qui fait des **calculs** (créneaux libres, tarifs, taux d'occupation) repose sur quelques outils : **tester** une condition, **répéter** une action, **ranger** des données, et **découper** le travail en **fonctions**. Ces outils se retrouvent dans tous les langages (JavaScript, PHP, Python, Bash).

---

## 1. Conditions

```js
if (capacite >= 100) {
  type = "grande salle";
} else if (capacite >= 30) {
  type = "salle moyenne";
} else {
  type = "petite salle";
}
```

Une condition combine des comparaisons avec `&&` (et), `||` (ou), `!` (non). L'ordre des tests compte : le premier vrai l'emporte.

## 2. Boucles

| Boucle | Quand l'utiliser |
|---|---|
| `for (let i = 0; i < n; i++) { ... }` | On connaît le nombre de tours |
| `while (condition) { ... }` | On répète tant qu'une condition est vraie |
| `tableau.forEach(f)` | Parcourir tous les éléments |

Une boucle `while` dont la condition ne devient jamais fausse **ne s'arrête pas** (boucle infinie) : on vérifie que la valeur testée **évolue**.

## 3. Tableaux et objets

```js
const reservations = [
  { debut: 540, fin: 660 },    // 9 h - 11 h
  { debut: 840, fin: 930 },    // 14 h - 15 h 30
];
reservations.length;                                  // 2
reservations.some(r => r.fin > 900);                  // vrai si au moins une
reservations.filter(r => r.debut < 600);              // sous-liste
reservations.reduce((s, r) => s + (r.fin - r.debut), 0);   // total des durées
```

`some`, `filter`, `map`, `reduce` évitent des boucles écrites à la main : elles disent **ce qu'on veut** plus que **comment**.

## 4. Fonctions

Une **fonction** a un **nom**, des **paramètres** (entrées) et **renvoie** une valeur (sortie) :

```js
function enMinutes(texte) {
  const [h, m] = texte.split(":").map(Number);
  return h * 60 + m;
}
enMinutes("09:30");   // 570
```

Bonnes pratiques :

- **Une fonction, une tâche** : courte (quelques lignes), au nom explicite (`estLibre`, `creneauxLibres`).
- **Pure** quand c'est possible : elle ne dépend que de ses paramètres et ne modifie rien ailleurs ; on peut donc la **tester** facilement.
- Pas de **valeurs magiques** : un nom (`ouverture`, `duree`) vaut mieux que `480`.
- On **réutilise** : `estLibre` sert à `creneauxLibres`.

## 5. Traduire une règle métier : le chevauchement

*Deux créneaux se chevauchent s'ils ont un instant commun.* Cela revient à : **chacun commence avant la fin de l'autre**.

```js
function chevauche(a, b) {
  return a.debut < b.fin && b.debut < a.fin;
}
```

| Cas | a | b | Résultat |
|---|---|---|---|
| Recouvrement partiel | 9 h–11 h | 10 h–12 h | **vrai** |
| Bout à bout | 9 h–11 h | 11 h–12 h | **faux** (11 h n'est pas occupée deux fois) |
| Inclusion | 9 h–12 h | 10 h–11 h | **vrai** |
| Disjoints | 9 h–10 h | 11 h–12 h | **faux** |

Le cas « bout à bout » est celui où l'on se trompe en écrivant `<=` au lieu de `<`.

## 6. Tester

Un **test automatique** compare le résultat réel au résultat attendu :

```js
const assert = require("assert");
assert.strictEqual(chevauche({ debut: 540, fin: 660 }, { debut: 660, fin: 720 }), false);
```

S'il y a un écart, le test **échoue** et dit où. Écrire les tests, c'est préciser la règle : on y met les **cas limites** (bout à bout, créneau vide, journée sans réservation). Un test qui échoue après une modification signale une **régression** : un comportement qui marchait et ne marche plus.

> [!NOTE]
> Lancer `node tests.js` : si tout va bien, le message final s'affiche ; sinon, la première assertion fausse interrompt le programme avec la valeur obtenue et la valeur attendue.

**Je vérifie.** Les réservations d'une salle sont 9 h–11 h et 14 h–15 h 30. L'ouverture est 8 h, la fermeture 18 h. Quel est le **taux d'occupation** ?

<details markdown="1">
<summary>Voir la réponse</summary>

Temps réservé : 2 h + 1 h 30 = 210 min. Temps ouvert : 10 h = 600 min. Taux = 210 / 600 = **0,35**, soit 35 %.
</details>

## Ce que tu dois retenir de la séance

- **Conditions**, **boucles**, **tableaux** (`some`, `filter`, `reduce`), **objets**.
- Une **fonction** : nom clair, paramètres, valeur renvoyée ; courte, **pure**, réutilisable.
- Chevauchement : `a.debut < b.fin && b.debut < a.fin` ; **bout à bout = pas de chevauchement**.
- Les **tests automatiques** fixent la règle, détectent les **régressions**, et se lisent comme un cahier des charges.
