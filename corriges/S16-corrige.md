# Corrigé S16 – Assister et administrer à distance

*Réservé à l'enseignant. Serveur SSH de laboratoire, ​accès par clé, refus des mots de passe, tunnel, journal et `sshd -t` **exécutés**.*

## Partie A

| N° | Outil | Avant | À ne pas faire |
|---|---|---|---|
| 1 | Outil d'assistance avec accord (ou bureau à distance via VPN) | Ticket, identité vérifiée, accord de l'agente | Ouvrir ses courriels ou documents personnels |
| 2 | SSH (ou RDP) | VPN ou bastion, clé ou authentification forte, journal | Exposer le service sur ​Internet |
| 3 | Tunnel SSH | Accès SSH au serveur en place | Ouvrir le port de la console au monde |
| 4 | Refus d'un accès permanent exposé | Proposer VPN et assistance sur demande, ​décision de la direction | Installer un accès « sans surveillance » sans information |
| 5 | Compte nominatif temporaire | Périmètre, durée, journalisation, contrat | Donner un compte d'administrateur partagé ou permanent |

## Partie B

Empreinte : `ssh-keygen -l -f hote_cle.pub` donne une ligne `256 SHA256:… (ED25519)` ; la valeur est propre à chaque exécution. À la ​première connexion, `ssh` affiche la même empreinte. Mot de passe : `Permission denied (publickey).` Autre clé : `Permission denied (publickey).` Journal (extraits observés) : `Accepted key ED25519 SHA256:… found at …/authorized_keys:1`, `Accepted publickey for … from 127.0.0.1 port … ssh2`, `Failed publickey for … from 127.0.0.1 port … ssh2`.

## Partie C

`/usr/sbin/sshd -t -f …/erreur.conf` : `line 7: Bad configuration option: PasswordAuthentification`, puis `terminating, 1 bad configuration options`, code de retour **255**. Tester avant de recharger évite de **couper l'accès** : un serveur distant avec une ​configuration invalide qui ne redémarre pas devient injoignable. Chemin dans `/tmp` : `Authentication refused: bad ownership or modes for directory /tmp` (règle de permissions : le chemin d'un fichier de clés ne doit pas être modifiable par d'autres utilisateurs).

## Partie D

Avant le tunnel : code `000` (rien n'écoute sur 8080). Après : `console d'administration`. Le tunnel est fermé en arrêtant le processus `ssh` (par ​exemple `pkill -x ssh` si c'est le seul), le serveur Python avec Ctrl+C.

## Partie E

**E1** (exemple). 1) Ticket obligatoire. 2) Identité de l'appelant vérifiée (rappel au numéro de l'annuaire). 3) L'utilisateur lance la session ou donne son accord explicite. 4) Annonce de l'action et de sa durée. 5) Périmètre limité au ticket. 6) Notes dans le ticket (durée, actions). 7) Fin de session ​confirmée avec l'utilisateur, outils temporaires retirés. Interdits : ouvrir des documents ou courriels non nécessaires ; intervenir sans accord ; conserver un ​accès après la clôture.

**E2.** 1) Prendre l'appel, noter l'heure (8 h 40), confirmer l'identité. 2) **Verrouiller** le profil professionnel / l'appareil depuis la console de gestion. 3) **Effacer sélectivement** le profil professionnel (appareil personnel : on ne touche pas aux ​données personnelles). 4) **Changer le mot de passe** du compte et révoquer les sessions. 5) **Informer** le délégué à la protection des données si des données personnelles de la mairie étaient accessibles ; ouvrir un ticket. Appareil de la ​commune : effacement **complet** et déclaration de perte ou de vol selon la procédure interne.

**E3** (exemple) : propriétaire (commune ou personnel), modèle, système et version, numéro de série ou identifiant, utilisateur, date d'inscription, état de conformité.

## Bilan de compétences

Auto-évaluation ; B1.1, B1.2 et B1.5 proposées, à valider.
