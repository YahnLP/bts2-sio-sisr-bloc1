// Audit simplifié : cinq contrôles automatiques (ne remplace pas un audit complet)
// Usage : node audit.js page.html
const fs = require("fs");
const { JSDOM } = require("jsdom");
const dom = new JSDOM(fs.readFileSync(process.argv[2], "utf8"));
const doc = dom.window.document;
const problemes = [];

if (!doc.documentElement.getAttribute("lang")) problemes.push("La langue de la page n'est pas déclarée (attribut lang).");

doc.querySelectorAll("img").forEach(function (img) {
  if (!img.hasAttribute("alt")) problemes.push("Image sans attribut alt : " + img.getAttribute("src"));
});

doc.querySelectorAll("input:not([type=hidden]):not([type=submit])").forEach(function (champ) {
  const id = champ.id;
  const etiquette = id && doc.querySelector('label[for="' + id + '"]');
  if (!etiquette && !champ.getAttribute("aria-label")) {
    problemes.push("Champ sans étiquette : " + (champ.getAttribute("name") || "(sans nom)"));
  }
});

let precedent = 0;
doc.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(function (t) {
  const niveau = Number(t.tagName.substring(1));
  if (precedent && niveau > precedent + 1) problemes.push("Saut de niveau de titre : h" + precedent + " puis h" + niveau + " (« " + t.textContent.trim() + " »).");
  precedent = niveau;
});

doc.querySelectorAll("a").forEach(function (a) {
  if (/^(cliquez ici|ici|en savoir plus|lire la suite)$/i.test(a.textContent.trim())) problemes.push("Lien dont l'intitulé est vague : « " + a.textContent.trim() + " ».");
});

doc.querySelectorAll("[onclick]").forEach(function (e) {
  if (!["BUTTON", "A", "INPUT"].includes(e.tagName)) problemes.push("Élément <" + e.tagName.toLowerCase() + "> cliquable mais non utilisable au clavier.");
});

if (problemes.length === 0) console.log("Aucun problème détecté par ces cinq contrôles.");
else { console.log(problemes.length + " problème(s) détecté(s) :"); problemes.forEach(function (p) { console.log("- " + p); }); }
