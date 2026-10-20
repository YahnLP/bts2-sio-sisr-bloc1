# S11 – Nom de domaine, hébergement et HTTPS

| Élément | Détail |
|---|---|
| **Niveau** | BTS SIO option SISR, 2e année – bloc 1 |
| **Séance** | S11 (séance 11 sur 19) – Phase 3 |
| **Durée** | 4 heures |
| **Prérequis** | S06 à S10 (le portail), notions de DNS de première année |
| **Matériel** | Un poste Linux avec `named-checkzone`, `dig` (paquets BIND) et `openssl` |
| **Compétences travaillées** | B1.3 · B1.5 (voir [le référentiel](../../ressources/referentiel.md)) |

> [!NOTE]
> **Question qui guide la séance :** *« Le portail est prêt : comment le rendre joignable sous un nom de la commune, chez un hébergeur choisi, en HTTPS, et comment migrer sans coupure ? »*

## Objectifs

À la fin de la séance, l'étudiant est capable de :

1. **Lire** une zone DNS et dire ce que chaque enregistrement fait
2. **Détecter** et corriger les erreurs d'une zone avec `named-checkzone`
3. **Interroger** un serveur DNS avec `dig` et interpréter la réponse
4. **Planifier** un changement d'adresse en jouant sur la durée de vie (TTL)
5. **Comparer** des offres d'hébergement sur le coût sur trois ans et sur des critères non financiers
6. **Contrôler** un certificat HTTPS (validité, noms couverts) et expliquer le renouvellement automatique

## Contenu de la séance

| Document | Rôle |
|---|---|
| [Cours – Domaine, hébergement, HTTPS](01-cours.md) | Cours |
| [TP – Mettre le portail en ligne](02-tp.md) | TP |
| [Zone de référence](tp/bellevigne.example.db) | Fichier |
| [Zone à corriger](tp/zone-erronee.db) | Fichier |
| [Script du serveur DNS de laboratoire](tp/lance-dns-labo.sh) | Script |
| [Aide-mémoire – DNS et HTTPS](03-aide-memoire.md) | Aide-mémoire |

## Déroulé conseillé (4 h)

| Durée | Activité | Format |
|---|---|---|
| 0 h 00 – 0 h 15 | **Accroche** : « que se passe-t-il quand on tape portail.bellevigne.example ? » | Oral |
| 0 h 15 – 1 h 15 | **Cours** | Cours et questions |
| 1 h 15 – 4 h 00 | **TP**, parties A à E, puis bilan | Binôme |

## Retour en entreprise

Si ta situation le permet : **observer** comment ton entreprise traite le sujet de la séance, **documenter** en une demi-page l'écart avec le TP, ou **réaliser** une partie après accord de ton tuteur. Voir [Transfert en entreprise](../../ressources/transfert-entreprise.md). Le travail réalisé peut alimenter une [fiche de réalisation](../../ressources/fiche-realisation-professionnelle.md).

## Évaluation

- Compte rendu du TP (réponses, sorties de commandes, tableau comparatif), nommé `RENDU-B1A2-S11-NOM.pdf`.
- Bilan de compétences rempli en fin de séance (individuel).

<details markdown="1">
<summary>Notes pour l'enseignant</summary>

- **Compétences :** codes relus sur le référentiel.
- La zone de référence passe `named-checkzone` ; elle a été **servie par BIND** sur 127.0.0.1, port 5353, et interrogée avec `dig` (MX, A, CNAME, TXT, NXDOMAIN) : les réponses attendues sont celles observées. La zone erronée produit bien les trois messages d'erreur annoncés.
- Le script `lance-dns-labo.sh` écrit une configuration dans le dossier courant et lance `named` au premier plan ; il ne touche à aucun vrai nom de domaine. Des avertissements sur la racine (« insecurity proof failed… ») peuvent s'afficher : ils sont sans importance pour le TP, le serveur n'étant pas récursif.
- Les tarifs d'hébergement du TP sont **fictifs**. Les durées de certificats Let's Encrypt (90 jours aujourd'hui, 45 jours annoncés à terme) sont à **revérifier** avant la séance sur le site de l'autorité.
- Domaines et adresses : `bellevigne.example` et `203.0.113.0/24` (réservés à la documentation). Aucune adresse réelle.

</details>
