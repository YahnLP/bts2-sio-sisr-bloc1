#!/bin/sh
# Lance un serveur DNS de laboratoire (BIND) sur 127.0.0.1, port 5353,
# qui publie la zone bellevigne.example.db du dossier courant.
# Arrêt : Ctrl+C. Aucun accès à un vrai nom de domaine.
set -e
D="$(pwd)"
cat > "$D/named-labo.conf" <<CONF
options {
  directory "$D";
  listen-on port 5353 { 127.0.0.1; };
  listen-on-v6 { none; };
  recursion no;
  pid-file "$D/named-labo.pid";
  session-keyfile "$D/session-labo.key";
};
zone "bellevigne.example" { type primary; file "bellevigne.example.db"; };
CONF
named-checkconf "$D/named-labo.conf"
echo "Serveur de laboratoire sur 127.0.0.1:5353 (Ctrl+C pour arrêter)"
exec named -g -c "$D/named-labo.conf"
