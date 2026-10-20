const assert = require("assert");
const c = require("./creneaux.js");

const reservations = [
  { debut: c.enMinutes("09:00"), fin: c.enMinutes("11:00") },
  { debut: c.enMinutes("14:00"), fin: c.enMinutes("15:30") },
];

assert.strictEqual(c.enMinutes("09:30"), 570);
assert.strictEqual(c.enTexte(570), "09:30");
assert.strictEqual(c.chevauche({ debut: 540, fin: 660 }, { debut: 600, fin: 720 }), true);
assert.strictEqual(c.chevauche({ debut: 540, fin: 660 }, { debut: 660, fin: 720 }), false); // bout à bout
assert.strictEqual(c.estLibre({ debut: c.enMinutes("11:00"), fin: c.enMinutes("12:00") }, reservations), true);
assert.strictEqual(c.estLibre({ debut: c.enMinutes("10:00"), fin: c.enMinutes("12:00") }, reservations), false);

const libres = c.creneauxLibres(reservations, c.enMinutes("08:00"), c.enMinutes("18:00"), 60);
assert.deepStrictEqual(libres, ["08:00", "11:00", "12:00", "13:00", "16:00", "17:00"]);
assert.strictEqual(c.tauxOccupation(reservations, c.enMinutes("08:00"), c.enMinutes("18:00")), 0.35);
console.log("Tous les tests passent");
