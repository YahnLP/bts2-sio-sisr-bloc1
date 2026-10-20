# Aide-mémoire – Accès à distance

*BTS SIO SISR 2e année – Bloc 1 – S16*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Choisir

**Assistance** : outil avec accord, ticket. **Administration** : SSH/RDP via VPN ou bastion. **Interface non exposée** : tunnel.

## SSH

`ssh-keygen -t ed25519` · clé publique dans `authorized_keys` · `ssh-keygen -l -f hote_cle.pub` (empreinte) · `/usr/sbin/sshd -t -f conf` avant tout rechargement · `PasswordAuthentication no`.

## Tunnel

`ssh -f -N -p 2222 -i cle -L 8080:127.0.0.1:8001 utilisateur@serveur`

## Pièges

Dossier de clés ouvert à tous (`/tmp`) refusé · empreinte acceptée sans lecture · RDP/VNC exposés · accès permanent sans décision.

## Assistance

Accord · annonce · périmètre · rien d'inutile ouvert · ticket · fin propre.

## Mobile perdu

Verrouiller · effacer (sélectif si personnel, complet si commune) · changer les mots de passe · prévenir le délégué si données personnelles.
