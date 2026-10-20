# S12 – Mentions légales, cookies et protection des données

| Élément | Détail |
|---|---|
| **Niveau** | BTS SIO option SISR, 2e année – bloc 1 |
| **Séance** | S12 (séance 12 sur 19) – Phase 3 |
| **Durée** | 4 heures |
| **Prérequis** | S06 à S09, S11 ; RGPD vu en première année (bloc 1 et bloc 3) |
| **Matériel** | Node.js avec le module `jsdom`, un éditeur |
| **Compétences travaillées** | B1.3 (voir [le référentiel](../../ressources/referentiel.md)) |

> [!NOTE]
> **Question qui guide la séance :** *« Le portail collecte des noms, des courriels et dépose peut-être des traceurs : que doit-on afficher, demander, conserver et pouvoir effacer ? »*

## Objectifs

À la fin de la séance, l'étudiant est capable de :

1. **Dresser** l'inventaire des cookies et traceurs d'un site et **classer** ceux qui exigent un consentement
2. **Repérer** les défauts d'un bandeau de consentement
3. **Vérifier** par un test automatique qu'un contenu tiers ne se charge qu'après accord
4. **Rédiger** les rubriques des mentions légales et de la politique de confidentialité
5. **Renseigner** une ligne de registre de traitement
6. **Réagir** à une demande de droit d'une personne et à une fuite de données

## Contenu de la séance

| Document | Rôle |
|---|---|
| [Cours – Cookies, consentement, mentions légales, RGPD](01-cours.md) | Cours |
| [TP – Mettre le portail en conformité](02-tp.md) | TP |
| [Bandeau conforme (JavaScript)](tp/consentement.js) | Fichier |
| [Fragment HTML du bandeau](tp/consentement_fragment.html) | Fichier |
| [Test automatique du bandeau](tp/test_consent.js) | Fichier |
| [Bandeau à critiquer](tp/bandeau_non_conforme.html) | Fichier |
| [Aide-mémoire – Conformité du site](03-aide-memoire.md) | Aide-mémoire |

## Déroulé conseillé (4 h)

| Durée | Activité | Format |
|---|---|---|
| 0 h 00 – 0 h 15 | **Accroche** : « combien de cookies dépose votre site préféré avant que vous ayez rien choisi ? » | Oral |
| 0 h 15 – 1 h 15 | **Cours** | Cours et questions |
| 1 h 15 – 4 h 00 | **TP**, parties A à E, puis bilan | Binôme |

## Retour en entreprise

Si ta situation le permet : **observer** comment ton entreprise traite le sujet de la séance, **documenter** en une demi-page l'écart avec le TP, ou **réaliser** une partie après accord de ton tuteur. Voir [Transfert en entreprise](../../ressources/transfert-entreprise.md). Le travail réalisé peut alimenter une [fiche de réalisation](../../ressources/fiche-realisation-professionnelle.md).

## Évaluation

- Compte rendu du TP (inventaire, critique du bandeau, rubriques rédigées, ligne de registre), nommé `RENDU-B1A2-S12-NOM.pdf`.
- Bilan de compétences rempli en fin de séance (individuel).

<details markdown="1">
<summary>Notes pour l'enseignant</summary>

- **Compétences :** codes relus sur le référentiel ; le choix des compétences pour cette séance est une proposition **à valider**.
- **Contenu juridique : à vérifier.** Le cours reprend la doctrine de la CNIL sur les cookies et les grandes lignes du RGPD, relues sur le site de la CNIL. Les références précises (articles, délais, durées de conservation) sont **à revérifier** sur Légifrance et cnil.fr avant la séance : les règles évoluent et ce support ne remplace pas un avis du délégué à la protection des données.
- Le bandeau de référence et son test ont été **exécutés** avec `jsdom` : aucune carte avant le choix, chargement après acceptation, retrait après « Gérer mes choix », respect d'un refus, mémorisation du choix. Les boutons Accepter et Refuser sont de même niveau.
- Le bandeau à critiquer cumule volontairement plusieurs défauts (acceptation implicite, refus caché, traceur déposé avant tout choix, carte chargée d'emblée, pas de retrait).
- Les durées de conservation proposées sont des **propositions pédagogiques** à faire valider par le délégué à la protection des données de la commune dans le cas réel.
- La commune est un **organisme public** : la base légale de la plupart des traitements est la mission d'intérêt public, pas le consentement. Le consentement concerne surtout les traceurs non exemptés.

</details>
