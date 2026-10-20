# Cours – Prise de contrôle à distance et terminaux mobiles

*BTS SIO SISR 2e année – Bloc 1 – S16*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Le cas : portail de réservation de salles de la mairie de Bellevigne

> **Situation (fictive).** La mairie de Bellevigne compte **35 agents** et six salles communales (salle des fêtes, salle du conseil, deux salles d'associations, gymnase, salle d'exposition). Les réservations se font par téléphone et dans un tableur partagé : **deux à trois doublons par mois**, des associations qui ne savent pas si une salle est libre, et un agent d'accueil qui passe plusieurs heures par semaine à répondre. La secrétaire générale souhaite un **portail de réservation en ligne**, ouvert aux associations et aux agents, avec un budget de **9 000 €** et une ouverture **dans quatre mois**. L'informatique est assurée par un technicien à mi-temps (toi, dans ce cas) et un prestataire pour l'hébergement.

Les 35 agents ne sont pas tous dans le bâtiment : certains travaillent à la médiathèque, aux ateliers municipaux, parfois chez eux. Le technicien à mi-temps ne peut pas se déplacer à chaque demande. **Intervenir à distance** gagne du temps, mais ouvre aussi une porte. Cette séance apprend à le faire **proprement**.

---

## 1. Deux usages à ne pas confondre

| | **Assistance à un utilisateur** | **Administration d'un serveur** |
|---|---|---|
| Qui est présent ? | L'utilisateur, devant son poste | Personne : le serveur tourne seul |
| Ce qu'on fait | On voit ou on pilote **sa session** pour comprendre et corriger | On ouvre **sa propre session** d'administration |
| Outils typiques | Partage d'écran avec accord, bureau à distance | **SSH**, bureau à distance (RDP) vers un serveur |
| Point sensible | **Consentement**, vie privée de l'utilisateur | **Authentification**, exposition réseau, journalisation |

## 2. Les protocoles à connaître

| Protocole | Usage | Port habituel | Remarques |
|---|---|---|---|
| **SSH** | Ligne de commande chiffrée, transfert de fichiers, tunnels | 22 | Authentification par **clé** recommandée |
| **RDP** | Bureau à distance Windows | 3389 | Activer l'authentification au niveau du réseau ; **ne jamais l'exposer directement** sur Internet |
| **VNC** | Partage d'écran | 5900 | Pas de chiffrement fiable par défaut : à faire passer dans un **tunnel** ou un VPN |
| **Outil d'assistance** (produit) | Prise en main ponctuelle avec accord | Selon produit | Passe par un relais ; contrôler où sont les données et qui peut se connecter |

**Règle d'or :** un accès d'administration n'est **pas publié** sur Internet. On y accède par un **VPN**, un **bastion** (serveur d'entrée surveillé) ou, au minimum, avec une authentification forte et des règles de filtrage strictes.

## 3. SSH en pratique

**Authentification par clé.** On crée une paire de clés : une **clé privée** (reste chez le technicien, protégée par une phrase secrète) et une **clé publique** (copiée sur le serveur, dans `authorized_keys`). Le serveur reconnaît la clé sans qu'aucun mot de passe ne transite.

```
ssh-keygen -t ed25519 -f cle_technicien
```

**Première connexion et empreinte.** Le client affiche l'**empreinte** de la clé du serveur et demande confirmation. Il faut **comparer** avec l'empreinte donnée par l'administrateur du serveur (`ssh-keygen -l -f hote_cle.pub`). Accepter sans lire permet une attaque par interposition. Si l'empreinte **change** plus tard, le client alerte : il faut comprendre pourquoi (réinstallation ? attaque ?) avant de continuer.

**Durcissement minimal du serveur** (`sshd_config`) :

| Option | Valeur | Effet |
|---|---|---|
| `PasswordAuthentication` | `no` | Pas de mot de passe : plus de devinette par force brute |
| `PermitRootLogin` | `prohibit-password` ou `no` | Pas de connexion directe en administrateur par mot de passe |
| `PubkeyAuthentication` | `yes` | Clés acceptées |
| `ListenAddress` | adresse précise | Écoute limitée à l'interface nécessaire |
| `AllowUsers` | liste | Seuls ces comptes peuvent se connecter |
| `LogLevel` | `VERBOSE` | Journal précis : clé utilisée, échecs |

