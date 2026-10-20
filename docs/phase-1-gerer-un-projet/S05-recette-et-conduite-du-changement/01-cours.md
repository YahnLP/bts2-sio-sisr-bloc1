# Cours – Recette, mise en production et conduite du changement

*BTS SIO SISR 2e année – Bloc 1 – S05*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

Un projet n'est réussi que si le **service est utilisé** et qu'il répond au besoin. Deux étapes finales en décident : la **recette** (le résultat est-il conforme ?) et l'**accompagnement du changement** (les utilisateurs l'adoptent-ils ?).

---

## 1. La recette

La **recette** est la vérification, **avec le client**, que la livraison répond aux exigences du cahier des charges. Elle se prépare **avant** la fin du projet (S17 de première année), pas après.

### Le plan de recette

| Colonne | Contenu |
|---|---|
| **Identifiant** | C01, C02… |
| **Exigence** | Ce qui est vérifié (liée à un récit ou à une exigence) |
| **Scénario** | Les étapes à exécuter |
| **Données de test** | Comptes, jeux de données |
| **Résultat attendu** | Mesurable |
| **Résultat obtenu** | Rempli au moment du test |
| **Verdict** | Réussi, échec |

### Les anomalies

| Gravité | Définition | Exemple |
|---|---|---|
| **Bloquante** | Empêche l'usage principal | Impossible de valider une réservation |
| **Majeure** | Gêne importante, contournement possible | Le courriel de confirmation n'arrive pas |
| **Mineure** | Gêne légère, esthétique | Faute dans un libellé |

### Le procès-verbal de recette

Le **PV de recette** est signé par le client. Trois issues :

- **Recette prononcée** : tout est conforme ;
- **Recette prononcée avec réserves** : des anomalies non bloquantes subsistent, avec un **correctif daté** ;
- **Recette refusée** : au moins une anomalie bloquante ; on corrige et on **recommence**.

La **règle de décision** est fixée **avant** les tests (exemple : aucune anomalie bloquante, au plus deux majeures, chacune avec un correctif daté).

**Je vérifie.** Sur 20 cas de test, 16 sont réussis. Peut-on prononcer la recette ?

<details markdown="1">
<summary>Voir la réponse</summary>

Le **taux de réussite** (80 %) ne suffit pas : c'est la **gravité** des anomalies qui décide. S'il reste 4 anomalies mineures, on prononce la recette avec réserves ; s'il reste une seule anomalie bloquante, on la refuse.
</details>

---

## 2. La mise en production

Passer du test à la production se prépare : **date** et **fenêtre** choisies avec l'activité (pas un lundi matin), **sauvegarde** avant bascule, **liste d'actions** ordonnée, **critères de réussite**, et surtout un **retour arrière** : le moyen de revenir à l'état précédent si la bascule échoue (restauration de la sauvegarde, ancien service conservé). Sans retour arrière, on ne bascule pas. Après la bascule, une période de **soutien renforcé** (quelques jours) traite en priorité les premiers incidents.

---

## 3. La conduite du changement

Les utilisateurs ne changent pas leurs habitudes parce qu'un outil existe. Les **freins** sont connus : peur de ne pas savoir faire, perte de repères, crainte de la surveillance, impression que le nouvel outil complique le travail. La **conduite du changement** prépare l'adoption :

| Levier | Exemple pour le portail |
|---|---|
| **Expliquer le pourquoi** | « Fin des doublons et moins d'appels » |
| **Communiquer au bon moment** | Annonce à J−15, rappel à J−7 et J−1, message le jour J |
| **Former** | Séances par petits groupes (6 agents) ; mode d'emploi d'une page |
| **Soutenir** | Une personne relais, une adresse de contact, une permanence les premiers jours |
| **Garder l'ancien chemin un temps** | Le téléphone reste possible pendant le premier mois |
| **Écouter** | Court questionnaire après deux semaines |

**Exemple de calcul.** 12 agents sont concernés, groupes de 6 maximum, séance de 1 h 30 : 12 / 6 = 2 séances, soit **3 h** de formation à planifier.

## 4. Mesurer l'adoption

On choisit des **indicateurs** avant l'ouverture :

- **taux d'usage** : part des réservations faites en ligne ; exemple : 63 réservations en ligne sur 84 dans le mois = **75 %** ;
- **nombre d'appels** à l'accueil pour réserver ;
- **satisfaction** (note de 1 à 5) ;
- **demandes d'aide** les deux premières semaines.

## 5. Clore le projet

La **clôture** n'est pas l'oubli : **bilan** (objectifs atteints ? budget, délai, qualité ?), **retour d'expérience** (ce qu'on referait, ce qu'on changerait), **documentation** remise à l'exploitation (procédure de sauvegarde, comptes, supervision) et **archivage** du dossier. C'est ce bilan qui améliore le projet suivant.

## Ce que tu dois retenir de la séance

- La **recette** se prépare avant ; la **gravité** des anomalies décide (**bloquante**, **majeure**, **mineure**) ; trois issues du PV.
- **Mise en production** : fenêtre, sauvegarde, liste d'actions, **retour arrière**, soutien renforcé.
- **Conduite du changement** : expliquer, communiquer, former, soutenir, écouter.
- **Mesurer l'adoption** par des indicateurs choisis à l'avance.
- **Clore** : bilan, retour d'expérience, documentation.
