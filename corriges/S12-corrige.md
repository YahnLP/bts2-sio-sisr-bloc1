# Corrigé S12 – Mettre le portail en conformité

*Réservé à l'enseignant. Test du bandeau **exécuté** avec jsdom. Le contenu juridique est **à vérifier** avant ​usage.*

## Partie A

| N° | Traceur ? | Consentement ? | Pourquoi |
|---|---|---|---|
| 1 | Oui | Non (exempté) | Session nécessaire au service demandé |
| 2 | Oui (stockage local) | Non (exempté) | Sert à respecter le choix de l'utilisateur |
| 3 | Oui (tiers) | **Oui** | Le tiers dépose des traceurs pour son propre compte |
| 4 | Oui (tiers) | **Oui** | Le script du réseau peut lire ou écrire des traceurs |
| 5 | Non | – | Rien n'est écrit sur le ​terminal ; mais l'IP est une **donnée personnelle** (registre, durée, information) |
| 6 | Oui (stockage local) | Non (exempté) | Personnalisation demandée par l'utilisateur |

Deux éléments nécessitent un consentement (3 et 4).

## Partie B – défauts du bandeau

| Défaut | Correction |
|---|---|
| ​Acceptation par « poursuite de la navigation » (texte) | Acte positif : deux boutons, aucun consentement implicite |
| Pas de bouton « Refuser » : seul « J'accepte », mis en valeur ; « En savoir plus » minuscule | « Accepter » et « Refuser » de même niveau et de même aspect |
| Cookie `pub_id` déposé **dès l'ouverture** | ​Aucun traceur soumis à consentement avant le choix |
| Carte tierce chargée **avant** tout choix | Charger après « Accepter » ​seulement |
| Information vague (« améliorer votre expérience ») | Dire qui dépose quoi, pour quelle finalité |
| Cookie de durée **d'un an** pour un identifiant publicitaire sans finalité annoncée | Durée limitée et justifiée, finalité annoncée |
| Aucun moyen de revenir sur le choix | Lien « ​Gérer mes choix » permanent |
| Le bandeau est supprimé même sans choix éclairé, sans mémorisation du refus | Mémoriser le choix (exempté) |

Le plus grave : le dépôt du traceur et le chargement de la carte **avant** tout choix, car ils rendent le consentement ​ultérieur sans objet. Défauts visibles à l'ouverture : texte d'acceptation implicite, absence de « Refuser ». Défauts visibles dans le code : cookie, carte, absence de retrait.

## Partie C

`node test_consent.js` affiche `Consentement OK`. Création de la carte : `afficherCarte` ; mémorisation : `ecrireChoix` ; retrait du choix : le gestionnaire de `gerer-cookies` ; au chargement : `appliquer(lireChoix())`. Si `appliquer` ​appelle `afficherCarte()` quel que soit le choix, l'assertion « pas de carte avant choix » échoue. Test supplémentaire :

```js
d.getElementById("accepter").click(); d.getElementById("refuser").click();
assert.strictEqual(d.querySelectorAll("iframe").length, 0);
```

## Partie D – éléments de référence (fictifs)

**Éditeur :** Commune de Bellevigne, place de l'Hôtel-de-Ville, téléphone et courriel ​fictifs. **Directrice de publication :** la secrétaire générale. **Hébergeur :** nom, adresse et téléphone du prestataire (fictifs). **Protection des données :** responsable du traitement = la commune ; contact du délégué = adresse fonctionnelle fictive ; lien vers la politique de confidentialité.

| Champ | Contenu de référence |
|---|---|
| Finalité | ​Gérer les demandes et réservations de salles communales |
| Personnes concernées | Associations (représentants), agents, habitants |
| Données collectées | Nom, courriel, téléphone, organisme, salle, date et horaire. Pas de donnée ​sensible |
| Base légale | Mission d'intérêt public de la commune (à confirmer par le délégué) |
| Destinataires | Service accueil et service des salles ; l'hébergeur en tant que sous-traitant |
| Durée de conservation (proposition) | Réservations : durée à fixer, par exemple ​trois ans après la date de l'événement (à valider) ; journaux : durée à fixer, accès restreint (à valider) |
| Mesures de sécurité | Comptes nominatifs, mots de passe robustes, HTTPS, requêtes préparées, ​sauvegardes chiffrées et testées, droits minimaux sur la base |

Informations à demander à la direction : identité exacte du directeur de publication, coordonnées ​officielles, coordonnées du délégué, nom de l'hébergeur contractuel, durées validées. **Ne rien inventer** (identifiant d'organisme, certification, numéro d'enregistrement).

## Partie E

**E1.** Dans l'heure : accuser réception, **transmettre au délégué** à la protection des ​données, noter la date de réception (le délai de réponse court dès la réception). Ne pas supprimer seul. Vérifier : **l'identité** du demandeur (qu'il est bien le représentant de l'association), le **périmètre** (ses données personnelles et non celles de l'association), les **obligations de conservation** ou la mission d'intérêt public qui limitent l'effacement, et la **réservation à venir** (la supprimer annule l'événement : à décider avec le demandeur).

**E2.1** (exemple) : 1. demander à l'agente de **ne rien ​supprimer** et de noter ce qu'elle a envoyé ; 2. **alerter le délégué** et la direction ; 3. contacter le destinataire pour demander la **suppression** et une confirmation écrite ; 4. **documenter** (qui, quoi, quand, combien de personnes) ; 5. évaluer le **risque** (données de contact, 14 personnes) avec le délégué. **E2.2** : le délai court à partir de la prise de ​connaissance, soit 16 h 10 le mardi ; la décision de notifier appartient au responsable du traitement, avec l'avis du délégué. **E2.3** : 72 h après mardi 16 h 10 = **vendredi 16 h 10**.

## Bilan de compétences

Auto-évaluation ; B1.3 proposée, à valider.