**Toujours tester avant de recharger** : `sshd -t -f fichier` signale une erreur de syntaxe. Un fichier cassé rechargé sur un serveur distant peut **couper l'accès** sans moyen de revenir : on garde une session ouverte pendant le test.

**Tunnel (redirection de port).** `ssh -L 8080:127.0.0.1:8001 serveur` ouvre sur ton poste le port 8080 qui aboutit, **par le tunnel chiffré**, au port 8001 *vu du serveur*. Utile pour joindre une console d'administration qui n'écoute que sur le serveur lui-même, sans l'exposer.

**Journaux.** Sur le serveur, on lit qui s'est connecté : `Accepted publickey for … ` (succès) et `Failed publickey for … ` (échec). Un grand nombre d'échecs venant de la même adresse signale une tentative d'intrusion : on peut bloquer automatiquement l'adresse concernée (outil de type `fail2ban`, règles du pare-feu).

## 4. Le cadre humain de l'assistance à distance

Prendre la main sur le poste d'un agent, c'est voir **son écran, ses courriels, ses documents**. Quelques règles :

1. **Demander l'accord** : l'utilisateur lance lui-même la session ou donne son accord explicite à chaque connexion.
2. **Annoncer** ce qu'on va faire et **rester dans le périmètre** du ticket.
3. **Ne pas ouvrir** ce qui n'est pas nécessaire (courriels, documents personnels).
4. **Garder une trace** : ticket (qui, quand, quoi, durée).
5. **Terminer proprement** : fermer la session, vérifier avec l'utilisateur, retirer les outils temporaires.
6. **Pas d'accès permanent sans accord** : un accès « sans surveillance » (poste verrouillé) ne se déploie que sur décision de la direction, avec information des agents.

La charte informatique de la commune fixe ces règles ; le contrôle de l'activité des agents est encadré (**à vérifier** avec la direction et le délégué à la protection des données).

## 5. Les terminaux mobiles, côté support

Les principes techniques (profil professionnel, gestion des appareils) ont été vus en bloc 3. Le **support** doit savoir :

| Situation | Question à se poser | Réponse type |
|---|---|---|
| **Nouveau mobile** | Appareil de la commune ou personnel ? | Inscription à la gestion des appareils ; profil professionnel séparé pour l'appareil personnel |
| **Application professionnelle ne démarre pas** | Appareil conforme (version, chiffrement) ? | Corriger la conformité, pas contourner |
| **Perte ou vol** | Données professionnelles accessibles ? | **Verrouiller** puis **effacer** : sélectivement le profil professionnel pour un appareil personnel, entièrement pour un appareil de la commune ; **changer les mots de passe** ; informer le délégué si des données personnelles sont concernées |
| **Départ d'un agent** | Que reste-t-il sur l'appareil ? | Retrait du profil professionnel, récupération de l'appareil de la commune |
| **Assistance à distance sur un mobile personnel** | Est-ce nécessaire et permis ? | Limiter à l'application professionnelle ; ne pas accéder aux données personnelles |

L'**inventaire** (B1.1) doit inclure les mobiles : modèle, système, propriétaire, date d'inscription.

**Je vérifie.** Un agent te demande d'ouvrir le port 3389 de son poste sur la box de son domicile « pour que tu puisses dépanner quand tu veux ». Que réponds-tu ?

<details markdown="1">
<summary>Voir la réponse</summary>

Non : exposer RDP sur Internet est une cause majeure d'intrusions. On passe par un VPN ou un outil d'assistance avec accord, et l'accès permanent n'est possible que sur décision de la direction avec information de l'agent.
</details>

## Ce que tu dois retenir de la séance

- **Assistance** (avec l'utilisateur) et **administration** (serveur) n'ont pas les mêmes risques ni les mêmes outils.
- **SSH par clé**, mot de passe désactivé, `sshd -t` avant rechargement, **empreinte vérifiée**, journal lu.
- **Jamais d'administration exposée** sur Internet : VPN, bastion, tunnel.
- **Assistance à distance** : accord, annonce, périmètre, trace, fin propre.
- **Mobile perdu** : verrouiller, effacer (sélectivement ou non), changer les secrets, prévenir.
