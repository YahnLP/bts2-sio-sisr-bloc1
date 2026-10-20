# S16 – Prise de contrôle à distance et terminaux mobiles

| Élément | Détail |
|---|---|
| **Niveau** | BTS SIO option SISR, 2e année – bloc 1 |
| **Séance** | S16 (séance 16 sur 19) – Phase 4 |
| **Durée** | 4 heures |
| **Prérequis** | Réseau et Linux de première année, S11 (DNS, HTTPS) ; BYOD et MDM vus en bloc 3 |
| **Matériel** | Un poste Linux avec `ssh`, `ssh-keygen` et le serveur OpenSSH (`/usr/sbin/sshd`), Python 3, `curl` |
| **Compétences travaillées** | B1.2 · B1.5 · B1.1 (voir [le référentiel](../../ressources/referentiel.md)) |

> [!NOTE]
> **Question qui guide la séance :** *« Comment aider un utilisateur ou administrer un serveur à distance sans ouvrir une porte aux attaquants ni se passer de son accord ? »*

> [!NOTE]
> **Recoupement avec d'autres séances.** Les terminaux mobiles et le BYOD sont déjà abordés en 1re année en [bloc 1 (1re année), S16 – Travail collaboratif : wiki, Git et terminaux mobiles](https://yahnlp.github.io/bts1-sio-sisr-bloc1/phase-4-projet-epreuve/S16-travail-collaboratif/) et [bloc 3 (1re année), S13 – VPN : protéger les échanges entre sites et utilisateurs nomades](https://yahnlp.github.io/bts1-sio-sisr-bloc3/phase-3-chiffrement-reseau/S13-vpn-wireguard/). Ici, partir de ces notions pour le côté support.

## Objectifs

À la fin de la séance, l'étudiant est capable de :

1. **Choisir** l'outil d'accès à distance adapté à un besoin (assistance, administration, tunnel)
2. **Configurer** un accès SSH par clé et en **vérifier** le fonctionnement et le journal
3. **Tester** une configuration avant de la recharger (`sshd -t`)
4. **Utiliser** un tunnel SSH pour joindre une interface non exposée
5. **Rédiger** une procédure d'assistance à distance qui respecte le consentement et la traçabilité
6. **Décider** de la réponse à la perte d'un terminal mobile (verrouillage, effacement sélectif ou complet)

## Contenu de la séance

| Document | Rôle |
|---|---|
| [Cours – Accès à distance et terminaux mobiles](01-cours.md) | Cours |
| [TP – Assister et administrer à distance](02-tp.md) | TP |
| [Script du serveur SSH de laboratoire](tp/lance-ssh-labo.sh) | Script |
| [Aide-mémoire – Accès à distance](03-aide-memoire.md) | Aide-mémoire |

## Déroulé conseillé (4 h)

| Durée | Activité | Format |
|---|---|---|
| 0 h 00 – 0 h 15 | **Accroche** : « un agent appelle : son poste est bloqué, il est en télétravail » | Oral |
| 0 h 15 – 1 h 00 | **Cours** | Cours et questions |
| 1 h 00 – 4 h 00 | **TP**, parties A à E, puis bilan | Binôme |

## Retour en entreprise

Si ta situation le permet : **observer** comment ton entreprise traite le sujet de la séance, **documenter** en une demi-page l'écart avec le TP, ou **réaliser** une partie après accord de ton tuteur. Voir [Transfert en entreprise](../../ressources/transfert-entreprise.md). Le travail réalisé peut alimenter une [fiche de réalisation](../../ressources/fiche-realisation-professionnelle.md).

## Évaluation

- Compte rendu du TP (décisions, sorties de commandes, procédure rédigée), nommé `RENDU-B1A2-S16-NOM.pdf`.
- Bilan de compétences rempli en fin de séance (individuel).

<details markdown="1">
<summary>Notes pour l'enseignant</summary>

- **Compétences :** codes relus sur le référentiel.
- Le script du serveur SSH de laboratoire, l'accès par clé, le refus d'un mot de passe ou d'une autre clé, le tunnel `-L` vers un petit serveur web local, la lecture du journal (`Accepted publickey`, `Failed publickey`) et l'échec de `sshd -t` sur une option mal orthographiée ont été **exécutés**. Le serveur écoute uniquement sur 127.0.0.1:2222. Le script a été essayé avec le compte administrateur **et** avec un utilisateur ordinaire (cas des postes d'étudiants).
- **Piège testé :** `sshd` refuse une clé autorisée dont le chemin traverse un dossier ouvert en écriture à tous (par exemple `/tmp`) : message « bad ownership or modes for directory ». Il faut travailler dans un dossier privé du répertoire personnel. Il faut aussi lancer `sshd` par son **chemin absolu** (`/usr/sbin/sshd`).
- Le TP est fait **sur un seul poste** (client et serveur sur la même machine) : on ne teste ni pare-feu ni réseau réel. Les outils d'assistance à distance (partage d'écran avec accord) et les consoles de gestion des mobiles dépendent des produits : le TP les traite par la **procédure** et la **décision**, pas par une manipulation.
- Selon le poste, le serveur OpenSSH peut devoir être installé (paquet `openssh-server`). En machine virtuelle, prévoir cette installation avant la séance.
- Le cadre juridique de l'accès à distance et du contrôle des salariés est **à vérifier** auprès de la direction et du délégué à la protection des données ; le TP en pose les principes sans citer de texte.
- Le détail technique des mobiles (profil professionnel, MDM) a été vu en bloc 3 ; cette séance l'aborde du **côté du support**.

</details>
