// Version fournie pour la partie D : un défaut s'y cache
function chevauche(a, b) {
  return a.debut <= b.fin && b.debut <= a.fin;
}
if (typeof module !== "undefined") { module.exports = { chevauche }; }
