# Cours – Nom de domaine, hébergement et HTTPS

*BTS SIO SISR 2e année – Bloc 1 – S11*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Le cas : portail de réservation de salles de la mairie de Bellevigne

> **Situation (fictive).** La mairie de Bellevigne compte **35 agents** et six salles communales (salle des fêtes, salle du conseil, deux salles d'associations, gymnase, salle d'exposition). Les réservations se font par téléphone et dans un tableur partagé : **deux à trois doublons par mois**, des associations qui ne savent pas si une salle est libre, et un agent d'accueil qui passe plusieurs heures par semaine à répondre. La secrétaire générale souhaite un **portail de réservation en ligne**, ouvert aux associations et aux agents, avec un budget de **9 000 €** et une ouverture **dans quatre mois**. L'informatique est assurée par un technicien à mi-temps (toi, dans ce cas) et un prestataire pour l'hébergement.

Le portail est développé et testé. Reste à le **mettre en ligne** : un nom que les habitants retiennent, un endroit où l'héberger, une connexion chiffrée. Ces choix engagent la commune pour des années.

---

## 1. Le nom de domaine

Un **nom de domaine** (`bellevigne.example`) est un nom lisible rattaché à des adresses IP. Il se **loue** (on n'en est pas propriétaire) auprès d'un **bureau d'enregistrement**, pour une durée renouvelable.

À savoir avant de choisir :

- **Qui est le titulaire ?** La commune, et non le prestataire ou l'agent qui a fait la démarche. Un domaine enregistré au nom d'un prestataire est un risque de dépendance.
- **Qui reçoit les courriels de renouvellement ?** Une **adresse fonctionnelle** (`informatique@…`), pas une adresse personnelle.
- **Renouvellement automatique** et date d'échéance suivie dans l'agenda du service : un domaine expiré met le site **et la messagerie** hors service.
- **Verrouillage** du transfert et **double authentification** sur le compte du bureau d'enregistrement.

## 2. Le DNS : l'annuaire d'Internet

Le **DNS** traduit un nom en informations (adresse, serveur de messagerie…). Une **zone** est le fichier qui contient les **enregistrements** d'un domaine, tenus par des serveurs **faisant autorité**.

| Type | Rôle | Exemple dans la zone du TP |
|---|---|---|
| **SOA** | Début d'autorité : serveur principal, contact, **numéro de série**, durées | `2030030101` (année, mois, jour, numéro) |
| **NS** | Serveurs de noms du domaine | `ns1`, `ns2` (au moins deux, sur des réseaux différents) |
| **A** | Nom vers adresse IPv4 | `portail` vers `203.0.113.30` |
| **AAAA** | Nom vers adresse IPv6 | (non utilisé ici) |
| **CNAME** | Alias : un nom renvoie vers un autre nom | `www` vers `bellevigne.example.` |
| **MX** | Serveur de messagerie, avec une priorité (plus petit = préféré) | `10 mail.bellevigne.example.` |
| **TXT** | Texte libre, souvent pour la sécurité du courriel | `"v=spf1 mx -all"` |

**Le point final.** Dans un fichier de zone, un nom **terminé par un point** est complet (`mail.bellevigne.example.`). Sans point, le serveur **ajoute le domaine** : `mail.bellevigne.example` devient `mail.bellevigne.example.bellevigne.example.` Oublier le point final est l'erreur la plus fréquente.

**Règles à retenir :**

- Un nom qui porte un **CNAME** ne peut porter **aucun autre enregistrement** (pas de A à côté d'un CNAME).
- Une valeur de **MX** ou de **NS** est un **nom**, jamais une adresse IP.
- À chaque modification de la zone, on **augmente le numéro de série**, sinon les serveurs secondaires ne se mettent pas à jour.
- Une adresse IPv4 est composée de **quatre nombres de 0 à 255**.

> [!NOTE]
> **SPF** (le TXT `v=spf1 mx -all`) liste les serveurs autorisés à envoyer du courrier pour le domaine : ici, uniquement ceux déclarés en MX ; `-all` demande de rejeter les autres. C'est une protection contre l'usurpation de l'adresse de la mairie. D'autres mécanismes (DKIM, DMARC) la complètent ; ils sont hors programme de cette séance.

## 3. Les outils de vérification

- **`named-checkzone domaine fichier`** : vérifie la syntaxe et la cohérence d'une zone **avant** de la publier. C'est un réflexe, comme `nginx -t` ou `apachectl configtest`.
- **`dig @serveur nom type`** : interroge un serveur précis. Sections utiles : `status` (NOERROR, NXDOMAIN), `ANSWER`, et le **TTL** (deuxième colonne).
- `dig +short nom type` donne seulement la valeur.

## 4. Le TTL : combien de temps une réponse reste en mémoire

Le **TTL** (*time to live*) indique, en secondes, combien de temps un résolveur peut **garder en mémoire** une réponse. Un TTL de 3 600 s = une heure.

Conséquence pour une **migration** (changer l'adresse du portail) : après la modification, certains utilisateurs verront l'ancienne adresse **jusqu'à un TTL** plus tard.

> [!NOTE]
> **Méthode de migration sans coupure.** 1) Bien avant, **abaisser le TTL** (par exemple de 3 600 à 300 s) et **attendre l'ancien TTL**. 2) Préparer et **tester** le nouveau serveur, l'ancien restant actif. 3) **Changer l'adresse** dans la zone (série + 1). 4) Surveiller ; l'ancien serveur reste actif jusqu'à ce que les accès cessent. 5) **Remonter le TTL**. Le TTL abaissé coûte un peu plus de requêtes vers vos serveurs de noms : on le fait pour la période du changement seulement.

## 5. Choisir un hébergement

| Option | Principe | Avantage | Limite |
|---|---|---|---|
| **Mutualisé** | Un serveur partagé entre plusieurs clients | Peu cher, rien à administrer | Peu de contrôle, performances variables |
| **Serveur privé virtuel (VPS)** | Une machine virtuelle à soi | Contrôle complet | **On administre** : mises à jour, sauvegardes, sécurité |
| **Auto-hébergé** | Dans les locaux de la commune | Maîtrise totale | Électricité, réseau, astreinte, sécurité physique à gérer |
| **Infogérance / SaaS** | Un prestataire exploite tout | Le moins de travail interne | Plus cher, dépendance au prestataire |

**Critères au-delà du prix**, à écrire dans le comparatif :

| Critère | Question à poser |
|---|---|
| **Disponibilité** | Quel engagement de service (SLA) ? Quelle pénalité en cas de manquement ? |
| **Localisation des données** | Où sont hébergées les données (pays) ? Qui peut y accéder ? Le sous-traitant est-il soumis à un droit hors Union européenne ? |
| **Sauvegarde** | Fréquence, durée de conservation, **test de restauration** ? |
| **Sécurité** | Mises à jour, pare-feu, journalisation, certification éventuelle |
| **Réversibilité** | Comment récupère-t-on nos données et notre site si on change de prestataire, et en combien de temps ? |
| **Support** | Horaires, délai de réponse |
| **Contrat** | Durée, préavis, évolution des prix |

Pour un organisme public traitant des données d'habitants, la **localisation des données** et la **réversibilité** pèsent lourd. Les exigences précises applicables à la commune sont **à vérifier** auprès de la direction et du délégué à la protection des données.

**Coût sur trois ans** (*coût total de possession*) : on additionne le prix d'hébergement, les options nécessaires (sauvegarde), le **temps interne** valorisé et le nom de domaine. Le moins cher à l'achat n'est pas toujours le moins cher à l'usage, ni le plus adapté.

## 6. HTTPS et certificats

**HTTPS** chiffre les échanges entre le navigateur et le serveur et **prouve l'identité** du site. Il s'appuie sur un **certificat** délivré par une **autorité de certification** reconnue par les navigateurs.

Un certificat contient notamment : le **nom** du site (champ *subject* et liste *subjectAltName*, qui doit contenir **tous les noms utilisés**), les dates de **début et de fin de validité**, l'autorité émettrice.

Points d'attention :

- Un certificat **expiré** ou ne couvrant pas le nom affiche une **alerte** : les habitants quittent le site.
- Les durées de validité **raccourcissent** : l'autorité Let's Encrypt délivre par défaut des certificats de **90 jours** et a annoncé des durées plus courtes à terme (**à revérifier** sur son site). Le renouvellement **à la main** n'est donc plus tenable : on l'**automatise** avec le protocole **ACME** (outil client, tâche planifiée).
- On **supervise** la date de fin (voir la supervision du bloc 2) et on teste le renouvellement avant la date limite.
- Une redirection automatique de `http://` vers `https://` évite les accès non chiffrés.

**Je vérifie.** Le certificat du portail couvre `portail.bellevigne.example`. Les habitants tapent aussi `www.bellevigne.example`. Qu'arrive-t-il, et que corriger ?

<details markdown="1">
<summary>Voir la réponse</summary>

Pour `www`, le navigateur affiche une alerte de nom non couvert. Il faut un certificat dont la liste des noms alternatifs contient aussi `www.bellevigne.example`, ou rediriger `www` vers le bon nom.
</details>

## Ce que tu dois retenir de la séance

- Le **domaine** se loue : titulaire = la commune, renouvellement automatique et suivi, compte protégé.
- **Zone DNS** : A, CNAME, MX, TXT, NS, SOA ; **point final** ; **un CNAME seul sur son nom** ; **série + 1** ; `named-checkzone` avant publication.
- **TTL** : l'abaisser **avant** une migration, le remonter après.
- **Hébergement** : comparer sur le coût sur 3 ans **et** sur disponibilité, localisation, sauvegarde, réversibilité.
- **HTTPS** : certificat valide, **tous les noms**, renouvellement **automatisé** et supervisé.
