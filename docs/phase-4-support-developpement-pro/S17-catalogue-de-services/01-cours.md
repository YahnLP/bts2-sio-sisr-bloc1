# Cours – Catalogue de services et mise à disposition

*BTS SIO SISR 2e année – Bloc 1 – S17*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Le cas : portail de réservation de salles de la mairie de Bellevigne

> **Situation (fictive).** La mairie de Bellevigne compte **35 agents** et six salles communales (salle des fêtes, salle du conseil, deux salles d'associations, gymnase, salle d'exposition). Les réservations se font par téléphone et dans un tableur partagé : **deux à trois doublons par mois**, des associations qui ne savent pas si une salle est libre, et un agent d'accueil qui passe plusieurs heures par semaine à répondre. La secrétaire générale souhaite un **portail de réservation en ligne**, ouvert aux associations et aux agents, avec un budget de **9 000 €** et une ouverture **dans quatre mois**. L'informatique est assurée par un technicien à mi-temps (toi, dans ce cas) et un prestataire pour l'hébergement.

Le portail est en service. Les agents demandent un compte, un poste, une boîte partagée ; ils signalent une imprimante en panne ou une anomalie du portail. Sans **règle écrite**, chacun ignore ce qu'il peut demander, en combien de temps, et à qui. Le **catalogue de services** met ces règles par écrit.

---

## 1. Qu'est-ce qu'un service ?

Un **service informatique** est une prestation rendue aux utilisateurs pour répondre à un besoin, **sans qu'ils aient à gérer** la technique qui la produit. Le service « messagerie » existe pour l'agent ; les serveurs, les sauvegardes et les comptes sont ce qui le **produit**.

Un **catalogue de services** est la liste, **connue des utilisateurs**, de ce que le service informatique propose, avec pour chaque service les conditions de son usage.

## 2. La fiche d'un service

| Rubrique | Question |
|---|---|
| **Nom et description** | À quoi ça sert, en une phrase d'utilisateur |
| **Bénéficiaires** | Qui peut le demander ? |
| **Type** | **Demande** de service ou service **en production** |
| **Comment l'obtenir** | Formulaire, ticket, validation de quel responsable |
| **Délai** | En combien de temps livré ? (engagement) |
| **Disponibilité** | Quelles plages et quel taux ? |
| **Prérequis et contraintes** | Ce que l'utilisateur doit fournir ou respecter |
| **Coût** | Gratuit pour le service demandeur ? facturé ? |
| **Propriétaire** | Qui est responsable du service ? |
| **Support** | Qui contacter en cas de problème ? |

Une fiche utile est **courte**, rédigée du point de vue de l'utilisateur et **à jour**. Une fiche qui promet ce qu'on ne peut pas tenir est pire que pas de fiche.

## 3. Demande, incident, changement

| Type | Définition | Exemple |
|---|---|---|
| **Demande** | Besoin **prévu** dans le catalogue | Créer le compte d'un nouvel agent |
| **Incident** | Interruption ou dégradation d'un service **en production** | L'imprimante ne fonctionne plus |
| **Changement** | Modification planifiée d'un service ou de son environnement | Passer le portail en version 1.1 (S10) |

Le traitement diffère : une demande suit un **processus connu** ; un incident se **diagnostique** et se **résout vite** ; un changement se **prépare**, se **valide** et se **tient prêt à annuler** (voir la gestion des changements de première année).

## 4. S'engager : le niveau de service

Un **engagement de niveau de service** (SLA, *service level agreement*) est un accord écrit entre le service informatique et ses clients sur la qualité attendue : **délai de traitement**, **taux de disponibilité**, plages de service.

**Disponibilité.** Le taux de disponibilité d'une période est la part du temps où le service est utilisable. Sur un mois de 30 jours (43 200 minutes) :

