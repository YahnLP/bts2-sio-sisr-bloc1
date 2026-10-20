# Cours – Cookies, consentement, mentions légales et protection des données

*BTS SIO SISR 2e année – Bloc 1 – S12*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Le cas : portail de réservation de salles de la mairie de Bellevigne

> **Situation (fictive).** La mairie de Bellevigne compte **35 agents** et six salles communales (salle des fêtes, salle du conseil, deux salles d'associations, gymnase, salle d'exposition). Les réservations se font par téléphone et dans un tableur partagé : **deux à trois doublons par mois**, des associations qui ne savent pas si une salle est libre, et un agent d'accueil qui passe plusieurs heures par semaine à répondre. La secrétaire générale souhaite un **portail de réservation en ligne**, ouvert aux associations et aux agents, avec un budget de **9 000 €** et une ouverture **dans quatre mois**. L'informatique est assurée par un technicien à mi-temps (toi, dans ce cas) et un prestataire pour l'hébergement.

Un site public affiche des **informations obligatoires**, collecte des **données personnelles** et peut déposer des **traceurs**. L'informaticien n'est pas juriste, mais il doit **savoir ce que fait le site** pour répondre aux questions du délégué à la protection des données.

> [!WARNING]
> **Contenu à vérifier.** Ce cours résume la doctrine de la CNIL et les grands principes du RGPD. Les textes évoluent : **vérifie** sur [cnil.fr](https://www.cnil.fr) et Légifrance avant de t'appuyer sur un détail (durée, article, sanction). En cas de doute dans une situation réelle, on interroge le délégué à la protection des données (DPD ou DPO).

---

## 1. Cookies et traceurs

Un **cookie** est un petit fichier enregistré par le navigateur à la demande d'un site. Plus largement, un **traceur** désigne tout dispositif qui lit ou écrit des informations sur le terminal de l'utilisateur : cookies, stockage local du navigateur, pixels espions, identifiants du terminal.

La règle de la CNIL, issue de la directive « vie privée et communications électroniques » :

- **Avant** de déposer ou lire un traceur, le site doit recueillir le **consentement** de l'utilisateur ;
- **sauf** pour les traceurs **strictement nécessaires** au service demandé ou dont la seule finalité est d'**établir une communication**, qui sont **exemptés**.

| Exemptés (exemples cités par la CNIL) | Soumis au consentement (exemples) |
|---|---|
| Authentification et **session** | Publicité personnalisée |
| Panier d'achat | Partage sur les réseaux sociaux (boutons qui déposent un traceur) |
| Mémorisation du **choix de l'utilisateur** (langue, refus de cookies) | Contenus tiers intégrés qui déposent un traceur (vidéo, carte) |
| Personnalisation de l'interface demandée par l'utilisateur | Mesure d'audience **hors** des conditions d'exemption (voir S13) |
| Répartition de charge | Suivi entre plusieurs sites |

## 2. Un consentement valable

Le consentement est **libre, spécifique, éclairé et univoque**, donné par un **acte positif** :

- **Pas de case pré-cochée**, pas de consentement par simple **poursuite de la navigation** ;
- **Refuser doit être aussi simple qu'accepter** : un bouton « Refuser » au même niveau et d'aspect comparable que « Accepter » ;
- **Aucun traceur soumis à consentement avant le choix** ;
- **Information claire** : qui dépose le traceur, pour quoi faire ;
- **Retrait** : l'utilisateur peut revenir sur son choix **à tout moment**, aussi simplement qu'il l'a donné (lien « Gérer mes choix » toujours accessible) ;
- Le refus ou l'absence de choix ne doit pas empêcher d'utiliser le service principal.

Accepter des conditions générales d'utilisation **n'est pas** un consentement valable aux traceurs.

> [!NOTE]
> **En pratique sur le portail.** La carte du plan d'accès est fournie par un service tiers. Le site n'affiche donc **pas** la carte au chargement : il affiche une zone explicative et un bandeau avec deux boutons de même niveau. La carte n'est chargée qu'après « Accepter ». Le choix est mémorisé localement (c'est un traceur exempté car il sert à respecter le choix) et peut être retiré.

## 3. Mentions légales et information des utilisateurs

Un site doit permettre d'identifier son **éditeur** et son **hébergeur**. Pour un site public, les rubriques habituelles (**à vérifier** sur Légifrance et auprès de la direction) :

| Rubrique | Contenu |
|---|---|
| **Éditeur** | Nom de la collectivité, adresse, téléphone, courriel |
| **Directeur de la publication** | Nom et fonction de la personne responsable du contenu |
| **Hébergeur** | Raison sociale, adresse, téléphone |
| **Protection des données** | Responsable du traitement, **contact du délégué à la protection des données**, lien vers la politique de confidentialité |
| **Accessibilité** | Déclaration d'accessibilité (voir S15) |
| **Propriété** | Conditions de réutilisation des contenus |

Ne **pas inventer** une information (numéro, licence, certification) qu'on ne peut pas justifier : c'est une fausse déclaration. Une rubrique inconnue se **demande** à la direction.

## 4. Les données personnelles et le RGPD

Une **donnée personnelle** est toute information sur une personne **identifiée ou identifiable** : nom, courriel, téléphone, **adresse IP**, identifiant de cookie. Le **règlement général sur la protection des données** (RGPD) impose, pour tout **traitement** :

| Principe | Application au portail |
|---|---|
| **Finalité** déterminée | Les données de réservation servent à gérer la réservation, rien d'autre |
| **Minimisation** | Ne demander que le nécessaire : pas de date de naissance pour réserver une salle |
| **Base légale** | Mission d'intérêt public de la commune ; consentement pour les traceurs non exemptés |
| **Durée de conservation** limitée | Fixée à l'avance, puis suppression ou anonymisation |
| **Sécurité** | Droits d'accès restreints, chiffrement (S11), sauvegardes, journalisation |
| **Transparence** | Information des personnes (politique de confidentialité) |
| **Droits des personnes** | Accès, rectification, effacement, opposition, limitation, portabilité (selon la base légale) |

La commune, **organisme public**, désigne un **délégué à la protection des données** (**à vérifier** : obligation pour les autorités et organismes publics). Elle tient un **registre des traitements** : une ligne par traitement, avec la finalité, les catégories de données, la base légale, les destinataires, la durée de conservation, les mesures de sécurité.

**Droits des personnes.** Une personne peut demander ce que la commune sait d'elle, ou l'effacement de ses données. La réponse est due **sans retard injustifié** et en principe **dans un délai d'un mois** (**à vérifier**). L'administrateur ne répond pas seul : il **transmet** au délégué, **vérifie l'identité** du demandeur et **extrait** ou **supprime** les données selon la décision. Le droit à l'effacement a des **limites** (obligation légale de conserver, mission d'intérêt public) : ce n'est pas à l'administrateur de trancher.

**Violation de données.** Perte, vol, envoi à un mauvais destinataire : c'est une **violation**. Elle est **documentée** en interne ; si elle présente un risque pour les personnes, elle est **notifiée à la CNIL**, en principe **dans les 72 heures** après en avoir pris connaissance (**à vérifier**). L'administrateur **alerte immédiatement** le délégué et la direction, **contient** l'incident et **conserve les traces**.

## 5. Les journaux, aussi des données personnelles

Les journaux d'accès du serveur contiennent des **adresses IP** : ce sont des données personnelles. Il faut en **limiter l'accès**, en **fixer la durée de conservation** avec le délégué (des obligations de conservation peuvent s'appliquer, **à vérifier**) et les **inclure dans le registre**.

**Je vérifie.** Un agent propose d'ajouter un bouton de partage d'un réseau social sur la page des salles. Que doit-on faire avant de l'activer ?

<details markdown="1">
<summary>Voir la réponse</summary>

Savoir si le bouton dépose ou lit un traceur chez le fournisseur : si oui, il est **soumis au consentement** et ne doit se charger qu'après accord (comme la carte). Une alternative sobre est un **simple lien** vers la page, sans code tiers.
</details>

## Ce que tu dois retenir de la séance

- Un traceur non exempté exige un **consentement préalable, libre, éclairé, univoque, retirable** ; **refuser = accepter** en simplicité.
- **Exemptés** : session, choix de l'utilisateur, personnalisation demandée, besoin strict du service.
- **Mentions légales** : éditeur, directeur de publication, hébergeur, contact du délégué ; **rien d'inventé**.
- **RGPD** : finalité, minimisation, base légale, durée, sécurité, droits ; **registre** ; **violation** signalée vite au délégué.
- Les **adresses IP des journaux** sont des données personnelles.
