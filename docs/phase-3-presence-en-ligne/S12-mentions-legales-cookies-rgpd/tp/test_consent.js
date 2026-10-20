const { JSDOM } = require("jsdom");
const fs = require("fs"); const assert = require("assert");
const frag = fs.readFileSync("consentement_fragment.html", "utf8");
const js = fs.readFileSync("consentement.js", "utf8");
function page(stock) {
  const dom = new JSDOM("<!DOCTYPE html><body>" + frag + "</body>", { runScripts: "outside-only", url: "https://portail.bellevigne.example/" });
  if (stock) dom.window.localStorage.setItem("consentement-carte", stock);
  dom.window.eval(js); return dom;
}
let dom = page(null), d = dom.window.document;
assert.strictEqual(d.querySelectorAll("iframe").length, 0, "pas de carte avant choix");
assert.strictEqual(d.getElementById("bandeau-consentement").hidden, false);
d.getElementById("accepter").click();
assert.strictEqual(d.querySelectorAll("iframe").length, 1); assert.strictEqual(d.getElementById("bandeau-consentement").hidden, true);
assert.strictEqual(dom.window.localStorage.getItem("consentement-carte"), "accepte");
d.getElementById("accepter").click(); assert.strictEqual(d.querySelectorAll("iframe").length, 1, "pas de doublon");
d.getElementById("gerer-cookies").click();
assert.strictEqual(d.querySelectorAll("iframe").length, 0, "retrait du consentement : carte retirée"); assert.strictEqual(d.getElementById("bandeau-consentement").hidden, false);
d.getElementById("refuser").click();
assert.strictEqual(d.querySelectorAll("iframe").length, 0); assert.strictEqual(dom.window.localStorage.getItem("consentement-carte"), "refuse");
dom = page("accepte"); assert.strictEqual(dom.window.document.querySelectorAll("iframe").length, 1, "choix mémorisé");
dom = page("refuse"); assert.strictEqual(dom.window.document.querySelectorAll("iframe").length, 0);
console.log("Consentement OK");
