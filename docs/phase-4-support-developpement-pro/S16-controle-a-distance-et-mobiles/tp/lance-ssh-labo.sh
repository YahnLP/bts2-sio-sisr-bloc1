#!/bin/sh
# Serveur SSH de laboratoire sur 127.0.0.1, port 2222, authentification par clé uniquement.
# À lancer depuis un dossier PRIVÉ de votre répertoire personnel (pas /tmp) : sshd refuse
# une clé autorisée dont le chemin traverse un dossier ouvert en écriture à tous.
# Arrêt : Ctrl+C.
set -e
D="$(pwd)"
[ -f "$D/hote_cle" ] || ssh-keygen -q -t ed25519 -N "" -f "$D/hote_cle"
[ -f "$D/cle_technicien" ] || ssh-keygen -q -t ed25519 -N "" -f "$D/cle_technicien"
cp "$D/cle_technicien.pub" "$D/authorized_keys"
chmod 600 "$D/hote_cle" "$D/cle_technicien" "$D/authorized_keys"
cat > "$D/sshd_labo.conf" <<CONF
Port 2222
ListenAddress 127.0.0.1
HostKey $D/hote_cle
PidFile $D/sshd.pid
AuthorizedKeysFile $D/authorized_keys
PubkeyAuthentication yes
PasswordAuthentication no
KbdInteractiveAuthentication no
PermitRootLogin prohibit-password
AllowTcpForwarding yes
LogLevel VERBOSE
CONF
/usr/sbin/sshd -t -f "$D/sshd_labo.conf"
echo "Serveur SSH de laboratoire sur 127.0.0.1:2222 (Ctrl+C pour arrêter)"
exec /usr/sbin/sshd -D -e -f "$D/sshd_labo.conf"