| Taux | Indisponibilité tolérée |
|---|---|
| 99 % | 1 % de 43 200 = **432 minutes**, soit 7 h 12 |
| 99,5 % | 0,5 % de 43 200 = **216 minutes**, soit 3 h 36 |
| 99,9 % | 0,1 % de 43 200 = **43,2 minutes** |

**Services enchaînés.** Si le portail dépend d'un hébergeur à 99,9 % **et** de son propre serveur à 99,5 %, le service rendu ne peut pas dépasser le **produit** : 0,999 × 0,995 = 0,994005, soit **99,40 %** ; l'indisponibilité tolérée monte à 0,5995 % de 43 200 = **259 minutes** environ. On ne promet pas plus que le maillon le plus faible permet.

**Maintenance planifiée.** On l'exclut en général du calcul, à condition de l'avoir **annoncée** à l'avance.

> [!NOTE]
> **Mesurer avant de promettre.** Un engagement n'a de valeur que s'il est **mesuré**. Avant de promettre « 8 heures pour un compte », on regarde ce que l'équipe tient **aujourd'hui** (tickets des derniers mois). On promet ce qu'on peut tenir, puis on améliore.

## 5. Les indicateurs du catalogue

| Indicateur | Calcul | Piège |
|---|---|---|
| **Volume** | Nombre de tickets par service | Un service très demandé peut mériter d'être automatisé |
| **Délai moyen** | Somme des délais / nombre de tickets | La moyenne **cache** les dépassements : un mélange de 1 h et de 20 h donne 10 h |
| **Taux de respect** | Tickets dans le délai / total | C'est l'indicateur de l'**engagement** |
| **Dépassements** | Tickets hors délai par service | Permet de **prioriser** |
| **Satisfaction** | Note donnée par l'utilisateur à la clôture | Demande un échantillon suffisant |

**Prioriser (principe de Pareto).** Une petite partie des services concentre souvent la majorité des dépassements : on commence par là.

## 6. Mettre un service à disposition

Livrer un service ne suffit pas : il faut qu'il soit **utilisable et soutenu**. Liste de contrôle avant ouverture :

| Étape | Contrôle |
|---|---|
| **Recette** | Validée par le commanditaire (S05) |
| **Accès et droits** | Comptes, groupes, droits minimaux ; mots de passe initiaux changés |
| **Documentation** | Guide utilisateur court, fiche d'exploitation pour l'équipe |
| **Formation** | Séances ou tutoriels pour les utilisateurs clés |
| **Support** | Qui répond, comment, à quelle priorité ; fiche de catalogue publiée |
| **Supervision et sauvegarde** | Mises en place **avant** l'ouverture |
| **Communication** | Annonce, date d'ouverture, interlocuteur |
| **Retour d'expérience** | Revue à trois mois : usage, incidents, satisfaction |

Et à la fin de vie : **annonce**, migration, **suppression des accès et des données** conformément aux durées prévues (S12), mise à jour du catalogue.

**Je vérifie.** Le délai moyen de traitement d'un service est de 8 h pour un engagement de 8 h. Peut-on dire que l'engagement est tenu ?

<details markdown="1">
<summary>Voir la réponse</summary>

Non : une moyenne égale à l'engagement signifie que **la moitié environ** des tickets le dépassent (si les délais se répartissent autour de la moyenne). L'indicateur de l'engagement est le **taux de respect**.
</details>

## Ce que tu dois retenir de la séance

- Un **catalogue** décrit, pour l'utilisateur, ce qu'on peut demander, en combien de temps et à qui.
- **Demande**, **incident**, **changement** : trois traitements différents.
- **Disponibilité** : 99 % = 7 h 12 par mois ; 99,5 % = 3 h 36 ; 99,9 % = 43 minutes ; des services **enchaînés** se multiplient.
- **Mesurer avant de promettre** ; suivre le **taux de respect**, pas seulement la moyenne ; **prioriser** là où se concentrent les dépassements.
- **Mettre à disposition**, c'est accès, documentation, formation, support, supervision, communication, bilan.
